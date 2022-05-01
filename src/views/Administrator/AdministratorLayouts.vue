<template>
  <main id="Home-page">
    <div id="dashboard">
      <div class="container">
        <h3 class="jumbotron pt-4">{{ routeName }}</h3>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      routeName: null,
    };
  },
  created() {
    this.setRouteName();
  },
  methods: {
    setRouteName() {
      if (this.$route.name == "workspaceCreate") {
        this.routeName = "Workspace";
      } else if (this.$route.name == "accountCreate") {
        this.routeName = "Account Management";
      }
    },
  },
  watch: {
    $route(to, from) {
      // this.currentRoutePath = this.$router.currentRoute.path;
      this.setRouteName();
    },
  },
};
</script>

<style lang="scss">
#app {
  background: #f6f6f6;
  min-height: 100%;

  .container {
    .jumbotron {
      font-weight: $font-bold;
    }
  }
}
</style>