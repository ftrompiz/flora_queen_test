<template>
  <Form @form-edited="addBouquet"
        :mode_form="mode_form"/>
</template>
<script>
import Form from '../components/form/Form'

export default {
  name: 'New',
  props: {

  },
  components: {
    Form
  },
  data() {
    return {
      mode_form: 'New',
    }
  },
  methods: {
    async addBouquet(bouquet){

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bouquet)
      };

      await fetch('api/bouquets',requestOptions)
      .then(async response => {
        const data = await response.json();
        console.log(data);
        this.toggle_add_form = false;
      })
      .catch(error => {
        alert('Error saving the bouquet');
        console.log('There was an error!', error);
      });
    },
  },
  async created() {
  }
}
</script>

<style>

</style>