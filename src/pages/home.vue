<template>
  <div class="body">
    <!-- navbar  -->

    <br />

    <!-- about amaka  -->
    <div class="row about">
      <div class="col-md-6 my-intro">
        <h1
          class="my-name"
          data-toggle="animation"
          data-animation-reset="true"
          data-animation="tada"
        >
          I'm
        </h1>
        <h1 class="my-name">Eguzoro Chimamaka.</h1>
        <div class="wrapper">
          <ul class="dynamic-txts">
            <li><span>Self-taught Frontend Developer.</span></li>
            <li><span>School-taught Systems Engineer.</span></li>
          </ul>
        </div>
        <a
          href="https://drive.google.com/file/d/1v9o-DJ8lkRdR1aeDXVdsGzu2dusZngda/view?usp=sharing"
        >
          <button type="button" class="btn btn-lg btn-outline-secondary cv-btn">
            Download CV
          </button>
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div class="social-media">
          <a href="https://github.com/AmakaEguzoro">
            <i class="fa fa-github fa-2x social-icon"></i>
          </a>
          <a href="http://linkedin.com/in/chimamaka-eguzoro-4906791a0">
            <i class="fa fa-linkedin fa-2x social-icon"></i
          ></a>
          <a href="mailto:eguzoroa@gmail.com">
            <i class="fa fa-envelope fa-2x social-icon"></i
          ></a>
          <a href="https://instagram.com/techwithnace?utm_medium=copy_link"
            ><i class="fa fa-instagram fa-2x social-icon"></i
          ></a>
        </div>
      </div>

      <div class="col-md-6">
        <div class="dp">
          <img src="../assets/Untitled design.png" width="100%" alt="" />
        </div>
      </div>
    </div>

    <br />
    <!-- projects  -->

    <h1 class="project-highlight">Some interesting projects</h1>
    <br />
    <br />
    <div class="row">
      <div class="md-col-8 weather-slides">
        <a href="https://plan-wella.netlify.app/">
          <img src="../assets/Plan Wella.png" alt="" class="plan-wella" />
        </a>

        <br />
        <br />

        <h3 class="fets"><b>Plan Wella</b></h3>
        <p class="fets-title">React Js</p>
        <div>
          <p class="about-fets">
            A Finance planing app that helps you track your Income and Expense
            at the click of a button. This Web Application is powered by
            Speechly.
          </p>
        </div>
      </div>
      <!-- <div class="md-col-8 weather-slides">
        <div id="slider">
          <figure>
            <a href="https://amaka-weather-app.netlify.app/">
              <img src="../assets/weather-app.png" alt="" />
              <img src="../assets/weather-app-day.png" alt="" />
              <img src="../assets/weather-app.png" alt="" />
              <img src="../assets/weather-app-day.png" alt="" />
              <img src="../assets/weather-app.png" alt="" />
            </a>
          </figure>
        </div>
        <br />
        <br />

        <h3 class="fets"><b>Weather App</b></h3>
        <p class="fets-title">Vue Js</p>
        <div>
          <p class="about-fets">
            An API-Connected Application that detects the temperature in your
            desired city, and changes background based on the result.
          </p>
        </div>
      </div> -->
      <div class="col-md-4 tams">
        <a href="https://validcredit-card.netlify.app/">
          <img src="../assets/credit-card.png" alt="" class="tms" />
        </a>
        <br />
        <br />
        <br />
        <h3 class="fets"><b>Credit Card Validation App</b></h3>
        <p class="fets-title">Angular</p>
        <p class="about-fets">
          This Application validates credit cards, identifies if it is a
          Mastercard, Visa or Verve card
        </p>
      </div>
    </div>
    <br />
    <br />

    <br />

    <div>
      <h1 class="project-highlight">Technologies I work with</h1>
      <br />
      <div class="tech">
        <img src="../assets/Angular.svg" width="15%" alt="" />
        <img src="../assets/vue-9.svg" width="15%" alt="" />
        <img src="../assets/reactt.svg" width="15%" alt="" />
        <!-- <img src="../assets/nodee.png" width="15%" alt="" /> -->
      </div>
    </div>
    <br />
    <div>
      <div class="row">
        <div class="col-md-9">
          <div class="another-heading">
            <h1 class="interests">Some More Interesting Projects</h1>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />

    <div>
      <div class="row">
        <div class="col-md-4">
          <a class="fets" href="https://veneerwoods.netlify.app/"
            ><b>Venner Woods</b></a
          >
          <p class="about-project">
            A simple landing page website built for the popular wood vendor,
            VENNER WOODS Lagos.
          </p>
        </div>
        <div class="col-md-4">
          <p class="fets"><b>Remote Upgrade</b></p>
          <p class="about-project">
            This web application allows super agents automatically push update
            to POS terminal
          </p>
        </div>
        <div class="col-md-4">
          <p class="fets"><b>ITEX Monitoring System</b></p>
          <p class="about-project">
            An application used to track the amount of Successful, Failed and
            Queuing Transactions at every point in the organisation.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.body {
  background-color: #f5f5dd;
  padding-left: 25px;
  /* padding: clamp(1em, 5vw, 5em); */
}

.my-name {
  font-weight: 1000;
  font-size: clamp(40px, 6vw, 70px);
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3.2px;
  color: #8b4411;
  opacity: 1;
}
.occupation {
  font-weight: 800;
  font-size: 2vw;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3px;
  color: #8b4411;
  opacity: 1;
}

.wrapper .dynamic-txts {
  margin-left: -40px;
  line-height: 60px;
  height: 60px;
  overflow: hidden;
}
.dynamic-txts li {
  color: #8b4411;
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: clamp(0.8em, 2vw, 2em);
  top: 0;
  position: relative;
  animation: slide 9s steps(2) infinite;
}
@keyframes slide {
  100% {
    top: -120px;
  }
}

.dynamic-txts li ::after {
  content: "";
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background: #f5f5dd;
  animation: typing 9s steps(28) infinite;
}
@keyframes typing {
  40%,
  60% {
    left: calc(90%);
  }
  100% {
    left: 0;
  }
}
.cv-btn {
  background-color: #f5f5dd;
  color: #8b4411;
}

.dp {
  /* margin-top: -10px; */
  width: 90%;
}
@media (max-width: 40em) {
  .dp {
    display: none;
  }
}
.my-intro {
  padding-bottom: 260px;
}

.social-media {
  display: flex;
  justify-content: space-evenly;
}
.social-icon {
  color: #8b4411;
  transition: transform 0.2s;
}
.social-icon:hover {
  transform: scale(1.5);
}
.project-highlight {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(40px, 6vw, 70px);
  font-weight: 800;
  letter-spacing: 3.04px;
  color: #cc9767;
  opacity: 1;
}
.weather-slides {
  width: 60%;
  padding-left: 20px;
}
@media all and (max-width: 480px) {
  .weather-slides {
    width: 100%;
  }
}

.plan-app {
  padding: 20px;
}
.plan-wella {
  border-radius: 7px;
  width: 90%;
}
.fets {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  letter-spacing: 0.77px;
  color: #8b4411;
  text-transform: capitalize;
  opacity: 1;
}
.fets-title {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  letter-spacing: 0.58px;
  color: #b3aeae;
  text-transform: capitalize;
  opacity: 1;
}
.fettss {
  width: 776px;
}
.about-fets {
  width: 80%;
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: clamp(1em, 2vw, 1.2em);
  letter-spacing: 0.58px;
  color: #b3aeae;
  text-transform: capitalize;
  opacity: 1;
}
.tams {
  padding-left: 20px;
}
.tms {
  border-radius: 7px;
  width: 100%;
}
@media all and (max-width: 480px) {
  .tms {
    width: 100%;
  }
}
.interests {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: clamp(40px, 6vw, 70px);
  font-weight: 700;
  letter-spacing: 2.04px;
  color: #d6d6d6;
  opacity: 1;
}
.about-project {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  letter-spacing: 0.7px;
  color: #b3aeae;
  text-transform: capitalize;
  opacity: 1;
}
/* .another-heading {
  display: flex;
} */

.tech {
  display: flex;
  justify-content: space-evenly;
}
</style>
