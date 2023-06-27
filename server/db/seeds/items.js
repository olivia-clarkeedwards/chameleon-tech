exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    { id: 1, item: 'Make it prettier', listId: 1 },
    { id: 2, item: 'Add auth', listId: 1 },
    { id: 3, item: 'Add confetti animations', listId: 1 },
    { id: 4, item: 'Add Next.js routes', listId: 2 },
    { id: 5, item: 'Deploy', listId: 2 },
    { id: 6, item: 'Write tests', listId: 2 },
    { id: 7, item: 'Backlog', listId: 3 },
    { id: 8, item: 'Build FE components', listId: 3 },
    { id: 9, item: 'Add drag and drop', listId: 3 },
    { id: 10, item: 'Make the database', listId: 4 },
  ])
}
