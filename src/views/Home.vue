<template>
  <div>
    <router-link
        v-show="showOnlyInHome"
        to="/bouquets/new">New bouquet</router-link>
    <router-view ></router-view>
    <Bouquets :bouquets="bouquets" />
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
      toggle_add_form: false,
      toggle_update_form: false,
      update_mode_form: 'Update',
      new_mode_form: 'New'
    }
  },
  methods: {
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
    },
  },
  computed: {
    showOnlyInHome() {
      return this.$route.path === '/bouquets'
    }
  },
  async created() {
    this.bouquets = await this.fetchBouquets()
  }
}
</script>

<style>

</style>