<template>
  <div class="bg-orange-50">
    <div class="grid grid-cols-4 text-left pt-40 sm:pt-32 px-8 sm:px-20">
      <div
        class="col-span-4 md:col-span-2 px-4 sm:px-10 lg:px-24 py-10 sm:py-24"
      >
        <div class="loading mt-10">
          <span>HELLO ! </span>
        </div>
        <div class="mt-20">
          <h2>
            I am WEI-KO LI, a UX design graduate student at the University Of
            Texas At Austin (UT Austin).
          </h2>
          <h3>
            I found interest in
            <span class="underline diffcolor">User Experience</span> when I was
            a sophomore and had spent lots of time immersing in the users’
            world. <br /><br />

            <!-- My portfolio includes the process of<br />
            • User Interviewing<br />
            • Qualitative analysis<br />
            • Usability testing<br />
            • User interface design.<br />
            • Web development<br /> -->
            If you have any questions, please feel free to ask me.<br /><br /><br />
          </h3>
        </div>
      </div>
      <div
        class="col-span-2 circular--landscape md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] md:ml-8 lg:ml-20 md:my-28"
      >
        <img src="@/assets/Home/viviantexas.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
body {
  width: 100%;
  margin: 0;
  padding: 56px 0;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #f7f3e9;
  z-index: -2;
  // @media (max-width: 797px) {
  //   padding: 0 15%;
  // }
}
// .bio {
//   margin-left: 15%;
//   // margin: 280px 0 0 15%;
//   width: 35%;
//   text-align: left;
//   z-index: 999;
//   @media (max-width: 992px) {
//     h2 {
//       font-size: 24px;
//     }
//     width: 40%;
//     // margin: 230px 0 0 0;
//     padding-left: 10%;
//   }
//   @media (max-width: 700px) {
//     width: 60%;
//     h2 {
//       font-size: 20px;
//     }
//     h3 {
//       font-size: 18px;
//     }
//   }
// }

.circular--landscape {
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
  @media (max-width: 768px) {
    display: none;
  }
}
.circular--landscape img {
  width: auto;
  height: 100%;
  margin-left: -120px;
  @media (max-width: 992px) {
    margin-left: -100px;
  }
}

.loading {
  font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
  text-transform: uppercase;

  width: 200px;
  text-align: center;
  line-height: 50px;

  position: absolute;
  // left: 10%;
  // // right: 10%;
  // top: 30%;
  margin: auto;
  transform: translateY(-50%);
  // @media (max-width: 992px) {
  //   top: 20%;
  // }
  // @media (max-width: 700px) {
  //   top: 18%;
  // }
}

.loading span {
  position: relative;
  z-index: 999;
  color: #fff;
  font-size: 28px;
}
.loading:before {
  content: '';
  background: #61bdb6;
  width: 100%;
  height: 80%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  animation: 2s loadingBefore normal forwards ease-in-out;
}

@keyframes loadingBefore {
  0% {
    transform: translateX(-14px);
  }
  50% {
    transform: translateX(14px);
  }
  100% {
    transform: translateX(-14px);
  }
}

.loading:after {
  content: '';
  background: #ff3600;
  width: 5%;
  height: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 30%;
  // right: 0;
  // bottom: 0;
  margin: auto;
  opacity: 0.5;

  animation: 2s loadingAfter normal forwards ease-in-out;
}

@keyframes loadingAfter {
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(130px);
  }
  100% {
    transform: translateX(-50px);
  }
}

.diffcolor {
  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  background-size: 100% 0.25em;
}
</style>
