<template>
  <div class="login">
    <h1>用户登录</h1>
    <input type="text" value="user.username" v-model="user.username">
    <br>
    <input type="text" value="user.password" v-model="user.password">
    <br>
    <button v-on:click="ttt1">用户登录</button>
    <button v-on:click="ttt2">管理员登录</button><br>
    <p>没有账号？</p>
    <router-link to="/sign">注册</router-link>
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
  name: 'Login',
  props: {
  },
  data(){
      return{
          user:{
            username:'',
            password:'',
            id:''
          }
      }
  }, 
  methods:{
      ttt1:function(){
            var users = new AV.Query('Auser')
          users.equalTo('username',this.user.username)
          users.first().then((query)=>{
              const user ={}
              user.password = query.attributes.password
              user.id = query.id
              return user
          }).then((user)=>{  
            if(this.user.password==user.password){
                alert("登陆成功")
                this.$router.push('/main/' + user.id)
            }
            else{
                alert("登陆失败")
            }
          })
      },
      ttt2:function(){
          var users = new AV.Query('Auser')
          users.equalTo('username',this.user.username)
          users.first().then((query)=>{
              const user ={}
              user.password = query.attributes.password
              user.id = query.id
              return user
          }).then((user)=>{  
            if(this.user.password==user.password){
                alert("登陆成功")
                this.$router.push('/main_s')
            }
            else{
                alert("登陆失败")
            }
          })
      },
      hrefsign:function(){
           this.$router.push({ path:'/sign'})
      }
  }
}
</script>
<style scoped>
.login{
    background: rgb(184,229,248);
    width: 400px;
    height: 200px;
    margin: 0 auto;
    top: 35%;
    text-align: center;
    color: rgb(14,139,255);
}
</style>
