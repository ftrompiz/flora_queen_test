<template>
  <div class="card">
    <div class="card-body">
      <h2 class="card-title">{{`${this.modeForm} Bouquet`}}</h2>
      <form >
        <div class="form-group">
          <input type="hidden"
                 name="id"
                 v-model="model.id"
                 class="form-control"
                 placeholder="id" />
        </div>
        <div class="form-group">
          <input type="text"
                 name="name"
                 v-model="model.name"
                 class="form-control"
                 placeholder="Name" />
        </div>
        <div class="form-group">
          <input type="text"
                 name="price"
                 v-model="model.price"
                 class="form-control"
                 placeholder="Price"
          />
        </div>
        <div class="container-fluid overflow-hidden nopadding">
          <div class="row">
            <div class="col-md-1">
              <button @click.prevent="this.$emit('form-edited',this.model)"
                      value="Save Bouquet"
                      class="btn btn-success">Save Bouquet</button>
            </div>
            <div class="col-md-1">
              <button @click.prevent="this.$emit('cancel-form-edition',this.model)"
                      value="Save Bouquet"
                      class="btn btn-danger">Cancel</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {
    model: {
      id: '',
      name: '',
      price: ''
    },
    modeForm: {
      type: String,
      default: 'New'
    },
  },
  data() {
    return {
      bouquet: {},
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
