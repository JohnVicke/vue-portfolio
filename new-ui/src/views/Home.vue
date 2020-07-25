<template>
  <div class="main-text">
    <h1>Viktor Malmedal</h1>
    <p>{{ $t('home.subheader') }}</p>
    <a class="btn btn-1" href="/contact">
      <svg>
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </svg>
      {{ $t('buttons.contactMe') }}
    </a>
    <div id="mountains">
      <svg
        :style="
                    windowWidth > 1470
                        ? 'width: 100%; height: 90%;'
                        : windowWidth > 960
                        ? 'width: 100%; height: auto;'
                        : windowWidth > 800
                        ? 'width: 200%; height: 100%;'
                        : windowWidth > 600
                        ? 'width: 300%: height: 100%; '
                        : 'width: 350%; height: 100%;'
                "
        viewBox="0 0 1440 874"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g style="mix-blend-mode:overlay">
          <path class="mtn-1" d="M203 408L726.945 1014.75H-320.945L203 408Z" fill="#C4C4C4" />
        </g>
        <g style="mix-blend-mode:overlay">
          <path class="mtn-2" d="M441.5 422L887.936 1136.75H-4.9361L441.5 422Z" fill="#C4C4C4" />
        </g>
        <g style="mix-blend-mode:overlay">
          <path class="mtn-3" d="M1071 0L1612.27 1003.5H529.734L1071 0Z" fill="#C4C4C4" />
        </g>
        <g style="mix-blend-mode:overlay">
          <path class="mtn-4" d="M313.5 335L622.238 1015.25H4.76193L313.5 335Z" fill="#C4C4C4" />
        </g>
        <g style="mix-blend-mode:overlay">
          <path class="mtn-5" d="M652.5 495L1145.7 1155H159.299L652.5 495Z" fill="#C4C4C4" />
        </g>
        <g style="mix-blend-mode:overlay">
          <path class="mtn-6" d="M1388.5 386L1982.16 1121.75H794.84L1388.5 386Z" fill="#C4C4C4" />
        </g>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
</script>
<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");
.btn {
  color: #e167ff;
  cursor: pointer;
  font-size: 16px;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;

  @media (min-width: 600px) {
    margin: 0 1em 2em;

    //     &:nth-of-type(even) {
    //       margin-right: 2.5em;
    //     }

    //     &:nth-of-type(5) {
    //       margin-right: 0;
    //     }
  }

  &:hover {
    text-decoration: none;
  }
}

/////////////////////////////////
//button one
///////////////////////////////
.btn-1 {
  margin: 0 auto;
  margin-top: 20px;
  z-index: 10000;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.1em;

  svg {
    height: 45px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  rect {
    fill: none;
    stroke: #e167ff;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
}

.btn-1:hover {
  background: rgba(white, 0);
  font-weight: 900;
  letter-spacing: 1px;

  rect {
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

#mountains {
  bottom: 0;
  svg {
    .mtn {
      transition: all 2s ease-in-out;
    }
    @for $i from 1 through 6 {
      .mtn-#{$i} {
        opacity: 40%;
        transition: opacity 0.5s ease-in-out, transform 0.2s ease-in-out;
        transform: translateY(0);
      }
    }
    @for $i from 1 through 6 {
      .mtn-#{$i} {
        $x-transform: random(5) + px;
        opacity: random(100) + 60%;
        transform: translateY($x-transform);
      }
    }
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
.main-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #fff;
  h1 {
    font-family: "Caveat", cursive;
    font-weight: 400;
    font-size: 7rem;
  }

  p {
    font-size: 14px;
    margin-left: 10px;
    letter-spacing: 0.45rem;
  }
  button {
    z-index: 2;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    border: 1px solid #e167ff;
    color: #e167ff;
    box-sizing: border-box;
    overflow: hidden;
    outline: none;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    margin-top: 25px;
    align-self: center;
    width: 140px;
    height: 40px;
  }
}
</style>
