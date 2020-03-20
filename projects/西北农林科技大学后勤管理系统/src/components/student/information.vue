<template>
  <el-container class="container">
    <el-header height="60px" >
      <el-row>
        <el-col :span="1">
          <div style="cursor:pointer;text-align: left;padding-left: 20px" @click="home">
            <i class="el-icon-s-home" style="font-size: 30px"></i>
          </div>
        </el-col>
        <el-col :span="2">
          <el-switch
            v-model="isCollapse"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-col>
        <el-col :span="18" style="font-size: 25px; letter-spacing: 25px">个 人 信 息 中 心</el-col>
        <el-col :span="3">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 10px; font-size: 20px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>设置</el-dropdown-item>
              <el-dropdown-item @click.native="exit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span style="margin-right: 20px">{{name}}</span>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
        <el-menu class="el-menu-vertical-demo"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 :collapse="isCollapse"
                 style="border-width: 0;"
                 router>
          <el-menu-item index="identity">
              <i class="el-icon-user"></i>
              <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="process">
            <i class="el-icon-suitcase"></i>
            <span slot="title">当前报修进度</span>
          </el-menu-item>
          <el-menu-item index="history">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">历史事件一览</span>
          </el-menu-item>
          <el-menu-item index="findLost" >
            <i class="el-icon-guide"></i>
            <span slot="title">失物招领</span>
          </el-menu-item>
          <el-menu-item index="suggestion" style="margin-top: 55.4vh">
            <i class="el-icon-s-order"></i>
            <span slot="title">提出建议</span>
          </el-menu-item>
        </el-menu>
      <router-view></router-view>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'information',
  data () {
    return {
      isCollapse: false,
      name: ''
    }
  },
  methods: {
    home () {
      this.$router.push({ path: '/' })
    },
    exit () {
      localStorage.removeItem('account')
      this.$router.push({ path: '/login' })
    }
  },
  created () {
    let id = localStorage.getItem('account')
    this.$axios.get('/api/user/' + id)
      .then(res => {
        this.name = res.data.name
        localStorage['name'] = this.name
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  .container {
    height: 100%;
  }
  .el-header {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
  } .el-dropdown-menu__item{
        font-size: 15px;
        padding: 5px 20px;
      }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: auto;
  }
</style>
