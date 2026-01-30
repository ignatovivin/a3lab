import './WhyChooseUs.css'
import iconCard1 from '../assets/icons/why-1.svg'
import iconCard2 from '../assets/icons/why-2.svg'
import iconCard3 from '../assets/icons/why-3.svg'
import iconCard4 from '../assets/icons/why-4.svg'

function WhyChooseUs() {
  const features = [
    {
      id: 1,
      title: 'Быстрый старт',
      subtitle: <>За пару дней начните<br /> принимать платежи</>,
      icon: iconCard1
    },
    {
      id: 2,
      title: 'Все сервисы в одном',
      subtitle: 'Одна интеграция закрывает платежи, продажи и процессы',
      icon: iconCard2
    },
    {
      id: 3,
      title: 'Надежность',
      subtitle: <>Партнерства с крупными банками<br />-эквайерами, PCI DSS</>,
      icon: iconCard3
    },
    {
      id: 4,
      title: 'Масштабируемость',
      subtitle: <>Модульная архитектура растет вместе<br />с вашим бизнесом</>,
      icon: iconCard4
    }
  ]

  return (
    <section className="why-choose-us" aria-labelledby="why-choose-us-title">
      <div className="why-choose-us-content">
        <header className="why-choose-us-header">
          <div className="why-choose-us-title-block">
            <h3 id="why-choose-us-title" className="why-choose-us-title">Почему нас выбирают</h3>
            <p className="why-choose-us-description text-style-body-3">
              Мы объединили лучшее от финтеха и SaaS инструментов,<br />
              чтобы создать подходящий продукт для вашего бизнеса
            </p>
          </div>
        </header>
        <div className="why-choose-us-cards">
          {features.map((feature) => (
            <article key={feature.id} className="why-choose-us-card">
              <div className="why-choose-us-card-icon" aria-hidden="true">
                <img src={feature.icon} alt="" width="90" height="90" />
              </div>
              <div className="why-choose-us-card-content">
                <h4 className="why-choose-us-card-title text-style-title-2">{feature.title}</h4>
                <p className="why-choose-us-card-subtitle text-style-caption">{feature.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
