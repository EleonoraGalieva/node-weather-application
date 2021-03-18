const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3063f0081e5a32ca2aaf49f1abe06b3c&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to forecast services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It\'s currently ' + body.current.temperature + ' degrees out, it feels like ' + body.current.feelslike + ' degrees.')
        }
    })
}

module.exports = forecast