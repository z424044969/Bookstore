<template>
  <div id='car'>
      <h1>购物车列表</h1>
      <table>
          <tr>
            <th>书名</th>
            <th>作者</th>
            <th>单价</th>
            <th>数量</th>
            <th>小计</th>
            <th>操作</th>
          </tr>
          <tr v-for="dingdan in dingdans" :key='dingdan.name'>
            <th>{{dingdan.name}}</th>
            <th>{{dingdan.author}}</th>
            <th>{{dingdan.price}}</th>
            <th>{{dingdan.num}}</th>
            <th>{{dingdan.num*dingdan.price}}</th>
            <th><button @click="deletes(dingdan.id)">删除</button></th>
          </tr>
          <tr>
              <th>总价</th>
              <th>{{addprice}}</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
          </tr>
      </table>
      <button style="width:600px" @click="adddingdan()">购买</button>
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
    name: 'car',
    data(){
        return{
            dingdans:[],
            addprice: 0,
            userid: this.$route.params.id,
        }
    },
    methods:{
        deletes:function(id){
            console.log(id)
            var de = new AV.Object.createWithoutData('Car',id)
            de.destroy()
        },
        adddingdan:function(){
            var Dingdans = AV.Object.extend('Dingdans');
            var dingdan = new Dingdans();
            var name = []
            var num = []
            for(let i=0;i<this.dingdans.length;i++){
                name.push(this.dingdans[i].name)
                num.push(this.dingdans[i].num)
            }
            dingdan.set('name', name)
            dingdan.set('num', num)
            dingdan.set('addprice', this.addprice)
            var user = new AV.Query('Auser')
            user.get(this.userid).then((user)=>{
                var Au = user.attributes
                dingdan.set('phone',Au.phone)
                dingdan.set('address',Au.address)
                dingdan.set('username',Au.name)
                dingdan.save().then(function (dingdan) {
                console.log('保存成功。objectId：' + dingdan.id);
                }, function () {
                });
            })
        }
    },
    created(){
        var car = new AV.Query('Car')
        var dingdan = []
        car.find().then((car)=>{
            var addprice = 0
            for(let i=0;i<car.length;i++){
                dingdan.push(car[i].attributes)
                dingdan[i].id = car[i].id
                addprice = addprice + dingdan[i].num*dingdan[i].price
            }
            return addprice
        }).then((addprice)=>{
            this.addprice = addprice
        })
        this.dingdans = dingdan
    }
}
</script>

<style>
th{
    width: 100px;
}
#car{
    width: 700px;
    margin: 0 auto;
    top: 35%;
}
table,tr,td{
    border: 1px solid black;
    border-collapse: collapse;
}
#car button{
    background: rgb(216,83,78);
    color: azure;
    text-align: center;
    margin: 0 auto;
}
</style>