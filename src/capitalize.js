const capitalize = (input) => {
  if (typeof input !== 'string') throw new Error('Invalid String Input')
  return input
    .split(' ')
    .map((word) =>
      word
        .toLowerCase()
        .split('')
        .map((char, index) => {
          // 65 represents "A", 90 represents "Z"
          // 97 represents "a", 122 represents "z"
          if (index === 0 && (65 < char < 90 || 97 < char < 122))
            return char.toUpperCase()
          return char
        })
        .join('')
    )
    .join(' ')
}

export default capitalize
