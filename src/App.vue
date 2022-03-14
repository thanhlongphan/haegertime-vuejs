<template>
<!--  <Header />-->
<!--  <Login />-->
  <Header />
  <router-view />
</template>

<script>

import Header from "@/components/Header";

export default {
  name: 'App',
  components : {Header}

}
</script>

<style>
#app {

}
body {
  margin : 0;;
  background: #eee;
}
</style>