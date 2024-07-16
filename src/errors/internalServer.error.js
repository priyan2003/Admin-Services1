const BaseError = require('./Base.error');
const { StatusCodes } = require('http-status-codes');

class InternalServer extends BaseError{
    constructor(details){
        super("InternalServerError", StatusCodes.INTERNAL_SERVER_ERROR,`Something went wrong`,details);
    }
}

module.exports = InternalServer;