const dotenv = require(`dotenv`);

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    Atlas_DB_URL: process.env.Atlas_DB_URL,
    NODE_ENV: process.env.NODE_ENV || "development"
}