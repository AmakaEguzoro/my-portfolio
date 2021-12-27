<template>
  <div class="body">
    <div>
      <h1 class="head">Case Studies</h1>
    </div>
    <br />
    <br />
    <div class="fets-project">
      <router-link to="/fetsmobile">
        <img
          src="../assets/fets-mobile.png"
          width=" 700px"
          height="458px"
          alt=""
      /></router-link>

      <br />
      <br />
      <div class="the-title">
        <p class="name">Fets Mobile</p>
        <p class="function">Mobile, Case Study</p>
      </div>
      <p class="explain">
        Fet Mobile Application Is Designed To Help Solve Problems Of The Day To
        Day Agency Banking Operations And Transactions Like Withdrawal And
        Airtime Purchase, And Payment Of Utility Bills All On The Go.
      </p>
    </div>

    <div class="fets-project">
      <router-link to="/powerdeal">
        <img src="../assets/powerdeal.png" width=" 100%" alt=""
      /></router-link>

      <br />
      <br />
      <div class="the-title">
        <p class="name">Powerdeals</p>
        <p class="function">Web Application, Case Study</p>
      </div>
      <p class="explain">
        Fet Mobile Application Is Designed To Help Solve Problems Of The Day To
        Day Agency Banking Operations And Transactions Like Withdrawal And
        Airtime Purchase, And Payment Of Utility Bills All On The Go.
      </p>
    </div>

    <div class="row extra">
      <div class="col-md-6 terminal">
        <img src="../assets/tms.png" width="400px" height="400px" alt="" />
        <p class="project-title">Terminal Management Dashboard</p>
        <p class="terminal-words">
          Power Deal Is An Electricity Bill Payment Service That Enables You
          Recharge And Buy Power Conveniently.
        </p>
      </div>
      <div class="col-md-6 uba">
        <img src="../assets/megalek.png" width="350px" height="400px" alt="" />
        <p class="project-title">MEGALEK HOSPITAL TMS</p>
        <p class="terminal-words">Web Application, Prototype</p>
      </div>
    </div>
  </div>
</template>
<style>
.body {
  padding-left: 80px;
  padding-right: 80px;
}
.head {
  width: 418px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 70px;
  font-weight: 800;
  letter-spacing: 3.2px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
}
.fets-project {
  height: 788px;
  margin: auto;
  width: 50%;
}
.the-title {
  display: flex;
}
.name {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.77px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
}
.function {
  font-family: "Montserrat", sans-serif;
  padding-left: 20px;
  padding-top: 5px;
  font-size: 15px;
  letter-spacing: 0.58px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
}
.explain {
  text-align: left;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  letter-spacing: 0.4px;
  color: #767676;
  text-transform: capitalize;
  opacity: 1;
}
/* .terminal {
  float: right;
  position: relative;
} */
.terminal-words {
  width: 400px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  letter-spacing: 0.4px;
  color: #767676;
  text-transform: capitalize;
  opacity: 1;
}
.project-title {
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.77px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
}
.extra {
  padding-left: 200px;
  padding-right: 200px;
}
</style>
