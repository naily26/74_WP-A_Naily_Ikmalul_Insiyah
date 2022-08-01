<template>
 <header id="header">
  <div></div>
    <div class="d-flex flex-column">
      <div class="profile">
        <img src="https://i.pinimg.com/originals/f9/1a/a3/f91aa37eae15b0b16e6f0a5fb40f7732.jpg" alt="" class="img-fluid rounded-circle">
        <h1 class="text-light"><a href="index.html">Outfit Corner</a></h1>
        <div class="social-links mt-3 text-center">
          <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
          <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
          <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
          <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" class="nav-menu navbar">
        <ul>
          <li><router-link to="/" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></router-link></li>
          <li><router-link to="/visimisi" class="nav-link scrollto active"><i class="bx bx-user"></i> <span>Visi Misi</span></router-link></li>
          <li><router-link to="/productnservices" class="nav-link scrollto active"><i class="bx bx-file-blank"></i> <span>Product & Services</span></router-link></li>
          <li><router-link to="/ourwork" class="nav-link scrollto active"><i class="bx bx-book-content"></i> <span>Our Works</span></router-link></li>
          <li><router-link to="/testimoni" class="nav-link scrollto active"><i class="bx bx-server"></i> <span>Testimoni</span></router-link></li>
          <li><router-link to="/contact" class="nav-link scrollto active"><i class="bx bx-envelope"></i> <span>Contact Us</span></router-link></li>
        </ul>
      </nav><!-- .nav-menu -->
      
    </div>
  </header>

</template>

