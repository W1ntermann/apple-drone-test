import React from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { Solutions } from './components/Solutions'
import { Specs } from './components/Specs'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-sky-dark text-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Solutions />
        <Specs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
