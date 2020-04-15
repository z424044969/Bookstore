<template>
    <div id='addfenlei'>
        <h1>分类信息</h1>
        <table>
            <tr>
                <td>分类名称</td>
                <td><input  v-model="fenlei.name"></td>
            </tr>
            <tr>
                <td>分类描述</td>
                <td><input  v-model="fenlei.context"></td>
            </tr>
            <tr>
                <td><button @click="post">确认</button></td>
                <td></td>
            </tr>
        </table>
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
    name:'addfenlei',
    data(){
        return{
            fenlei:{
                id:'',
                name:'111',
                context:'111'
            }
        }
    },
    methods:{
        post:function(){
            var Fenlei = AV.Object.extend('Fenlei');
            var fenlei = new Fenlei();
            fenlei.set('name', this.fenlei.name);
            fenlei.set('context', this.fenlei.context);            
            fenlei.save().then(function (fenlei) {
            console.log('保存成功。objectId：' + fenlei.id);
            }, function () {
            });
        }
    }
}
</script>

<style scoped>

#addfenlei{
    margin: 0 auto;
    top: 35%;
    text-align: center;
    width: 700px;
}
table{
    width: 700px;
}
</style>