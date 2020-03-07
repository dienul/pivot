const faker = require('faker')
const path = require("path")
// const goblok = require('../../client/index.ejs')
const db_pivot = require('../model/pivot')
const bd_item = ["item1", "item2", "item3", " item4", "item5", "item6", "item7", "item8", "item9", "item10"]

class pivot {
  static async generate(req, res){
    // res.render('index', {title: 'Transaction'})
    try {
      let price_fake = [50000, 100000]
      let data_faker = {
      firstname : faker.name.firstName(),
      lastname : faker.name.lastName(),
      item : bd_item[Math.ceil(Math.random() * 2)-1],
      quantity : Math.ceil(Math.random() * 10),
      }
      data_faker.email = `${data_faker.firstname}${data_faker.lastname}@gmail.com`,
      data_faker.total_price = data_faker.quantity * price_fake[Math.ceil(Math.random() * 2)-1]

      let insert_transaction = await db_pivot.insert_data(data_faker)
      if(insert_transaction === "success"){
        res.status(200).json({status : "success", massage : "succes generate data"})
      } else {
        res.status(400).json({ status : "failed",massage : "failed generate data"})
      }

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
}

module.exports = pivot