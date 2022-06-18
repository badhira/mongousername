const express = require('express')
const router = express.Router();

const nameData = require('../model/nameModel');

router.post('/check', async(req, res) => {

    try {
        let data = req.body.name
        console.log(data)

        let item = {
            name: req.body.name
        }
        const data1 = new nameData(item)
        const savedData = await data1.save()
        res.send(savedData)

    } catch (error) {
        console.log(error)
        res.send({ status: false, desc: 'Mongo Error' })
    }

})

module.exports = router;