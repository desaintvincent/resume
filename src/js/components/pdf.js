import React from 'react'
import PropTypes from 'prop-types'

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

export default function Pdf ({ t }) {
  return (
    <Document title={t('resume.title')}>
      <Page size='A4' style={styles.page}>
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

Pdf.propTypes = {
  t: PropTypes.func.isRequired
}
