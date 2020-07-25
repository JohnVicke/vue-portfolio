<template>
  <div>
    <header v-if="windowWidth > 960" class="side-nav">
      <div class="side-center-nav-container">
        <div class="logo">
          <p>VM</p>
        </div>
        <div class="side-center-nav">
          <home-icon :activeRoute="onPage" />
          <about-icon :activeRoute="onPage" />
          <skills-icon :activeRoute="onPage" />
          <projects-icon :activeRoute="onPage" />
          <contact-icon :activeRoute="onPage" />
        </div>
        <div class="socials">
          <home-icon />
        </div>
      </div>
      <div class="side-center-nav-bg" />
    </header>
    <header v-else class="top-nav" :style="`width: ${windowWidth}`">
      <div class="top-center-nav">
        <home-icon />
        <about-icon />
        <skills-icon />
        <projects-icon />
        <contact-icon />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

import HomeIcon from "@/icons/HomeIcon.vue";
import AboutIcon from "@/icons/AboutIcon.vue";
import SkillsIcon from "@/icons/SkillsIcon.vue";
import ProjectsIcon from "@/icons/ProjectsIcon.vue";
import ContactIcon from "@/icons/ContactIcon.vue";

@Component({
  components: { HomeIcon, AboutIcon, SkillsIcon, ProjectsIcon, ContactIcon }
})
export default class Nav extends Vue {
  public onPage = (this.$router as any).history.current.path;

  @Watch("$route")
  onPageUpdate(to: any, from: any) {
    this.onPage = to.path;
  }
}
</script>

<style lang="scss">
.side-center-nav-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  .socials {
    margin-bottom: 40px;
  }
  .logo {
    width: 80px;
    color: #fff;
    text-align: center;
    margin-top: 40px;
    z-index: 1000;
  }
}
.side-center-nav-bg {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80px;
  background: #1f1730;
  height: 100%;
  z-index: 100;
}
.side-nav {
  position: absoulte;
  height: 100%;
  .side-center-nav {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    :not(:first-child) {
      margin: 20px 0;
    }
  }
}
.top-nav {
  position: absolute;
  width: 100vw;
  background: #1f1730;

  .top-center-nav {
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    * {
      margin: 0 20px;
    }
  }
}
</style>
