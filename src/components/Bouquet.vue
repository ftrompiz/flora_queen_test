<template>
  <article class="product product-vip js-product-card product-vip">
    <div class="product-a-favorite">
      <button type="button"
              data-save="Añadir a Favoritos"
              data-saved="Eliminar de Favoritos"
              class="favorite js-add-to-favorite"
              title="Añadir a Favoritos">
        <div class="heart"></div>
        <div class="ring"></div>
        <div class="circles"></div>
      </button>
    </div>
    <a class="product-card js-product-link position-relative">
      <figure class="product-card-image figure figure--placeholder ratio-square"
              style="background: rgb(240, 240, 240);">
        <picture>
          <img :src="bouquet.image"
               :data-id="bouquet.id"
               :alt="bouquet.name"
               title=""
               class="figure-image figure-image--breath js-lazy-image">
        </picture>
      </figure>
      <main class="product-card-body">
        <h3 class="product-card-title text-truncate">{{bouquet.name}}</h3>
        <div class="product-card-details d-flex">
          <span class="product-card-price h4 mb-0 d-flex">
            <span class="price">{{bouquet.price}}</span>
          </span>
          &nbsp;
          <router-link :to="`/bouquet/update/${bouquet.id}`">Edit bouquet</router-link>
        </div>
      </main>
    </a>
  </article>
</template>

<script>
export default {
  name: 'Bouquet',
  props: {
    bouquet: Object
  },
}
</script>

<style scoped>


</style>