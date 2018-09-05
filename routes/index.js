var postsObj = require('./posts')
var comments = require('./comments')

module.exports = {
  getPosts: postsObj.getPosts(req, res),
  comments
}