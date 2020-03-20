<template>
  <ul id="menu">
    <li data-menuanchor="page1" class="active">
      <a href="#page1">联盟概述</a>
    </li>
    <li data-menuanchor="page2"><a href="#page2">背景&机遇</a></li>
    <li data-menuanchor="page3"><a href="#page3">理念&使命</a></li>
    <li data-menuanchor="page4"><a href="#page4">活动介绍</a></li>
    <li data-menuanchor="page5"><a href="#page5">新闻事件</a></li>
    <li data-menuanchor="page6"><a href="#page6">联盟未来及愿景</a></li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
#menu
  width: 100vw
  display: flex
  justify-content: space-around
  padding: 0 10vw
  position: fixed
  top: 20px
  right: 20px
  z-index: 70
  -webkit-font-smoothing: antialiased
  -moz-font-smoothing: antialiased
  letter-spacing: 1px
  font-size: 1.1em
  li
    display: inline-block
    margin: 10px 0
    position: relative
  a
    color: #fff
    padding: 0 1.1em 1.1em 1.1em
  li.active a:after
    content: ""
    margin: 0 1.1em 0 1.1em
    height: 2px
    background: #fff
    display: block
    position: absolute
    bottom: -6px
    left: 0
    right: 0
    display: block
#menu-line
  position: absolute
  bottom: -4px
  left: 0
  width: 159px
  height: 2px
  background: #fff
</style>
