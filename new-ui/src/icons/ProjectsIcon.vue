<template>
    <nav-icon hiddenText="projects" :active="isActive" :class="activeClass">
        <template v-slot:svg>
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="1"
                    y="1"
                    width="12.1176"
                    height="11.7143"
                    stroke="#E167FF"
                    stroke-width="2"
                />
                <rect
                    x="15.8823"
                    width="14.1176"
                    height="13.7143"
                    fill="#E167FF"
                />
                <rect
                    x="16.8823"
                    y="17.2857"
                    width="12.1176"
                    height="11.7143"
                    stroke="#E167FF"
                    stroke-width="2"
                />
                <rect
                    y="16.2857"
                    width="14.1176"
                    height="13.7143"
                    fill="#E167FF"
                />
            </svg>
        </template>
    </nav-icon>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import NavIcon from '@/components/NavIcon.vue';

@Component({ components: { NavIcon } })
export default class ProjectsIcon extends Vue {
    @Prop({ type: String })
    public activeRoute: string;

    public get isActive() {
        return this.activeRoute === '/projects';
    }
    public get activeClass() {
        return this.isActive ? 'active-svg' : '';
    }
}
</script>

<style lang="scss" scoped>
.active-svg {
    svg {
        :nth-child(odd) {
            stroke: #1f1730;
        }
        :nth-child(even) {
            fill: #1f1730;
        }
    }
}
</style>
