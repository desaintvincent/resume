import React from 'react'
import PropTypes from 'prop-types'
import styled from '@react-pdf/styled-components'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
})

const Heading = styled.Text`
  margin: 10px;
  font-size: 22px;
  font-family: 'Helvetica';
`

export default function Index ({ t }) {
  return (
    <Document title={t('resume.title')}>
      <Page size='A4' style={styles.page}>
        <Heading>test</Heading>
        <View style={styles.section}>
          <Text>aa</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  )
}

Index.propTypes = {
  t: PropTypes.func.isRequired
}
