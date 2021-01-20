const User = require('../../models/User')

module.exports = {
    Mutation: {
        register(_, { registerInput: {username, email, password, confirmPassword}}, context, info){
            //TODO: Validate User Data
            //TODO: Make sure User doesn't already exist
            //TODO: Hash password and create an auth token
            
        }
    }
}