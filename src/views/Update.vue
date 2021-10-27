<template>
  <Form @form-edited="updateBouquet"
        :mode_form="mode_form"/>
</template>
<script>
import Form from '../components/form/Form'

export default {
  name: 'Update',
  props: {

  },
  components: {
    Form
  },
  data() {
    return {
      mode_form: 'Update',
    }
  },
  methods: {
    async updateBouquet(bouquet) {
      const bouquetToEdit = await this.fetchBouquet(bouquet.id);
      const updBouquet = {
        ...bouquetToEdit,
        text: bouquet.text,
        day: bouquet.day,
        reminder: bouquet.reminder,
      }

      const res = await fetch(`api/bouquets/${updBouquet.id}`,{
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updBouquet)
      });

      if (res.status === 200){
        this.bouquets = this.bouquets.map((bouquet) =>
            bouquet.id === updBouquet.id ?
                { ...bouquet,
                  text: updBouquet.text,
                  day: updBouquet.day,
                  reminder: updBouquet.reminder, } :
                bouquet)
      } else {
        alert('Error updating bouquet')
      }
    },
  },
  async created() {
    console.log(this.$route.query.test)
  }
}
</script>

<style>

</style>