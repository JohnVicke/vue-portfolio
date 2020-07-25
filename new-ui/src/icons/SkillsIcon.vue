<template>
    <nav-icon hiddenText="skills" :active="isActive" :class="activeClass">
        <template v-slot:svg>
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M28.5778 28.7233L23.217 26.1222L25.6803 23.9108L28.5778 28.7233Z"
                    fill="#E167FF"
                />
                <rect
                    width="3.2483"
                    height="31.4002"
                    transform="matrix(-0.744141 0.668022 -0.744141 -0.668022 25.7833 24.0448)"
                    fill="#E167FF"
                />
                <rect
                    width="3.2483"
                    height="25.0183"
                    transform="matrix(0.744141 0.668022 -0.744141 0.668022 18.6171 7.33202)"
                    fill="#E167FF"
                />
                <path
                    d="M24.1063 0.394067L28.9407 4.73394L27.7863 6.53156L25.7839 7.56786L20.9495 3.22799L22.0889 1.41698L24.1063 0.394067Z"
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
export default class SkillsIcon extends Vue {
    @Prop({ type: String })
    public activeRoute: string;
    public get isActive() {
        return this.activeRoute === '/skills';
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
        rect {
            fill: #1f1730;
        }
    }
}
</style>
