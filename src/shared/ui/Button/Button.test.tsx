import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('button', () => {
  test('test render', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })
  test('test theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toHaveClass('clear')
    screen.debug()
  })
})
