import React from "react";
import { Button } from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const EnterButton = () => {
  return (
    <div className="about_page">
      <div>
        <Button content="Assimilate" icon="right arrow" labelPosition="right" />
      </div>
    </div>
  );
};

export default EnterButton;
