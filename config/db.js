const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://bhanugaur2004:bhanugaur04@bhanu.ajvmyah.mongodb.net/todo", {

}).then(() => [
    console.log("Successfully connected to Mongo Db")
]).catch((e) => {
    console.log(e)
})
