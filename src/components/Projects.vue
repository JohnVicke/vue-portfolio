<template>
  <div>
    <v-container style="padding-top: 5%;">
      <h1
        id="projectheader"
        class="pb-6 text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >Projects</h1>
      <v-row class="pt-8">
        <v-col cols="6" v-for="project in projects" :key="project.name">
          <v-hover v-slot:default="{ hover }">
            <v-img :src="project.web" width="1000" :class="'mx-auto'">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                  style="height: 100%; background-color:#1a1a1a;  position: absolute;"
                >
                  <v-row justify="center">
                    <v-col cols="7" style=" opacity: 100%!important;" class="pl-12 pt-12">
                      <h1>{{ project.name }}</h1>
                      <p>{{ project.desc }}</p>
                      <v-tooltip bottom v-for="tech in project.tech" :key="tech.icon">
                        <template v-slot:activator="{ on }">
                          <v-icon color="#fff" class="pl-2 pr-2" v-on="on">{{ tech.icon }}</v-icon>
                        </template>
                        <span>{{ tech.desc }}</span>
                      </v-tooltip>
                    </v-col>
                    <v-col cols="5" class="pt-12">
                      <img
                        @load="onImageLoad"
                        v-if="!isMobile"
                        :src="project.mobile"
                        style="display: inline-block; width: 200px;"
                      />
                    </v-col>
                  </v-row>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// TODO: Fixa så att alla projekt hamnar i en 2x2 grid --> fixa ett till projekt att ha med
// TODO: Fixa så att navbaren fungerar med knapparna samt footern
// TODO: Fixa så att about me sektionen blir lite snyggare
// TODO: Get in touch på contact ska göra email formulär
// TODO: Porta allting till mobilt

export default {
  Components: {},
  props: {
    projects: null
  },
  name: "HelloWorld",
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, {
        passive: true
      });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 1900;
    },

    onImageLoad() {
      this.loaded = true;
    }
  },

  data: () => ({
    loaded: false,
    icons: ["mdi-github", "mdi-file-document-outline", "mdi-linkedin"],
    isMobile: false
  })
};
</script>

<style>
@font-face {
  font-family: Half;
  src: url("../assets/Half.otf") format("opentype");
}

#landing {
  height: 80%;
}

#name {
  color: #1a1a1a;
  font-family: Half;
  font-size: 7.05rem;
}
</style>
