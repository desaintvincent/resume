import { PDFViewer } from '@react-pdf/renderer'
import Pdf from './pdf'
import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  flex: 1;
`

export default function Viewer () {
  return (
    <Container>
      <PDFViewer
        style={{
          border: 'none'
        }}
        width='100%'
        height='100%'
      >
        <Pdf />
      </PDFViewer>
    </Container>
  )
}
