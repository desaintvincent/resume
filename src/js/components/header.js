import React from 'react'
import styled from 'styled-components'

import { useTranslation } from 'react-i18next'

const StyledHeader = styled.header`
  background: red;
`
export default function Header () {
  const { t, i18n } = useTranslation('common')
  return (
    <StyledHeader>
      {t('welcome.title', { framework: 'React' })}
      <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
    </StyledHeader>
  )
}
