<template>
    <div id="bg">
      <div id="container">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  style="width: 300px">
          <h2 style="line-height: 60px;text-align: center">登 录</h2>
          <el-form-item prop="account" style="margin-bottom: 20px">
            <el-input  type="text" v-model="ruleForm.account" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-radio-group v-model="ruleForm.identity" style="display: flex;justify-items: center;justify-content: space-around;margin: 20px 0" prop="identity">
            <el-radio  label="teacher">老师</el-radio>
            <el-radio  label="student">学生</el-radio>
          </el-radio-group>
          <el-form-item style="width: 200px;margin: auto">
            <el-button type="info" style="width: 200px;height: 40px" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        account: 'test',
        checkPass: '123456',
        identity: 'student'
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        checkPass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$router.push({path: '/info/identity'})
        } else {
          console.log('error submit!!')
        }
      })
    }

  }
}
</script>

<style scoped>
  *{
  margin: 0;
  padding: 0;
  }
  #bg{
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("../assets/login_bg.png") no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
  }
  #container{
    width: 450px;
    height: 300px;
    margin: auto;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px #888888;
    background: rgba(255,255,255,.7);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
