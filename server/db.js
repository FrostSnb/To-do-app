const mongoose = require('mongoose');

module.exports = async () =>{
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect(
            "mongodb+srv://admin:R6daHKNqypYUD2Tj@cluster0.96drm.mongodb.net/todo-app",
            connectionParams
        );
        console.log("Connected to database");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
}

