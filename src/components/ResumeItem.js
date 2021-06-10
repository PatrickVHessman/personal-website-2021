import React from "react";
import Row from "./Row";

const ResumeItem = (props) => {
  return (
    <Row>
      <div style={{ flex: "1", marginBottom: "1rem" }}>
        <h4>
          <a
            href={props.item.acf.job_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.item.title}
          </a>
        </h4>
        <div>{props.item.acf.job_title}</div>
        <div>{props.item.acf.job_location}</div>
        <div>{props.item.acf.job_duration}</div>
      </div>
      <div style={{ flex: "2", marginBottom: "1rem" }}>
        <div dangerouslySetInnerHTML={{__html: props.item.content}} />
      </div>
    </Row>
  );
};

export default ResumeItem;