<template>
  <div class="row justify-center">
    <div class="col-12 flex flex-center">
      <div style="max-width: 600px;">
        <h3 class="q-my-none">
          Testimonials
        </h3>
        <div style="font-size: 1.45em;">
          You probably want a little more reassurance right? Fair enough! We copy pasted some of the love ❤️ we got from our friends!
        </div>
      </div>
    </div>

    <div
      class="row justify-center"
      style="max-width: 1100px;"
    >
      <div
        v-for="i in 3"
        :key="i"
        class="col-xs-12 col-sm-6 col-md-4 q-pa-md flex flex-center"
      >
        <TestimonialCard />
      </div>
    </div>
  </div>
</template>

<script>
import TestimonialCard from 'components/TestimonialCard.vue'

export default {
  components: {
    TestimonialCard
  }
}
</script>
