<template>
    <div id='left_s'>
        <ul>
            <router-link to='/fenlei'>分类管理</router-link><br>
            <router-link to='/addbook'>图书管理</router-link><br>
            <router-link to='/order'>订单管理</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'left',
    data(){
    },
    created(){
    },
    methods:{
    }
}
</script>

<style scoped>
#left_s{
    float: left;
    margin-left: 100px;
}
#left_s a{
    display: block;
    height: 50px;
    color: rgb(14,139,255);
    text-emphasis: none;
}
</style>