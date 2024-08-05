const {StatusCodes} = require('http-status-codes');
const NotImplementedError = require('../errors/NotImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());


function pingProblemController(req,res){
    return res.json({message: 'ping is up'});
}

async function addProblem(req,res,next){
     try{
        console.log("incoming req body",req.body);
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
     }catch(error){
        next(error);
     }
}


async function getProblem(req,res,next){
    try{
        console.log(req.params.id);
        const aProblem = await problemService.getAProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetch a problem',
            error: {},
            data: aProblem
        });

    }catch(error){
        next(error);
    }
}


async function getProblems(req,res,next){
    try{
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            succcess: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
    }catch(error){
        next(error);
    }
}


function deleteProblem(req,res,next){
    try{
        throw new NotImplementedError('Add Problem');
    }catch(error){
        next(error);
    }
}

function updateProblem(req,res,next){
    try{
        throw new NotImplementedError('Add Problem');
    }catch(error){
        next(error);
    }
}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}