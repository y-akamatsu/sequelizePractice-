const express = require("express")
const db = require('./config/database');

//Test the connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const app = express();

app.get('/', (req, res) => res.send('index'));

app.listen(3000, function(){
  console.log("Sever has staeted!");
});