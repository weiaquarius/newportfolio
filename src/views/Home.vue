<template>
  <div class="home">
    <BioInfo />
    <div class="projects">
      <h1 class="heading heading--stroke">
        CASE STUDIES
      </h1>
      <Podcast />
      <FineTutor />
    </div>

    <div class="design-work">
      <h1 class="heading heading--stroke__design">
        DESIGN WORKS
      </h1>
      <SireHealth />
    </div>
  </div>

  <div class="bg"></div>
  <div id="footer" class="sns">
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/wei-ko-li-a77707194/"
          ><i class="fab fa-linkedin-in fa-lg"></i
        ></a>
      </li>
      <li>
        <a href="https://github.com/weiaquarius"
          ><i class="fab fa-github fa-lg"></i
        ></a>
      </li>
      <li>
        <a href="mailto:weiaquarius17@gmail.com"
          ><i class="fas fa-envelope fa-lg"></i
        ></a>
      </li>
    </ul>
    <p>李唯閣 | WEI-KO LI | NTHU EE</p>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import BioInfo from '@/components/Home/BioInfo.vue';
import FineTutor from '@/components/Home/FineTutor.vue';
import Podcast from '@/components/Home/Podcast.vue';
import SireHealth from '@/components/Home/SireHealth.vue';

export default {
  name: 'Home',
  components: {
    BioInfo,
    FineTutor,
    Podcast,
    SireHealth,
  },
};
</script>

<style scoped lang="scss">
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
  // -webkit-text-stroke-color: #0d1b1e;
  // -moz-text-stroke-color: #0d1b1e;
  // color: transparent;
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
