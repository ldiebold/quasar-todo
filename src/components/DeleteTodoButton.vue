<template>
  <q-btn
    :loading="loading"
    @click="handleClicked"
  />
</template>

<script>
import { $delete } from 'src/stores/todoStore'
import { ref } from 'vue'

export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },

  setup (props) {
    const loading = ref(false)

    const handleClicked = () => {
      loading.value = true
      $delete(props.todo.id)
        .finally(() => {
          loading.value = false
        })
    }

    return {
      loading,
      handleClicked
    }
  }
}
</script>
