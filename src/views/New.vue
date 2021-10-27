<template>
  <FormBouquet @form-edited="addNewBouquet"
        :mode_form="mode_form"/>
</template>
<script>
import FormBouquet from '../components/form/FormBouquet'

export default {
  name: 'New',
  props: {

  },
  components: {
    FormBouquet
  },
  data() {
    return {
      mode_form: 'New',

    }
  },
  methods: {
    addNewBouquet(bouquet){
      this.$emit('add-bouquet',bouquet);
    }
  },
  async created() {
  }
}
</script>

<style>

</style>