<template>
  <div class="swipe">
    <ul class="bannerIndex">
      <li v-for="(list ,index) in houseList" :class="{imgActive:indexActive===index}">{{index + 1}}</li>
    </ul>
    <mt-swipe class="bannerImg" :auto="8000" :show-indicators="false" @change="handleChange">
      <mt-swipe-item v-for="list in listData">
        <img class="listImg" :src="list.url" alt="">
      </mt-swipe-item>
    </mt-swipe>
    <div class="house-content" v-if="activeImg.type">
      <span class="style">{{activeImg.type}}</span>
      <span class="space"></span>
      <span class="introduce">{{activeImg.content}}</span>
    </div>
    <div class="price" v-if="activeImg.price">
      <i class="el-icon-minus"></i>
      <p>最低每晚</p>
      <span> ¥{{activeImg.price}}</span></div>
  </div>
</template>

<script>
  export default {
    name: 'Swipe',
    props: {
      listData: {
        type: Array
      },
      listInfo: {
        type: Object
      }
    },
    data () {
      return {
        data: this.listInfo,
        houseList: this.listData,
        activeImg: null,
        indexActive: null
      }
    },
    created: function () {
      this.activeImg = this.houseList[0]
      this.indexActive = 0
    },
    methods: {
      handleChange (index) {
        this.activeImg = this.houseList[index]
        this.indexActive = index
      }
    }
  }
</script>

<style lang="scss">
  .swipe {
    position: relative;
    .bannerIndex {
      display: flex;
      justify-content: center;
      margin: 5px;
      .imgActive {
        border: 1px solid;
        border-radius: 2px;
        padding: 0px 1px;
        margin: 0 5px;
      }
    }
    .bannerImg {
      position: relative;
      height: 66.6vw;
      width: 100vw;
    }
    .listImg {
      width: 100%;
    }
    .house-content {
      position: absolute;
      left: 0;
      bottom: 0;
      left: 3vw;
      bottom: 3vw;
      .style {
        background: #fff;
        padding: 1px;
      }
      .introduce {
        background: #f1f2f2;
        padding: 1px;
      }
    }
    .price {
      position: absolute;
      top: 11.6vw;
      right: 3vw;
      background: #fff;
      padding: 1px 1px;
      i {
        color: #ED5281;
      }
      span {
        color: #ED5281;
      }
    }
  }
</style>
