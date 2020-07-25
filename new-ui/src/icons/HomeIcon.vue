<template>
  <nav-icon hiddenText="home" :active="isActive" :class="activeClass">
    <template v-slot:svg>
      <svg
        width="34"
        height="35"
        viewBox="0 0 34 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.17651 13V33H25.8236V23" stroke="#E167FF" stroke-width="3" />
        <path d="M2 20L17 3L32 20" stroke="#E167FF" stroke-width="3" />
      </svg>
    </template>
  </nav-icon>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import NavIcon from "@/components/NavIcon.vue";

@Component({ components: { NavIcon } })
export default class HomeIcon extends Vue {
  @Prop({ type: String })
  public activeRoute: string;

  public get isActive() {
    return this.activeRoute === "/";
  }

  public get activeClass() {
    return this.isActive ? "active-svg" : "";
  }
}
</script>

<style lang="scss" scoped>
.active-svg {
  svg {
    path {
      stroke: #1f1730;
    }
  }
}
</style>
