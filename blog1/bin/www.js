// 程序运行第一步：createServer的逻辑
const http = require('http')

const PORT = 8100
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)
console.log('node is ok')