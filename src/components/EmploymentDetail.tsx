import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'

const StyledTitle = styled.h5`
  margin: 0;
  color: ${colors.white};
`
const StyledEmployer = styled.h6`
  margin-top: 10px;
  font-size: 1.2rem;
  color: ${colors.darkGray};
  line-height: 16px;
`
const StyledDuration = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
  color: ${colors.coral};
  line-height: 16px;
`

const StyledList = styled.ul`
  margin: 0.15em 0;
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

interface EmploymentDetailProps {
  title: string
  employer: string
  duration: string
  highlights: string[]
}

const EmploymentDetail: React.FC<EmploymentDetailProps> = props => (
  <Fragment>
    <StyledTitle>{props.title}</StyledTitle>
    <StyledEmployer>{props.employer}</StyledEmployer>
    <StyledDuration>{props.duration}</StyledDuration>
    <StyledList>
      {props.highlights.map(highlight => (
        <StyledListItem>{highlight}</StyledListItem>
      ))}
    </StyledList>
  </Fragment>
)

export default EmploymentDetail
