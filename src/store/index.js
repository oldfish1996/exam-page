import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//响应用户动作
const actions = {
  //初始化所有题目
  init(context) {
    context.commit('INIT')
  },
  //下一题
  nextItem(context) {
    context.commit('addItemNum')
  },
  // 上一题
  prevItem(context) {
    context.commit('subItemNum')
  },
  //跳转到指定题号
  jumpToItem(context, index) {
    context.commit('jumpItemNum',index)
  },
  //停止计时
  stopTimer(context) {
    context.commit('STOP')
  }
}
//修改state的数据
const mutations = {
  INIT(state) {
    state.itemNum = 1
    state.user_answer.length = 0
    state.leftTime = 3600
    state.fullTime = 0
    clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.leftTime --
      state.fullTime++
      if(state.leftTime<=0){
        clearInterval(state.timer)
      }
    }, 1000);
  },
  addItemNum(state) {
    state.itemNum ++
  },
  subItemNum(state) {
    state.itemNum --
  },
  jumpItemNum(state,index) {
    state.itemNum = index
  },
  STOP(state) {
    clearInterval(state.timer)
  }
}
//保存具体数据
const state = {
  itemNum: 1, //目前是第几题
  timer: null,  //计时器
  leftTime: 3600, //答题可用时间
  fullTime: 0,    //用户答题用时
  //每一题正确答案的id
  right_answer: [0,3,1,1,2,3],
  //用户的选项
  user_answer: [],
  //每个题目的详情
  itemDetails:[
    {
      title: '题目1',
      name: 'item1',
      answers: [
        {id: 0,content: '题目1选项A(正确答案)'},
        {id: 1,content: '题目1选项B'},
        {id: 2,content: '题目1选项C'},
        {id: 3,content: '题目1选项D'},
      ]
    },
    {
      title: '题目2',
      name: 'item2',
      answers: [
        {id: 0,content: '题目2选项A'},
        {id: 1,content: '题目2选项B'},
        {id: 2,content: '题目2选项C'},
        {id: 3,content: '题目2选项D(正确答案)'},
      ]
    },
    {
      title: '题目3',
      name: 'item3',
      answers: [
        {id: 0,content: '题目3选项A'},
        {id: 1,content: '题目3选项B(正确答案)'},
        {id: 2,content: '题目3选项C'},
        {id: 3,content: '题目3选项D'},
      ]
    },
    {
      title: '题目4',
      name: 'item4',
      answers: [
        {id: 0,content: '题目4选项A'},
        {id: 1,content: '题目4选项B(正确答案)'},
        {id: 2,content: '题目4选项C'},
        {id: 3,content: '题目4选项D'},
      ]
    },
    {
      title: '题目5',
      name: 'item5',
      answers: [
        {id: 0,content: '题目5选项A'},
        {id: 1,content: '题目5选项B'},
        {id: 2,content: '题目5选项C(正确答案)'},
        {id: 3,content: '题目5选项D'},
      ]
    },
    {
      title: '题目6',
      name: 'item6',
      answers: [
        {id: 0,content: '题目6选项A'},
        {id: 1,content: '题目6选项B'},
        {id: 2,content: '题目6选项C'},
        {id: 3,content: '题目6选项D(正确答案)'},
      ]
    }
  ]
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})