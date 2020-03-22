import React from 'react'

import './styles/main.scss'
import { Styles } from './styles/styles'

import { Ubication } from './components/Ubication'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const App = () => (
  <div>
    <Styles />
    <Ubication />
    <Contact />
    <Footer />
  </div>
)
