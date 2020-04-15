<template>
  <div class="sign">
    <h1>用户注册</h1>
    用户名 <input type="text" v-model="user.username"><br>
    密码 <input type="text" v-model="user.password"><br>
    姓名 <input type="text" v-model="user.name"><br>
    地址 <input type="text" v-model="user.address"><br>
    电话 <input type="text" v-model="user.phone"><br>
    邮编 <input type="text" v-model="user.post"><br>
    邮箱 <input type="text" v-model="user.email"><br>
    <button @click="ttt1">注册</button>
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
  name: 'Sign',
  props: {
  },
  data(){
      return{
        user:{
          username:'',
          password:'',
          name: '',
          address: '',
          phone: '',
          post: '',
          email: ''
        }
      }
  }, 
  methods:{
      ttt1:function(){
        var User = AV.Object.extend('Auser')
        var user = new User()
        user.set('username',this.user.username);
        user.set('password',this.user.password);
        user.set('email',this.user.email);
        user.set('post',this.user.phone);
        user.set('name',this.user.phone);
        user.set('phone',this.user.phone);
        user.set('address', this.user.address);
        user.save().then(function (user) {
          console.log('注册成功。objectId：' + user.id);
          alert("注册成功")
        }, function () {
        // 注册失败（通常是因为用户名已被使用）
        });
        this.$router.push('/login')
      }
  }
}
</script>
<style scoped>
.sign{
    background: rgb(184,229,248);
    width: 400px;
    height: 260px;
    margin: 0 auto;
    top: 35%;
    text-align: center;
    color: rgb(14,139,255);
}
</style>
