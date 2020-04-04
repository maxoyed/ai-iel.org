<template>
  <div class="section">
    <Title icon="future" cn="未来&愿景" en="Future & Vision" />
    <div class="content">
      <p>
        “志之所趋，无远弗届。志之所向，无坚弗入。”“IEL”在脚踏实地完善工作的同时，从未停止对未来探索的脚步和对星辰明月的仰望。
        在这个拥有高度不确定性的时代，机遇与挑战并存，“IEL”对未来发展始终充满着信心。目前，联盟秘书处已将总部设立在中国的直辖市重庆，直接管理西南片区以及西北片区的高校。华东片区（上海），华中片区（武汉），华南片区（广东），华北片区（北京），东北片区（黑龙江），也正在有条不紊地建设中，并由联盟秘书处统筹管理。而在未来十年，联盟将深入世界各国，致力于成为无国界组织。通过“IEL”，人们能够在最大程度上学习不同的文化、知识，吸收不同思想，打造最纯粹的技术生态社区。
      </p>
      <p>
        未来，我们希望“IEL”的成员能在各自的领域，不断的研究和探索，为人类社会的技术发展做出贡献。“IEL”也会持续发展，为广大技术爱好者赋能。
      </p>
    </div>
    <footer>
      <div class="contact-info">
        <p>邮箱：lianmengmsc@163.com</p>
        <p>微信公众号：人工智能创新精英联盟</p>
        <p>QQ官方号：1174629729</p>
        <p>合作微信：Brandy_suyc</p>
      </div>
      <div class="contact-qrcode">
        <el-popover placement="top" trigger="hover">
          <img class="popover" src="../assets/qq-qrcode.png" alt="QQ群二维码" />
          <div slot="reference">
            <img src="../assets/qq.png" alt="QQ群" />
            <p>QQ群</p>
          </div>
        </el-popover>
        <el-popover placement="top" trigger="hover">
          <img
            class="popover"
            src="../assets/wechat-qrcode.jpg"
            alt="合作联系微信"
          />
          <div slot="reference">
            <img src="../assets/wechat.png" alt="合作联系微信" />
            <p>合作联系微信</p>
          </div>
        </el-popover>
      </div>
    </footer>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  name: "Future",
  components: {
    Title
  }
};
</script>

<style lang="sass" scoped>
.section
  background: -webkit-gradient(linear, top right, bottom left, from(#53CAFD), to(#5187F7))
  background: -webkit-linear-gradient(#53CAFD, #5187F7)
  background: linear-gradient(#53CAFD,#5187F7)
.content
  text-align: center
  padding: 5vw 15vw
  font-size: 0.9em
  line-height: 2.5em
footer
  position: fixed
  background: #1F2E59
  font-size: 0.8em
  width: 100%
  padding: 2em 10vw
  bottom: 0
  display: flex
  justify-content: space-between
  text-align: left
  .contact-qrcode
    display: flex
    align-items: center
    div
      display: flex
      margin-left: 2em
      flex-direction: column
      align-items: center
      cursor: pointer
      img
        width: 32px
        height: 32px
</style>
