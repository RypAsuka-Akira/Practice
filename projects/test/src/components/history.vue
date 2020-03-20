<template>
  <div id="container">
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="报修日期"
      width="180"
      align="center">
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
          <el-tag size="medium">{{ scope.row.name }}</el-tag>
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
          v-model=scope.row.value>
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
          :disabled="scope.row.rateDisabled"></el-button>
        <el-button
          type="primary"
          icon="el-icon-phone"
          @click="request(scope.$index, scope.row)">请求回访</el-button>
      </template>
    </el-table-column>
  </el-table>
    <el-dialog
      title="评分"
      :visible.sync="dialogVisible"
      width="30%">
      <el-rate v-model="tableData[rowIndex].value"></el-rate>
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
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        description: '灯坏了',
        value: null,
        rateDisabled: false
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        description: '灯坏了',
        value: null,
        rateDisabled: false
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        description: '灯坏了',
        value: null,
        rateDisabled: false
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        description: '灯坏了',
        value: null,
        rateDisabled: false
      }]
    }
  },
  methods: {
    rate (index) {
      this.rowIndex = index
      this.dialogVisible = true
    },
    request (index, row) {
      console.log(index, row)
    },
    rateSubmit () {
      this.dialogVisible = false
      this.tableData[this.rowIndex].rateDisabled = true
    }
  }
}
</script>

<style scoped>
#container{
  width:100%;
  height:100%;
}
</style>
