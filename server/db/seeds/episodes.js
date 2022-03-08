const { saveCookies } = require("superagent");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('episodes').del()
  await knex('episodes').insert([
    {id:1, name: 'Scamming her way to 300k', episode_date: 1496275200000},
    {id:2, name: 'The Platinum Jubbly', episode_date: 1496275200000},
    {id:3, name: 'Who wants to be TikTok famous', episode_date: 1496275200000},
    {id:4, name: '2022s very first influencer scandal', episode_date: 1496275200000},
    {id:5, name: 'Excuse us, theres alot to discuss', episode_date: 1496275200000},
  
  ]);
};
