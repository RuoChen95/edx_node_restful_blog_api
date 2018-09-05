const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes')

let store = {
  posts: [
    {
      name: 'Top 10 ES6 Features every Web Developer must know',
      url: 'https://webapplog.com/es6',
      text: 'This essay will give you a quick introduction to ES6.',
      comments: [
        '1',
        '2',
        '3'
      ]
    }
  ]
}

let app = express()

app.use(bodyParser.json())
// 使用middleware同步数据
// 将数据放在req中
app.use((req, res, next) => {
  req.store = store
  next()
})


// var commentsObj = require('./routes/comments')
// var postObj = require('./routes/posts')


app.get('/posts', (req, res) => {
  routes.postObj.getPosts(req, res)
})

app.post('/posts', (req, res) => {
  routes.postObj.addPost(req, res)
})

app.put('/posts/:id', (req, res) => {
  routes.postObj.updatePost(req, res)
})

app.delete('/posts/:id', (req, res) => {
  routes.postObj.removePost(req, res)
})

app.get('/posts/:id/comments', (req, res) => {
  routes.commentsObj.getComments(req, res)
})

app.post('/posts/:id/comments', (req, res) => {
  routes.commentsObj.addComment(req, res)
})

app.put('/posts/:id/comments/:commentId', (req, res) => {
  routes.commentsObj.updateComment(req, res)
})

app.delete('/posts/:id/comments/:commentId', (req, res) => {
  routes.commentsObj.removeComment(req, res)
})


app.listen(3000)