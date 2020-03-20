<template>
    <div id="container">
      <el-table
      :data="tableData"
      style="width: 60vm;font-size: 18px;">
        <el-table-column
          prop="id"
          label="项目编号"
          width="150"
          align="center"></el-table-column>
        <el-table-column
          prop="time"
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
          width="300"
          align="center"></el-table-column>
        <el-table-column
          prop="state"
          label="报修进度"
          width="100"
          align="center">
          <template slot-scope="scope">
            <span>{{scope.row.state}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="worker"
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
      <div id="step">
        <el-steps :active="active"
                  align-center
                  finish-status="success"
                  style="margin: auto;">
          <el-step title="申报" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="审核" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="出工" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="修理" description="这是一段很长很长很长的描述性文字"></el-step>
          <el-step title="完工" description="这是一段很长很长很长的描述性文字"></el-step>
        </el-steps>
      </div>
    </div>
</template>

<script>
export default {
  name: 'process',
  data () {
    return {
      active: 2,
      tableData: [{
        id: '20190701',
        time: '20190701',
        address: '10#133',
        description: '灯坏了',
        state: '',
        worker: '王小虎'
      }]
    }
  },
  created () {
    this.tableData[0].state = this.sta(this.active)
  },
  methods: {
    sta (active) {
      if (active === 1) {
        return '申报'
      } else if (active === 2) {
        return '审核'
      } else if (active === 3) {
        return '出工'
      } else if (active === 4) {
        return '修理'
      } else if (active === 5) {
        return '完工'
      } else {
        console.log('error')
      }
    },
    cancel () {
      this.active = 0
    },
    end () {
      this.active = 5
    }
  },
  watch: {
    active: function (val) {
      this.tableData[0].state = this.sta(val)
    }
  }
}
</script>

<style scoped>
  #container{
    width: 100%;
    height: 100%;
  }
  #step{
    width: 100%;
    height: 400px;
    padding: auto;
    background-color: white;
    display: flex;
    align-items: center;
  }
</style>
