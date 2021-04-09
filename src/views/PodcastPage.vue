<template>
  <div class="button-bg">
    <div class="button-bg-image"></div>
    <next-button :project-num="num" :name="name"></next-button>
  </div>
</template>

<script>
import NextButton from '../components/Shared/button.vue';
export default {
  name: 'PodcastPage',
  components: {
    'next-button': NextButton,
  },
  data() {
    return {
      name: 'FineTutor',
      num: '2',
    };
  },
};
</script>
<style lang="scss">
@import '../assets/scss/project_card_style.scss';
</style>
