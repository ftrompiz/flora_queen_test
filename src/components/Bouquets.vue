<template>
  <div>
    <div class="loading" v-show="this.loading">
      <div class="loader"></div>
    </div>
    <div class="row">
        <div class="col-12">
          <a class="btn btn-lg btn-primary"
             href="#"
             @click.prevent="showForm(this.modeFormNew)">New bouquet</a>
        </div>
    </div>
    <br>
    <div class="row" v-show="this.displayForm">
      <div class="col-12">
        <FormBouquet
            :modeForm="this.modeForm"
            :model="this.bouquetEdit"
            @form-edited="formBouquetEdited"
            @cancel-form-edition="closeForm"
        />
      </div>
    </div>
    <br>
    <div class="container catalogue-products">
      <div class="row">
        <Bouquet :key="bouquet.id"
                 v-for="bouquet in bouquets"
                 :bouquet="bouquet"
                 @edit-bouquet="this.showForm(this.modeFormUpdate, bouquet)"
                 @delete-bouquet="this.deleteBouquet(bouquet.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Bouquet from './Bouquet'
import Api from "../api"
import FormBouquet from '../components/form/FormBouquet'

export default {
  name: 'Bouquets',
  components: {
    Bouquet,
    FormBouquet
  },
  data() {
    return {
      bouquets: [],
      bouquetEdit: {},
      displayForm: false,
      modeForm: '',
      modeFormNew: 'New',
      modeFormUpdate: 'Update',
      loading: false
    }
  },
  methods: {
    formBouquetEdited(bouquet){
      if (this.modeForm === this.modeFormNew){
        this.addBouquet(bouquet)
      } else if (this.modeForm === this.modeFormUpdate){
        this.updateBouquet(bouquet)
      }
    },
    async addBouquet(bouquet){
      await Api.createBouquet(bouquet)
      await this.refreshListBouquet()
      this.displayForm = false
    },
    async deleteBouquet(id) {
      if (confirm('Are you sure?')){
        await Api.deleteBouquet(id)
        await this.refreshListBouquet()
      }
    },
    async updateBouquet(bouquet) {
      const bouquetToEdit = await Api.getBouquet(bouquet.id)
      const updBouquet = {
        ...bouquetToEdit,
        name: bouquet.name,
        price: bouquet.price,
      }
      await Api.updateBouquet(bouquet.id, updBouquet)
      await this.refreshListBouquet();
      this.displayForm = false
    },
    async refreshListBouquet(){
      this.loading = true;
      this.bouquets = await Api.getBouquets()
      this.loading = false;
    },
    setFormForUpdate(bouquet){
      this.bouquetEdit = bouquet
    },
    showForm (mode, bouquet){
      this.resetForm()
      this.displayForm = true
      this.modeForm = mode
      if (mode === this.modeFormUpdate){
        this.bouquetEdit = Object.assign({}, bouquet)
      }
    },
    closeForm(){
      this.resetForm()
      this.displayForm = false
      this.modeForm = ''
    },
    resetForm(){
      this.bouquetEdit = {}
    }
  },
  async created() {
    await this.refreshListBouquet()
  }
}
</script>

<style scoped>



</style>
