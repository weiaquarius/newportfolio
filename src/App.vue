<template>
  <div id="nav" class="grid grid-cols-10 text-center p-2 sm:p-6 text-center">
    <div>
      <router-link to="/">Wei-Ko Li</router-link>
    </div>
    <div class="col-span-6"></div>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About me</router-link>
    </div>
  </div>
  <router-view />
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
#nav {
  // padding: 25px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  // display: flex;
  // justify-content: flex-start;
  font-size: 20px;
  background-color: #e6e6e6;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.26);
  z-index: 999;
  // max-width: 1000px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    padding: 10px;

    &.router-link-exact-active {
      color: #80281c;
    }
    &:hover {
      color: #80281c;
    }
  }
}
</style>
