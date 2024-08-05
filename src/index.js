const express = require(`express`);
const bodyParser = require(`body-parser`);
const {PORT} = require(`./config/server.config`);
const apiRouter = require('./routes');
const BaseError = require('./errors/Base.error');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');
// const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

app.use('/api',apiRouter);

app.use(errorHandler);

app.listen(PORT, async ()=>{
    console.log(`Server started at ${PORT}`);
    await connectToDB();
    console.log("Successfully connect to DB");
    // // dummy code to check 
    // const Cat = mongoose.model('Cat', { name: String });

    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
});
