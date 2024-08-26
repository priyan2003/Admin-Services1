const problemController = require('../src/controllers/problem.controller');
const problemService = require('../src/services/problem.services')

const { StatusCodes } = require('http-status-codes');

jest.mock('../src/services/problem.services');

describe("tests", ()=>{
    beforeEach(() => {
        req = {};
        res = {
            status: jest.fn(() => res ),
            json: jest.fn()
        };
        next = jest.fn();
    });
    test('should get all problems', async() =>{
        const problems = [];
        problemService.prototype.getAllProblems.mockResolvedValue(problems);
    
        await problemController.getProblems(req,res,next);
                
        expect(res.status).toHaveBeenCalledWith(StatusCodes.OK);
    })
})

