// Import the Express.js library
import express from "express";
import databaseConnection from "./database/databaseConnection.js";
import usersRoutes from "./routes/user.js";

// Create an instance of the Express application
const app = express();

app.use(express.json());
app.use("/users", usersRoutes);

//connect to database
databaseConnection();

// Define the port number on which the server will listen
const PORT = 5000;

// Set up a route fr handling HTTP GET requests to the root URL ("/").
// When a request is made to the root URL, the server responds with "Hello World!"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server and listen on the specified port (3000 in this case).
// When the server starts successfully, it will log a message to the console
// indicating which port it's listening on.
app.listen(PORT, () => {
  console.log(`App listening on port: http://localhost:${PORT}`);
});
