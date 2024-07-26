const {StatusCodes} = require('http-status-codes');
const NotImplementedError = require('../errors/NotImplemented.error');
function pingProblemController(req,res){
    return res.json({message: 'ping is up'});
}

function addProblem(req,res,next){
     try{
        // nothing implemented
        throw new NotImplementedError('addProblem');
     }catch(error){
        next(error);
     }
}


function getProblem(req,res){
    return res.status(501).json({
        message:'Not implemented'
     });
}


function getProblems(req,res){
    return res.status(501).json({
        message:'Not implemented'
     });
}


function deleteProblem(req,res){
    return res.status(501).json({
        message:'Not implemented'
     });
}

function updateProblem(req,res){
    return res.status(501).json({
        message:'Not implemented'
     });
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}