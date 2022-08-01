<template>
    <div class="col-lg-4 col-md-6 portfolio-item filter-card"  v-for="(item) in products.slice(0, 18)" :key="item.id">
            <div class="portfolio-wrap">
              <img v-bind:src="item.images" class="img-fluid " alt="">
              <div class="portfolio-links">
                <a v-bind:href="item.images" data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"><i class="bx bx-plus"></i></a>
                <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
              </div>
              
            </div>
            <p class="card-text">{{item.title}}<br/><b>$ {{item.price}}</b></p>
            <hr/>
          </div>
</template>
<script>
    export default {
        data() {
            return {
                products: []
            }
        },
        mounted() {
            fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(response => {
                this.products = response
            })
        }
    }
</script>