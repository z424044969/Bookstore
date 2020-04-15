<template>
    <div id='book'>
        <img src="" alt="">
        <p>书名：{{book.name}}</p><br>
        <p>作者：{{book.author}}</p><br>
        <p>售价：{{book.price}}</p><br>
        <p>简介：{{book.context}}</p><br>
        <p>图书别名：{{book.anthorname}}</p><br>
        <button @click="addcar()">加入购物车</button>
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
    name:'book',
    data(){
        return{
            book:{
                id:this.$route.params.id
            }
        }
    },
    created(){
        var query = new AV.Query('Books')
        console.log(this.book.id)
        query.get(this.book.id).then((book)=>{
            this.book = book._serverData
        })
    },
    methods:{
        addcar:function(){
            var num = prompt("请输入购买数量",1)
            var Car = AV.Object.extend('Car');
            var car = new Car();
            car.set('name', this.book.name);
            car.set('author', this.book.author);            
            car.set('price', this.book.price);            
            car.set('num', num);
            console.log(num,car.attributes)
            car.save().then(function (car) {
            console.log('保存成功。objectId：' + car.id);
            }, function () {
            });
        }
    }
}
</script>

<style scoped>
#book{
    background: rgb(184,229,248);
    width: 400px;
    height: 200px;
    margin: 0 auto;
    top: 35%;
    color: rgb(14,139,255);
    position: relative;
}
button{
    position: absolute;
    bottom: 0
}
</style>