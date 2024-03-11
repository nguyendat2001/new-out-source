<template>
  <nav id="navbar-main" class="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light py-2">
    <div class="container">
      <a class="navbar-brand mr-lg-5">
        <img src="../assets/img/brand/white.png">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="navbar_global">
        <div class="navbar-collapse-header">
          <div class="row">
            <div class="col-6 collapse-brand">
              <a href="../../../index.html">
                <img src="../assets/img/brand/blue.png">
              </a>
            </div>
            <div class="col-6 collapse-close">
              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
          
        </ul>
        <ul class="navbar-nav align-items-lg-center ml-lg-auto">
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="" target="_blank" data-toggle="tooltip" title="Like us on Facebook">
              <i class="fa fa-facebook-square"></i>
              <span class="nav-link-inner--text d-lg-none">Facebook</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="" target="_blank" data-toggle="tooltip" title="Follow us on Instagram">
              <i class="fa fa-instagram"></i>
              <span class="nav-link-inner--text d-lg-none">Instagram</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="" target="_blank" data-toggle="tooltip" title="Follow us on Twitter">
              <i class="fa fa-twitter-square"></i>
              <span class="nav-link-inner--text d-lg-none">Twitter</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-link-icon" href="" target="_blank" data-toggle="tooltip" title="Star us on Github">
              <i class="fa fa-github"></i>
              <span class="nav-link-inner--text d-lg-none">Github</span>
            </a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
  <section class="section section-shaped section-lg">
    <div class="shape shape-style-1 bg-gradient-default">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="container pt-lg-7">
      <div class="row justify-content-center">
          <router-view v-slot="{ Component }">
            <transition name="fade" >
              <component :is="Component" ></component>
            </transition>
          </router-view>
      </div>
    </div>
  </section>
</template>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700';
@import 'https://use.fontawesome.com/releases/v5.0.6/css/all.css';
@import '@/assets/css/nucleo-icons.css';
@import '@/assets/css/nucleo-svg.css';
@import '@/assets/css/font-awesome.css';
@import '@/assets/css/nucleo-svg.css';
@import '@/assets/css/argon-design-system.css';
</style>