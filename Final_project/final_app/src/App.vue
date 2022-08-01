<template>
<MyNavbar/>
    <MyHeaderVue/>
  <br/>
  <router-view/>
  <MyFooter/>
</template>

<style>

</style>
<script>
import MyHeaderVue from './components/MyHeader.vue'
import MyNavbar from './components/MyNavbar.vue'
import MyFooter from './components/MyFooter.vue'
export default {
  name: 'App',
  components: {
    MyHeaderVue,
    MyNavbar,
    MyFooter
}
}
</script>
