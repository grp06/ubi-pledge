import React from 'react'

import MyContext from './MyContext.js'

import { Paper, GreenButton, Heading } from './components/index'

const Page1 = () => (
  <MyContext.Consumer>
    {context => {
      const { advancePage } = context
      return (
        <React.Fragment>
          <Paper>
            <Heading>
              By choosing a charity, providing your contact information and
              submitting - you publically commit to donate your Freedom Dividend
            </Heading>
            <GreenButton onClick={advancePage}>Agree</GreenButton>
          </Paper>
        </React.Fragment>
      )
    }}
  </MyContext.Consumer>
)

export default Page1
