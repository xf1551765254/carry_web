<template>
  <div class="el-main-content">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumd">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>采购需求</el-breadcrumb-item>
      <el-breadcrumb-item>中标公示</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%" size="medium">
        <el-table-column prop="address" label="采购信息" align="center">
        </el-table-column>
        <el-table-column prop="name" label="中标公司" align="center">
        </el-table-column>
        <el-table-column prop="date" label="中标时间" width="150" align="center">
        </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "bidWinner",
  data() {
    return {
      tableData: [
        { date: '2016-05-02', name: '球墨铸铁管及管件采购', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '都江堰市水务局政府井盖', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-01', name: '都江堰市水务局政府井盖', address: '上海市普陀区金沙江路 1519 弄' },
        { date: '2016-05-03', name: '都江堰市水务局政府井盖', address: '上海市普陀区金沙江路 1516 弄' }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.breadcrumd {
  margin: 10px 5px;
}
.table {
  background-color: #fff;
  padding: 30px;
}
</style>