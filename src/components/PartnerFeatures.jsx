import './PartnerLogos.css'
import Button from './Button'

function DotIcon() {
  return (
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="3" cy="3" r="3" fill="currentColor"/>
    </svg>
  )
}

function PartnerFeatures() {
  const plans = [
    {
      id: 1,
      name: 'Базовый',
      price: '2,3%',
      priceDetails: 'с оборота',
      description: 'Лёгкий старт для команд<br />из 2−10 сотрудников',
      features: [
        'Прием онлайн-платежей',
        'Базовая аналитика платежей',
        'Техподдержка в рабочие часы',
        'API для интеграций',
        'Экспорт отчетов для биллинга'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Расширенный',
      badge: 'Выгодно',
      price: '1,8%',
      priceDetails: 'с оборота + модули',
      description: 'Растущим компаниям<br />из 10−50 сотрудников',
      features: [
        'Все возможности Базового',
        'Продвинутая аналитика и BI',
        'Индивидуальные интеграции',
        'Модули автоматизации',
        'Приоритетная поддержка'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Продвинутый',
      price: '0,5%',
      priceDetails: 'с оборота + модули',
      description: 'Оптимально для компаний<br />из 50−250 сотрудников',
      features: [
        'Прием онлайн-платежей',
        'Базовая аналитика платежей',
        'Техподдержка в рабочие часы',
        'API для интеграций',
        'Экспорт отчетов для биллинга'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="partner-features" aria-labelledby="features-title">
      <div className="partner-features-container">
        <div className="partner-features-content">
          <header className="partner-features-header">
            <div className="partner-features-title-block">
              <h4 id="features-title" className="text-style-h-3">Выберите свой план</h4>
              <p className="text-style-body-3">
                Прозрачные тарифы без скрытых комиссий.<br />
                Первый месяц бесплатно для всех новых клиентов
              </p>
            </div>
          </header>
          <div className="partner-features-plans">
            {plans.map((plan) => (
              <article key={plan.id} className={`partner-features-plan ${plan.highlighted ? 'partner-features-plan-highlighted' : ''}`}>
                <div className="partner-features-plan-header">
                  <div className="partner-features-plan-name-block">
                    <div className="partner-features-plan-name-row">
                      <span className="partner-features-plan-name text-style-body-4">{plan.name}</span>
                      {plan.badge && (
                        <>
                          <div className="partner-features-plan-badge-divider" aria-hidden="true"></div>
                          <span className="partner-features-plan-badge text-style-body-4">{plan.badge}</span>
                        </>
                      )}
                    </div>
                    <div className="partner-features-plan-price-block">
                      <span className="partner-features-plan-price text-style-h-4" aria-label={`Цена ${plan.price}`}>{plan.price}</span>
                      <span className="partner-features-plan-price-details text-style-body-4">{plan.priceDetails}</span>
                    </div>
                  </div>
                  <p className="partner-features-plan-description text-style-caption" dangerouslySetInnerHTML={{ __html: plan.description }}></p>
                  <Button 
                    variant={plan.highlighted ? "blueDark" : "outline"} 
                    size="large"
                    className="grow"
                    onClick={() => {
                      const formElement = document.getElementById('contact-form')
                      if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }}
                  >
                    Подключить
                  </Button>
                </div>
                <div className="partner-features-plan-features">
                  {plan.features.map((feature, index) => (
                    <div key={`${plan.id}-feature-${index}`} className="partner-features-plan-feature">
                      <div className="partner-features-plan-feature-icon" aria-hidden="true">
                        <DotIcon />
                      </div>
                      <span className="partner-features-plan-feature-text text-style-caption">{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnerFeatures
