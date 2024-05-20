const isLogin = true;

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == '/' && isLogin) {
      return navigateTo('/home')
    }
})