<template>
  <q-card
    class="q-pa-lg full-width text-center column items-center"
    style="max-width: 350px;"
    :style="{
      borderBottom: `6px solid ${getPaletteColor('purple-4')}`
    }"
  >
    <q-img
      style="max-width: 180px; border-radius: 50%;"
      :src="imgSrc"
    />
    <div><strong>Mary Morson</strong></div>
    <div>
      "I'm super busy and don't have time to learn complex software. This app is exactly what I needed!"
    </div>
  </q-card>
</template>

<script>
import { colors } from 'quasar'
const { getPaletteColor } = colors

export default {
  // name: 'ComponentName',
  setup () {
    const imgSrc = require('assets/mary.jpeg')

    return {
      imgSrc,
      getPaletteColor
    }
  }
}
</script>
