export default function analyzeArray(array) {
  const length = array.length
  const max = Math.max(...array)
  const min = Math.min(...array)
  const average = Math.round(
    array.reduce((prev, curr) => prev + curr, 0) / length
  )
  return {
    average,
    min,
    max,
    length,
  }
}
