const fs = require('fs')

const data = JSON.parse(fs.readFileSync('1-json.json').toString())

data.name = 'Jacob'
data.age = '18'

fs.writeFileSync('1-json.json', JSON.stringify(data))

