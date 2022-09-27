// Generator numeracji blankietów ścisłego zarachowania
// (C) 2022 matpl11. Kod dostępny na licencji GNU GPL v3


import Express from "express"
import pdf from 'html-pdf' // na przyszłość/for future use
import bodyParser from "body-parser" // na przyszłość/for future use
import dotenv from 'dotenv'
import ejs from 'ejs'

import { iterateTemplate } from "./iterator"

dotenv.config({
    path: 'config.env'
})
const App: Express.Application = Express()
const PORT = process.env.HTTP_PORT
let tickets = {
    start: 0,
    digits: 0,
    serie: 'AA',
    qty: 1
}

if(typeof process.env.TICKET_STARTING === 'string'){
    tickets.start = parseInt(process.env.TICKET_STARTING)
}
else tickets.digits = 0

if(typeof process.env.TICKET_QTY === 'string'){
    tickets.qty = parseInt(process.env.TICKET_QTY)
}
else tickets.qty = 0

if(typeof process.env.SERIE === 'string'){
    tickets.serie = process.env.SERIE
}
else tickets.serie = ''

if(typeof process.env.DIGITS === 'string'){
    tickets.digits = parseInt(process.env.DIGITS)
}
else tickets.digits = 0

App.use(Express.urlencoded({
    extended: true
}))
App.use(Express.json())

/*

Objaśnienie funkcji strzałkowej

const async iterateTemplate()

start - pierwszy numer, od którego chcemy iterować blankiety
quantity - ilość blankietów do generowania
digits - ilość cyfr, które muszą znaleźć się w numerze blankietu
serie - jego seria

*/

App.get('/', function (req, res) {
    ejs.renderFile('views/main.ejs').then((r)=>{
        res.send(r)
    })
})

App.post('/getResult', function (req, res) {
    iterateTemplate(parseInt(req.body.start), parseInt(req.body.count), parseInt(req.body.dig), req.body.serie).then(function (r) {
        res.send(r)
    })
})

App.listen(PORT)
console.log(`listening at ${PORT}`)
