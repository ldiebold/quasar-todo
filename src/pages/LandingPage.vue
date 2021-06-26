<template>
  <q-page>
    <!-- Feature -->
    <div
      v-if="true"
      style="min-height: 95vh"
      class="flex flex-center"
    >
      <Feature
        class="justify-center full-width"
      />
    </div>

    <div
      v-if="true"
      style="min-height: 95vh"
      class="flex flex-center bg-grey-2"
    >
      <Feature
        class="justify-center full-width"
      />
    </div>

    <div
      v-if="true"
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

    <!-- Testimonials -->
    <div v-if="true">
      <Testimonials />
    </div>

    <!-- Pricing Table -->
    <div v-if="true">
      <PricingTables />
    </div>
  </q-page>
</template>

<script>
import Feature from 'components/Feature.vue'
import CallToAction from 'components/CallToAction.vue'
import Testimonials from 'components/Testimonials.vue'
import PricingTables from 'components/PricingTables.vue'

export default {
  components: {
    Feature,
    CallToAction,
    Testimonials,
    PricingTables
  }
}
</script>
