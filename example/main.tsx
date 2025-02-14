import React from "react";
import ReactDOM from "react-dom/client";
import { Button, Radio } from "@design-guide/ui-guide";

const App: React.FC = () => {
  return (
    <div>
      <h1>UI Guide Example</h1>
      <Button onClick={() => alert("Button clicked!")} label={"Click Me"} />
      <br />
      <br />
      <div>
        <Radio name="sample" value="Option 1" />
        <Radio name="sample" value="Option 2" />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<App />);
