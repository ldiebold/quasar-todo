<template>
  <q-btn
    :loading="loading"
    @click="handleButtonClicked"
  />
</template>

<script>
import { useQuasar } from 'quasar'
import { $create } from 'src/stores/todoStore'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    const loading = ref(false)

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
      loading.value = true
      $create({
        label: todoTitle,
        complete: false
      })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      loading,
      handleButtonClicked
    }
  }
}
</script>
