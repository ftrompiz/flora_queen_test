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
      <a class="product-card js-product-link position-relative">
        <figure class="product-card-image figure figure--placeholder ratio-square"
                style="background: rgb(240, 240, 240);">
          <picture>
            <source :data-srcset="bouquet.image"
                    media="(max-width: 1023px)"
                    type="image/webp"
                    :srcset="bouquet.image">
            <img src="https://d1qc61kr0n3aml.cloudfront.net/assets/img/alpha_1px.png?v=2020041366"
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
            <div class="product-card-meta d-flex">
              <span class="product-card-rating star-rating d-flex flex-wrap align-items-center ml-sm">
                <span aria-label="Rated 4.5 stars out of five stars" role="img" class="star-rating-stars">
                  <span class="star-rating-current" style="width: 90%;"></span>
                </span>
                <span class="star-rating-info">Ver 310 opiniones </span>
              </span>
            </div>
          </div>
        </main>
      </a>
    </div>
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