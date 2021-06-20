<template>
  <!-- Spinner -->
  <div
    v-if="loading"
    class="text-center"
  >
    <q-spinner
      size="md"
      color="primary"
    />
  </div>

  <!-- Todos -->
  <q-list
    v-else
    v-bind="$attrs"
  >
    <q-item
      v-for="todo in todos"
      :key="todo.id"
    >
      <q-item-section side>
        <UpdateTodoCheckbox :todo="todo" />
      </q-item-section>

      <q-item-section>
        <UpdateTodoLabel
          borderless
          :todo="todo"
          dense
        />
      </q-item-section>

      <q-item-section side>
        <DeleteTodoButton
          flat
          round
          size="sm"
          icon="mdi-delete"
          :todo="todo"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import UpdateTodoCheckbox from 'components/UpdateTodoCheckbox.vue'
import DeleteTodoButton from 'components/DeleteTodoButton.vue'
import UpdateTodoLabel from 'components/UpdateTodoLabel.vue'
import { todos, $get } from 'src/stores/todoStore'
import { ref } from 'vue'

export default {
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton,
    UpdateTodoLabel
  },

  setup () {
    const loading = ref(true)

    $get()
      .then(response => {
        loading.value = false
      })

    return {
      loading,
      todos
    }
  }

}
</script>
