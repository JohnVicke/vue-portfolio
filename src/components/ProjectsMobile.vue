<template>
  <div>
    <v-container style="padding-top: 5%;">
      <h1 id="projectheader" class="pb-6 text-center">Projects</h1>
      <div v-for="project in projects" :key="project.name" class="pb-6">
        <v-hover v-slot:default="{ hover }">
          <v-img :src="project.web" width="100%" :class="'mx-auto'">
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                style="height: 100%; background-color:#1a1a1a; opacity:96%;  position: absolute;"
              >
                <div justify="center" align="center" class="p-2">
                  <div style=" opacity: 100%!important;">
                    <h3 class="py-2">{{ project.name }}</h3>
                    <p class="px-1">{{ project.desc_mobile }}</p>
                    <v-tooltip bottom v-for="tech in project.tech" :key="tech.icon">
                      <template v-slot:activator="{ on }">
                        <v-icon color="#fff" class="px-2" v-on="on">{{ tech.icon }}</v-icon>
                      </template>
                      <span>{{ tech.desc }}</span>
                    </v-tooltip>
                  </div>
                </div>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  Components: {},
  name: "Projectsmobile",

  props: { projects: null },

  data: () => ({
    icons: ["mdi-github", "mdi-file-document-outline", "mdi-linkedin"]
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
