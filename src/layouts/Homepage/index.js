import React from "react"

import ConfigurationsList from "../../components/ConfigurationsList"
import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <LatestPosts />
      <ConfigurationsList />
    </Page>
  )
}

export default Homepage
