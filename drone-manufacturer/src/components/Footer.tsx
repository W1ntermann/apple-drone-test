import React from 'react'
import { Zap } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-transparent to-sky-dark/50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-blue to-sky-accent rounded-lg flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">SkyTech</span>
            </div>
            <p className="text-gray-400 text-sm">
              Інноваційні дрони для професіоналів, які змінюють світ з повітря.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4 text-white">ПРОДУКТИ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">SkyTech S1 Pro</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">SkyTech A2</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">SkyTech M1</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">SkyTech X Industrial</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-white">РІШЕННЯ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Аерозйомка</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Картографія</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Логістика</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Інспекція</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-white">ПІДТРИМКА</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Документація</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Контакти</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition text-sm">Блог</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 mt-8">
          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-between text-sm text-gray-400 mb-6">
            <a href="#" className="hover:text-white transition">Політика конфіденційності</a>
            <a href="#" className="hover:text-white transition">Умови використання</a>
            <a href="#" className="hover:text-white transition">Правові зауваження</a>
            <a href="#" className="hover:text-white transition">Налаштування cookies</a>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>© {currentYear} SkyTech Inc. Усі права захищені. Виготовлено з <span className="text-sky-accent">♡</span> в Україні.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
