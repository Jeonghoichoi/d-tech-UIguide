import React from "react";
import ReactDOM from "react-dom/client";
// 배포한 패키지를 npm에서 설치한 상태이므로 '@design-guide/ui-guide'로 import 합니다.
// import { Button, Radio } from "@design-guide/ui-guide";

const App: React.FC = () => {
  return (
    <div>
      <h1>UI Guide Example</h1>
      {/* <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
      <br />
      <br />
      <div>
        <Radio name="sample" value="Option 1" />
        <Radio name="sample" value="Option 2" />
      </div> */}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
