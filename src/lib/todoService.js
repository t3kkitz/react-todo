const baseUrl = 'http://localhost:3007/todos';

export const loadTodos = () => fetch(baseUrl)
  .then(res => res.json())

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method:  'post',
    headers: {
      'Accept':       'application/json',
      'Content-Type': 'application/json'
    },
    body:    JSON.stringify(todo)
  })
    .then(res => res.json())
}