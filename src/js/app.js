import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Viewer from './components/viewer'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

function Layout () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Viewer />
    </Container>
  )
}

const wrapper = document.getElementById('container')
if (wrapper) {
  ReactDOM.render(<Layout />, wrapper)
}
