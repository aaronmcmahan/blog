import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import profileImg from '../static/images/profile.png'
import SectionTitle from './SectionTitle'
import { useStaticQuery, graphql } from 'gatsby'
const StyledAboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30vh;
`

const StyledAbout = styled.div`
  width: 50%;
  height: 100px;
  font-size: 1rem;
`
const StyledImage = styled.img`
  border-radius: 5px;
  height: 280px;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const StyledImgDecoration = styled.div`
  border: 4px solid ${colors.blue};
  border-radius: 5px;
  position: relative;
  height: 280px;
  margin-left: -430px;
  margin-top: 20px;
  width: 280px;
`
const StyledList = styled.ul`
  margin: 0.75em 0;
  margin-right: 4rem;
  padding: 0 em;
  list-style: none;
`
const StyledListItem = styled.li`
  &:before {
    font-family: 'Roboto Mono', monospace;
    font-size: 1rem;
    content: '';
    border-color: transparent ${colors.coral};
    border-style: solid;
    border-width: 0.35em 0 0.35em 0.45em;
    display: block;
    height: 0;
    width: 0;
    left: -1em;
    top: 0.9em;
    position: relative;
  }
`

interface ProfileQuery {
  allFile: {
    edges: [
      {
        node: {
          publicURL: string
        }
      }
    ]
  }
}

const About = () => {
  const data: ProfileQuery = useStaticQuery(graphql`
    query ProfileQuery {
      allFile(filter: { name: { eq: "profile" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  return (
    <StyledAboutContainer>
      <SectionTitle text="About me" />
      <StyledAbout>
        Hello! I'm Aaron, a software engineer based in San Diego, CA. I enjoy creating things that live on the internet, whether that be
        websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant
        experiences.
        <br />
        <br />
        Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety
        of interesting and meaningful projects on a daily basis.
        <br />
        <br />
        Here are a few technologies I've been working with recently:
        <div style={{ display: 'flex' }}>
          <StyledList>
            <StyledListItem>Javascript (ES6+)</StyledListItem>
            <StyledListItem>JS</StyledListItem>
            <StyledListItem>AJAX</StyledListItem>
          </StyledList>

          <StyledList>
            <StyledListItem>CSS</StyledListItem>
            <StyledListItem>JS</StyledListItem>
            <StyledListItem>AJAX</StyledListItem>
          </StyledList>
        </div>
      </StyledAbout>
      <StyledImage src={data.allFile.edges[0].node.publicURL} /> <StyledImgDecoration />
    </StyledAboutContainer>
  )
}

export default About
