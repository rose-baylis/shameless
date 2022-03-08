
exports.up = (knex) => {
    return knex.schema.createTable('books', (table) => {
      table.increments('id')
      table.string('title')
      table.string('author')
      table.string('recommended_by')
      table.timestamp('created_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('books')
  }