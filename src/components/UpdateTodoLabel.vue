<template>
  <q-input
    v-model="localLabel"
    :loading="loading"
    :disable="loading"
    @blur="handleBlur"
  />
</template>

<script>
import { $update } from 'src/stores/todoStore'
import { ref, watch } from 'vue'

export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },

  setup (props) {
    watch(() => props.todo.label, (newValue) => {
      localLabel.value = newValue
    })

    const loading = ref(false)
    const localLabel = ref(props.todo.label)

    const handleBlur = () => {
      if (props.todo.label === localLabel.value) {
        return false
      }

      loading.value = true
      $update({
        id: props.todo.id,
        label: localLabel.value
      })
        .finally(() => {
          loading.value = false
        })
    }

    return {
      loading,
      localLabel,
      handleBlur
    }
  }
}
</script>
