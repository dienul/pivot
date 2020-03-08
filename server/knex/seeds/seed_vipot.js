
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Transaction').del()
    .then(function () {
      // Inserts seed entries
      return knex('Transaction').insert([
        {
          id: 1,
          firstname: 'Tommy',
          lastname: 'Bejo',
          email:'tommybejo@gmail.com',
          item:'Barang1',
          quantity:2,
          total_price:100000
        },
        {
          id: 2,
          firstname: 'Joko',
          lastname: 'Widodo',
          email:'Joko@gmail.com',
          item:'Barang2',
          quantity:1,
          total_price:50000
        },
        {
          id: 3,
          firstname: 'Jusuf',
          lastname: 'Kalla',
          email:'Jusuf@gmail.com',
          item:'Barang3',
          quantity:3,
          total_price:150000
        },
        {
          id: 4,
          firstname: 'Tommy',
          lastname: 'Bejo',
          email:'tommybejo@gmail.com',
          item:'Barang2',
          quantity:2,
          total_price:100000
        },
        {
          id: 5,
          firstname: 'Robert',
          lastname: 'Garcia',
          email:'Robert@gmail.com',
          item:'Barang10',
          quantity:3,
          total_price:150000
        },
      ]);
    });
};
