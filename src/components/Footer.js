import React from "react";
import { Container } from "nes-react";

const Footer = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <Container dark>
      <p className="font12">
        Powered by{" "}
        <a
          href="https://github.com/jonhermansen/nes-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          nes-react
        </a>
        {" and "}
        <a
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
        .
        {" | "}
        <a
          href="https://github.com/PatrickVHessman/personal-website-2021/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          View site source code
        </a>
      </p>
      <p className="font12">© Copyright {copyrightYear} Patrick Hessman</p>
    </Container>
  );
};

export default Footer;