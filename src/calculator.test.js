import calculator from './calculator'

const { add, subtract, multiply, divide } = calculator

// test addition
test('add(2, 4) equals 6', () => {
  expect(add(2, 4)).toBe(6)
})

test('add(0, 11) equals 11', () => {
  expect(add(0, 11)).toBe(11)
})

test('add(-100, 100) equals 6', () => {
  expect(add(-100, 100)).toBe(0)
})

// test subtraction
test('subtract(-10, 4) equals -14', () => {
  expect(subtract(-10, 4)).toBe(-14)
})

test('subtract(0, 11) equals -11', () => {
  expect(subtract(0, 11)).toBe(-11)
})

test('subtract(-100, -100) equals 6', () => {
  expect(subtract(-100, -100)).toBe(0)
})

// test multiplication
test('multiply(0, 0) equals 0', () => {
  expect(multiply(0, 0)).toBe(0)
})

test('multiply(10, -11) equals -110', () => {
  expect(multiply(10, -11)).toBe(-110)
})

test('multiply(123, 1) equals 6', () => {
  expect(multiply(123, 1)).toBe(123)
})

// test division
test('divide(10, 5) equals 2', () => {
  expect(divide(10, 5)).toBe(2)
})

test('divide(0, 11) equals 0', () => {
  expect(divide(0, 11)).toBe(0)
})

test('divide(-100, 0) throw error', () => {
  expect(() => divide(-100, 0)).toThrow("Can't divide by 0")
})

test('divide(-100, 2) equals -50', () => {
  expect(divide(-100, 2)).toBe(-50)
})
