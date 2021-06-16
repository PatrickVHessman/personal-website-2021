import React from 'react';
import Layout from '../components/layout';
import { Helmet } from "react-helmet"
import {graphql, StaticQuery } from 'gatsby';
import BlogList from '../components/BlogList';

export default () => (
    <Layout>
    <Helmet>
          <meta charSet="utf-8" />
          <title>Blog | Patrick V. Hessman</title>
        </Helmet>
        <StaticQuery
query={graphql`{
  allWordpressPost {
    nodes {
      title
      slug
      id
      featured_media {
        source_url
      }
      excerpt
      date(formatString: "MMM Do YYYY")
    }
  }
}`}
render={props => <BlogList posts={props.allWordpressPost.nodes} postsPerPage={2} source="blogPage" /> } />
    </Layout>
);