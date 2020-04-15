<template>
    <div id='addbook'>
        <Left_s></Left_s>
        <table>
            <tr>
                <td>图书名称</td>
                <td><input  v-model="book.name"></td>
            </tr>
            <tr>
                <td>图书别名</td>
                <td><input  v-model="book.anthorname"></td>
            </tr>
            <tr>
                <td>作者</td>
                <td><input  v-model="book.author"></td>
            </tr>
            <tr>
                <td>售价</td>
                <td><input  v-model="book.price"></td>
            </tr>
            <tr>
                <td>图书描述</td>
                <td><input  v-model="book.content"></td>
            </tr>
            <tr>
                <td>总数量</td>
                <td><input  v-model="book.amount"></td>
            </tr>
            <tr>
                <td>所属分类</td>
                <td><select>
                    <option v-for="fenlei in fenleis" :key="fenlei">{{fenlei}}</option>
                </select></td>
            </tr>
            <tr>
                <td><button>清除</button></td>
                <td @click="post"><button>确认</button></td>
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
    name: 'addbook',
    data(){
        return{
            book:{
                name:'',
                author:'',
                price: 0,
                Content:'',
                amount: 0,
                anthorname:''
            },
            fenleis: []
        }
    },
    methods:{
        post:function(){
            var Books = AV.Object.extend('Books');
            var books = new Books();
            books.set('name', this.book.name);
            books.set('author', this.book.author);            
            books.set('price', this.book.price);            
            books.set('content', this.book.Content);
            books.set('amount',this.book.amount);
            books.set('anthorname',this.book.anthorname);
            books.save().then(function (books) {
            console.log('保存成功。objectId：' + books.id);
            }, function () {
            });
        }
    },
    created(){
        this.AV.get()
        this.$http.get('http://lc-bdoJcM8S.cn-n1.lcfile.com/81f4aaadb5c9611966ae/fenlei.json')
        .then(function(data){
            this.fenleis = data.body;
        })
    },
    components: {
        Left_s
    }
}
</script>

<style>
#addbook table{
    margin: 0 auto;
    top: 35%;
    text-align: center;
    width: 700px;
}
</style>