import React from 'react'
import AppRouter from './router/AppRouter'
import theme from './components/globalStyles/theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <AppRouter/>
      </ThemeProvider>
    </div>
  )
}

export default App
