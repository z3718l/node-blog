const fs = require('fs')
const path = require('path')

// 写日志
function writeLog(writeStream, log) { 
  writeStream.write(log + '\n')
}

// 生成writeStream
function createWriteStream(fileName) {
  const fullFileName = path.join(__dirname, '../', '../', 'logs', fileName)
  const writeStream = fs.createWriteStream(fullFileName, {
    flags: 'a' // 写日志的时候是追加，并不是覆盖
  })
  return writeStream
}

// 写访问日志
const accessWriteStream = createWriteStream('access.log')
function access(log) {
  writeLog(accessWriteStream, log)
}
module.exports = {
  access
}