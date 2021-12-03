// Step 1: Import React
import * as React from 'react'
import Layout from '../common/Layout'
import Header from '../header/Header'
import About from '../about/About'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
  }
`

const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <Layout pageTitle="lek. med Agnieszka Studniarek">
        <Header></Header>
        <About></About>
      </Layout>
    </main>
  )
}

export default IndexPage