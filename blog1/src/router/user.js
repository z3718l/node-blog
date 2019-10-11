const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 获取cookie的过期时间
// const getCookieExpries = () => {
//   let d = new Date()
//   d.setTime(d.getTime() + (24 * 60 * 60 * 1000))
//   return d.toGMTString()
// }

const handleUserRouter = (req, res) => {
  const method = req.method

  // 登录
  if(method === 'POST' && req.path === '/api/user/login'){
    const { username, password } = req.body
    // const { username, password } = req.query
    const result = login(username, password)
    return result.then(data => {
      if(data.username) {

        // 操作cookie
        // httpOnly：只允许后端修改cookie，不允许前端通过js修改cookie
        // res.setHeader('Set-Cookie', `username=${data.username}; path=/; httpOnly; expires=${getCookieExpries()}`)
        
        // 设置seeion
        req.session.username = data.username
        // console.log('req.seeion ', req.session)
        
        return new SuccessModel()
      }
      return new ErrorModel('登录失败')
    })
  }

  // 登录验证的测试
  // if(method === 'GET' && req.path === '/api/user/login-test') {
  //   // console.log(req.session)
  //   if(req.session.username) {
  //     return Promise.resolve(new SuccessModel({
  //       session: req.session
  //     }))
  //   }
  //   return Promise.resolve(new ErrorModel('登录失败'))
  // }
}

module.exports = handleUserRouter
