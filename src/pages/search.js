import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <h1>Search Page</h1>
    <Search />
  </Layout>
)

export default SearchPage
