<template>
  <q-page>
    <!-- Feature -->
    <div
      v-if="false"
      style="min-height: 95vh"
      class="flex flex-center"
    >
      <Feature
        class="justify-center full-width"
      />
    </div>

    <div
      v-if="false"
      style="min-height: 95vh"
      class="flex flex-center bg-grey-2"
    >
      <Feature
        class="justify-center full-width"
      />
    </div>

    <div
      v-if="false"
      style="min-height: 95vh"
      class="flex flex-center"
    >
      <Feature
        class="justify-center full-width"
      />
    </div>

    <!-- Call To Action -->
    <div v-if="true">
      <CallToAction />
    </div>
  </q-page>
</template>

<script>
import Feature from 'components/Feature.vue'
import CallToAction from 'components/CallToAction.vue'

export default {
  components: {
    Feature,
    CallToAction
  }
}
</script>
