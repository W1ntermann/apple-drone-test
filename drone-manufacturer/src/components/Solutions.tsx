import React from 'react'
import { Camera, Map, Package, Building2, Wind, AlertCircle } from 'lucide-react'

interface Solution {
  icon: React.ReactNode
  title: string
  description: string
  features: string[]
}

const solutions: Solution[] = [
  {
    icon: <Camera size={32} />,
    title: 'Аерозйомка',
    description: 'Професійна фотозйомка та відеозйомка з повітря для кіно та реклами',
    features: ['4K/8K камери', 'Стабілізація', 'RAW формати', 'Колір-корекція']
  },
  {
    icon: <Map size={32} />,
    title: 'Картографія',
    description: 'Точна топографічна зйомка для будівництва та містопланування',
    features: ['Геотегування', 'Ортофото', 'LIDAR', 'RTK точність']
  },
  {
    icon: <Package size={32} />,
    title: 'Логістика',
    description: 'Доставка вантажів та управління складськими операціями',
    features: ['Вантажопідйомність', 'Автономність', 'Сітьові операції', 'Отримувачі']
  },
  {
    icon: <Building2 size={32} />,
    title: 'Інспекція',
    description: 'Огляд інфраструктури, електроліній та сонячних панелей',
    features: ['Термокамери', 'Високе наближення', 'Запас надійності', 'IP45']
  },
  {
    icon: <Wind size={32} />,
    title: 'Агросектор',
    description: 'Моніторинг посівів та рішення точного землеробства',
    features: ['Мультиспектр', 'Батиметрія', 'Великі площі', 'Аналітика']
  },
  {
    icon: <AlertCircle size={32} />,
    title: 'Спасання',
    description: 'Пошуково-рятувальні операції та невідкладна допомога',
    features: ['Теплозйомка', 'Прожектор', 'Швидкість', 'Надійність']
  }
]

export const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-24 px-4 bg-gradient-to-b from-transparent via-sky-blue/5 to-transparent relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-blue/10 border border-sky-blue/30 text-sky-accent text-sm font-semibold">
            КЕЙСИ ВИКОРИСТАННЯ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Профільні рішення</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Дрони SkyTech використовуються в найрізноманітніших галузях для вирішення складних завдань
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-sky-blue/50 hover:bg-gradient-to-br hover:from-sky-blue/10 hover:to-transparent transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-blue/30 to-sky-accent/30 p-3 mb-6 group-hover:from-sky-blue/50 group-hover:to-sky-accent/50 transition text-sky-accent">
                {solution.icon}
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-gray-400">{solution.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {solution.features.map((feature, fidx) => (
                    <div key={fidx} className="text-sm text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-accent"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-6 py-3 rounded-lg border border-sky-blue/30 text-sky-accent hover:bg-sky-blue/10 transition font-semibold text-sm">
                  Дізнатися більше →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
