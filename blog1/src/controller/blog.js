// 程序运行第四步：处理数据

const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `
  // if(author) {
  //   sql += `and author=${author} `
  // }
  // if(keyword) {
  //   sql += `and title like '%${keyword}%' `
  // }
  // sql += `order by createtime desc;`
  // 返回promise
  return exec(sql)
  // return [
  //   {
  //     id: 1,
  //     title: '标题A',
  //     content: '内容A',
  //     createTime: 1569307930504,
  //     author: 'zhangsan'
  //   },
  //   {
  //     id: 2,
  //     title: '标题B',
  //     content: '内容B',
  //     createTime: 1569308017546,
  //     author: 'lisi'
  //   }
  // ]
}

const getDetail = (id) => {
  return {
    id: 1,
    title: '标题A',
    content: '内容A',
    createTime: 1569307930504,
    author: 'zhangsan'
  }
}

const newBlog = (blogData = {}) => {
  // blogData是一个博客对象
  return {
    id: 3  // 表示新建博客，插入到数据表里面的id
  }
}

const updateBlog = (id, blogData = {}) => {
  return true
}

const delBlog = (id) => {
  // id 就是要删除博客的id
  return true
}

/**
 * 如果只有一个方法，可以直接module.exports = getList；
 * 返回一个对象的原因是：有多个方法
 * module.exports = {
 *  getList,
 *  getList2,
 * }
 */
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog
}
