import React from 'react'
import Andrew from './andrew.jpg'
import FbButton from './fb-button.png'
import MyContext from './MyContext.js'

import {
  HomePaper,
  Heading,
  GreenHeading,
  Paragraph,
  ContinueWithFacebook,
  DonorsPaper,
  DonorCard,
  DonorFace,
  DonorText
} from './components/index'

const Page1 = () => (
  <MyContext.Consumer>
    {context => {
      const { advancePage } = context
      return (
        <React.Fragment>
          <HomePaper>
            <GreenHeading>Freedeom Dividend Pledge</GreenHeading>
            <Paragraph>
              If elected, Presidential candidate Andrew Yang will work to
              implement a "Freedom Dividend" which unconditionally gives every
              American $1000 per month. Although the Freedom Dividend will be
              most impactful to people struggling financially, those who aren’t
              struggling have the FREEDOM to do whatever they want with the
              money. This page allows supporters to publically pledge to donate
              their Freedom Dividend to a charitable cause in early primary
              states. Login with Facebook to pledge your dividend .
            </Paragraph>
            <Paragraph>
              This page allows supporters to publically pledge to donate their
              Freedom Dividend to a charitable cause in early primary states.
              Login with Facebook to pledge your dividend .
            </Paragraph>
            <ContinueWithFacebook url={FbButton} onClick={advancePage} />
          </HomePaper>
          <DonorsPaper>
            <Heading>
              36,433 people have pledged to donate over $36 million to
              charitable causes so far. Continue with Facebook above to get on
              this list!
            </Heading>
            <DonorCard>
              <DonorFace url={Andrew} />
              <DonorText>Sally Jones - Boudler, CO - $1000</DonorText>
            </DonorCard>
            <DonorCard>
              <DonorFace url={Andrew} />
              <DonorText>Sally Jones - Boudler, CO - $1000</DonorText>
            </DonorCard>
            <DonorCard>
              <DonorFace url={Andrew} />
              <DonorText>Sally Jones - Boudler, CO - $1000</DonorText>
            </DonorCard>
            <DonorCard>
              <DonorFace url={Andrew} />
              <DonorText>Sally Jones - Boudler, CO - $1000</DonorText>
            </DonorCard>
            <DonorCard>
              <DonorFace url={Andrew} />
              <DonorText>Sally Jones - Boudler, CO - $1000</DonorText>
            </DonorCard>
          </DonorsPaper>
        </React.Fragment>
      )
    }}
  </MyContext.Consumer>
)

export default Page1
