import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>

      <h1 style={{ marginBottom: `var(--space-5)` }}>
        Gatsby starter project
      </h1>

      <form
        action="https://www.google.com/search"
        method="GET"
        target="_blank"
        style={{ marginTop: `var(--space-4)`, marginBottom: `var(--space-5)` }}
      >
        <p>please enter any query and after you click on search button, theme will be changed to default(undefined):</p>
        <input type="text" name="q" placeholder="Google search" autoComplete />
        <button type="submit">Search</button>
      </form>

      <p>the same issue with theme appears when you just use autocomplete without even submitting the form</p>
    </div>
  </Layout>
)

export default IndexPage
