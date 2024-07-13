const express = require(`express`);

const {PORT} = require(`./config/server.config`);
const apiRouter = require('./routes')
const app = express();

app.use('/api',apiRouter);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);

})