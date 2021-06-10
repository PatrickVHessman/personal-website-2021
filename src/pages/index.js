import React from "react"
// import { Link } from "gatsby"

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


import '../styles.css';

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

    <div name="about" />
    <About />

    <div name="links" />
    <Links />
  </Layout>
)

export default IndexPage
