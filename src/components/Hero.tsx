import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { colors } from '../styles/variables'

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: 75vh;
  margin-bottom: 10vh;
`

const StyledIntro = styled.p`
  margin: 0;
  color: ${colors.coral};
  font-size: 1.5rem;
`

const StyledTitle = styled.h1`
  font-size: 7rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: ${colors.white};
`
const StyledTagline = styled.h3`
  margin: 0 0 2rem 0;
  font-size: 3rem;
  font-weight: 400;
  color: ${colors.darkGray};
`

const StyledDescription = styled.p`
  font-size: 1.5rem;
`

interface HeroQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      tagline: string
    }
  }
}

const Hero = () => {
  const { site }: HeroQueryProps = useStaticQuery(graphql`
    query HeroQuery {
      site {
        siteMetadata {
          title
          description
          tagline
        }
      }
    }
  `)

  return (
    <StyledHero>
      <StyledIntro>Hi, my name is</StyledIntro>
      <StyledTitle>{site.siteMetadata.title}</StyledTitle>
      <StyledTagline>{site.siteMetadata.tagline}</StyledTagline>
      <StyledDescription>{site.siteMetadata.description}</StyledDescription>
    </StyledHero>
  )
}

export default Hero
