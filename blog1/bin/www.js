const http = require('http')

const PORT = 8100
const serverHandle = require('../app')

const server = http.createServer(serverHandle)
server.listen(PORT)
console.log('node is ok')