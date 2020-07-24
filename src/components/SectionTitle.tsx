import React from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledTitle = styled.h2`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 30em) {
    font-size: 50px;
  }
`

const StyledLine = styled.span`
  display: flex;
  width: 30%;
  margin-left: 20px;
  margin-top: 1.7rem;
  border-top: 4px solid ${colors.blue};
`
interface SectionTitleProps {
  text: string
}

const SectionTitle: React.FC<SectionTitleProps> = (props) => (
  <StyledTitle>
    {props.text} <StyledLine />
  </StyledTitle>
)

export default SectionTitle
