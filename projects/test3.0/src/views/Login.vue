<template>
  <div id="contain">
    <div id="login">
      <el-form ref="form" :model="form" :rules="rules" label-width="65px">
        <el-form-item label="用户名" prop="name">
          <el-input placeholder="请输入用户名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-col :span="14">
            <el-button
              type="primary"
              style="width: 100px;height: 40px"
              @click="submitForm('form')"
              >登录</el-button
            >
          </el-col>
          <el-col :span="10">
            <el-checkbox v-model="form.remember">记住密码</el-checkbox>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        name: "",
        password: "",
        remember: false
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 16, message: "用户名长度有误", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "密码长度有误", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
#contain {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #00bfff;
}
#login {
  width: 40%;
  height: 50%;
  /*background-image: linear-gradient(to right bottom, #00bfff, #dd6161);*/
  background: #ffffff;
  border: #2b2b2b 1px solid;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
