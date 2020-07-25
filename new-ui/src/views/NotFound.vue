
<template>
  <div class="not-found">
    <h1>
      Why are you here? This page does not exits!
      <a href="/">go home</a>
    </h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  width: 100%;
  z-index: 1000000;
  background: linear-gradient(237.99deg, #22223a 0%, #34223a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e167ff;
  a {
    color: #fff;
  }
}
</style>