const calculator = {
  add(x, y) {
    return x + y
  },

  subtract(x, y) {
    return x - y
  },

  multiply(x, y) {
    return x * y
  },

  divide(x, y) {
    if (y === 0) throw new Error("Can't divide by 0")
    else return x / y
  },
}
export default calculator