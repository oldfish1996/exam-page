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
      //弹窗提示
      let alertMessage = '确认后进入答题并开始计时，中途无法暂停，是否进入答题？'
      this.$confirm(alertMessage, '提醒', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //确认后跳转到score页面(score组件)
        this.$router.push('items')
        this.$message({
          type: 'success',
          message: '计时开始!'
        })
      }).catch(reason => {
        console.log(reason) 
      })     
    }
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