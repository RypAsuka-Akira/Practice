<template>
  <div id="container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="报修日期"
        width="200"
        align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="报修地址"
        width="400"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="报修内容"
        width="300"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="报修人员"
        width="200"
        align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="评分"
        width="300"
        align="center">
        <template slot-scope="scope">
          <el-rate
            disabled
            v-model=scope.row.value>
          </el-rate>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'workerHistory',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '李艺灵',
        address: '上海市普陀区金沙江路 1518 弄',
        description: '灯坏了',
        value: 4,
        rateDisabled: true
      }, {
        date: '2016-05-04',
        name: '李艺灵',
        address: '上海市普陀区金沙江路 1517 弄',
        description: '灯坏了',
        value: 5,
        rateDisabled: true
      }, {
        date: '2016-05-01',
        name: '李艺灵',
        address: '上海市普陀区金沙江路 1519 弄',
        description: '灯坏了',
        value: 5,
        rateDisabled: true
      }, {
        date: '2016-05-03',
        name: '李艺灵',
        address: '上海市普陀区金沙江路 1516 弄',
        description: '灯坏了',
        value: 5,
        rateDisabled: true
      }]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  #container{
    width:100%;
    height:100%;
  }
</style>
