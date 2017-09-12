export function addTodo(list, item) {
  return [...list, item]
}

export function generateId() {
  return Math.floor(Math.random() * 100000)
}