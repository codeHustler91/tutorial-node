
exports.up = function(knex) {
    return knex.schema.createTable('students', (student) => {
        student.increments('id')
        student.integer('grade')
        student.string('name')
        student.boolean('isGood?')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('students')
};
