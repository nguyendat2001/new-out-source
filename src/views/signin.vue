<template>
    <div class="col-lg-5">
      <div class="card bg-secondary shadow border-0">
        
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>sign in with credentials</small>
          </div>
          <form role="form">
            <div class="form-group mb-3">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                </div>
                <input class="form-control" placeholder="Email" type="email">
              </div>
            </div>
            <div class="form-group focused">
              <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                </div>
                <input class="form-control" placeholder="Password" type="password">
              </div>
            </div>
            <div class="custom-control custom-control-alternative custom-checkbox">
              <input class="custom-control-input" id=" customCheckLogin" type="checkbox">
              <label class="custom-control-label" for=" customCheckLogin"><span>Remember me</span></label>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-primary my-4">Sign in</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a class="text-light"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link to="/signup" class="text-light"><small>Create new account</small></router-link>
        </div>
      </div>
    </div>
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