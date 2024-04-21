import reverseString from './reverseString'

test('reverse hello to olleh', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('reverse Great to taerG', () => {
  expect(reverseString('Great')).toBe('taerG')
})

test('102 to 201', () => {
  expect(reverseString('102')).toBe('201')
})
