<template>
  <div class="houseInfo" v-if="house">
    <div class="containerSwipe">
      <mt-swipe class="swipe" :show-indicators="false">
        <mt-swipe-item v-for="list in bannerImg" :key="list.id">
          <img :src="list.url" alt="">
        </mt-swipe-item>
      </mt-swipe>
      <div class="swipePrice" v-if="house">
        <p class="price">¥{{house.prices}}</p>
        <p class="day">起／晚</p>
      </div>
    </div>
    <div class="discount">满7天9.5折 满30天9折</div>
    <div class="title" v-if="house">
      <h1>"{{house.title}}"</h1>
    </div>
    <div class="someInfo" v-if="house">
      <div>
        <i class="iconfont icon-fangzi"></i>
        <p>整套出租</p>
      </div>
      <div>
        <i class="iconfont icon-ren"></i>
        <p>宜住{{house.personNumber}}人</p>
      </div>
      <div>
        <i class="iconfont icon-Bed"></i>
        <p>共{{house.bedsList.length}}张</p>
      </div>
    </div>
    <div class="host">
      <div class="img">
        <img :src="house.houseMastartImgUrl" alt="">
      </div>
      <div class="name">{{house.nick}}</div>
      <div class="safe">实名认证</div>
    </div>
    <div class="thisHouse">
      <div class="thisTitle">房源描述</div>
      <div class="info">
        小清新半墙主义，不一样的视觉效果。配置两张1.5米床，
        可住4人，主卧的窗台下放了一张舒服的摇椅，累了就坐在上面静静的放空一下自己，晚上
        坐在椅子上看夜景也会是你不错的选择；客厅软软的沙发上有个呆呆等你哒『男朋友』，你可以坐在沙发
        上静静发呆，也可以躺着看你最爱的电视剧；厨房比较小，但是餐具一应俱全，永辉超市只有不到5分钟的路程，
        喜欢做菜的宝宝可以在这里一显伸手；阳台上放了一个高桌和椅子，上面放着宝宝最爱的多肉，萌萌哒，希望你也会喜欢!
      </div>
    </div>
    <div class="map">
      <div class="thisTitle">房源描述</div>
      <div class="mapView"></div>
    </div>
    <div class="picture">
      <img :src="house.imgLists[0].url" alt="">
    </div>
    <div class="amenityIdList">
      <div class="thisTitle">配套设施</div>
      <ul>
        <li v-for="list in house.amenityIdList">
          <div class="img"><img :src="list.grayIcon" alt=""></div>
          <div class="name">{{list.amenityName}}</div>
        </li>
      </ul>
    </div>
    <div class="rules">
      <div class="thisTitle">交易规则</div>
      <div class="wrap day">
        入住天数
      </div>
      <div class="wrap pay">
        在线订金比例
      </div>
      <div class="wrap needKnow">
        入住须知
      </div>
    </div>
    <div class="recommend">
      <div class="thisTitle">推荐房源</div>
      <ul>
        <li v-for="list in house.imgLists">
          <div class="img"><img :src="list.url" alt=""></div>
          <div class="info">
            <div class="recommendTitle">天安门故宫恭王府北海</div>
          </div>
        </li>
      </ul>
    </div>
    <el-row class="bottom">
      <el-col :span="9" class="son chat">
        <div class="grid-content bg-purple">
          在线聊天
        </div>
      </el-col>
      <el-col :span="15" class="son order">
        <div class="grid-content bg-purple-light">
          立即预定
        </div>
      </el-col>
    </el-row>
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
    margin-bottom: 8vh;
    position: relative;
    .thisTitle {
      text-align: left;
      font-size: 18px;
      color: #efefef;
      margin-bottom: 5px;
    }
    .containerSwipe {
      position: relative;
      .swipe {
        height: 300px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .swipePrice {
        position: absolute;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        width: 90px;
        padding: 5px;
        background: rgba(0, 0, 0, .4);
        bottom: 10px;
        left: 10px;
        .price {
          color: #ED5281;
          font-size: 18px;
          font-weight: 600;
        }
        .day {
          font-size: 10px;
          color: rgba(2, 2, 2, 1);
        }
      }
    }
    .discount {
      background: #4fa39a;
      padding: 5px;
      display: flex;
      justify-content: flex-start;
    }
    .title {
      font-size: 72px;
      margin: 5px 10px;
      display: flex;
      justify-content: flex-start;
    }
    .someInfo {
      padding: 5px;
      background: #f5f5f5;
      display: flex;
      justify-content: space-around;
      margin: 10px 10px 5px;
      .iconfont {
        font-size: 30px;
      }
    }
    .host {
      margin: 10px;
      padding: 5px;
      background: #f5f5f5;
      .img {
        margin-top: 10px;
        img {
          width: 40px;
          height: 40px;
          -webkit-border-radius: 99px;
          -moz-border-radius: 99px;
          border-radius: 99px;
        }
      }
      .name {
        font-size: 18px;
      }
      .safe {
        font-size: 12px;
      }
    }
    .thisHouse {
      margin: 10px;
      .thisTitle {
        text-align: left;
        font-size: 18px;
        color: #efefef;
        margin-bottom: 5px;
      }
    }
    .map {
      margin: 10px;
      .thisTitle {
        text-align: left;
        font-size: 18px;
        color: #efefef;
        margin-bottom: 5px;
      }
      .mapView {
        height: 280px;
      }
    }
    .picture {
      /*height: 200px;*/
      img {
        width: 100%;
        height: 240px;
      }
    }
    .amenityIdList {
      margin: 10px;
      ul {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li {
          padding: 15px;
          width: 25%;
          img {
            width: 20px;
          }
        }
      }
    }
    .rules {
      margin: 10px;
      .wrap {
        text-align: left;
      }
    }
    .recommend {
      margin: 10px;
      ul {
        display: flex;
        justify-content: flex-start;
        overflow: scroll;
        li {
          margin-right: 5px;
          img {
            height: 240px;
            width: 300px;
          }
        }
      }
      .info {
        .recommendTitle {
          text-align: left;
        }
      }
    }
    .bottom {
      width: 100%;
      height: 8vh;
      position: fixed;
      bottom: 0;
      background: #ED5281;
      .son {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: 600;
      }
      .chat {
        background: #d44a74;
      }
    }
  }
</style>
