<template>
  <div id="app">
    <div id="shortCut">
      <el-col :span="2">
        <ul id="location">
          <li>
            <i class="el-icon-location">{{ " " }}</i>
            <span>{{ "内蒙古" }}</span>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">
        <ul id="shortCutMenu">
          <li>
            <div>
              <a>你好，请登录</a>
              &nbsp;&nbsp;
              <a style="color: red">免费注册</a>
            </div>
          </li>
          <li><i class="el-icon-minus"></i></li>
          <li><div>我的订单</div></li>
          <li><i class="el-icon-minus"></i></li>
          <li>
            <div>我的京东&nbsp;<i class="el-icon-arrow-down"></i></div>
          </li>
          <li><i class="el-icon-minus"></i></li>
          <li><div>京东会员</div></li>
          <li><i class="el-icon-minus"></i></li>
          <li>
            <div>企业采购&nbsp;<i class="el-icon-arrow-down"></i></div>
          </li>
          <li><i class="el-icon-minus"></i></li>
          <li>
            <div>客户服务&nbsp;<i class="el-icon-arrow-down"></i></div>
          </li>
          <li><i class="el-icon-minus"></i></li>
          <li>
            <div>网站导航&nbsp;<i class="el-icon-arrow-down"></i></div>
          </li>
          <li><i class="el-icon-minus"></i></li>
          <li>
            <div id="jdMobile">
              手机京东
              <div id="qrCode">
                <div id="qrCodeImgs"></div>
              </div>
            </div>
          </li>
        </ul>
      </el-col>
    </div>
    <div id="head">
      <div id="logo">
        <div>
          <a href="https://www.jd.com"
            ><img src="../assets/JDLogo.png" alt="京东"
          /></a>
        </div>
      </div>
      <div id="search">
        <div id="jdSearch">
          <div id="input">
            <input type="text" placeholder="爆米花" />
            <i class="el-icon-camera"></i>
            <button><i class="el-icon-search"></i></button>
          </div>
          <div id="cart">
            <el-button size="small"
              ><i class="el-icon-shopping-cart-2"></i
              >&nbsp;&nbsp;我的购物车</el-button
            >
          </div>
        </div>
        <div id="hotWords">
          <ul>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
            <li>防疫消毒</li>
          </ul>
        </div>
        <div id="navItems">
          <ul>
            <li>秒杀</li>
            <li>优惠券</li>
            <li>PLUS会员</li>
            <li>品牌闪购</li>
            <li>拍卖</li>
            <li>京东家电</li>
            <li>京东超市</li>
            <li>京东生鲜</li>
            <li>京东国际</li>
            <li>京东金融</li>
          </ul>
        </div>
      </div>
      <div id="promote"></div>
    </div>
  </div>
</template>
import Carousel form @/components/Carousel.vue;
<script>
export default {
  name: "HOME"
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100%;
  background: aquamarine;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
}
#shortCut {
  width: 100%;
  height: 36px;
  background: #e3e4e5;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
  font-family: "Microsoft YaHei";
  color: #a1a1a1;
}
#shortCut ul {
  list-style: none;
}
#shortCut ul li {
  display: block;
  list-style: none;
  float: left;
}
#shortCutMenu li > div {
  margin: 0 6px;
}
#location li i:first-child {
  color: red;
  margin-right: 5px;
}
#jdMobile {
  position: relative;
}
#qrCode {
  width: 76px;
  height: 76px;
  position: absolute;
  top: 30px;
  left: -12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
#qrCode:before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  border: 5px solid transparent;
  border-bottom-color: #fff;
  display: block;
  left: 50%;
  top: -9px;
  margin-left: -5px;
}
#qrCodeImgs {
  width: 66px;
  height: 66px;
  margin: 5px;
  background: url("../assets/qrcode.png") no-repeat;
  background-size: 100%;
}
.el-icon-minus {
  transform: rotate(90deg);
  color: #2b2b2b;
}
.el-icon-arrow-down {
  font-size: 10px;
  font-weight: bold;
}
#head {
  height: 25vh;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0 0 1px #888888;
}
#logo {
  width: 15%;
  height: inherit;
  /*border: 1px solid #2b2b2b;*/
  display: flex;
  align-items: center;
  justify-content: center;
}
#search {
  width: 50%;
  height: inherit;
  /*border: 1px solid red;*/
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
#jdSearch {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /*border: 1px solid deepskyblue;*/
  padding-top: 20px;
}
#input {
  width: 75%;
  height: 30px;
  margin-right: 20px;
  border: 2px solid #ff0000;
  display: flex;
  align-items: center;
}
#input input {
  height: 24px;
  width: 80%;
  padding: 2px 30px 2px 17px;
  border: none;
  outline: none;
  margin-left: 2px;
}
.el-icon-shopping-cart-2 {
  color: red;
  font-size: 18px;
  font-weight: bold;
}
#input button {
  margin-left: 10px;
  width: 60px;
  height: 30px;
  background-color: red;
  border: none;
  outline: none;
}
.el-icon-search {
  font-size: 16px;
  font-weight: bold;
  color: white;
}
#hotWords {
  width: 100%;
  height: 20px;
  /*border: 1px solid #2b2b2b;*/
}
#hotWords ul {
  margin-left: 40px;
}
#hotWords ul li {
  float: left;
  list-style: none;
  margin: 0 6px;
  font-size: 12px;
  color: #888888;
}
#hotWords ul li:first-child {
  color: red;
}
#navItems {
  width: 100%;
  height: 70px;
  /*border: 1px solid #2b2b2b;*/
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#navItems ul li {
  float: left;
  list-style: none;
  margin: 0 10px;
  font-size: 15px;
}
#navItems ul li:first-child,
#navItems ul li:nth-child(2) {
  color: red;
  font-weight: bold;
}
#promote {
  width: 15%;
  height: inherit;
  /*border: 1px solid #00bfff;*/
}
</style>
