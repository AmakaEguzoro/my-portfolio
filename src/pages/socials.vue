<template>
  <footer>
    <hr />
    <br />
    <div class="row">
      <div class="col-md-3">
        <p class="rights">All rights Reserved</p>
      </div>
      <div class="col-md-6 coders">
        <p class="rights">Developed by <b>Eguzoro Chimamaka</b> with Vue Js</p>
      </div>
      <div class="col-md-3 socials">
        <a href="https://instagram.com/techwithnace?utm_medium=copy_link">
          <img src="../assets/instagram.png" alt="" />
        </a>
        <a href="http://linkedin.com/in/chimamaka-eguzoro-4906791a0">
          <img src="../assets/linkedin.png" alt="" />
        </a>
        <a href="">
          <img src="../assets/twitter.png" alt="" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style>
footer {
  background-color: #f5f5dd;
  padding: 30px;
}
.coders {
  display: inline-flex;
  justify-content: space-evenly;
}
.rights {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  letter-spacing: 0.51px;
  color: #8b4411;
  text-transform: capitalize;
  opacity: 1;
}
.socials {
  display: flex;
  justify-content: space-evenly;
}

/* mobile view */
@media screen and (max-width: 767px) {
  /* footer {
    margin-left: -70px;
  } */
  .coders {
    text-align: center;
    display: block;
  }
  .rights {
    text-align: center;
    font-size: 13px;
    letter-spacing: 0.51px;
  }
  .socials {
    display: flex;
    justify-content: space-evenly;
  }
}
</style>
