<template>
  <div class="section">
    <header>
      <Title icon="news" cn="新闻&事件" en="News & Events" />
    </header>
    <div class="content">
      <div class="news-item" v-for="item in news" :key="item.time">
        <img src="../assets/news1.png" alt="" />
        <div class="news-info">
          <p class="news-title">{{ item.title }}</p>
          <p class="news-time">{{ item.time }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "./Title";
export default {
  name: "News",
  components: {
    Title
  },
  data() {
    return {
      news: [
        {
          title: "Open Learning | Python学习营开营啦！",
          time: "2020年4月1日"
        },
        {
          title: "Open Learning | Python学习营开营啦！",
          time: "2020年4月2日"
        },
        {
          title: "Open Learning | Python学习营开营啦！",
          time: "2020年4月3日"
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
.section
  height: 100%
  display: flex
  flex-direction: column
header
  padding: 4vw 4vw 2vw 4vw
  background: #4986FA
.content
  display: flex
  justify-content: space-around
  align-items: center
  padding: 8vw 10vw
  .news-item
    background: #ffffff
    border-radius: 1em
    width: 20vw
    display: flex
    flex-direction: column
    overflow: hidden
    cursor: pointer
    img
      width: 100%
    .news-info
      color: #5D657E
      font-size: 0.8em
      text-align: left
      padding: 0.5em 2em
      .news-time
        color: #999
</style>
