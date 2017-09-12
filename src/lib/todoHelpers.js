export function addTodo(list, item) {
  return [...list, item]
}

export function generateId() {
  return Math.floor(Math.random() * 100000)
}

export function findById(id, list) {
  return list.find(item => item.id === id)
}

export function toggleTodo(todo) {
  return {
    ...todo,
    isComplete: !todo.isComplete
  }
}