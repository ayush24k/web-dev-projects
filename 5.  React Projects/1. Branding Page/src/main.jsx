import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/Nav'
import Hero from './components/Hero'
import App from './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Hero />
  </React.StrictMode>,
)
