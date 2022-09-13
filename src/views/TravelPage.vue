<template>
  <div class="button-bg">
    <div class="button-bg-image"></div>
    <next-button :project-num="num" :name="name"></next-button>
  </div>
  <back-to-top bottom="50px" right="50px">
    <button type="button" class="btn btn-info btn-to-top"><p>TOP</p></button>
  </back-to-top>
</template>

<script>
import NextButton from '../components/Shared/button.vue';
import BackToTop from 'vue-backtotop';
export default {
  name: 'TravelPage',
  components: {
    'next-button': NextButton,
    BackToTop,
  },
  data() {
    return {
      name: 'Meeture',
      num: '2',
    };
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
</style>
