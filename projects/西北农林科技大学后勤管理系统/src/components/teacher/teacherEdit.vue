<template>
  <div id="all">
    <div id="exit">
      <el-button type="success"
                 icon="el-icon-back"
                 circle
                 @click="jumpTeacher"></el-button>
    </div>
    <div id="main_1">
      <div class="logo1">
        <img src="../../assets/home/logo.png" style="max-width: 500px; width:100%;">
      </div>
    </div>
    <div id="main_2">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="ID" prop="id">
          <el-input v-model="ruleForm.id"></el-input>
        </el-form-item>
        <el-form-item label="作者" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="classs">
          <el-select v-model="ruleForm.classs" placeholder="请选择类型">
            <el-option label="新闻" value="0"></el-option>
            <el-option label="公告" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间"  prop="date">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%; " value-format="yyyy-MM-dd"></el-date-picker>
        </el-form-item>
        <el-form-item label="文本内容" prop="text" >
          <el-input type="textarea" rows="15" v-model="ruleForm.text"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">发布</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div id="footer"></div>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      ruleForm: {
        id: '',
        title: '',
        name: '',
        classs: '',
        date: '',
        text: ''
      },
      rules: {
        id: [
          { required: true, message: '请输入新闻ID', trigger: 'blur' }
        ],
        title: [
          { required: true, message: '请输入新闻标题', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入作者姓名', trigger: 'blur' }
        ],
        classs: [
          { required: true, message: '请选择新闻类别', trigger: 'change' }
        ],
        text: [
          { required: true, message: '请输入新闻内容', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post('/api/new/', this.ruleForm)
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
          this.$notify({
            title: '成功',
            message: '新闻发布成功',
            type: 'success'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    jumpTeacher () {
      this.$router.push({ path: '/tNews' })
    }
  }
}
</script>

<style scoped>
#all{
  margin:0;
  auto:0;
  background-image: url("../../assets/home/bg2.jpg");
  height:1300px;
}
#exit{
  position:absolute;
  left:1200px;
  top:70px;
}
.logo1{
  width:50%;height:100%;
  padding-left: 100px;
  padding-top: 40px;
}
#main_1{
  height:200px;
}
  #main_2{
    width:50%;
    margin:0 auto;
    background-color: white;
    height:950px;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 100px;
  }
  #footer{
    height: 50px;
  }
</style>
