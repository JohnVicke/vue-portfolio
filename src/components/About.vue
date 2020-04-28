<template>
  <v-container fill-height>
    <div class="d-flex flex-row mx-auto" id="info">
      <v-img :src="profile" height="300" width="100" style="border: 4px solid #1a1a1a;"></v-img>
      <div class="f-flex flex-column pl-4">
        <h1>Hi, I'm Viktor.</h1>
        <p>
          I am a versatile software engineer with an attention to
          flexability, speed and quality, who loves to articulate the
          "why" and the "how" behind innovative UX design strategy and
          coding processes. Currently studying to get a MSc in
          <a
            href="https://www.umu.se/utbildning/program/civilingenjorsprogrammet-i-interaktion-och-design/"
            target="_blank"
          >
            <b>Interaction Technology and Design</b>
          </a>
          and a bachelors degree in Computer Science at Umeå
          University
        </p>
      </div>
    </div>
  </v-container>
</template>

<script>
import Vue from "vue";

import { KinesisContainer, KinesisElement } from "vue-kinesis";
Vue.component("kinesis-container", KinesisContainer);
Vue.component("kinesis-element", KinesisElement);

export default {
  Components: {
    KinesisContainer,
    KinesisElement
  },
  name: "About",

  data: () => ({
    profile: require("@/assets/profile.jpg"),
    skills: {
      web: [
        { icon: "mdi-react", desc: "ReactJS" },
        { icon: "mdi-vuejs", desc: "VueJS" },
        { icon: "mdi-nodejs", desc: "ExpressJS (Node)" },
        { icon: "mdi-language-csharp", desc: ".NET Core" }
      ],
      design: [
        { icon: "mdi-language-html5", desc: "HTML5" },
        { icon: "mdi-language-css3", desc: "CSS3" },
        { icon: "mdi-bootstrap", desc: "Boostrap" },
        { icon: "mdi-material-ui", desc: "MaterialUI" },
        { icon: "mdi-adobe", desc: "Adobe Suite" }
      ],

      databases: [
        { icon: "mdi-database", desc: "SQL (MySQL)" },
        { icon: "mdi-database", desc: "NoSQL (MongoDB)" }
      ],

      code: [
        { icon: "mdi-language-java", desc: "Java" },
        { icon: "mdi-language-python", desc: "Python3" },
        { icon: "mdi-language-c", desc: "C99" }
      ]
    }
  })
};
</script>

<style>
#info {
  width: 30%;
}
#info h1 {
  margin-top: -1.5rem !important;
  font-size: 4rem;
}

@media only screen and (max-width: 1800px) {
  #info {
    width: 70%;
  }
}
@media only screen and (max-width: 740px) {
  #info {
    width: 100%;
  }
  #info h1 {
    font-size: 2rem;
    padding-top: 1rem;
  }
  #info p {
    font-size: 1rem !important;
  }
}

#info p {
  font-size: 1.2rem;
}

#info b {
  color: #1a1a1a;
}
#info a {
  transition: ease-in 0.2s;
  color: #1a1a1a;
}
#info a:hover {
}
#info:visited {
  color: none;
}
</style>
