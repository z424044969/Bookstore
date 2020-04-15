<template>
  <div id='Order'>
      <Left_s></Left_s>
      <table v-for="order in Orders" :key='order.id' id='order_s'>
          <tr>
              <td>书名</td>
              <td v-for="name in order.name" :key="name">{{name}}</td>
          </tr>
          <tr>
              <td>数量</td>
              <td v-for="num in order.num" :key="num">{{num}}</td>
          </tr>
          <tr>
              <th>用户名：{{order.username}}</th>
              <th>地址：{{order.address}}</th>
              <th>电话：{{order.phone}}</th>
              <th>总价：{{order.addprice}}</th>
          </tr>
      </table>
  </div>
</template>

<script>
import Left_s from './Left_s'
var AV = require('leancloud-storage')
AV.init({
  appId:"bdoJcM8SkTrXH3hJkVnxBy3q-gzGzoHsz",
  appKey:"arg5qkNsrlqHAcwhlcUjq4Xc",
  serverURL:"https://bdojcm8s.lc-cn-n1-shared.com"
})
export default {
    name: 'Order',
    data(){
        return{
            Orders:[]
        }
    },
    created(){
        var query = new AV.Query('Dingdans')
        query.find().then((query)=>{
            for(let i=0;i<query.length;i++){
                this.Orders.push(query[i].attributes)
            }
            console.log(this.Orders)
        })
    },
    components: {
        Left_s
    }
}
</script>

<style scoped>
th{
    width: 100px;
}
#Order{
    margin: 0 auto;
    top: 35%;
    text-align: center;
}
table,tr,td{
    border: 1px solid black;
    border-collapse: collapse;
}
</style>