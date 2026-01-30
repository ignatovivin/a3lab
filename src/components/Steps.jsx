import './Steps.css'
import Button from './Button'

function Steps() {
  const steps = [
    { number: 1, title: <>Заполнить<br />анкету</> },
    { number: 2, title: <>Пройти проверку<br />со стороны платежного сервиса</> },
    { number: 3, title: <>Подписать<br />договор</> },
    { number: 4, title: <>Получить<br />первый платёж</> }
  ]

  return (
    <section id="how-it-works" className="steps" aria-labelledby="steps-title">
      <div className="steps-container">
        <div className="steps-content">
          <header className="steps-title-block">
            <h2 id="steps-title" className="text-style-h-2 steps-title">
              4 простых шага для<br />
              <span className="steps-title-gradient">оперативного подключения</span><br />
              без сложной интеграции
            </h2>
          </header>
          <div className="steps-controls" aria-label="Шаги подключения">
            {steps.map((step) => (
              <div key={step.number} className="steps-control-item">
                <div className="steps-control-frame">
                  <div className="steps-control-line" aria-hidden="true"></div>
                  <div className="steps-control-number" aria-label={`Шаг ${step.number}`}>
                    <div className="steps-control-outer" aria-hidden="true"></div>
                    <div className="steps-control-circle">
                      <span className="text-style-title-1 steps-number" aria-hidden="true">{step.number}</span>
                    </div>
                  </div>
                  <div className="steps-control-line" aria-hidden="true"></div>
                </div>
                <h3 className="text-style-title-2 steps-control-caption">{step.title}</h3>
              </div>
            ))}
          </div>
          <div className="steps-try-block">
            <Button 
              variant="blue" 
              size="large"
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
      </div>
    </section>
  )
}

export default Steps
