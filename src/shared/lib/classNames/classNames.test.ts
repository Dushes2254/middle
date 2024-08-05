import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })
  test('with additional class', () => {
    const expected = 'someClass additional'
    expect(classNames('someClass', {}, ['additional'])).toBe(expected)
  })
  test('with mods', () => {
    const expected = 'someClass additional hovered scrollable'
    expect(classNames('someClass', { hovered: true, scrollable: true }, ['additional'])).toBe(expected)
  })
  test('with mods false', () => {
    const expected = 'someClass additional hovered'
    expect(classNames('someClass', { hovered: true, scrollable: false }, ['additional'])).toBe(expected)
  })
  test('with mods undefined', () => {
    const expected = 'someClass additional hovered'
    expect(classNames('someClass', { hovered: true, scrollable: undefined }, ['additional'])).toBe(expected)
  })
})
