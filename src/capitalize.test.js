import capitalize from './capitalize'

const testCases = [
  {
    name: 'hello world to Hello World',
    input: 'hello world',
    expected: 'Hello World',
  },
  {
    name: 'bye world to Bye World',
    input: 'bye world',
    expected: 'Bye World',
  },
  {
    name: 'GrEat to Great',
    input: 'GrEat',
    expected: 'Great',
  },
  {
    name: 'haha to Haha',
    input: 'haha',
    expected: 'Haha',
  },
]

testCases.forEach(({ name, input, expected }) => {
  test(name, () => {
    expect(capitalize(input)).toBe(expected)
  })
})
