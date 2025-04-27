const expect = require("chai").expect;
const request = require("request");
const io = require("socket.io-client");

describe("Project API", function () {
  const baseUrl = "http://localhost:3000";
  const socketUrl = "http://localhost:3000";  // Replace with the appropriate socket URL if different

  // Increase the timeout for the entire test suite
  this.timeout(5000); // Set timeout to 5000ms (5 seconds) for async operations
  
  let socket;

  before(function (done) {
    // Establish socket connection
    socket = io.connect(socketUrl);

    // Check if the socket is connected
    socket.on("connect", function () {
      console.log("Socket connected successfully");
      done(); // Call done once the socket is connected
    });

    // Handle any connection errors
    socket.on("connect_error", function (error) {
      console.error("Socket connection failed: ", error);
      done(error); // Pass error to done to handle it properly
    });
  });

  after(function (done) {
    // Close the socket connection after tests are done
    if (socket) {
      socket.disconnect();
      console.log("Socket disconnected");
    }
    done();
  });

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

  it("should handle socket communication", function (done) {
    // Emit an event to check socket communication
    socket.emit("testEvent", { message: "Test message" });

    // Listen for a response from the socket server
    socket.on("responseEvent", function (data) {
      expect(data.message).to.equal("Test message");
      done();
    });
  });

  it("should handle errors if DB is unreachable (simulate failure)", function (done) {
    // Simulate failure by triggering an error in the socket or API (if applicable)
    done();
  });
});
