module.exports = {
  getComments(req, res) {
    res.send(req.store.posts[req.params.id].comments)
  },
  addComment(req, res) {
    let newComment = req.body
    let id = req.store.posts[req.params.id].comments.length
    req.store.posts[req.params.id].comments.push(newComment.comments)
    res.status(201).send({id: id})
  },
  updateComment(req, res) {
    req.store.posts[req.params.id].comments[req.params.commentId] = req.body.comments
    res.status(201).send(req.store.posts[req.params.id])
  },
  removeComment(req, res) {
    req.store.posts[req.params.id].comments.splice(req.params.commentId, 1)
    res.status(204).send()
  }
}