import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from './ContactForm'

describe('ContactForm', () => {
  it('рендерит секцию формы с заголовком', () => {
    render(<ContactForm />)
    expect(document.getElementById('contact-form')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /остались вопросы/i })).toBeInTheDocument()
  })

  it('содержит форму с полями: имя, телефон, email, компания', () => {
    render(<ContactForm />)
    const form = document.querySelector('form.contact-form-card')
    expect(form).toBeInTheDocument()
    expect(screen.getByLabelText(/имя/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/телефон/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/компания/i)).toBeInTheDocument()
  })

  it('содержит кнопку отправки', () => {
    render(<ContactForm />)
    const submitButton = screen.getByRole('button', { name: /отправить заявку/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('показывает ошибку при пустом имени после отправки', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    const submitButton = screen.getByRole('button', { name: /отправить заявку/i })
    await user.click(submitButton)
    expect(screen.getByText(/заполните имя/i)).toBeInTheDocument()
  })
})
