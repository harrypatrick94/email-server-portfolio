const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const cors = require('cors');
let bodyParser = require('body-parser');
const {user, password} = require('./config/config.js');
const app = express()
app.use(cors())
const PORT = 4000


app.use(bodyParser.json())
app.use(express.json())
app.use('/', router)
app.listen(PORT, () => { console.log(`Server started on ${PORT}`)})
//
// const PORT = process.env.PORT
app.get('/', (req, res) => {
  res.send('Send grid email server')
})

let transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
    user: user,
    pass: password
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `

  let mail = {
    from: name,
    to: 'harry.g.patrick94@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})





//
//
