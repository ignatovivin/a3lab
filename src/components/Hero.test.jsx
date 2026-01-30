import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('рендерит секцию Hero', () => {
    render(<Hero />)
    const section = document.querySelector('.hero')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('aria-labelledby', 'hero-title')
  })

  it('содержит единственный h1 с текстом про приём платежей', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/приём платежей в топ-банках страны/i)
    expect(heading).toHaveAttribute('id', 'hero-title')
  })

  it('содержит кнопку «Попробовать бесплатно»', () => {
    render(<Hero />)
    const button = screen.getByRole('button', { name: /попробовать бесплатно/i })
    expect(button).toBeInTheDocument()
  })

  it('содержит описание про бесплатное подключение', () => {
    render(<Hero />)
    expect(screen.getByText(/бесплатное подключение организаций/i)).toBeInTheDocument()
  })
})
