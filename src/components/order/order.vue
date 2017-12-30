<template>
  <div class="order">
    <div class="head">订单</div>
    <ul class="status">
      <li class="orderIng" @click="changeSta(1)" :class="{orderSta:sta===1}">进行中</li>
      <li class="orderDone" @click="changeSta(2)" :class="{orderSta:sta===2}">已结束</li>
    </ul>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from '../Nav/Nav'

  export default {
    data () {
      return {
        sta: 1
      }
    },
    methods: {
      changeSta (e) {
        this.sta = e
        this.$router.push({query: {sta: e}})
      }
    },
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  .order {
    .head {
      padding: 5px;
      border-bottom: 0.5px solid gray;
    }
    .status {
      display: flex;
      li {
        width: 50%;
        padding: 5px;
      }
      .orderSta {
        color: #ED5281;
        border-bottom: 0.5px solid;
      }
    }
  }
</style>
