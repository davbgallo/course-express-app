const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const timestamp = new Date().toLocaleString();
  res.send('<h1>Moi World!</h1><p>Timestamp: '+ timestamp + '</p>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
