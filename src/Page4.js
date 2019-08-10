import React from 'react'
import MyContext from './MyContext.js'
import Andrew from './andrew.jpg'

import {
  Paper,
  GreenHeading,
  RedHeading,
  OrgPaper,
  Heading,
  Paragraph,
  Link,
  DonorFace,
  DonorText,
  GreenButton,
  OrgContainer,
  OrgHeading,
  FlexAlignedRow,
  DonationPaper,
  RadioRow,
  TextInput,
  InputFlexAlignedRow,
  CenteredParagraph
} from './components/index'

class Page4 extends React.Component {
  state = {
    activeRadio: 'one time',
    amount: '',
    email: '',
    city: ''
  }

  setActiveRadio = name => {
    this.setState({
      activeRadio: name
    })
  }

  handleInputChange = (e, input) => {
    this.setState({
      [input]: e.target.value
    })
  }

  render() {
    const { activeRadio, amount, email, city } = this.state
    return (
      <MyContext.Consumer>
        {context => {
          const { advancePage } = context
          return (
            <React.Fragment>
              <Paper>
                <GreenHeading>Congrats! You chose organization 1</GreenHeading>
              </Paper>
              <Paper>
                <RedHeading>Now, choose how much to pledge</RedHeading>
              </Paper>
              <DonationPaper>
                <RadioRow>
                  <input
                    type="radio"
                    name="one time"
                    value="one"
                    id="radio-one"
                    className="form-radio"
                    checked={activeRadio === 'one time'}
                    onChange={() => this.setActiveRadio('one time')}
                  />
                  <label htmlFor="radio-one">One Time</label>

                  <input
                    type="radio"
                    name="recurring"
                    value="two"
                    id="radio-two"
                    className="form-radio"
                    style={{ marginLeft: 16 }}
                    checked={activeRadio === 'recurring'}
                    onChange={() => this.setActiveRadio('recurring')}
                  />
                  <label htmlFor="radio-two">Recurring</label>
                </RadioRow>
                <InputFlexAlignedRow>
                  <span>Amount:</span>
                  <TextInput
                    type="text"
                    placeholder="$350"
                    value={amount}
                    onChange={e => this.handleInputChange(e, 'amount')}
                  />
                </InputFlexAlignedRow>
                <InputFlexAlignedRow>
                  <span>Email:</span>
                  <TextInput
                    type="text"
                    placeholder="enter email"
                    value={email}
                    onChange={e => this.handleInputChange(e, 'email')}
                  />
                </InputFlexAlignedRow>
                <InputFlexAlignedRow>
                  <span>City:</span>
                  <TextInput
                    type="text"
                    placeholder="enter city"
                    value={city}
                    onChange={e => this.handleInputChange(e, 'city')}
                  />
                </InputFlexAlignedRow>
                <CenteredParagraph>
                  By filling out this form I agree to do everything in my power
                  to pay $350 per month from the Freedom Dividend to
                  Organization 1
                </CenteredParagraph>

                <GreenButton onClick={advancePage}>Submit</GreenButton>
              </DonationPaper>
            </React.Fragment>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Page4
