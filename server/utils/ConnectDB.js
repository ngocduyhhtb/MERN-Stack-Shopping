const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useCreateIndex: true,
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Fail to connect to MongoDB');
        process.exit(1);
    }
}
module.exports = connectDatabase;