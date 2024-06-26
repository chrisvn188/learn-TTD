import calculator from './calculator'

const { add, subtract, multiply, divide } = calculator

// test addition
describe('Testing addition functionality', () => {
  test('add(2, 4) equals 6', () => {
    expect(add(2, 4)).toBe(6)
  })

  test('add(0, 11) equals 11', () => {
    expect(add(0, 11)).toBe(11)
  })

  test('add(-100, 100) equals 6', () => {
    expect(add(-100, 100)).toBe(0)
  })

  test('add(100) equals 100', () => {
    expect(add(100)).toBe(100)
  })

  test('add(-50) equals -50', () => {
    expect(add(-50)).toBe(-50)
  })
})

// test subtraction
describe('Testing Subtraction Functionality', () => {
  test('subtract(-10, 4) equals -14', () => {
    expect(subtract(-10, 4)).toBe(-14)
  })

  test('subtract(0, 11) equals -11', () => {
    expect(subtract(0, 11)).toBe(-11)
  })

  test('subtract(-100, -100) equals 0', () => {
    expect(subtract(-100, -100)).toBe(0)
  })

  test('subtract(25) equals -25', () => {
    expect(subtract(25)).toBe(-25)
  })

  test('subtract(0) equals 0', () => {
    expect(subtract(0)).toBe(0)
  })
})

// test multiplication
describe('Testing Multiply Functionality', () => {
  test('multiply(0, 0) equals 0', () => {
    expect(multiply(0, 0)).toBe(0)
  })

  test('multiply(10, -11) equals -110', () => {
    expect(multiply(10, -11)).toBe(-110)
  })

  test('multiply(123, 1) equals 6', () => {
    expect(multiply(123, 1)).toBe(123)
  })

  test('multiply(12) equals 12', () => {
    expect(multiply(12)).toBe(12)
  })
})

// test division
describe('Testing Division Functionality', () => {
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

  test('divide(100) equals 1/100', () => {
    expect(divide(100)).toBe(0.01)
  })

  test('divide(0) throw error', () => {
    expect(() => divide(0)).toThrow("Can't divide by 0")
  })
})
