<template>
  <div id="app">
    <ul v-for="item in a" :key="item"> 
      <li>{{item.username}}</li>
    </ul>
  </div>
</template>

<script>
import {home} from './network/home'

export default {
  name:'app',
  data(){
    return {
      a:{}
    }
  },
  created(){
    home().then(res =>{
      this.a = res.data
      console.log(this.a);
    })
  }
}
</script>
