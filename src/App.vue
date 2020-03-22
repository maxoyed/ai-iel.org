<template>
  <div id="app">
    <Menu id="menu" />
    <full-page :options="options" id="fullpage">
      <Overview />
      <Background />
      <Concept />
      <Section4 />
      <Section5 />
      <Section6 />
    </full-page>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Overview from "./components/Overview";
import Background from "./components/Background";
import Concept from "./components/Concept";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
export default {
  name: "app",
  components: {
    Menu,
    Overview,
    Background,
    Concept,
    Section4,
    Section5,
    Section6
  },
  data() {
    return {
      options: {
        licenseKey: "GPL-3.0-only",
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: [
          "Overview",
          "Background",
          "Concept",
          "Section4",
          "Section5",
          "Section6"
        ],
        sectionsColor: [
          "#6240f2",
          "#5280f9",
          "#ffffff",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab"
        ]
      }
    };
  }
};
</script>

<style lang="sass">
.section
  text-align: center
  justify-content: space-around
  color: #ffffff
  h3
    font-size: 2em
  h4
    font-size: 1.5em

// 更改导航条颜色
#fp-nav ul li a span, .fp-slidesNav ul li a span
  background: #ffffff !important
</style>
