<template>
  <div class="pjt-top">
    <div class="pjt-title">
      <h1>Meeture</h1>
      <h2>Elderly social activity platform</h2>
    </div>
    <div class="meeture-image">
      <img src="../assets/Meeture/Product.png" alt="" />
    </div>
  </div>
  <div class="pjt-content" style="margin-bottom: 5% !important">
    <div class="left-title">
      <h2>Overview</h2>
    </div>
    <div class="content">
      <p>
        Meeture is a social activity platform that helps the elderly get
        activity information, find interesting events to join, and meet new
        friends which enhances the social networking between elderly people and
        constructs activities memories at the same time.
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
          <p>Team Leader</p>
          <p>Quantiative study - Online survey</p>
          <p>Quanlitative study - Semi-structured interviews</p>
          <p>User Interface design</p>
          <p>Web development</p>
          <h2>Date</h2>
          <p>February 2021 - Present</p>
          <h2>TEAMMATES</h2>
          <p>Wei-Ko Li, Carol Huang, Daniel Chang</p>
        </div>
        <div class="card-content-right">
          <h2>METHODS & TOOLS</h2>
          <p>Surveys, User Interview, HMW&PoV</p>
          <p>Usability testing, Heuristics Evaluation</p>
          <p>Miro, Figma, Vue</p>
          <h2>PRACTICES</h2>
          <p>User Research, Separation of front-end and back-end</p>
          <p>Reframing research questions and design process</p>

          <h2>CODING LANGUAGE & ENVIORNMENT</h2>
          <p>Vue.js, Django | Heroku</p>
        </div>
      </div>
    </div>
  </div>
  <div
    class="pjt-desc"
    data-aos="fade-up"
    data-aos-duration="700"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center"
  >
    <h1>Problem</h1>
    <p>
      <span class="underline diffcolor__one">Elderly people</span> are losing
      ways to retrieve activity information. The burgeoning electronic
      transmitted formats are
      <span class="underline diffcolor__one"
        >ruling out traditional methods</span
      >, such as using flyers to publicize events or pasting posters on the
      bulletin boards. Since the elderly
      <span class="underline diffcolor__one"
        >are not familiar with smartphones and computers</span
      >, they do not know how to use them to find out activities.<br />
      Also, after retiring, they
      <span class="underline diffcolor__one"
        >lose social connections with their friends</span
      >
      and
      <span class="underline diffcolor__one"
        >lack opportunities to meet new friends.</span
      >
      <br /><br />
      Therefore, we wanted to design activity platforms to help them firstly
      build up relationships with old friends and also make new friends, and
      secondly, we hoped to bridge the gap between elderly people and digital
      devices by creating aging-friendly website.
    </p>
  </div>
  <div class="method-reason">
    <h3>Competitor Analysis</h3>
    <img src="@/assets/Meeture/MeetureCompetitor.png" alt="" />
  </div>

  <div class="method-reason">
    <h3>Interview</h3>
    <h1>
      We interviewed
      <span class="underline">8</span> older adults to understand their
    </h1>
    <h3>(1) Technology usage (Pros & Cons, Challenges...)</h3>
    <h3>
      (2) Feelings and concerns when joining activities & Activities types
    </h3>
    <h3>(3) Current lives</h3>
  </div>
  <div class="interview-img">
    <img src="../../src/assets/Meeture/interview.png" alt="" />
    <img src="../../src/assets/Meeture/interview1.jpg" alt="" />
    <img src="../../src/assets/Meeture/interview2.jpg" alt="" />
  </div>
  <div class="pjt-desc" style="background: white">
    <h1 class="card-h1">Research Findings</h1>
    <div class="findings-card-layout">
      <div class="card" style="margin: 30px">
        <div class="card-style-two">
          <h2>
            <span style="background: yellow; padding: 5px 3px"
              >Living attitude of the elderly</span
            ><br />
            The elderly live regular lives, are afraid of
            <span class="underline">making changes</span>, and are
            <span class="underline">vigilant to information sources.</span>
          </h2>
        </div>
      </div>
      <div class="card" style="margin: 30px">
        <div class="card-style-two">
          <h2>
            <span style="background: yellow; padding: 5px 3px"
              >Expand social network</span
            ><br />
            The elderly want to
            <span class="underline">join activities with their friends</span>,
            and are
            <span class="underline"
              >STILL willing to make new friends with similar interests and
              hobbies.</span
            >
          </h2>
        </div>
      </div>
      <div class="card" style="margin: 30px">
        <div class="card-style-two">
          <h2>
            <span style="background: yellow; padding: 5px 3px"
              >Provide feedback to make contribution</span
            ><br />

            The elderly want to
            <span class="underline"
              >report problems in the environment to make influence to the
              society</span
            >
            but they don’t know how to do.
          </h2>
        </div>
      </div>
    </div>
  </div>
  <div class="white-blank"></div>
  <div class="method-reason">
    <h3>UIs design</h3>
    <h1>Following our research findings, we designed three features</h1>
    <br /><br />
    <h1>
      <span class="underline diffcolor"
        >1. Joining Meeture LINE official account (finding 1)</span
      >

      <p>
        ● The elderly can use their familiar platform, LINE, to start their
        journey.
      </p>
      <p>● Family members or friends could introduce Meeture to them.</p>
    </h1>
  </div>

  <p class="author">(Page designed by Wei-Ko Li.)</p>
  <div class="prototype-image">
    <img src="../../src/assets/Meeture/family_recommend.png" alt="" />
  </div>

  <div class="method-reason">
    <h1>
      <span class="underline diffcolor"
        >2. Sharing events information with their friends (finding 2)</span
      >
      <p></p>
      <p>
        If the elderly find interested activity on Meeture, they can click the
        sharing button on the right buttom to share this activity information
        with their friends via LINE.
      </p>
    </h1>
  </div>

  <p class="author">(Page designed by Wei-Ko Li.)</p>
  <div class="prototype-image">
    <img src="../../src/assets/Meeture/friend_sharing.png" alt="" />
  </div>

  <div class="method-reason">
    <h1>
      <span class="underline diffcolor"
        >3. Writing comments to share opinion with the public (finding 3)</span
      >
      <p>
        ● The elderly can review past events, activity photos with their friends
        to retrospect memories.
      </p>
      <p>● The elderly can write comments to share opinion with the public.</p>
    </h1>
  </div>

  <p class="author">(Page designed by Wei-Ko Li.)</p>
  <div class="prototype-image" style="margin-bottom: 90px">
    <img src="../../src/assets/Meeture/Comment.png" alt="" />
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
// import BackToTop from 'vue-backtotop';

export default {
  name: 'PodcastPage',
  components: {
    'next-button': NextButton,
    // BackToTop,
  },
  data() {
    return {
      name: 'PodcastProject',
      num: '3',
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
//fontstyle

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap');
.meeture-image {
  display: flex;
  display: -webkit-inline-box;
  // flex-direction: row;
  width: 50%;
  position: absolute;
  right: 8%;
  top: 13%;
  z-index: -1;
  img {
    width: 60%;
    margin: 0 20px;
  }
  @media (max-width: 1024px) {
    width: 56%;
    top: 14%;
    img {
      width: 75%;
    }
  }
  @media (max-width: 900px) {
    width: 60%;
    right: 0;
    top: 16%;
    align-items: center;
  }
  @media (max-width: 600px) {
    img {
      display: none;
    }
  }
}
.pjt-desc {
  margin: 0;
  @media (max-width: 1024px) {
    margin-bottom: 150px;
  }
  @media (max-width: 862px) {
    // padding: 130px 0;
    margin-bottom: 100px;
  }
}

.white-blank {
  @media (max-width: 900px) {
    margin: 200px 0;
  }
  @media (max-width: 800px) {
    margin: 600px 0;
  }
  @media (max-width: 500px) {
    margin: 650px 0;
  }
}
.pjt-content {
  margin-bottom: 5%;
}
.card-style {
  margin: 20px -40px;
  padding: 240px 170px;
  max-width: 600px;
  @media (max-width: 1200px) {
    margin: 20px -30px;
    padding: 230px 150px;
  }
  @media (max-width: 1024px) {
    max-width: 400px;
    padding: 450px 100px;
  }
  @media (max-width: 600px) {
    padding: 490px 100px;
  }
}
.card-content-left {
  @media (max-width: 1024px) {
    top: 5%;
  }
}
.card-content-right {
  @media (max-width: 1024px) {
    top: 55%;
    left: 8%;
  }
  @media (max-width: 600px) {
    top: 50%;
  }
}

.survey-reason {
  margin: 10% 2.5%;
  line-height: 75px;
  font-size: 44px;
  align-items: center;
  @media (max-width: 1000px) {
    font-size: 32px !important;
    line-height: 50px;
  }

  @media (max-width: 500px) {
    font-size: 28px !important;
    line-height: 40px;
  }
}

.card-layout {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  p {
    padding-left: 20px;
    width: 70%;
    margin: 0 auto;
  }
  img {
    width: 50%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: space-between;

    img {
      margin: 0 auto;
      width: 60%;
    }
    p {
      font-size: 16px;
      padding: 0px;
      margin-top: 30px;
    }
  }
}
.box {
  border-color: #3a3a3ad7;
  max-width: 900px;
}
.box3 {
  border-radius: 95% 1% 97% 5%/4% 94% 3% 3% !important;
  @media (max-width: 700px) {
    border-radius: 30% 3% 97% 5%/4% 94% 3% 3% !important;
  }
}
.oddboxinner {
  transform: rotate(0.5deg);
}
.underline {
  background-size: 100% 0.14em;
  &:hover {
    background-size: 100% 0.14em;
  }
}
.story-style {
  font-family: 'Source Code Pro', monospace;
  max-width: 600px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
}

//survey
.survey-result {
  color: #373a40;
  margin: 0px 25%;
  text-align: left;
  @media (max-width: 992px) {
    margin: 0px 20%;
  }
}
.method-reason {
  img {
    width: 100%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 28px;
      p {
        font-size: 20px;
      }
    }
    img {
      width: 80%;
      margin: 5%;
    }
    h1 {
      max-width: 450px;
    }
  }
}
.interview-img {
  display: flex;
  display: -webkit-inline-box;
  flex-direction: row;
  margin: 0 10% 5%;
  img {
    width: 20%;
    margin: 0 2.5%;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    img {
      width: 50%;
      margin: 1%;
    }
    h1 {
      max-width: 450px;
    }
  }
}
.prototype-image {
  display: -webkit-inline-box;
  img {
    width: 85%;
  }
  @media (max-width: 700px) {
    img {
      width: 100%;
    }
    margin: 10px 0;
  }
}
</style>
