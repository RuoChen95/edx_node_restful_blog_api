const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

var commentsObj = require('./routes/comments')
var postObj = require('./routes/posts')


app.get('/posts', (req, res) => {
  postObj.getPosts(req, res)
})

app.post('/posts', (req, res) => {
  postObj.addPost(req, res)
})

app.put('/posts/:id', (req, res) => {
  postObj.updatePost(req, res)
})

app.delete('/posts/:id', (req, res) => {
  postObj.removePost(req, res)
})

app.get('/posts/:id/comments', (req, res) => {
  commentsObj.getComments(req, res)
})

app.post('/posts/:id/comments', (req, res) => {
  commentsObj.addComment(req, res)
})

app.put('/posts/:id/comments/:commentId', (req, res) => {
  commentsObj.updateComment(req, res)
})

app.delete('/posts/:id/comments/:commentId', (req, res) => {
  commentsObj.removeComment(req, res)
})


app.listen(3000)