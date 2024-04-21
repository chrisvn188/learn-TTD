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
]

testCases.forEach(({ name, input, expected }) => {
  test(name, () => {
    expect(reverseString(input)).toBe(expected)
  })
})
