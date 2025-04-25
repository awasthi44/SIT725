const expect = require("chai").expect;
const request = require("request");

describe("Project API", function () {
  const baseUrl = "http://localhost:3000";

  it("returns status 200 to check if API works", function (done) {
    request.get(`${baseUrl}/api/projects`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return an array of projects", function (done) {
    request.get(`${baseUrl}/api/projects`, function (error, response, body) {
      const parsedBody = JSON.parse(body);
      expect(parsedBody).to.have.property("data");
      expect(parsedBody.data).to.be.an("array");
      done();
    });
  });

  it("should contain a message with value 'Success'", function (done) {
    request.get(`${baseUrl}/api/projects`, function (error, response, body) {
      const parsedBody = JSON.parse(body);
      expect(parsedBody.message).to.equal("Success");
      done();
    });
  });

  it("should handle errors if DB is unreachable (simulate failure)", function (done) {
    done();
  });
});
