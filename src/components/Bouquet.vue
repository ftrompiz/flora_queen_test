<template>
  <div class="col-md-4">
    <a class="product-card">
      <figure class="product-card-image">
        <picture>
          <img :src="bouquet.image"
               :data-id="bouquet.id"
               :alt="bouquet.name"
               title="">
        </picture>
      </figure>
      <main class="product-card-body">
        <h3 class="product-card-title text-truncate">{{bouquet.name}}</h3>
        <div class="product-card-details ">
          <span class="product-card-price">
            <span class="price">{{bouquet.price}}</span>
          </span>
        </div>
        <div class="container-fluid nopadding">
          <div class="row">
            <div class="col-2">
              <a href="#"
                 class="btn btn-sm btn-dark"
                 @click.prevent="$emit('edit-bouquet',bouquet.id)">Edit</a>
            </div>
            <div class="col-2">
              <a href="#"
                 class="btn btn-sm btn-danger"
                 @click.prevent="$emit('delete-bouquet',bouquet.id)">Delete</a>
            </div>
          </div>
        </div>
      </main>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Bouquet',
  props: {
    bouquet: Object,
  },

}
</script>

<style scoped>


</style>
