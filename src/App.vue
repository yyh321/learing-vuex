<template>
  <div>
    <h1>lession:{{lession}}</h1>
    <h1>lessionName:{{getLessionName}}</h1>
    <h1>name: {{name}}</h1>
    <h1>name2: {{name2}}</h1>
    <h1>name3: {{name3}}</h1>
    <h1>getTeacherName: {{getTeacherName}}</h1>
    <button @click="changeName">更改名字</button>
    <button @click="updateName">更新名字</button>
  </div>
</template>

<script>
import {SET_LESSION_NAME, UPDATE_LESSION_NAME} from './store/constant'
import { mapState,mapMutations,mapActions, createNamespacedHelpers,mapGetters } from "vuex"; 
// 通过createNamespacedHelpers 方法获取对应的mapState
// let {mapState} = createNamespacedHelpers('teacher') 
// ...mapState(['name']) 此name就是teacher模块下的name

// 默认模块中的状态都是挂在对应的模块内，并没有直接放到根状态上
// getters/mutations/actions默认都会合并在根模块中
export default {
  computed: {
    ...mapState(['lession']),
    ...mapState('teacher',['name']),// 方式一 获取teacher模块下面的name属性
    ...mapState({name2:state=>state.teacher.name}),// 方式二 获取teacher模块下面的name属性，重命名为name2
    ...mapState('teacher',{name3: state => state.name}),// 方式三 获取teacher模块下面的name属性,第一个参数指定了模块名，则state中不需要指定模块名了，此state就是teacher模块中的state，重命名为name3
  
    ...mapGetters(['getLessionName']),
    ...mapGetters('teacher',['getTeacherName']) //获取teacher模块中的getTeacherName,第一个参数表示模块名,或者用createNamespacedHelpers获取对应的模块
  },
  methods:{
    ...mapMutations([SET_LESSION_NAME]), //注意这个是跟方式三一起使用的
    changeName(){
      //调用commit方法有3种方式，方式一
      // this.$store.commit(SET_LESSION_NAME,{name: '学习NodeJs'})

      // 方式二可以写成对象的方式传递
      // this.$store.commit({
      //   type: SET_LESSION_NAME,
      //   name: '学习React'
      // })

      // 方式三
      this[SET_LESSION_NAME]({name: '学习java'})

      
    },

    ...mapActions([UPDATE_LESSION_NAME]),
    updateName() {
      this[UPDATE_LESSION_NAME]()
    }
    
  }
};
</script>

<style>
</style>