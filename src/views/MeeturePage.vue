<template>
  <div
    class="bg-green-50 pb-16 md:pb-20 pt-36 flex flex-wrap items-center justify-center"
  >
    <img
      class="w-3/5 md:w-2/5 px-1 md:px-2 mt-12 animate__lightSpeedInRight animate__slow"
      src="@/assets/Meeture/Product.png"
      alt=""
    />
    <span class="animate__lightSpeedInRight animate__slower">
      <h1 class="text-2xl md:text-3xl font-bold">Meeture</h1>
      <p class="text-xl md:text-2xl font-medium italic capitalize">
        Elderly social activity platform
      </p>
    </span>
  </div>

  <div class="mt-8 grid grid-cols-4 gap-3 text-left pb-2">
    <div class="pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <h1 class="text-2xl md:text-3xl font-bold">Overview & Background</h1>
      <p class="text-lg font-base">
        Meeture is a <b>social activity platform</b> that helps the elderly <b>get
        activity information, find interesting events to join, and meet new
        friendswhich enhances the social networking</b>  between elderly people and
      <b>constructs activities memories</b> at the same time.
      </p>
    </div>
    <div 
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      class="border-2 border-indigo-600 pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <div class="rounded overflow-hidden shadow-xl">
        <div class="px-6 py-6">
          <h1 class="font-bold text-lg md:text-xl mb-2">Team</h1>
          <p class="text-md md:text-lg font-base">
            Wei-Ko Li, Carol Huang, Daniel Chang<br />
          </p>
          <h1 class="font-bold text-lg md:text-xl mb-2">Time</h1>
          <p class="text-md md:text-lg font-base">February 2021 - December 2021</p>
          <h1 class="text-lg md:text-xl font-bold">My Role</h1>
          <ul class="text-md md:text-lg list-disc"> 
              <li>Team Leader</li>
              <li>User Interface design</li>
              <li>Web development</li>
          </ul> 
          <h1 class="font-bold text-lg md:text-xl">User research methods</h1>
          <p class="text-gray-700 text-base">
            <ul class="text-md md:text-lg list-disc">
              <li>Surveys</li>
              <li>User Interview</li>
              <li>Point of View (PoV) & How Might We (HMW)</li>
              <li>Usability testing</li>
              <li>Heuristics Evaluation</li>
            </ul>
          </p>
            
          <h1 class="font-bold text-lg md:text-xl my-2 pb-2">Tools</h1>
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Figma</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Miro</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Vue.js</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Django</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Heroku</span
          >
        </div>
      </div>
    </div>
    <div 
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      class="col-span-6 bg-emerald-50 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-2xl md:text-4xl font-bold">Problem</h1>
      <p class="text-lg md:text-xl font-medium leading-7">
        <b>Elderly people</b> are losing ways to <b>retrieve activity information.</b><br><br> The burgeoning electronic transmitted formats are <b
          >ruling out traditional methods, such as using flyers to publicize events or pasting posters on the bulletin boards.</b
        > Since the elderly are <b>not familiar with smartphones and computers</b>, they <b>don't know how to use them to find out activities.</b> <br>
        Also, after retiring, they <b>lose social connections with their friends and lack opportunities to meet new friends.</b><br><br>
        Therefore, we wanted to design <b class="text-orange-700">social activity platforms</b> to help them firstly build up relationships with old friends and also make new friends, and secondly, we hoped to <b class="text-orange-700">bridge the gap between elderly people and digital devices</b> by creating aging-friendly website.
      </p>
    </div>

    <div class="pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <h1 class="mt-16">Research Process</h1>
      <ol
        class="list-none relative border-l border-gray-200 dark:border-gray-700"
      >
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Competitor Analysis
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          ></p>
        </li>
        
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            User Interview
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          ></p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Qualitative data analysis (Affinity Diagram)
          </h3>
          <p
            class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
          ></p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            HMW&PoV
          </h3>
          <p class="text-md font-medium">
            
          </p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Low-Fidelity & Task flow
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Usability testing
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Mid-Fidelity
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Heuristics Evaluation
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
        <li class="mb-8">
          <div
            class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 left-1 border border-white dark:border-gray-900 dark:bg-gray-700"
          ></div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            High-Fidelity
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400"></p>
        </li>
      </ol>
    </div>


    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in"
      data-aos-mirror="true"  
      class="pl-5 md:px-10 col-span-4 text-center">
      <hr class="mx-48 my-24 h-px bg-gray-300 border-0" />
      <h1 class="text-2xl md:text-3xl font-bold">Competitor Analysis</h1>
      <img class="w-full" src="@/assets/Meeture/MeetureCompetitor.png" alt="" />
    </div>

    <div 
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-in"
      data-aos-mirror="true"
      class="my-20 pl-5 md:px-40 col-span-4 text-center">
      <h1 class="text-xl md:text-2xl font-bold">After going through <span class="text-orange-700">competitor analysis</span>, we found out there is <span class="text-orange-700">no social activities platform mainly focused on retired older adults.</span> Therefore, we decided to push ourselves into the interview process to better capture this group of people.</h1>
      <!-- <hr class="mx-10 mt-8 h-px bg-yellow-600 border-2 border-yellow-200 " /> -->
    </div>

    <div class="col-start-2 col-span-4 mt-10">
      <h3 class="text-blue-800 Capitalize text-md md:text-xl font-semibold">➢ Online Interview</h3>
    </div>
    <div class="col-span-6 md:col-span-2 md:col-start-2 p-10 bg-rose-100">
        <h4 class="text-md md:text-lg font-medium"><b class="italic">Why Online Interview?</b> <br><br><b>1. Interview Purpose:</b> To help us <b>quickly and deeply understand</b> how older adults build up social networks, what types of activities they would use, and how they use electronic products.</h4>
        <h4 class="text-md md:text-lg font-medium"><b>2. Participants Recruiting Criteria:</b> People whose ages are close to retirement age (60~80 years), and would use smartphones in their daily lives.</h4>
        <h4 class="text-md md:text-lg font-medium">
          * Due to Covid-19, our group decided to conduct online interviews. And we started to find the participants from our grandparents, neighborhood. <br>
        </h4>
        <h4 class="text-sm md:text-md font-medium">(One team member stayed beside the participants to help set up online meetings while others join online meetings to write interview notes and ask questions.)</h4>
    </div>

    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span-2">
      <h2 class="text-lg md:text-xl">
        We interviewed 4 older adults to understand their
      </h2>
      <ul class="text-md md:text-lg list-decimal font-semibold">
        <li>
          Technology usage (Pros & Cons, Challenges...)
        </li>
        <li>Feelings and concerns when joining activities & Activities types</li>
        <li>Feelings about current lives</li>
      </ul>
    </div>

    <div class="col-span-6 bg-cyan-800 px-10 lg:px-40 py-20 mt-20">

      <h1 class="text-center text-3xl md:text-4xl font-bold pb-10  text-white">Research Findings</h1>
      <div class="flex flex-wrap items-center justify-evenly">
        <div class="col-span-3 bg-white w-[350px] h-[150px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 5px 3px"
              >Finding 1 : Living attitude of the elderly</span
            ><br />
            The elderly live regular lives, are afraid of
            <span class="underline decoration-pink-500">making changes</span>, and are
            <span class="underline decoration-pink-500">vigilant to information sources.</span>
          </h3>
        </div>
        <div class="col-span-3 bg-white w-[300px] h-[200px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 5px 3px"
              >Finding 2 : Expand social network</span><br>
            The elderly want to
            <span class="underline decoration-pink-500">join activities with their friends</span>,
            and are
            <span class="underline decoration-pink-500">STILL willing to make new friends with similar interests and
              hobbies.</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="col-start-2 col-span-4 mt-10">
      <h3 class="text-blue-800 Capitalize text-md md:text-xl font-semibold">➢ Point of View (PoV) & How Might We (HMW)</h3>
    </div>
    <div class="col-span-6 md:col-span-2 md:col-start-2 px-10 bg-rose-100">
      <h4 class="text-md md:text-lg font-medium italic"><b>Why PoV & HMW?</b> <br><br>In order to <b>define clear problems of our users and also help us clarify users' needs</b>, we tried to implement PoV method to emphasize users. <br>Next, we can apply "how might we" method to <b>ideate the problem and brainstorm the design strategies.</b></h4>
    </div>
    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span-2">
      <div class="p-5 rounded-lg shadow-lg bg-gray-100 max-w-sm my-8">
        <h4 class="md:text-lg text-md">
          <span style="background: yellow; padding: 5px 3px"
            >Finding 1 : Living attitude of the elderly</span
          ><br />
          The elderly live regular lives, are afraid of
          <span class="underline decoration-pink-500">making changes</span>, and are
          <span class="underline decoration-pink-500">vigilant to information sources.</span>
        </h4>
      </div>
      <h2 class="text-lg md:text-xl font-serif">
        As a [Role], I want [Feature] because of [Some Reason].
      </h2>
      <ul class="text-md md:text-lg font-semibold">
        <li>
          <b class="underline decoration-pink-500">As a retired older adult</b> who wants to participate in activities but lacking the information sources,
        </li>
        <li>wants to have 
          platforms that would <b class="underline decoration-pink-500">secure their personal and information privacy</b></li>
        <li>because <b class="underline decoration-pink-500">they are afraid of fake news issues and scam.</b></li>
      </ul>
    </div>
    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span-2">
      
      <h2 class="text-lg md:text-xl font-serif">
        How Might We
      </h2>
      <ul class="text-md md:text-lg font-semibold">
        <li>
          <b>How might we</b> establish the trust of the platform for users? <br>➔ How might we <span class="text-amber-700">reduce users' worries by bringing better security specifications design?</span>
        </li>
      </ul>
    </div>

    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span-2">
      <div class="bg-gray-100 p-5 rounded-lg shadow-lg max-w-sm my-8">
        <h4 class="md:text-lg text-md">
          <span style="background: yellow; padding: 5px 3px"
              >Finding 2 : Expand social network</span><br>
            The elderly want to
            <span class="underline decoration-pink-500">join activities with their friends</span>,
            and are
            <span class="underline decoration-pink-500">STILL willing to make new friends with similar interests and
              hobbies.</span>
        </h4>
      </div>
      <h2 class="text-lg md:text-xl font-serif">
        As a [Role], I want [Feature] because of [Some Reason].
      </h2>
      <ul class="text-md md:text-lg font-semibold">
        <li>
          <b class="underline decoration-pink-500">As a retired older adult</b> who wants to participate in activities but lacking the information sources,
        </li>
        <li>wants to <b class="underline decoration-pink-500">participate in activities with acquaintances</b></li>
        <li>because they feel<b class="underline decoration-pink-500"> more comfortable.</b></li>
      </ul>
    </div>
    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span-2">
      <h2 class="text-lg md:text-xl font-serif">
        How Might We
      </h2>
      <ul class="text-md md:text-lg font-semibold">
        <li>
          <b>How might we</b> let users know their friends would come to the activites?<br>➔ How might we <span class="text-amber-700">who is interested or who is going to participate in this event?</span>
        </li>
      </ul>
    </div>

    <div class="col-start-2 col-span-4 mt-10">
      <h3 class="text-blue-800 Capitalize text-md md:text-xl font-semibold">➢ Low-Fidelity & Task flow</h3>
    </div>

    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span-2">
        <h2 class="text-lg md:text-xl underline decoration-yellow-500">
          Finding 1
        </h2>
    </div>
    <div class="col-span-6 md:col-span-2 md:col-start-2 px-10 bg-rose-100">
      <h4 class="text-md md:text-lg font-medium italic"><b>Apply LINE official account to start the journey</b> <br><br><b>WHY?</b><br><br><b>LINE is a messaging platform Taiwanese older adults mostly use in their daily life. </b>Since they have many connections on LINE and LINE is their familiar product, we wanted to use LINE official account as the entry point to share our product with them and reduce their concern.</h4>
    </div>
    <div  class="pl-5 md:p-10 flex flex-wrap items-center col-span-4 text-center">
        <img class="w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow1.png" alt="" />
        <img class="w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow2.png" alt="" />
    </div>

    <div class="pl-20 md:pl-0 md:col-start-2 col-span-4 md:col-span- mt-8">
        <h2 class="text-lg md:text-xl underline decoration-yellow-500">
          Finding 2
        </h2>
    </div>
    <div class="col-span-6 md:col-span-2 md:col-start-2 px-10 bg-rose-100 my-4">
      <h4 class="text-md md:text-lg font-medium italic"><b>Features of "Who also find interested" and "Sharing button via LINE"</b> <br><br><b>WHY?</b><br>First of all, older adults want to join activities with their friends. If they can know who is going to the event, there is a higher chance for them to join.<br> <br>Secondly, we make the sharing process much easier by integrating sharing button with LINE so that older adults can share the inviting link with their friends on the LINE chat channel.</h4>
    </div>
    <div  class="pl-5 md:px-10 flex flex-wrap items-center col-span-4 text-center">
        <img class="w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow3.png" alt="" />
        <img class="w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow4.png" alt="" />
    </div>

    <div class="col-start-2 col-span-4 mt-10">
      <h3 class="text-blue-800 Capitalize text-md md:text-xl font-semibold">➢ Usability testing</h3>
    </div>
    <div class="col-span-6 md:col-span-2 md:col-start-2 p-10 bg-rose-100">
        <h4 class="text-md md:text-lg font-medium"><b class="italic">Why Usability Testing?</b></h4>
        <h4 class="text-md md:text-lg font-medium">Since we are making our low prototype design now, we want to check <b>if these ideated features fit our users' needs</b> or not in the early stage.<br><br>Therefore, we decided to implement usability testing to know <b>how users think about the design, how users will interact with these feature, and what we can improve our design, etc.</b></h4>
    </div>
    <div 
      class="pl-5 md:px-10 col-span-4 text-center pt-10">
      <h1 class="text-2xl md:text-3xl font-bold">How we implement our testing?</h1>
      <img class="w-full pt-10" src="@/assets/Meeture/TestingSteps.png" alt="" />
    </div>
    <div 
      class="pl-5 md:px-10 col-span-4 text-center pt-10">
      <h1 class="text-2xl md:text-3xl font-bold">Usability Results </h1>
      <h4 class="text-md md:text-lg font-medium">(REASONS)</h4>
      <img class="w-full pt-10" src="@/assets/Meeture/usabilityTestResult.png" alt="" />
    </div>
    <!-- <div  class="pl-5 md:px-10 flex flex-wrap items-center col-start-2 col-span-2 text-center gap-3">
        <img class="w-1/3 shadow-lg" src="@/assets/Meeture/interview.png" alt="testing pictures" />
        <img class="w-1/3 shadow-lg" src="@/assets/Meeture/interview1.jpg" alt="testing pictures" />
    </div>
    <div  class="pl-5 md:px-10 flex flex-wrap items-center col-start-2 col-span-3 text-center">
        <img class="w-full shadow-lg" src="@/assets/Meeture/UsabilityTest.png" alt="" />
    </div> -->

  </div>
  


  <!-- <div class="pjt-top">
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
  </div> -->
</template>

<script>
import NextButton from '../components/Shared/button.vue';
// import BackToTop from 'vue-backtotop';
// import { ref } from 'vue'
// const x = ref(0)

// function onMousemove(e) {
//   x.value = e.clientX
// }

export default {
  name: 'PodcastPage',
  data() {
    return {
      x: 0
    }
  },
  methods: {
    onMousemove(e) {
      this.x = e.clientX
    }
  },
  components: {
    'next-button': NextButton,
    // BackToTop,
  },
  props: {
    num: Number,
    name: String,
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
.movearea {
  transition: 0.3s background-color ease;
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
