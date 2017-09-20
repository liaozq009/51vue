<template>
  <!-- 注意：所有内容都放在一个div里面 -->
  <div class="ratings">
      这是ratings页面
      <ul>
        <li v-for="item in ratings">{{item.text}}</li>
      </ul>
  </div>

</template>

<script>
  // 获取vuex的数据
  import {mapGetters} from 'vuex'

  export default{
    created(){
      this.$store.dispatch('getRatings'); //页面创建的时候开始发送请求
    },
    computed:{
      ...mapGetters([ //获取vuex的数据
        'ratings'
      ]),
      msg(){
        return 'welcome to my liaozhangquan';
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

