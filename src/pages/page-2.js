import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h3>就是就是</h3>
    <h1>我喜欢的人儿是康康</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
