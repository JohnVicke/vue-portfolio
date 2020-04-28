<template>
    <div>
        <v-container style="padding-top: 5%;">
            <h1
                id="projectheader"
                class="pb-6 text-center"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                Projects
            </h1>
            <v-row class="pt-8">
                <v-col cols="6" v-for="project in projects" :key="project.name">
                    <v-hover v-slot:default="{ hover }">
                        <v-img
                            :src="project.web"
                            width="1000"
                            :class="'mx-auto'"
                        >
                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal white--text"
                                    style="height: 100%; background-color:#1a1a1a;  position: absolute;"
                                >
                                    <v-row justify="center">
                                        <v-col
                                            cols="7"
                                            style=" opacity: 100%!important;"
                                            class="pl-12 pt-12"
                                        >
                                            <h1>{{ project.name }}</h1>
                                            <p>{{ project.desc }}</p>
                                            <v-tooltip
                                                bottom
                                                v-for="tech in project.tech"
                                                :key="tech.icon"
                                            >
                                                <template
                                                    v-slot:activator="{ on }"
                                                >
                                                    <v-icon
                                                        color="#fff"
                                                        class="pl-2 pr-2"
                                                        v-on="on"
                                                        >{{ tech.icon }}</v-icon
                                                    >
                                                </template>
                                                <span>{{ tech.desc }}</span>
                                            </v-tooltip>
                                        </v-col>
                                        <v-col cols="5" class="pt-12">
                                            <v-img
                                                v-if="!isMobile"
                                                :src="project.mobile"
                                                style="display: inline-block; width: 200px;"
                                            ></v-img>
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
import Vue from 'vue';

// TODO: Fixa så att alla projekt hamnar i en 2x2 grid --> fixa ett till projekt att ha med
// TODO: Fixa så att navbaren fungerar med knapparna samt footern
// TODO: Fixa så att about me sektionen blir lite snyggare
// TODO: Get in touch på contact ska göra email formulär
// TODO: Porta allting till mobilt

import { KinesisContainer, KinesisElement } from 'vue-kinesis';
Vue.component('kinesis-container', KinesisContainer);
Vue.component('kinesis-element', KinesisElement);
const darkStyle = ' border-radius: 2rem; padding: 1rem;';
const lightStyle = 'background-color: #fff; color: #1a1a1a; padding: 1rem;';

export default {
    Components: {
        KinesisContainer,
        KinesisElement,
    },
    name: 'HelloWorld',
    beforeDestroy() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.onResize, {
                passive: true,
            });
        }
    },

    mounted() {
        this.onResize();
        window.addEventListener('resize', this.onResize, { passive: true });
    },

    methods: {
        onResize() {
            this.isMobile = window.innerWidth < 1900;
        },
    },

    data: () => ({
        icons: ['mdi-github', 'mdi-file-document-outline', 'mdi-linkedin'],
        isMobile: false,

        projects: [
            {
                id: 0,
                style: darkStyle,
                web: require('@/assets/projects/ew_web.png'),
                mobile: require('@/assets/projects/ew_mob.png'),
                name: 'Eventwatch',
                desc:
                    'Eventwatch is an application that allows the user to "subscribe" to music genres and/or artists. After signing up and customizing their "watch", the application will notify the user with ticketinformation via Email or Messenger for upcoming that fit their preferences.',
                tech: [
                    { icon: 'mdi-vuejs', desc: 'VueJS' },
                    { icon: 'mdi-nodejs', desc: 'ExpressJS' },
                    { icon: 'mdi-database', desc: 'MongoDB' },
                    { icon: 'mdi-responsive', desc: 'Responsive design' },
                    { icon: 'mdi-material-ui', desc: 'Vuetify (Material UI)' },
                    {
                        icon: 'mdi-adobe',
                        desc: 'Adobe Suite (XD, Illustrator)',
                    },
                ],
            },
            {
                id: 1,
                style: lightStyle,
                web: require('@/assets/projects/tft_web.png'),
                mobile: require('@/assets/projects/wtf_mobile.png'),
                name: 'Teamfight tactics tracker',
                desc:
                    'When Riot Games released the popular round-based strategy game Teamfight tactics, there was no real way to see your current stats. To solve this problem i started to look into Riot Games devloper API and found somethings interesting. There is a way to find and calculate teamfight tactics stats!',
                tech: [
                    { icon: 'mdi-react', desc: 'ReactJS' },
                    { icon: 'mdi-nodejs', desc: 'ExpressJS' },
                    { icon: 'mdi-database', desc: 'MySQL' },
                    { icon: 'mdi-responsive', desc: 'Responsive design' },
                    { icon: 'mdi-sass', desc: 'SASS' },
                    {
                        icon: 'mdi-adobe',
                        desc: 'Adobe Suite (XD, Illustrator)',
                    },
                ],
            },
            {
                id: 2,
                style: darkStyle,
                web: require('@/assets/projects/wilks_web.png'),
                mobile: require('@/assets/projects/wilks_mob.png'),
                name: 'Lifter leaderboard',
                desc:
                    'The Wilks Coefficient or Wilks Formula is a coefficient that can be used to measure the strength of powerlifters. This application was created to build an online gathering for lifters to compare their wilks-points against each other.',
                tech: [
                    { icon: 'mdi-language-csharp', desc: '.NET Core MVC' },
                    { icon: 'mdi-database', desc: 'Microsoft SQL Server' },
                    { icon: 'mdi-bootstrap', desc: 'Bootstrap v.4' },
                    { icon: 'mdi-responsive', desc: 'Responsive design' },
                    {
                        icon: 'mdi-adobe',
                        desc: 'Adobe Suite (XD, Illustrator)',
                    },
                ],
            },
            {
                id: 3,
                web: require('@/assets/projects/ad_depot.png'),
                mobile: require('@/assets/projects/ads_mobile.png'),
                name: 'Annonsdepån ( Ad-depot)',
                desc:
                    'Annonsdepån (Ad-depot) is a fullstack project running two different backend systems. One for subscribers and one for ads. Users that are subscribers and companies can upload ads, everyone can view ads. Its basically a small ebay clone. ',
                tech: [
                    { icon: 'mdi-vuejs', desc: 'VueJS' },
                    { icon: 'mdi-nodejs', desc: 'ExpressJS' },
                    { icon: 'mdi-database', desc: 'MongoDB' },
                    { icon: 'mdi-bootstrap', desc: 'Vuetify' },
                    { icon: 'mdi-responsive', desc: 'Responsive design' },
                ],
            },
        ],
    }),
};
</script>

<style>
@font-face {
    font-family: Half;
    src: url('../assets/Half.otf') format('opentype');
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
