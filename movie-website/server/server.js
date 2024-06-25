const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nathashais21:Rm3KeYDcBaXIpeFL@mov.sa8whmg.mongodb.net/?retryWrites=true&w=majority&appName=mov', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Define routes
// app.use('/api/movies', require('./routes/movies'));
const moviesRouter = require('./routes/movies');
app.use('/api/movies', moviesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
