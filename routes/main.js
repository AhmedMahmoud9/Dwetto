// Full Documentation - https://docs.turbo360.co
const express = require('express')
const router = express.Router()

// const port = 3000;
// const server = app.listen(port,()=>{
//     console.log(`server run on http://localhost:${port}`)
// })

/*  This is the home route. It renders the index.mustache page from the views directory.
  Data is rendered using the Mustache templating engine. For more
  information, view here: https://mustache.github.io/#demo */
router.get('/', (req, res ,next) => {
    const data = req.context
    res.render("home",data)
})

// router.get('/market', (req, res ,next) => {
//     const data = req.context
//   res.render("market",data)
// })

// router.get('/portflio', (req, res ,next) => {
//     const data = req.context
//   res.render("portflio",data)
// })

// router.get('/contact', (req, res ,next) => {
//     const data = req.context
//   res.render("contact",data)
// })



module.exports = router
