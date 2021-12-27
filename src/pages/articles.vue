<template>
  <div class="body">
    <div class="top">
      <h1 class="article">Articles</h1>
      <img src="../assets/pencil.png" height="200px" alt="" class="pencil" />
    </div>

    <div class="season">
      <p>2021</p>
    </div>
    <br />
    <div class="row">
      <div class="col-md-4">
        <p class="heading"><b>How to stay productive</b></p>
        <p class="write-up">How I Stay Productive Working Remotely.</p>
        <router-link to="" class="reads"> Read More</router-link>
      </div>
      <div class="col-md-4">
        <p class="heading"><b>Covid-19 Overturn</b></p>
        <p class="write-up">
          Covid-19 Made Almost Techie’s More Active And Valuable
        </p>
        <router-link to="/covid" class="reads">Read More</router-link>
      </div>
      <div class="col-md-4">
        <p class="heading"><b>Focus</b></p>
        <p class="write-up">The Ultimate Productivity Hack Of Saying No</p>
        <router-link to="" class="reads"> Read More</router-link>
      </div>
    </div>
    <br />
    <br />
    <br />
  </div>
</template>
<style>
.body {
  padding-top: 60px;
  padding-left: 60px;
  padding-right: 60px;
}
.top {
  display: flex;
}
.article {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 3.2px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
  letter-spacing: 3.2px;
  color: #333333;
  text-transform: capitalize;
  opacity: 1;
}
.pencil {
  margin-top: -60px;
}
.season {
  float: right;
  font-family: "Montserrat", sans-serif;
  font-size: 70px;
  font-weight: 700;
  letter-spacing: 3.62px;
  color: #ededede3;
  text-transform: capitalize;
  opacity: 1;
}
.row {
  margin: auto;
  width: 100%;
}
.write-up {
  width: 319px;
  text-align: left;
  font-family: "Poppins", serif;
  font-size: 17px;
  letter-spacing: 0.7px;
  color: #767676;
  text-transform: capitalize;
  opacity: 1;
}
.headings {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.64px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
}
.reads {
  text-align: left;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 0.64px;
  color: #000000;
  text-transform: capitalize;
  opacity: 1;
}
</style>
