import React from 'react'
import { ArrowRight, Play } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-sky-blue to-sky-accent bg-clip-text text-transparent">
                Майбутнього неба сьогодні
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Революційні дрони для професіоналів, які повинні розраховувати на кожний кадр. Максимальна продуктивність, надійність та точність.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-sky-blue to-sky-accent text-sky-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-blue/50 transition group flex items-center justify-center gap-2">
                Розпочати
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 border border-sky-blue rounded-lg text-sky-blue hover:bg-sky-blue/10 transition flex items-center justify-center gap-2">
                <Play size={20} />
                Дивіться ролик
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-sky-accent">4K+</div>
                <div className="text-sm text-gray-400">Камер проданих</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-sky-accent">85+</div>
                <div className="text-sm text-gray-400">Країн користувачів</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-sky-accent">98%</div>
                <div className="text-sm text-gray-400">Задоволення</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/20 to-sky-accent/20 rounded-3xl blur-2xl"></div>
            <div className="absolute inset-0 rounded-3xl border border-sky-blue/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full border-4 border-sky-blue/50 flex items-center justify-center animate-glow">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-sky-blue to-sky-accent flex items-center justify-center text-4xl font-bold">
                      S1
                    </div>
                  </div>
                  <p className="text-gray-300 font-semibold">SkyTech S1 Pro</p>
                  <p className="text-gray-500 text-sm">Флагманський дрон</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
