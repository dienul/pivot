const faker = require('faker')
const _ = require('lodash')
// const db_vipot = require('../model/vipot')
const bd_item = ["Barang 1", "Barang 2", "Barang 3", " Barang 4", "Barang 5", "Barang 6", "Barang 7", "Barang 8", "Barang 9", "Barang 10"]
let db =[
{ firstname: 'Priscilla',
lastname: 'Ebert',
email: 'Rickie_Marquardt12@hotmail.com',
item: 'Barang 9',
quantity: 1,
total_price: 50000 },
{ firstname: 'Norene',
lastname: 'Bruen',
email: 'Roger_Orn51@yahoo.com',
item: 'Barang 8',
quantity: 1,
total_price: 50000 },
{ firstname: 'Hyman',
lastname: 'Johnston',
email: 'Estefania.Jast@gmail.com',
item: 'Barang 1',
quantity: 4,
total_price: 50000 },
{ firstname: 'Adolphus',
lastname: 'Wuckert',
email: 'Claire_Waelchi@hotmail.com',
item: 'Barang 3',
quantity: 7,
total_price: 50000 },
{ firstname: 'Nina',
lastname: 'Quigley',
email: 'Evalyn.Schmeler31@gmail.com',
item: 'Barang 9',
quantity: 5,
total_price: 100000 },
{ firstname: 'Eleonore',
lastname: 'Beer',
email: 'Derrick_Streich74@hotmail.com',
item: 'Barang 8',
quantity: 6,
total_price: 100000 },
{ firstname: 'Benton',
lastname: 'Lehner',
email: 'Aron.Larson@hotmail.com',
item: 'Barang 5',
quantity: 6,
total_price: 100000 },
{ firstname: 'Margret',
lastname: 'Jakubowski',
email: 'River.Connelly@yahoo.com',
item: 'Barang 9',
quantity: 2,
total_price: 50000 },
{ firstname: 'Elisabeth',
lastname: 'Kutch',
email: 'Aidan.Koepp@hotmail.com',
item: 'Barang 6',
quantity: 7,
total_price: 50000 },
{ firstname: 'Lia',
lastname: 'Hudson',
email: 'Monty_Nienow29@gmail.com',
item: 'Barang 2',
quantity: 1,
total_price: 100000 },
{ firstname: 'Camilla',
lastname: 'West',
email: 'Jaylon.Fahey@yahoo.com',
item: 'Barang 10',
quantity: 7,
total_price: 50000 },
{ firstname: 'Ollie',
lastname: 'Anderson',
email: 'Peyton.Cremin@gmail.com',
item: 'Barang 10',
quantity: 7,
total_price: 100000 },
{ firstname: 'Shanny',
lastname: 'Morissette',
email: 'Mose6@hotmail.com',
item: 'Barang 3',
quantity: 10,
total_price: 50000 },
{ firstname: 'Jordy',
lastname: 'Brakus',
email: 'Georgiana8@gmail.com',
item: 'Barang 3',
quantity: 8,
total_price: 100000 },
{ firstname: 'Oleta',
lastname: 'Littel',
email: 'Doyle.OReilly@yahoo.com',
item: 'Barang 7',
quantity: 10,
total_price: 100000 },
{ firstname: 'Citlalli',
lastname: 'Daugherty',
email: 'Brayan_Heller@gmail.com',
item: 'Barang 7',
quantity: 5,
total_price: 100000 },
{ firstname: 'Brielle',
lastname: 'Carroll',
email: 'Vella_Ryan89@gmail.com',
item: 'Barang 8',
quantity: 9,
total_price: 50000 },
{ firstname: 'Tierra',
lastname: 'Rogahn',
email: 'Foster.West25@gmail.com',
item: 'Barang 10',
quantity: 5,
total_price: 100000 },
{ firstname: 'Jordy',
lastname: 'Mraz',
email: 'Leon_Nolan@gmail.com',
item: 'Barang 3',
quantity: 7,
total_price: 100000 },
{ firstname: 'Jessyca',
lastname: 'Turcotte',
email: 'Burnice_Bernier@hotmail.com',
item: 'Barang 9',
quantity: 9,
total_price: 100000 } ] 
// console.table(db.sort());
class vipot {
  static insert_data(req, res){
    let result = []
    db.forEach((el, i)=>{
      let temp = this.getone(el)
      temp.items.forEach((el2,i)=>{
        if(el2.name == el.item){
          el2.value = el.quantity
        }
      })
      result.push(temp)
    })
    // console.log(result);
      res
      .status(500)
      .json({
        status : "error",
        massage : result
      })
  }

  static getone(obj){
    let obj_temp = {
      fullname : `${obj.firstname} ${obj.lastname}`,
      email : obj.email,
      items : []
    }
    db.forEach((el,i)=>{
      
      if(obj_temp.items.length ==0){
        obj_temp.items.push( {name : el.item, value : 0})
      } else {
        let isSame = false
        obj_temp.items.forEach((el2,i)=>{
          if(el2.name == el.item){
            isSame  =true
          }
        })
        if(!isSame){
          obj_temp.items.push( {name : el.item, value : 0})
        }
      }
    })
    
    obj_temp.items.sort(function( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
    })

    return obj_temp
  }
}

module.exports = vipot
