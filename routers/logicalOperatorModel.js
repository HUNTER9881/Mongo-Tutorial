const express = require('express')
const router = express.Router()
const LogicalModel = require('../models/logicalOperatorModel')


// @description: Malumot yaratish | POST
router.post('/create', async (req, res, Next) => {
    const result = await LogicalModel.create(req.body)
    await result.save()
        .then(() => {
            res.json(result)
        })
        .catch((error) => {
            res.json(error)
        })
})

// @description: Hamm malumotlarni filtrlash
router.get('/filter', async (req, res, next) => {
    const result = await LogicalModel.aggregate(
        [
            {
                $match: {
                    name: {
                        $type: "string"
                    }
                }
            }
        ]
    )


    res.json(result)
})


module.exports = router