const fs = require('fs')  // fs是node的原生模块
const path = require('path')

// const fullFileName = path.resolve(__dirname, 'files', 'a.json')
// fs.readFile(fullFileName, (err, data) => {
//   if(err) {
//     console.err(err)
//     return 
//   }
//   console.log(data.toString())
// })

// callback 方式获取文件内容
// function getFileContent(fileName, callback) {
//   const fullFileName = path.resolve(__dirname, 'files', fileName)
//   fs.readFile(fullFileName, (err, data) => {
//     if(err) {
//       console.error(err)
//       return 
//     }
//     // console.log(data.toString())
//     callback(
//       JSON.parse(data.toString())
//     )
//   })
// }

// 测试
// 如果比较多的话，就会出现很多层
// getFileContent('a.json', aData => {
//   console.log('a data', aData)
//   getFileContent(aData.next, bData => {
//     console.log('b data', bData)
//     getFileContent(bData.next, cData => {
//       console.log('c data', cData)
//     })
//   })
// })

// 所以使用promise
function getFileContent(fileName) {
  const promise = new Promise((resolve, reject) => {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if(err) {
        reject(err)
        return
      }
      resolve(
        JSON.parse(data.toString())
      )
    })
  })
  return promise
}

// 测试
getFileContent('a.json').then(aData => {
  console.log(aData)
  return getFileContent(aData.next)
}).then(bData => {
  console.log(bData)
  return getFileContent(bData.next)
}).then(cData => {
  console.log(cData)
})
