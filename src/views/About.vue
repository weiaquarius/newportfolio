<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container py-2 mx-auto lg:pt-24 lg:px-10">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="mt-20 flex flex-wrap w-full">
          <div class="w-full p-10 md:p-2">
            <!-- <img
              alt="gallery"
              class="block object-cover w-full h-full rounded-lg shadow-lg"
              src="@/assets/About/VVN_About.png"
            /> -->
            <img
              alt="gallery"
              class="w-full"
              src="@/assets/About/AboutSection.png"
            />
          </div>
        </div>
        <!-- <div class="lg:mt-20 flex flex-wrap text-left px-8 md:w-1/2">
          <p class="text-md md:text-lg font-medium">
            <b>❤️ My passion in UX</b><br />I found a passion for user
            experiences (UX) in my sophomore year in college. After that, I
            spent lots of time digging into the UX field by joining UX book
            clubs, conducting side project (E.g. Podcast redesign project), and
            taking HCI-related courses during college. (E.g. Meeture, social
            activity platform for the elderly)<br /><br />
            <b>💪 Embrace difficulties</b><br />However, during the project of
            Meeture, I saw my knowledge gap in making accessible designs for the
            elderly since many interviewees suffering from presbyopia expressed
            their frustration in reading the small text on our website. This
            project experience was my rudimentary attempt to understand
            accessible design to help diverse groups of older people easily
            access technology.<br /><br />
            <b>📚 Keep learning</b><br />Therefore, I decided to build up solid
            knowledge in implementing user research methods and practical user
            interface design experiences. I first joined the lab led by Prof.
            Yung-Ju Chang at National Yang-Ming Chiao Tung University (NYCU) to
            enhance my UX research skills. I participated in two research
            projects: in-vehicle reading and travel-based multitasking which
            polished my research skills in qualitative research skills. (E.g.
            field study, observation, and semi-structured interviews).<br /><br />Next,
            I decided to go abroad for a UX master's program to craft
            age-friendly designs to better capture older people’s challenges
            when interacting with technology.
          </p>
        </div> -->
      </div>
    </div>
    <!-- <div class="flex flex-wrap lg:pt-12 px-[20px] md:px-20 lg:px-32">
      <div class="w-full text-left sm:text-center font-serif">
        <h1 class="sm:text-xl md:text-4xl">Here I am!</h1>
        <h4 class="mt-10 sm:text-lg md:text-xl">
          Studied at the University of Texas at Austin (UT Austin) for MS in
          Information Science.
        </h4>
      </div>
    </div> -->
    <section class="overflow-hidden text-gray-700">
      <div class="container px-4 lg:px-[20%] py-2 mx-auto">
        <div class="flex flex-wrap -m-1 md:-m-2">
          <div class="flex flex-wrap w-2/5">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full rounded-lg"
                src="@/assets/About/CapitolMe.png"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full rounded-lg"
                src="@/assets/About/DanceActionPic.jpg"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-3/5">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full rounded-lg"
                src="@/assets/About/texasAboutMe.png"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block object-cover object-center w-full rounded-lg"
                src="@/assets/About/softball.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <!-- <div class="aspect-w-16 aspect-h-9">
    <iframe
      class="p-4 sm:p-8 lg:p-24"
      src="https://www.youtube.com/embed/d4Cqz6tT1F0"
      width="640"
      height="360"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div> -->
  <div class="bg-yellow-100 md:p-40 p-10 my-10">
    <div class="text-left">
      <h3 class="text-xl md:text-2xl italic">
        "I enjoy interacting with different people and emphasizing their
        feelings about every life. I want to learn more about inclusive design
        and interact with older populations from diverse backgrounds to bring
        user-friendly designs to them."
      </h3>
    </div>
  </div>

  <hr class="mx-20 mt-24 mb-20 h-px bg-gray-200 border-0 dark:bg-gray-700" />
  <h2 class="italic">Check my projects!</h2>

  <div id="linkStyle" class="flex flex-wrap justify-center items-center">
    <router-link to="/PawPals">
      <div id="cardStyle" class="rounded-lg shadow-lg bg-gray-50 max-w-sm p-6">
        <img
          class="mt-2"
          src="@/assets/PawPals/PawPalslogo.png"
          style="height: 40px"
          alt=""
          loading="lazy"
        />

        <div class="p-0">
          <h2>Paw Pals</h2>
          <h3 class="capitalize">Pets' health management platform</h3>
        </div>
      </div>
    </router-link>
    <router-link to="/Meeture">
      <div id="cardStyle" class="rounded-lg shadow-lg bg-gray-50 max-w-sm p-6">
        <img
          class="mt-2"
          src="@/assets/Home/meeeture_logo.png"
          style="height: 70px"
          alt=""
          loading="lazy"
        />

        <div class="p-0">
          <h2>Meeture</h2>
          <h3 class="capitalize">Elderly activity platform</h3>
          <!-- <p>
            Design a learnable and aging-friendly activity website to encourage
            the elderly to go outside and make connections with their friends.
          </p> -->
        </div>
      </div>
    </router-link>
    <router-link to="/PodcastProject">
      <div id="cardStyle" class="rounded-lg shadow-lg bg-gray-50 max-w-sm p-8">
        <img
          class="mt-2"
          src="@/assets/Home/Podcast.png"
          style="height: 70px"
          alt=""
          loading="lazy"
        />

        <div class="p-0">
          <h2>Podcast side project</h2>
          <h3 class="capitalize">Podcast app redesign</h3>
          <!-- <p class="text-2xl">Meeture</p>
          <p class="text-xl font-medium">Elderly activity platform</p> -->
          <p></p>
        </div>
      </div>
    </router-link>

    <!-- <router-link to="/TravelBasedMultitasking">
      <div id="cardStyle" class="rounded-lg shadow-lg bg-gray-50 max-w-sm p-8">
        <div class="p-0">
          <h3>
            Get Distracted or Missed the Stop? Investigating Public Transit
            Passengers’ Travel-Based Multitasking Behaviors, Motives, and
            Challenges
          </h3>
          <p>
            Design a learnable and aging-friendly activity website to encourage
            the elderly to go outside and make connections with their friends.
          </p>
        </div>
      </div>
    </router-link> -->
  </div>
</template>
<script>
export default {
  name: 'About',
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
<style scoped lang="scss">
#linkStyle {
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    padding: 20px;
  }
}

#cardStyle {
  transition: all 0.5s ease-out;
  &:hover {
    background-color: rgb(226 232 240);

    transform: scale(1.02) perspective(0px);
    box-shadow: 0 5px 5px rgba(144, 144, 144, 0.7);
  }
}
</style>
