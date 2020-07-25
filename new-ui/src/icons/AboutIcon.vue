<template>
    <nav-icon hiddenText="about" :active="isActive" :class="activeClass">
        <template v-slot:svg>
            <svg
                width="30"
                height="32"
                viewBox="0 0 30 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M1 30H30" stroke="#E167FF" stroke-width="3" />
                <circle
                    cx="15.7108"
                    cy="8"
                    r="6.5"
                    stroke="#E167FF"
                    stroke-width="3"
                />
                <path
                    d="M21 12C23.5556 12.3167 28.5 14.5 28.5 28.5"
                    stroke="#E167FF"
                    stroke-width="3"
                />
                <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="-1"
                    y="15"
                    width="9"
                    height="17"
                >
                    <path
                        d="M1 17H0.5L1 16.5V17H2.5L7.5 20V31.5H1V17Z"
                        fill="#C4C4C4"
                    />
                    <path
                        d="M1 31.5H7.5V20L2.5 17H0.5L1 16.5V31.5Z"
                        stroke="black"
                    />
                </mask>
                <g mask="url(#mask0)">
                    <path
                        d="M10.5 11C7.94444 11.3167 2.5 15 2.5 29"
                        stroke="#E167FF"
                        stroke-width="3"
                    />
                </g>
            </svg>
        </template>
    </nav-icon>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import NavIcon from '@/components/NavIcon.vue';

@Component({ components: { NavIcon } })
export default class AboutIcon extends Vue {
    @Prop({ type: String })
    public activeRoute: string;
    public get isActive() {
        return this.activeRoute === '/about';
    }
    public get activeClass() {
        return this.isActive ? 'active-svg' : '';
    }
}
</script>

<style lang="scss" scoped>
.active-svg {
    svg {
        path,
        circle {
            stroke: #1f1730;
        }
    }
}
</style>
