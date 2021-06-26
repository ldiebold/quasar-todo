<template>
  <q-page class="row">
    <q-card class="col-xs-9">
      <q-toolbar>
        <q-input
          dense
          placeholder="Search"
          borderless
          class="full-width"
          :model-value="search"
        >
          <template #append>
            <q-icon name="mdi-magnify" />
          </template>
        </q-input>
      </q-toolbar>
      <TodosList bordered />
    </q-card>

    <div class="col-xs-3">
      <q-toolbar class="bg-primary">
        <CreateTodoButton
          fab
          style="margin-bottom: -42px;"
          class="q-ml-lg"
          color="secondary"
          icon="mdi-plus"
        />
      </q-toolbar>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import CreateTodoButton from 'components/CreateTodoButton.vue'
import TodosList from 'components/TodosList.vue'

export default defineComponent({
  name: 'PageIndex',

  components: {
    CreateTodoButton,
    TodosList
  },

  data () {
    return {
      search: ''
    }
  },

  methods: {
    fire (params) {
      console.log(params)
    }
  }
})
</script>
