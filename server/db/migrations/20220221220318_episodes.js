exports.up = (knex) => {
    return knex.schema.createTable('episodes', (table) => {
      table.increments('id')
      table.string('name')
      table.date('episode_date')
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('episodes')
  }