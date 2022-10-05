<template>
  <div
    class="bg-gradient-to-r from-blue-200 via-purple-300 to-red-200 pb-16 md:pb-28 pt-40 flex flex-wrap items-center justify-center"
  >
    <img
      class="w-4/5 md:w-3/5 px-1 md:px-2 mt-12 animate__lightSpeedInRight animate__slow"
      src="@/assets/Podcast/PodcastCover.png"
      alt=""
    />
  </div>

  <div class="mt-8 grid grid-cols-4 gap-3 text-left pb-2">
    <div class="px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <h1 class="text-xl md:text-3xl font-bold">Background of side project</h1>
      <p class="text-lg font-base">
        In the 2020 summer, <b>I proactively launched a post to find teammates to conduct UX side projects</b> at the Facebook group, <i>"Taiwan UI/UX Designers".<br><br></i> My goal was to <b>spend more time diving into user research methods</b> with people in the UX fields and <b>accumulate project experiences.</b>
      </p>
    </div>
    <div class="px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <h1 class="text-xl md:text-3xl font-bold">Overview</h1>
      <p class="text-lg font-base">
        <b>OwnVoice</b> is a Podcast platform craving to bring <b>organized and clear information</b> to the Podcast listeners.<br><br>
        Also, we have <b>"Inspiration Card" feature</b>, hoping to recommend Podcast listeners <b>diverse Podcast shows and episodes by swiping cards</b> so that people can explore new creations in a simple, effortless way.
      </p>
    </div>
    <div class="border-2 border-indigo-600 px-10 md:pl-20 md:p-0 md:col-start-2 col-span-4 md:col-span-2">
      <div class="rounded overflow-hidden shadow-xl">
        <div class="px-6 py-6">
          <h1 class="font-bold text-lg md:text-xl mb-2">Team</h1>
          <p class="text-md md:text-lg font-base">
            Wei-Ko Li, Cecilia Chou, Vivian Chiang<br />
            Michelle Lee, Ryan Liao, Jhan Yan Lin
          </p>
          <h1 class="font-bold text-lg md:text-xl mb-2">Time</h1>
          <p class="text-md md:text-lg font-base">July 2020 - - December 2021</p>
          <h1 class="text-lg md:text-xl font-bold">My Role</h1>
          <ul class="text-md md:text-lg list-disc"> 
              <li>Team Leader</li>
              <li>User Researcher</li>
              <li>Medium documentation writer</li>
          </ul> 
          <h1 class="font-bold text-lg md:text-xl">User research methods</h1>
          <p class="text-gray-700 text-base">
            <ul class="text-md md:text-lg list-disc">
              <li>Surveys</li>
              <li>User Interview</li>
              <li>Point of View (PoV) & How Might We (HMW)</li>
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
            >Miro</span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >Medium</span
          >
        </div>
      </div>
    </div>
    <div class="col-span-4 bg-gradient-to-r from-orange-100 to-red-100 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-xl md:text-3xl font-bold">Problem</h1>
      <p class="text-lg md:text-xl font-medium leading-7">
        Some of our team members are <b class="text-orange-700">Podcast listeners</b> , they felt annoyed and difficult when using the platforms.<br><br>For example,<br>1. weak bonding between Podcasters and listeners since there are <b class="text-orange-700">few social connections and interactive features</b> within Podcast apps so that they need to change platforms to connect with the Podcasters.<br>2. unorderly information displayed on the interface.Therefore, our group wanted to take a research on Podcast platforms and <b class="text-orange-700">find out pain points of listener</b> and <b class="text-orange-700">design a new Podcast app </b>to solve their problems.
      </p>
    </div>
    <div 
      class="maxsm:hidden pl-5 md:px-10 py-16 col-span-4 text-center">
      <h1 class="text-xl md:text-3xl font-bold p-20">Research Process</h1>
      <img class="w-full" src="@/assets/Podcast/ResearchProcess.png" alt="research process" />
    </div>
    <div 
      class="maxsm:block hidden pl-5 md:px-10 col-span-4 text-center">
      <h1 class="text-xl md:text-3xl font-bold p-20">Research Process</h1>
      <img class="w-2/3" src="@/assets/Podcast/ResearchProcessMobile.png" alt="research process" />
    </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700 border-l-orange-700 border-2">EMPATHIZE - Online survey</h3>
      <h2 class="text-lg md:text-xl font-medium">To better understand users' usage habits and to collect information quickly from the podcast listeners, we chose to apply the online survey methods.</h2>
      <h2 class="pt-2 text-lg md:text-xl font-medium">
        <b>Survey Questions types</b><br><br>
        ● Podcast listening habits & listening content<br>
        ● Podcast Listening Devices & Platforms<br>
      </h2>
      <h2 class="pt-2 text-lg md:text-xl font-medium">
        <b>Online Survey Tool</b><br><br>
        <span class="italic">SurveyCake</span>
      </h2>
      <h2 class="pt-2 text-lg md:text-xl font-medium">
        <b>Respondents</b><br><br>
        237 replies<br>
        <b>● Gender:</b> Woman (70%) | Man (29.9%)<br>
        <b>● Professions:</b> Students (50.6%) | Technology industry (13.5%)<br>
        <b>● Age:</b> 20~29 (72.5%) | 30~39 (14.7%)<br>
      </h2>

      <h2 class="pt-8 text-lg md:text-xl text-left text-orange-700">
        <b>Final Results</b>
      </h2>
    </div>

    <div 
      class="pl-5 py-8 col-span-4 text-center">
      <img class="w-2/3" src="@/assets/Podcast/surveyResult.png" alt="survey result" />
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700 border-l-orange-700 border-2">EMPATHIZE - User Interview</h3>
      <h2 class="text-lg md:text-xl font-medium">In order to deeper understand users' listening experinces, we recruited <b>7 people</b> for semi-structured interview.</h2>
      <h4 class="text-lg font-medium"><b>Participants Recruiting Criteria:</b><br> 
        In order to ask <b class="text-orange-700">deeper aspects and experiences</b> from the participants, we chose people who are <b>long-term users</b> (used at least 3 months).<br>
        Also, we referenced their <b>Podcast listening frequency</b> and chose participants who mostly have high frequency usage (> 7 times/week).<br><br>
        Since our goal was to <b class="text-orange-700">design a new Podcast platform</b>, we want to know Podcast <b>listeners' challenges and difficulties</b> when using their platforms.<br>
        We referenced their satisfied scale to choose the participants evenly based on the response ratio.<br>
        (Very Satisfied: 3, Satisfied: 1, Neutral: 2, Unsatisfied: 1)<br><br>
        To enhance <b>diversity</b> of our participants, we picked up people from different professions, ages, and genders.<br><br>
        <b>Professions:</b><br> Students(3), Technology Industry(2), Car business(1), Media Industry(1)<br>
        <b>Ages:</b><br>20~29 (6), 30~39 (1)<br>
        <b>Genders:</b><br> Woman (5), Man (2)
      </h4>
    </div>

    <!-- FINDINGS -->
    <div class="col-span-4 bg-cyan-800 px-10 lg:px-40 py-20 mt-20">
      <h1 class="text-center text-3xl md:text-4xl font-bold pb-10  text-white">Research Findings</h1>
      <div class="flex flex-wrap items-center justify-evenly">
        <div class="col-span-2 bg-white w-[350px] h-[200px] sm:h-[150px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 1 : </span
            ><br>
           Users think that podcast exploration results are not diverse enough.
          </h3>
        </div>
        <div class="col-span-2 bg-white w-[300px] h-[190px] p-3 m-5">
          <h3>
            <span style="background: yellow; padding: 3px"
              >Finding 2 : </span><br>
              Users think that the information display is cluttered and cannot find the target information efficiently.
          </h3>
        </div>
      </div>
    </div>

    <!-- Persona -->
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">DEFINE - Persona</h3>
      <h4 class="text-lg font-medium">Since we have interviewed 7 people with very different personalities and habits when using Podcast platforms, we want to integrate our research findings into persona building. Therefore, we can clearly take a look at what type of users we are going to design for.</h4>
    </div>
    <div  class="pl-5 md:p-10 col-span-4 text-center">
      <img class="w-full px-20 md:w-5/6 shadow-lg" src="@/assets/Podcast/Persona.jpg" alt="HMW" />
    </div>

    <!-- How Might We  -->
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">DEFINE - How Might We (HMW)</h3>
      <h4 class="text-lg font-medium">For better ideatation and brainstorming from our research findings, we chose to apply How Might We method to help us break down questions and clearly define users' needs.</h4>
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2">
      <h2 class="text-lg md:text-xl">
        How Might We (Finding 1)
        </h2>
      <h4 class="text-lg font-medium">How might we let users feel fresh on the platform?<br><br>How might we let users want to keep staying on the platform?<br><br>How might we design the exploring procedure so that users can be intrigued by the app?</h4>
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2">
      <h2 class="text-lg md:text-xl">
        How Might We (Finding 2)
        </h2>
      <h4 class="text-lg font-medium">How might we let users efficiently catch up on the information of the episode?<br><br>How might we let users flexibly change the display of information?</h4>
    </div>

    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h1 class="text-xl md:text-2xl">
        Challenge
      </h1>
      <h4 class="text-lg font-medium">However, we didn't specifically identify the reasons for<br><br><span class="underline">"Why"</span> we wanted to code with each HMW questions.<br><br><span class="underline">"How"</span> we wanted to address such question.<br><br><span class="underline">by "What"</span> design methodologies, which resulted in ambiguity of our design.</h4>
      <h1 class="mt-10 text-xl md:text-2xl text-orange-700">
        Solution
      </h1>
      <h4 class="text-lg font-medium">However, we didn't specifically identify the reasons for<br><br>We decided to write down the <span class="underline">"User Story"</span><br> to zoom in from Why, How and What of our <span class="underline">product features and users' needs.</span><br></h4>
      <h4 class="text-lg font-medium italic">As a ... users, (Why & Who)<br><br>I want to ... (What),<br><br>so that I can ... (How)</h4>
    </div>
  </div>
  <!-- POV with HMW -->
  <div
    class="pjt-content"
    style="margin: 10%; grid-gap: 30px 70px; justify-content: center"
  >
    <div class="title">
      <h2 style="border: none; text-align: left">
        <span class="underline diffcolor"> How Might We</span><br />
        (Finding 1)
      </h2>
    </div>
    <div class="title">
      <h2 style="border: none; text-align: left">
        <span class="underline"> User Story</span>
      </h2>
    </div>
    <div class="content">
      <p style="max-width: 300px">
        How might we let users feel fresh on the platform?
      </p>
    </div>
    <div class="content">
      <p>
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
      <h2 style="border: none; text-align: left">
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
      <p>
        <span class="underline diffcolor">As a user</span> don't want to waste
        time, <br /><br />
        <span class="underline diffcolor">I want to</span> know the hot spot of
        each episode,<br /><br />
        <span class="underline diffcolor">So that I would</span> efficiently
        know about the information of the episode.
      </p>
    </div>
  </div>
  <div class="mt-8 grid grid-cols-4 gap-3 text-left pb-2">
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">IDEATE - Brainstorming design ideas</h3>
      <h4 class="text-lg font-medium">Based on the user stories and How Might We questions, we started to brainstorm ideas. We firstly wrote down our ideas on the sticky notes then drawed some features on the white board to help everyone better understand.</h4>
    </div>
    <div  class="pl-5 md:p-10 col-span-4 text-center">
      <img class="w-full px-4 md:w-1/2 shadow-lg" src="@/assets/Podcast/Ideate1.jpg" alt="Ideate" />
      <img class="w-full px-4 md:w-1/2 shadow-lg" src="@/assets/Podcast/Ideate2.jpg" alt="Ideate" />
   </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg font-medium">Before moving on to the prototype stage, we needed to draw a clear mind map of the information architecture of our Podcast platforms. </h4>
    </div>
    <div  class="pl-5 md:p-10 col-span-4 text-center">
        <img class="w-full px-4 md:w-5/6 shadow-lg" src="@/assets/Podcast/Podcast_mindmap.png" alt="Ideate" />
    </div>

    <!-- Low-Fi & Mid-Fi Prototype -->
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl text-orange-700">PROTOTYPE - Mid-Fidelity Prototype</h4>
    </div>
    <div  class="pl-5 md:p-10 col-span-4 text-center">
        <img class="w-full md:w-3/5 shadow-lg" src="@/assets/Podcast/MidFi_explore.png" alt="Mid-Fi" />
        <img class="w-full md:w-full shadow-lg" src="@/assets/Podcast/MidFi_search.png" alt="Mid-Fi" />
    </div>


    <!-- Testing -->
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">TEST - Usability Testing</h3>
      <h4 class="text-lg font-medium">After designing Mid-Fidelity prototype, we recruited 5 participants to conduct usabilty testing.</h4>
      <h4 class="text-xl mt-10">
        How we implement the testing?
      </h4>
      <h4 class="text-lg font-medium">
        <b>Disclaimer: </b><br>
        ● Due to covid-19, we all conducted online testing.<br>
        ● Before the testing, we sent out testing documentation to all the participants to help them better understand what they will do during testing process, and how to setup the online testing environment (Google meet and sharing screen function) before the test.
      </h4>
    </div>

    <div class="px-10 col-span-4 text-center">
      <div style='background-color:rgb(255, 255, 255)'>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-10 pb-10 lg:pb-20" style="cursor: auto;">
          
        <div class="p-10 md:p-6 bg-gray-100 rounded-lg">      
          <div class="mb-5">
            <n-icon color="#000" size="70">
              <number1></number1>
            </n-icon>
          </div>   
          <h3 class="text-lg font-bold mb-2">
            Introduce our project
          </h3>
          <p class="text-left text-[16px] md:text-[17px] leading-6 text-gray-600">
            ● What is this project for?<br>
            ● What is our goal?<br>
            ● What is the research stage now?<br>
            ● Why do we want to conduct testing now?<br>
            <br>
          </p>  
        </div>
            
        <div class="p-10 md:p-6 bg-gray-100 rounded-lg">         
          <div class="mb-5">  
            <n-icon color="#000" size="70">
              <number2></number2>
            </n-icon>     
          </div>
          <h3 class="text-lg font-bold mb-2">
            Introduce Testing Goal
          </h3>
          <p class="text-left text-[16px] md:text-[17px] leading-6 text-gray-600">
            ● Test whether the flow and information structure of the currently designed function meet the user's expectations.<br><br>
            ● Understand how users think about the features and what value it brings to them.<br><br>
            ● Understand what users think about the entire product. (e.g. their favorite parts, anything makes them feel strange or confused)<br><br>
            ● Understand what users think about the entire product.<br><br>
          </p>
        </div>
          
        <div class="p-10 md:p-6 bg-gray-100 rounded-lg" style="cursor: auto;">   
        <div class="mb-5" style="cursor: auto;">
          <n-icon color="#000" size="70">
              <number3></number3>
            </n-icon> 
        </div>
          <h3 class="text-lg font-bold mb-2">
            Explain Testing Process
          </h3>
          <p class="text-left text-[16px] md:text-[17px] leading-6 text-gray-600">
            ● Introduce our roles in the testing (who is the main tester, who will take notes)<br><br>
            ● Introduce our testing tool (Figma) and explain how to use the prototype.<br><br>
            ● Explain meanings of "scenario" and "task" during testing and demonstrate an example to use the Figma prototype to finish the task.<br><br>

          </p>    
        </div>
          
        <div class="p-10 md:p-6 bg-gray-100 rounded-lg">    
          <div class="mb-5">  
            <n-icon color="#000" size="70">
              <number4></number4>
            </n-icon>  
          </div>    
          <h3 class="text-lg font-bold mb-2">
            Starting Testing
          </h3>
          <p class="text-left text-[16px] md:text-[17px] leading-6 text-gray-600">
            Explain scenarios and tasks respectively.<br><br>
            Reminder: If they feel that task is completed, report "Mission Completed" to testers.
          </p>  
        </div> 
      </div>
    </div>

    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl">Testing method and criteria</h4>
      <h4 class="text-lg mt-10 font-medium">
        We referenced the online tutorial, <b>"Guerrilla Usability Testing"</b> in our research, to use quantitative data to help us understand our design problems.<br><br>
        For example, we tried to <b>capture tasks completion.</b><br>
        ● We set the timer to track how long should users finish the tasks.<br>
        ● We mark 1 to 3 points to know how easier or difficult tasks might be for users.<br>
        <span class="italic">If users can finish the task quickly and with no problems, we mark 3<br>
        If users can perform the task but have some problems, we mark 2<br>
        If users cannot finish the task, we mark 1</span><br>
      </h4>
      <h4 class="pt-4 text-lg font-medium">
        Also, we applied <b>10 points Likert scale</b> to help use understand<br>
        ● How easy or difficult do users feel when doing this task?<br>
        ● How satisfied do they feel about the task and features?<br>
        ● How understandable for our feature design?
      </h4>
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl">Testing results</h4>
    </div>

    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl text-orange-700">Feature 1: Random Inspiring Cards (inspired by finding 1)</h4>
      <h4 class="text-lg font-medium">Recommend new episodes to users, so that that can feel fresh and novel when they are using our Podcast app.<br><br>We applied A/B test to evaluate our design</h4>
      <h4 class="text-lg md:text-xl">Task:</h4>
      <h4 class="text-lg font-medium">"You can try random inspiring cards to explore new episodes and audition tapes. <br>Could you try to find the function in this app?"
      </h4>
      <h4 class="text-lg md:text-xl">Version A:</h4>
      <h4 class="text-lg font-medium">We put the button in <b>exploring page.</b><br>Users need to click "search" icon then get to see random inspiring cards.</h4>
      <h4 class="text-lg md:text-xl">Version B:</h4>
      <h4 class="text-lg font-medium">We put the button in <b>main tab.</b><br>Users can directly click the "card" icon to get to the page.
      </h4>
    </div>
    <div  class="col-span-4 text-center">
      <img class="w-full shadow-lg" src="@/assets/Podcast/Wireframe_RIC_flow.png" alt="random inspiring cards" />
    </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl text-orange-700">Decision: Version B</h4>
      <h4 class="text-lg md:text-xl font-medium"><b>Quantiative rating points:</b><br><br><b>Average satisfied value: </b>(Total: 10)<br>
        Version A: 7.2<br>
        <b>Version B: 10</b><br><br>
        <b>Average point for how easy do they feel about the task: </b>(Easiest: 10)<br>
        Version A: 7.7<br>
        <b>Version B: 10</b></h4>
      <h4 class="text-lg md:text-xl font-medium"><b>Users' feedback:</b><br>Most of the participants think that <b>"random inspiring cards" is an important and special feature</b> in this app, so the functional button should be put in the <b>main tab</b> to emphasize the function.</h4>
    </div>
    <!-- Test feature 2 -->
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl text-orange-700">Feature 2: Customized Homepage sections (inspired by finding 2)</h4>
      <h4 class="text-lg md:text-xl">Task:</h4>
      <h4 class="text-lg font-medium">"In this podcast app, you have subscribed to lots of favorite shows, and you also want to see the latest episodes of the show on the homepage. <br>Therefore, you want to adjust the content order of the homepage and add the "New episodes" section to the second column, What would you do?"
      </h4>
      <h4 class="text-lg md:text-xl">Version A:</h4>
      <h4 class="text-lg font-medium">Users can edit the sequences of homepage sections from pop-up buttons in the same page.</h4>
      <h4 class="text-lg md:text-xl">Version B:</h4>
      <h4 class="text-lg font-medium">Users can edit the sections with shifting pages and preview the layout of section.
      </h4>
    </div>
    <div  class="col-span-4 text-center">
      <img class="w-full shadow-lg" src="@/assets/Podcast/Wireframe_HP_flow.png" alt="random inspiring cards" />
    </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl">Decision: Version A</h4>
      <h4 class="text-lg md:text-xl font-medium"><b>Quantiative rating points:</b><br><br><b>Average satisfied value: </b>(Total: 10)<br>
        <b>Version A: 9.3</b><br>
        Version B: 8<br><br>
        <b>Average point for how easy do they feel about the task: </b>(Easiest: 10)<br>
        <b>Version A: 9.4</b><br>
        Version B: 8.2</h4>
      <h4 class="text-lg md:text-xl font-medium"><b>Users' feedback :</b><br>Participants think that the display window of the edit section should be <b>displayed directly on the same page,</b> and they don't want pages shifting to perform operations.</h4>
      <h4 class="text-lg font-medium">
      </h4>
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl text-orange-700">IDEATE- High-Fidelity Prototypes</h4>
      <h4 class="text-lg md:text-xl">Random inspiring cards</h4>
    </div>
    <div  class="col-span-4 text-center">
      <img class="w-full md:w-5/6 shadow-lg" src="@/assets/Podcast/HIFI_RIC_flow.png" alt="random inspiring cards" />
    </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl">Profile</h4>
    </div>
    <div  class="col-span-4 text-center">
      <img class="w-full md:w-5/6 shadow-lg" src="@/assets/Podcast/HIFI_Profile.png" alt="Profile" />
    </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h4 class="text-lg md:text-xl">Player</h4>
    </div>
    <div  class="col-span-4 text-center">
      <img class="w-full md:w-5/6 shadow-lg" src="@/assets/Podcast/HIFI_Player.png" alt="random inspiring cards" />
    </div>
    <div class="px-10 md:px-5 mt-20 md:col-start-2 col-span-4 md:col-span-2 text-left">
      <h3 class="text-lg md:text-xl text-orange-700">Research Documentation- Medium</h3>
    </div>
    <div class="px-10 md:px-5 md:col-start-2 col-span-4 md:col-span-2 text-center">
      <h3 class="text-lg md:text-xl"><a class="text-black hover:text-green-700" href="https://medium.com/@podcasthsinchu/podcast-app-ow%CE%BBoice-f0a8721ace6">!! Medium Link Here !!</a></h3>
    </div>
    <div class="px-10 md:px-5 mt-10 md:col-start-2 col-span-4 md:col-span-2 text-left">
    <h3 class="text-lg md:text-xl text-orange-700">Some Pictures</h3>
    </div>
    <div class="flex flex-wrap px-8 md:mx-20 col-span-4">
      <img class="p-4 w-1/2 shadow-lg" src="@/assets/Podcast/grouppic1.jpg" alt="contest pictures" />
      <img class="p-4 w-1/2 shadow-lg" src="@/assets/Podcast/grouppic2.jpg" alt="contest pictures" />
    </div>
  </div>


  
  
  <!-- <div class="pjt-top">
    <div class="pjt-title">
      <h2 class="lg:test-md font-">Podcast side project</h2>
      <h2 class="lg:test-md">Podcast app redesign</h2>
      <h3 style="">
        Check
        <a
          href="https://medium.com/@podcasthsinchu/podcast-app-ow%CE%BBoice-f0a8721ace6"
          target="_blank"
          >Medium</a
        ><br />
        (Chinese documentation)
      </h3>
    </div>
    <div class="podcast-image">
      <img src="../assets/Podcast/PodcastCover.png" alt="" />
    </div>
  </div>
  <div class="pjt-content">
    <div class="title">
      <h2>Project<br />Background</h2>
    </div>
    <div class="content">
      <p>
        Last summer, I proactively launched a user research project to immerse
        deeply in research methods and accumulate project experiences. Six team
        members from engineering, accounting and social science work together to
        inspire sparkle ideas.
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
          <p>Medium documentation</p>
          <h2>Date</h2>
          <p>July 2020 - Present</p>
          <h2>TEAMMATES</h2>
          <p>
            Wei-Ko Li, Cecilia Chou, Vivian Chiang<br />
            Michelle Lee, Ryan Liao, Jhan Yan Lin
          </p>
        </div>
        <div class="card-content-right">
          <h2>METHODS & TOOLS</h2>
          <p>Surveys, User Interview, Usability testing | Miro, Figma</p>
          <h2>PRACTICES</h2>
          <p>User Research | Brainstorming | Reframing Problems</p>
        </div>
      </div>
    </div>
  </div> -->
  <!-- <div
    class="pjt-desc bg-orange-100"
    data-aos="fade-up"
    data-aos-duration="700"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center"
  >
    <h1>Problem</h1>
    <p class="font-medium">
      Some of our team members are
      <span class="text-red-700 font-semibold">Podcast listeners</span>
      , they felt annoyed and difficult when using the platforms.<br />
      <span class="problem-example"
        >For example,<br />
        1. weak bonding between Podcasters and listeners since there are
        <span class="text-red-700 font-semibold"
          >few social connections and interactive features</span
        >
        within Podcast apps so that they need to change platforms to connect
        with the Podcasters.<br />
        2.
        <span class="text-red-700 font-semibold">unorderly information</span>
        displayed on the interface.</span
      >
    </p>
    <p class="pt-10 problem-statement">
      Therefore, our group wanted to take a research on Podcast platforms and
      <span class="text-red-700 font-semibold"
        >find out pain points of listeners</span
      >
      and
      <span class="text-red-700 font-semibold">design a new Podcast app</span>
      to solve their problems.
    </p>
  </div> -->
  

  <!-- <div class="method-reason">
    <h3>Online survey</h3>
    <h1>
      To better understand users' usage habits and to collect information quickly from the podcast listeners, we chose to apply the online survey methods.<br />
    </h1>
    
    <h2 class="text-lg md:text-xl">
        237 respondents<br>
        Students (50.6%) | Technology industry (13.5%)<br>
        Avg. ages: 20~29 (72.5%)<br>
    </h2>
  </div> -->
  <!-- <div class="survey-question">
    <h1>Question Types</h1>

    <div></div>
    <div class="question-reason">
      <p>
        <span class="underline diffcolor__two"
          >Understand users' uasge frequency</span
        >
      </p>
    </div>
    <div class="question">
      <p>1. How long have you been listening to Podcast?</p>
    </div>
    <div></div>
    <div class="question-result">
      <p>3 months (28.2%)</p>
      <p>over 1 years (21%)</p>
    </div>
    <div></div>
    <div class="question">
      <p>2. How often do you listen to Podcast in one week?</p>
    </div>
    <div></div>
    <div class="question-result">
      <p>0~3 times/week (45.5%)</p>
      <p>4~6 times/week (33.7%)</p>
    </div>
    <div></div>
    <div class="question">
      <p>3. Averaging listening time</p>
    </div>

    <div></div>
    <div class="question-result">
      <p>30~45 minutes (31.2%)</p>
      <p>15~30 minutes (26.1%)</p>
    </div>

    <div class="question-reason">
      <p>
        <span class="underline diffcolor__two"
          >Understand how users' explore shows on Podcast</span
        >
      </p>
    </div>
    <div class="question">
      <p>4. How do you know the shows you are listening to?</p>
    </div>

    <div></div>
    <div class="question-result">
      <p>Social media (51.4%)</p>
      <p>Searching from the platform (43.4%)</p>
    </div>
    <div class="question-reason">
      <p>
        <span class="underline diffcolor__two"
          >Understand the timing when users want to use the Podcast</span
        >
      </p>
    </div>
    <div class="question">
      <p>5. When would you listen to your Podcast?</p>
      <br />
      <p>(Options sample)</p>
      <p>Before bed time</p>
      <p>Working / Studying</p>
      <p>Commuting...</p>
    </div>
    <div></div>
    <div class="question-result">
      <p>Free time (61.6%)</p>
      <p>Commuting (60.7%)</p>
    </div>
  </div> -->
  <!-- <div class="method-reason">
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
    <p style="font-size: 18px">
      Most of them are high frequency users ( > 7 times/week ) so that we could
      ask more aspects and experiences from them.
    </p>
  </div> -->

  <!-- <div class="col-span-4 bg-cyan-800 px-10 lg:px-40 py-20 mt-20">
    <h1 class="text-center text-3xl md:text-4xl font-bold pb-10  text-white">Research Findings</h1>
    <div class="flex flex-wrap items-center justify-evenly">
      <div class="col-span-3 bg-white w-[350px] h-[150px] p-3 m-5">
        <h3>
          <span style="background: yellow; padding: 5px 3px"
            >Finding 1 : </span
          ><br><br>
          Users think that podcast exploration results are not diverse enough.
        </h3>
      </div>
      <div class="col-span-3 bg-white w-[300px] h-[200px] p-3 m-5">
        <h3>
          <span style="background: yellow; padding: 5px 3px"
            >Finding 2 : </span><br><br>
            Users think that the information display is cluttered and cannot find the target information efficiently.
        </h3>
      </div>
    </div>
  </div> -->
  <!-- <div class="pjt-desc" style="background: white">
    <h1 class="card-h1">Research Findings</h1>
    <div class="findings-card-layout">
      <div class="card" style="margin: 30px">
        <div class="card-style-two">
          <h2>
            Users think that
            <span class="underline"
              >podcast exploration results are not diverse enough.</span
            >
          </h2>
        </div>
      </div>
      <div class="card">
        <div class="card-style-two">
          <h2>
            Users think that
            <span class="underline diffcolor"
              >the information display is cluttered and cannot find the target
              information efficiently.</span
            >
          </h2>
        </div>
      </div>
    </div>
  </div> -->

  <!-- <div class="method-reason">
    <h3>How Might We (HMW)</h3>
    <h1>
      For
      <span class="underline">ideation and brainstorming</span> from our
      research findings, we chose to apply
      <span class="underline">How Might We </span>question to help us develop
      trigger questions and break down users' needs.
    </h1>
  </div> -->
  <!-- <div
    class="pjt-content"
    style="margin: 10% 0; grid-gap: 20px 70px; justify-content: center"
  >
    <div class="title">
      <h2 style="border: none; text-align: left">
        <span class="underline diffcolor"> How Might We</span><br />
        (Finding 1)
      </h2>
    </div>
    <div class="content">
      <p style="max-width: 300px">
        How might we let users feel fresh on the platform?
      </p>
    </div>
    <div></div>
    <div class="content">
      <p style="max-width: 300px">
        How might we let users want to keep staying on the platform?
      </p>
    </div>

    <div></div>
    <div class="content">
      <p style="max-width: 300px">
        How might we design the exploring procedure so that users can be
        intrigued by the app?
      </p>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="title">
      <h2 style="border: none; text-align: left">
        <span class="underline"> How Might We</span><br />
        (Finding 2)
      </h2>
    </div>
    <div class="content">
      <p style="max-width: 300px">
        How might we let users efficiently catch up on the information of the
        episode?
      </p>
    </div>
    <div></div>
    <div class="content">
      <p style="max-width: 300px">
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
  </div> -->

  <!-- <div class="pjt-desc" style="padding-bottom: 50px; background: white">
    <h1><span class="underline diffcolor__four">Challenge</span></h1>
    <p style="line-height: 50px; margin-top: 40px">
      We didn't specifically identify the reasons for<br />
      <span class="underline">"Why"</span> we wanted to code with each HMW
      questions, and<br />
      <span class="underline">"How"</span> we wanted to address such question
      <br />
      by <span class="underline">"What"</span> design methodologies, which
      resulted in ambiguity of our design.
    </p>
  </div>

  <div class="pjt-desc" style="padding-bottom: 70px; background: white">
    <h1><span class="underline diffcolor__three">Solved</span></h1>
    <p style="line-height: 50px; margin-top: 40px">
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
  </div> -->
  
  <!-- <div class="method-reason">
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
      <p>We applied A/B test to evaluate our design</p>
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
  </div> -->

  <!-- <div class="prototype-image">
    <img src="../../src/assets/Podcast/Wireframe_RIC_flow.png" alt="" />
  </div> -->
  <!-- <h1><span class="underline">Decision: Version B</span></h1>
  <div
    class="pjt-content"
    style="margin: 10%; grid-gap: 30px 70px; justify-content: center"
  >
    <div class="title">
      <h2 style="border: none; text-align: left"><i>Task:</i><br /></h2>
    </div>
    <div class="title">
      <h2 style="border: none; text-align: left">
        Users' feedback and results
      </h2>
    </div>

    <div class="content">
      <p style="max-width: 300px">
        "You can try random inspiring cards to explore new episodes and audition
        tapes.<br />
        Could you try to find the function in this app?"
      </p>
    </div>
    <div class="content">
      <p style="max-width: 300px">
        Participants think that "random inspiring cards" is an
        <b>important and special</b> feature in this app, so the functional
        button should be put in the <b>main tab</b> to emphasize the function.
      </p>
    </div>
  </div> -->
  <!-- <div class="method-reason">
    <h1>
      <span class="underline diffcolor"
        >2. Customized Homepage sections (inspired by finding 2)</span
      >
      <p></p>
      <p>We applied A/B test to evaluate our design</p>
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
    style="margin: 10%; grid-gap: 30px 70px; justify-content: center"
  >
    <div class="title">
      <h2 style="border: none; text-align: left"><i>Task:</i><br /></h2>
    </div>
    <div class="title">
      <h2 style="border: none; text-align: left">
        Users' feedback and results
      </h2>
    </div>

    <div class="content">
      <p style="max-width: 300px">
        "In this podcast app, you have subscribed to lots of favorite shows, and
        you also want to see the latest episodes of the show on the homepage.<br />
        Therefore, you want to adjust the content order of the homepage and add
        the "New episodes" section to the second column, What would you do?"
      </p>
    </div>
    <div class="content">
      <p style="max-width: 300px">
        Participants think that the display window of the edit section
        <b>should be displayed directly on the same page</b>, and they don't
        want pages shifting to perform operations.
      </p>
    </div>
  </div> -->
  <!-- <div class="method-reason">
    <h3>Hi-Fidelity Prototypes</h3>
    <h1>
      <span class="underline diffcolor"> Random inspiring cards</span>
    </h1>
  </div>

  <p class="author">
    (Page mainly designed by Ryan Liao, Cecilia Chou, Michelle Lee)
  </p>

  <div class="prototype-image">
    <img src="../../src/assets/Podcast/HIFI_RIC_flow.png" alt="" />
  </div>
  <div class="method-reason">
    <h1>
      <span class="underline">Player</span>
    </h1>
  </div>

  <p class="author">
    (Page mainly designed by Ryan Liao, Cecilia Chou, Michelle Lee)
  </p>
  <div class="prototype-image">
    <img src="../../src/assets/Podcast/HIFI_Player_flow.png" alt="" />
  </div> -->
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

  <!-- <div class="button-bg">
    <div class="button-bg-image"></div>
    <next-button :project-num="num" :name="name"></next-button>
  </div> -->

  <div class="grid grid-cols-4 bg-slate-200 mt-20">
    <div class="maxsm:col-span-4 sm:col-span-2 w-full">
      <next-button :project-num="num" :name="name"></next-button>
    </div>
    <!-- <div class="maxsm:col-span-4 sm:col-span-2">
      <img class="m-0 sm:mt-20 mb-8 md:mb-16 w-4/5 sm:w-10/12" src="@/assets/Podcast/PodcastCover.png" alt="project image" />
    </div> -->
  </div>

  <!-- <back-to-top bottom="50px" right="50px">
    <button type="button" class="btn btn-info btn-to-top"><p>TOP</p></button>
  </back-to-top> -->
</template>

<script setup>
import { onMounted } from 'vue';
import { NIcon } from 'naive-ui';
import { Number1,Number2,Number3,Number4} from '@vicons/carbon';
import NextButton from '../components/Shared/Nextbutton.vue';
defineProps({
  num: Number,
  name: String,
});
onMounted(() => {
  window.scrollTo(0, 0);
});
// export default {
//   name: 'PodcastPage',
//   components: {
//     'next-button': NextButton,
//     // BackToTop,
//   },
//   props: {
//     num: Number,
//     name: String,
//   },
//   mounted() {
//     window.scrollTo(0, 0);
//   },
// };
</script>
<style scoped lang="scss">
@import '../assets/scss/project_content_style.scss';
@import '../assets/scss/project_card_style.scss';
//fontstyle

@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap');


.podcast-image {
  display: flex;
  display: -webkit-inline-box;
  // flex-direction: row;
  width: 58%;
  position: absolute;
  right: 3%;
  top: 18%;
  z-index: -1;
  img {
    width: 70%;
    margin: 0 20px;
  }
  @media (max-width: 1024px) {
    width: 60%;
    right: 0;
    top: 30%;
    align-items: center;
    img {
      width: 65%;
    }
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
  margin: 10px -20px;
  padding: 220px 170px;
  max-width: 600px;
  @media (max-width: 1200px) {
    margin: 20px -30px;
    padding: 220px 140px;
  }
  @media (max-width: 1024px) {
    max-width: 400px;
    padding: 320px 100px;
  }
  @media (max-width: 800px) {
    max-width: 300px;
  }
  @media (max-width: 500px) {
    padding: 340px 100px;
  }
}
.card-content-left {
  @media (max-width: 500px) {
    top: 5%;
  }
}
.card-content-right {
  @media (max-width: 1024px) {
    top: 66%;
    left: 8%;
  }
  @media (max-width: 500px) {
    top: 62%;
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
// .underline {
//   background-size: 100% 0.14em;
// }
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
