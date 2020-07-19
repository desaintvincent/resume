import { PDFViewer } from '@react-pdf/renderer'
import Pdf from './pdf/pdf'
import styled from 'styled-components'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  flex: 1;
`

export default function Viewer () {
  const { t, ready } = useTranslation('common')
  return (
    <Container>
      <PDFViewer
        style={{
          border: 'none'
        }}
        width='100%'
        height='100%'
      >
        {ready && <Pdf t={t} />}
      </PDFViewer>
    </Container>
  )
}
