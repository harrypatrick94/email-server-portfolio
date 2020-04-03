const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const app = express()
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(cors())
const PORT = 4000


app.get('/', (req, res) => {
  res.send('Send grid email server')
})

app.get('/send-email', (req, res) => {

  const {emailTo, emailFrom, name, message} = req.query
  console.log(emailTo);

  const msg = {
    to: emailTo,
    from: emailFrom,
    subject: name,
    text: message

  };
  sgMail
    .send(msg)
    .then(msg => console.log(`sent to ${emailTo}`))
    .catch(err => console.warn(err))
})

app.listen(PORT, () => { console.log(`Server started on ${PORT}`)})
