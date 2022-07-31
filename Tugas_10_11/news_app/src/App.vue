<template>
<MyHeader/><br/>
<MyNews/>
<MyFooter/>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyNews from './components/MyNews.vue'

export default {
  name: 'App',
  components: {
    MyFooter,
    MyHeader,
    MyNews
}
}
</script>

<style>

</style>
