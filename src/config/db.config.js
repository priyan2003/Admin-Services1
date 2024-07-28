const mongoose = require('mongoose');
const { Atlas_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB(){
    try{
        if(NODE_ENV == "development"){
           await mongoose.connect(Atlas_DB_URL);
        }else{
            await mongoose.connect("some different url");
        }
    }catch(error){
        console.log('unable to connect to the DB server');
        console.log(error);
    }
}

module.exports = connectToDB;