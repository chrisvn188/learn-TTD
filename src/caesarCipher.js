function computeRemainder(dividend, divisor) {
  return dividend % divisor
}

function makeRange(from, to) {
  const numberArray = []
  for (let i = from; i <= to; i++) {
    numberArray.push(i)
  }
  return numberArray
}

function checkUpperCaseAlphabet(letter) {
  // uppercase letter start from A (ascii_code: 65) - Z (ascii_code: 90)
  const uppercaseLetterCodes = makeRange(65, 90)
  return uppercaseLetterCodes.includes(letter.charCodeAt())
}

function checkLowerCaseAlphabet(letter) {
  // lowercase letter start from a (ascii_code: 97) - a (ascii_code: 122)
  const lowercaseLetterCodes = makeRange(97, 122)
  return lowercaseLetterCodes.includes(letter.charCodeAt())
}

export default function caesarCipher(input, factor) {
  // we have 26 alphabet letters a-z or A-Z
  const NUMBER_OF_ALPHABET_LETTERS = 26

  if (typeof input !== 'string') throw new Error('Invalid String Input')

  return input
    .split('')
    .map((char) => {
      if (!checkLowerCaseAlphabet(char) && !checkUpperCaseAlphabet(char))
        return char

      if (checkUpperCaseAlphabet(char)) {
        return String.fromCharCode(
          'A'.charCodeAt(0) +
            computeRemainder(
              char.charCodeAt(0) - 'A'.charCodeAt(0) + factor,
              NUMBER_OF_ALPHABET_LETTERS
            )
        )
      }

      if (checkLowerCaseAlphabet(char)) {
        return String.fromCharCode(
          'a'.charCodeAt(0) +
            computeRemainder(
              char.charCodeAt(0) - 'a'.charCodeAt(0) + factor,
              NUMBER_OF_ALPHABET_LETTERS
            )
        )
      }
    })
    .join('')
}
