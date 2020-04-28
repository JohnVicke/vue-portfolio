<template>
  <div>
    <v-app style="overflow-x:hidden;">
      <transition name="fade">
        <v-app-bar :inverted-scroll="detectMob" :elevate-on-scroll="detectMob" app dark>
          <v-btn
            text
            @click="
                            $vuetify.goTo('#landing', { offset: 0 });
                            drawer = false;
                        "
          >
            <v-icon class="mr-2">mdi-home</v-icon>Viktor Malmedal
          </v-btn>

          <v-spacer></v-spacer>
          <div class="hidden-md-and-down">
            <v-btn text class="mr-2">About Me</v-btn>
            <v-btn text class="mr-2">Skills</v-btn>
            <v-btn text class="mr-2">Contact</v-btn>
          </div>
          <div class="hidden-lg-and-up">
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          </div>
        </v-app-bar>
      </transition>
      <v-content>
        <v-navigation-drawer
          v-model="drawer"
          fixed
          style="margin-top: 3.5rem;"
          height="200"
          temporary
          right
        >
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item
                @click="
                                    $vuetify.goTo('#about', { offset: -100 });
                                    drawer = false;
                                "
              >
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-title>About me</v-list-item-title>
              </v-list-item>

              <v-list-item
                @click="
                                    $vuetify.goTo('#skills', { offset: 100 });
                                    drawer = false;
                                "
              >
                <v-list-item-icon>
                  <v-icon>mdi-account-cowboy-hat</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Skills</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="
                                    $vuetify.goTo('#projects', { offset: 0 });
                                    drawer = false;
                                "
              >
                <v-list-item-icon>
                  <v-icon>mdi-text-box-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Projects</v-list-item-title>
              </v-list-item>
              <v-list-item
                @click="
                                    $vuetify.goTo('#contact', { offset: 100 });
                                    drawer = false;
                                "
              >
                <v-list-item-icon>
                  <v-icon>mdi-at</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Contact</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
        <section style="height: 100vh;
    overflow: auto;">
          <Landing />
        </section>
        <section style="height: 100vh;
    overflow: auto;" id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects v-if="!isMobile" />
          <ProjectsMobile v-if="isMobile" />
        </section>
        <section>
          <v-row>
            <v-col cols="12" align="center">
              <div id="future">
                <h1 class="pb-6 pt-12" data-aos="fade-up" data-aos-duration="1000">Future endevours</h1>
                <v-card class="px-lg-12 py-lg-12 py-md-down-6 px-md-down-2">
                  <ul data-aos="fade-left" data-aos-duration="600">
                    <li class="pb-6">
                      <v-icon class="pr-2 pb-2" color="black">mdi-router-network</v-icon>Scalable distributed systems
                      (infrastructure, networks,
                      microservices)
                    </li>
                    <li class="pb-6 pb-2">
                      <v-icon color="black" class="pr-2">mdi-graph</v-icon>Data science (Analytics, ML)
                    </li>
                    <li class="pb-6 pb-2">
                      <v-icon color="black" class="pr-2">mdi-shield-lock</v-icon>Security
                    </li>
                    <li class="pb-6 pb-2">
                      <v-icon color="black" class="pr-2">mdi-radio-tower</v-icon>Embedded Systems (Internet of
                      things)
                    </li>
                    <li class="pb-6 pb-2">
                      <v-icon color="black" class="pr-2">mdi-animation-play</v-icon>Fancy frontend animations
                    </li>
                    <li class="pb-6">
                      <v-icon color="black" class="pr-2">mdi-coffee</v-icon>Limit myself to 2 coffees a day
                    </li>
                  </ul>
                </v-card>
              </div>
            </v-col>
          </v-row>
        </section>

        <section style="height: 90vh;
    overflow: auto;">
          <Contact />
        </section>
      </v-content>
      <v-footer dark padless relative v-if="!isMobile">
        <v-row class="m-4" align="center" justify="center" no gutters>
          <v-col
            align="start"
            style="padding-left: 10%;"
          >{{ new Date().getFullYear() }} — Viktor Malmedal</v-col>
          <v-col align="start">
            <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4 white--text" icon>
              <v-icon size="24px" @click="icon.func">
                {{
                icon.icon
                }}
              </v-icon>
            </v-btn>
          </v-col>
          <v-col align="end">
            <v-btn class="mx-4 white--text" icon>
              <v-icon
                size="24px"
                @click="
                                    $vuetify.goTo('#landing', { offset: 0 })
                                "
              >mdi-arrow-up</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-footer>
      <v-footer dark padless relative v-if="isMobile">
        <v-row align="start" justify="space-around" class="pt-2 pb-4">
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px" @click="icon.func">
              {{
              icon.icon
              }}
            </v-icon>
          </v-btn>
        </v-row>

        <p class="d-flex flex-row mx-auto align-center justify-center">
          <v-icon>mdi-copyright</v-icon>
          {{ new Date().getFullYear() }} — Viktor Malmedal
          <v-btn class="mx-6white--text" icon>
            <v-icon @click="$vuetify.goTo('#landing', { offset: 0 })">mdi-arrow-up</v-icon>
          </v-btn>
        </p>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import ProjectsMobile from "./components/ProjectsMobile";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default {
  name: "App",

  components: {
    Landing,
    Projects,
    About,
    Contact,
    Skills,
    ProjectsMobile
  },

  data: () => ({
    isMobile: false,
    drawer: false,
    icons: [
      {
        icon: "mdi-github",
        func: () => {
          window.open("https://github.com/JohnVicke");
        }
      },
      {
        icon: "mdi-linkedin",
        func: () => {
          window.open("https://www.linkedin.com/in/viktor-malmedal/");
        }
      },
      {
        icon: "mdi-instagram",
        func: () => {
          window.open("https://www.instagram.com/viktormalmedal/");
        }
      },
      {
        icon: "mdi-code-braces",
        func: () => {
          window.open("https://open.kattis.com/users/viktor-malmedal");
        }
      }
    ]
  }),

  computed: {
    detectMob() {
      if (typeof window.orientation !== "undefined") {
        return false;
      } else return true;
    },
    detectWeb() {
      if (window.innerWidth < 1000) {
        return false;
      }
      return true;
    }
  },

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
      this.isMobile = window.innerWidth < 1264;
    }
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
