const capitalize = (string) => {
  return string
    .trim()
    .split(' ')
    .map((word) =>
      word
        .toLowerCase()
        .split('')
        .map((char, index) => {
          if (index === 0) return char.toUpperCase()
          return char
        })
        .join('')
    )
    .join(' ')
}

export default capitalize
