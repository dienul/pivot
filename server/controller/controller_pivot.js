const faker = require('faker')
const path = require("path")
// const goblok = require('../../client/index.ejs')
const db_pivot = require('../model/pivot')
const bd_item = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7", "Item8", "Item9", "Item10"]

class pivot {
  static async generate(req, res){
    // res.render('index', {title: 'Transaction'})
    try {
      let price_fake = [50000, 100000]
      let data_faker = {
      firstname : faker.name.firstName(),
      lastname : faker.name.lastName(),
      item : bd_item[Math.ceil(Math.random() * 10)-1],
      quantity : Math.ceil(Math.random() * 10),
      }
      data_faker.email = `${data_faker.firstname}${data_faker.lastname}@gmail.com`,
      data_faker.total_price = data_faker.quantity * price_fake[Math.ceil(Math.random() * 2)-1]

      let insert_transaction = await db_pivot.insert_data(data_faker)
      res.status(200).json({status : "success", data : data_faker})

    } catch (error){
      res
      .status(500)
      .json({
        status : "error",
        massage : error
      })
    }
  }
  static async insert_data(req, res){
    try {
      console.log(req.body)
      const {firstname, lastname, email, item, quantity, total_price} = req.body
      let body = {
        firstname : firstname,
        lastname  : lastname,
        email     : email,
        item      : item,
        quantity  : quantity,
        total_price : total_price
      }
      let insert_transaction = await db_pivot.insert_data(body)
      if(insert_transaction === "success"){
        res.status(200).json({status : "success", massage : "succes insert data"})
      } else {
        res.status(400).json({ status : "failed",massage : "failed insert data"})
      }
    } catch(error){
      res
      .status(500)
      .json({
        status : "error",
        massage : error
      })
    }
  }
  static async change_pivot(req, res){
    try {
      let get_all =await db_pivot.get_all()
      // console.log(get_all)
      let get_header = await db_pivot.get_header(get_all)
      let result = []
      for(let i = 0 ; i < get_all.length ;i ++){
        let get_one = await db_pivot.get_one(get_all[i], get_all)

        for(let j = 0; j < get_one.items.length; j++){
          let elemen = get_one.items[j]
          if(elemen.name == get_all[i].item){
            elemen.value = get_all[i].quantity
          }
        }

        result.push(get_one)
      }
      res
      .status(200)
      .json({
        status : "success",
        data : {
          header : get_header,
          result : result
        }
      })
    } catch (error){
      console.log(error)
      res
      .status(500)
      .json({
        status : "error",
        massage : error
      })
    }
  }
  static async show_all(req,res){
    try{
      let data = await db_pivot.get_all()
      res.render('index',{title : "Transaction", data : data})
    } catch (error){
      res
      .status(500)
      .json({
        status : "error",
        massage : error
      })
    }
  }
}

module.exports = pivot