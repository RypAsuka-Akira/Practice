<template>
  <div id="all">
    <div id="logo">
      <div class="logo1">
        <img src="../../assets/home/logo.png" style="max-width: 578px; width:100%;">
      </div>
      <div id="login">
      <el-button type="success"
                 icon="el-icon-check"
                 circle
                 @click="jumpLogin"></el-button>
      </div>
    </div>
    <div id="container">
      <div id="pic">
        <el-carousel :interval="4000" type="card" height="300px" ref="carousel" @click.native="show1">
          <el-carousel-item class="lun_img" v-for="item in imgs" v-bind:key="item.url" >
            <img :src="item.url"/>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div id="notice">
        <div id="left2">
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;通知 ▪ 公告</h3>
          <marquee behavior="scroll" direction="up" loop="-1" scrollamount=3 height="180px" scrolldelay="1"  onMouseOver=this.stop(); onMouseOut=this.start();>
            <ol>
              <li v-for="v in tableData" style="margin-bottom: 20px">
                <router-link :to="{path:'news',query:{index:v.id}}">{{v.title }}</router-link> <span>-----{{v.date}}</span></li><br/>
            </ol>
          </marquee>
        </div>
        <div id="newsContainer">
          <el-table
            :data="tableData2"
            style="width: 100%"
            height="300">
            <el-table-column
              label="新闻"
              width="600"
            >
              <template slot-scope="scope" >
                <router-link :to="{path:'news',query:{index:scope.row.id}}">
                  <a>{{ scope.row.title }}</a>
                </router-link>
              </template>
            </el-table-column>
            <el-table-column
              label="日期"
              width="200"
              align="center">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{scope.row.date}}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'snews',
  data () {
    return {
      identity: '',
      show: false,
      tableData: [],
      tableData2: [],
      imgs: [
        { index: '1', url: require('../../assets/home/1.jpg'), link: '/news' },
        { index: '2', url: require('../../assets/home/2.jpg'), link: '/news' },
        { index: '3', url: require('../../assets/home/3.jpg'), link: '/news' },
        { index: '4', url: require('../../assets/home/4.jpg'), link: '/news' },
        { index: '5', url: require('../../assets/home/5.jpg'), link: '/news' },
        { index: '6', url: require('../../assets/home/6.jpg'), link: '/news' }
      ]

    }
  },
  methods: {
    jumpLogin () {
      this.$router.push({ path: '/login' })
    },
    jumpEdit () {
      this.$router.push({ path: '/edit' })
    },
    show1 () {
      let activeIndex = this.$refs.carousel.activeIndex
      this.$router.push({
        path: this.imgs[activeIndex].link,
        query: {
          index: this.imgs[activeIndex].index
        }
      })
    }
  },
  created () {
    this.$axios.get('/api/new/')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].classs === 0) {
            this.tableData.push(res.data[i])
          } else {
            this.tableData2.push(res.data[i])
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #all{
    width: 100%;
    height: 100%;
    background-image: url("../../assets/home/bg2.jpg");
    background-size: 100% 100%;
    overflow-x: hidden;
    overflow-y: hidden;
  }
  #logo{
    width: inherit;
    height: 20vh;
    padding-left: 100px;
    padding-top: 50px;
  }
  .logo1{
    width:50%;height:100%;
  }
  #login{
    position:absolute ;
    left:1300px;
    top:100px;
  }
  #container{
    width: inherit;
    height: 120vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 20px 0;
  }
  #pic{
    width: inherit;
    height: 300px;
    padding: 0 150px;
  }

  #notice{
    width: 100%;
    height: 300px;
    margin: 20px 20px;
  }
  #newsContainer{
    position: absolute;
    left:600px;
    top:600px;
    width: 800px;
    height: 300px;
    margin-left: 70px;

  }
  a{
    text-decoration:none;
    color: black;
  }
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(3) {
    background-image: url("../../assets/home/1.jpg");
  }

  .el-carousel__item:nth-child(4) {
    background-image: url("../../assets/home/2.jpg");
  }
  .el-carousel__item:nth-child(5) {
    background-image: url("../../assets/home/3.jpg");
  }
  .el-carousel__item:nth-child(6) {
    background-image: url("../../assets/home/4.jpg");
  }
  .el-carousel__item:nth-child(7) {
    background-image: url("../../assets/home/5.jpg");
  }
  .el-carousel__item:nth-child(8) {
    background-image: url("../../assets/home/6.jpg");
  }
  #left2{
    position: absolute;
    left:100px;
    top:600px;
    padding-top: 20px;
    padding-left: 20px;
    width:30%;height:275px;background: white ;float:left;}
  a:link{color:#000000}
  a:hover{color:#46a87f}

</style>
