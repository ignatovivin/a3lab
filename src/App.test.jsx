import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('рендерит приложение без ошибок', () => {
    render(<App />)
    expect(document.querySelector('.app')).toBeInTheDocument()
  })

  it('содержит ссылку «Перейти к основному содержимому»', () => {
    render(<App />)
    const skipLink = screen.getByRole('link', { name: /перейти к основному содержимому/i })
    expect(skipLink).toBeInTheDocument()
    expect(skipLink).toHaveAttribute('href', '#main-content')
  })

  it('содержит main с id main-content', () => {
    render(<App />)
    const main = document.getElementById('main-content')
    expect(main).toBeInTheDocument()
    expect(main?.tagName).toBe('MAIN')
  })

  it('содержит секции: Hero, решения, шаги, тарифы, форма', () => {
    render(<App />)
    expect(document.getElementById('main-content')).toBeInTheDocument()
    expect(document.querySelector('.hero')).toBeInTheDocument()
    expect(document.getElementById('solutions')).toBeInTheDocument()
    expect(document.getElementById('how-it-works')).toBeInTheDocument()
    expect(document.getElementById('pricing')).toBeInTheDocument()
    expect(document.getElementById('contact-form')).toBeInTheDocument()
  })

  it('содержит header и footer', () => {
    render(<App />)
    expect(document.querySelector('header')).toBeInTheDocument()
    expect(document.querySelector('footer')).toBeInTheDocument()
  })
})
