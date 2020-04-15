<template>
    <div id='fenlei'>
        <Left_s></Left_s>
        <div id='fl'>
        <h1>分类信息</h1>
        <table>
            <tr>
                <th>分类名称</th>
                <th>分类描述</th>
                <th>操作</th>
            </tr>
            <tr v-for="fenlei in fenleis" :key='fenlei.name'>
                <th>{{fenlei.name}}</th>
                <th>{{fenlei.context}}</th>
                <th>
                    <button @click="deletes(fenlei.id)">删除</button>
                    <button @click="deletes(fenlei.id)">修改</button>
                </th>
            </tr>
        </table>
        </div>
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
    name:'fenlei',
    data(){
        return{
            fenleis:[]
        }
    },
    created(){
        var fenlei = new AV.Query('Fenlei')
        var fenleis = []
        fenlei.find().then(function(fenlei){
            for(let i=0;i<fenlei.length;i++){
                fenleis.push(fenlei[i].attributes)
                fenleis[i].id = fenlei[i].id
            }
        })
        this.fenleis = fenleis
    },
    methods:{
        deletes:function(id){
            console.log(id)
            var de = new AV.Object.createWithoutData('Fenlei',id)
            de.destroy()
        }
    },
    components: {
        Left_s
    }
}
</script>

<style scoped>
th{
    width: 200px;
}
#fl{
    margin: 0 auto;
    top: 35%;
    text-align: center;
    width: 700px;
}
table,tr,td{
    border: 1px solid black;
    border-collapse: collapse;
}
#fenlei button{
    color: black;
    text-align: center;
    margin: 0 auto;
}
</style>