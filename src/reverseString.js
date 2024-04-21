const reverseString = (str) => {
  return str
    .trim()
    .split('')
    .reduce((previous, current) => {
      previous.unshift(current)
      return previous
    }, [])
    .join('')
}

export default reverseString
