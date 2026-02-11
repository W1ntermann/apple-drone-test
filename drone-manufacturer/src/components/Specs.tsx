import React, { useState } from 'react'
import { Check } from 'lucide-react'

interface Spec {
  label: string
  s1: string
  a2: string
  m1: string
}

const specs: Spec[] = [
  { label: 'Максимальна швидкість', s1: '55 км/год', a2: '40 км/год', m1: '35 км/год' },
  { label: 'Час польоту', s1: '45 хвилин', a2: '30 хвилин', m1: '25 хвилин' },
  { label: 'Дальність', s1: '15 км', a2: '10 км', m1: '8 км' },
  { label: 'Камера', s1: '8K 100MP', a2: '4K 20MP', m1: '2K 12MP' },
  { label: 'Вага', s1: '2.8 кг', a2: '1.5 кг', m1: '0.9 кг' },
  { label: 'IP рейтинг', s1: 'IP45', a2: 'IP43', m1: 'IP42' },
  { label: 'Сенсори', s1: '360° обхват', a2: '270° обхват', m1: '180° обхват' },
  { label: 'Батарея', s1: '5000 мАч', a2: '3000 мАч', m1: '2000 мАч' },
  { label: 'Кількість гвинтів', s1: '4 + складання', a2: '4 складання', m1: '4 складання' },
  { label: 'Температура роботи', s1: '-20...+50°С', a2: '-10...+45°С', m1: '0...+40°С' },
  { label: 'Штучний інтелект', s1: 'Так', a2: 'Обмежено', m1: 'Ні' },
  { label: 'Моделювання 3D', s1: 'Так', a2: 'Так', m1: 'Ні' }
]

export const Specs: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null)

  return (
    <section id="specs" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-blue/10 border border-sky-blue/30 text-sky-accent text-sm font-semibold">
            ПОРІВНЯННЯ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Детальні специфікації</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Порівняйте характеристики різних моделей дронів SkyTech
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">ХАРАКТЕРИСТИКА</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-sky-accent">S1 Pro</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-sky-accent">A2</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-sky-accent">M1</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((spec, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition">
                    <td className="px-6 py-4 text-sm text-gray-300 font-medium">{spec.label}</td>
                    <td className="px-6 py-4 text-center text-sm text-white flex items-center justify-center gap-2">
                      {spec.s1}
                      {spec.s1 !== 'Ні' && spec.s1 !== 'Обмежено' && <Check size={16} className="text-green-400" />}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-white flex items-center justify-center gap-2">
                      {spec.a2}
                      {spec.a2 !== 'Ні' && spec.a2 !== 'Обмежено' && <Check size={16} className="text-green-400" />}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-white flex items-center justify-center gap-2">
                      {spec.m1}
                      {spec.m1 !== 'Ні' && spec.m1 !== 'Обмежено' && <Check size={16} className="text-green-400" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-3">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setExpandedRow(expandedRow === idx ? null : idx)}
                className="w-full px-4 py-4 text-left font-medium text-gray-300 hover:bg-white/10 transition flex items-center justify-between"
              >
                {spec.label}
                <span className={`transition ${expandedRow === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {expandedRow === idx && (
                <div className="px-4 py-4 border-t border-white/10 bg-white/[0.02] space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">S1 Pro</span>
                    <span className="font-semibold text-white">{spec.s1}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">A2</span>
                    <span className="font-semibold text-white">{spec.a2}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">M1</span>
                    <span className="font-semibold text-white">{spec.m1}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
