const { exec } = require('../db/mysql')
const loginCheck = (username, password) => {
  const sql = `
    select username from users where username='${username}' and password='${password}'
  `
  return exec(sql).then(row => {
    return row[0] || {}
  })
}

module.exports = {
  loginCheck
}
