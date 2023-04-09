const express = require('express')

const app = express()
const PORT = 3001

app.use(express.static('./dist'))

app.listen(PORT, function () {
  console.log(`Приложение запущено http://localhost:${PORT}`)
})