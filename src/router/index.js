import { createWebHistory, createRouter } from "vue-router";

const routes = [
    
    {
        path: "/",
        component: () => import("@/views/auth.vue"),
        children: [
            {
                path: "/signin",
                name: "signin",
                component: () => import("@/views/signin.vue"),
            },
            {
                path: "/signup",
                name: "signup",
                component: () => import("@/views/signup.vue"),
            },
        ],
    },

    {
        path: "/admin",
        component: () => import("@/views/home.vue"),
        children: [
            {
                path: "/admin/general",
                name: "admin.general",
                component: () => import("@/views/components/dashboard.vue"),
            },
            {
                path: "/admin/blog/save",
                name: "admin.blog.save",
                component: () => import("@/views/components/blog-create.vue"),
            },
            // {
            //     path: "/admin/product/:id",
            //     name: "admin.product.edit",
            //     component: () => import("@/views/Admin/components/editProduct.vue"),
            //     props: true
            // },
        ],
    },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
//   router.beforeEach((to, from, next) => {
//       const userStore = userAccStore();
//       let value = localStorage.user;
//       if (!userStore.user && to.name != "login" && to.name != "register") {
//         next({
//           path: "/login",
//           replace: true,
//         });
//       }
//       next();
//   });

export default router;