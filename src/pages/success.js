import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Vous avez acheté une article!</h1>
    <Link to="/">Retourner sur la page principale</Link>
  </Layout>
)

export default SecondPage
