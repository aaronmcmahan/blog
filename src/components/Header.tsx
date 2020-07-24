import React from 'react'
import styled from '@emotion/styled'
// import { Link } from 'gatsby'

import { colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 70px;
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 100%;
`

const HeaderItemList = styled.ul`
  list-style: none;
  margin-left: auto;
`

const HeaderItem = styled.li`
  display: inline-block;
  padding: 0 15px;
`

// const HeaderLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   transition: background-color 0.1s;
//   color: white;
//   height: 60px;
//   font-size: 18px;
//   text-decoration: none;
//   text-align: center;
//   padding: 0 40px;
//   max-width: 80px;
// `

const HeaderButton = styled.button`
  border: 4px solid ${colors.blue};
  background-color: ${colors.darker};
  color: ${colors.blue};
  padding: 14px 28px;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: 21px;
  cursor: pointer;
  border-radius: 0.25rem;
  margin-left: 1rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    background-color: ${colors.blue};
    color: white;
  }
`

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <StyledHeader>
      <HeaderInner>
        <HeaderItemList>
          {/* <HeaderItem>
            <HeaderLink to="/">About</HeaderLink>
          </HeaderItem>
          <HeaderItem>
            <HeaderLink to="/blog">Blog</HeaderLink>
          </HeaderItem> */}
          <HeaderItem>
            <HeaderButton>Resume</HeaderButton>
          </HeaderItem>
        </HeaderItemList>
      </HeaderInner>
    </StyledHeader>
  )
}
export default Header
