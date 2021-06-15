import React, { useState } from "react";
import { Container } from "nes-react";
import Col from "./Col";
import Row from "./Row";

import msuLogo from "../images/MSU-horiz.png";
import awsLogo from "../images/aws-logo.png";
import awsCert from "../images/aws-cert.png";

const Education = () => {

  return (
    <Container title="Education and Certifications" dark>
      <div className="font12 educationSection">
        <Row>
          <Col>
            <h5>Montana State University</h5>
            <img src={msuLogo} alt="Montana State University" />
            <p>Bachelor of Arts (B.A.), Film/Video and Photographic Arts</p>
            <p>3.31 GPA, Honors</p>
          </Col>
          <Col>
            <h5>Amazon Web Services (AWS)</h5>
            <img
              src={awsLogo}
              alt="Amazon Web Services Solutions Architect Associate"
            />
            <p>Amazon Web Services Solutions Architect Associate</p>
            <p>
            <a
          href={awsCert}
          target="_blank"
          rel="noopener noreferrer"
        >
                See credential
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Education;