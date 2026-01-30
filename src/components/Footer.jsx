import './Footer.css'

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-logo-menu">
          <div className="footer-logo-title">
            <h2 className="footer-title text-style-title-2">
              Платёжный сервис<br />
              с уникальной<br />
              и умной технологией
            </h2>
          </div>
          <nav className="footer-menu" aria-label="Навигация по сайту">
            <div className="footer-menu-column">
              <span className="footer-menu-title text-style-caption">Компания</span>
              <div className="footer-menu-items">
                <a href="#" className="footer-menu-item text-style-body-5">Работа у нас</a>
                <a href="#" className="footer-menu-item text-style-body-5">Документы</a>
                <a href="#" className="footer-menu-item text-style-body-5">Контакты</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="footer-spacer footer-spacer-large" aria-hidden="true"></div>
        <div className="footer-bottom">
          <p className="footer-copyright text-style-caption">© {new Date().getFullYear()} ООО «Платёжный сервис А3»</p>
          <div className="footer-contacts">
            <a href="tel:+78001003900" className="footer-phone text-style-body-5">8 800 100 39 00</a>
          </div>
        </div>
        <div className="footer-spacer footer-spacer-medium" aria-hidden="true"></div>
        <p className="footer-legal text-style-caption">
          ООО «Платёжный сервис А3» аккредитовано в качестве организации, осуществляющей деятельность в области информационных технологий, в марте 2022 г. Компания оказывает услуги информационного и технологического обслуживания участникам расчётов (кредитным организациям, банковским платежным агентам, получателям платежей и плательщикам) — код вида деятельности в области информационных технологий 20.01. Посредством программного обеспечения, созданного Компанией, осуществляется сбор, обработка и рассылка участникам расчётов информации по операциям, приём электронных платёжных документов, сформированных плательщиками, проверка целостности таких документов, их маршрутизация на оплату, приём ответов о проведении или отказе в проведении платежей, направление получателям платежей информации о результатах проведения платежей.
          <br /><br />
          Стоимость услуг согласовывается индивидуально, в зависимости от объема, модели интеграции и сценария взаимодействия.
        </p>
        <div className="footer-spacer footer-spacer-medium" aria-hidden="true"></div>
      </div>
    </footer>
  )
}

export default Footer
