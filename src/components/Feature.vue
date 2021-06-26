<template>
  <div
    class="row"
    :class="[featureSection.reverse ? 'reverse' : '']"
  >
    <div class="col-xs-12 col-md-6 col-lg-4 flex flex-center">
      <div
        class="q-pa-md"
        style="max-width: 800px;"
        :class="[featureSection.reverse ? 'text-right' : '']"
      >
        <h3 class="q-my-none">
          {{ featureSection.title }}
        </h3>
        <div>
          {{ featureSection.body }}
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-md-6 col-lg-5">
      <div class="q-pa-md full-width flex flex-center">
        <q-img
          style="max-width: 800px;"
          :src="featureSection.imgSrc"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    featureSection: {
      required: true,
      type: Object
    }
  }
}
</script>
