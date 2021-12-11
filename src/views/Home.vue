<template>
  <div class="home">
    <BioInfo />
    <div class="projects">
      <h1 class="heading heading--stroke">
        CASE STUDIES
      </h1>
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
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <FineTutor />
      </div>
    </div>

    <div class="design-work">
      <h1 class="heading heading--stroke__design">
        UI Design
      </h1>

      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
      >
        <SireHealth />
      </div>
    </div>
  </div>

  <!-- <div class="bg"></div> -->
  <div id="footer" class="sns">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/wei-ko-li-a77707194/"
          ><img
            src="https://cdn-icons-png.flaticon.com/512/1384/1384030.png"
            alt=""
        /></a>
      </li>
      <li>
        <a href="https://github.com/weiaquarius"
          ><img
            src="https://cdn-icons.flaticon.com/png/512/4926/premium/4926625.png?token=exp=1639237058~hmac=047083a252b4cfcf201a584aac6b99cd"
            style="padding-top:8px;width: 40px;height: 40px;"
            alt=""
        /></a>
      </li>
      <li>
        <a href="mailto:weiaquarius17@gmail.com"
          ><img
            src="https://cdn-icons-png.flaticon.com/512/95/95645.png"
            style="padding-top:10px;width: 35px;height: 35px;"
            alt=""
        /></a>
      </li>
    </ul>
    <p>李唯閣 | WEI-KO LI | NYCU</p>
  </div>

  <back-to-top bottom="50px" right="50px">
    <button type="button" class="btn btn-info btn-to-top"><p>TOP</p></button>
  </back-to-top>
</template>
<script>
// @ is an alias to /src
import BioInfo from '@/components/Home/BioInfo.vue';
import Meeture from '@/components/Home/Meeture.vue';
import FineTutor from '@/components/Home/FineTutor.vue';
import Podcast from '@/components/Home/Podcast.vue';
import SireHealth from '@/components/Home/SireHealth.vue';

import BackToTop from 'vue-backtotop';

//Fade-In transition
import '../assets/script/AOS.js';

export default {
  name: 'Home',
  components: {
    BioInfo,
    Meeture,
    FineTutor,
    Podcast,
    SireHealth,
    BackToTop,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/index.scss';
.projects {
  padding: 10px 0;
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
h1 {
  margin: 0;
}
.heading {
  font-size: 5rem;
  letter-spacing: 6px;
  margin: 8% 0 5%;

  @media (max-width: 992px) {
    font-size: 4rem;
  }
  @media (max-width: 600px) {
    margin-top: 10%;
    font-size: 3.5rem;
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
