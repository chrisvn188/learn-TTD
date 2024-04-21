import reverseString from './reverseString'

const testCases = [
  {
    name: 'reverse hello to olleh',
    input: 'hello',
    expected: 'olleh',
  },
  {
    name: 'reverse Great to taerG',
    input: 'Great',
    expected: 'taerG',
  },
  {
    name: '102 to 201',
    input: '102',
    expected: '201',
  },
  {
    name: 'Not valid string input',
    input: 123,
    expected: 'Invalid String Input',
  },
]

testCases.forEach(({ name, input, expected }) => {
  test(name, () => {
    if (typeof input === 'string') expect(reverseString(input)).toBe(expected)
    else expect(() => reverseString(input)).toThrow(expected)
  })
})
