const validator = require('validator');


let middlewares = {
    validateTransaction : function(req, res, next){
        try{
            let valid = true;
            let message = [];
            if (validator.isEmpty(req.body.firstname)) {
                valid = false;
                message.push("First Name is Empty !")
            }
            if (validator.isEmpty(req.body.lastname)) {
                valid = false;
                message.push("Last Name is Empty !")
            }
            if (validator.isEmpty(req.body.email)) {
                valid = false;
                message.push("Email is Empty!")
            }
            if (validator.isEmpty(req.body.item)) {
                valid = false;
                message.push("Item is Empty!")
            }
            if ((validator.isEmpty(req.body.quantity)) || req.body.quantity < 1 ) {
                valid = false;
                message.push("Quantity is Empty or Quatity is 0! ")
            }
            if((validator.isEmpty(req.body.total_price)) || req.body.total_price < 1){
                valid = false;
                message.push("Total price is Empty or Quatity is 0!")
            }

            console.log(message)
            if(valid){
                next()
            } else {
                res.status(400).json({message : message})
            }  
        } catch(error){
            console.log(error)
            res.status(500).json({message : error.message})
        }
    }
}

module.exports = middlewares