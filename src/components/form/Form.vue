<template>
  <section class="catalogue"
           id="catalogue">
    <h2>{{`${mode_form} Bouquet ${this.id}`}}</h2>
    <form @submit="onSubmit"
          class="flora-form">
      <input type="text"
             name="name"
             v-model="name"
             class="form-control"
             placeholder="Name" />
      <input
          type="number"
          name="price"
          v-model="price"
          class="form-control"
          placeholder="Price"
      />
      <button type="submit"
             value="Save Bouquet"
             class="btn btn-primary btn-photo-menu">Save Bouquet</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      id:     this.mode_form !== 'New' ? this.bouquet.id    : '',
      name:   this.mode_form !== 'New' ? this.bouquet.name  : '',
      price:  this.mode_form !== 'New' ? this.bouquet.price : '',
      image:  this.mode_form !== 'New' ? this.bouquet.image : ''
    }
  },
  props: {
    bouquet: Object,
    mode_form: {
      type: String,
      default: 'New'
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

    }
  },

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