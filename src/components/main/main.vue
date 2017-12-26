<template>
  <div id="main">
    <!--头部文化广告-->
    <div class="audio">
      <iframe class="audio" frameborder="0"
              src="https://v.qq.com/iframe/player.html?vid=w03073ltt5l&tiny=0&auto=0">
      </iframe>
    </div>
    <div class="search-bar">搜索栏</div>
    <!--综合推荐房间与活动-->
    <div class="actions">
      <div class="action">
        <!-- 需要v-for渲染 -->
        <h3>旅行在故乡</h3>
        <h5>因为一个家  许下出那里旅行的愿望</h5>
        <div class="banner">这里是轮播图</div>
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
    <div class="city-lists">
      <div class="city">西安</div>
      <div class="house-banner">这个城市的5个房间轮播图</div>
      <div class="comment">这个城市的5个房间分别房客的评论</div>
    </div>
    <Nav></Nav>
  </div>
</template>

<script>
  import Nav from '../Nav/Nav'

  export default {
    components: {
      Nav
    }
  }
</script>

<style lang="scss">
  #main {
    .audio {
      margin: auto;
      width: 120vw;
      height: 50vh;
    }
  }
</style>
