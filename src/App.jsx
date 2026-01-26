import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import PartnerLogos from './components/PartnerLogos'
import NewSection from './components/NewSection'
import PartnerFeatures from './components/PartnerFeatures'
import WhyChooseUs from './components/WhyChooseUs'
import Steps from './components/Steps'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  // Структурированные данные для SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ООО «Платёжный сервис А3»",
    "url": "https://a3lab.ru",
    "logo": "https://a3lab.ru/logo.svg",
    "description": "Платежный сервис для приема платежей ЖКХ в топ-банках страны",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-800-100-39-00",
      "contactType": "customer service",
      "areaServed": "RU",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://vc.ru"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Платежный сервис А3",
    "url": "https://a3lab.ru",
    "description": "Бесплатное подключение организаций ЖКУ к приему платежей от населения в крупнейших банковских приложениях и платежных сервисах без интеграции",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://a3lab.ru/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Платежный сервис",
    "provider": {
      "@type": "Organization",
      "name": "ООО «Платёжный сервис А3»"
    },
    "description": "Прием платежей ЖКХ в топ-банках страны. Оперативное подключение организаций ЖКУ к приему платежей от населения без сложной интеграции",
    "areaServed": {
      "@type": "Country",
      "name": "Россия"
    }
  }

  return (
    <div className="app">
      {/* Структурированные данные для SEO */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      
      <a href="#main-content" className="skip-link">
        Перейти к основному содержимому
      </a>
      <Header />
      <main role="main" id="main-content">
        <Hero />
        <PartnerLogos />
        <NewSection />
        <Steps />
        <WhyChooseUs />
        <PartnerFeatures />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
