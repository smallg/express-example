var express = require('express')
var app = express()

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>'
    responseText += '<small>Requested at: ' + req.requestTime + '</small>'
    res.send(responseText)
})

app.use('/user/:id', function (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
}, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}, function(req,res,next){
    res.send('user info')
})

app.get('/m/:id', function (req, res, next) {
    console.log('ID:', req.params.id)
    next()
}, function (req, res, next) {
    res.send('User Info')
})

// handler for the /user/:id path, which prints the user ID
app.get('/m/:id', function (req, res, next) {
    res.end(req.params.id)
})



// app.get('/n/:id', function (req, res, next) {
//     // if the user ID is 0, skip to the next route
//     if (req.params.id === '0') next('route')
//     // otherwise pass the control to the next middleware function in this stack
//     else next()
// }, function (req, res, next) {
//     // render a regular page
//     res.render('regular')
// })
//
// // handler for the /user/:id path, which renders a special page
// app.get('/n/:id', function (req, res, next) {
//     res.render('special')
// })

app.listen(3000)