<template>
 <div id="container">
   <div id="header">
     <div id="title">
       <span>历</span>
       <span>史</span>
       <span>留</span>
       <span>言</span>
       <span>一</span>
       <span>览</span>
     </div>
     <el-button type="primary"
                icon="el-icon-edit"
                circle style="margin-right: 200px"
                @click="dialogVisible=true"></el-button>
   </div>
   <el-dialog
     :visible.sync="dialogVisible"
     width="50%">
     <el-form ref="form" :model="form" :rules="rules" label-width="80px">
       <el-form-item label="订单ID" prop="id">
         <el-input v-model="form.id"></el-input>
       </el-form-item>
              <el-form-item label="类别">
              <el-select v-model="form.class" placeholder="请选择留言类别">
                <el-option label="咨询" value="0"></el-option>
                <el-option label="投诉" value="2"></el-option>
                <el-option label="建议" value="1"></el-option>
              </el-select>
              </el-form-item>
              <el-form-item label="内容描述" prop="description">
                <el-input type="textarea" rows="4" v-model="form.description"></el-input>
              </el-form-item>
              <el-form-item label="反馈日期" prop="date">
                <el-input v-model="form.date" disabled></el-input>
              </el-form-item>
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" disabled></el-input>
              </el-form-item>
              <el-form-item label="联系方式" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-button style="margin-left: 500px" @click="dialogVisible=false">取消</el-button>
              <el-button type="primary"  style="margin-left: 20px" @click="commit">立即创建</el-button>
            </el-form>
   </el-dialog>
   <div id="table">
     <el-table
       :data="tableData"
       style="width: 60vm;
       font-size: 18px;"
       :default-sort = "{prop: 'date', order: 'ascending'}">
       <el-table-column
         label="留言类别"
         width="200"
         align="center">
         <template slot-scope="scope">
           <div slot="reference" class="name-wrapper">
             <el-tag :type="scope.row.classs===0? 'warning':(scope.row.classs===1? 'primary':'danger')">{{scope.row.classs===0? '咨询':(scope.row.classs===1 ? '建议': '投诉')}}</el-tag>
           </div>
         </template>
       </el-table-column>
       <el-table-column
         label="反馈日期"
         width="200"
         align="center"
         prop="date">
         <template slot-scope="scope">
           <i class="el-icon-time"></i>
           <span style="margin-left: 10px">{{ scope.row.date }}</span>
         </template>
       </el-table-column>
       <el-table-column
         label="内容描述"
         width="350"
         align="center">
         <template slot-scope="scope">
           <span style="margin-left: 10px">{{ scope.row.description }}</span>
         </template>
       </el-table-column>
       <el-table-column
         label="状态"
         width="200"
         align="center">
         <template slot-scope="scope">
           <div slot="reference" class="name-wrapper">
             <el-tag :type="scope.row.state? 'success': 'warning'">{{scope.row.state? '已查看': '未查看'}}</el-tag>
           </div>
         </template>
       </el-table-column>
     </el-table>
   </div>
 </div>
</template>

<script>
export default {
  name: 'suggestion',
  data () {
    return {
      dialogVisible: false,
      form: {
        id: '',
        class: '',
        description: '',
        date: this.getDate(),
        name: localStorage.getItem('name'),
        phone: '',
        state: 0
      },
      rules: {
        class: [
          { required: true, message: '请选择留言类别', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入拾取人联系方式', trigger: 'blur' },
          { min: 11, max: 11, message: '长度不符合规范', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入相关问题详细描述', trigger: 'blur' }
        ]
      },
      tableData: []
    }
  },
  methods: {
    getDate () {
      let date = new Date()
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      let currentDate = year + '-' + month + '-' + strDate
      return currentDate
    },
    commit () {
      this.dialogVisible = false
      console.log(this.form.id)
      this.$axios.post('/api/suggest/', this.form)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    let name = localStorage.getItem('name')
    console.log(name)
    this.$axios.get('/api/suggest/')
      .then(res => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].name === name) {
            this.tableData.push(res.data[i])
          }
        }
        console.log(this.tableData)
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
  height: 91.5vh;
  display: flex;
  flex-wrap: wrap;
  background: url("../../assets/student/cloud.jpg") no-repeat;
  background-size: 100% 100%;
}
#header{
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
#title{
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: RGBA(64,157,255,.7);
  border-radius: 20px;
  font-family: "Microsoft YaHei";
  font-size: 20px;
  font-weight: bold;
  margin-left: 150px;
}
#table{
  width: 85%;
  height: 80%;
  margin-left: 7.5%;
}
</style>
