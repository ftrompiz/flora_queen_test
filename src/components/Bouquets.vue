<template>
  <div class="catalogue-products">
      <Bouquet :key="bouquet.id"
               v-for="bouquet in bouquets"
               :bouquet="bouquet" />
  </div>
</template>

<script>
import Bouquet from './Bouquet'

export default {
  name: 'Bouquets',
  props: {
    bouquets: Array
  },
  components: {
    Bouquet
  }
}
</script>

<style scoped>



</style>