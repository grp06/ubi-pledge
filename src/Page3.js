import React from 'react'

import MyContext from './MyContext.js'

import {
  Paper,
  RedHeading,
  OrgPaper,
  Heading,
  Paragraph,
  Link,
  GreenButton,
  OrgContainer,
  OrgHeading
} from './components/index'

const Page3 = () => (
  <MyContext.Consumer>
    {context => {
      const { advancePage } = context
      return (
        <React.Fragment>
          <Paper>
            <RedHeading>Choose a cause below to start your pledge</RedHeading>
          </Paper>
          <OrgContainer>
            <OrgPaper>
              <OrgHeading>Organization 1</OrgHeading>
              <Paragraph>
                We fight for the health, education, and financial stability of
                every person in every community.
                <Link>Learn more</Link>
              </Paragraph>

              <GreenButton onClick={advancePage}>Choose</GreenButton>
            </OrgPaper>
            <OrgPaper>
              <OrgHeading>Organization 1</OrgHeading>
              <Paragraph>
                We fight for the health, education, and financial stability of
                every person in every community.
                <Link>Learn more</Link>
              </Paragraph>

              <GreenButton onClick={advancePage}>Choose</GreenButton>
            </OrgPaper>
            <OrgPaper>
              <Heading>Organization 1</Heading>
              <Paragraph>
                We fight for the health, education, and financial stability of
                every person in every community.
                <Link>Learn more</Link>
              </Paragraph>

              <GreenButton onClick={advancePage}>Choose</GreenButton>
            </OrgPaper>
            <OrgPaper>
              <Heading>Organization 1</Heading>
              <Paragraph>
                We fight for the health, education, and financial stability of
                every person in every community.
                <Link>Learn more</Link>
              </Paragraph>

              <GreenButton onClick={advancePage}>Choose</GreenButton>
            </OrgPaper>
          </OrgContainer>
        </React.Fragment>
      )
    }}
  </MyContext.Consumer>
)

export default Page3
