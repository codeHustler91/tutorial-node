
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'timmy', isGood: false, grade: 95},
        {name: 'sally', isGood: true, grade: 82},
        {name: 'walter', isGood: true, grade: 69},
        {name: 'sammy', isGood: false, grade: 54},
        {name: 'patty', isGood: true, grade: 91},
        {name: 'nelly', isGood: false, grade: 84}
      ]);
    });
};
