<template>
    <div id="top">
        <router-link to='/'>网上书店</router-link>
        <p @click="ttt1()">购物车</p>
        <input type="text" v-model="ss">
        <button @click="ttt2(ss)">搜索</button>
        <div id='zx'>
            <p>{{user.username}}</p>
            <router-link to='/login' v-if='!user.name'>登录</router-link>
            <router-link to='/login' v-else>注销</router-link>
        </div>
    </div>    
</template>

<script>
var AV = require('leancloud-storage')
AV.init({
  appId:"bdoJcM8SkTrXH3hJkVnxBy3q-gzGzoHsz",
  appKey:"arg5qkNsrlqHAcwhlcUjq4Xc",
  serverURL:"https://bdojcm8s.lc-cn-n1-shared.com"
})
export default {
  name: 'top',
  data(){
    return{
        user:{
            username:'',
            password:'',
            id:this.$route.params.id,
        },
        ss: ''
    }
  }, 
  methods:{
      ttt1:function(){
          this.$router.push({ path:'/car/'+this.$route.params.id})
      },
      ttt2:function(ss){
        var query = new AV.Query('Books')
        query.equalTo('name',ss)
        query.first().then((query)=>{
            var id = query.id
            return id
        }).then((id)=>{
            this.$router.push({path:'/book/'+id})
        })
      }
  },
  created(){
    var query = new AV.Query('Auser')
    query.get(this.user.id).then((query)=>{
        var user ={}
        user = query.attributes
        return user
    }).then((user)=>{
        this.user = user
    })
  }
}
</script>

<style>
#top{
    height: 30px;
    background: rgb(206, 206, 216);
}
#zx{
    float: right;
}
a{
    width: 100px;
    text-decoration: none;
    color: black;
    margin-left: 20px;
}
#top input{
    margin-left: 20px;
}
p{
    display: inline;
    margin-left: 20px;
}
</style>