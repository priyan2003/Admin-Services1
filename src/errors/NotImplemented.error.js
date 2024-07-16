const BaseError = require('./Base.error');
const { StatusCodes } = require('http-status-codes');

class NotImplementedError extends BaseError{
    constructor(methodName){
        super("NotImplementedError", StatusCodes.NOT_IMPLEMENTED,`${methodName} Not Implemented`,{});
    }
}

module.exports = NotImplementedError;