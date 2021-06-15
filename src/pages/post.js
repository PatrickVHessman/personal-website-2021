import React from 'react';
import Layout from '../components/layout';
import { Container } from "nes-react";
import { Helmet } from "react-helmet"

export default ({pageContext}) => (
    <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{pageContext.title} | Patrick V. Hessman</title>
        </Helmet>
    <Container dark>
        <h2>{pageContext.title}</h2>
        <small>{pageContext.date}</small>
        <div className="blogPost" dangerouslySetInnerHTML={{__html: pageContext.content}} />
        </Container>
    </Layout>
);