const knex = require('../knex/knex')

class Pivot {
  static async insert_data(data){
    try{
      console.log("-model Pivot-")
      let insert_transaction = await knex("Transaction").insert(data)
      return "success"
    }catch(error){
      throw error
    }
  }
  static async get_all(){
    try {
      let get_all =  knex("Transaction").select("*")
      return await get_all
    } catch (error){
      throw error
    }
  }
  static async get_one(data_one, data_all){
    try {
      // console.log(data_all)
      let data_detail = {
        fullname : `${data_one.firstname} ${data_one.lastname}`,
        email : data_one.email,
        items : []
      }
      for(let i = 0; i < data_all.length; i++){

        if(data_detail.items.length == 0){
          data_detail.items.push({name : data_all[i].item, value : 0})  
        } else {
          let isSame = false
          for(let j = 0; j < data_detail.items.length ; j++){

            if(data_detail.items[j].name == data_all[i].item){
              isSame = true
            }

          }

          if(!isSame){
            data_detail.items.push({name : data_all[i].item, value : 0})
          }
        }
      }
      return data_detail
    } catch (error){
      throw error
    }
  }
  static async get_header(data_all){
    console.log("model get_header")
    try{
      let header = ["Full Name", "Email"]
      for(let i = 0; i < data_all.length; i++){

        if(header.length == 0){
          header.push(data_all[i].item)  
        } else {
          let isSame = false
          for(let j = 0; j < header.length ; j++){

            if(header[j] == data_all[i].item){
              isSame = true
            }

          }

          if(!isSame){
            header.push(data_all[i].item)
          }
        }
      }
      return header
    } catch(error){
      throw error
    }
  }
}


module.exports = Pivot