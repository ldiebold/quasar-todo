<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
import { useQuasar } from 'quasar'
import { addTodo } from 'src/stores/todoStore'

export default {
  setup () {
    const $q = useQuasar()

    const handleButtonClicked = () => {
      $q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        }
      })
        .onOk(createTodo)
    }

    const createTodo = (todoTitle) => {
      addTodo({
        id: 3,
        label: todoTitle,
        completed: false
      })
    }

    return {
      handleButtonClicked
    }
  }
}
</script>
