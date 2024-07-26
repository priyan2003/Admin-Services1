const express = require(`express`);
const bodyParser = require(`body-parser`);

const {PORT} = require(`./config/server.config`);
const apiRouter = require('./routes');
const BaseError = require('./errors/Base.error');
const errorHandler = require('./utils/errorHandler');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`);

});
