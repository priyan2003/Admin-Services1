const express = require(`express`);

const {PORT} = require(`./config/server.config`);

const app = express();

app.get('/home',(req,res)=>{
    return res.json({msg: "Ok"});
})

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);

})