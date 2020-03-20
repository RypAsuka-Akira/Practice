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
        width="300"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="报修人"
        width="200"
        align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.studentname }}</el-tag>
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
            v-model=scope.row.rate>
          </el-rate>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'history',
  data () {
    return {
      tableData: []
    }
  },
  created () {
    let name = localStorage.getItem('name')
    console.log(name)
    this.$axios.get('/api/history/')
      .then(res => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].workername === name) {
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
