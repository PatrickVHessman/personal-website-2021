import React from "react";
import { Container, Button } from "nes-react";
import { scroller } from "react-scroll";

const Nav = () => {
  const scrollTo = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <Container dark title="Navigation" id="navSection">
      <Button
        to="education"
        onClick={() => scrollTo("education")}
        style={{ color: "#212529" }}
      >
        Education
      </Button>
      <Button
        to="skills"
        onClick={() => scrollTo("skills")}
        style={{ color: "#212529" }}
      >
        Skills
      </Button>
      <Button
        to="portfolio"
        onClick={() => scrollTo("portfolio")}
        style={{ color: "#212529" }}
      >
        Portfolio
      </Button>
      <Button
        to="resume"
        onClick={() => scrollTo("resume")}
        style={{ color: "#212529" }}
      >
        Resume
      </Button>
      <Button
        to="blogs"
        onClick={() => scrollTo("blogs")}
        style={{ color: "#212529" }}
      >
        Blog Posts
      </Button>
      <Button
        to="about"
        onClick={() => scrollTo("about")}
        style={{ color: "#212529" }}
      >
        About
      </Button>
      <Button
        to="links"
        onClick={() => scrollTo("links")}
        style={{ color: "#212529" }}
      >
        Links & Contact
      </Button>
      
      <button 
      type="button" 
      className="nes-btn is-error scroll-btn active"
      to="top"
        onClick={() => scrollTo("top")}
      ><span>&lt;</span></button>
    </Container>
  );
};

export default Nav;
