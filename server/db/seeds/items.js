/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { id: 1, item: 'Make it prettier', list_id: 1 },
    { id: 2, item: 'Add auth', list_id: 1 },
    { id: 3, item: 'Add confetti animations', list_id: 1 },
    { id: 4, item: 'Add Next.js routes', list_id: 2 },
    { id: 5, item: 'Deploy', list_id: 2 },
    { id: 6, item: 'Write tests', list_id: 2 },
    { id: 7, item: 'Backlog', list_id: 3 },
    { id: 8, item: 'Build FE components', list_id: 3 },
    { id: 9, item: 'Add drag and drop', list_id: 3 },
    { id: 10, item: 'Make the database', list_id: 4 },
  ])
}
