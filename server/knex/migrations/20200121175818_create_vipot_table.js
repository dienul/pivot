
exports.up = function(knex) {
  return knex.schema.createTable('Transaction', function(table) {
    table.increments();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('email').notNullable();
    table.string('item').notNullable();
    table.integer('quantity').notNullable();
    table.decimal('total_price', 19, 2).notNullable().defaultTo(0).index();
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Transaction');
};
