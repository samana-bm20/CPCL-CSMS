import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './theme'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      {/* <Dashboard/> */}
    </ThemeProvider>
  )
}

export default App
