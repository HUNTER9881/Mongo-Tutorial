const express = require('express')
const app = express()
const PORT = 2540
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
mongoose.connect('mongodb://localhost:27017/MongoDB_Tutorial', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("MongoDB is running on 27017")
    })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// Router API
app.use('/comparision', require('./routers/comparisionOperatorModel'))
app.use('/logical', require('./routers/logicalOperatorModel'))
app.use('/arifmetik', require('./routers/arifmetikOperatorModel'))






app.listen(PORT, () => {
    console.log("Server is running on", PORT)
})