const express = require('express')
const router = express.Router()

// Get
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Hi, All Contact Get Route'
    })
})

// Post
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Hi, This is post route'
    })
})

router.get('/:id', (req, res, next) => {    
    res.json({
        message: 'I am a single Contact'
    })
})

router.put('/:id', (req, res, next) => {    
    res.json({
        message: 'I am a PUT Route'
    })
})

router.delete('/:id', (req, res, next) => {    
    res.json({
        message: 'I am a Delete Route'
    })
})

module.exports = router


// Get ID Parameters
/*
    const id= req.params.id
    res.json({
        id
    })*/