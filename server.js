const app = require('express')()
const cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  console.log(new Date(), req.method, req.url)
  res.status(500).end('deu ruim')
})

app.listen(3000, () => console.log('server up!'))