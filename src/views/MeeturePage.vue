<template>
  <div class="pjt-top">
    <div class="pjt-title">
      <h1>Meeture</h1>
      <h2>Elderly activity platform</h2>
    </div>
    <div class="meeture-image">
      <img src="../assets/Meeture/groupimage.png" alt="" />
    </div>
  </div>
  <div class="pjt-content">
    <div class="title">
      <h2>Project<br />Background</h2>
    </div>
    <div class="content">
      <p>
        To learn from human-computer interaction, I joined the “Human-Computer
        Interaction for Emerging Technology Design, Prototype, and Evaluation”
        course when I was a senior. The goal of our project was to create an
        activity platform for the elderly so that they can join the daily
        leisure activity effortlessly.
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
          <p>Quantiative study - Online survey</p>
          <p>Quanlitative study - Semi-structured interviews</p>
          <p>User Interface design</p>
          <p>Web development</p>
          <h2>Date</h2>
          <p>February 2021 - Present</p>
          <h2>TEAMMATES</h2>
          <p>
            Wei-Ko Li, Carol Huang, Daniel Chang
          </p>
        </div>
        <div class="card-content-right">
          <h2>METHODS & TOOLS</h2>
          <p>
            Surveys, User Interview, HMW&PoV
          </p>
          <p>
            Usability testing, Heuristics Evaluation
          </p>
          <p>
            Miro, Figma, Vue
          </p>
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
    </p>

    <p class="problem-statement">
      Therefore, we wanted to design activity platforms to help them firstly
      build up relationships with old friends and also make new friends, and
      secondly, we hoped to bridge the gap between elderly people and digital
      devices by creating aging-friendly website.
    </p>
  </div>

  <div class="method-reason">
    <h3>Interview</h3>
    <h1>
      In order to deeper understand users' listening experinces, we recruited
      <span class="underline">7</span> people for
      <span class="underline">semi-structured interview.</span><br />
    </h1>
    <h2>
      Respondents from:<br />
      Students(3), Technology Industry(2), Car business(1), Media Industry(1)
    </h2>
    <p style="font-size:18px;">
      Most of them are high frequency users ( > 7 times/week ) so that we could
      ask more aspects and experiences from them.
    </p>
  </div>

  <div
    class="pjt-desc"
    style="background:white;"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
  >
    <h1 class="card-h1">Research Findings</h1>
    <div class="findings-card-layout">
      <div class="card" style="margin:30px;">
        <div class="card-style-two">
          <h2>
            Users think that
            <span class="underline"
              >podcast exploration results are not diverse enough.</span
            >
          </h2>
          <!-- </div> -->
        </div>
      </div>
      <div class="card">
        <div class="card-style-two">
          <!-- <div class="card-content-left" style="padding:20px;left:0;"> -->
          <h2>
            Users think that
            <span class="underline diffcolor"
              >the information display is cluttered and cannot find the target
              information efficiently.</span
            >
          </h2>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="method-reason">
    <h3>How Might We (HMW)</h3>
    <h1>
      For
      <span class="underline">ideation and brainstorming</span> from our
      research findings, we chose to apply
      <span class="underline">How Might We </span>question to help us develop
      trigger questions and break down users' needs.
    </h1>
  </div>
  <div
    class="pjt-content"
    style="margin:10% 0;grid-gap:20px 70px;justify-content:center"
  >
    <div class="title">
      <h2 style="border:none;text-align:left;">
        <span class="underline diffcolor"> How Might We</span><br />
        (Finding 1)
      </h2>
    </div>
    <!-- <div class="title">
      <h2 style="border:none;text-align:left;">
        <span class="underline"> User Story</span>
      </h2>
    </div> -->
    <div class="content">
      <p style="max-width:300px;">
        How might we let users feel fresh on the platform?
      </p>
    </div>
    <!-- <div class="content">
      <p class="story-style">
        As a user craving to explore new things<br />
        I want to use the random inspired cards to recommend me new episodes<br />
        So that I would not feel bored.
      </p>
    </div> -->
    <div></div>
    <div class="content">
      <p style="max-width:300px;">
        How might we let users want to keep staying on the platform?
      </p>
    </div>

    <div></div>
    <div class="content">
      <p style="max-width:300px;">
        How might we design the exploring procedure so that users can be
        intrigued by the app?
      </p>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="title">
      <h2 style="border:none;text-align:left;">
        <span class="underline"> How Might We</span><br />
        (Finding 2)
      </h2>
    </div>
    <div class="content">
      <p style="max-width:300px;">
        How might we let users efficiently catch up on the information of the
        episode?
      </p>
    </div>
    <div></div>
    <div class="content">
      <p style="max-width:300px;">
        How might we let users flexibly change the display of information?
      </p>
    </div>
  </div>

  <h2>
    Use How Might We questions to genereate design solutions and vote for the
    ideas
  </h2>
  <div class="HMW-img">
    <img src="../../src/assets/Podcast/HMW1.jpg" alt="" />
    <img src="../../src/assets/Podcast/HMW2.jpg" alt="" />
  </div>

  <div
    class="pjt-desc"
    style="
  padding-bottom:50px;background:white;"
  >
    <h1><span class="underline diffcolor__four">Challenge</span></h1>
    <p style="line-height:50px;margin-top:40px">
      We didn't specifically identify the reasons for<br />
      <span class="underline">"Why"</span> we wanted to code with each HMW
      questions, and<br />
      <span class="underline">"How"</span> we wanted to address such question
      <br />
      by <span class="underline">"What"</span> design methodologies, which
      resulted in ambiguity of our design.
    </p>
  </div>

  <div
    class="pjt-desc"
    style="
  padding-bottom:70px;background:white;"
  >
    <h1><span class="underline diffcolor__three">Solved</span></h1>
    <p style="line-height:50px;margin-top:40px">
      We decided to write down the
      <span class="underline diffcolor">"User Story"</span><br />
      to zomm in from Why, How and What of our
      <span class="underline diffcolor">product features</span> and
      <span class="underline diffcolor">users' needs</span>.<br /><br />
      <span class="story-style">
        As a ... users, (Why & Who)<br />
        I want to ... (What), <br />
        so that I can ... (How)<br
      /></span>
    </p>
  </div>
  <div
    class="pjt-content"
    style="margin:10%;grid-gap:30px 70px;justify-content:center"
  >
    <div class="title">
      <h2 style="border:none;text-align:left;">
        <span class="underline diffcolor"> How Might We</span><br />
        (Finding 1)
      </h2>
    </div>
    <div class="title">
      <h2 style="border:none;text-align:left;">
        <span class="underline"> User Story</span>
      </h2>
    </div>
    <div class="content">
      <p style="max-width:300px;">
        How might we let users feel fresh on the platform?
      </p>
    </div>
    <div class="content">
      <p class="story-style">
        <span class="underline">As a user</span> craving to explore new
        things,<br /><br />
        <span class="underline">I want to</span> use the random inspired cards
        to recommend me new episodes,<br /><br />
        <span class="underline">So that I would</span> not feel bored.
      </p>
    </div>
    <div></div>
    <div></div>
    <div class="title">
      <h2 style="border:none;text-align:left;">
        <span class="underline diffcolor"> How Might We</span><br />
        (Finding 2)
      </h2>
    </div>
    <div></div>
    <div class="content">
      <p>
        How might we let users efficiently catch up on the information of the
        episode?
      </p>
    </div>
    <div class="content">
      <p class="story-style">
        <span class="underline diffcolor">As a user</span> don't want to waste
        time, <br /><br />
        <span class="underline diffcolor">I want to</span> know the hot spot of
        each episode,<br /><br />
        <span class="underline diffcolor">So that I would</span> efficiently
        know about the information of the episode.
      </p>
    </div>
  </div>
  <div class="method-reason">
    <h3>Brainstorming & Usability testing</h3>
    <h1>
      We designed wireframe from our research findings and applied
      <span class="underline">usabilty testing </span>on
      <span class="underline">5</span> participants.
    </h1>
    <br /><br />
    <h1>
      <span class="underline diffcolor"
        >1. Random Inspiring Cards (inspired by finding 1)</span
      >

      <p>
        Recommend new episodes to users, so that that can feel fresh and novel
        when they are using our Podcast app.
      </p>
      <p>
        We applied A/B test to evaluate our design
      </p>
      <p>
        <span class="underline"><b>Version A:</b></span
        ><br />
        We put the button in exploring page.<br />
        Users need to click "search" icon then get to see random inspiring
        cards.<br /><br />
        <span class="underline"><b>Version B:</b></span
        ><br />
        We put the button in main tab.<br />
        Users can directly click the "card" icon to get to the page.<br />
      </p>
    </h1>
  </div>

  <div class="prototype-image">
    <img src="../../src/assets/Podcast/Wireframe_RIC_flow.png" alt="" />
  </div>
  <h1><span class="underline">Decision: Version B</span></h1>
  <div
    class="pjt-content"
    style="margin:10%;grid-gap:30px 70px;justify-content:center"
  >
    <div class="title">
      <h2 style="border:none;text-align:left;"><i>Task:</i><br /></h2>
    </div>
    <div class="title">
      <h2 style="border:none;text-align:left;">
        Users' feedback and results
      </h2>
    </div>

    <div class="content">
      <p style="max-width:300px;">
        "You can try random inspiring cards to explore new episodes and audition
        tapes.<br />
        Could you try to find the function in this app?"
      </p>
    </div>
    <div class="content">
      <p style="max-width:300px;">
        Participants think that "random inspiring cards" is an
        <b>important and special</b> feature in this app, so the functional
        button should be put in the <b>main tab</b> to emphasize the function.
      </p>
    </div>
  </div>
  <div class="method-reason">
    <h1>
      <span class="underline diffcolor"
        >2. Customized Homepage sections (inspired by finding 2)</span
      >
      <p></p>
      <p>
        We applied A/B test to evaluate our design
      </p>
      <p>
        <span class="underline"><b>Version A:</b></span
        ><br />
        Users can edit the sequences of homepage sections from pop-up buttons in
        the same page. <br /><br />
        <span class="underline"><b>Version B:</b></span
        ><br />
        Users can edit the sections with shifting pages and preview the layout
        of section.
      </p>
    </h1>
  </div>

  <div class="prototype-image">
    <img src="../../src/assets/Podcast/Wireframe_HP_flow.png" alt="" />
  </div>
  <h1><span class="underline">Decision: Version A</span></h1>
  <div
    class="pjt-content"
    style="margin:10%;grid-gap:30px 70px;justify-content:center"
  >
    <div class="title">
      <h2 style="border:none;text-align:left;"><i>Task:</i><br /></h2>
    </div>
    <div class="title">
      <h2 style="border:none;text-align:left;">
        Users' feedback and results
      </h2>
    </div>

    <div class="content">
      <p style="max-width:300px;">
        "In this podcast app, you have subscribed to lots of favorite shows, and
        you also want to see the latest episodes of the show on the homepage.<br />
        Therefore, you want to adjust the content order of the homepage and add
        the "New episodes" section to the second column, What would you do?"
      </p>
    </div>
    <div class="content">
      <p style="max-width:300px;">
        Participants think that the display window of the edit section
        <b>should be displayed directly on the same page</b>, and they don't
        want pages shifting to perform operations.
      </p>
    </div>
  </div>
  <div class="method-reason">
    <h3>Hi-Fidelity Prototypes</h3>
    <h1>
      <span class="underline diffcolor"> Random inspiring cards</span>
    </h1>
  </div>

  <div class="prototype-image">
    <img src="../../src/assets/Podcast/HIFI_RIC_flow.png" alt="" />
  </div>
  <div class="method-reason">
    <h1>
      <span class="underline">Player</span>
    </h1>
  </div>
  <div class="prototype-image">
    <img src="../../src/assets/Podcast/HIFI_Player_flow.png" alt="" />
  </div>
  <!-- <div
    class="pjt-desc"
    style="padding:0px;background-color:white;left:0;top:0;"
  >
    <h2 class="survey-reason">
      The project is still ongoing.<br />
      Next, we would
      <span class="underline diffcolor">finish our wireframe design</span> of
      each key features and
      <span class="underline diffcolor"
        >build up the information architecture</span
      >
      of our Podcast app!
    </h2>
  </div> -->

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
  name: 'PodcastPage',
  components: {
    'next-button': NextButton,
    BackToTop,
  },
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
//fontstyle

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap');
.meeture-image {
  display: flex;
  display: -webkit-inline-box;
  // flex-direction: row;
  width: 50%;
  position: absolute;
  right: 7%;
  top: 25%;
  z-index: -1;
  img {
    width: 60%;
    margin: 0 20px;
  }
  @media (max-width: 900px) {
    width: 60%;
    right: 0;
    top: 30%;
    align-items: center;
  }
  @media (max-width: 600px) {
    img {
      display: none;
    }
  }
}

.pjt-content {
  margin-bottom: 5%;
}
.card-style {
  margin: 20px -40px;
  padding: 230px 170px;
  max-width: 600px;
  @media (max-width: 1200px) {
    margin: 20px -30px;
    padding: 230px 150px;
  }
  @media (max-width: 1024px) {
    max-width: 400px;
    padding: 450px 100px;
  }
}
.card-content-left {
  @media (max-width: 500px) {
    top: 5%;
  }
}
.card-content-right {
  @media (max-width: 1024px) {
    top: 52%;
    left: 8%;
  }
  @media (max-width: 500px) {
    top: 48%;
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
        font-size: 18px;
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
.HMW-img {
  display: flex;
  display: -webkit-inline-box;
  flex-direction: row;
  margin: 0 10% 5%;
  img {
    width: 40%;
    margin: 0 2.5%;
  }
  @media (max-width: 992px) {
    img {
      width: 70%;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    margin: 0;
    img {
      width: 80%;
      margin: 5%;
    }
    h1 {
      max-width: 450px;
    }
  }
}
.prototype-image {
  display: -webkit-inline-box;
  img {
    width: 100%;
  }
  margin: 70px 0%;
}
</style>
