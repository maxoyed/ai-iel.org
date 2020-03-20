<template>
  <div id="app">
    <Menu id="menu" />
    <full-page :options="options" id="fullpage">
      <Overview />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </full-page>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import Overview from "./components/Overview";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
export default {
  name: "app",
  components: {
    Menu,
    Overview,
    Section2,
    Section3,
    Section4,
    Section5,
    Section6
  },
  data() {
    return {
      options: {
        licenseKey: "GPLv3",
        scrollOverflow: true,
        scrollBar: false,
        menu: "#menu",
        navigation: true,
        anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
        sectionsColor: [
          "#6240f2",
          "#5280f9",
          "#1f2631",
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
