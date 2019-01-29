import React from 'react'
import GettingStarted from '../components/GettingStarted'
import { ThemeProvider } from 'styled-components'

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff'
  }
}

const about = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GettingStarted />
      </div>
    </ThemeProvider>
  )
}

export default about
