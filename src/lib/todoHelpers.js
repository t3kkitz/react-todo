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

export function updateTodo(list, updated) {
  const updatedIndex = list.findIndex(item => item.id === updated.id);
  return [
    ...list.slice(0, updatedIndex),
    updated,
    ...list.slice(updatedIndex + 1),
  ]
}

export function removeTodo(list, id) {
  return list.filter(item => item.id !== id)
}

export function filterTodos(list, route) {
  switch (route) {
    case '/active':
      return list.filter(item => !item.isComplete)
      break;
    case '/complete':
      return list.filter(item => item.isComplete)
      break;
    default:
      return list
  }
}