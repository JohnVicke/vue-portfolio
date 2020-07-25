<template>
  <div class="left-section-container">
    <div class="left-section">
      <h1>{{ header }}</h1>
      <slot name="content"></slot>
      <slot name="mtns" class="mountains"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class LeftSection extends Vue {
  @Prop({ type: String })
  public readonly header!: string;

  @Prop({ type: String })
  public readonly paragraph!: string;
}
</script>

<style lang="scss" scoped>
.left-section-container {
  height: 100%;
  margin-top: 50%;
}
.left-section {
  display: flex;
  flex-direction: column;
  width: 540px;
  margin-left: 220 + 80px;
  h1 {
    align-self: top;
    font-size: 3rem;
    color: #e167ff;
  }
  .letter {
    animation: none;
  }
  .letter:hover {
    animation: spring 1s infinite ease;
  }
  p {
    line-height: 20px;
    font-size: 1rem;
    color: #fff;
  }
}
</style>
