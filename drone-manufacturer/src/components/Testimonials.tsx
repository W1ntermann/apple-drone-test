import React from 'react'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  company: string
  text: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Максим Петров',
    role: 'Режисер',
    company: 'Petrov Films',
    text: 'SkyTech S1 Pro повністю змінив мою роботу. 8K якість і стабільність дають мені можливість створювати контент світового рівня. Це інвестиція, а не видатки.',
    rating: 5,
    avatar: 'MP'
  },
  {
    name: 'Олена Козак',
    role: 'Інженер-геодезист',
    company: 'LandScan Ukraine',
    text: 'Точність RTK та швидкість обробки даних неперевершені. За допомогою SkyTech A2 я скорочую час проекту на 40%. Рекомендую всім!',
    rating: 5,
    avatar: 'OK'
  },
  {
    name: 'Сергій Бондар',
    role: 'Логіст',
    company: 'DroneDelivery UA',
    text: 'Надійність - це головне в логістиці. SkyTech M1 виконав понад 10,000 доставок без жодної критичної помилки. Найкраще рішення на ринку.',
    rating: 5,
    avatar: 'SB'
  },
  {
    name: 'Ірина Гончар',
    role: 'CTO',
    company: 'AgriTech Solutions',
    text: 'Інтеграція з нашим ПЗ була простою. SkyTech X Industrial дає мені дані, які мені потрібні для точного сільського господарства.',
    rating: 4,
    avatar: 'IG'
  }
]

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-blue/10 border border-sky-blue/30 text-sky-accent text-sm font-semibold">
            ВІД КОРИСТУВАЧІВ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Люди кохають SkyTech</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Відзиви від професіоналів, які довіряють нашим дронам у своїй повсякденній роботі
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8 hover:border-sky-blue/50 hover:bg-gradient-to-br hover:from-sky-blue/10 hover:to-transparent transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-sky-blue to-sky-accent flex items-center justify-center font-bold text-sky-dark`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-6 text-center">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-sky-accent mb-2">4.9/5</div>
            <div className="text-gray-400">Середня оцінка</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-sky-accent mb-2">15K+</div>
            <div className="text-gray-400">Задоволених клієнтів</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-sky-accent mb-2">1M+</div>
            <div className="text-gray-400">Годин польоту</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <div className="text-4xl font-bold text-sky-accent mb-2">99%</div>
            <div className="text-gray-400">Рекомендацій</div>
          </div>
        </div>
      </div>
    </section>
  )
}
