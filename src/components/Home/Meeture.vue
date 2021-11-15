<template>
  <router-link to="/Meeture" class="box box1">
    <div class="oddboxinner">
      <div class="project-img__meeture">
        <img src="../../assets/Home/meeeture_logo.png" alt="Meeture.png LOGO" />
      </div>
      <div class="project-bio">
        <h1>Meeture<br /></h1>
        <h3>Elderly activity platform</h3>
        <p>
          Design a learnable and aging-friendly activity website to encourage
          the elderly to go outside and make connections with their friends.
        </p>
      </div>
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
