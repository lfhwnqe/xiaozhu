<template>
  <ul class="nav">
    <li v-for="(list, index) in data" v-if="index>0" @click="goTo(list)"
        :class="{routerActive:active===list.path}">
      <img :src="active===list.path?list.meta.actUrl:list.meta.url" alt="">
      <div>{{list.meta.name}}</div>
    </li>
  </ul>
</template>

<script>
  // 导航组件
  import {navBar} from '@/router/index'

  export default {
    data () {
      return {
        data: navBar, // 根据一级路由进行导航
        active: null
      }
    },
    created () {
      this.active = this.$route.fullPath
    },
    methods: {
      goTo (e) {
        this.$router.push(e.path) // 点击导航
        this.active = e
      }
    }
  }
</script>

<style lang="scss">
  .nav {
    position: fixed;
    bottom: 0;
    width: 100vw;
    z-index: 2;
    border-top: 1px solid gray;
    background: #fff;
    display: flex;
    justify-content: space-around;
    height: 8vh;
    li {
      padding: 8px 0;
      width: 25vw;
      img {
        height: 50%;
      }
    }
    .routerActive {
      color: #ED5281;
    }
  }
</style>
