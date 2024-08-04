const { Problem } = require('../models');

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
}
module.exports = ProblemRepository;