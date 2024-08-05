const sanitizeMarkdownContent = require('../utils/markdownSanitize')
class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    async createProblem(problemData){
       
            // 1. Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);
            console.log(problemData.description);

            const problem = await this.problemRepository.createProblem(problemData);

            console.log("Problem created",problem);
            return problem;
        
    }

    async getAllProblems(){
       
            const problems = await this.problemRepository.getAllProblems()
            return problems;
        
    }
    async getAProblem(id){
        const problem = await this.problemRepository.getAProblem(id)
        return problem;
    }
}
module.exports = ProblemService;