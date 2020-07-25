<template>
  <div class="sections">
    <left-section :header="$t('about.header')">
      <template #content>
        <p class="content">
          {{ $t('about.content.part1') }}
          <a
            href="http://www.interaktion.nu/"
            target="_blank"
          >{{ $t('about.content.link')}}</a>
          <span>{{ $t('about.content.part2') }}</span>
        </p>
      </template>
      <template #mtns>
        <svg
          class="left-mtns"
          width="1440"
          height="355"
          viewBox="0 0 1440 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g style="mix-blend-mode:overlay">
            <path d="M969 61L1510.27 1150H427.734L969 61Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M1112.5 0L1605.7 868.5H619.299L1112.5 0Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M195.5 214L742.395 820.75H-351.395L195.5 214Z" fill="white" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M600 260L1119.62 974.75H80.3848L600 260Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M361.738 214L670.476 894.25H53L361.738 214Z" fill="#C4C4C4" />
          </g>
          <g style="mix-blend-mode:overlay">
            <path d="M1354.5 192L1948.16 927.75H760.84L1354.5 192Z" fill="#C4C4C4" />
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
export default class About extends Vue {}
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
      border-bottom: none;
      border-bottom: 1px solid #67fff6;
      transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s all;
      &:hover {
        border-bottom: 1px solid #67fff6;
      }
    }
  }
}
</style>
