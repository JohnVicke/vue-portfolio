<template>
    <nav-icon hiddenText="contact" :active="isActive" :class="activeClass">
        <template v-slot:svg>
            <svg
                width="40"
                height="27"
                viewBox="0 0 40 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M38 10.7222V26H2V1H38"
                    stroke="#E167FF"
                    stroke-width="2"
                />
                <path
                    d="M5 4.7037L20.5 17.6667L36 4.7037"
                    stroke="#E167FF"
                    stroke-width="2"
                />
                <mask
                    id="mask0"
                    mask-type="alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="14"
                    width="40"
                    height="12"
                >
                    <path
                        class="path-fill"
                        d="M13 17.6667L11 14.8889L0 21.8333V25.0741H40V21.8333L31 14.8889L28 17.6667H13Z"
                        fill="#C4C4C4"
                    />
                </mask>
                <g mask="url(#mask0)">
                    <path
                        d="M36 21.3704L20.5 10.2593L5 21.3704"
                        stroke="#E167FF"
                        stroke-width="2"
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
export default class ContactIcon extends Vue {
    @Prop({ type: String })
    public activeRoute: string;

    public get isActive() {
        return this.activeRoute === '/contact';
    }
    public get activeClass() {
        return this.isActive ? 'active-svg' : '';
    }
}
</script>

<style lang="scss" scoped>
.active-svg {
    svg {
        path {
            stroke: #1f1730;
        }
        .path-fill {
            fill: #1f1730;
        }
    }
}
</style>
