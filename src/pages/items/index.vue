<template>
  <div class="container">
    <header>
      <h3>第{{nowId}}题</h3>
      <h3>剩余时间 {{leftTimeH}} 
                : {{leftTimeM}} 
                : {{leftTimeS}}
      </h3>
    </header>
    <main>
      <el-pagination
        background
        layout="prev, pager, next"
        :pager-count="11"
        @current-change="handleCurrentChange"
        :current-page="nowId"
        :page-size="pageSize"
        :total="itemDetails.length">
      </el-pagination>
      <h3>{{nowItem.title}}</h3>
      <el-radio-group class="answer" v-model.number="radio">
        <el-radio v-for="(answer) in nowItem.answers" 
                  :label="answer.id"
                  :key="answer.id">{{answer.content}}
        </el-radio>
      </el-radio-group>      

      <el-button-group class="btn">
        <el-button size="mini" type="primary" icon="el-icon-arrow-left" :disabled="nowId<=1" @click="prev">上一题</el-button>
        <el-button size="mini" type="primary" :disabled="nowId>=itemDetails.length" @click="next">下一题<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
    </main>
    <footer>
      <el-button type="primary" plain @click="moveToScore">提交查看分数</el-button>
    </footer>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
  name: 'Items',
  data() {
    return {
      radio: -1,  //用户选项
      nowId: 1,   //当前在第几题
      pageSize: 1, //每页一道题
    }
  },
  watch: {
    nowId(newVal,oldVal) {
      if(newVal !== oldVal) {
        //存储上一题用户选项
        this.user_answer[oldVal-1] = this.radio
        //跳转到其他题目，恢复radio选项
        this.radio = this.user_answer[newVal-1]
      }
    },
    leftTime: function(val) {
      if(val<=0) {
        setTimeout(() => {
          //自动提交前存储最后一题用户选项
          this.user_answer[this.nowId-1] = this.radio
          this.$message('测试时间到，已自动提交')
          this.$router.replace('score')
        }, 1000);      
      }
    }
  },
  computed: {
    ...mapState(['itemDetails','itemNum','user_answer','leftTime']),
    //当前在哪道题
    nowItem() {
      return this.itemDetails[this.itemNum-1]
    },
    //计时器格式
    leftTimeH() {
       let h = Math.floor(this.leftTime/3600)
       return h.toString().length==2?h:"0"+h.toString();
    },
    leftTimeM() {
       let m = Math.floor(this.leftTime%3600/60)
       return m.toString().length==2?m:"0"+m.toString();
    },
    leftTimeS() {
       let s = this.leftTime%60
       return s.toString().length==2?s:"0"+s.toString();
    }
  },
  methods: {
    ...mapActions(['init','nextItem','prevItem','jumpToItem','stopTimer']),
    //跳到下一题并更新data中当前题目id
    next() {
      //跳转下一题
      this.nextItem()
      //更新当前题目id
      this.nowId = this.itemNum
    },
    prev() {
      //跳转上一题
      this.prevItem()
      //更新当前题目id
      this.nowId = this.itemNum
    },
    moveToScore() {
      //存储最后一题的选项
      this.user_answer[this.nowId-1] = this.radio

      let complete = true
      //检查是否有未作答题目
      this.user_answer.forEach(answer=>{
        if(answer == -1)complete = false;
      })
      let alertMessage = complete
      ?'您已经答完了所有题目，是否确认提交?'
      :'您还有未作答的题目，是否继续提交?'
      //弹窗提示
      this.$confirm(alertMessage, '提交后无法修改', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        //确认后跳转到score页面(score组件)
        this.$router.push('score')
        this.$message({
          type: 'success',
          message: '提交成功!'
        })
      }).catch(reason => {
        console.log(reason) 
      })      
    },
    //处理分页序号跳转
    handleCurrentChange(val){
      // console.log(this.user_answer);
      this.nowId = val
      this.jumpToItem(val)
    }
  },
  //测试user_answer
  created() {
    //init里面有开始计时
    this.init();
    console.log(this.user_answer)
  },
  beforeDestroy() {
    //清空定时器
    this.stopTimer()
    console.log(this.user_answer)
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    padding: 0 4rem 6rem 4rem;
    background-color: #ecf0f1;
  }
  header {
    display: flex;
    justify-content: space-between;
    flex: 1;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 5;  
  }
  main h3 {
    padding: 2rem 0;
    text-align: left;
  }
  .answer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    height: 10rem;
    /* border: 1px solid red; */
  }
  .btn {
    margin: 2rem auto;
    text-align: center;
  }
  footer {
    flex: 2;
    text-align: center;
  }
</style>