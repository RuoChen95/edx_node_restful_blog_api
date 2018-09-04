const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let profile = [
  {
    username: 'xieruochen',
    email: 'ruochen.xie@bitmain.com',
    url: 'ruochen95.github.io'
  },
  {
    username: 'xieruochen2',
    email: 'ruochen.xie2@bitmain.com',
    url: 'ruochen952.github.io'
  },
]

app.get('/profile', (req, res) => {
  if (req.query.id) return res.send(profile[req.query.id])
  res.send(profile)
})

app.post('/profile', (req, res) => {
  // 防止数据缺少以及空字符串
  if (req.body.username.trim()  && req.body.email.trim()) {

    // 防止冗余数据
    let obj = {
      username: req.body.username,
      email: req.body.email,
      url: req.body.url
    }

    profile.push(obj)
    res.sendStatus(201)
  } else {
    res.sendStatus(400)
  }
  console.log('created', profile)
})

// app.put('profile', (req, res) => {
//   Object.assign(profile[req.params.id], req.body)
//   console.log('updated', profile[req.params.id])
//   res.sendStatus(204)
// })
//
// app.delete('profile', (req, res) => {
//   profile.splice(0, 1)
//   console.log('delete', profile[req.params.id])
//   res.sendStatus(204)
// })


app.listen(3000)


// 使用express-validator这个npm包对于确认数据有帮助。