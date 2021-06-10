import React from "react";
import { Container } from "nes-react";
import {graphql, StaticQuery } from 'gatsby';

const Skills = () => <StaticQuery
query={graphql`{
  wordpressPage(title: {eq: "Skills"}) {
    content
  }
}`}
render={props => <Container dark title="Skills">
    <div className="font12 col2ListDiv" dangerouslySetInnerHTML={{__html: props.wordpressPage.content}} />
    </Container>}
>

</StaticQuery>

export default Skills;