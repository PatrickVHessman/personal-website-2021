import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "nes-react";

const NotFoundPage = () => (
  <Layout>
  <Container dark>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
