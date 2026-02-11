import React, { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full top-0 z-50 bg-sky-dark/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-sky-blue to-sky-accent rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">SkyTech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-300 hover:text-white transition">Дрони</a>
            <a href="#solutions" className="text-gray-300 hover:text-white transition">Розв'язки</a>
            <a href="#specs" className="text-gray-300 hover:text-white transition">Технології</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Контакти</a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <button className="px-6 py-2 rounded-lg border border-sky-blue text-sky-blue hover:bg-sky-blue/10 transition">
              Вивчити
            </button>
            <button className="px-6 py-2 rounded-lg bg-sky-blue text-white hover:bg-blue-600 transition">
              Замовити
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-4">
            <a href="#products" className="block text-gray-300 hover:text-white transition">Дрони</a>
            <a href="#solutions" className="block text-gray-300 hover:text-white transition">Розв'язки</a>
            <a href="#specs" className="block text-gray-300 hover:text-white transition">Технології</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition">Контакти</a>
            <div className="pt-4 flex gap-3">
              <button className="flex-1 px-4 py-2 rounded-lg border border-sky-blue text-sky-blue hover:bg-sky-blue/10 transition">
                Вивчити
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-sky-blue text-white hover:bg-blue-600 transition">
                Замовити
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
