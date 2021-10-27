<template>
  <div>
    <h2>{{`${mode_form} Bouquet ${this.id}`}}</h2>
    <form @submit="onSubmit"
          class="flora-form">
      <input type="hidden"
             name="id"
             v-model="id"
             class="form-control"
             placeholder="id" />
      <input type="text"
             name="name"
             v-model="name"
             class="form-control"
             placeholder="Name" />
      <input type="text"
            name="price"
            v-model="price"
            class="form-control"
            placeholder="Price"
      />
      <button type="submit"
              value="Save Bouquet"
              class="btn btn-primary btn-photo-menu">Save Bouquet</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: {

    bouquet_id: String,
    mode_form: {
      type: String,
      default: 'New'
    }
  },
  data() {
    return {
      id:     '',
      name:   '',
      price:  '',
      image:  '',
      bouquet: {},
    }
  },
  methods: {
    onSubmit(e){
      e.preventDefault();

      const bouquet_info = {
        id:     this.id,
        name:   this.name,
        price:  this.price,
        image:  this.image
      }

      this.$emit('form-edited',bouquet_info)
    },
    async fetchBouquet(id){
      const res = await fetch(`/api/bouquets/${id}`);
      const data = await res.json();

      console.log(data);

      this.id   =   data.id
      this.name =   data.name
      this.price =  data.price
      this.image =  data.image

      return data;
    },
  },
  async created() {
    if (this.mode_form !== 'New') {
      this.bouquet = await this.fetchBouquet(this.bouquet_id)
    }

  }
}
</script>

<style scoped>
.flora-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
</style>