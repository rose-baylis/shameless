/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books_episodes').del()
  await knex('books_episodes').insert([
    {book_id: 1, episode_id: 1},
    {book_id: 2, episode_id: 2},
    {book_id: 3, episode_id: 3},
    {book_id: 4, episode_id: 4},
    {book_id: 4, episode_id: 5},
    {book_id: 5, episode_id: 5},
  ]);
};
