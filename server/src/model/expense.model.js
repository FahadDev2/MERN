
const db = require('mongoose');
const { Schema } = db;


const expenseSchema = Schema({
    amount : { type : Number, required: true },
    description : { type : String },
    created : { type : Date, required: true },
    owner: {
        type: db.Schema.Types.ObjectId,
        ref: "users"
    }
});



const expenseModel = db.model('expense',expenseSchema);

module.exports = expenseModel;
