<template>
  <div class="home">
    <BioInfo />

    <div class="caseProject pb-3">
      <h1 class="m-0 pt-20 heading heading--stroke px-6">UX PROJECTS</h1>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <PawPals />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <Meeture />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <Podcast />
      </div>
      <!-- <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <Travel />
      </div> -->
    </div>
    <!-- <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <FineTutor />
      </div> -->
  </div>

  <!-- <div class="design-work">
      <h1 class="heading heading--stroke__design">UI Design</h1>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <SireHealth />
      </div>
    </div> -->

  <div id="footer" class="sns mt-4">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/wei-ko-li-a77707194/">
          <n-icon color="#000" size="30">
            <linkedin-in></linkedin-in>
          </n-icon>
        </a>
      </li>
      <li>
        <a href="https://github.com/weikoli">
          <n-icon color="#000" size="35">
            <github></github>
          </n-icon>
        </a>
      </li>
      <li>
        <a href="mailto:vivian.wkl@utexas.edu">
          <n-icon color="#000" class="pt-0.5" size="35">
            <email-round></email-round>
          </n-icon>
        </a>
      </li>
    </ul>
    <p>李唯閣 | WEI-KO LI | UT Austin</p>
  </div>

  <!-- <back-to-top bottom="50px" right="50px">
    <button type="button" class="btn btn-info btn-to-top">
      <p>TOP</p>
    </button>
  </back-to-top> -->
</template>
<script setup>
// import '@/cursor.js';
import BioInfo from '@/components/Home/BioInfo.vue';
import Meeture from '@/components/Home/Meeture.vue';
import PawPals from '@/components/Home/PawPals.vue';
import FineTutor from '@/components/Home/FineTutor.vue';
import Podcast from '@/components/Home/Podcast.vue';
// import Travel from '@/components/Home/Travel.vue';
import SireHealth from '@/components/Home/SireHealth.vue';

import { NIcon } from 'naive-ui';

import { Github, LinkedinIn } from '@vicons/fa';
import { EmailRound } from '@vicons/material';
// import BackToTop from 'vue-backtotop';

import { onMounted } from 'vue';

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss">
#footer {
  overflow: hidden;
  width: 100%;
  z-index: 999;
  li {
    list-style: none;
    line-height: 1.6em;
  }
  // margin-top: 50px;
  img {
    padding-top: 7px;
    width: 36px;
    height: 36px;
  }
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
  }
  li {
    margin: 0 25px;
  }
  a {
    display: inline-block;
    width: 55px;
    height: 55px;
    color: #f1f1f1;
    font-weight: bold;
    text-decoration: none;
    transition: 0.5s;
    border-radius: 50%;
    line-height: 48px;
    // background-color: #7c7b7b;
    background-color: #e2e2e2;
    text-align: center;
    font-size: 19px;
  }
  a:hover {
    color: steelblue;

    background-color: #c3d2eccb;
  }
  a i {
    vertical-align: middle;
  }
}
.caseProject {
  background-color: #eaf9ff;
}

.design-work {
  padding: 10px;
  background-color: #fbffec;
}

.bg {
  background-color: #9e3f3254;
  padding: 0 280px;
  height: 200px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transform: translate(0%, 230%);
  @media (max-width: 992px) {
    height: 180px;
    padding: 0 200px;
    transform: translate(-50%, 200%);
  }
  @media (max-width: 600px) {
    height: 50px;
    padding: 0 25px;
    transform: translate(-50%, 150%);
  }
}
.heading {
  font-size: 4.5rem;
  letter-spacing: 6px;
  margin: 8% 0 5%;
  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
  @media (max-width: 600px) {
    margin-top: 10%;
    font-size: 2.5rem;
  }
}
.heading--stroke {
  -webkit-text-stroke-width: 3.5px;
  -moz-text-stroke-width: 3.5px;
  -webkit-text-stroke-color: #0e8dbb;
  -moz-text-stroke-color: #0e8dbb;
  color: rgb(210, 234, 241);
  &__design {
    -webkit-text-stroke-width: 3.5px;
    -moz-text-stroke-width: 3.5px;
    -webkit-text-stroke-color: #7a2c26;
    -moz-text-stroke-color: #7a2c26;
    color: transparent;
  }
}
</style>
