import { expect, it } from 'vitest'
import { each } from '../../src/oop-introduction/arrow-functions'

it('each #1', () => {
  const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
  ]
  each(objects, function callback() {
    this.name = this.name.split('').reverse().join('')
  })

  const expected = [
    { name: 'lraK' },
    { name: 'aiM' },
  ]
  expect(objects).toEqual(expected)
})

it('each #2', () => {
  const objects = [
    { name: 'Karl' },
    { name: 'Mia' },
  ]
  each(objects, function callback() {
    this.name = this.name.toUpperCase()
  })

  const expected = [
    { name: 'KARL' },
    { name: 'MIA' },
  ]
  expect(objects).toEqual(expected)
})
