const calculator = {
  add(x, y = 0) {
    return x + y
  },

  subtract(x, y) {
    if (arguments.length === 1 && arguments[0] === 0) return 0
    if (arguments.length === 1 && arguments[0] !== 0) return -arguments[0]
    return x - y
  },

  multiply(x = 1, y = 1) {
    return x * y
  },

  divide(x = 1, y = 1) {
    if (y === 0) throw new Error("Can't divide by 0")

    if (arguments.length === 1 && arguments[0] === 0)
      throw new Error("Can't divide by 0")

    if (arguments.length === 1 && arguments[0] !== 0) return 1 / arguments[0]

    return x / y
  },
}

export default calculator
