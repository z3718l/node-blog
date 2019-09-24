const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db')

// 创建连接对象
// 普通连接
let db = mysql.createConnection(MYSQL_CONF)

// 开始连接
// db.connect()

// 统一执行sql的函数
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      // console.log(result)
      if (err) {
        reject(err)
          return
      } else {
        resolve(result)
      }
    })
  })
  return promise
}

module.exports = {
  exec
}