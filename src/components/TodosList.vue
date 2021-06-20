<template>
  <q-list>
    <q-item
      v-for="todo in todos"
      :key="todo.id"
    >
      <q-item-section side>
        <UpdateTodoCheckbox :model-value="todo.completed" />
      </q-item-section>

      <q-item-section>
        {{ todo.label }}
      </q-item-section>

      <q-item-section side>
        <DeleteTodoButton
          flat
          round
          size="sm"
          icon="mdi-delete"
        />
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import UpdateTodoCheckbox from 'components/UpdateTodoCheckbox.vue'
import DeleteTodoButton from 'components/DeleteTodoButton.vue'
import { todos } from 'src/stores/todoStore'

export default {
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton
  },

  setup () {
    return {
      todos
    }
  }

}
</script>
