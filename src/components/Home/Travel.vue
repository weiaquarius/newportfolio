<template>
  <router-link to="/TravelBasedMultitasking" class="box box1">
    <div class="oddboxinner" style="text-align: right">
      <!-- <div class="project-img__meeture">
        <img src="../../assets/Home/meeeture_logo.png" alt="Meeture.png LOGO" />
      </div> -->
      <!-- <div class="project-bio"> -->
      <h2>
        Get Distracted or Missed the Stop? Investigating Public Transit
        Passengers’ Travel-Based Multitasking Behaviors, Motives, and
        Challenges<br />
      </h2>
      <h3>Publication | Research Paper</h3>
      <p style="font-style: italic">
        Accepted by TAICHI 2022 <br />
        Submitted to CHI 2023 (HCI Top Conference)
      </p>
      <!-- </div> -->
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.project-img {
  &__meeture {
    position: absolute;
    top: 0%;
    left: -25%;
    img {
      width: 35%;
    }
  }
  @media (max-width: 800px) {
    &__meeture {
      top: 5%;
      left: -25%;
    }
    img {
      width: 20%;
    }
  }
  @media (max-width: 700px) {
    &__meeture {
      top: 5%;
      left: -35%;
    }
    img {
      width: 18%;
    }
  }
  @media (max-width: 600px) {
    &__meeture {
      left: 5%;
      top: 0%;
      img {
        width: 33%;
      }
    }
  }
}
</style>
