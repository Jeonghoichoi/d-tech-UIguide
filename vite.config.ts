import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: "src/index.ts", // 라이브러리의 진입점
      name: "UiGuide", // UMD 빌드 시 전역 변수명
      fileName: (format) => `ui-guide.${format}.js`,
    },
    rollupOptions: {
      // React와 ReactDOM은 외부 의존성으로 처리합니다.
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
