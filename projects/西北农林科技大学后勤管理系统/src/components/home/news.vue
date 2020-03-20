<template>
  <div id="all">
    <div id="exit">
      <el-button type="success"
                 icon="el-icon-back"
                 circle
                 @click="jumpFirst"></el-button>
    </div>
  <div id="top">
    <div class="logo1">
      <img src="../../assets/home/logo.png" style="max-width: 578px; width:100%;">
    </div>
  </div>
  <div id="main">
      <div id="main_1">
      <h1>{{title}}</h1>
        <h3>{{name}}</h3>
      </div>
      <div id="main_2" align="center">
        <img src="../../assets/home/1.jpg"  width="400px" height="200px" >
      </div>
    <div id="main_3" >
      <p>{{text}}</p>
    </div>
    <div id="main_4">
      <h3>{{date}}</h3>
    </div>
    </div>
    <div id="footer">
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  data () {
    return {
      title: '',
      name: '',
      date: '',
      text: ''
    }
  },
  created () {
    let index = this.$route.query.index
    console.log(index)
    this.$axios.get('/api/new/' + index)
      .then(res => {
        console.log(res.data)
        this.title = res.data.title
        this.name = res.data.name
        this.date = res.data.date
        this.text = res.data.text
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    jumpFirst () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
  #all{
    background-image: url("../../assets/home/bg2.jpg");
    height:100%;
  }
  #top{
    width:100%;
    height:200px;
  }
  .logo1{
    width:50%;height:100%;
    padding-left: 100px;
    padding-top: 40px;
  }
  #exit{
    position:absolute;
    left:1200px;
    top:70px;
  }
      #main{
        width:60%;
        margin:0 auto;
        background-color: white;
        height: 100%;
      }
  #main_1{
    height:80px;
    text-align: center;
  }
  #main_2{
    padding-left: 50px;
    padding-right: 50px;
    align-content: center;
  }
  #main_3{
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 20px;
  }
  #main_4{
    height: 50px;
    padding-left: 50px;
    padding-right: 50px;
    text-align: right;
  }

  #footer{
    height:150px;
  }
</style>
