const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const app = express();
const port = 8080;

const businessInformationRoutes = require('./routes/businessInformation');

app.use(express.static(path.join(__dirname,'/public')));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


app.use('/', businessInformationRoutes)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
