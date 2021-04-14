<template>
  <div id="nav">
    <router-link to="/">Portfolio</router-link>
    <!-- <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>
<script>
export default {};
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 25px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
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
#footer {
  overflow: hidden;
  width: 100%;
  z-index: 999;
  li {
    list-style: none;
    line-height: 1.6em;
  }
}
.sns {
  margin-top: 50px;
}
.sns ul {
  padding: 0;
  display: flex;
  justify-content: center;
}
.sns li {
  margin: 0 25px;
}
.sns a {
  display: inline-block;
  width: 50px;
  height: 50px;
  color: #f1f1f1;
  font-weight: bold;
  text-decoration: none;
  transition: 0.5s;
  border-radius: 50%;
  line-height: 48px;
  background-color: #7c7b7b;
  text-align: center;
  font-size: 19px;
}
.sns a:hover {
  color: steelblue;

  background-color: #ffffff;
}
.sns a i {
  vertical-align: middle;
}
</style>
