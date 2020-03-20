<template>
    <div id="container">
      <div id="table">
        <el-table
          :data="tableData"
          style="font-size: 18px; margin: auto">
          <el-table-column
            prop="id"
            label="项目编号"
            width="150"
            align="center"></el-table-column>
          <el-table-column
            prop="date"
            label="报修日期"
            width="150"
            align="center"></el-table-column>
          <el-table-column
            prop="address"
            label="报修地址"
            width="200"
            align="center"></el-table-column>
          <el-table-column
            prop="description"
            label="报修内容"
            width="250"
            align="center"></el-table-column>
          <el-table-column
            prop="state"
            label="报修进度"
            width="100"
            align="center">
            <template slot-scope="scope">
              <span>{{scope.row.state===0? '申报' : (scope.row.state===1? '审核' : (scope.row.state===2? '出工':(scope.row.state===3?'修理':'完工')))}}</span>
            </template>
          </el-table-column>
          <el-table-column
            prop="workername"
            label="处理人"
            width="200"
            align="center"></el-table-column>
          <el-table-column
            label="操作"
            width="300"
            align="center">
            <template slot-scope="scope">
              <el-button
                @click="cancel" :disabled="scope.row.state==='完工'">取消委托</el-button>
              <el-button
                type="danger"
                @click="end" :disabled="scope.row.state==='完工'">结束委托</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div id="step" v-if="tableData.length!==0">
        <el-steps :active="tableData[0].state"
                  align-center
                  finish-status="success"
                  style="margin: auto;">
          <el-step title="申报" description="您的报修订单已经成功申报"></el-step>
          <el-step title="审核" description="您的报修订单已经通过审核"></el-step>
          <el-step title="出工" description="维修工人已经出工"></el-step>
          <el-step title="修理" description="维修工人已经修理完毕"></el-step>
          <el-step title="完工" description="您的报修订单已经结束"></el-step>
        </el-steps>
      </div>
      <div id="primary">
          <el-button type="primary"
                     @click="dialogVisible = true"
                     :disabled="tableData.length!==0">请求报修</el-button>
      </div>
      <el-dialog
        title="创建订单"
        :visible.sync="dialogVisible"
        width="60%">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="项目编号">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="报修日期">
            <el-input v-model="form.date" disabled></el-input>
          </el-form-item>
          <el-form-item label="报修地址" prop="address">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="报修内容" prop="description">
            <el-input type="textarea" rows="4" v-model="form.description"></el-input>
          </el-form-item>
            <el-button @click="dialogVisible = false" style="margin-left: 700px">取消</el-button>
            <el-button type="primary" @click="create" style="margin-left: 20px">立即创建</el-button>
        </el-form>
      </el-dialog>
    </div>
</template>

<script>
export default {
  name: 'process',
  data () {
    return {
      dialogVisible: false,
      tableData: [],
      form: {
        id: '',
        date: this.getDate(),
        address: '',
        description: '',
        state: '0',
        studentname: localStorage.getItem('name'),
        workername: '姚妍倪'
      },
      rules: {
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入详细描述', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    let name = localStorage.getItem('name')
    console.log(name)
    console.log(this.form.id)
    this.$axios.get('/api/process/')
      .then(res => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].studentname === name) {
            this.tableData.push(res.data[i])
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    cancel () {
      this.$axios.delete('/api/process/' + this.tableData[0].id)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.tableData = []
    },
    end () {
      let newHistory = {
        id: '',
        date: '',
        address: '',
        description: '',
        studentname: '',
        workername: '',
        rate: 0
      }
      newHistory.id = this.tableData[0].id
      newHistory.date = this.tableData[0].date
      newHistory.address = this.tableData[0].address
      newHistory.description = this.tableData[0].description
      newHistory.studentname = this.tableData[0].studentname
      newHistory.workername = this.tableData[0].workername
      console.log(newHistory)
      this.$axios.post('/api/history/', newHistory)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.$axios.delete('/api/process/' + this.tableData[0].id)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.tableData = []
    },
    create () {
      this.$axios.post('/api/process/', this.form)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.$message('创建成功')
      this.dialogVisible = false
      console.log(this.form)
    },
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
      return year + '-' + month + '-' + strDate
    }
  }
}
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
  #table{
    width: 100%;
  }
  #step{
    width: 100%;
    height: 400px;
    padding: auto;
    background-color: white;
    display: flex;
    align-items: center;
  }
  #primary{
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }
</style>
