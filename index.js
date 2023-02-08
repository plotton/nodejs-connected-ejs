const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {
        title: "Golf ❤️"
 })
})
app.get('/bots', (req, res) => { 
    res.render('pages/bots', {
        title: "Golf ❤️"
    })
})

app.listen(port, () => console.log(`Selam ${port} portunda dinleniyorum!`))