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

/**
 * Changing the store
 */
const setTodos = (todosArray) => {
  todos.value = todosArray
}

const addTodo = (data) => {
  todos.value.push(data)
}

export {
  $create,
  $get,
  setTodos,
  todos,
  addTodo
}
