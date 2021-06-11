require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const connectDatabase = require('./utils/ConnectDB');

//Server config
app.use(express.json());
app.use(cors());

//Connect database
connectDatabase();

//Route import
const authRouter = require('./routes/Authentication');

//Route define
app.use('/api/auth', authRouter);
//Server port
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server was started at PORT: ${PORT}`);
})