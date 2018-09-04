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
  // ��ֹ����ȱ���Լ����ַ���
  if (req.body.username.trim()  && req.body.email.trim()) {

    // ��ֹ��������
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


// ʹ��express-validator���npm������ȷ�������а�����