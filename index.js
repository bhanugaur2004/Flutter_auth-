const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user.model');
const cors = require("cors");


const allowedOrigins = ['http://localhost:3000/registration']; // Replace with your Flutter app's domain.

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));


const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!!!!");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})