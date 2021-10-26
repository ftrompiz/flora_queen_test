<template>
  <section id="catalogue" class="catalogue mt-md-0 mt-sm-4">
    <Bouquets :bouquets="bouquets" />
  </section>
</template>
<script>
import Bouquets from '../components/Bouquets'

export default {
  name: 'Home',
  props: {

  },
  components: {
    Bouquets,
  },
  data() {
    return {
      bouquets: [
      ],
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
    async addBouquet(bouquet){
      const res = await fetch('api/bouquets',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(bouquet)
      })

      const data = await res.json()

      this.bouquets = [...this.bouquets, data];
    },
    async deleteBouquet(id) {
      if (confirm('Are you sure?')){
        const res = await fetch(`api/bouquets/${id}`,{
          method: 'DELETE',
        });

        res.status === 200 ?
            (this.bouquets = this.bouquets.filter((bouquet) =>
                bouquet.id !== id)) :
            alert('Error deleting bouquet');
      }
    },

    async fetchBouquets(){
      const res = await fetch("api/bouquets");

      const data = await  res.json();

      return data;
    },
    async fetchBouquet(id){
      const res = await fetch(`api/bouquets/${id}`);

      const data = await  res.json();

      return data;
    }
  },
  async created() {
    this.bouquets = await this.fetchBouquets()
    console.log(this.bouquets);
  }
}
</script>

<style>

</style>