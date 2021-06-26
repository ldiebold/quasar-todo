<template>
  <div class="row justify-center">
    <div class="col-12 text-center q-pa-lg q-mb-md">
      <h3 class="q-my-none">
        Select A Plan That's Right For <strong class="text-primary">YOU</strong>
      </h3>
    </div>

    <div
      class="row justify-center full-width"
      style="max-width: 1200px;"
    >
      <div
        v-for="pricingPlan in pricingPlans"
        :key="pricingPlan.price"
        class="col-xs-12 col-sm-6 col-md-4 q-pa-md flex flex-center"
      >
        <PricingTableCard :pricing-plan="pricingPlan" />
      </div>
    </div>
  </div>
</template>

<script>
import PricingTableCard from 'components/PricingTableCard.vue'

export default {
  components: {
    PricingTableCard
  },

  setup () {
    const pricingPlans = [
      {
        name: 'Simple',
        subText: '"I only have a few things todo"',
        price: 'FREE',
        isPrimary: false,
        features: [
          'Unlimited Todos',
          'Syncs across all devices',
          'Share your lists (e.g shopping)',
          'Up to 3 lists'
        ]
      },
      {
        name: 'Simple',
        subText: '"I only have a few things todo"',
        price: '$4.00 / Month',
        isPrimary: true,
        features: [
          'Unlimited Todos',
          'Syncs across all devices',
          'Share your lists (e.g shopping)',
          'Up to 3 lists'
        ]
      },
      {
        name: 'Simple',
        subText: '"I only have a few things todo"',
        price: '$7.00 / Month',
        isPrimary: false,
        features: [
          'Unlimited Todos',
          'Syncs across all devices',
          'Share your lists (e.g shopping)',
          'Up to 3 lists'
        ]
      }
    ]

    return {
      pricingPlans
    }
  }
}
</script>
