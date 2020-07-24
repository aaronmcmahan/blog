import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import { colors } from '../styles/variables'
import { media } from '../styles'

const StyledHero = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  height: 75vh;
  margin-bottom: 10vh;
`

const StyledIntro = styled.h1`
  color: ${colors.coral};

  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.sm};`};
  ${media.tablet`font-size: ${fontSizes.smish};`};
`

const StyledTitle = styled.h1`
  font-size: 7rem;
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: ${colors.white};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const StyledTagline = styled.h3`
  color: ${colors.darkGray};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};

  font-size: 80px;
  line-height: 1.1;

  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
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
