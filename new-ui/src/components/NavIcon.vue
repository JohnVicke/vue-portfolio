<template>
    <div :class="`icon-container ${active ? 'active' : ''}`" @click="goToPage">
        <p class="hidden-p">{{ $t(`nav.${hiddenText}`) }}</p>
        <p class="extended-p">{{ $t(`nav.${hiddenText}`) }}</p>
        <slot name="svg"></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NavIcon extends Vue {
    @Prop({ type: String, required: true })
    public readonly hiddenText: string;

    @Prop({ type: Boolean })
    public active: boolean;

    public mouseOver() {
        this.active = !this.active;
    }

    public goToPage() {
        if (this.hiddenText === 'home') {
            this.$router.push('/');
            return;
        }
        this.$router.push(`/${this.hiddenText}`);
    }
}
</script>

<style lang="scss" scoped>
.icon-container {
    position: relative;
    max-height: 80px;
    transition: all 0.2s cubic-bezier(0.35, 0.55, 0.78, 0.62),
        background-color 0s;
    width: 80px;
    text-align: center;
    z-index: 1000;
    cursor: pointer;
    padding: 0 !important;
    svg {
        opacity: 100%;
        transition: all 0.3s ease-in-out;
    }
    p {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
    }
    .hidden-p {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
        opacity: 0%;
        position: relative;
        transform: translateX(-100px);
        top: 40px;
        color: #e167ff;
        transition: all 0.3s ease-in-out;
    }
    .extended-p {
        display: none;
        transform: translateX(-100px);
        transition: transform 0.3s ease-in-out;
    }
}
.icon-container:hover {
    svg {
        opacity: 0%;
    }
    .hidden-p {
        transform: translateX(0);
        opacity: 100%;
        display: block;
    }
}
.icon-container.active {
    max-height: 100px;
    width: 200px;
    background-color: #e167ff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    .extended-p {
        display: block;
        opacity: 100%;
        margin-right: 20px;
        transform: translateX(0);
    }
    svg {
        margin-right: 20px;
    }
}

.icon-container.active:hover {
    svg {
        opacity: 100%;
    }
    .hidden-p {
        opacity: 0;
    }
}
</style>
