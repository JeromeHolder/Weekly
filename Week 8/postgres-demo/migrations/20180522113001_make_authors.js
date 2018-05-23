
// Inside 'up' we write the code that takes the DB and moves it to its new structure
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('authors', function(table){
        table.increments('id').primary();
        table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
        table.string('name').notNullable();
    });
};

// Inside 'down' we write the code that moves the DB back to its old structure
exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('authors');
};