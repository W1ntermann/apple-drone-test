@echo off
cls

echo.
echo 🚀 SkyTech Drone Manufacturer
echo =============================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Node.js не установлен!
    echo Скачайте с https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm is installed
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ npm не установлен!
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✅ Node.js: %NODE_VERSION%
echo ✅ npm: %NPM_VERSION%
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Установка зависимостей...
    call npm install
) else (
    echo ✅ Зависимости уже установлены
)

echo.
echo 🎯 Запуск dev сервера...
echo 📱 Откройте http://localhost:3000
echo.

call npm run dev
pause
