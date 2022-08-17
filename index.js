const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));


app.get('/', (req, res) => {
  //res.send('Ola from Express!')
  var name = 'Adele'
  var headingOne = 'Early life and Education'
  var headingTwo = 'Career Debut'
  var headingThree = 'Personal life'
  var headingFour = 'Musical style'
  
  res.render('pages/index', {
    'name':name,
    'headingOne': headingOne,
    'headingTwo': headingTwo,
    'headingThree': headingThree,
    'headingFour': headingFour
  });
})

app.get('/wilson', (req, res) => {
  //res.send('Ola from Express!')
  var name = 'Russell'
  var headingOne = 'Early life and Education'
  var headingTwo = 'College Football Career'
  var headingThree = 'NFL Career'
  var headingFour = 'Charitable work'
  res.render('pages/wilson', {
    'name':name,
    'headingOne': headingOne,
    'headingTwo': headingTwo,
    'headingThree': headingThree,
    'headingFour': headingFour
  });
})

app.get('/ciara', (req, res) => {
  //res.send('Ola from Express!')
  var name = 'Ciara'
  var headingOne = 'Early life and Education'
  var headingTwo = 'Personal Life'
  var headingThree = 'Vocals and Musical Style'
  var headingFour = 'Influences'
  res.render('pages/ciara', {
    'name':name,
    'headingOne': headingOne,
    'headingTwo': headingTwo,
    'headingThree': headingThree,
    'headingFour': headingFour
  });
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
