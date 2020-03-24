import React from 'react'
import { AnchorProvider } from 'react-anchor-navigation'

import './styles/main.scss'
import { Styles } from './styles/styles'

import Header from './components/Header'
import Hero from './components/Hero'
import Introduction from './components/Introduction'
import Carousel from './components/Carousel'
import Locals from './components/Locals'
import Ubication from './components/Ubication'
import Contact from './components/Contact'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
      <AnchorProvider>
        <Styles />
        <Header />
        <Hero />
        <Introduction id='inicio' />
        <Carousel id='galeria' />
        <Locals id='proyecto' />
        <Ubication />
        <Contact id='contacto' />
        <Footer />
      </AnchorProvider>
    </>
  )
}
