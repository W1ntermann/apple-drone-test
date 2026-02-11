#!/bin/bash

echo "🚀 SkyTech Drone Manufacturer"
echo "============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js не установлен!"
    echo "Скачайте с https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm не установлен!"
    exit 1
fi

echo "✅ Node.js: $(node --version)"
echo "✅ npm: $(npm --version)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Установка зависимостей..."
    npm install
else
    echo "✅ Зависимости уже установлены"
fi

echo ""
echo "🎯 Запуск dev сервера..."
echo "📱 Откройте http://localhost:3000"
echo ""

npm run dev
