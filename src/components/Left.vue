<template>
    <div id='left'>
        <div id='lb'>
            <p>分类列表</p>
            <ul>
                <li v-for="fenlei in fenleis" :key='fenlei.name'>
                    {{fenlei.name}}</li>
            </ul>
        </div>
        <div id="rb">
            <div v-for="book in books" :key='book.name' >
                <div @click="ttt2(book.id)">
                    
                    <img src="" alt="">
                    <p>书名：{{book.name}}</p><br>
                    <p>图书别名：{{book.anthorname}}</p><br>
                    <p>作者：{{book.author}}</p><br>
                    <p>价格：{{book.price}}</p><br>
                </div>
                <button @click="addcar(book)">加入购物车</button>
            </div>
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
    name: 'left',
    data(){
        return{
            fenleis:[],
            books:[]
        }
    },
    created(){
        var query = new AV.Query('Books')
        var books = []
        query.find().then(function (book) {
            for(var i = 0;i<book.length;i++){
                books.push(book[i].attributes)
                books[i].id = book[i].id
            }
        })
        this.books = books
        var query2 = new AV.Query('Fenlei')
        var fenleis = []
        query2.find().then(function (fenlei) {
            for(var i = 0;i<fenlei.length;i++){
                fenleis.push(fenlei[i].attributes)
            }
        })
        this.fenleis = fenleis
    },
    methods:{
        addcar:function(data){
            var Car = AV.Object.extend('Car');
            var car = new Car();
            car.set('name', data.name);
            car.set('author', data.author);            
            car.set('price', data.price);            
            car.set('num', 1);
            car.save().then(function (car) {
            console.log('保存成功。objectId：' + car.id);
            }, function () {
            });
        },
        ttt2:function(id) {
            this.$router.push('/book/'+id)
        }
    }
}
</script>

<style>
#lb{
    float: left;
    margin-left: 100px;
}
#rb{
    float: right;
    margin-right: 100px;
}
</style>