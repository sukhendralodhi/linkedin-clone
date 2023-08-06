const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const connect = await mongoose.connect('mongodb+srv://sukhendrawiz:admin123@linkedinclone.fnrqzmd.mongodb.net/linkedin-clone-backend?retryWrites=true&w=majority');
        console.log(
            'Database Connected',
            connect.connection.host,
            connect.connection.name
        );
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;