import caesarCipher from './caesarCipher'

describe('Lowercase single letter input', () => {
  test('"a" becomes "b" with factor number: 1', () => {
    expect(caesarCipher('a', 1)).toBe('b')
  })

  test('"a" becomes "b" with factor number: 27', () => {
    expect(caesarCipher('a', 27)).toBe('b')
  })

  test('"a" becomes "n" with factor number: 13', () => {
    expect(caesarCipher('a', 13)).toBe('n')
  })

  test('"z" becomes "a" with factor number: 1', () => {
    expect(caesarCipher('z', 1)).toBe('a')
  })

  test('"z" still be "z" with factor number: 0', () => {
    expect(caesarCipher('z', 0)).toBe('z')
  })

  test('"z" still be "n" with factor number: 14', () => {
    expect(caesarCipher('z', 14)).toBe('n')
  })
})

describe('Uppercase single letter input', () => {
  test('"A" becomes "B" with factor number: 1', () => {
    expect(caesarCipher('A', 1)).toBe('B')
  })

  test('"A" becomes "B" with factor number: 27', () => {
    expect(caesarCipher('A', 27)).toBe('B')
  })

  test('"A" becomes "N" with factor number: 13', () => {
    expect(caesarCipher('A', 13)).toBe('N')
  })

  test('"Z" becomes "A" with factor number: 1', () => {
    expect(caesarCipher('Z', 1)).toBe('A')
  })

  test('"Z" still be "Z" with factor number: 0', () => {
    expect(caesarCipher('Z', 0)).toBe('Z')
  })

  test('"Z" still be "N" with factor number: 14', () => {
    expect(caesarCipher('Z', 14)).toBe('N')
  })
})

describe('Mixing charaters input', () => {
  test("'abc' becomes 'bcd' with factor number: 1", () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
  })

  test("'111' becomes '111' with any factor", () => {
    expect(caesarCipher('111', 10)).toBe('111')
  })

  test("'12@4$$a' becomes '12@4$$b' with factor number: 1", () => {
    expect(caesarCipher('12@4$$a', 1)).toBe('12@4$$b')
  })

  test("'love you 3000' becomes 'ybir lbh 3000' with factor number: 13", () => {
    expect(caesarCipher('love you 3000', 13)).toBe('ybir lbh 3000')
  })
})

describe('Invalid string input', () => {
  test('input type: number', () => {
    expect(() => caesarCipher(123, 10)).toThrow('Invalid String Input')
  })

  test('input type: object', () => {
    expect(() => caesarCipher({}, 10)).toThrow('Invalid String Input')
  })

  test('input type: array', () => {
    expect(() => caesarCipher([], 10)).toThrow('Invalid String Input')
  })

  test('input type: undefined', () => {
    expect(() => caesarCipher(undefined, 10)).toThrow('Invalid String Input')
  })
})
