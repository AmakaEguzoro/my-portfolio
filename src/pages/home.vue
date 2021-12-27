<template>
  <div class="body">
    <!-- navbar  -->

    <br />

    <!-- about amaka  -->
    <div class="row about">
      <div class="col-md-6">
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
        <div class="fettss">
          <p class="about-fets">
            An API-Connected Application that detects the temperature in your
            desired city, and changes background based on the result.
          </p>
        </div>
      </div>
      <div class="col-md-4 tams">
        <a href="">
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
    <div class="row">
      <div class="col-md-8">
        <div class="hover-zoom">
          <router-link to="/powerdeal">
            <img
              src="../assets/powerdeal.png"
              alt=""
              class="fets-mobile"
              width="776px"
              height="400px"
          /></router-link>
        </div>
        <br />
        <br />
        <br />
        <h3 class="fets"><b>Powerdeals</b></h3>
        <p class="fets-title">Web Application, Case Study</p>
        <div class="fettss">
          <p class="about-fets">
            Power Deal Is An Electricity Bill Payment Service That Enables You
            Recharge And Buy Power Conveniently.
          </p>
        </div>
      </div>

      <div class="col-md-4">
        <a>
          <img
            src="../assets/megalek.png"
            alt=""
            class="tms"
            width="398px"
            height="400px"
          />
        </a>
        <br />
        <br />
        <br />
        <h3 class="fets"><b>MEGALEK HOSPITAL TMS</b></h3>
        <p class="fets-title">Web Application, Prototype</p>
        <!-- <p class="about-fets">
            A Project Used To Monitor Transactions, Create Settlements And User
            Managements
          </p> -->
      </div>
    </div>
    <br />

    <div>
      <h1 class="project-highlight">Technologies I work with</h1>
      <br />
      <div class="tech">
        <img src="../assets/Angular.svg" width="15%" alt="" />
        <img src="../assets/vue-9.svg" width="15%" alt="" />
        <img src="../assets/reactt.svg" width="15%" alt="" />
        <img src="../assets/nodee.png" width="15%" alt="" />
      </div>
    </div>
    <br />
    <div>
      <div class="row">
        <div class="col-md-9">
          <div class="another-heading">
            <h1 class="interests">Some More Interesting Projects</h1>

            <img
              src="../assets/Line 3.svg"
              width="500px"
              alt=""
              class="red-line"
            />
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
          <p class="fets"><b>Venner Woods</b></p>
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
/* .about {
  padding-left: 60px;
  padding-right: 60px;
} */
.body {
  background-color: #f5f5dd;
}
.my-name {
  font-weight: 1000;
  font-size: 70px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3.2px;
  color: #8b4411;
  opacity: 1;
}
.occupation {
  font-weight: 800;
  font-size: 30px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3px;
  color: #8b4411;
  opacity: 1;
}

.wrapper .dynamic-txts {
  margin-left: -30px;
  line-height: 60px;
  height: 60px;
  overflow: hidden;
}
.dynamic-txts li {
  color: #8b4411;
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 2rem;
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
/* .profile-picturee {
  height: 200px;
} */
/* .profile-picture {
  margin-top: -40px;

  justify-self: center;
  height: 50%;
} */
.dp {
  margin-top: -60px;
  width: 90%;
}
.project-highlight {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: 3.04px;
  color: #cc9767;
  opacity: 1;
}
.weather-slides {
  width: 60%;
}
#slider {
  overflow: hidden;
}
#slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  left: 0;
  animation: 20s slider infinite;
}
#slider figure img {
  width: 20%;
  float: left;
}
@keyframes slider {
  0% {
    left: 0;
  }
  20% {
    left: 0;
  }
  25% {
    left: -100%;
  }
  45% {
    left: -100%;
  }
  50% {
    left: -200%;
  }
  70% {
    left: -200%;
  }
  75% {
    left: -300%;
  }
  95% {
    left: -300%;
  }
  100% {
    left: -400%;
  }
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
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.58px;
  color: #b3aeae;
  text-transform: capitalize;
  opacity: 1;
}
.tams {
  padding-left: 30px;
}
.tms {
  border-radius: 7px;
  width: 120%;
}
@media all and (max-width: 480px) {
  .tms {
    width: 100%;
  }
}
.interests {
  width: 622px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 50px;
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
.another-heading {
  display: flex;
}
.red-line {
  margin-top: 200px;
}
.tech {
  display: flex;
  justify-content: space-evenly;
}
</style>
