<template>
    <div>
        <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="item in goodslistData.catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="subitem in item.subcates" :key="subitem.id">
                                                {{subitem.title}}&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd v-for="subitem in item.subcates" :key="subitem.id">
                                                <a href="/goods/43.html">{{subitem.title}}</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                            <!-- <div id="focus-box" class="focus-box">
                                <ul class="slides">
                                    <li class="" style="width: 100%;height:100%; float: left; margin-right: -100%; position: relative; opacity: 0; display: block; z-index: 1;">
                                        <a href="/goods.html">
                                            <img style="width: 100%;height:100%;" src="http://39.108.135.214:8899/imgs/SJ4EgwosX0wTqvyAvhtFGT1w.jpg" draggable="false">
                                        </a>
                                    </li>
                                    <li style="width: 100%;height:100%; float: left; margin-right: -100%; position: relative; opacity: 1; display: block; z-index: 2;" class="flex-active-slide">
                                        <a href="/goods.html">
                                            <img style="width: 100%;height:100%;" src="http://39.108.135.214:8899/upload/201504/20/thumb_201504200314272543.jpg" draggable="false">
                                        </a>
                                    </li>
                                </ul>
                                <ol class="flex-control-nav flex-control-paging">
                                    <li>
                                        <a class="">1</a>
                                    </li>
                                    <li>
                                        <a class="flex-active">2</a>
                                    </li>
                                </ol>
                            </div> -->
                            <el-carousel style="height:100%;"  arrow="always">
                                <el-carousel-item style="height:100%;" v-for="item in goodslistData.sliderlist" :key="item.id">
                                    <router-link :to="'/goodsinfo/'+item.id">
                                        <img style="width:100%;height:100%;" v-lazy="item.img_url" draggable="false">
                                    </router-link>
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item,index) in goodslistData.toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img v-lazy="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <router-link :to="'/goodsinfo/'+item.id">{{item.title}}</router-link>
                                    <span>{{item.add_time | dateFmt}}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div v-for="item in goodsGroupData" class="section" :key="item.level1cateid">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a v-for="subitem in item.level2catelist" :key="subitem.subcateid" href="/goods/43.html">{{subitem.subcatetitle}}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="subitem in item.datas" :key="subitem.artID">
                           <router-link :to="'/goodsinfo/'+subitem.artID">
                                <div class="img-box">
                                    <img v-lazy="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{subitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{subitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{subitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{subitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<style>
    .el-carousel__container{
        height:100%;
    }
</style>

<script>
export default {
  data() {
    return {
      goodslistData: {},  //商品列表的数据
      goodsGroupData:[]   //分类分组数据
    };
  },
  created() {
    this.getgoodslistData()
    this.getGoodsGroupData()
  },
  methods: {
    // 获取商品列表的数据
    getgoodslistData() {
      const url = `site/goods/gettopdata/goods`;
      this.$axios.get(url).then(response => {
        this.goodslistData = response.data.message;
      });
    },
    //获取分类分组数据
    getGoodsGroupData(){
        const url = `site/goods/getgoodsgroup`;
        this.$axios.get(url).then(response => {
        this.goodsGroupData = response.data.message;
       });
    }
  }
};
</script>
