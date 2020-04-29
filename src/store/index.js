import Vuex from "vuex";
import Vue from "vue";

import {SET_LESSION_NAME,UPDATE_LESSION_NAME} from './constant'
import {getLession} from '../api/lession'
Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    lession: "学习Vuex"
  },
  getters:{
    getLessionName(state) {
      return state.lession
    }
  },
  mutations:{
    SET_LESSION_NAME(state,payload){
      state.lession = payload.name
    },
  },
  actions:{
    UPDATE_LESSION_NAME({commit},payload) {
      getLession().then(data => {
        commit({type:SET_LESSION_NAME,...data})
      })
    }
  },
  modules:{
    teacher:{
      namespaced:true, // 开启命名空间
      state: {
        name: "yyh123"
      },
      getters:{
        getTeacherName(state) {
          return state.name
        }
      }
    }
  }
});

export default store;
