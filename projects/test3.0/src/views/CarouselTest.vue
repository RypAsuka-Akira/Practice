<template>
  <div>
    <Carousel :image-array="imageArray"></Carousel>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
// import $ from "jquery";
export default {
  name: "CarouselTest",
  components: {
    Carousel
  },
  data: function() {
    return {
      imageArray: [
        {
          index: 1,
          imageUrl: require("../assets/JDLogo.png"),
          url: "https://www.baidu.com"
        },
        {
          index: 2,
          imageUrl: require("../assets/logo.png"),
          url: "https://www.baidu.com"
        },
        {
          index: 3,
          imageUrl: require("../assets/qrcode.png"),
          url: "https://www.baidu.com"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
