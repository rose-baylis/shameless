exports.up = (knex) => {
    return knex.schema.createTable('episodes', (table) => {
      table.increments('id')
      table.string('episode_name')
      table.date('episode_date')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      
    })
  }
  
  exports.down = (knex) => {
    return knex.schema.dropTable('episodes')
  }