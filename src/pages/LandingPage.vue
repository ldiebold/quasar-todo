<template>
  <q-page>
    <!-- Feature -->
    <div
      v-for="featureSection in features"
      :key="featureSection.id"
      style="min-height: 95vh"
      class="flex flex-center"
    >
      <Feature
        class="justify-center full-width"
        :feature-section="featureSection"
      />
    </div>

    <!-- Call To Action -->
    <div
      v-if="true"
    >
      <CallToAction />
    </div>

    <!-- Testimonials -->
    <div
      v-if="true"
      style="height: 95vh;"
      class="flex flex-center bg-grey-2"
    >
      <Testimonials />
    </div>

    <!-- Pricing Table -->
    <div
      v-if="true"
      style="height: 95vh;"
      class="flex flex-center"
    >
      <PricingTables />
    </div>

    <!-- Second Call To Action -->
    <div
      v-if="true"
    >
      <CallToAction />
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
  },

  setup () {
    const features = [
      {
        id: 1,
        reverse: false,
        title: "It's CRAZY Simple!",
        body: "This is a ToDo app you'll understand in seconds. The interface is intuitive, and you'll be organizing like a pro before you know it!",
        imgSrc: 'https://picsum.photos/800/600'
      },
      {
        id: 2,
        reverse: true,
        title: "It's CRAZY Simple!",
        body: "This is a ToDo app you'll understand in seconds. The interface is intuitive, and you'll be organizing like a pro before you know it!",
        imgSrc: 'https://picsum.photos/800/600'
      },
      {
        id: 3,
        reverse: false,
        title: "It's CRAZY Simple!",
        body: "This is a ToDo app you'll understand in seconds. The interface is intuitive, and you'll be organizing like a pro before you know it!",
        imgSrc: 'https://picsum.photos/800/600'
      }
    ]

    return {
      features
    }
  }
}
</script>
