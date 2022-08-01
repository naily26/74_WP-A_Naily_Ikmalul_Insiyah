<template>
    <main id="main">
        <!-- ======= Services Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          <h2>Services</h2>
          <p>Berikut adalah beberapa pelayanan yang disediakan oleh outfit corner.</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div class="icon"><i class="bi bi-briefcase"></i></div>
            <h4 class="title"><a href="">Shopping</a></h4>
            <p class="description">the main services provided by the online websites are the shopping only. They provide the various option to shop online through which you can shop anything.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <div class="icon"><i class="bi bi-card-checklist"></i></div>
            <h4 class="title"><a href="">Discounts</a></h4>
            <p class="description">discounts are also offered by the many online companies. You can ge the huge discounts during the festive and wedding season through which you can save your money.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <div class="icon"><i class="bi bi-bar-chart"></i></div>
            <h4 class="title"><a href="">Payment mode</a></h4>
            <p class="description">payment mode is totally depending upon you whether you want to pay by the credit cards or to cash on delivery. You can choose any payment mode. You give the amount for the product when it is delivered at your home is the cash on delivery.</p>
          </div>
        </div>

      </div>
    </section><!-- End Services Section -->
           <section id="portfolio" class="portfolio section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Product</h2>
          <center><h4>List of Product</h4></center>
        </div>

      

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <CardProduct/>


          

        </div>

      </div>
    </section><!-- End Portfolio Section -->

    
    </main>
</template>
<script>
import CardProduct from '../components/CardProduct.vue'
export default {
  components: {
    CardProduct
}
}
</script>