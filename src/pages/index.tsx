import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Hero from '../components/Hero'
import About from '../components/About'
import { Employment } from '../components/Employment'
import { Projects } from '../components/Projects'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Hero />
        <About />
        <Employment />
        <Projects />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
