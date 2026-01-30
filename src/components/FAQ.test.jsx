import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FAQ from './FAQ'

describe('FAQ', () => {
  it('рендерит секцию FAQ с заголовком', () => {
    render(<FAQ />)
    const section = document.querySelector('.faq')
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('aria-labelledby', 'faq-title')
    expect(screen.getByRole('heading', { name: /часто задаваемые/i })).toBeInTheDocument()
  })

  it('содержит три пункта аккордеона', () => {
    render(<FAQ />)
    expect(screen.getByText(/в течение какого времени рассматривается заявка/i)).toBeInTheDocument()
    expect(screen.getByText(/как узнаем, что договор находится на подписании/i)).toBeInTheDocument()
    expect(screen.getByText(/какие наши действия после подачи заявки/i)).toBeInTheDocument()
  })

  it('третий пункт открыт по умолчанию (defaultOpen)', () => {
    render(<FAQ />)
    const thirdContent = screen.getByText(/после подачи заявки необходимо будет подписать договор/i)
    expect(thirdContent).toBeVisible()
  })

  it('раскрывает пункт по клику', async () => {
    const user = userEvent.setup()
    render(<FAQ />)
    const firstButton = screen.getByRole('button', {
      name: /в течение какого времени рассматривается заявка/i
    })
    await user.click(firstButton)
    expect(screen.getByText(/в среднем заявка рассматривается в течение 3-х рабочих дней/i)).toBeVisible()
  })
})
