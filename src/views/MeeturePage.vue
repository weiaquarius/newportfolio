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
    <div class="px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <h1 class="text-xl md:text-3xl font-bold">Overview & Background</h1>
      <p class="text-lg font-base">
        Meeture is a <b>social activity platform</b> that helps the elderly <b>get
        activity information, find interesting events to join, and meet new
        friends which enhances the social networking</b>  between elderly people and
      <b>constructs activities memories</b> at the same time.
      </p>
    </div>
    <div class="border-2 border-indigo-600 px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
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
    <div class="col-span-4 bg-emerald-50 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-xl md:text-3xl font-bold">Problem</h1>
      <p class="text-lg md:text-xl font-medium leading-7">
        <b>Elderly people</b> are losing ways to <b>retrieve activity information.</b><br><br> The burgeoning electronic transmitted formats are ruling out traditional methods, such as using flyers to publicize events or pasting posters on the bulletin boards. Since the elderly  <b>are not familiar with smartphones and computers</b>, they don't know how to use them to find out activities.<br>
        Also, after retiring, they <b>lose social connections with their friends and lack opportunities to meet new friends.</b><br><br>
        Therefore, we wanted to design <b class="text-orange-700">social activity platforms</b> to help them firstly build up relationships with old friends and also make new friends, and secondly, we hoped to <b class="text-orange-700">bridge the gap between elderly people and digital devices</b> by creating aging-friendly website.
      </p>
    </div>

    <div 
      class="maxsm:hidden pl-5 md:px-20 py-16 col-span-4 text-center">
      <h1 class="text-xl md:text-3xl font-bold p-20">Research Process</h1>
      <img class="w-full" src="@/assets/Meeture/ResearchProcess.png" alt="" />
    </div>
    <div 
      class="maxsm:block hidden pl-5 md:px-20 col-span-4 text-center">
      <h1 class="text-xl md:text-3xl font-bold p-20">Research Process</h1>
      <img class="w-2/3" src="@/assets/Meeture/ResearchProcessMobile.png" alt="" />
    </div>
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700 border-l-orange-700 border-2">EMPATHIZE - Competitor Analysis</h3>
      <h2 class="text-lg md:text-xl font-medium">We know there are many direct and indrect competitive platforms nowadays; therefore, we decided to implement competitor anaylsis to help us find the design gap.</h2>
    </div>

    <div 
      class="px-2 maxsm:mt-8 md:px-10 col-span-4">
      <img class="w-full" src="@/assets/Meeture/CompetitorAnalysis.png" alt="" />
    </div>

    <div 
      class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left italic">
        <h2 class="text-lg md:text-xl font-medium">After going through <span class="text-orange-700">competitor analysis</span>, we found out there is <span class="text-orange-700">no social activities platform mainly focused on retired older adults.</span><br><br> Therefore, we decided to push ourselves into the interview process to better capture this group of people.</h2>
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
    <!-- <div class="maxsm:px-8 mt-12 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-center"> -->
      <h3 class="text-lg md:text-xl text-orange-700">EMPATHIZE - Online Interview</h3>

      <h4 class="text-lg font-medium"><b>1. Interview Purpose:</b> To help us <b>quickly and deeply understand</b> how older adults build up social networks, what types of activities they would use, and how they use electronic products.</h4>
      <h4 class="text-lg font-medium"><b>2. Participants Recruiting Criteria:</b> People whose ages are close to retirement age (60~80 years), and would use smartphones in their daily lives.</h4>
      <h4 class="text-lg font-medium">
        <b>Disclaimer:</b> Due to Covid-19, our group decided to conduct online interviews. And we started to find the participants from our grandparents, neighborhood. <br>
      </h4>
      <h4 class="text-md md:text-lg font-medium italic">(One team member stayed beside the participants to help set up online meetings while others join online meetings to write interview notes and ask questions.)</h4>
    </div>

    <!-- <div class="col-start-2 col-span-4 mt-10">
      <h3 class="text-blue-800 Capitalize text-xl font-semibold">➢ Online Interview</h3>
    </div>
    <div class="col-span-6 md:col-span-2 md:col-start-2 p-10 bg-rose-100">
        <h4 class="text-md md:text-lg font-medium"><b class="italic">Why Online Interview?</b> <br><br><b>1. Interview Purpose:</b> To help us <b>quickly and deeply understand</b> how older adults build up social networks, what types of activities they would use, and how they use electronic products.</h4>
        <h4 class="text-md md:text-lg font-medium"><b>2. Participants Recruiting Criteria:</b> People whose ages are close to retirement age (60~80 years), and would use smartphones in their daily lives.</h4>
        <h4 class="text-md md:text-lg font-medium">
          * Due to Covid-19, our group decided to conduct online interviews. And we started to find the participants from our grandparents, neighborhood. <br>
        </h4>
        <h4 class="text-sm md:text-md font-medium">(One team member stayed beside the participants to help set up online meetings while others join online meetings to write interview notes and ask questions.)</h4>
    </div> -->

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h2 class="text-lg">
        We interviewed 4 older adults to understand their
      </h2>
      <ul class="text-lg list-decimal font-medium">
        <li>
          Technology usage (Pros & Cons, Challenges...)
        </li>
        <li>Feelings and concerns when joining activities & Activities types</li>
        <li>Feelings about current lives</li>
      </ul>
    </div>

    <!-- Findings -->
    <div class="col-span-4 bg-cyan-800 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-center text-3xl md:text-4xl font-bold pb-10  text-white">Research Findings</h1>
      <div class="flex flex-wrap items-center justify-evenly">
        <div class="col-span-2 bg-white w-[350px] h-[200px] sm:h-[150px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 1 : Living attitude of the elderly</span
            ><br>
            The elderly live regular lives, are afraid of making changes, and are
            vigilant to information sources.
            <!-- <span class="underline decoration-pink-500">making changes</span>, and are
            <span class="underline decoration-pink-500">vigilant to information sources.</span> -->
          </h3>
        </div>
        <div class="col-span-2 bg-white w-[300px] h-[190px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 2 : Expand social network</span><br>
            The elderly want to join activities with their friends,
            and are STILL willing to make new friends with similar interests and hobbies.
            <!-- <span class="underline decoration-pink-500">join activities with their friends</span>,
            and are
            <span class="underline decoration-pink-500">STILL willing to make new friends with similar interests and
              hobbies.</span> -->
          </h3>
        </div>
      </div>
    </div>


    <!-- Persona -->
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">DEFINE - Persona</h3>
      <h4 class="text-lg font-medium">We want to integrate our research findings into persona so that every teammates in our group can clearly understand the user profile and focus on our users to design features for them.</h4>
    </div>
    <div  class="pl-5 md:pl-10 col-span-4 text-center">
      <img class="w-full px-20 md:w-4/5" src="@/assets/Meeture/Persona_JakeLee.png" alt="Persona" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">DEFINE - Point of View (PoV) & How Might We (HMW)</h3>
      <h4 class="text-lg font-medium">In order to <b>define clear problems of our users and also help us clarify users' needs</b>, we tried to implement PoV method to emphasize users. <br><br>Next, we can apply "how might we" method to <b>ideate the problem and brainstorm the design strategies.</b></h4>
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2">
      <!-- <div class="p-5 rounded-lg shadow-lg bg-gray-100 max-w-sm my-8">
        <h4 class="md:text-lg text-md">
          <span style="background: yellow; padding: 3px"
              >Finding 1 : Living attitude of the elderly</span
            ><br>
            The elderly live regular lives, are afraid of making changes, and are
            vigilant to information sources.
        </h4>
      </div> -->
      <h2 class="text-lg md:text-xl text-orange-700">
          Finding 1 :
        </h2>
      <h2 class="text-lg md:text-xl">
        PoV: As a [Role], I want [Feature] because of [Some Reason].
      </h2>
      <h4 class="text-lg font-medium">As a retired older adult who eagers to participate in activities but lacking the information sources, wants to have platforms that would secure their personal and information privacy because they are afraid of fake news issues and scam.</h4>
      <!-- <ul class="text-md md:text-lg font-medium">
        <li>
          <b>As a retired older adult</b> who wants to participate in activities but lacking the information sources,
        </li>
        <li>wants to have 
          platforms that would <b>secure their personal and information privacy</b></li>
        <li>because <b>they are afraid of fake news issues and scam.</b></li>
      </ul> -->
      <h2 class="text-lg md:text-xl">
        How Might We 
      </h2>
      <h4 class="text-lg font-medium">How might we establish the trust of the platform for users?</h4>
      <!-- <ul class="text-md md:text-lg font-medium">
        <li>
          <b>How might we</b> establish the trust of the platform for users? <br>➔ How might we <b>reduce users' worries by bringing better security specifications design?</b>
        </li>
      </ul> -->
      
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2">
      <!-- <div class="bg-gray-100 p-5 rounded-lg shadow-lg max-w-sm my-8">
        <h4 class="md:text-lg text-md">
          <span style="background: yellow; padding: 5px 3px"
              >Finding 2 : Expand social network</span><br>
            The elderly want to
            <span class="underline decoration-pink-500">join activities with their friends</span>,
            and are
            <span class="underline decoration-pink-500">STILL willing to make new friends with similar interests and
              hobbies.</span>
        </h4>
      </div> -->
      <h2 class="text-lg md:text-xl text-orange-700">
          Finding 2 :
        </h2>
      <h2 class="text-lg md:text-xl">
        PoV: As a [Role], I want [Feature] because of [Some Reason].
      </h2>
      <h4 class="text-lg font-medium">As a retired older adult who wants to participate in activities but lacking the information sources, wants to participate in activities with acquaintances because they feel more comfortable.</h4>

      <h2 class="text-lg md:text-xl">
        How Might We 
      </h2>
      <h4 class="text-lg font-medium">How might we let users know their friends would come to the activities?</h4>

      <!-- <h2 class="px-10 md:px-0 text-lg md:text-xl">
        As a [Role], I want [Feature] because of [Some Reason].
      </h2>
      <ul class="text-md md:text-lg font-semibold">
        <li>
          <b>As a retired older adult</b> who wants to participate in activities but lacking the information sources,
        </li>
        <li>wants to <b>participate in activities with acquaintances</b></li>
        <li>because they feel<b> more comfortable.</b></li>
      </ul>
      <h2 class="px-10 md:px-0 text-lg md:text-xl">
        How Might We
      </h2>
      <ul class="text-md md:text-lg font-semibold">
        <li>
          <b>How might we</b> let users know their friends would come to the activites?<br>➔ How might we <b>who is interested or who is going to participate in this event?</b>
        </li>
      </ul> -->
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">IDEATE - Brainstorming design ideas</h3>
      <h4 class="text-lg font-medium">After implementing POV and HMW methods, we used How Might We questions to brainstorm lots of ideas on the Miro. <br><br>Then, we used 3 criterias (creativity, personal preference, prospective design for future development) to vote for our final design idea.</h4>
    </div>


    <div 
      class="col-span-4">
      <img class="w-full" src="@/assets/Meeture/brainstorming.jpg" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">PROTOTYPE - Experience Prototype</h3>
      <h4 class="text-lg font-medium">In order to make all team members easier to engage in the elderly's experiences and the design flow, we decided to draw the experience prototype before the interface design.</h4>
    </div>

    <div 
      class="col-span-4">
      <img class="w-full" src="@/assets/Meeture/experiencePrototype.jpg" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">PROTOTYPE - Low-Fidelity & Task flow</h3>
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2">
        <h2 class="text-lg md:text-xl">
          Finding 1 :
        </h2>
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg font-medium italic "><b>Apply LINE official account to start the journey</b><br><br><b>WHY?</b><br><br><b>LINE is a messaging platform Taiwanese older adults mostly use in their daily life. </b>Since they have many connections on LINE and LINE is their familiar product, we wanted to use LINE official account as the entry point to share our product with them and reduce their concern.</h4>
    </div>

    <div  class="pl-5 md:p-10 flex flex-wrap items-center col-span-4 text-center">
        <img class="w-full md:w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow1.png" alt="" />
        <img class="w-full md:w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow2.png" alt="" />
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 mt-8">
        <h2 class="text-lg md:text-xl underline decoration-yellow-500">
          Finding 2
        </h2>
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-md md:text-lg font-medium italic text-left"><b>Features of "Who also find interested" and "Sharing button via LINE"</b> <br><br><b>WHY?</b><br>First of all, older adults want to join activities with their friends. If they can know who is going to the event, there is a higher chance for them to join.<br> <br>Secondly, we make the sharing process much easier by integrating sharing button with LINE so that older adults can share the inviting link with their friends on the LINE chat channel.</h4>
    </div>

    <div  class="pl-5 md:px-10 mt-10 flex flex-wrap items-center col-span-4 text-center">
        <img class="w-full md:w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow3.png" alt="" />
        <img class="w-full md:w-1/2 shadow-lg" src="@/assets/Meeture/TaskFlow4.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">TEST - Usability testing</h3>
      <h4 class="text-lg font-medium">Since we are making our low prototype design now, we want to check <b>if these ideated features fit our users' needs</b> or not in the early stage.<br><br>Therefore, we decided to implement usability testing to know <b>how users think about the design, how users will interact with these feature, and what we can improve our design, etc.</b></h4>
      <h4 class="text-xl mt-10 md:mt-20">
        How we implement the testing?
      </h4>
    </div>
    
    <div class="px-10 col-span-4 text-center">
        <div style='background-color:rgb(255, 255, 255)'>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pb-20" style="cursor: auto;">
            
          <div class="p-10 md:p-6 bg-gray-100 rounded-lg">      
            <div class="mb-5">
              <n-icon color="#000" size="70">
                <number1></number1>
              </n-icon>
            </div>   
            <h3 class="text-[18px] md:text-lg font-bold mb-2">
              Introduce our project
            </h3>
            <p class="text-[16px] md:ttext-[17px] leading-6 text-gray-600">
              What is Meeture?<br>
              What is our goal?<br>
              What is the research stage now?<br>
            </p>  
          </div>
              
          <div class="p-10 md:p-6 bg-gray-100 rounded-lg">         
            <div class="mb-5">  
              <n-icon color="#000" size="70">
                <number2></number2>
              </n-icon>     
            </div>
            <h3 class="text-[18px] md:text-lg font-bold mb-2">
              Introduce<br> “Thinking aloud” method
            </h3>
            <p class="text-[16px] md:ttext-[17px] leading-6 text-gray-600">
              ● Users have to speak out their all ideas and implementing process.<br><br>
              ● Users are free to share any feelings, suggestions to the testers.
            </p>
          </div>
            
          <div class="p-10 md:p-6 bg-gray-100 rounded-lg" style="cursor: auto;">   
          <div class="mb-5" style="cursor: auto;">
            <n-icon color="#000" size="70">
                <number3></number3>
              </n-icon> 
          </div>
            <h3 class="text-[18px] md:text-xl font-bold mb-2">
              Explain Testing Process
            </h3>
            <p class="text-[16px] md:ttext-[17px] leading-6 text-gray-600">
              ● These paper are used to simulate the "mobile platform interface" <br>you need to touch the blocks on the paper to simulate the operation platform and complete the task<br><br>
              ● Next, here will be scenarios and tasks you need to be done. (details will be explained later)
            </p>    
          </div>
            
          <div class="p-10 md:p-6 bg-gray-100 rounded-lg">    
            <div class="mb-5">  
              <n-icon color="#000" size="70">
                <number4></number4>
              </n-icon>  
            </div>
                    
            <h3 class="text-[18px] md:text-xl font-bold mb-2">
              Starting Testing
            </h3>
            <p class="text-[16px] md:text-[17px] leading-6 text-gray-600">
              Explain scenarios and tasks respectively.<br><br>
              Reminder: If they feel that task is completed, report "Mission Completed" to testers.
            </p>  
          </div> 
        </div>
      </div>
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h1 class="text-xl">Testing Results : </h1>
      <h4 class="md:pt-10 text-md md:text-lg font-medium text-left">
        <b>Scenario 2:</b> <br>After knowing more about Meeture platform, you feel interested in thie product. <br><br>
        <b>Task 2:</b><br>You want to join as a member.
      </h4>
      <h4 class="text-md md:text-lg font-medium text-left">
        <b class="text-orange-700">Testing feature:</b> <br>Interests filter page
      </h4>
    </div>
    <div 
      class="col-span-4">
      <img class="w-full" src="@/assets/Meeture/usabilityTestResult.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-green-700">TEST - Heuristic Evaluation</h3>
      <h4 class="text-lg font-medium">Since I am the only person who has experience in Figma prototype design, and also the main interface designer in our team, we decided to invite other experts in UX field to help craft our interface and feature design. <br><br>Therefore, we chose to implement heuristic evaluation after Mid-Fi prototype.</h4>
      <h1 class="text-xl mt-10 md:mt-20">How we implement the testing?</h1>
    </div>
    <div class="flex flex-wrap items-center justify-center col-span-4 text-center pt-10">
      <!-- 1 card -->
      <div class="relative bg-white py-6 px-6 md:px-12 mx-6 rounded-3xl w-full sm:w-2/3 md:w-1/3 m-12 md:my-4 shadow-xl">
        <div class="text-white flex items-center absolute rounded-full py-3 px-3 shadow-xl bg-pink-500 left-4 -top-4">
            <n-icon color="#fff" size="30" depth="1">
              <user-speaker></user-speaker>
            </n-icon>
        </div>
        <div class="mt-8">
          <p class="text-xl font-semibold my-2">1. Introduction</p>
          <div class="text-gray-400 text-sm text-left md:pl-3">
              <p class="text-[16px] md:text-lg font-medium">
                ● Project Introduction<br>
                ● Introduction of heuristic evaluation<br>
                ● “Thinking aloud” any ideas<br>
                ● Information consent<br>
              </p> 
          </div>
        </div>
      </div>

      <!-- 2 card -->
      <div class="relative bg-white py-6 px-6 md:px-12 mx-6 rounded-3xl w-full sm:w-2/3 md:w-2/5 m-12 md:my-4 shadow-xl">
        <div class="text-white flex items-center justify-center absolute rounded-full py-3 px-3 shadow-xl bg-green-500 left-4 -top-3">
          <!-- svg  -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div class="mt-8">
          <p class="text-xl font-semibold my-2">2. Testing Procedures</p>
          <div class="text-gray-400 text-sm text-left md:pl-3">
            <p class="text-[16px] md:text-lg font-medium">
              ● Testers will tell participants scenario and task<br>
              ● Participants use and test features on the Figma prototype (computer only) and report any ideas<br>
              ● Participants have to answer questions from 10 Usability Heuristics <br>
            </p>                        
          </div>  
        </div>
      </div>
    </div>
    <div 
      class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h1 class="text-xl">Online testing pictures</h1>
      <h4 class="text-md md:text-lg font-medium text-left">
        We found 2 participants in the UIUX field. (recruited from our friend network)<br><br>
        <b>Left Picture: </b>The girl was a digital product designer, now a UX master's student.<br>
        <b>Right Picture: </b>The boy is a UIUX designer intern.<br>
      </h4>
    </div>
    <div class="px-8 col-span-4 text-center">
      <img class="p-4 w-1/2 h-full" src="@/assets/Meeture/HeuristicPic1.png" alt="testing pictures" />
      <img class="p-4 w-1/2 h-full" src="@/assets/Meeture/HeuristicPic2.png" alt="testing pictures" />
    </div>

    <div 
      class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h1 class="text-xl mb-10">Testing Results</h1>
      <h4 class="text-lg">
        Usability Heuristic #4 : Consistency
      </h4>
      <h4 class="text-lg font-medium">
        <b>Question :</b> <br> Do you feel that the design of the LINE chatbot page and Meeture website is <b>uniform and unified?</b>
      </h4>
      <h4 class="maxsm:pt-10 text-lg">
        Usability Heuristic #5 : Error Strategy
      </h4>
      <h4 class="text-lg font-medium">
        <b>Question :</b> <br> Have you ever encountered a situation where you <b>don't know how to operate</b>, and our platform <b>doesn't given you any hints?<br><br></b>
        <b class="text-orange-700">Revised Feature :</b> <br> <b>Navigation Bar</b>
      </h4>
    </div>

    <div class="lg:ml-10 col-span-4 text-center">
      <!-- <h1 class="text-xl md:text-3xl font-bold">Competitor Analysis</h1> -->
      <img class="w-full" src="@/assets/Meeture/HeuristicResult.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg">
        Usability Heuristic #2 : Match between system and real world
      </h4>
      <h4 class="text-lg font-medium">
        <b>Question :</b> <br>Have you encountered any problems when <b>reading and operating the features</b> on the pages?
      </h4>
      <h4 class="maxsm:pt-10 text-lg">
        Usability Heuristic #3 : Error Strategy
      </h4>
      <h4 class="text-lg font-medium">
        <b>Question :</b> <br> Was it <b>easy to switch to a different page</b> in the previous tasks?, and our platform <b>doesn't given you any hints?<br><br></b>
        <b class="text-orange-700">Revised Feature :</b> <br> <b>Top Menu at activity page</b>
      </h4>
    </div>

    <div 
      class="lg:ml-10 col-span-4 text-center">
      <!-- <h1 class="text-xl md:text-3xl font-bold">Competitor Analysis</h1> -->
      <img class="w-full" src="@/assets/Meeture/HeuristicResult2.png" alt="" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-green-700">IDEATE - High-Fidelity Prototype</h3>
      <h4 class="text-lg">After going through the heuristic evaluation, we finalized our final high-fidelity prototype. Here are some scenario flow and features.</h4>
    </div>

    <div 
      class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg font-medium">
        <b>Scenario 1 :</b> Your friend recommend Meeture LINE official account link to you, and you want to know more about this platform.
      </h4>
    </div>
    <div class="lg:ml-4 col-span-4 text-center">
      <!-- <h1 class="text-xl md:text-3xl font-bold">Competitor Analysis</h1> -->
      <img class="w-full md:w-5/6" src="@/assets/Meeture/family_recommend.png" alt="" />
    </div>
    <div 
      class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="mt-10 text-lg font-medium">
        <b>Scenario 4 :</b> You want to invite your friend to join the event together.
      </h4>
    </div>
    <div 
      class="lg:ml-4 col-span-4 text-center">
      <!-- <h1 class="text-xl md:text-3xl font-bold">Competitor Analysis</h1> -->
      <img class="w-full md:w-4/5" src="@/assets/Meeture/friend_sharing.png" alt="" />
    </div>


    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-green-700">DEVELOP - Meeture Website</h3>
      <!-- <h4 class="sm:text-md md:text-lg font-normal text-left">In order to <b>define clear problems of our users and also help us clarify users' needs</b>, we tried to implement PoV method to emphasize users. <br><br>Next, we can apply "how might we" method to <b>ideate the problem and brainstorm the design strategies.</b></h4> -->
    </div>
    <div 
      class="mt-10 md:mt-20 maxsm:mx-4 col-span-4 text-center">
      <!-- <h1 class="text-xl md:text-3xl font-bold">Competitor Analysis</h1> -->
      <img class="w-full md:w-5/6" src="@/assets/Meeture/Development.png" alt="" />
    </div>

    <!-- <div class="col-span-4 md:col-start-2 md:col-span-2 my-20">
      <div class="relative maxsm:mx-4 md:ml-32 h-[500px] md:h-[600px]"> 
        <iframe
            class="responsive-iframe" 
            src="https://meeture.herokuapp.com/"
        ></iframe>
      </div>
    </div> -->

    <div class="px-10 md:px-5 mt-10 md:mt-20 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-green-700">Challenges and Reflections</h3>
      <h4 class="text-lg font-medium">This is the first time for me to design products for the elderly. During the interviews and usability testing, the elderly showed their uncertainty when interacting with electronic devices. Therefore, we had to spend more time explaining features and our ideas clearly to them. At that moment, I realized the necessity of empathy, and researchers really need to put ourselves into their shoes to understand their concerns.<br><br>However, when designing products for the elderly, I saw my knowledge gap in making accessible design since many interviewees suffering from presbyopia expressed their frustration in reading the small text on our website. This project experience was my rudimentary attempt to understand accessible design to help diverse groups of older people easily access technology.</h4>
    </div>

    <div class="px-10 md:px-5 mt-4 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-green-700">What's next?</h3>
      <h4 class="text-lg font-medium">After the course project, we joined the competition, "Stanford Center on Longevity Design Challenge Asia, Taiwan" where we pushed our ideas forward to think about how can we craft our activity ideas into the real place and the environment. <br><br> We also got some feedback to help us reflect our product value.<br><br> I believe we should interview more stakeholders such as activity organizers, local elderly community or organizations to learn more about their experiences when joining activities to explore deeper insights to bring new design for them.</h4>
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2">
      <h3 class="text-lg md:text-xl text-green-700">Some Pictures</h3>
    </div>

    <div class="flex flex-wrap px-8 md:mx-20 col-span-4">

      <img class="p-4 w-1/2 shadow-lg" src="@/assets/Meeture/contest1.jpeg" alt="contest pictures" />
      <img class="p-4 w-1/2 shadow-lg" src="@/assets/Meeture/contest2.jpeg" alt="contest pictures" />
      <img class="p-4 w-1/3 shadow-lg" src="@/assets/Meeture/contest3.jpeg" alt="contest pictures" />
      <img class="p-4 w-1/3 shadow-lg" src="@/assets/Meeture/contest4.jpeg" alt="contest pictures" />
      <img class="p-4 w-1/3 shadow-lg" src="@/assets/Meeture/contestGroupPic.jpeg" alt="group pictures" />
      <img class="p-4 w-1/2 shadow-lg" src="@/assets/Meeture/AffinityDiagram1.jpg" alt="affinityDiagram pictures" />
      <img class="p-4 w-1/2 shadow-lg" src="@/assets/Meeture/AffinityDiagram2.jpg" alt="affinityDiagram pictures" />
      <img class="p-4 w-1/3 shadow-lg" src="@/assets/Meeture/testing1.png" alt="testing pictures" />
      <img class="p-4 w-1/3 shadow-lg" src="@/assets/Meeture/testing2.jpg" alt="testing pictures" />
      <img class="p-4 w-1/3 shadow-lg" src="@/assets/Meeture/testing3.jpg" alt="testing pictures" />
    </div>
  </div>
  <div class="grid grid-cols-4 bg-slate-200 mt-20">
    <div class="maxsm:col-span-4 sm:col-span-2 mt-0 md:mt-10 w-full">
      <next-button :project-num="num" :name="name"></next-button>
    </div>
    <div class="maxsm:col-span-4 sm:col-span-2">
      <img class="m-0 sm:mt-20 mb-8 md:mb-16 w-4/5 sm:w-10/12" src="@/assets/Podcast/PodcastCover.png" alt="project image" />
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
