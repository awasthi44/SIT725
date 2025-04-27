const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Simple API endpoint
app.get("/api/projects", (req, res) => {
  res.status(200).send({
    message: "Success",
    data: ["Project 1", "Project 2"]
  });
});

// Socket connection setup
io.on("connection", (socket) => {
  console.log("A user connected");
  
  // Listening for events from the client
  socket.on("testEvent", (data) => {
    console.log(data);
    socket.emit("responseEvent", { message: data.message });
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

