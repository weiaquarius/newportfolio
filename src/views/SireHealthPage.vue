<template>
  <div class="pjt-top">
    <div class="pjt-title">
      <h1>SireHealth</h1>
      <h2>Medical Product Webpage</h2>
    </div>
    <div class="pjt-img">
      <img src="../assets/SireHealth/sirehomepage.png" alt="" />
    </div>
  </div>
  <div class="pjt-content">
    <div class="left-title">
      <h2>Project<br />Background</h2>
    </div>
    <div class="right-content">
      <p>
        I was recommended by my senior sister to be the UI designer in an
        enterprising medical company in Singapore.
      </p>
    </div>
    <div></div>
    <div
      class="card"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
    >
      <div class="card-style card-conclusion">
        <div class="card-content-left">
          <h2>ROLE</h2>
          <p>UI design (Feature ideation and webpage design)</p>
          <h2>Date</h2>
          <p>August 2020 - October 2020</p>
        </div>
        <div class="card-content-right">
          <h2>TOOLS</h2>
          <p>Figma</p>
          <h2>PRACTICES</h2>
          <p>Remote work | English written skills</p>
        </div>
      </div>
    </div>
  </div>

  <div class="pjt-desc" style="background:#f8efd4">
    <h1>Feedback</h1>
    <p>
      It was so great to work directly with the
      <span class="underline diffcolor__four">CEO and the engineers.</span
      ><br />
      Whenever I got the problems, I could discuss details with the groups. They
      would all share lots of feedback and eulogies with me, which stirred me up
      a lot.<br /><br />
      The first time for me to
      <span class="underline diffcolor__four"
        >design the whole website layouts</span
      ><br />
      and the
      <span class="underline"
        >design could be built up as real webpage and worked by the
        engineers!</span
      ><br />
      Definitely an unforgettable experience for me!
    </p>
  </div>

  <h1 style="margin-top:100px;">Prototype Images</h1>
  <div class="prototype-img">
    <div><img src="../assets/SireHealth/sire_img1.png" alt="" /></div>
    <div><img src="../assets/SireHealth/sire_img2.png" alt="" /></div>
    <div>
      <img src="../assets/SireHealth/sire_img3.png" alt="" />
    </div>
    <div>
      <img src="../assets/SireHealth/sire_img4.png" alt="" />
    </div>
  </div>
  <div class="button-bg">
    <div class="button-bg-image"></div>
    <next-button :project-num="num" :name="name"></next-button>
  </div>
  <back-to-top bottom="50px" right="50px">
    <button type="button" class="btn btn-info btn-to-top"><p>TOP</p></button>
  </back-to-top>
</template>

<script>
import NextButton from '../components/Shared/button.vue';
import '../assets/script/AOS.js';
import '../assets/script/underline.js';
import BackToTop from 'vue-backtotop';
export default {
  name: 'SireHealthPage',
  components: { 'next-button': NextButton, BackToTop },
  data() {
    return {
      name: 'PodcastProject',
      num: '2',
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped lang="scss">
@import '../assets/scss/project_content_style.scss';
@import '../assets/scss/project_card_style.scss';
@import '../assets/scss/index.scss';
.pjt-desc {
  margin-top: 0;
  p {
    line-height: 40px;
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
      line-height: 35px;
    }
  }
}
.underline {
  background-size: 100% 0.2em;
}
.card-conclusion {
  padding: 100px 200px;
  @media (max-width: 1200px) {
    padding: 250px 100px 200px;
  }
  @media (max-width: 500px) {
    padding: 220px 100px;
  }
}
.card-content-left {
  @media (max-width: 1200px) {
    top: 10%;
  }
}
.card-content-right {
  @media (max-width: 1200px) {
    top: 53%;
  }
  @media (max-width: 500px) {
    top: 55%;
  }
}
.prototype-img {
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
  grid-gap: 130px 100px;
  align-content: center;
  margin: 5% 10%;
  img {
    width: 100%;
  }
  @media (max-width: 500px) {
    grid-gap: 20px;
  }
}
</style>
