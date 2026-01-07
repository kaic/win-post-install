import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SelectionProvider } from './context/SelectionContext.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SelectionProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </SelectionProvider>
    </ThemeProvider>
  </StrictMode>,
)
