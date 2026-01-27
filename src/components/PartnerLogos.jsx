import './PartnerLogos.css'
import alfaLogo from '../assets/logos/alfa.svg'
import tbankLogo from '../assets/logos/t-bank.svg'
import psbLogo from '../assets/logos/psb.svg'
import ozonLogo from '../assets/logos/ozon.svg'
import uralLogo from '../assets/logos/ural.svg'
import gaspromLogo from '../assets/logos/gasprom.svg'
import rshbLogo from '../assets/logos/rshb.svg'
import vtbLogo from '../assets/logos/vtb.svg'
import icon1 from '../assets/icons/icon1.svg'
import icon2 from '../assets/icons/icon2.svg'
import icon3 from '../assets/icons/icon3.svg'
import icon4 from '../assets/icons/icon4.svg'
import icon6 from '../assets/icons/icon6.svg'

function PartnerLogos() {
  const logos = [
    { name: 'alfa', width: 129, src: alfaLogo },
    { name: 't-bank', width: 107, src: tbankLogo },
    { name: 'psb', width: 92, src: psbLogo },
    { name: 'ozon', width: 141, src: ozonLogo },
    { name: 'ural', width: 137, src: uralLogo },
    { name: 'gasprom', width: 180, src: gaspromLogo },
    { name: 'rshb', width: 101, src: rshbLogo },
    { name: 'vtb', width: 68, src: vtbLogo }
  ]

  // Дублируем логотипы несколько раз для бесшовной анимации
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <section className="partner" aria-labelledby="partner-title">
      <div className="partner-wrapper" aria-label="Партнеры и банки">
        <div className="partner-track" aria-hidden="true">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="partner-item" style={{ width: `${logo.width}px` }}>
              <img src={logo.src} alt={`Логотип ${logo.name}`} className="partner-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
      <div className="partner-content">
        <h2 id="partner-title" className="text-style-h-2">
          От лида до оплаты<br /><span className="partner-text-black">без проблем</span>
        </h2>
        <p className="partner-title text-style-body-3 partner-text-left">
          Закрываем весь путь клиента и автоматизируем рутину
        </p>
        <div className="partner-block">
          <ul className="partner-table" role="list">
            <li className="partner-table-row">
              <div className="partner-table-line" aria-hidden="true"></div>
              <div className="partner-table-space" aria-hidden="true"></div>
              <article className="partner-table-content">
                <header className="partner-table-header">
                  <img src={icon1} alt="" className="partner-table-icon" aria-hidden="true" />
                  <h3 className="text-style-title-3">Подключаем к крупнейшим банкам</h3>
                </header>
                <p className="text-style-body-5">Один договор позволяет организовать оперативное подключение к приёму платежей организаций коммунальных услуг во всех топ-банках страны</p>
              </article>
              <div className="partner-table-space" aria-hidden="true"></div>
              <div className="partner-table-line" aria-hidden="true"></div>
            </li>
            <li className="partner-table-row">
              <div className="partner-table-line" aria-hidden="true"></div>
              <div className="partner-table-space" aria-hidden="true"></div>
              <article className="partner-table-content">
                <header className="partner-table-header">
                  <img src={icon2} alt="" className="partner-table-icon" aria-hidden="true" />
                  <h3 className="text-style-title-3">Формируем единый реестр платежей</h3>
                </header>
                <p className="text-style-body-5">Платежи от всех банков собираем в одном платёжном поручении, что экономит трудозатраты на обработку всех входящих платежей в десятки раз</p>
              </article>
              <div className="partner-table-space" aria-hidden="true"></div>
              <div className="partner-table-line" aria-hidden="true"></div>
            </li>
            <li className="partner-table-row">
              <div className="partner-table-line" aria-hidden="true"></div>
              <div className="partner-table-space" aria-hidden="true"></div>
              <article className="partner-table-content">
                <header className="partner-table-header">
                  <img src={icon3} alt="" className="partner-table-icon" aria-hidden="true" />
                  <h3 className="text-style-title-3">Реализуем готовое платёжное решение</h3>
                </header>
                <p className="text-style-body-5">Заменяет эквайринг при онлайн-оплате и даёт больше возможностей для роста дохода</p>
              </article>
              <div className="partner-table-space" aria-hidden="true"></div>
              <div className="partner-table-line" aria-hidden="true"></div>
            </li>
            <li className="partner-table-row">
              <div className="partner-table-line" aria-hidden="true"></div>
              <div className="partner-table-space" aria-hidden="true"></div>
              <article className="partner-table-content">
                <header className="partner-table-header">
                  <img src={icon4} alt="" className="partner-table-icon" aria-hidden="true" />
                  <h3 className="text-style-title-3">Отображаем всю историю платежей</h3>
                </header>
                <p className="text-style-body-5">В личном кабинете отображаются все транзакции, принятые через Платежный сервис А3, каналы оплаты, информация о пользователе и прочие данные, которые указывает пользователь при платеже</p>
              </article>
              <div className="partner-table-space" aria-hidden="true"></div>
              <div className="partner-table-line" aria-hidden="true"></div>
            </li>
            <li className="partner-table-row">
              <div className="partner-table-line" aria-hidden="true"></div>
              <div className="partner-table-space" aria-hidden="true"></div>
              <article className="partner-table-content">
                <header className="partner-table-header">
                  <img src={icon6} alt="" className="partner-table-icon" aria-hidden="true" />
                  <h3 className="text-style-title-3">Отправляем уведомления<br />в банковских приложениях</h3>
                </header>
                <p className="text-style-body-5">Плательщик получает уведомление о выставленном счёте, своевременно совершает оплату, благодаря чему сокращается дебиторская задолженность</p>
              </article>
              <div className="partner-table-space" aria-hidden="true"></div>
              <div className="partner-table-line partner-table-line-last" aria-hidden="true"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PartnerLogos
