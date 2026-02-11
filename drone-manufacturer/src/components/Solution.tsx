import React from 'react'

export const Solution: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-bold mb-4">Рішення для кожної індустрії</h1>
            <p className="text-xl text-gray-400">
              SkyTech дрони розробляються з урахуванням потреб різних галузей економіки.
              Кожна модель оптимізована для конкретних завдань.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6">
            <h2 className="text-3xl font-bold">Аерозйомка та відеопродакшн</h2>
            <p className="text-gray-300 leading-relaxed">
              Професіональна аерозйомка вимагає максимальної якості та надійності.
              SkyTech S1 Pro оснащена 8K камерою з 100MP резолюцією, забезпечуючи
              кінематографічну якість кадру. Система стабілізації з 3-осьовим гіростопом
              гарантує абсолютно гладкі кадри навіть при сильному вітрі.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-sky-accent font-bold">✓</span>
                <span>8K / 4K відеозйомка до 60fps</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-accent font-bold">✓</span>
                <span>RAW фото та відео для постпродакшену</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-accent font-bold">✓</span>
                <span>Підтримка найпопулярніших лінз та фільтрів</span>
              </li>
              <li className="flex gap-3">
                <span className="text-sky-accent font-bold">✓</span>
                <span>45-хвилинний час польоту для довгих сцен</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
