<template>
  <div class="body">
    <br />

    <div>
      <h1 class="about-me">About Me</h1>
    </div>
    <div>
      <p class="intro">
        I am Eguzoro Chimamaka. You can call me NACE. I am neither specially
        clever nor specially gifted. I am only very CURIOUS, and curiousity is
        the true way to improve myself and become a better developer.
      </p>
    </div>
    <br /><br />
    <div class="row">
      <div class="col-md-3">
        <div class="social">
          <a href="https://instagram.com/techwithnace?utm_medium=copy_link">
            <img src="../assets/instagram.png" alt="" class="ig" />
          </a>
          <p class="handle">techwithnace</p>
        </div>
        <br />
        <br />
        <div class="social">
          <a href="http://linkedin.com/in/chimamaka-eguzoro-4906791a0">
            <img src="../assets/linkedin.png" alt="" class="ig" />
          </a>
          <p class="handle">Chimamaka Eguzoro</p>
        </div>
        <br />
        <br />
        <div class="social">
          <a href="https://github.com/AmakaEguzoro">
            <img src="../assets/twitter.png" alt="" class="ig" />
          </a>
          <p class="handle">AmakaEguzoro</p>
        </div>
        <br />
      </div>
      <br />
      <br />

      <div class="col-md-6">
        <div class="sentences">
          <p>
            With over 2 years of hands-on experience in building responsive web
            applications for B2B and B2C services, I specialise in user-centred
            design, creating brand identities, and User Interfaces (Websites,
            dashboards, and mobile app design.
          </p>
        </div>
        <div class="sentences-2">
          <p>
            I believe people are at the center of every solution (understand
          </p>
        </div>
        <div class="sentences-3">
          <p>
            real-user insights and behavior) and I am passionate about helping
            businesses create engaging products that enable users to interact
            directly with their brands.
          </p>
        </div>
        <div class="sentences-4">
          <p>
            I also possess massive experience in not just product designs and
            implementation but also in digital marketing and website
            development. In my current role, I and my team of brilliant
            designers use excellent research, development, and product design
            skills to identify a user’s precise needs. After this, we utilize
            our skill sets, training, and experience to come up with the
            required cutting-edge products. You can bet that a users’ needs will
            be at the core of all my design thinking. Right now, I am always
            willing to work on an exciting project where I will genuinely
            support and develop in every way possible to progress and develop my
            career further.
          </p>
        </div>
        <div class="sentences-5">
          <p>
            Identifying improved approaches and enhanced solutions to business
            challenges are activities that drive and inspire me. Exploration,
            pursuit and motivation are my frameworks for success. I believe that
            fresh perspectives and trying new techniques help businesses evolve
            and grow. my goal is to be on the cutting-edge of industry
            advancements.
          </p>
        </div>

        <div class="demola-resume">
          <p class="worker">Interested In Working With Me?</p>
          <a
            href="https://drive.google.com/file/d/1v9o-DJ8lkRdR1aeDXVdsGzu2dusZngda/view?usp=sharing"
          >
            <img src="../assets/download-resume.svg" alt="" />
          </a>
        </div>

        <br />
      </div>
      <div class="col-md-3">
        <img src="../assets/eguzoro-amaka.png" width="280px" alt="" />
      </div>
    </div>
    <!-- <p class="tools">Tools</p>
    <div class="logos">
      <img src="../assets/adobe.png" alt="" class="adobe" />
      <img src="../assets/figma.png" alt="" class="figma" />
      <img src="../assets/sketch.png" alt="" class="sketch" />
      <img src="../assets/zeplin.png" alt="" class="zeplin" />
    </div> -->

    <br />
  </div>
</template>
<style>
.body {
  background-color: #f5f5dd;
  /* padding-left: 60px;
  padding-right: 60px; */
}
.about-me {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 70px;
  letter-spacing: 3.2px;
  color: #472a28;
  text-transform: capitalize;
  opacity: 1;
}
.intro {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 25px;
  letter-spacing: 1.22px;
  color: #472a28;
  opacity: 1;
}
.sentences {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.51px;
  color: #868686;
  opacity: 1;
  width: min(500px, 100%);
}
.sentences-2 {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.51px;
  color: #868686;
  opacity: 1;
  width: min(500px, 100%);
}
.sentences-3 {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.51px;
  color: #868686;
  opacity: 1;
  width: min(500px, 100%);
}
.sentences-4 {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.51px;
  color: #868686;
  opacity: 1;
  width: min(500px, 100%);
}
.sentences-5 {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  letter-spacing: 0.51px;
  color: #868686;
  opacity: 1;
  width: min(500px, 100%);
}
.demola-resume {
  display: flex;
  justify-content: space-evenly;
}
.worker {
  font-family: "Montserrat", sans-serif;
  font-size: 17px;
  letter-spacing: 0.58px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
}
.tools {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 60px;
  letter-spacing: 2.46px;
  color: #d3d3d3;
  text-transform: capitalize;
  opacity: 1;
}
.logos {
  margin: auto;
  width: 72%;
  display: flex;
  justify-content: space-evenly;
}
.adobe {
  width: 72px;
  height: 71px;
}
.figma {
  width: 149px;
  height: 71px;
}
.sketch {
  width: 137px;
  height: 71px;
}
.zeplin {
  width: 82px;
  height: 75px;
}
.social {
  position: absolute;
  display: flex;
  justify-content: space-between;
}
.ig {
  width: 22px;
  height: 22px;
}
.handle {
  padding-left: 10px;
  font: normal normal normal 18px Montserrat;
  letter-spacing: 0.58px;
  color: #626060;
  text-transform: capitalize;
  opacity: 1;
}
</style>
