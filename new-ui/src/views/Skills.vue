<template>
  <div class="sections">
    <left-section :header="$t('skills.header')">
      <template #content>
        <p class="content">
          <span>{{ $t('skills.content.part1') }}</span>
          <span>
            <a href="_blank">{{ $t('skills.content.linkedIn') }}</a>
          </span>
          <span>{{ $t('skills.content.part2') }}</span>

          <span>
            <a href="_blank">{{ $t('skills.content.contact') }}</a>
          </span>
          <span>{{ $t('skills.content.part3') }}</span>
        </p>
      </template>
      <template #mtns>
        <svg
          class="left-mtns"
          width="1440"
          height="508"
          viewBox="0 0 1440 508"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style="mix-blend-mode:overlay">
            <path d="M870 193L1411.27 1282H328.734L870 193Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M96.5 346L643.395 952.75H-450.395L96.5 346Z" fill="white" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M262.738 346L571.476 1026.25H-46L262.738 346Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M1407 0L2131.86 978.75H682.137L1407 0Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M630 256L1281.25 1085.5H-21.2511L630 256Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M433.5 423L926.701 1275.75H-59.7015L433.5 423Z" fill="#C4C4C4" />
          </g>
        </svg>
      </template>
    </left-section>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import LeftSection from "@/components/LeftSection.vue";

@Component({ components: { LeftSection } })
export default class Skills extends Vue {}
</script>
<style lang="scss" scoped>
.sections {
  display: flex;
  flex-direction: row;
  .content {
    white-space: pre-wrap;
    letter-spacing: 0.05em;
    a {
      color: #67fff6;
      text-decoration: none;
      border-bottom: 0 solid #67fff6;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s all;
      &:hover {
        border-bottom: 1px solid #67fff6;
      }
    }
  }
}
</style>
