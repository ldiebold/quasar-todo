<template>
  <q-list>
    <q-item>
      <q-item-section side>
        <UpdateTodoCheckbox />
      </q-item-section>

      <q-item-section>
        Go Shopping
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

export default {
  components: {
    UpdateTodoCheckbox,
    DeleteTodoButton
  }
}
</script>
