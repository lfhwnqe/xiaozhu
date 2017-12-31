<template>
  <div id="main">
    <!--头部文化广告-->
    <div class="audio">
      <iframe class="audio" frameborder="0"
              src="https://v.qq.com/iframe/player.html?vid=w03073ltt5l&tiny=0&auto=0">
      </iframe>
    </div>
    <div class="search-bar">
      <div class="search-body">
        <el-button class="search-btn" type="primary" icon="el-icon-search">搜索目的地</el-button>
      </div>
    </div>
    <!--综合推荐房间与活动-->
    <div class="actions">
      <div class="action" v-for="list in recommendList">
        <!-- 需要v-for渲染 -->
        <h3>{{list.title}}</h3>
        <h4>{{list.content}}</h4>
        <div class="banner">
          <Swipe :listData="list.houseLists" :listInfo="list"></Swipe>
        </div>
      </div>
      <div class="action onlyAction" v-for="list in actionList">
        <h3>{{list.title}}</h3>
        <h4>{{list.content}}</h4>
        <Swipe :listData=" list.houseLists" :listInfo="list"></Swipe>
      </div>
    </div>
    <!--提供的服务-->
    <div class="services">
      <!-- v-for渲染 -->
      <div class="service">
        <h3>差旅发票</h3>
        <h6>差旅发票，开具发票</h6>
      </div>
    </div>
    <!--文化广告视频-->
    <div class="ad-audios">
      <!--视频轮播图-->
      <div class="audio-banner"></div>
    </div>
    <!--city列表-->
    <div class="city-lists" v-for="list in cityLists">
      <div class="city">{{list.city}}
        <p>{{list.pinyin}}</p></div>
      <Swipe :listData=" list.houseList" :listInfo="list"></Swipe>
      <div class="comment">这个城市的5个房间分别房客的评论</div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from '../Nav/Nav'
  import {rap} from '@/assets/js/host-config.js'
  import Swipe from '../Swipe.vue'
  import axios from 'axios'

  let url = {
    list: '/GET/main/recommend',
    action: '/GET/main/actions',
    cityLists: '/GET/main/roomLists'
  }
  url = rap(url)
  export default {
    data () {
      return {
        recommendList: null,
        actionList: null,
        cityLists: null
      }
    },
    created: function () {
      this.getActionRoomList()
      this.getActionList()
      this.getCityRoom()
    },
    methods: {
      getActionRoomList () {
        axios.get(url.list).then((res) => {
          this.recommendList = res.data.result
        })
      },
      getActionList () {
        axios.get(url.action).then((res) => {
          this.actionList = res.data.result
        })
      },
      getCityRoom () {
        axios.get(url.cityLists).then((res) => {
          this.cityLists = res.data.result
        })
      }
    },
    components: {
      Nav,
      Swipe
    }
  }
</script>

<style lang="scss">
  #main {
    width: 100vw;
    position: relative;
    .audio {
      margin: auto;
      width: 100vw;
      height: 50vh;
    }
    .search-bar {
      z-index: 2;
      position: fixed;
      width: 100vw;
      top: 10px;
      .search-body {
        margin: auto;
        width: 95%;
        .search-btn {
          background: #ED5281;
          border: none;
          width: 100%;
        }
      }
    }
    .actions {
      .action {
        h3 {
          font-weight: 800;
        }
        h4 {
          font-weight: 200;
        }
      }
      .onlyAction {
        .bannerImg {
          height: 50vw;
        }
      }
      .action {
        margin-top: 5vw;
        .banner {
          /*height: 150vw;*/
          .swipe {
            /*height: 100%;*/
          }
        }
      }
    }
  }
</style>
