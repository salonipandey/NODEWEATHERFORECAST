const request = require('request')

const fore = (city, callback) => {
    const url = ' http://api.weatherstack.com/current?access_key=e8e0932a70b91a66140ef291df7d02f7&query=' + city + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {

            callback('Unable to connect to weather service!', undefined)

        } else if (body.error) {

            callback('Unable to find location', undefined)

        } else {

            callback(undefined, body)
        }
    })
}

module.exports = { fore: fore }