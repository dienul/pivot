const knex = require('../knex/knex')

class Pivot {
  static async insert_data(data){
    try{
      let insert_transaction = await knex("Transaction").insert(data)
      return "success"
    }catch(error){
      throw error
    }
  }
}


module.exports = Pivot