const express = require('express')
const cors = require('cors')
const path = require('path')

 const app = express()

 app.use(express.json())
 app.use(cors())


 app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))

 })

 const {PORT} =process.env
 const port = PORT || 4006

 app.listen(port, () => console.log(`Server is running on PORT ${port}`))



