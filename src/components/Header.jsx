import './Header.css'
import Button from './Button'
import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 0)
    }

    const checkLightSections = () => {
      const headerHeight = 80
      
      // Получаем все секции с белым фоном
      const lightSections = [
        document.querySelector('.partner'),
        document.querySelector('.why-choose-us'),
        document.querySelector('.faq'),
        document.querySelector('.contact-form')
      ].filter(Boolean)

      // Получаем все белые элементы (карточки, аккордеоны и т.д.)
      const lightElements = [
        ...document.querySelectorAll('.new-section-card'),
        ...document.querySelectorAll('.accordion'),
        ...document.querySelectorAll('.contact-form-card'),
        ...document.querySelectorAll('.partner-features-plan'),
        ...document.querySelectorAll('.why-choose-us-card')
      ]

      // Функция проверки пересечения элемента с header
      const checkElementIntersection = (element) => {
        if (!element) return false
        
        const rect = element.getBoundingClientRect()
        const headerTop = 0
        const headerBottom = headerHeight
        const pointUnderHeader = headerBottom
        
        // Проверяем пересечение: элемент виден в области header
        const isIntersecting = rect.top < headerBottom && rect.bottom > headerTop
        
        // Проверяем, если точка под header находится внутри элемента
        const isPointInside = pointUnderHeader >= rect.top && pointUnderHeader <= rect.bottom
        
        // Дополнительная проверка: если верх элемента находится близко к header
        const threshold = 200
        const isNearHeader = rect.top >= 0 && rect.top < (headerBottom + threshold) && rect.bottom > headerTop
        
        return isIntersecting || isPointInside || isNearHeader
      }

      // Проверяем секции
      const isOverLightSection = lightSections.some(checkElementIntersection)
      
      // Проверяем белые элементы (карточки и т.д.)
      const isOverLightElement = lightElements.some(checkElementIntersection)

      setIsDark(isOverLightSection || isOverLightElement)
    }

    const handleScrollAndCheck = () => {
      handleScroll()
      checkLightSections()
    }

    // Используем throttling для оптимизации
    let ticking = false
    const optimizedHandler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollAndCheck()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', optimizedHandler, { passive: true })
    
    // Проверяем при загрузке с небольшой задержкой, чтобы дать время секциям отрендериться
    setTimeout(() => {
      handleScrollAndCheck()
    }, 100)
    
    // Также проверяем при изменении размера окна
    window.addEventListener('resize', handleScrollAndCheck, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', optimizedHandler)
      window.removeEventListener('resize', handleScrollAndCheck)
    }
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''} ${isDark ? 'header-dark' : ''}`} role="banner">
      <nav className="header-menu" aria-label="Основная навигация">
        <a href="/" className="header-logo" aria-label="Главная страница - Платежный сервис А3">
          <svg width="40" height="40" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M51.9191 33.6044C51.7656 34.5282 51.6012 35.1848 51.3601 35.9528C49.6062 41.3729 45.9998 44.7007 40.4752 45.8359C40.1029 45.9106 39.7291 45.9684 39.348 46.0061C38.4956 46.0906 38.0327 45.0369 38.0781 44.1816C38.1167 43.4551 38.605 42.7281 39.3274 42.6427C40.5799 42.4946 41.7705 42.1507 42.8867 41.5398C46.1423 39.7702 48.0825 37.0212 48.5429 33.2817C49.2445 27.4609 45.2764 22.2522 39.5215 21.4064C39.0721 21.3396 38.6117 21.3062 38.1623 21.3062C37.4498 21.3062 36.9346 20.9835 36.6387 20.3379C36.3427 19.6924 36.4852 19.0803 36.9017 18.5238C37.5374 17.667 38.1758 16.8129 38.8142 15.9588L38.8145 15.9584L38.8148 15.9581C39.4532 15.104 40.0916 14.2499 40.7273 13.3931C41.1877 12.7754 41.6481 12.1549 42.1085 11.5344C42.5689 10.914 43.0293 10.2935 43.4896 9.67578C43.5013 9.66055 43.5137 9.64557 43.5263 9.63042C43.6656 9.46259 43.483 9.28625 43.2649 9.28625H43.1279H35.3671C34.2381 9.28625 33.5365 8.64073 33.5475 7.61681C33.5475 6.59288 34.26 5.9585 35.389 5.9585H46.7562C47.4906 5.9585 48.0825 6.15883 48.4443 6.84886C48.817 7.56116 48.6635 8.19555 48.2141 8.80768C45.945 11.8794 43.676 14.9623 41.4069 18.0452C41.3919 18.0667 41.3776 18.0872 41.3629 18.1086L41.3627 18.1088C41.2891 18.2152 41.3377 18.3641 41.4611 18.4028C41.5295 18.4242 41.5976 18.4454 41.6655 18.4666L41.6658 18.4667C42.4132 18.6996 43.1365 18.9251 43.8294 19.2584C48.1593 21.3619 50.7791 24.8009 51.7218 29.5644C51.9191 30.5438 52.1164 31.9795 51.9191 33.6044ZM24.9972 39.6261C24.428 38.6527 23.9953 37.6147 23.641 36.4531C23.6027 36.3277 23.43 36.3086 23.3655 36.4228C23.3401 36.4678 23.3184 36.5063 23.2982 36.5432C21.0839 41.0841 16.6226 43.3768 11.7227 42.4753C6.20907 41.4625 2.39444 35.6862 3.42483 30.0992C4.40041 24.846 9.1687 20.8505 14.6933 21.3513C17.0501 21.5739 19.0999 22.4643 20.8428 24.0669C23.2434 26.2706 24.3176 29.0752 24.3505 32.314C24.3834 34.6846 24.9863 36.8882 26.1372 38.9249C28.0336 42.2861 30.8288 44.4786 34.49 45.5359C35.323 45.7808 36.1013 45.4135 36.463 44.6567C36.8028 43.9555 36.5946 43.1319 35.9698 42.62C35.7368 42.4348 35.4664 42.3543 35.1931 42.2728C35.1706 42.2661 35.1482 42.2595 35.1257 42.2527C30.6096 40.906 27.628 36.61 27.639 32.1581C27.6499 28.1793 27.639 24.2115 27.628 20.2327L27.628 20.2161C27.628 19.949 27.6061 19.6707 27.5622 19.3925C27.4307 18.5466 26.7401 17.9456 25.9399 17.9568C25.1397 17.9679 24.482 18.5466 24.3505 19.3702C24.2594 19.9463 24.2713 20.527 24.2832 21.1064C24.2899 21.4336 24.2966 21.7605 24.2847 22.0859C24.2847 22.1387 24.2884 22.1921 24.2922 22.2461C24.2955 22.2946 24.2989 22.3436 24.2997 22.393C24.303 22.5975 24.0683 22.6364 23.9316 22.4843C23.8144 22.3538 23.7024 22.2292 23.5832 22.1081C23.3639 21.8855 23.1338 21.6741 22.8926 21.4737C19.3082 18.3908 15.2085 17.2779 10.6266 18.3686C3.81945 19.9824 -0.619992 26.3819 0.070588 33.4047C0.399435 36.7435 1.71483 39.615 4.0606 41.9411C7.43677 45.2911 11.5035 46.6155 16.1732 45.8142C19.8014 45.1909 22.6953 43.2878 24.9095 40.3161C25.074 40.0936 25.1616 39.9044 24.9972 39.6261Z" fill="currentColor"/>
          </svg>
        </a>
        <div className="header-nav-group">
          <div className="header-tabs" role="menubar">
            <Button 
              variant="ghost" 
              className="header-tab" 
              role="menuitem"
              onClick={() => {
                const element = document.getElementById('how-it-works')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <div className="header-tab-content">
                <span className="header-tab-text text-style-body-4">Как это работает</span>
              </div>
            </Button>
            <Button 
              variant="ghost" 
              className="header-tab" 
              role="menuitem"
              onClick={() => {
                const element = document.getElementById('solutions')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <div className="header-tab-content">
                <span className="header-tab-text text-style-body-4">Решения</span>
              </div>
            </Button>
            <Button 
              variant="ghost" 
              className="header-tab" 
              role="menuitem"
              onClick={() => {
                const element = document.getElementById('pricing')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              <div className="header-tab-content">
                <span className="header-tab-text text-style-body-4">Тарифы</span>
              </div>
            </Button>
          </div>
          <Button 
            variant="blue" 
            className="header-button"
            onClick={() => {
              const formElement = document.getElementById('contact-form')
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            Оставить заявку
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default Header
