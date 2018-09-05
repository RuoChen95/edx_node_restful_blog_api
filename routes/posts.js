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
  getPosts(req, res) {
    res.send(store.posts)
  },
  addPost(req, res) {
    let newPost = req.body
    let id = store.posts.length
    store.posts.push(newPost)
    res.status(201).send({id: id})
  },
  updatePost(req, res) {
    store.posts[req.params.id] = req.body
    res.status(201).send(store.posts[req.params.id])
  },
  removePost(req, res) {
    store.posts.splice(req.params.id, 1)
    res.status(204).send()
  }
}

