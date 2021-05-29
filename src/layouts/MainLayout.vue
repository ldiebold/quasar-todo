<template>
  <q-layout view="hHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="mdi-menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-toolbar class="bg-primary" />

      <q-item class="bg-grey-3">
        <q-item-section>
          Lists
        </q-item-section>

        <q-item-section side>
          <CreateTodoListButton
            icon="mdi-plus"
            size="sm"
            flat
            round
          />
        </q-item-section>
      </q-item>
      <TodoListsList />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'
import CreateTodoListButton from 'components/CreateTodoListButton.vue'
import TodoListsList from 'components/TodoListsList.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    CreateTodoListButton,
    TodoListsList
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
