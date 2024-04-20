import capitalize from './capitalize'

test('hello world to Hello World', () => {
  expect(capitalize('hello world')).toBe('Hello World')
})

test('bye world to Bye World', () => {
  expect(capitalize('bye world')).toBe('Bye World')
})

test('GrEat to Great', () => {
  expect(capitalize('GrEat')).toBe('Great')
})

test('haha to Haha', () => {
  expect(capitalize('haha')).toBe('Haha')
})
