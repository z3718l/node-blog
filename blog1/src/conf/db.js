const env = process.env.NODE_ENV // 环境参数

let MYSQL_CONF 

if(env === 'dev') {
  MYSQL_CONF = {
    host: 'localhost', 
    user: 'root', 
    password: '123456', 
    database: 'zlquanzhan'
  }
}

if(env === 'production') {
  // 线上
  MYSQL_CONF = {
    host: 'localhost', 
    user: 'root', 
    password: '123456', 
    database: 'zlquanzhan'
  }
}

module.exports = {
  MYSQL_CONF
}
