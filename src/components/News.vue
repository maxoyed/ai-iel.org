<template>
  <div class="section">
    <header>
      <img src="../assets/news.png" alt="新闻&事件" />
      <div>
        <h4>新闻&事件</h4>
        <p>News & Events</p>
      </div>
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
export default {
  name: "News",
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
  padding: 8vw 10vw 4vw 10vw
  background: #4986FA
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
