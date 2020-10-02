
const { query } = require('express');
const expenseModel = require('../model/expense.model');
const expenseController = {};


expenseController.get = async (req,res,next) =>{
    const user = req.user;
    // const urls = req.params;
    // let query;
    const now = new Date();
    const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1 , 0);
    console.log(firstDay);
    console.log(lastDay);
    const query = {owner: user._id, created: {
        $gte: firstDay,
        $lt: lastDay
    }};

    try{
        // if(urls.year){query = {created: `${urls.year}-05-10T00:00:00.000Z` ,owner: user._id};}else
        
    const resault = await expenseModel.find(query);
    return res.send({resault});
        }catch(e){
            next(e);
        }
    
}

expenseController.create = async (req,res,next) => {
    const {amount, description, created} = req.body;
    const newExpense = new expenseModel({
        amount, description, created,
        owner: req.user
    });
    try{

        const saveData = await newExpense.save();

        return res.send({
            success : true,
            expense : saveData
        });

    }catch(e){
        next(e);
    }
}


expenseController.update = async (req,res,next) => {
    const id = req.params.expense_id;
    const {amount, description, created} = req.body;
    try{

        const findItem = await expenseModel.findOne({_id:id});
        if(!findItem || !findItem.owner.equal(req.user._id)){
            const error = new Error("Oops..!");
            error.status = 401;
            throw error;
        }
        
        const updatItem = await expenseModel.updateOne({amount, description, created});
        res.send({message: "Updated", findItem});
      


    }catch(e){
        next(e);
    }
}

expenseController.destroy = async (req,res,next) => {
    const id = req.params.expense_id;
    try{
       
    const findId = await expenseModel.findOne({_id : id});
        if(!findId || !findId.owner.equal(req.user._id)){
            const err = new Error("Oops..!");
            error.status = 401;
            throw err;
        }
        
        await expenseModel.deleteOne({_id : id});
        res.send({ success:true, data: {message: "Removed From DataBase", item: findId}});
    }catch(e){
        next(e);
        
    }
}


module.exports = expenseController;