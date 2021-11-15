<template>
  <router-link to="/SireHealth" class="box box1">
    <div class="project-img__sire">
      <img src="../../assets/Home/SireLogo.png" alt="SireHealth.png LOGO" />
    </div>
    <div class="project-bio">
      <h1>SireHealth<br /></h1>
      <h3>Medical Product Webpage</h3>
      <p>
        Design medical product website for Singapore startup company. Mainly for
        UI design.
      </p>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.project-img {
  &__sire {
    bottom: 5%;
  }
  &__sire img {
    width: 75%;
  }
  @media (max-width: 600px) {
    &__sire {
      position: absolute;
      bottom: 0;
      left: 8%;
      top: 0%;
    }
    &__sire img {
      width: 60%;
    }
  }
}
</style>
