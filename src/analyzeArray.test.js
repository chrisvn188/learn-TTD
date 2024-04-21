import analyzeArray from './analyzeArray'

test('analyzeArray([1,8,3,4,2,6])', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})

test('analyzeArray([1, 4, 6, 3, 10, 13])', () => {
  expect(analyzeArray([1, 4, 6, 3, 10, 13])).toEqual({
    average: 6,
    min: 1,
    max: 13,
    length: 6,
  })
})

test('analyzeArray([0, 34, 100, 3, 34, 11, 27])', () => {
  expect(analyzeArray([0, 34, 100, 3, 34, 11, 27])).toEqual({
    average: 30,
    min: 0,
    max: 100,
    length: 7,
  })
})
