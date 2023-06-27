/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lists').del()
  await knex('lists').insert([
    { id: 1, list: 'Backlog' },
    { id: 2, list: 'Doing' },
    { id: 3, list: 'Review' },
    { id: 4, list: 'Done' },
  ])
}
