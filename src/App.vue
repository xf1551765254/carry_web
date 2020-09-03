<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  mounted() {
    window.addEventListener('beforeunload', this.saveState);
    //console.log('12', this.$store.state)
  },
  methods: {
    saveState() {
      sessionStorage.setItem("pathName", window.location.href)//重点：暂存页面刷新的地址
      sessionStorage.setItem('state', JSON.stringify(this.$store.state.permission))

    }
  }
};
</script>
<style lang="scss">
</style>
