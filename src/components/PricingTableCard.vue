<template>
  <q-card
    class="full-width text-center column items-center"
    style="max-width: 350px;"
  >
    <q-card-section
      class="full-width"
      :class="[
        pricingPlan.isPrimary ? 'bg-secondary text-white' : 'bg-grey-1'
      ]"
    >
      <div><strong>{{ pricingPlan.name }}</strong></div>
      <div>{{ pricingPlan.subText }}</div>
    </q-card-section>

    <q-separator class="full-width" />

    <q-card-section>
      <h4 class="q-my-none">
        {{ pricingPlan.price }}
      </h4>

      <div
        v-for="feature in pricingPlan.features"
        :key="feature"
        class="q-my-md"
      >
        {{ feature }}
      </div>

      <q-btn
        class="q-mt-sm q-mb-md"
        label="select"
        color="primary"
      />
    </q-card-section>
  </q-card>
</template>

<script>

export default {
  props: {
    pricingPlan: {
      required: true,
      type: Object
    }
  }
}
</script>
