const fs = require('fs')
const path = require('path')
const readline = require('readline')
// 文件名
const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')
// 创建read stream
const readStream = fs.createWriteStream(fileName)

// 创建readline对象
const rl = readline.createInterface({
  input: readStream
})

let chromeNum = 0
let sum = 0

// 逐行读取
rl.on('line', (lineData) => {
  if(!lineData) {
    return
  }
  sum ++
  const arr = lineData.split(' -- ')
  if(arr[2] && arr[2].indexOf('Chrome') > 0) {
    // 累加chrome的数量
    chromeNum ++
  }
})

// 监听读完完成
rl.on('close', () => {
  console.log(chromeNum / sum)
})
