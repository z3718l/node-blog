var express = require('express');
var router = express.Router();
const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

router.get('/list', function(req, res, next) {
  let author = req.query.author || ''
  const keyword = req.query.keyword || ''

  // if(req.query.isadmin) {
  //   // 管理员页面
  //   const loginCheckResult = loginCheck(req)
  //   if(loginCheckResult) {
  //     return loginCheckResult
  //   }
  //   author = req.session.username
  // }

  const result = getList(author, keyword)
  return result.then(listData => {
    res.json(
      new SuccessModel(listData)
    ) 
  })
});
router.get('/detail', function(req, res, next) {
  res.json({
    err: 0,
    data: 'OK'
  })
});

module.exports = router;