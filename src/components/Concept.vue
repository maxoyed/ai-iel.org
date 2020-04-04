<template>
  <div class="section">
    <div class="title">
      <Title icon="concept" cn="理念&使命" en="Concept & Mission" />
    </div>
    <div class="content-area">
      <div class="content-block">
        <h4>平等自由</h4>
        <p>
          每一个人都是受益者和建设者，都能拥有自己的发展空间，自由、平等地表达自己的思想。
        </p>
      </div>
      <div class="content-block">
        <h4>包容开放</h4>
        <p>
          不分地区，不分种族，不分信仰，尊重每一个人的思想和背景，让社区更加纯粹，保持包容和开放。
        </p>
      </div>
      <div class="content-block">
        <h4>多元互助</h4>
        <p>
          我们相信，每一个人都有自己独特的闪光点。因此，我们鼓励大家互相分享，共同进步，成为彼此的良师益友。
        </p>
      </div>
    </div>
    <div class="content-footer">
      “IEL”的存在打破了高校与城市之间的空间壁垒，为未来的技术英才提供多元发展机会和互相学习的环境。我们所打造的，并不是一个生硬而冰冷的资源平台，而是一个属于学生自己的、可持续发展的、去中心化的技术生态圈，为每一位成员的发展赋能。
    </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  name: "Concept",
  components: {
    Title
  }
};
</script>

<style lang="sass" scoped>
.title
  color: #5D657E
  margin: 5vw
  display: flex
  justify-content: space-around
.content-area
  display: flex
  justify-content: space-between
  padding: 0 15vw
  .content-block
    width: 20vw
    background: linear-gradient(180deg,rgba(81,202,254,1) 0%,rgba(88,154,249,1) 100%)
    box-shadow: 0px 19px 57px 0px rgba(114,165,255,0.5)
    border-radius: 16px
    padding: 0 2vw
    p
      text-align: justify
.content-footer
  color: #5D657E
  padding: 2vw 25vw
  line-height: 2em
  margin-top: 5vw
</style>
