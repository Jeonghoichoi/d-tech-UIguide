import React from "react";
import ReactDOM from "react-dom/client";
import { Button, Radio } from "@design-guide/ui-guide";

const App: React.FC = () => {
  return (
    <div>
      <h1>컴포넌트 테스팅 페이지</h1>
      <Button label={"Click Me"} />
      <br />
      <br />
      <div>
        <Radio value="Option 1" label={"123"} />
        <Radio value="Option 2" label={"2324"} />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
