let app = require('../build/dev-server').app

var path = require('path')
var formidable = require('formidable')
var fs = require('fs')

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080')
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
//   res.setHeader('Access-Control-Allow-Credentials', true)
// })

app.post('/upload', function (req, res) {
  debugger
  var form = new formidable.IncomingForm()
  form.multiples = true
  form.uploadDir = path.join(process.env.HOME, 'uploads')
  form.on('file', function (field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name))
  })

  form.on('error', function (err) {
    console.log('An error has occured: \n' + err)
  })

  form.on('end', function () {
    res.end('success')
  })

  form.parse(req)
})
