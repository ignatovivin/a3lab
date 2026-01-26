import './FAQ.css'
import Accordion from './Accordion'

function FAQ() {
  const faqItems = [
    {
      id: 1,
      title: 'В течение какого времени рассматривается заявка?',
      content: 'В среднем заявка рассматривается в течение 3-х рабочих дней.'
    },
    {
      id: 2,
      title: 'Как узнаем, что Договор находится на подписании?',
      content: 'После подачи заявки ваш курирующий менеджер свяжется с вами и сообщит о статусе договора.'
    },
    {
      id: 3,
      title: 'Какие наши действия после подачи заявки?',
      content: (
        <>
          После подачи заявки необходимо будет подписать договор, предоставить лицевой счет для тестового платежа и загрузить в вашу биллинговую систему реестр платежей.
          <br /><br />
          На любом из этих этапов с вами на связи будет ваш курирующий менеджер.
        </>
      ),
      defaultOpen: true
    }
  ]

  // Структурированные данные для FAQ (JSON-LD)
  const getTextContent = (content) => {
    if (typeof content === 'string') {
      return content
    }
    if (typeof content === 'object' && content.props) {
      // Извлекаем текстовое содержимое из React элементов
      const extractText = (node) => {
        if (typeof node === 'string') return node
        if (Array.isArray(node)) {
          return node.map(extractText).filter(Boolean).join(' ')
        }
        if (node && node.props && node.props.children) {
          return extractText(node.props.children)
        }
        return ''
      }
      return extractText(content).replace(/\s+/g, ' ').trim()
    }
    return ''
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.title,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": getTextContent(item.content)
      }
    }))
  }

  return (
    <section className="faq" aria-labelledby="faq-title">
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="faq-container">
        <div className="faq-content">
          <div className="faq-header">
            <h2 id="faq-title" className="faq-title text-style-h-3">
              Часто задаваемые<br /><span className="faq-title-gradient">вопросы</span>
            </h2>
          </div>
          <div className="faq-items">
            {faqItems.map((item) => (
              <Accordion
                key={item.id}
                id={item.id}
                title={item.title}
                defaultOpen={item.defaultOpen || false}
              >
                {item.content}
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
