<template>
  <ul class="nav">
    <li v-for="(list, index) in data" v-if="index>0" @click="goTo(list)"
        class="routerActive"
    >{{list.meta.name}}
    </li>
  </ul>
</template>

<script>
  import {routes} from '@/router/index'

  export default {
    data () {
      return {
        data: routes,
        active: null
      }
    },
    created () {
      this.active = this.$router.fullPath
    },
    methods: {
      goTo (e) {
        this.$router.push(e.path)
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
  }
</style>
