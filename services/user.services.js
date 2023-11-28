const UserModel = require('../model/user.model');
const jwt = require('jsonwebtoken')

class userService {
    static async registerUser(email, password) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (error) {
            throw error;
        }
    }

    static async generateToken(tokendata, secretKey, jwt_expire) {
        return jwt.sign(tokendata, secretKey, { expiresIn: jwt_expire })
    }
}

module.exports = userService;