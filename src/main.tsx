// @ts-nocheck
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Poems } from './Poems.tsx'
import { Pictures } from './Pictures.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/poems" element={<Poems />} />
      <Route path="/pictures" element={<Pictures />} />
    </Routes>
    </Router>
  </StrictMode>,
)
