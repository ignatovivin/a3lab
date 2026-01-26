import './NewSection.css'
import { useState } from 'react'

function NewSection() {
  const [activeTab, setActiveTab] = useState('start')

  const tabs = [
    { id: 'start', label: 'Старт' },
    { id: 'growth', label: 'Рост' },
    { id: 'scale', label: 'Масштаб' }
  ]

  const cardsByTab = {
    start: [
      {
        id: 1,
        title: 'Платежи',
        subtitle: 'Документооборот и чеки',
        features: [
          'Прием онлайн-платежей',
          'Базовая аналитика платежей',
          'Техподдержка в рабочие часы'
        ]
      },
      {
        id: 2,
        title: 'Аналитика',
        subtitle: 'Отчеты по продажам и платежам',
        features: [
          'Реестры платежей',
          'Отчет о продажах',
          'Визуальный дешборд'
        ]
      },
      {
        id: 3,
        title: 'CRM',
        subtitle: 'Управление клиентами и сделками',
        features: [
          'База клиентов',
          'Воронка продаж',
          'Автоматизация'
        ]
      },
      {
        id: 4,
        title: 'Документооборот',
        subtitle: 'Электронный документооборот',
        features: [
          'Создание документов',
          'Подписание ЭЦП',
          'Архивирование'
        ]
      },
      {
        id: 5,
        title: 'Уведомления',
        subtitle: 'Информирование клиентов',
        features: [
          'Email-уведомления',
          'SMS-рассылки',
          'Push-уведомления'
        ]
      },
      {
        id: 6,
        title: 'Интеграции',
        subtitle: 'Подключение сервисов',
        features: [
          'API для разработчиков',
          'Вебхуки',
          'Интеграция с системами'
        ]
      }
    ],
    growth: [
      {
        id: 4,
        title: 'Маркетинг',
        subtitle: 'Продвижение и привлечение клиентов',
        features: [
          'Email-рассылки',
          'SMS-уведомления',
          'Кампании и акции'
        ]
      },
      {
        id: 5,
        title: 'Интеграции',
        subtitle: 'Подключение внешних сервисов',
        features: [
          'API для разработчиков',
          'Вебхуки и уведомления',
          'Интеграция с 1С'
        ]
      },
      {
        id: 6,
        title: 'Отчетность',
        subtitle: 'Расширенная аналитика',
        features: [
          'Детальные отчеты',
          'Экспорт данных',
          'Настраиваемые дашборды'
        ]
      }
    ],
    scale: [
      {
        id: 7,
        title: 'Автоматизация',
        subtitle: 'Умные процессы и воронки',
        features: [
          'Автоматические сценарии',
          'Умные триггеры',
          'A/B тестирование'
        ]
      },
      {
        id: 8,
        title: 'Мультиканальность',
        subtitle: 'Работа через все каналы',
        features: [
          'Омниканальные продажи',
          'Единая база клиентов',
          'Синхронизация данных'
        ]
      },
      {
        id: 9,
        title: 'Масштабирование',
        subtitle: 'Рост без ограничений',
        features: [
          'Неограниченные лимиты',
          'Высокая производительность',
          'Клиентская поддержка 24/7'
        ]
      }
    ]
  }

  const cards = cardsByTab[activeTab] || cardsByTab.start

  return (
    <section className="new-section" aria-labelledby="new-section-title">
      <div className="new-section-container">
        <div className="new-section-content">
          <header className="new-section-header">
            <h2 id="new-section-title" className="new-section-title text-style-h-3">
              Соберите платформу под себя
            </h2>
            <p className="new-section-description text-style-body-3">
              Начните с базовых функций и добавляйте модули по мере роста бизнеса
            </p>
          </header>
          <div className="new-section-controls">
            <div className="new-section-segmented-control">
              <div className="new-section-segmented-control-wrapper">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`new-section-segmented-control-segment ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    aria-pressed={activeTab === tab.id}
                  >
                    <span className="new-section-segmented-control-label">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="new-section-cards">
              {cards.map((card) => (
                <div key={card.id} className="new-section-card">
                  <div className="new-section-card-content">
                    <div className="new-section-card-info">
                      <h3 className="new-section-card-title text-style-title-2">
                        {card.title}
                      </h3>
                      <p className="new-section-card-subtitle text-style-body-4">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="new-section-card-features">
                      {card.features.map((feature, index) => (
                        <div key={index} className="new-section-card-feature">
                          <div className="new-section-card-feature-dot"></div>
                          <span className="new-section-card-feature-text text-style-caption">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewSection
