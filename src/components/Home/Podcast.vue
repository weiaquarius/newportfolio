<template>
  <router-link to="/PodcastProject" class="box box1">
    <div class="oddboxinner">
      <div class="project-img__podcast">
        <img src="../../assets/Home/Podcast.png" alt="Podcast.png LOGO" />
      </div>
      <div class="project-bio">
        <h1>Podcast<br /></h1>
        <h3>New Podcast App</h3>
        <p>
          Design a free and efficient tutor website to help the students and
          teachers easily find their suitable matchings.
        </p>
      </div>
    </div>
  </router-link>

  <!-- <router-link to="/case-studies/PodcastProject" class="intro">
    <div class="project-img__podcast">
      <img src="../../assets/Home/Podcast.png" alt="Podcast.png LOGO" />
    </div>
    <div class="project-bio">
      <h1>Podcast<br /></h1>
      <h3>New Podcast App</h3>
      <p>
        Design a free and efficient tutor website to help the students and
        teachers easily find their suitable matchings.
      </p>
    </div>
  </router-link> -->
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.project-img {
  &__podcast {
    position: absolute;
    top: 25%;
    left: -15%;
    img {
      width: 25%;
    }
  }
  @media (max-width: 700px) {
    &__podcast {
      top: 20%;
      left: -35%;
    }
  }
  @media (max-width: 600px) {
    &__podcast {
      left: 5%;
      top: 5%;
      img {
        width: 27%;
      }
    }
  }
}
</style>
