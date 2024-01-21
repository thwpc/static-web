<template>
  <img alt="Vue logo" src="../assets/img/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <p>num>{{ num }}</p>
  <button @click="handleClick">click num</button>
  <el-button>elButton</el-button>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import {useStore} from 'vuex'
import { computed,ref } from 'vue';
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){

    const store = useStore();
    const num =ref(4);
    const handleClick = ()=>{
      console.log("click num")
      // store.state.num++;
      num.value++;
      // store.commit('home/add')
    }
    return{
      handleClick,
      num
    }
  }
}
</script>
