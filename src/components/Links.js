import React from "react";
import { Container, Icon } from "nes-react";

const Links = () => {
  return (
    <Container dark title="Links & Contact">
      <div
        className="font12"
        style={{ display: "inline", marginRight: "1rem" }}
      >
        <a href="mailto:patrickvhessman@gmail.com">
          <Icon icon="gmail" />
        </a>
      </div>
      <div
        className="font12"
        style={{ display: "inline", marginRight: "1rem" }}
      >
        <a
          href="https://github.com/PatrickVHessman"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="github" />
        </a>
      </div>
      <div className="font12" style={{ display: "inline" }}>
        <a
          href="https://www.linkedin.com/in/patrickvhessman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon="linkedin" />
        </a>
      </div>
    </Container>
  );
};

export default Links;