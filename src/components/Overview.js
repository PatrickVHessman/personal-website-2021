import React from "react";
import { Container } from "nes-react";
import {graphql, StaticQuery } from 'gatsby';

const Overview = () => <StaticQuery
query={graphql`{
  wordpressPage(title: {eq: "Overview"}) {
    content
  }
}`}
render={props => <Container dark>
    <div dangerouslySetInnerHTML={{__html: props.wordpressPage.content}} />
    </Container>}
>

</StaticQuery>

export default Overview;