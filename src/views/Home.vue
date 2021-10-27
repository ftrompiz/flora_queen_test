<template>
  <div>
    <router-link
        to="/bouquets/new">New bouquet</router-link>
    <router-view @add-bouquet="addBouquet"
                 @update-bouquet="updateBouquet" ></router-view>
    <Bouquets @delete-bouquet="deleteBouquet"
              :bouquets="bouquets" />
  </div>
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
      bouquets: [],
      new_mode_form: 'New'
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

      await fetch('/api/bouquets',requestOptions)
          .then(async response => {
            const data = await response.json();
            this.bouquets = [...this.bouquets, data];
            await this.$router.push({name: 'Home'})
          })
          .catch(error => {
            alert('Error saving the bouquet');
            console.log(error);
          });
    },
    async deleteBouquet(id) {
      if (confirm('Are you sure?')){

        const requestOptions = {
          method: 'DELETE',
        };

        await fetch(`/api/bouquets/${id}`,requestOptions)
            .then(async response => {
              const data = await response.json();
              console.log(data);
              this.bouquets = this.bouquets.filter((bouquet) =>
                  bouquet.id !== id)
            })
            .catch(error => {
              alert('Error deleting bouquet');
              console.log(error);
            });
      }
    },

    async updateBouquet(bouquet) {
      const bouquetToEdit = await this.fetchBouquet(bouquet.id);
      const updBouquet = {
        ...bouquetToEdit,
        name: bouquet.name,
        price: bouquet.price,
      }

      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updBouquet)
      };

      await fetch(`/api/bouquets/${bouquet.id}`,requestOptions)
          .then(async response => {
            const data = await response.json();
            console.log(data);
            this.bouquets = this.bouquets.map((bouquet) =>
                bouquet.id === updBouquet.id ?
                    { ...bouquet,
                      name: updBouquet.name,
                      price: updBouquet.price, } :
                    bouquet)
          })
          .catch(error => {
            alert('Error deleting bouquet');
            console.log(error);
          });

    },
    async fetchBouquet(id){
      const res = await fetch(`/api/bouquets/${id}`);
      const data = await res.json();
      return data;
    },

    async fetchBouquets(){
      const res = await fetch("/api/bouquets");

      const data = await  res.json();

      return data;
    },


  },
  async created() {
    this.bouquets = await this.fetchBouquets()
  }
}
</script>

<style>

</style>