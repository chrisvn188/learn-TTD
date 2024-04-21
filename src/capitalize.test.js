import capitalize from './capitalize'

const testCases = [
  {
    name: 'Expect hello world becomes Hello World',
    input: 'hello world',
    expected: 'Hello World',
  },
  {
    name: 'Expect bye world becomes Bye World',
    input: 'bye world',
    expected: 'Bye World',
  },
  {
    name: 'Expect GrEat becomes Great',
    input: 'GrEat',
    expected: 'Great',
  },
  {
    name: 'Expect haha becomes Haha',
    input: 'haha',
    expected: 'Haha',
  },
  {
    name: 'Input includes characters that are not in alphabet',
    input: 'a2 a1@/abc',
    expected: 'A2 A1@/abc',
  },
  {
    name: 'Input starts with characters that are not in alphabet',
    input: 'hello 1.#.abc',
    expected: 'Hello 1.#.abc',
  },
  {
    name: 'Inputs are not valid string',
    input: 123,
    expected: 'Invalid String Input',
  },

  {
    name: 'Inputs are not valid string',
    input: [],
    expected: 'Invalid String Input',
  },

  {
    name: 'Inputs are not valid string',
    input: {},
    expected: 'Invalid String Input',
  },

  {
    name: 'Inputs are not valid string',
    input: function () {},
    expected: 'Invalid String Input',
  },
]

testCases.forEach(({ name, input, expected }) => {
  test(name, () => {
    if (typeof input === 'string') expect(capitalize(input)).toBe(expected)
    else expect(() => capitalize(input)).toThrow(expected)
  })
})
