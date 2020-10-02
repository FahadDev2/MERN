const db = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  };

db.connect(process.env.DBHOST,options, ()=>{
    console.log(`Hi Admin :) , 
=> Your Server Is Working Fine
=> Already Connected To MongoDB (DataBase : Data) 
=> Enjoy And Be Save... *_^
    `);
})