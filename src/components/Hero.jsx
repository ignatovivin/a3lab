import './Hero.css'
import Button from './Button'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <div className="hero-content">
          <h1 id="hero-title" className="text-style-h-2">
            Приём платежей ЖКХ в топ-банках страны
          </h1>
          <p className="text-style-body-4">
            Бесплатное подключение организаций ЖКУ к приёму платежей от населения в крупнейших банковских приложениях и платёжных сервисах без интеграции
          </p>
          <Button 
            variant="blue"
            onClick={() => {
              const formElement = document.getElementById('contact-form')
              if (formElement) {
                formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
          >
            Попробовать бесплатно
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
