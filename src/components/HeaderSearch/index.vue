<template>
  <div class="header-search">
    <el-row class="header-search-container">
      <el-col :span="4">
        <div class="grid-content">

        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content header-search-right">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="产品" value="1"></el-option>
              <el-option label="行业动态" value="2"></el-option>
              <el-option label="政策法规" value="3"></el-option>
              <el-option label="采购需求" value="4"></el-option>
              <el-option label="行业知识" value="5"></el-option>
            </el-select>
            <el-button slot="append" type="danger" @click="search">搜索</el-button>
          </el-input>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'headerSearch',
  props: {
    input: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      select: ''
    }
  },
  methods: {
    search() {
      console.log('header-search')
    }
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  width: 100%;
  background-color: #f7f8fa;
  padding-top: 15px;
  // padding-bottom: 20px;
  .header-search-container {
    width: 1200px;
    min-width: 1100px;
    height: 90px;
    margin: auto;
    .grid-content {
      height: 90px;
      &.header-search-right {
        margin-left: 50px;
        height: 40px;
        line-height: 90px;
      }
      .el-input-group__prepend {
        border: 1px solid #e62b1e;
      }
      .el-input-group__append {
        border: 1px solid #e62b1e;
        background-color: #e62b1e;
        color: #fff;
      }
    }
  }
}
</style>
<style lang="scss">
.grid-content {
  .el-input-group__prepend {
    width: 110px;
    border: 1px solid #e62b1e;
    background-color: #e62b1e;
    color: #fff;
  }
  .el-input-group__append {
    border: 1px solid #e62b1e;
    background-color: #e62b1e;
    color: #fff;
  }
  .el-input__inner {
    border: 1px solid #e62b1e;
    height: 40px;
  }
}
</style>