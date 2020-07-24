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
  // const data: ProfileQuery = useStaticQuery(graphql`
  //   query ProfileQuery {
  //     allFile(filter: { name: { eq: "profile" } }) {
  //       edges {
  //         node {
  //           publicURL
  //         }
  //       }
  //     }
  //   }
  // `)
  return (
    <StyledAboutContainer>
      <SectionTitle text="About me" />
      <StyledAbout>
        Hello! I'm Aaron, a systems administrator based in San Diego, CA. I enjoy creating elegant solutions to complex problems. my goal is
        to always find the right solutions and make people successful.
        <br />
        <br />
        Shortly after moving to sunny San Diego, I joined the computer labs team at UCSD where I work on a wide variety of interesting and
        meaningful projects on a daily basis.
        <br />
        <br />
        Here are a few technologies that I have been working with lately:
        <div style={{ display: 'flex' }}>
          <StyledList>
            <StyledListItem>.NET Core</StyledListItem>
            <StyledListItem>Node.JS</StyledListItem>
            <StyledListItem>PowerShell</StyledListItem>
            <StyledListItem>GraphQL</StyledListItem>
          </StyledList>

          <StyledList>
            <StyledListItem>AWS/Azure</StyledListItem>
            <StyledListItem>Jenkins</StyledListItem>
            <StyledListItem>Docker</StyledListItem>
            <StyledListItem>SCCM</StyledListItem>
          </StyledList>
        </div>
      </StyledAbout>
      <StyledImage src={profileImg} /> <StyledImgDecoration />
    </StyledAboutContainer>
  )
}

export default About
