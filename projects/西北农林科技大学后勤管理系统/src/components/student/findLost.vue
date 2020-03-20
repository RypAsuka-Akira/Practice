<template>
  <div id="container">
    <div id="header">
      <div id="search">
        <el-date-picker
          v-model="searchDate"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search" style="margin-left: 20px" @click="search(searchDate)">搜索</el-button>
      </div>
      <div id="create">
        <el-button type="primary" icon="el-icon-edit" @click="dialogVisible = true">发布信息</el-button>
      </div>
    </div>
    <div id="table">
      <el-table
        :data="tempList"
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'ascending'}"
        ref="filterTable">
        <el-table-column
          label="上传日期"
          width="200"
          align="center"
          prop="date">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date}}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物品描述"
          width="400"
          align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.description }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="拾取人"
          width="100"
          align="center">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="联系方式"
          width="200"
          align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="物品状态"
          width="200"
          align="center">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag :type="scope.row.state? 'danger': 'primary'">{{scope.row.state? '已被领取': '未被领取'}}</el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        @prev-click="prevClick"
        @next-click="nextClick"
        @current-change="currentChange"
        v-if="isSearch">
      </el-pagination>
      <el-dialog
        title="创建订单"
        :visible.sync="dialogVisible"
        width="60%">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="表单ID">
            <el-input v-model="form.id"></el-input>
          </el-form-item>
          <el-form-item label="上传日期">
            <el-input v-model="form.date" disabled></el-input>
          </el-form-item>
          <el-form-item label="拾取人" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="联系方式" prop="phone">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="物品描述" prop="description">
            <el-input type="textarea" rows="4" v-model="form.description"></el-input>
          </el-form-item>
          <el-button @click="dialogVisible = false" style="margin-left: 700px">取消</el-button>
          <el-button type="primary" @click="create" style="margin-left: 20px">立即创建</el-button>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'findLost',
  data () {
    return {
      pageSize: 5,
      searchDate: '',
      currentPage: 1,
      isSearch: true,
      dialogVisible: false,
      form: {
        id: '',
        date: this.getDate(),
        name: '',
        phone: '',
        description: '',
        state: 0
      },
      rules: {
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入拾取人姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入拾取人联系方式', trigger: 'blur' },
          { min: 11, max: 11, message: '长度不符合规范', trigger: 'blur' }
        ],
        description: [
          { required: true, message: '请输入物品详细描述', trigger: 'blur' }
        ]
      },
      tempList: [],
      tableData: [],
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  methods: {
    search (val) {
      if (val === null) {
        val = ''
      }
      console.log(val)
      let arr = []
      this.tableData.forEach(item => {
        if (item.date.indexOf(val) !== -1) {
          arr.push(item)
        }
      })
      this.tempList = arr
    },
    create () {
      console.log(this.form)
      this.$axios.post('/api/lostfind', this.form)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      this.dialogVisible = false
      this.$message('提交成功')
    },
    prevClick () {
      this.currentPage = this.currentPage - 1
      this.currentChangePage(this.tableData, this.currentPage)
      console.log(this.currentPage)
    },
    nextClick () {
      this.currentPage = this.currentPage + 1
      this.currentChangePage(this.tableData, this.currentPage)
      console.log(this.currentPage)
    },
    currentChange (currentPage) {
      this.currentPage = currentPage
      this.currentChangePage(this.tableData, this.currentPage)
      console.log(this.currentPage)
    },
    currentChangePage (tableData, currentPage) {
      let from = (currentPage - 1) * 5
      let to = currentPage * 5
      console.log(from)
      console.log(to)
      this.tempList = []
      for (; from < to; from++) {
        if (tableData[from]) {
          this.tempList.push(tableData[from])
        }
      }
      console.log(this.tempList)
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
  },
  created () {
    this.$axios.get('/api/lostfind/')
      .then(res => {
        this.tableData = res.data
        for (let i = 0; i < this.pageSize; i++) {
          this.tempList.push(this.tableData[i])
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style scoped>
  #container {
    width: 100%;
    height: 100%;
  }
  #table{
    width: 82%;
    height: 500px;
    margin: auto;
  }
  #header{
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  #search{
    width: 350px;
    height: 60px;
    margin-left: 150px;
    background-color: #409EFF;
    display: flex;
    align-items: center;
    padding-left: 15px;
    border-radius: 20px;
  }
  #create{
    width: 200px;
    height: 60px;
    margin-right: 180px;
    display: flex;
    align-items: center;
    background-color: #409EFF;
    justify-content: center;
    border-radius: 20px;
  }
</style>
