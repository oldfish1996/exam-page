<template>
  <div class="home">
    <h1>欢迎来到答题广场</h1>
    <el-button type="primary" plain @click="moveToItems">开始答题</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    moveToItems() {
      this.$router.push('items')
    },
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    min-height: 100vh;
    align-items: center;
    justify-content: center;

    color: #34495e;

    background:
    linear-gradient(limegreen,transparent),
    linear-gradient(90deg,skyblue,transparent),
    linear-gradient(-90deg,coral,transparent);
    background-blend-mode: screen;
  }
  h1 {
    margin-bottom: 8rem;
  }
</style>