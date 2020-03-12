const chalk = require('chalk')
const ID = require('../package').name
// eslint-disable-next-line import/order
const debug = require('debug')(ID)

const curryFn = (statusText = '') => (msg, prefix) => {
  return console.log(
    `${chalk.cyan('❯ ')}${chalk.gray(prefix || ID)} ${statusText}${msg}`
  )
}

const error = curryFn(`${chalk.red('error')} `)
const info = curryFn('💡 ')
const warn = curryFn('⚠️  ')
const log = curryFn()

function enableDebug() {
  require('debug').enable(ID)
}

function disableDebug() {
  require('debug').disable(ID)
}

module.exports = {
  log,
  info,
  warn,
  error,
  debug,
  enableDebug,
  disableDebug,
}
