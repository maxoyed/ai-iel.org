<template>
  <div class="section">
    <h3>人工智能创新精英联盟</h3>
    <h4>Artificial Intelligence Innovation Elite League</h4>
    <div class="content-block">
      <div class="content-title">
        <img src="../assets/overview.png" alt="联盟概述" />
        <div class="title-text">
          <h5>联盟概述</h5>
          <h5>IEL Overview</h5>
        </div>
      </div>
      <p>
        联盟全称为“人工智能创新精英联盟”（artificial intelligence innovation
        elite
        league，以下简称“IEL”），是由一群高校学生自主发起的学生组织，旨在汇聚全世界最优秀的“极客青年（Geek）”，打造最纯粹的技术生态圈（Creat
        a Geek Ecology）。
      </p>
      <p>
        “IEL”为会员提供优质学习资源，企业资源，社会资源等，推动以人工智能为核心的新一代信息技术的应用与发展。联盟作为人工智能爱好者群体中的桥梁纽带，将致力于推动完善人工智能及其相关技术学习领域的规范化，促进高校人工智能领域的协同发展。
      </p>
      <el-popover placement="top" trigger="click">
        <img class="popover" src="../assets/qq-qrcode.png" alt="QQ群二维码" />
        <el-button slot="reference" class="join-us" type="primary" round>
          JOIN US
        </el-button>
      </el-popover>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overview"
};
</script>

<style lang="sass" scoped>
a
  color: #ffffff
h3
  padding-top: 2em
.content-block
  width: 60vw
  margin: 2em 20vw 0 20vw
  padding: 2vw 0
  border-radius: 1em
  background: #ffffff
  color: #718DC0
  .content-title
    img
      width: 64px
      height: 100%
    h5
      font-size: 1.2em
      line-height: 1.2em
      color: #333333
      margin: 0.2em
  p
    text-align: justify
    padding: 0 4vw 0 4vw
    line-height: 1.5em
</style>
