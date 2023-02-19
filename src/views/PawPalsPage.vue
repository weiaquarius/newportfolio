<template>
  <div
    class="flex flex-wrap items-center justify-center"
  >
    <img
      class="w-full px-1 md:px-2 mt-24 md:mt-12 animate__lightSpeedInRight animate__slow"
      src="@/assets/PawPals/PawPalsCover.png"
      alt=""
    />
    <!-- <span class="animate__lightSpeedInRight animate__slower">
      <h1 class="text-2xl md:text-3xl font-bold">Paw Pals</h1>
      <p class="text-xl md:text-2xl font-medium italic capitalize">
        Pets' health management app
      </p>
    </span> -->
  </div>

  <div class="mt-8 grid grid-cols-4 gap-3 text-left pb-2">
    <div class="px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <img
      class="w-2/5 px-1 md:px-2 mt-12 animate__lightSpeedInRight animate__slow"
      src="@/assets/PawPals/PawPalslogo.png"
      alt=""
    />
      <p class="text-xl md:text-2xl font-medium capitalize">
        Pets' health management app
      </p>
      <p class="text-lg font-medium">
        Pet owners! No need to worry about missing documents!
        Paw Pals helps you organize all your pets’ medical documents online.
        By scanning QR code,  you can share files with vets at any time, anywhere.

      </p>
      <h1 class="mt-10 md:mt-20 text-xl md:text-3xl font-bold">Overview & Background</h1>
      <p class="text-lg font-base">
        
      </p>
    </div>
    <div class="border-2 border-indigo-600 px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <div class="rounded overflow-hidden shadow-xl">
        <div class="px-6 py-6">
          <h1 class="font-bold text-lg md:text-xl mb-2">Team</h1>
          <p class="text-md md:text-lg font-base">
            Wei-Ko Li, Laura Huerta, Amanda Guerrero, <br>Laura Manzanarez, Tianhong Qiu<br />
          </p>
          <h1 class="font-bold text-lg md:text-xl mb-2">Time</h1>
          <p class="text-md md:text-lg font-base">September 2022 - December 2022</p>
          <h1 class="text-lg md:text-xl font-bold">My Role</h1>
          <ul class="text-md md:text-lg list-disc"> 
              <li>UX designer</li>
          </ul> 
          <h1 class="font-bold text-lg md:text-xl">User research methods</h1>
          <p class="text-gray-700 text-base">
            <ul class="text-md md:text-lg list-disc">
              <li>User Interview</li>
              <li>Usability testing</li>
            </ul>
          </p>
            
          <h1 class="font-bold text-lg md:text-xl my-2 pb-2">Tools</h1>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Figma</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >UserTesting</span
          >
        </div>
      </div>
    </div>
    <div class="col-span-4 bg-slate-100 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-left text-3xl md:text-4xl font-bold pb-10">Problem</h1>
      <p class="text-lg md:text-xl font-medium leading-7">
        Pet owners have difficulty in tracking pets’ medical records and manage their documents.
      </p>
      <div class="flex flex-wrap items-center justify-evenly">
        <div class="col-span-2 bg-white w-[370px] h-[200px] sm:h-[150px] p-3 m-5 rounded overflow-hidden shadow-xl">
          <h3 class="italic font-medium">
            "I have to bring the previous paper document to the vet, but sometimes I forget where I placed it, so I contact the vet to get one."
          </h3>
        </div>
        <div class="col-span-2 bg-white w-[300px] h-[170px] p-3 m-5">
          <h3 class="italic font-medium">
            "I have so many pets, I wish I could better organize their medical records..."
          </h3>
        </div>
        <div class="col-span-2 bg-white w-[300px] h-[170px] p-3 m-5">
          <h3 class="italic font-medium">
            "I occasionally received SMS regarding new vaccinations, but I'm not sure what shots my pets had already had."
          </h3>
        </div>
        <p class="text-lg font-medium italic">Quotes from our teammates experience</p>
      </div>
    </div>
    <!-- <div class="col-span-4 bg-emerald-50 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-xl md:text-3xl font-bold">Problem</h1>
      <p class="text-lg md:text-xl font-medium leading-7">
        After retirement, the elderly lose focus in lives, easily to feel lonely.
        <br><br>The elderly used to engage in activities with their friends to deal with boredom, but they don't know what activities to engage in or how to join ones now.
      </p> -->
      <!-- <p class="text-lg md:text-xl font-medium leading-7">
        <b>Elderly people</b> are losing ways to <b>retrieve activity information.</b><br><br> The burgeoning electronic transmitted formats are ruling out traditional methods, such as using flyers to publicize events or pasting posters on the bulletin boards. Since the elderly  <b>are not familiar with smartphones and computers</b>, they don't know how to use them to find out activities.<br>
        Also, after retiring, they <b>lose social connections with their friends and lack opportunities to meet new friends.</b><br><br>
        Therefore, we wanted to design <b class="text-cyan-700">social activity platforms</b> to help them firstly build up relationships with old friends and also make new friends, and secondly, we hoped to <b class="text-cyan-700">bridge the gap between elderly people and digital devices</b> by creating aging-friendly website.
      </p> -->
    <!-- </div> -->

    <!-- Problem Statement -->
    <div 
      class="px-10 md:px-64 py-16 col-span-4 text-center pt-20">
      <h1 class="text-xl md:text-xl font-meium">Problem Statement</h1>
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
      <h1 class="text-xl md:text-2xl font-bold italic">How might we simplify the pet health management process to help pet owners easily take care of their pets’ health?
      </h1>
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
    </div>
    <!-- Solution -->
    <div 
      class="px-10 px-20 lg:px-80 py-16 col-span-4 text-center bg-slate-100">
      <h1 class="text-xl md:text-3xl font-bold pt-10">Solution</h1>
      <p class="text-lg md:text-xl font-medium leading-7">
        Paw Pals helps simplify the pet health management process through medical record management, appointment scheduling and health tracking. 
        We want to make the lives of pet owners and their furry companions easier.
      </p>
      <img class="w-full" src="@/assets/PawPals/PawPal_Solution.png" alt="" />
    </div>
    <!-- Key feature -->
    <div 
      class="pl-5 px-10 md:px-40 lg:px-48 py-16 col-span-4 text-center">
      <h1 class="text-xl md:text-3xl font-bold p-10">Key features</h1>
      <div  class="pl-5 md:px-40 md:py-20 flex flex-wrap items-center col-span-4 text-left">
        <div class="w-1/2 aspect-w-1 aspect-h-1">
        <iframe src="https://youtube.com/embed/JZCOlCBhOUI?autoplay=1&mute=1&loop=1&playlist=JZCOlCBhOUI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> 
        <div class="pl-10 md:pl-24 w-1/2">
          <h1 class="text-lg md:text-2xl font-bold italic">Easily share document via QR code or email</h1>
          <p class="text-md md:text-xl font-medium leading-7">
            Pet owners can upload their documents first and whenever they need to share them, they can scan QR code to share the document or send it to the vet by email.
          </p>
        </div>
      </div>
      <div class="mt-20 pl-5 md:px-40 md:py-20 flex flex-wrap items-center col-span-4 text-left">
        <div class="w-1/2 aspect-w-1 aspect-h-1">
        <iframe src="https://youtube.com/embed/qljwPocB8Jk?autoplay=1&mute=1&loop=1&playlist=qljwPocB8Jk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> 
        <div class="pl-10 md:pl-24 w-1/2">
          <h1 class="text-lg md:text-2xl font-bold italic">Keep track of your pets' health journey</h1>
          <p class="text-md md:text-xl font-medium leading-7">
            Pet owners can add their pets’ health records such as their weight, food, or medicine taken. Also, they can create to-do lists for upcoming appointments or vaccinations.
          </p>
        </div>
      </div>
    </div>
    <div 
      class="md:px-20 md:py-5 col-span-4 text-center">
      <hr class="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700">
      <h1 class="text-xl md:text-3xl font-bold p-20">Design Thinking process - My role</h1>
      <img class="w-full" src="@/assets/PawPals/PawPals_researchprocess.png" alt="" />
    </div>
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700 border-l-orange-700 border-2">EMPATHIZE - Competitor Analysis</h3>
      <h2 class="text-lg md:text-xl font-medium">There are many existing products related to pets healthcare. We want to apply competitor analysis to understand what platform was currently available and successfully in the markets and if there are any gaps in the market.</h2>
    </div>

    <div 
      class="px-2 maxsm:mt-8 md:px-10 col-span-4">
      <img class="w-full" src="@/assets/PawPals/PawPals_Competitor.png" alt="" />
    </div>

    <div 
      class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left italic">
        <h2 class="text-lg md:text-xl font-medium">After going through <span class="text-cyan-700">competitor analysis</span>, we found out Most of the competitive products help record pets’ medical data <span class="text-cyan-700 font-bold">but there is no product for document management.</span></h2>
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
    <!-- <div class="maxsm:px-8 mt-12 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-center"> -->
      <h3 class="text-lg md:text-xl text-cyan-700">EMPATHIZE - Interview</h3>
    </div>


    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h2 class="text-lg">
        We recruited 9 pet owners as our interview participants.
      </h2>
      <h2 class="text-lg">
       Demographic profile: 
      </h2>
      <ul class="text-lg list-decimal font-medium">
        <li>
          Age range: 24~29
        </li>
        <li>Gender: Mostly female</li>
        <li>Location: Mostly Austin</li>
      </ul>
      <h2 class="text-lg">
        Questions type:
      </h2>
      <ul class="text-lg list-decimal font-medium">
        <li>
          Background information about the pets
        </li>
        <li>Methods and journey about how they take care of their pets’ medical records</li>
        <li>Any challenges or difficulties</li>
      </ul>
    </div>

    <!-- Findings -->
    <div class="col-span-4 bg-cyan-800 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-center text-3xl md:text-4xl font-bold pb-10  text-white">Research Findings</h1>
      <div class="flex flex-wrap items-center justify-evenly">
        <div class="col-span-2 bg-white w-[330px] md:w-[350px] h-[220px] md:h-[200px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 1 <br>(5/9 people shared this issue)</span
            ><br>
            It’s difficult for pet owners to always keep their physical copies of pet records when they go to the vet.
          </h3>

          <img class="w-1/2 pl-20 md:pl-24" src="@/assets/PawPals/paper.png" alt="paper" />
        </div>
        <div class="col-span-2 bg-white w-[300px] h-[210px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 2 <br>(3/9 people shared this issue)</span><br>
              When pet owners switch vets, they have to transfer documents many times especially during covid.
          </h3>
          <img class="w-3/5 pl-24" src="@/assets/PawPals/data-transfer.png" alt="data-transfer" />
        </div>
        <div class="col-span-2 bg-white w-[300px] h-[210px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 3 <br>(2/9 people shared this issue)</span><br>
              Pet owners sometimes would lose track of upcoming appointments and vaccinations.
          </h3>
          <img class="w-3/5 pl-24" src="@/assets/PawPals/schedule.png" alt="calendar" />
        </div>
      </div>
    </div>


    <!-- Persona -->
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700">DEFINE - Persona</h3>
      <h4 class="text-lg font-medium">David is an experienced pet owner who has owned pets for 5 years, and he has some frustration.</h4>
      <ul class="text-lg list-decimal font-medium">
        <li><b>Hard to transfer health data</b> between hospitals, clinics, and specialists.</li>
        <li><b>Easy to forget pets’ different routines</b>, especially when it comes to vaccination, or medication.</li>
      </ul>
    </div>
    <div  class="pl-5 md:pl-10 col-span-4 text-center">
      <img class="w-full px-20 md:w-4/5" src="@/assets/PawPals/ExpertOwner.png" alt="Persona" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700">DEFINE - How Might We (HMW)</h3>
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2">
      <h2 class="text-lg font-medium">
          Based on out persona and findings, we generated our How Might We question,
        </h2>
      <h4 class="text-2xl font-bold italic">How might we make the pets’ medical record transferring process easier?</h4>
    </div>
  
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700">PROTOTYPE - Sketches</h3>
      <h4 class="text-lg font-medium"></h4>
    </div>
    <div 
      class="col-span-4">
      <img class="w-full" src="@/assets/PawPals/PawPals_Sketches.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700">PROTOTYPE - Low-Fidelity & Task flow</h3>
    </div>

    <div class="px-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h2 class="text-lg font-medium">
          Finding 1 and Finding 2
      </h2>
      <h2 class="text-lg md:text-xl">
          Pain points: 
      </h2>
      <h4 class="text-lg font-medium">Pet owner has to bring their paper documents all the time and have to transfer documents by requesting or sending the documents via email when they switch clinics.</h4>
      <h2 class="text-lg md:text-xl">
          Solutions:
      </h2>
      <h4 class="text-lg font-medium">Apply QR code to share medical documents</h4>
    </div>

    <div class="pl-5 col-span-4 text-center">
        <img class="w-4/5 px-20" src="@/assets/PawPals/LowFi-QR code.png" alt="" />
    </div>

    <div class="px-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h2 class="text-lg font-medium">
          Finding 3
      </h2>
      <h2 class="text-lg md:text-xl">
          Pain points: 
      </h2>
      <h4 class="text-lg font-medium">Pet owner sometimes would lose track of upcoming appointments and vaccinations.</h4>
      <h2 class="text-lg md:text-xl">
          Solutions:
      </h2>
      <h4 class="text-lg font-medium">Create to-do tasks and health log </h4>
    </div>

    <div class="pl-5 col-span-4 text-center">
        <img class="w-1/2" src="@/assets/PawPals/LowFi-HealthLog.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700">TEST - Usability testing</h3>
      <h4 class="text-xl font-medium">3 major design improvements after going through usability testing with pet owners.</h4>
      <h1 class="text-xl">Testing methods: </h1>
      <ul class="text-lg font-medium">
        <li>
          5 participants from our networkings
        </li>
        <li>10 participants recruited from usertesting.com</li>
      </ul>
    </div>
    
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h1 class="text-xl">Testing Results : </h1>
      <h4 class="text-md md:text-lg font-medium text-left">
        <b>1. Revised sitemap</b>
      </h4>
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-cyan-700">Design System</h3>
      <h4 class="text-xl font-medium">I worked with 2 UX designers to build up Paw Pals' design system to make sure consistent design.</h4>
    </div>
    <div class="pl-5 col-span-4 text-center">
        <img class="w-4/5" src="@/assets/PawPals/PawPals_DesignSystem.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-cyan-700">Challenges</h3>
      <h4 class="text-lg"></h4>
    </div>

    <div class="px-10 md:px-5 mt-4 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-cyan-700">Takeaway</h3>
      <h4 class="text-lg">Learn how to build up design systems with Figma</h4>
      <ul class="text-lg font-medium">
        <li>
          Self-learn from the online tutorial video
        </li>
        <li>Collaborate with UX designers</li>
        <li>Apply this skill to my other UX design project</li>
      </ul>
    </div>

    <div class="px-10 md:px-5 mt-4 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-cyan-700">Reflections, what I would do differently</h3>
      <ul class="text-lg font-medium">
        <li>
          <b>Research - </b>I want to apply card sorting to build our sitemap or test our sitemap iteratively at the defining stages before prototype design.
        </li>
        <li><b>Design - </b>Explore more design inspiration in ideation stage or apply brainstorming methods like crazy 8’s, crowdstorming to help us consider more possibilities.</li>
      </ul>
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-cyan-700">Group Picture</h3>
    </div>

    <div class="pl-5 col-span-4 text-center">
        <img class="w-4/5 px-20" src="@/assets/PawPals/PawPals_groupPic.jpg" alt="" />
    </div>
  </div>
  <div class="grid grid-cols-4 bg-slate-200 mt-20">
    <div class="maxsm:col-span-4 sm:col-span-2 mt-0 md:mt-10 w-full">
      <next-button :project-num="num" :name="name"></next-button>
    </div>
    <div class="maxsm:col-span-4 sm:col-span-2">
      <img class="mt-20 mb-8 w-full" src="@/assets/Meeture/Meeture_cover.png" alt="project image" />
    </div>
  </div>
</template>

<script setup>
import { NIcon } from 'naive-ui';
import { Number1,Number2,Number3,Number4,UserSpeaker } from '@vicons/carbon';
import { onMounted } from 'vue';
import  NextButton from '../components/Shared/Nextbutton.vue';
defineProps({
  num: Number,
  name: String,
});
onMounted(() => {
  window.scrollTo(0, 0);
});

</script>
<style scoped lang="scss">
@import '../assets/scss/project_content_style.scss';
@import '../assets/scss/project_card_style.scss';
//fontstyle

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap');

.responsive-iframe{
  width: 80%;
  height: 700px;
  @media (max-width: 640px) {
    width:100%;
    height:550px
  }
}
.movearea {
  transition: 0.3s background-color ease;
}

.button-bg-image {
  // padding: 150px 0;
  width: 60%;
  background-image: url('../assets/Podcast/PodcastCover.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  // left: 40%;
  right: 0;
}

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
