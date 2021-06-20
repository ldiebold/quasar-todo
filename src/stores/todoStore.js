import { ref } from 'vue'
import { api } from 'boot/axios'

const todos = ref([])

/**
 * API Requests
 */
const $get = () => {
  return api.get('todos')
    .then(response => {
      setTodos(response.data.data)
      return response
    })
}

const $create = (form) => {
  return api.post('todos', form)
    .then(response => {
      addTodo(response.data.data)
    })
}

const $update = (form) => {
  return api.patch(`todos/${form.id}`, form)
    .then(response => {
      updateTodo(response.data.data)
      return response
    })
}

const $delete = (id) => {
  return api.delete(`todos/${id}`)
    .then(response => {
      removeTodoById(id)
      return response
    })
}

/**
 * Retrieving Data
 */
const findIndexById = (id) => {
  return todos.value.findIndex(todo => todo.id === id)
}

/**
 * Changing the store
 */
const setTodos = (todosArray) => {
  todos.value = todosArray
}

const addTodo = (todo) => {
  todos.value.push(todo)
}

const updateTodo = (todo) => {
  const todoIndex = findIndexById(todo.id)
  todos.value[todoIndex] = todo
}

const removeTodoById = (id) => {
  const todoIndex = findIndexById(id)
  todos.value.splice(todoIndex, 1)
}

export {
  $delete,
  $update,
  $create,
  $get,
  setTodos,
  todos,
  addTodo
}
