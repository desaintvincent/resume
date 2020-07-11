import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/header'
import Viewer from './components/viewer'
import styled, { createGlobalStyle } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import commonEn from '../translations/en/common.json'
import commonFr from '../translations/fr/common.json'
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

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: commonEn
    },
    fr: {
      common: commonFr
    }
  }
})

function Layout () {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Viewer />
    </Container>
  )
}

function App () {
  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18next}>
        <Suspense fallback='loading'>
          <Layout />
        </Suspense>
      </I18nextProvider>
    </React.StrictMode>
  )
}

const wrapper = document.getElementById('container')
if (wrapper) {
  ReactDOM.render(<App />, wrapper)
}
