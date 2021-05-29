<template>
  <q-btn @click="handleButtonClicked" />
</template>

<script>
export default {
  methods: {
    handleButtonClicked () {
      this.$q.dialog({
        title: 'Create Todo',
        prompt: {
          model: '',
          type: 'text'
        }
      })
        .onOk(this.createTodo)
    },

    createTodo (data) {
      this.$q.notify({
        message: 'Todo Created!',
        icon: 'mdi-check',
        color: 'positive'
      })
    }
  }
}
</script>
