const reverseString = (input) => {
  if (typeof input !== 'string') throw new Error('Invalid String Input')
  return input
    .split('')
    .reduce((previous, current) => {
      previous.unshift(current)
      return previous
    }, [])
    .join('')
}

export default reverseString
