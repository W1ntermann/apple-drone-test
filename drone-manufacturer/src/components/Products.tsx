import React, { useState } from 'react'
import { ChevronRight, Zap } from 'lucide-react'

interface Product {
  id: string
  name: string
  category: string
  price: string
  specs: string[]
  color: string
  description: string
}

const products: Product[] = [
  {
    id: '1',
    name: 'SkyTech S1 Pro',
    category: 'Флагманський',
    price: '$4,999',
    specs: ['8K камера', '45 хв. польоту', '50км/год', 'Штучний інтелект'],
    color: 'from-sky-blue to-sky-accent',
    description: 'Найпотужніший дрон для професіоналів найвищого рівня'
  },
  {
    id: '2',
    name: 'SkyTech A2',
    category: 'Профільний',
    price: '$2,499',
    specs: ['4K камера', '30 хв. польоту', '40км/год', 'Стабільна зйомка'],
    color: 'from-blue-500 to-cyan-400',
    description: 'Баланс якості та доступної ціни для серйозної роботи'
  },
  {
    id: '3',
    name: 'SkyTech M1',
    category: 'Мобільний',
    price: '$899',
    specs: ['2K камера', '25 хв. польоту', '35км/год', 'Компактний'],
    color: 'from-cyan-400 to-blue-400',
    description: 'Легкий та портативний для різноманітних завдань'
  },
  {
    id: '4',
    name: 'SkyTech X Industrial',
    category: 'Промислові',
    price: '$7,999',
    specs: ['LIDAR', '60 хв. польоту', '55км/год', 'IP45 захист'],
    color: 'from-purple-500 to-blue-500',
    description: 'Спеціалізований для картографії та великих проектів'
  }
]

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-blue/10 border border-sky-blue/30 text-sky-accent text-sm font-semibold">
            КАТАЛОГ ПРОДУКТІВ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Дрони для кожного завдання</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Від компактних мобільних рішень до промислових систем - ми маємо дрона для вас
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-sky-blue text-sky-dark'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {cat === 'all' ? 'Все' : cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-sky-blue/50 hover:bg-gradient-to-br hover:from-sky-blue/10 hover:to-sky-accent/5 transition cursor-pointer overflow-hidden"
            >
              {/* Gradient Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} p-4 mb-6 group-hover:scale-110 transition`}>
                <Zap className="w-full h-full text-white" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sky-accent text-sm font-semibold mb-2">{product.category}</p>
                  <h3 className="text-2xl font-bold mb-1">{product.name}</h3>
                  <p className="text-gray-400">{product.description}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sky-accent"></div>
                      {spec}
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-2xl font-bold">{product.price}</span>
                  <button className="p-3 rounded-lg bg-sky-blue/20 text-sky-blue group-hover:bg-sky-blue group-hover:text-sky-dark transition">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Button */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-lg border border-sky-blue/50 text-sky-blue hover:bg-sky-blue/10 transition font-semibold">
            Порівняти всі моделі
          </button>
        </div>
      </div>
    </section>
  )
}
