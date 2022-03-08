/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex("books").insert([
    {
      id: 1,
      title: "Verity",
      author: "By Colleen Hoover",
      recommended_by: "Zara",
    },
    {
      id: 2,
      title: "Detransition, Baby",
      author: "By Torrey Peters",
      recommended_by: "Zara",

    },
    {
      id: 3,  
      title: "Love Stories",
      author: "By Trent Dalton",
      recommended_by: "Zara",

    },
    {
      id: 4,
      title: "If I had Your Face",
      author: "By Frances Cha",
      recommended_by: "Zara",

    },
    {
      id: 5,
      title: "Before you knew my name",
      author: "By Jacqueline Bublitz",
      recommended_by: "Mich",

    },
    {
      id: 6,
      title: "Everything I love to Cook",
      author: "By Neil Perry",
      recommended_by: "Zara",

    }
  ]);
};
