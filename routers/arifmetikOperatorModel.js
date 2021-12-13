const express = require('express')
const router = express.Router()
const ArifmetikModel = require('../models/arifmetikOperatorModel')


// @description: Malumot yaratish | POST
router.post('/create', async (Request, Response, Next) => {
    const result = await ArifmetikModel.create(Request.body)
    await result.save()
        .then(() => {
            Response.json(result)
        })
        .catch((error) => {
            Response.json(error)
        })
})

router.get('/all', async (req, res, next) => {
    const result = await ArifmetikModel.aggregate(
        [
            {
                $addFields: {
                    "information.data": {
                        $inc: { "total":  2 }
                    }
                }
            }
        ]
    )

    res.json(result)
})








module.exports = router