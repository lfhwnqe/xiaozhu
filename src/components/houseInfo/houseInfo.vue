<template>
  <div class="houseInfo">
    <mt-swipe class="swipe" :show-indicators="false">
      <mt-swipe-item v-for="list in bannerImg" :key="list.id">
        <img :src="list.url" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import {rap} from '@/assets/js/host-config.js'
  import axios from 'axios'

  let url = {
    info: '/POST/house'
  }
  url = rap(url)

  export default {
    data () {
      return {
        house: null,
        bannerImg: null
      }
    },
    created () {
      this.getHouseInfo()
    },
    methods: {
      getHouseInfo () {
        axios.post(url.info, {
          houseId: 200
        }).then(res => {
          this.house = res.data
          this.bannerImg = res.data.imgLists
        })
      }
    }
  }
</script>

<style lang="scss">
  .houseInfo {
    .swipe {
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
