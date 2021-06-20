import { ref } from 'vue'

const todos = ref([
  {
    id: 1,
    label: 'Go Shopping',
    completed: true
  },
  {
    id: 2,
    label: 'Cook Dinner',
    completed: false
  }
])

const addTodo = (data) => {
  todos.value.push(data)
}

export {
  todos,
  addTodo
}
