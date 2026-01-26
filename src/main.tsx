import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.tsx'
import { PrintableCV } from './pages/printable-cv.tsx'
import { theme } from './theme/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/printable-cv" element={<PrintableCV />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
