<template>
  <FormBouquet @form-edited="updateSelectedBouquet"
              :mode_form="mode_form"
              :bouquet_id="bouquet_id"
  />
</template>
<script>
import FormBouquet from '../components/form/FormBouquet'

export default {
  name: 'Update',
  props: {

  },
  components: {
    FormBouquet
  },
  data() {
    return {
      mode_form: 'Update',
      bouquet_id: '',
    }
  },
  methods: {
    updateSelectedBouquet(bouquet){
      this.$emit('update-bouquet',bouquet);
    }
  },
  async created() {
    this.bouquet_id = this.$route.params.id
  }
}
</script>

<style>

</style>