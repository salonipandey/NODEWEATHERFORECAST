const path = require('path')
const express = require('express')
const hbs = require('hbs')
const app = express()
const forecast = require('./utility/forecast')


const public_dir = path.join(__dirname, '../public')
const view_dir = path.join(__dirname, '../template/view')
const partials_dir = path.join(__dirname, '../template/partials')

app.set('view engine', 'hbs')

app.set('views', view_dir)

hbs.registerPartials(partials_dir)

app.use(express.static(public_dir))

app.get('', (req, res) => {
    res.render('index', {

    })
})
app.get('/weather', (req, res) => {
    console.log("city=", req.query.address)
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }


    forecast.fore(req.query.address, (error, data) => {
        console.log("In Api=", data)
        if (error) {
            return res.send(error)
        }
        res.send(data)
    })
})

app.listen(9007, () => {
    console.log("Server is started 9007")
})