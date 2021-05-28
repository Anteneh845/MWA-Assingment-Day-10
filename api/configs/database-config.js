const {connect,connection} = require("mongoose");
const DB_NAME = "JobSearch";
const DB_URL = "mongodb://localhost:27017/" + DB_NAME;

// Import the schemas
require("../schemas/job-opening.schema");

connect(DB_URL, {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true}, (err) => {
    if (err)
        console.log("Failed to connect to database")
    else
        console.log("Connection to database successful")
})

process.on('SIGINT', () => {
    connection.close(() => console.log("Disconnected to database successfully"))
    process.exit(0)
})

process.on('SIGTERM', () => {
    connection.close(() => console.log("Disconnected to database successfully"))
    process.exit(0)
})


process.once('SIGUSR2', () => {
    connection.close(() => console.log("Disconnected to database successfully"))
    process.kill(process.pid, "SIGUSR2")
})
