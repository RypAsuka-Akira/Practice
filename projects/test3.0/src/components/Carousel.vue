<template>
  <div id="contains">
    <div
      id="play"
      :style="{
        backgroundImage: `url(${ImageArray[active].imageUrl})`,
        backgroundSize: `contain`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`
      }"
      @mouseenter="isHover = true"
      @mouseleave="isHover = false"
      @click.self="jump"
    >
      <div class="switch" @click="prev">
        <i class="el-icon-arrow-left"></i>
      </div>
      <div class="switch" @click="next">
        <i class="el-icon-arrow-right"></i>
      </div>
      <ul id="indicator">
        <li v-for="item in ImageArray" :key="item.index">
          <div
            :style="{
              backgroundColor:
                item.index === active + 1 ? '#fff' : 'deepskyblue',
              cursor: 'default'
            }"
            @mouseenter="active = item.index - 1"
          >
            {{ item.index }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
export default {
  name: "Carousel",
  props: {
    ImageArray: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      active: 0,
      isHover: false
    };
  },
  methods: {
    prev: function() {
      if (this.active === 0) {
        this.active = this.ImageArray.length - 1;
      } else {
        this.active--;
      }
    },
    next: function() {
      if (this.active === this.ImageArray.length - 1) {
        this.active = 0;
      } else {
        this.active++;
      }
    },
    autoPlay: function() {
      setInterval(() => {
        if (this.isHover === false) {
          this.next();
        }
      }, 2000);
    },
    jump: function() {
      window.open(this.ImageArray[this.active].url);
    }
  },
  computed: {},
  created() {
    console.log(this.ImageArray);
    console.log(this.ImageArray[this.active].imageUrl);
  },
  mounted() {
    this.autoPlay();
  }
};
</script>

<style scoped>
#contains {
  width: 540px;
  height: 470px;
  border: 1px solid black;
  box-shadow: 0 0 5px #888888;
}
#play {
  width: inherit;
  height: inherit;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.switch {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: rgba(200, 200, 200, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
}
.switch:hover {
  background: rgba(200, 200, 200, 0.7);
}
#play ul {
  position: absolute;
  display: block;
  right: 0;
  bottom: 0;
  margin-bottom: 10px;
  margin-right: 10px;
}
#play ul li {
  margin: 0 10px;
  float: left;
  list-style: none;
}
#play ul li div {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid cyan;
  background-color: deepskyblue;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #ffffff;
  text-shadow: 0 0 2px #2b2b2b;
  font-size: 12px;
}
</style>
