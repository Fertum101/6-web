import { useSelector } from 'react-redux'
import AuthPage from './pages/AuthPage'
import MainPage from './pages/MainPage'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme()

function App() {
  const { isLoggedIn } = useSelector(state => state.auth)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh' }}>
        {isLoggedIn ? <MainPage /> : <AuthPage />}
      </div>
    </ThemeProvider>
  )
}

export default App
