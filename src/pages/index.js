import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>你好呀</h1>
    <h4>欢迎来到我的博客</h4>
    <h3>我就想说下</h3>
    {/* <h1>我喜欢的人儿是康康</h1> */}
    <h1><Link to="/my-blazing-fast-site/page-2/">点开我看~</Link> <br /></h1>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
