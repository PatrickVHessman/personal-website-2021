import React from "react"
import {graphql, StaticQuery } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Nav from '../components/Nav';
import Overview from '../components/Overview';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Links from '../components/Links';
import About from '../components/About';
import BlogList from '../components/BlogList';

const IndexPage = () => (
  <Layout className="App">
    <SEO title="Patrick V. Hessman" description="Front End/Full Stack Developer" />

    <Overview />
    <Nav />
    <div name="education" />
    <Education />

    <div name="skills" />
    <Skills />

    <div name="portfolio" />
    <Portfolio />

    <div name="resume" />
    <Resume />

    <div name="blogs" id="blogs" /> 
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
render={props => <BlogList posts={props.allWordpressPost.nodes} postsPerPage={2} source="index" /> } />

    <div name="about" />
    <About />

    <div name="links" />
    <Links />
  </Layout>
)

export default IndexPage
