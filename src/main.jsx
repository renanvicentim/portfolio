import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/Header'
import About from './containers/About'
import Contact from './containers/Contact'
import Home from './containers/Home'
import Projects from './containers/Projects'
import GlobalStyle from './styles/globalStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>
)
