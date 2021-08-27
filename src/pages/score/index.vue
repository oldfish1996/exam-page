<template>
  <main>
    <h3>本次测试的满分为：{{fullScore}}</h3>
    <h3>本次测试用时： 
      <span v-if="timeH>0">{{timeH}} h &nbsp;</span>
      <span v-if="timeH>0||(timeH==0&&timeM>0)">{{timeM}} min &nbsp;</span>
      <span>{{timeS}} s &nbsp;</span>
    </h3>
    <h1>您的最终得分为：{{finalScore}}</h1>
    <el-button type="primary" plain @click="moveToItems">再做一遍</el-button>
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Score',
  methods: {
    moveToItems() {
      this.$router.replace('items')
    }
  },
  computed: {
    ...mapState(['right_answer','user_answer','fullTime']),
    timeH() {
      return Math.floor(this.fullTime/3600)
    },
    timeM() {
      return Math.floor((this.fullTime-this.timeH*3600)/60)
    },
    timeS() {
      return this.fullTime%60
    },
    finalScore() {
      let result = 0
       this.user_answer.forEach((answer, index)=>{
         if(answer === this.right_answer[index]){
           result += 20
         }
       })
      return result
    },
    fullScore() {
      return this.right_answer.length*20;
    }
  }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 4rem 6rem 4rem;
  background-color: #ecf0f1;
}
main h1,h3 {
  margin: 0;
}
h3 {
  padding-bottom: 2rem;
  font-size: 1rem;
  font-weight: lighter;
}
h1 {
  padding-bottom: 2rem;
  font-size: 1.5rem;
}
</style>