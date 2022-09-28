<template>
  <nav
    class="relative w-full flex flex-wrap justify-start py-6 text-gray-500 bg-white shadow-lg navbar navbar-expand-lg navbar-light"
    id="nav"
  >
    <div class="container-fluid w-full flex flex-wrap justify-start px-6">
      <div class="mt-1 collapse navbar-collapse">
        <router-link to="/"
          ><img
            src="@/assets/WEIKOLI.png"
            style="height: 18px"
            alt=""
            loading="lazy"
        /></router-link>
      </div>
      <div class="collapse navbar-collapse text-xl">
        <router-link to="/">Home</router-link>
      </div>
      <div class="collapse navbar-collapse text-xl">
        <router-link to="/about">About</router-link>
      </div>

      <n-dropdown
        trigger="hover"
        show-arrow
        :options="options"
        @select="handleSelect"
      >
        <div class="collapse navbar-collapse text-xl">
          <a class="flex items-center">
            <span>Project</span>
            <n-icon class="px-1 arrowStyle" size="30">
              <keyboard-arrow-down-round />
            </n-icon>
          </a>
        </div>
      </n-dropdown>
    </div>
  </nav>
  <router-view />
</template>
<script setup lang="ts">
import { NDropdown, NIcon } from 'naive-ui';
import { KeyboardArrowDownRound } from '@vicons/material';
import { useRouter } from 'vue-router';
const options = [
  {
    label: 'Meeture',
    key: 'Meeture',
  },
  {
    label: 'Podcast side project',
    key: 'Podcast',
  },

  {
    label: 'Travel-Based Multitasking',
    key: 'Travel',
  },
];
const router = useRouter();
const handleSelect = (key: string) => {
  router.push({ name: key });
  console.log(key);
};
</script>

<style lang="scss" scoped>
#nav {
  // padding: 25px;
  // width: 100%;
  position: fixed;
  z-index: 999;
  // max-width: 1000px;
  a {
    font-weight: bold;
    color: #2c3e50;
    cursor: pointer;
    text-decoration: none;
    padding: 0 20px;
    .arrowStyle {
      fill: #2c3e50;
    }
    &.router-link-exact-active {
      color: #80281c;
      text-decoration: underline;
    }
    &:hover {
      color: #80281c;
      .arrowStyle {
        fill: #80281c;
      }
    }
  }
}
</style>
