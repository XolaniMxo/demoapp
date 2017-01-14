var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:4000');

describe("Sample unit tests", ()=>{

    it("should return homepage", (done)=>{
         //calling homepage
         server.get('/')
         .expect("Content-type", /text/)
         .expect(200)
         .end((err, res)=>{
              //http response should be 200
              res.status.should.equal(200);
              done();  
         })   
    })

})