
const db = require('mongoose');
const { Schema } = db;
const bcrypt = require('bcryptjs');


const userSchema = Schema({
    name : { type : String, required: true },
    email : { type : String, required: true, index: true, unique: true },
    password : { type : String, required: true},
    joined : { type : Date, default: new Date() }
});

userSchema.pre('save', async function(next){
    //chek new or modifyed account
    if(!this.isModified('password')){
        return next();
    }

    //encrybt Passowrd
    try{
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(this.password, salt);
        this.password = hash;
        next();
        }catch(e){
             return next(e)
        }
});


userSchema.methods.isPasswordMatch = function(password, hash, callback){
    bcrypt.compare(password, hash, function(err, res) {
       if(err) return callback(err);
       callback(null, res);
      
    });
};

//control obj{} => convert schema to obj
userSchema.methods.toJSON = function(){
    let pass = this.toObject();
    delete pass.password;
    console.log(pass);
    return pass;
}



const userModel = db.model('users',userSchema);

module.exports = userModel;
