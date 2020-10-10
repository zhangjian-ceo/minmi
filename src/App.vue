<template>
  <div id="app">
    <router-view />
    <tabble v-show="$route.meta.isShowTabbar"></tabble>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  /*height: 100Vh;*/
  margin-bottom: 0.5rem;
}
</style>
<script>
import Tabble from "./components/tabble/Tabble";
export default {
  components: { Tabble }
};
</script>
