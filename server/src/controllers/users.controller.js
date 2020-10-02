const jwt = require('jsonwebtoken');

const userModel = require('../model/users.model');
const userController = {};


/* Register logic */
userController.register = async (req,res,next) => {
    const {name, email, password, joined } = req.body;
    const newUser = new userModel({name, email, password, joined});
    try{
       const user = await newUser.save();
       return res.send({ user });
    }catch(e){
        if(e.code === 11000 && e.name === 'MongoError'){
              let error = new Error(`This Email ${newUser.email} Is Already Taken`);
                next(error);
            } else{
                next(e);
            }

       
    }
};


userController.login = async (req,res,next) => {
    // get Request
    const {email,password} = req.body;
   try{ 
       const user = await userModel.findOne({email});
       console.log(user);
    if(!user){
        const e = new Error(`The email : ${email} not found`);
        e.status = 401;
        next(e);
    }

    user.isPasswordMatch(password, user.password, (err,ok) => {
        if(ok){
            // if true then create JWT and return it 

            //secret
            const sec = process.env.SECRET;
            //expiration
            const exp = process.env.EXP;

            const token = jwt.sign({_id:user._id}, sec, {expiresIn: exp});
             
            return res.send({token});
          
        }
       
        res.status(401).send({ error : "not ok"});
    });

}catch(e){
  
        next(e)
}
  

}

module.exports = userController;