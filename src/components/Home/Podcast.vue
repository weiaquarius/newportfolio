<template>
  <router-link to="/PodcastProject" class="box box1">
    <div class="oddboxinner">
      <div class="project-img__podcast">
        <img src="../../assets/Home/Podcast.png" alt="Podcast.png LOGO" />
      </div>
      <div class="project-bio">
        <h1>Podcast side project<br /></h1>
        <h3>New Podcast App</h3>
        <p>
          Went through quantiative and qualitative user research methodologies
          to redesign a new Podcast app for the public.
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
    top: 10%;
    left: -25%;
    img {
      width: 30%;
    }
  }
  @media (max-width: 700px) {
    &__podcast {
      top: 15%;
      left: -35%;
    }
  }
  @media (max-width: 600px) {
    &__podcast {
      left: 5%;
      top: 0%;
      img {
        width: 30%;
      }
    }
  }
}
</style>
