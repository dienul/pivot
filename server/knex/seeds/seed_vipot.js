
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
          item:'Item1',
          quantity:2,
          total_price:100000
        },
        {
          id: 2,
          firstname: 'Joko',
          lastname: 'Widodo',
          email:'Joko@gmail.com',
          item:'Item2',
          quantity:1,
          total_price:50000
        },
        {
          id: 3,
          firstname: 'Jusuf',
          lastname: 'Kalla',
          email:'Jusuf@gmail.com',
          item:'Item3',
          quantity:3,
          total_price:150000
        },
        {
          id: 4,
          firstname: 'Tommy',
          lastname: 'Bejo',
          email:'tommybejo@gmail.com',
          item:'Item4',
          quantity:2,
          total_price:100000
        },
        {
          id: 5,
          firstname: 'Leola',
          lastname: 'Kub',
          email:'LeolaKub@gmail.com',
          item:'Item5',
          quantity:2,
          total_price:100000
        },
        {
          id: 6,
          firstname: 'Sterling',
          lastname: 'Rosenbaum',
          email:'SterlingRosenbaum@gmail.com',
          item:'Item6',
          quantity:1,
          total_price:150000
        },
        {
          id: 7,
          firstname: 'Susan',
          lastname: 'Wilkinson',
          email:'SusanWilkinson@gmail.com',
          item:'Item7',
          quantity:3,
          total_price:150000
        },
        {
          id: 8,
          firstname: 'Robert',
          lastname: 'Garcia',
          email:'Robert@gmail.com',
          item:'Item8',
          quantity:3,
          total_price:300000
        },
        {
          id: 9,
          firstname: 'Lenora',
          lastname: 'McKenzie',
          email:'LenoraMcKenzie@gmail.com',
          item:'Item9',
          quantity:2,
          total_price:200000
        },
        {
          id: 10,
          firstname: 'Guiseppe',
          lastname: 'Zulauf',
          email:'GuiseppeZulauf@gmail.com',
          item:'Item10',
          quantity:4,
          total_price:200000
        }
      ]);
    });
};
