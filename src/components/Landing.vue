<template>
    <v-container id="landing">
        <div class="text-center" style="padding-top: 10%;">
            <div class="d-flex flex-md-row flex-column justify-center">
                <div id="name" class="pr-4">Viktor</div>
                <div id="name" class="sm-pl-4">Malmedal</div>
            </div>
            <div id="desc" class="display-1" style="margin-top: -2rem;">
                Enthusiastic software engineer from northern Sweden
            </div>
            <div class="mt-6">
                <v-btn
                    id="hoverbtn"
                    icon
                    v-for="icon in icons"
                    :key="icon.icon"
                    color="black"
                    class="mr-2 ml-2"
                >
                    <v-icon @click="icon.func" large>{{ icon.icon }}</v-icon>
                </v-btn>
                <div style="margin-top: 20%;" class="d-flex flex-column">
                    <div>
                        <v-icon
                            id="down"
                            @click="$vuetify.goTo('#about', { offset: -100 })"
                            color="black"
                            >mdi-arrow-down-drop-circle-outline</v-icon
                        >
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>

<script>
import Vue from 'vue';

import { KinesisContainer, KinesisElement } from 'vue-kinesis';
Vue.component('kinesis-container', KinesisContainer);
Vue.component('kinesis-element', KinesisElement);

export default {
    Components: {
        KinesisContainer,
        KinesisElement,
    },
    name: 'Landing',

    data: () => ({
        icons: [
            {
                icon: 'mdi-github',
                func: () => {
                    window.open('https://github.com/JohnVicke');
                },
            },
            {
                icon: 'mdi-file-document-outline',
                func: () => {
                    window.open('https://johnvicke.github.io/resume/');
                },
            },
            {
                icon: 'mdi-linkedin',
                func: () => {
                    window.open('https://www.linkedin.com/in/viktor-malmedal/');
                },
            },
        ],
    }),
};
</script>

<style>
@media only screen and (max-width: 900px) {
    #name {
        font-size: 5rem !important;
    }

    #name:last-child {
        margin-top: -3rem;
    }

    #desc {
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 1.2rem !important;
    }
}
@font-face {
    font-family: Half;
    src: url('../assets/Half.otf') format('opentype');
}

#down {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    border-radius: 1rem;
    animation: pulse 2s infinite ease-in-out;
}
#down::before {
    background-color: none !important;
}
#down::after {
    background-color: none !important;
}

#name {
    color: #1a1a1a;
    font-family: Half;
    font-size: 7.05rem;
}

#hoverbtn:hover {
    transform: rotateY(360deg);
    background-color: none !important;
}

#hoverbtn {
    transition: ease-in-out 0.3s;
}

#hoverbtn::before {
    color: transparent;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
        transform: scale(1.1);
        box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
}
</style>
