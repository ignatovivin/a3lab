import './ContactForm.css'
import Input from './Input'
import Dropdown from './Dropdown'
import Textarea from './Textarea'
import Button from './Button'
import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    turnover: '',
    task: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    industry: '',
    turnover: '',
    task: ''
  })

  const [touched, setTouched] = useState({
    name: false,
    phone: false,
    email: false,
    company: false,
    industry: false,
    turnover: false,
    task: false
  })

  const validateField = (field, value) => {
    let error = ''
    
    switch (field) {
      case 'name':
        if (!value || value.trim() === '') {
          error = 'Заполните имя'
        } else if (value.trim().length < 2) {
          error = 'Заполните имя'
        }
        break
      case 'phone':
        if (!value || value.trim() === '') {
          error = 'Заполните телефон'
        } else {
          const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
          if (!phoneRegex.test(value.trim())) {
            error = 'Заполните телефон'
          }
        }
        break
      case 'email':
        if (!value || value.trim() === '') {
          error = 'Заполните Email'
        } else {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          if (!emailRegex.test(value.trim())) {
            error = 'Заполните Email'
          }
        }
        break
      case 'company':
        if (!value || value.trim() === '') {
          error = 'Заполните компанию'
        }
        break
      case 'industry':
        if (!value || value.trim() === '') {
          error = 'Заполните сферу деятельности'
        }
        break
      case 'turnover':
        if (!value || value.trim() === '') {
          error = 'Заполните оборот в месяц'
        }
        break
      case 'task':
        // Textarea не обязательное поле, валидация не требуется
        break
      default:
        break
    }
    
    return error
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))

    // Валидация при изменении, если поле уже было затронуто
    if (touched[field]) {
      const error = validateField(field, value)
      setErrors(prev => ({
        ...prev,
        [field]: error
      }))
    }
  }

  const handleBlur = (field, value) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }))

    const error = validateField(field, value)
    setErrors(prev => ({
      ...prev,
      [field]: error
    }))
  }

  const validateForm = () => {
    const newErrors = {}
    const newTouched = {}
    let isValid = true

    // Валидируем все поля кроме task (textarea не обязательное)
    Object.keys(formData).forEach(field => {
      if (field !== 'task') {
        newTouched[field] = true
        const error = validateField(field, formData[field])
        newErrors[field] = error
        if (error) {
          isValid = false
        }
      }
    })

    setErrors(newErrors)
    setTouched(newTouched)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const isValid = validateForm()
    if (isValid) {
      // Здесь будет логика отправки формы
      console.log('Form submitted:', formData)
      // Можно добавить отправку на сервер
    } else {
      // Ошибки уже установлены в validateForm через setErrors
      console.log('Form has validation errors')
    }
  }

  const industryOptions = [
    'Банки',
    'Платежные сервисы',
    'Поставщики услуг',
    'E-commerce',
    'Другое'
  ]

  const turnoverOptions = [
    'До 1 млн руб.',
    '1-10 млн руб.',
    '10-100 млн руб.',
    'Свыше 100 млн руб.'
  ]

  return (
    <section id="contact-form" className="contact-form" role="region" aria-labelledby="contact-form-title">
      <div className="contact-form-container">
        <div className="contact-form-spacer contact-form-spacer-top" aria-hidden="true"></div>
        <div className="contact-form-content">
          <div className="contact-form-header">
            <h2 id="contact-form-title" className="contact-form-title text-style-h-2">
              Остались вопросы?
            </h2>
            <div className="contact-form-spacer-small" aria-hidden="true"></div>
            <p className="contact-form-description text-style-body-4">
              Оставьте свои контакты и наш менеджер свяжется с вами<br />
              в течение двух рабочих дней
            </p>
            <div className="contact-form-spacer-small" aria-hidden="true"></div>
          </div>
          <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-fields">
              <div className="contact-form-row">
                <Input
                  label="Имя*"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  onBlur={(e) => handleBlur('name', e.target.value)}
                  error={!!errors.name && touched.name}
                  errorMessage={touched.name ? errors.name : ''}
                  size="small"
                  className="contact-form-input"
                />
                <Input
                  label="Телефон*"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  onBlur={(e) => handleBlur('phone', e.target.value)}
                  error={!!errors.phone && touched.phone}
                  errorMessage={touched.phone ? errors.phone : ''}
                  size="small"
                  className="contact-form-input"
                />
              </div>
              <div className="contact-form-row">
                <Input
                  label="Email*"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  error={!!errors.email && touched.email}
                  errorMessage={touched.email ? errors.email : ''}
                  size="small"
                  className="contact-form-input"
                />
                <Input
                  label="Компания*"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  onBlur={(e) => handleBlur('company', e.target.value)}
                  error={!!errors.company && touched.company}
                  errorMessage={touched.company ? errors.company : ''}
                  size="small"
                  className="contact-form-input"
                />
              </div>
              <Dropdown
                label="Сфера деятельности*"
                value={formData.industry}
                options={industryOptions}
                onChange={(option) => {
                  const value = typeof option === 'string' ? option : option.value || option.label
                  handleInputChange('industry', value)
                }}
                onBlur={() => handleBlur('industry', formData.industry)}
                error={!!errors.industry && touched.industry}
                errorMessage={touched.industry ? errors.industry : ''}
                size="big"
                className="contact-form-dropdown"
              />
              <Dropdown
                label="Ваш оборот в месяц*"
                value={formData.turnover}
                options={turnoverOptions}
                onChange={(option) => {
                  const value = typeof option === 'string' ? option : option.value || option.label
                  handleInputChange('turnover', value)
                }}
                onBlur={() => handleBlur('turnover', formData.turnover)}
                error={!!errors.turnover && touched.turnover}
                errorMessage={touched.turnover ? errors.turnover : ''}
                size="big"
                className="contact-form-dropdown"
              />
              <Textarea
                label="Расскажите о задаче"
                value={formData.task}
                onChange={(e) => handleInputChange('task', e.target.value)}
                rows={4}
                className="contact-form-textarea"
              />
            </div>
            <p className="contact-form-consent text-style-caption">
              Нажимая кнопку «Отправить заявку» вы подтверждаете, что согласны на обработку персональных данных и соглашаетесь получать информацию о предложениях в соответствии с Правилами рассылок ООО «Платёжный сервис А3»
            </p>
            <Button
              type="submit"
              variant="blueDark"
              size="default"
              className="contact-form-button"
            >
              Отправить заявку
            </Button>
          </form>
        </div>
        <div className="contact-form-spacer contact-form-spacer-bottom" aria-hidden="true"></div>
      </div>
    </section>
  )
}

export default ContactForm
