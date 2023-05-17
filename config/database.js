const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        UseUnifiedTopology: true,
    } )
    .then(console.log("DB connected succwsfully"))
    .catch( (error) => {
        console.log("DB facing connection issues");
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;