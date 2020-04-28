<template>
  <div>
    <v-app v-if="loading" style="height: 100vh;
    overflow: auto;">
      <div
        class="d-flex flex-column align-center"
        style=" position: absolute;
    top: 30%;
    z-index: 2;
    width:400px;
    margin-left:-200px;
    left:50%;"
      >
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
        <h1>Loading portfolio...</h1>
      </div>
    </v-app>
    <div v-if="!loading">
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
              <v-btn @click="$vuetify.goTo('#about', { offset: -100 })" text class="mr-2">About Me</v-btn>
              <v-btn @click="$vuetify.goTo('#skills', { offset: 100 })" text class="mr-2">Skills</v-btn>
              <v-btn text class="mr-2" @click="$vuetify.goTo('#projects', { offset: 0 })">Projects</v-btn>
              <v-btn text class="mr-2" @click="$vuetify.goTo('#contact', { offset: 100 })">Contact</v-btn>
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
            <About v-bind:profile="profile" />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <Projects v-bind:projects="loaded_projects" v-if="!isMobile" />
            <ProjectsMobile v-bind:projects="loaded_projects" v-if="isMobile" />
          </section>
          <section>
            <v-row>
              <v-col cols="12" align="center">
                <div id="future">
                  <h1
                    class="pb-6 pt-12"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >Future endevours</h1>
                  <v-card class="px-10 py-10">
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
                <v-icon size="24px" @click="icon.func">{{ icon.icon }}</v-icon>
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
              <v-icon size="24px" @click="icon.func">{{ icon.icon }}</v-icon>
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
    loading: true,

    loaded_projects: [
      {
        id: 0,
        web: null,
        mobile: null,
        name: "Eventwatch",
        desc_mobile:
          'Eventwatch is an application that allows the user to "subscribe" to music genres and/or artists.  The idea is to send updates for upcoming events that fits the users preferences.',
        desc:
          'Eventwatch is an application that allows the user to "subscribe" to music genres and/or artists. After signing up and customizing their "watch", the application will notify the user with ticketinformation via Email or Messenger for upcoming that fit their preferences.',
        tech: [
          { icon: "mdi-vuejs", desc: "VueJS" },
          { icon: "mdi-nodejs", desc: "ExpressJS" },
          { icon: "mdi-database", desc: "MongoDB" },
          { icon: "mdi-responsive", desc: "Responsive design" },
          { icon: "mdi-material-ui", desc: "Vuetify (Material UI)" },
          {
            icon: "mdi-adobe",
            desc: "Adobe Suite (XD, Illustrator)"
          }
        ]
      },
      {
        id: 1,
        web: null,
        mobile: null,
        name: "Teamfight tactics tracker",
        desc_mobile:
          "When Riot Games released the popular round-based strategy game Teamfight tactics, there was no real way to see your current stat. This project made it possible to compare yourself to your friends and foes.",
        desc:
          "When Riot Games released the popular round-based strategy game Teamfight tactics, there was no real way to see your current stats. To solve this problem i started to look into Riot Games devloper API and found somethings interesting. There is a way to find and calculate teamfight tactics stats!",
        tech: [
          { icon: "mdi-react", desc: "ReactJS" },
          { icon: "mdi-nodejs", desc: "ExpressJS" },
          { icon: "mdi-database", desc: "MySQL" },
          { icon: "mdi-responsive", desc: "Responsive design" },
          { icon: "mdi-sass", desc: "SASS" },
          {
            icon: "mdi-adobe",
            desc: "Adobe Suite (XD, Illustrator)"
          }
        ]
      },
      {
        id: 2,
        web: null,
        mobile: null,
        name: "Lifter leaderboard",
        desc_mobile:
          "The Wilks Coefficient or Wilks Formula is a coefficient that can be used to measure the strength of powerlifters. This website is an online gathering for lifters to compare their wilks-points.",
        desc:
          "The Wilks Coefficient or Wilks Formula is a coefficient that can be used to measure the strength of powerlifters. This application was created to build an online gathering for lifters to compare their wilks-points against each other.",
        tech: [
          { icon: "mdi-language-csharp", desc: ".NET Core MVC" },
          { icon: "mdi-database", desc: "Microsoft SQL Server" },
          { icon: "mdi-bootstrap", desc: "Bootstrap v.4" },
          { icon: "mdi-responsive", desc: "Responsive design" },
          {
            icon: "mdi-adobe",
            desc: "Adobe Suite (XD, Illustrator)"
          }
        ]
      },
      {
        id: 3,
        web: null,
        mobile: null,
        name: "Annonsdepån ( Ad-depot)",
        desc_mobile:
          "Annonsdepån (Ad-depot) is running two different backend-systems. One for subscribers and one for ads. Users that are subscribers and companies can upload ads. Its basically a small ebay clone. ",
        desc:
          "Annonsdepån (Ad-depot) is a fullstack project running two different backend systems. One for subscribers and one for ads. Users that are subscribers and companies can upload ads, everyone can view ads. Its basically a small ebay clone. ",
        tech: [
          { icon: "mdi-vuejs", desc: "VueJS" },
          { icon: "mdi-nodejs", desc: "ExpressJS" },
          { icon: "mdi-database", desc: "MongoDB" },
          { icon: "mdi-bootstrap", desc: "Vuetify" },
          { icon: "mdi-responsive", desc: "Responsive design" }
        ]
      }
    ],
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
    loadImages() {
      setTimeout(() => {
        this.loaded_projects[0].web = require("./assets/projects/ew_web.png");
        this.loaded_projects[1].web = require("./assets/projects/tft_web.png");
        this.loaded_projects[2].web = require("./assets/projects/wilks_web.png");
        this.loaded_projects[3].web = require("./assets/projects/depot.png");
        this.loaded_projects[0].mobile = require("./assets/projects/ew_mob.png");
        this.loaded_projects[1].mobile = require("./assets/projects/wtf_mobile.png");
        this.loaded_projects[2].mobile = require("./assets/projects/wilks_mob.png");
        this.loaded_projects[3].mobile = require("./assets/projects/depot_mobile.png");
        this.profile = require("./assets/profile.jpg");
        this.loading = false;
      }, 1000);
    },

    onResize() {
      this.isMobile = window.innerWidth < 1264;
    }
  },

  created() {
    this.loadImages();
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

.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #1a1a1a;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
