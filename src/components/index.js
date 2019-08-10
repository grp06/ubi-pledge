import React, { Component } from 'react'
import styled from 'styled-components'

const green = '#6FCF97'
const red = '#DA3248'
const blue = 'rgba(2, 31, 92, 1)'

const FlexAlignedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const RadioRow = styled(FlexAlignedRow)`
  margin-bottom: 1.6rem;
`

const InputFlexAlignedRow = styled(FlexAlignedRow)`
  margin: 10px 0;
  justify-content: space-around;
  width: 50%;
  span {
    width: 50px;
    text-align: left;
  }
`

const Paper = styled.div`
  background: white;
  border-radius: 0.4rem;
  margin: 0 auto;
  padding: 40px;
  width: 50%;
  margin-top: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const HomePaper = styled(Paper)``
const DonorsPaper = styled(Paper)`
  margin-top: 40px;
`

const OrgPaper = styled(Paper)`
  width: 48%;
  margin: 20px 0;
`

const DonationPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const OrgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 0 25%;
  width: 50%;
  justify-content: space-between;
`

const Heading = styled.h1`
  text-align: center;
  font-size: 3.2rem;
  margin: 0;
`

const OrgHeading = styled(Heading)``

const GreenHeading = styled(Heading)`
  color: ${green};
`

const RedHeading = styled(Heading)`
  color: ${red};
`
const Paragraph = styled.p`
  margin: 1.6rem 0;
  font-size: 1.6rem;
`

const CenteredParagraph = styled(Paragraph)`
  width: 75%;
  text-align: center;
`

const DonorCard = styled.div`
  display: flex;
  align-items: center;
  margin: 1.6rem 0;
`

const DonorFace = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: ${({ url }) => (url ? `url('${url}')` : 'none')};
  background-position: center;
  background-size: contain;
`

const DonorText = styled.span`
  font-size: 1.8rem;
  font-weight: bold;
  margin-left: 1.6rem;
`

const ContinueWithFacebook = styled.div`
  background-image: ${({ url }) => (url ? `url('${url}')` : 'none')};
  height: 56px;
  width: 373px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 3.2rem auto 0 auto;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
    transition: 0.1s;
  }
`

const ShareOnFacebook = styled(ContinueWithFacebook)`
  height: 76px;
  width: 324px;
`

const Button = styled.button`
  padding: 1.5rem;
  background-color: ${green};
  color: white;
  width: 50%;
  border: none;
  cursor: pointer;
  border-radius: 0.4rem;
  &:hover {
    transform: scale(1.01);
    transition: 0.1s;
  }
`

const GreenButton = styled(Button)`
  margin-top: 3.2rem;
  font-size: 2.4rem;
`

const Link = styled.a`
  font-size: 1.4rem;
  color: ${blue};
  text-decoration: underline;
  text-align: center;
  width: 100%;
  margin-left: 0.8rem;
`

const TextInput = styled.input`
  padding-left: 10px;
  margin: 0 0 0 1rem;
  border: none;
  outline: none;
  border-bottom: 1px solid #ccc;
  width: 100%;
  &:focus {
    border-bottom: 1px solid ${green};
  }
`

export {
  HomePaper,
  Heading,
  GreenHeading,
  RedHeading,
  Paragraph,
  ContinueWithFacebook,
  DonorsPaper,
  DonorCard,
  DonorFace,
  DonorText,
  Button,
  Paper,
  GreenButton,
  OrgPaper,
  OrgContainer,
  Link,
  OrgHeading,
  FlexAlignedRow,
  DonationPaper,
  TextInput,
  InputFlexAlignedRow,
  CenteredParagraph,
  RadioRow,
  ShareOnFacebook
}

export default {}
