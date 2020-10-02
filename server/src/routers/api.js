const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/users.controller');
const expenses = require('../controllers/expense.controller');


router.post('/register', users.register);

router.post('/login', users.login);

router.all('*', (req,res,next) => {
    passport.authenticate('jwt', {session: false}, (err,user) => {
        if(err || !user){
            // this way will show only message with satus 200 ok ??!!
            // res.send({message : "Your are not allowed to be here"}); 

            //This way it will shows The status 401 and messge unauthrize in network
            const ero = new Error('Youre not allowed to be here');
            ero.status = 401;
            throw ero;
        }
        //else
        req.user = user;
        next();
    })(req,res,next)
});

// router.get('/test', (req,res,next) => {
//     const userInfo = req.user;
//     if(req.user){
//         return res.send({userInfo});
//     }
// });


router.get('/expense', expenses.get );
router.get('/expense/:year', expenses.get );
router.post('/expense', expenses.create );
router.post('/expense/:expense_id', expenses.update );

router.delete('/expense/:expense_id', expenses.destroy );

module.exports = router;