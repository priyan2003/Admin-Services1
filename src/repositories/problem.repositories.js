const NotFound = require('../errors/notfound.error');
const { Problem } = require('../models');
const  logger  = require('../config/logger.config');

class ProblemRepository{
    async createProblem(problemData){
        try{
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                testcases: (problemData.testcases) ? problemData.testcases : []
            });
            return problem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async getAllProblems(){
        try{
            const problems = await Problem.find({});
            return problems;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async getAProblem(id){
        try {
            console.log(id);
            const problem = await Problem.findById(id);
            if(!problem){        
                throw new NotFound("Problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteProblem(id){
        try{
            const deletedProblem = await Problem.findByIdAndDelete(id);
            if(!deletedProblem){
                console.log(id);
                logger.error(`Problem with id: ${id} not found in the db`);
                throw new NotFound("Problem", id);
            }
            return deletedProblem;
        }catch(error){
            console.log(error);
            throw error;
        }
    }
    async updateProblem(id,updatedData){
        try {
            const updata_Problem_data = await Problem.findByIdAndUpdate(id,{
                title: updatedData.title,
                description: updatedData.description,
                testCase: updatedData.testCase
            });
            if(!updata_Problem_data){
                throw new NotFound("Problem",id);
            }
            return updata_Problem_data;
        } catch (error) {
            
        }
    }
}
module.exports = ProblemRepository;