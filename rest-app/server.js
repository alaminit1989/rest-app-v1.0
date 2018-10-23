const express = require('express')
const contactRoute = require('./api/routes/contacts')

const app = express()
const PORT = process.env.PORT || 3000

app.use('/api/contacts', contactRoute)

app.get('/', (req, res) => {
    res.send('<h1>Md. Al Amin, Software Developer, 01736092822</h1>')
})

app.get('/post', (req, res) => {
    res.send('<h1>Md. Al, Amin, Software Developer, AG</h1>')
})

app.get('/api/contacts', (req, res) => {
    res.json(contacts)
})

app.post('/api/contacts', (req, res) => {
    res.json({
        message: 'You are great, Post Method Successfully.'
    })
})


app.listen(PORT, () => {
    console.log(`My Server Create Successfully & PORT : ${PORT} `)
})

const contacts = [
    {name: 'Md. Al-Amin', email: 'mdalamin.mis@gmail.com', phone: '01736092822'},
    {name: 'Md. Abu Said Sarker', email: 'said@akij.net', phone: '01700000000'},
    {name: 'Deb Kanti Borua', email: 'debkanti@akij.net', phone: '01711111111'}
]