const jwtStrategy  = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const userModel = require('../model/users.model');


module.exports = (passport) => {
    let config = {};
    config.secretOrKey  = process.env.SECRET;
    config.jwtFromRequest  = ExtractJwt.fromAuthHeaderAsBearerToken();

    passport.use(new jwtStrategy(config, async (jwtPayload, ok) => {
        try{
            const user = await userModel.findById(jwtPayload._id);
            
            if(user){
               return ok(null, user); 
               
            }else{
                return ok(null, false); 
            }
        }catch(e){
            return ok(err, false);
        }
    }))
}