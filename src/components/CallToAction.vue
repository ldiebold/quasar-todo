<template>
  <div class="row justify-center text-white bg-primary q-py-xl q-px-lg">
    <h4
      style="max-width: 450px;"
      class="q-my-none"
      :class="screen.gt.xs ? 'text-left' : 'text-center'"
    >
      A fully featured ToDo app you'll fall in love with ❤️
    </h4>

    <div class="q-pa-md">
      <q-btn
        color="secondary"
        label="try it now"
        size="lg"
      />
    </div>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'

export default {
  // name: 'ComponentName',
  setup () {
    const $q = useQuasar()
    return {
      screen: $q.screen
    }
  }
}
</script>
