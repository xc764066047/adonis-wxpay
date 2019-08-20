'use strict'
// 此文件是后期添加的，用于使用log4js。log4js 是一个 nodejs 日志管理工具，可以将日志以各种形式输出到各种渠道。
const log4js = use('log4js')

log4js.configure({
  appenders: {
    file: {
      type: 'file',
      filename: 'app.log',
      layout: {
        type: 'pattern',
        pattern: '%r %p - %m'
      }
    }
  },
  categories: {
    default: {
      appenders: ['file'],
      level: 'debug'
    }
  }
})

const logger = log4js.getLogger()

module.exports = logger
