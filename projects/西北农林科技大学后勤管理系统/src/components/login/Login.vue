<template>
    <div id="con">
        <div id="header">
            <div id="logo"></div>
            <span style="margin-left: 20px">后勤综合管理平台</span>
        </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
        <h3 class="title">系统登录</h3>
        <el-form-item prop="account">
            <el-input prefix-icon="el-icon-user" v-model="ruleForm.account" auto-complete="off" placeholder="账号">
            </el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
            <el-input type="password"  prefix-icon="el-icon-edit" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%; text-align: center" >
            <el-button type="primary" round style="width:40%;" @click.native.prevent="handleSubmit" :loading="login">登录</el-button>
            <el-button style="width:40%;" round @click.native.prevent="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
    </div>
</template>
<script>
export default {
  data () {
    return {
      login: false,
      identity: '',
      ruleForm: {
        account: '',
        checkPass: ''
      },
      rules: {
        account: [
          {validator: this.checkId, trigger: 'blur'}
        ],
        checkPass: [
          {validator: this.checkPasswd, trigger: 'blur'}
        ]
      },
      checked: true
    }
  },
  methods: {
    checkId (rule, value, callback) {
      if (!value) {
        return callback(new Error('请输入账号'))
      }
      this.$axios.get('/api/user/' + value)
        .then(res => {
          if (res.data === '') {
            return callback(new Error('该账户不存在'))
          } else {
            callback()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    checkPasswd (rule, value, callback) {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else if (this.ruleForm.account === '') {
        return callback(new Error('请先输入账号'))
      }
      this.$axios.get('/api/user/' + this.ruleForm.account)
        .then(res => {
          if (res.data.passwd !== value) {
            return callback(new Error('密码错误'))
          } else {
            callback()
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    handleReset () {
      this.$refs.ruleForm.resetFields()
    },
    handleSubmit () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          localStorage['account'] = this.ruleForm.account
          this.$axios.get('/api/user/' + this.ruleForm.account)
            .then(res => {
              this.identity = res.data.identity
            })
            .catch(err => {
              console.log(err)
            })
          if (this.identity === 'student') {
            console.log(this.ruleForm.account)
            this.$router.push({
              path: '/sInfo/identity',
              query: {
                id: this.ruleForm.account
              }
            })
          } else if (this.identity === 'teacher') {
            this.$router.push({
              path: '/tInfo/identity',
              query: {
                id: this.ruleForm.account
              }
            })
          } else if (this.identity === 'worker') {
            this.$router.push({
              path: '/wInfo/identity',
              query: {
                id: this.ruleForm.account
              }
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #con{
    width: 100%;
    height: 100vh;
    background: url("../../assets/login/bg.jpg");
    background-size: 100% 100%;
  }
    #header{
      width: 100%;
      height: 65px;
        font-size: 30px;
        line-height: 65px;
        background: #20a0ff;
        color: #fff;
        display: flex;
    }

    #logo{
        padding: 0;
        margin-left: 30px;
        height: 60px;
        width: 287px;
        background: url("../../assets/login/logo.jpg");
    }

    .login-container {
        -webkit-border-radius: 15px;
        border-radius: 35px;
        -moz-border-radius: 5px;
        background-clip: padding-box;
        margin: 6% auto;

        width: 350px;
        padding: 35px 35px 15px 35px;
        background: rgba(252, 253, 255, 0.7);
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
        .title {
            margin: 0 auto 40px auto;
            text-align: center;
            color: #4a4a4a;
            font-size:33px;
        }
        .remember {
            margin: 0 0 35px 0;
        }
    }
</style>
