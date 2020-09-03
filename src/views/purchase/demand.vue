<template>
  <div class="el-main-content">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumd">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>采购需求</el-breadcrumb-item>
      <el-breadcrumb-item>需求列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="address" label="采购信息" align="center">
        </el-table-column>
        <el-table-column prop="name" label="采购产品数" align="center">
        </el-table-column>
        <el-table-column prop="date" label="发布时间" align="center">
        </el-table-column>
        <el-table-column prop="date" label="剩余时间" align="center">
        </el-table-column>
        <el-table-column prop="name" label="已有报价" align="center">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "demand",
  data() {
    return {
      tableData: [
        { date: '2016-05-02', name: '3种', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-04', name: '3种', address: '上海市普陀区金沙江路 1517 弄' },
        { date: '2016-05-01', name: '3种', address: '上海市普陀区金沙江路 1519 弄' },
        { date: '2016-05-03', name: '3种', address: '上海市普陀区金沙江路 1516 弄' }
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