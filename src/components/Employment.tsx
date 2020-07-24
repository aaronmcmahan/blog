import React, { Fragment } from 'react'
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs'
import 'react-web-tabs/dist/react-web-tabs.css'
import styled from '@emotion/styled'
import { colors } from '../styles/variables'
import SectionTitle from './SectionTitle'
import EmploymentDetail from './EmploymentDetail'

const StyledTabs = styled(Tabs)``

const StyledTab = styled(Tab)`
  color: ${colors.darkGray};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  text-align: left;
`

const StyledTabPanel = styled(TabPanel)``

const StyledTabList = styled(TabList)`
  border-left: 2px solid ${colors.darkGray};
  border-right: none !important;
  width: 50%;
`

export const Employment = () => {
  return (
    <Fragment>
      <SectionTitle text="Where I've worked" />
      <StyledTabs defaultTab="ucsd" vertical>
        <StyledTabList>
          <StyledTab tabFor="ucsd">University of California, San Diego</StyledTab>
          <StyledTab tabFor="pbvusd">Panama-Buena Vista Union School District</StyledTab>
          <StyledTab tabFor="ls">Lightspeed Systems</StyledTab>
          <StyledTab tabFor="chartec">Chartec, LLC</StyledTab>
        </StyledTabList>
        <StyledTabPanel tabId="ucsd">
          <EmploymentDetail
            title="System Administrator/Programmer"
            employer="University of California, San Diego"
            duration="Jul 2019 - Present"
            highlights={[
              'Managed 200+ physical and virtual labs',
              'Automated as much as possible with PowerShell',
              'Setup remote image deployment',
              'Developed internal applications as needed'
            ]}
          />
        </StyledTabPanel>
        <StyledTabPanel tabId="pbvusd">
          <EmploymentDetail
            title="Database Administrator"
            employer="Panama-Buena Vista Union School District"
            duration="Aug 2014 - Jul 2019"
            highlights={[
              'Owned production databases',
              'Act as a final escalation for support techs',
              'Automated staff on boarding and off boarding',
              'Setup JAMF and GAFE for the district'
            ]}
          />
        </StyledTabPanel>
        <StyledTabPanel tabId="ls">
          <EmploymentDetail
            title="Technical Support Specialist"
            employer="Lightspeed Systems"
            duration="Mar 2013 - Aug 2014"
            highlights={[
              'Supported content filters, MDM, firewalls, spam filters, email archiving and proxies all in a customer’s production environment',
              'Managed a heavy ticket workload using Salesforce'
            ]}
          />
        </StyledTabPanel>
        <StyledTabPanel tabId="chartec">
          <EmploymentDetail
            title="Technical Support Specialist"
            employer="Chartec, LLC"
            duration="Jul 2012 - Feb 2013"
            highlights={['Support customers leased backup server', 'Assist customer with data recovery in the event of a disaster']}
          />
        </StyledTabPanel>
      </StyledTabs>
    </Fragment>
  )
}
