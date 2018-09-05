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

module.exports = {
  getComments(req, res) {
    res.send(store.posts[req.params.id].comments)
  },
  addComment(req, res) {
    let newComment = req.body
    let id = store.posts[req.params.id].comments.length
    store.posts[req.params.id].comments.push(newComment.comments)
    res.status(201).send({id: id})
  },
  updateComment(req, res) {
    store.posts[req.params.id].comments[req.params.commentId] = req.body.comments
    res.status(201).send(store.posts[req.params.id])
  },
  removeComment(req, res) {
    store.posts[req.params.id].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }
}