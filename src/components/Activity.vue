<template>
  <div class="section">
    <header>
      <img src="../assets/activity.png" alt="活动介绍" />
      <div>
        <h4>活动介绍</h4>
        <p>Activity Description</p>
      </div>
    </header>
    <div class="nav">
      <div class="nav-item" @click="changeNav(1)">
        <h5>科研</h5>
        <p>Open Research</p>
        <div
          class="nav-point"
          :class="currentIndex === 1 ? 'current' : ''"
        ></div>
      </div>
      <div class="nav-item" @click="changeNav(2)">
        <h5>学习</h5>
        <p>Open Learning</p>
        <div
          class="nav-point"
          :class="currentIndex === 2 ? 'current' : ''"
        ></div>
      </div>
      <div class="nav-item" @click="changeNav(3)">
        <h5>竞赛</h5>
        <p>CACL高校社团挑战联赛</p>
        <div
          class="nav-point"
          :class="currentIndex === 3 ? 'current' : ''"
        ></div>
      </div>
      <div class="nav-item" @click="changeNav(4)">
        <h5>特色活动</h5>
        <p>Open Talks</p>
        <div
          class="nav-point"
          :class="currentIndex === 4 ? 'current' : ''"
        ></div>
      </div>
    </div>
    <div class="content">
      {{ content[currentIndex - 1] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Activity",
  data() {
    return {
      currentIndex: 1,
      content: [
        "OPENresearch是IEL搭建的科研技术交流平台，旨在形成完整科研链，为学生提供学术支持，为人工智能输入年轻力量。OPENresearch为学生提供开放的课题和数据，由广州博士后站提供坚实的学术后盾，学生可以竞题参与科研项目，激发创造力，以达到开拓学生科研视野的目的，为人工智能技术发展助力。",
        "我们的人工智能技术人才培养计划旨在为每一个对人工智能感兴趣的学生提供最纯粹的学习环境。IEL专注于对大学生的人工智能技术教育，依托互联网视频直播平台，采用视频公开课的形式，面向在校大学生免费开放。我们邀请到各大高校人工智能社团领军人物进行授课，将可能激发兴趣点的内容前置，根据不同水平提供不同难易程度的课程，构建完善的知识图谱、课程体系和进阶任务体系，随时调整更优的学习计划，适当调节学生的兴奋点，为学生提供多元的教学内容，分享技术经验。在此基础上，我们成立人工智能技术互助小组，包括Python学习小组，NLP学习小组等，成员在探讨中克服学习难题，在交流中完成技术任务挑战，将学习内容化繁为简，化整为零，实现相互学习，增进友谊，收获成长，共同发展目的。",
        "为丰富联盟成员实践操作，提供更多实战机会，联盟自行组织CACL(College Association Challenges League)高校社团挑战联赛，为各大高校社团提供一个有趣、有用、高度自制的公平竞赛平台。在第一赛季中，共有31支来自各大高校的人工智能团队参与其中，在公平、公正的专业平台上，进行技术上的切磋和交流。-对外合作竞赛我们将定期引入优质竞赛资源，让联盟成员能够在竞争协作中成长。2020年，联盟已和华为云达成战略合作，将共同为联盟成员提供更高水准、更全面、更丰富的竞赛平台。",
        "OPENTalks是大咖进校园活动。联盟邀请技术行业精英走进校园，与学生进行零距离的接触和交流，为学生提供最前沿的大咖咨询，调动学生的对人工智能技术的兴趣，在与行业精英的交流中领悟最前沿的人工智能技术知识，感受最真切的人工智能技术发展的魅力。除此之外，我们还有IEL-CON，OpenHackathon，社会公益活动，团队文化交流活动等活动。我们希望，通过系列活动，增加成员之间的交流，让彼此能在活动中有所收获的同时，结识志同道合的伙伴。"
      ]
    };
  },
  methods: {
    changeNav: function(currentIndex) {
      console.log(currentIndex);
      this.currentIndex = currentIndex;
    }
  }
};
</script>

<style lang="sass" scoped>
.section
  padding: 0 10vw
header
  display: flex
  align-items: center
  text-align: left
  img
      width: 64px
      height: 100%
      margin-right: 1em
  h4
    margin: 0
  p
    margin: 0.5em 0 0 0
.nav
  display: flex
  align-items: center
  justify-content: space-around
  margin-top: 2em
  cursor: pointer
  h5
    font-size: 1.5em
    font-weight: normal
    margin: 0.2em
  .nav-point
    width:100%
    height:1em
  .current
    background: #ffffff
    box-shadow:0px -9px 68px 13px rgba(36,201,255,0.79)
.content
  width: 100%
  background: rgba(255,255,255,0.3)
  border-radius: 1em
  padding: 3em 4em
  height: 15em
  text-align: justify
  line-height: 2em
  margin-top: 4em
</style>
