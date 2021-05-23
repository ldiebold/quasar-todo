<template>
  <q-page padding>
    <q-select
      v-model="selected"
      borderless
      :options="['Luke', 'Shannen', 'Panda', 'Lily']"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',

  data () {
    return {
      selected: null
    }
  }
})
</script>
