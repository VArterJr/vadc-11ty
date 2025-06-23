@echo off
REM =================================================================
REM VinceArter.com 11ty Site - Windows Installation Script
REM =================================================================
REM This script installs all required npm packages for the project
REM based on the package.json dependencies
REM =================================================================

echo.
echo ====================================================
echo VinceArter.com 11ty Site - Package Installation
echo ====================================================
echo.
echo This script will install all required packages:
echo.
echo 11ty/Eleventy packages:
echo   - @11ty/eleventy ^3.1.1
echo   - @11ty/eleventy-img ^6.0.4
echo.
echo Tailwind CSS packages:
echo   - tailwindcss ^4.1.10
echo   - @tailwindcss/postcss ^4.1.10
echo   - @tailwindcss/typography ^0.5.16
echo   - autoprefixer ^10.4.21
echo   - postcss ^8.5.6
echo.
echo daisyUI and utilities:
echo   - daisyui ^5.0.43
echo   - cross-env ^7.0.3
echo   - kill-port ^2.0.1
echo.
echo Markdown processing:
echo   - markdown-it ^14.1.0
echo   - markdown-it-anchor ^9.2.0
echo.

REM Check if Node.js is installed
echo [1/3] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Recommended version: 18.x or higher
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js is installed: 
node --version

echo ✓ npm is available:
npm --version

echo.
echo [2/3] Installing all project dependencies...
echo This will install packages from package.json devDependencies and dependencies
echo This may take several minutes...
echo.

REM Install all dependencies from package.json
npm install
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Failed to install dependencies from package.json
    echo Please check your internet connection and try again
    echo.
    pause
    exit /b 1
)

echo.
echo ✓ All packages installed successfully!

echo.
echo [3/3] Verifying installation...

REM Verify key packages are installed
if not exist "node_modules\@11ty\eleventy" (
    echo ERROR: @11ty/eleventy not found in node_modules
    exit /b 1
)

if not exist "node_modules\tailwindcss" (
    echo ERROR: tailwindcss not found in node_modules
    exit /b 1
)

if not exist "node_modules\daisyui" (
    echo ERROR: daisyui not found in node_modules
    exit /b 1
)

echo ✓ Key packages verified

echo.
echo ====================================================
echo INSTALLATION COMPLETE!
echo ====================================================
echo.
echo All required packages have been installed:
echo.
echo ✓ 11ty (Eleventy) - Static site generator
echo ✓ @11ty/eleventy-img - Image optimization
echo ✓ Tailwind CSS - Utility-first CSS framework  
echo ✓ daisyUI - Tailwind CSS component library
echo ✓ PostCSS + Autoprefixer - CSS processing
echo ✓ markdown-it + anchor plugin - Markdown processing
echo ✓ Development utilities (cross-env, kill-port)
echo.
echo NEXT STEPS:
echo.
echo Start development:
echo   npm run dev
echo.
echo Build for production:
echo   npm run build
echo.
echo The site will be available at: http://localhost:8080
echo.
pause
