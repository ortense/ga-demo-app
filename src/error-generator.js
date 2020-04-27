const typeError = new TypeError('Foo is not a function')
const referenceError = new ReferenceError('foo is not defined')
const syntaxError = new SyntaxError('Unexpected token u in JSON at position 0')
const uriError = new URIError('URI malformed')
const error = new Error('My custom error')

const listOfErros = [typeError, referenceError, syntaxError, uriError, error]

function randomErrorThrower() {
  throw listOfErros[Date.now() % 5]
}

export function errorGenerator() {
  Date.now() % 3 !== 0
    ? setTimeout(randomErrorThrower, 1500 + Math.floor(Math.random() * 5) + 1)
    : randomErrorThrower()
}