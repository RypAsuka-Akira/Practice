<template>
  <div id="container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="上传日期"
        width="200"
        align="center">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="物品描述"
        width="400"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.thing }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="所在地点"
        width="300"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="拾取人"
        width="200"
        align="center">
        <template slot-scope="scope">
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="联系方式"
        width="300"
        align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'findLost',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        thing: '一卡通',
        address: '西区超市',
        name: '李艺灵',
        phone: '15122223333'
      },
      {
        date: '2016-05-02',
        thing: '一卡通',
        address: '西区超市',
        name: '李艺灵',
        phone: '15122223333'
      },
      {
        date: '2016-05-02',
        thing: '一卡通',
        address: '西区超市',
        name: '李艺灵',
        phone: '15122223333'
      },
      {
        date: '2016-05-02',
        thing: '一卡通',
        address: '西区超市',
        name: '李艺灵',
        phone: '15122223333'
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
