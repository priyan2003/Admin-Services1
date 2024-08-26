const {StatusCodes} = require('http-status-codes');
const NotImplementedError = require('../errors/NotImplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');

const problemService = new ProblemService(new ProblemRepository());


function pingProblemController(req,res){
    return res.status(200).json({message: 'ping is up'});
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


async function deleteProblem(req,res,next){
    try{
        const deletedProblem = await problemService.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted the problem',
            error: {},
            data: deletedProblem
        })
    }catch(error){
        next(error);
    }
}

async function updateProblem(req,res,next){
    try{
        const updatedProblem = await problemService.updateProblem(req.params.id,req.body);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Problem has been updated successfully',
            error: {},
            data: updatedProblem
        })
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