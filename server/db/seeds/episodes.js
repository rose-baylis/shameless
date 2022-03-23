const { saveCookies } = require("superagent");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('episodes').del()
  await knex('episodes').insert([
    {id:1, episode_name: 'Scamming her way to 300k', episode_date: 1496275200000},
    {id:2, episode_name: 'The Platinum Jubbly', episode_date: 1496275200000},
    {id:3, episode_name: 'Who wants to be TikTok famous', episode_date: 1496275200000},
    {id:4, episode_name: '2022s very first influencer scandal', episode_date: 1496275200000},
    {id:5, episode_name: 'Excuse us, theres alot to discuss', episode_date: 1496275200000},
  
  ]);
};
