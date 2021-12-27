<template>
  <div class="navigation">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="mr-auto navbar-nav">
          <li>
            <router-link to="/" tag="li" class="nav-item"
              >Eguzoro Chimamaka</router-link
            >
          </li>
        </ul>

        <ul class="my-2 navbar-nav">
          <li>
            <router-link to="/about" tag="li" class="nav-item"
              >About</router-link
            >
          </li>
          <li>
            <router-link to="/casestudy" tag="li" class="nav-item"
              >Case Studies</router-link
            >
          </li>

          <!-- <li>
            <router-link to="/process" tag="li" class="nav-item"
              >My Process</router-link
            >
          </li> -->

          <li>
            <router-link to="/articles" tag="li" class="nav-item"
              >Blog</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.navigation {
  background-color: #f5f5dd;
  /* padding: 10px; */
}
.nav-item {
  padding: 20px;
  font: Aileron;
  font-size: 20px;
  letter-spacing: 0px;
  color: #8b4411;
  text-transform: capitalize;
  opacity: 1;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  text-decoration: underline #a57a5a;
  font-weight: bold;
}
</style>
