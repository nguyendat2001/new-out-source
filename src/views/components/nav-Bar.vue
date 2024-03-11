<template>
    <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
        <div class="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a></li>
              <li class="breadcrumb-item text-sm text-dark active" aria-current="page">{{this.$route.name}}</li>
            </ol>
            <h6 class="font-weight-bolder mb-0">{{this.$route.name}}</h6>
          </nav>
          <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
              <!-- <div class="input-group">
                <span class="input-group-text text-body"><i class="	fa fa-search" style="color:black;" aria-hidden="true"></i></span>
                <input type="text" class="form-control" placeholder="Type here...">
              </div> -->
            </div>
            <ul class="navbar-nav  justify-content-end">
              <li class="nav-item d-flex align-items-center">
                <!-- <a class="btn btn-outline-primary btn-sm mb-0 me-3" target="_blank" href="">Online Builder</a> -->
              </li>
              <li class="nav-item d-flex align-items-center">
                <a href="javascript:;" class="nav-link text-body font-weight-bold px-0" @click="this.signout()">
                  <i class="fa fa-user me-sm-1"></i>
                  <span class="d-sm-inline d-none">đăng xuất</span>
                </a>
              </li>
              <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                <i class="fa fa-gear fa-spin" style="font-size:24px"></i>
                <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                  <div class="sidenav-toggler-inner">
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                    <i class="sidenav-toggler-line"></i>
                  </div>
                </a>
              </li>
              <li class="nav-item px-3 d-flex align-items-center" >
                <a href="javascript:;" class="nav-link text-body p-0" >
                  <!-- <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i> -->
                    <i class="	fa fa-cog fa-spin nc-spin cursor-pointer fa-spin fixed-plugin-button-nav cursor-pointer" style="font-size:20px;"></i>
                    
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
</template>
<script>
// import AuthService from "@/services/auth.service";
import {useUserStore} from "@/stores/user";
export default {
    components: {
      // AuthService,
      // useUserStore
    },
    data() {
        const userStore = useUserStore();
        return {
          user:{},
          result: {},
          message: "",
          userStore,
        };
    },
    
    watch: {
    },
    computed: {

    },
    methods: {
      async signout(){
        try{
          // this.result = await this.userStore.signout();
          this.$router.push({
              name: "admin.signin",
            });
          
        }catch(err){
          console.log(err);
        }
      }
    },
    mounted() {
        
      },
};
</script>

