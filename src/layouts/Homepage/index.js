import React from "react"

import ConfigurationsList from "../../components/ConfigurationsList"
import LatestPosts from "../../components/LatestPosts"
import NealPage from "../../components/NealPage"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      <LatestPosts />
      <ConfigurationsList />
      <NealPage />
    </Page>
  )
}

export default Homepage
