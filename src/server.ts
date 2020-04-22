// WIP

import * as bodyParser from 'body-parser'
import * as nodemailer from 'nodemailer'
import { config } from './config'

const express = require('express')
const app = express()
const PORT = config.port

app.use(bodyParser.json())

app.post('/api/send-email', (req: any, res: any) =>  { // add types here
    res.status(200).send({
        success: true
    })

    const transporter = nodemailer.createTransport(config.email)

    const mailOptions = {
        from: '"Bookable" <bookableapp@outlook.com>',
        to: 'test@whereever.com',
        subject: 'Invite to Bookable',
        html: '<b>Greetings from Bookable</b><br> This is a test email'
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return console.error(err)
        }

        console.log('Message sent: ' + info.response)
    })
})

app.listen(PORT, () => {
    console.log(`Server running locally on port ${PORT}`)
})
