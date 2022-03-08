exports.up = (knex) => {
    return knex.schema.createTable('books_episodes', (table) => {
      table.increments('id')
      table.integer('book_id')
      table.integer('episode_id')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('books_episodes')
  }