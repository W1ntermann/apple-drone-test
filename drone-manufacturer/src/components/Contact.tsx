import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-2 rounded-full bg-sky-blue/10 border border-sky-blue/30 text-sky-accent text-sm font-semibold">
            КОНТАКТИ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Давайте працювати разом</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Готові змінити спосіб роботи вашої компанії? Зв'яжіться з нами сьогодні
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-blue to-sky-accent flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-sky-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-gray-400">support@skytech.ua</p>
                  <p className="text-gray-400">sales@skytech.ua</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-blue to-sky-accent flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-sky-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-400">+38 (044) 200-20-20</p>
                  <p className="text-gray-400">+38 (050) 123-45-67</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-blue to-sky-accent flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-sky-dark" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адреса</h3>
                  <p className="text-gray-400">вул. Космонавта Комарова, 1</p>
                  <p className="text-gray-400">Київ, Україна 02000</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <p className="font-semibold text-gray-300">Слідкуйте за нами</p>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg border border-sky-blue/30 flex items-center justify-center text-sky-accent hover:bg-sky-blue/20 transition"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Ім'я</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-sky-blue transition"
                  placeholder="Ваше ім'я"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-sky-blue transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Повідомлення</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-sky-blue transition resize-none"
                  placeholder="Розповідьте нам про ваш проект..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-sky-blue to-sky-accent text-sky-dark font-semibold hover:shadow-lg hover:shadow-sky-blue/50 transition flex items-center justify-center gap-2 group"
              >
                Надіслати повідомлення
                <Send size={18} className="group-hover:translate-x-1 transition" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Ми відповідаємо протягом 24 годин. Ваші дані захищені.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
