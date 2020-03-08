const _ = require('lodash')

class Helper {
    static getPaginatedItems (items, page, pageSize){
        try {
            var pg = page || 1,
                pgSize = pageSize || 5,
                offset = (pg - 1) * pgSize,
                pagedItems = _.drop(items, offset).slice(0, pgSize);
            return {
                page: pg,
                pageSize: pgSize,
                total: items.length,
                total_pages: Math.ceil(items.length / pgSize),
                data: pagedItems
            };
        } catch (error){
            throw error
        }
    }
}

module.exports = Helper