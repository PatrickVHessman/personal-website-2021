import React from "react";
import { Container } from "nes-react";
import ResumeItem from "./ResumeItem";
import {graphql, StaticQuery } from 'gatsby';

const Resume = () => {
  return ( <StaticQuery
    query={graphql`{
  allWordpressWpResume {
    nodes {
      acf {
        job_title
        job_duration
        job_location
        job_url
      }
      title
      content
    }
  }
}`}
    render={props => <Container title="Resume" dark>
      <div className="font12">
        {props.allWordpressWpResume.nodes.map((item, index) => {
          return (
            <div className="resumeItems" key={index}>
              <ResumeItem item={item} key={index} />
            </div>
          );
        })}
      </div>
    </Container>} />
  );
};

export default Resume;