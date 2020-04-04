<template>
  <header>
    <img :src="imgUrl" :alt="cn" />
    <div>
      <h4>{{ cn }}</h4>
      <p>{{ en }}</p>
    </div>
  </header>
</template>

<script>
export default {
  name: "Title",
  props: {
    icon: String,
    cn: String,
    en: String
  },
  data() {
    return {
      imgUrl: require(`../assets/${this.icon}.png`)
    };
  }
};
</script>

<style lang="sass" scoped>
header
  display: flex
  align-items: center
  text-align: left
  padding: 0 10vw
  img
      width: 64px
      height: 100%
      margin-right: 1em
  h4
    margin: 0
  p
    margin: 0.5em 0 0 0
</style>
