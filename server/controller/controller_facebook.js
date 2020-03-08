const unirest = require('unirest')
const helper = require('../helper/index')
const _ = require("lodash")

class Fb{
    static async feed(req, res){
        try{
            let page = req.query.page
            let limit = req.query.limit
            let access_token = 'EAADSlAWdtqIBAJZCWSzL7dlnNPzIor2ZASuR1ZCKP8uVa5p1dDmdwYiJS3pUd6rZChuUuUbAm0uD6mgaxNcZBh45Izq4Gma8ZCZAEUC0DKM3XQHtYTMPSJuVoQmz7EP7eXdpD39gTub9t2ZCAFkEZB7l9XTBYgwIEWIE009cNBZCFiNrfC9DXb9mZAlMXJZBV8qzNz6o8QSI4S9qhEM08dYZBRnZBUEo7hdEvhMValwRZCEKZCRlSAZDZD'
            let data =  await unirest.get("https://graph.facebook.com/me?fields=id,first_name,last_name,feed&access_token=" + access_token)
            let json_data = JSON.parse(data.body)
            let pag_feed = json_data.feed.data

            let data_feed = helper.getPaginatedItems(pag_feed,page,limit)
            json_data.feed = data_feed

            res.status(200).json(json_data)
        }catch(error){
            res.status(500).json(error)
        }
    }
}

module.exports = Fb