import React from 'react'
import MyContext from './MyContext.js'
import ShareOnFacebook from './share-on-facebook.png'

import {
  Paper,
  RedHeading,
  OrgPaper,
  Heading,
  Paragraph,
  Link,
  GreenButton,
  OrgContainer,
  OrgHeading,
  ContinueWithFacebook
} from './components/index'

const Page5 = () => (
  <MyContext.Consumer>
    {context => {
      const { advancePage } = context
      return (
        <React.Fragment>
          <Paper>
            <Heading>
              Success! Thanks for pledging your first month’s Freedom Dividend
              to Organization 1! Help us spread the word by sharing on social
              media!
            </Heading>
            <ContinueWithFacebook url={ShareOnFacebook} />
          </Paper>
        </React.Fragment>
      )
    }}
  </MyContext.Consumer>
)

export default Page5
