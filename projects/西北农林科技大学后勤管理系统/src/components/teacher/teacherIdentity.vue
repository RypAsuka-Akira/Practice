<template>
    <div id="container">
      <div id="card">
        <div id="information">
          <div id="num">工号：{{num}}</div>
          <div id="name">姓名：{{name}}</div>
          <div id="icon"></div>
          <div id="address">公寓住址：{{address}}</div>
        </div>
      </div>
      <div id="tags">
        <el-tabs id="tabs" type="card">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
export default {
  name: 'identity',
  data () {
    return {
      num: '',
      name: '',
      address: ''
    }
  },
  created () {
    this.num = localStorage.getItem('account')
    this.$axios.get('/api/user/' + this.num)
      .then(res => {
        this.name = res.data.name
        this.address = res.data.address
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  #container{
    width: 100%;
    background: url("../../assets/teacher/iceland.jpg");
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
  }
  #card{
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
  }
  #information{
    width: 400px;
    height: 240px;
    background: rgba(255,255,255,.6);
    border-radius: 20px;
    margin-right: 70px;
    box-shadow: 0 0 20px 10px #888888;
    display: grid;
    grid-template-columns: 60% 40%;
    grid-template-rows: 33% 33% 33%;
  }
  #name, #address, #num{
    color: black;
    line-height: 80px;
    padding-left: 60px;
    text-shadow: 0 0 5px #888888;
    font-size: 20px;
  }
  #icon{
    grid-row: 1 / 3;
    grid-column: 2 / 3;
    background: url("../../assets/teacher/book.png") no-repeat center center;
    background-size:60% 60%;
  }
  #address{
    grid-column: 1 / 3;
  }
  #tags{
    width: 100%;
    height: 40%;
    background: rgba(255,255,255,.6);
  }
</style>
