<template>
  <div id="container">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="报修日期"
      width="180"
      align="center"
      prop="date">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="报修地址"
      width="300"
      align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.address }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="报修内容"
      width="180"
      align="center">
      <template slot-scope="scope">
        <span>{{ scope.row.description }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="处理人"
      width="180"
      align="center">
      <template slot-scope="scope">
        <div slot="reference" class="name-wrapper">
          <el-tag size="medium">{{ scope.row.workername }}</el-tag>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      label="评分"
      width="200"
      align="center">
      <template slot-scope="scope">
        <el-rate
          disabled
          v-model=scope.row.rate>
        </el-rate>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      align="center"
      width="300">
      <template slot-scope="scope">
        <el-button
          type="warning"
          icon="el-icon-star-off" circle
          @click="rate(scope.$index)"
          :disabled="scope.row.rate!==0"></el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-dialog
      title="评分"
      :visible.sync="dialogVisible"
      width="30%">
      <el-rate v-model="tableData[rowIndex].rate"></el-rate>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click=rateSubmit>确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      rowIndex: 0,
      dialogVisible: false,
      tableData: []
    }
  },
  methods: {
    rate (index) {
      this.rowIndex = index
      this.dialogVisible = true
      console.log(index)
    },
    rateSubmit () {
      this.dialogVisible = false
      console.log(this.tableData[this.rowIndex])
      this.$axios.put('/api/history', this.tableData[this.rowIndex])
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
    this.$axios.get('/api/history/')
      .then(res => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].studentname === name) {
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
  width:100%;
  height:100%;
}
</style>
