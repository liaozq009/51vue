<template>
  <!-- 注意：所有内容都放在一个div里面 -->
  <div class="header">
    {{seller.name}}
    <img :src="seller.avatar" alt="" @click="showDetail">
    {{msg}}
  
    <Detail></Detail>   
  </div>

</template>

<script>
  // 获取vuex的数据
  import {mapGetters} from 'vuex'

  import Detail from '../detail/Detail.vue'

  export default{
    created(){
      this.$store.dispatch('getSeller'); //页面创建的时候开始发送请求
    },
    computed:{
      ...mapGetters([
        'seller'
      ]),
      msg(){
        return 'welcome to my vue';
      }
    },
    components:{
      Detail
    },
    methods:{
      showDetail(){
        this.$store.dispatch('showDetail');
      }
    }
  }

</script>

<style lang="less" scoped>
  .header{
    height: 134px;
    background-color: rgba(7,17,27,0.1);
    font-size: 14px;
    img{
      width: 64px;
      height:64px;
      border-radius: 2px;
    }
  }

</style>

