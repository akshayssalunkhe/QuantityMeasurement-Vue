<template>
  <div id="app">
   <AppBar></AppBar>
   <MediaCard></MediaCard>
   <TextBox></TextBox>
  </div>
</template>

<script>
import AppBar from './components/AppBar.vue'
import MediaCard from './components/MediaCard.vue'
import TextBox from './components/TextBox.vue'

export default {
  name: 'App',
  components: {
    AppBar,MediaCard,TextBox,
  }
}
</script>

<style>
#app {
    background-color: #F5F6FA;
 }
</style>
