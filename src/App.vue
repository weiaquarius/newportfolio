<template>
  <!-- <div
    id="nav"
    class="grid sm:grid-cols-10 text-center p-4 sm:p-6 text-center lg:text-lg md:text-sm"
  >
    <div>
      <router-link to="/">Wei-Ko Li</router-link>
    </div>
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <router-link to="/about">About</router-link>
    </div>
  </div> -->
  <nav
    class="relative w-full flex flex-wrap justify-start py-1 text-gray-500 bg-slate-100 shadow-lg navbar navbar-expand-lg navbar-light"
    id="nav"
  >
    <div class="container-fluid w-full flex flex-wrap justify-start px-6">
      <div class="mt-1 collapse navbar-collapse" id="navbarSupportedContent">
        <router-link to="/"
          ><img
            src="@/assets/WEIKOLI.png"
            style="height: 18px"
            alt=""
            loading="lazy"
        /></router-link>
        <!-- Left links -->
        <!-- <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
          <li class="nav-item p-2">
            <a
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="#"
              >Dashboard</a
            >
          </li>
          <li class="nav-item p-2">
            <a
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="#"
              >Team</a
            >
          </li>
          <li class="nav-item p-2">
            <a
              class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
              href="#"
              >Projects</a
            >
          </li>
        </ul> -->
        <!-- Left links -->
      </div>
      <div class="collapse navbar-collapse text-xl" id="navbarSupportedContent">
        <router-link to="/">Home</router-link>
      </div>
      <div class="collapse navbar-collapse text-xl" id="navbarSupportedContent">
        <router-link to="/about">About</router-link>
      </div>
      <!-- <button
        class="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </button> -->

      <!-- Collapsible wrapper -->

      <!-- Right elements -->
    </div>
  </nav>
  <router-view />
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
#nav {
  // padding: 25px;
  // width: 100%;
  position: fixed;
  // top: 0;
  // left: 0;
  // // display: flex;
  // // justify-content: flex-start;
  // // font-size: 20px;
  // background-color: #e6e6e6;
  // box-shadow: 0 3px 8px rgba(0, 0, 0, 0.26);
  z-index: 999;
  // max-width: 1000px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    display: block;
    padding: 20px;
    &.router-link-exact-active {
      color: #80281c;
      text-decoration: underline;
    }
    &:hover {
      color: #80281c;
    }
  }
}
</style>
