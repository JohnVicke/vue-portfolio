<template>
  <div id="app" class="app">
    <Nav id="nav" />
    <router-view id="view" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";

@Component({ components: { Nav } })
export default class App extends Vue {
  mounted() {
    this.$i18n.locale = "en";
  }
}
</script>

<style lang="scss">
@import "./scss/index.scss";
@import "./scss/mtns.scss";
#app {
  display: flex;
}

#nav {
  position: absolute;
}
</style>
