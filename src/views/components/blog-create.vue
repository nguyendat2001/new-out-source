<template>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-sm ">
   
        <div class="container-fluid py-4">
            <div class="row ">
                <div class="col-12 col-xl-12 mt-3" >
                <div class="card h-100 pb-5">
                    <div class="card-header pb-0 p-3">
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-center">
                        <h5 class="mb-0">Nhập thông tin Blog</h5>
                        </div>
                        <!-- <div class="col-6 text-end">
                        <button
                            class="btn btn-outline-primary btn-sm mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-form-workday"
                        >
                            thêm mới
                        </button>
                        </div> -->
                    </div>
                    </div>
                    <div class="card-body row p-3 pb-0 d-flex justify-content-center">
                        <div class="col-6 ps-5">
                            <div class="col-2">
                                <p class="font-weight-bold mt-2">Name: </p> 
                            </div>
                            <div class="col-12 mb-3">
                                <input type="text"  class="form-control" style="width:100%" placeholder="Enter blog name">
                            </div>
                            <div class="col-2">
                                <p class="font-weight-bold mt-2">Type:</p> 
                            </div>
                            <div class="col-12 mb-3">
                                <input type="text"  class="form-control" style="width:100%"  placeholder="Enter blog type">
                            </div>
                            <div class="col-2">
                                <p class="font-weight-bold mt-2">Image:</p> 
                            </div>
                            <div class="col-12 mb-3">
                                <input type="text"  class="form-control" style="width:100%"  placeholder="Enter blog image">
                            </div>
                            
                            <div class="col-4">
                                <p class="font-weight-bold mt-2">short Description:</p> 
                            </div>
                            <div class="col-12 mb-3">
                                <textarea type="text" rows="6"  class="form-control" style="width:100%"  placeholder="Enter short description"> </textarea>
                            </div>


                        </div>
                        <div class="col-6 pe-5">
                            <div class="col-2 mt-2">
                                <p class="font-weight-bold mt-2">Content:</p> 
                            </div>
                            <div class="col-12 mt-2">
                                <Editor v-model="this.value" editorStyle="height: 560px" />
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            <div class="row mt-1">
                <div class="col-12 col-xl-12 mt-3" >
                <div class="card h-100 pb-2">
                    <div class="card-header pb-0 ">
                    <div class="row">
                        <div class="col-12 d-flex align-items-center justify-content-between">
                            <div class=""> 
                                <button type="button" class="btn btn-info ms-2">Secondary</button>
                                <button type="button" class="btn btn-light ms-2">Secondary</button>
                                <button type="button" class="btn btn-light ms-2">Secondary</button>
                            </div>
                            <div> 
                                <button type="button" class="btn btn-danger">Danger</button>
                            </div>
                        </div>
                        <!-- <div class="col-6 text-end">
                        <button
                            class="btn btn-outline-primary btn-sm mb-0"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-form-workday"
                        >
                            thêm mới
                        </button>
                        </div> -->
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <footer class="footer pt-3  ">
                <div class="container-fluid">
                    <div class="row align-items-center justify-content-lg-between">
                        <div class="col-lg-6 mb-lg-0 mb-4">
                            <div class="copyright text-center text-sm text-muted text-lg-start">
                                ©
                                2024, made with <i class="fa fa-heart"></i> by
                                <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a> for a better web.
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </main>
</template>

<script>
import Editor from 'primevue/editor';

export default {
  components: {
    Editor
  },
  data() {
    return {
      value:null,
    };
  },
  methods: {
    logData(){
      console.log(this.value);
    }
  },
  mounted() {

  }
};
</script>