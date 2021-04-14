<template>
  <section>
    <div class="bio">
      <div class="loading">
        <span>HELLO ! </span>
      </div>
      <!-- <h1
        class="heading heading--stroke heading--halftone heading--halftone-color"
      >
        Hello
      </h1> -->
      <!-- <h1>Hello!</h1> -->
      <h2>
        I am WEI-KO LI, a senior student at National Tsing-Hua University.
      </h2>
      <h3>
        I found interest in
        <span class="underline diffcolor">User Experience</span> when I was a
        sophomore and had spent lots of time immersing in the users’ world.
        <br /><br />

        My portfolio includes the process of
        <span class="underline"
          >interviewing, qualitative analysis, and User interface design.</span
        ><br /><br />
        If you have any questions, please feel free to ask me.<br /><br /><br />
      </h3>
    </div>
    <div class="profile-img">
      <img src="../../assets/Home/Vivian_gray.png" alt="" />
    </div>
  </section>
</template>

<script>
import '../../assets/script/underline.js';
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
@import '../../assets/scss/index.scss';
section {
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
.bio {
  margin: 200px 0 0 15%;
  width: 30%;
  text-align: left;
  z-index: 999;
  @media (max-width: 992px) {
    width: 40%;
    margin: 230px 0 0 0;
    padding-left: 10%;
  }
  @media (max-width: 700px) {
    width: 60%;
  }
}
.profile-img {
  width: 60%;
  position: absolute;
  top: 20%;
  left: 40%;
  img {
    width: 55%;
  }
  @media (max-width: 1200px) {
    width: 60%;
    top: 30%;
  }
  @media (max-width: 992px) {
    top: 40%;
  }

  @media (max-width: 700px) {
    display: none;
  }
}

.loading {
  font-family: 'Arial Black', 'Arial Bold', Gadget, sans-serif;
  text-transform: uppercase;

  width: 200px;
  text-align: center;
  line-height: 50px;

  position: absolute;
  left: 10%;
  // right: 10%;
  top: 30%;
  margin: auto;
  transform: translateY(-50%);
  @media (max-width: 992px) {
    top: 25%;
  }
  @media (max-width: 700px) {
    // top: 30%;
    left: auto;
    right: auto;
  }
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
