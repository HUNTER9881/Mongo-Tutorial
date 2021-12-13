const express = require('express')
const router = express.Router()
const ComprisionModel = require('../models/comparisionOperatorModel')


// @description: Malumot yaratish | POST
router.post('/create', async (Request, Response, Next) => {
    const result = await ComprisionModel.create(Request.body)
    await result.save()
        .then(() => {
            Response.json(result)
        })
        .catch((error) => {
            Response.json(error)
        })
})

// @description: Malumotlarni filtrlash | GET
router.get('/1', async (req, res, next) => {
    const result = await ComprisionModel.aggregate([
       {
           $match: {
               tag: {
                   $nin: ["A", "D"]
               }
           }
       }
    ])
    res.json(result)
})







module.exports = router