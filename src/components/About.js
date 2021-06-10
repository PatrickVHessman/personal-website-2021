import React from "react";
import { Container } from "nes-react";
import {graphql, StaticQuery } from 'gatsby';
import Row from "./Row";
import Col from "./Col";

const About = () => <StaticQuery
query={graphql`{
  wordpressPage(title: {eq: "About"}) {
    content
    featured_media {
      source_url
    }
  }
}`}
render={props =>
    
    <Container dark title="About">
      <Row className="mobileCollapse">
      <Col>
          <div style={{ textAlign: "center" }}>
            <img
              src={props.wordpressPage.featured_media.source_url}
              className="realPicture"
              alt="Patrick V. Hessman"
            />
          </div>
        </Col>
        <Col>
          
        <div dangerouslySetInnerHTML={{__html: props.wordpressPage.content}} />
        </Col>
        
      </Row>

      
    </Container>
    
    }
>

</StaticQuery>

export default About;