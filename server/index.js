const express = require('express');
const connectDB = require('./config/dbConnection');
const app = express();

const PORT = 5001;

connectDB();

app.use(express.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use("/api/posts", require('./routes/postRoutes'));

app.listen(PORT, () => {
    console.log(`Server has been running on PORT: ${PORT}`);
});