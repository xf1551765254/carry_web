<template>
  <div class="el-main-content">
    <imgList class="case-top" pageRouter="case" />
    <el-row class="case-bottom">
      <el-col :span="4" class="case-bottom-left">
        <el-menu default-active="industry" background-color="#E4E7ED" text-color="#666" active-text-color="#fff" @select="selectMenu">
          <div class="leftTitle">案例分类</div>
          <el-menu-item index="industry">
            <span slot="title">行业</span>
          </el-menu-item>
          <el-submenu index="goods">
            <template slot="title">产品</template>
            <el-menu-item :index="item.index" v-for="(item,index) in menuGoodsList" :key="index">{{item.name}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="scene">
            <span slot="title">场景</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="case-bottom-right">
        <el-row class="case-typeList" type="flex" justify="space-between">
          <el-col class="typeList-left">
            <el-radio-group v-model="radio" @change="radioChange">
              <el-radio :label="item.label" v-for="(item,index) in radioList" :key="index">{{item.name}}</el-radio>
            </el-radio-group>
          </el-col>
          <el-col class="typeList-right">
            <el-select v-model="selectValue" placeholder="请选择" size="small" clearable @change="selectChange">
              <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <div class="case-listCard" v-for="(item,index) in listCard" :key="index">
          <list-card :imgSrc="item.src" :title="item.title" :date="item.date" :contain="item.content">
            <el-row slot="footer" class="liatCard-footer">
              <p>
                <el-tag size="mini">案例类别</el-tag>
              </p>
            </el-row>
          </list-card>
        </div>
        <div class="pages" style="">
          <el-pagination background layout="prev, pager, next" :total="pagesTotal*10" @current-change="pagesChange">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import imgList from "@/components/imgList"
import ListCard from '@/components/ListCard'
export default {
  name: 'case',
  components: { imgList, ListCard },
  data() {
    return {
      radio: '1',
      radioList: [
        { id: '1', label: '1', name: '全部案例' },
        { id: '2', label: '2', name: '行业A' },
        { id: '3', label: '3', name: '行业B' },
        { id: '4', label: '4', name: '行业C' },
      ],
      selectValue: '',
      selectOptions: [
        { value: '1', label: '最新' },
        { value: '2', label: '最热' },
        { value: '3', label: '评论' },
        { value: '4', label: '点赞' },
        { value: '5', label: '收藏' }
      ],
      menuGoodsList: [
        { id: '1', index: "pipe", name: '铸管/管件' },
        { id: '2', index: "steel", name: '钢材' },
        { id: '3', index: "steelGrate", name: '钢格板' },
      ],
      listCard: [
        {
          id: '1', src: '', type: '营销活动', title: '这是标题', date: '2019-23-21 12:00',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'
        },
        { id: '2', src: '', type: '营销活动', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', },
        { id: '3', src: '', type: '营销活动', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', },
      ],
      pagesTotal: 10,
    }
  },
  methods: {
    selectMenu(name) {
      //console.log(name)
    },
    radioChange(val) {
      //console.log(val)
    },
    selectChange(val) {
      //console.log(val)
    },
    pagesChange(page) {
      //console.log(page)
    },
  }
}
</script>

<style lang="scss" scoped>
.case-top {
  margin-top: 10px;
  width: 100%;
}
.case-bottom {
  margin: 10px 0;
  padding: 15px;
  background-color: #fff;
  .case-bottom-left {
    .el-menu {
      border: none;
    }
    .el-submenu .el-menu-item {
      min-width: 186px;
    }
    .leftTitle {
      height: 40px;
      background: #f5f5f5;
      font-family: "微软雅黑 Bold", "微软雅黑 Regular", 微软雅黑;
      font-weight: 700;
      font-style: normal;
      font-size: 15px;
      text-align: center;
      line-height: 40px;
      margin-bottom: 5px;
    }
    .el-menu-item {
      text-align: center;
      height: 40px;
      line-height: 40px;
    }
  }
  .case-bottom-right {
    padding-left: 20px;
    height: auto;
    .case-typeList {
      margin-bottom: 10px;
    }
    .typeList-left {
      width: auto;
      min-width: 200px;
      max-width: 800px;
      .el-radio {
        line-height: 32px;
      }
    }
    .typeList-right {
      width: auto;
    }
    .liatCard-footer {
      margin-top: 3px;
      p {
        margin: 0;
      }
    }
    .pages {
      text-align: center;
      margin: 20px 0 50px;
    }
  }
}
</style>
<style lang="scss">
.case-bottom-left {
  .el-menu-item.is-active {
    background-color: #0079fe !important;
  }
  .el-menu--inline .el-menu-item {
    background-color: #dcdfe6 !important;
    &.is-active {
      background-color: #0079fe !important;
    }
  }
  .el-submenu__title {
    text-align: center;
    height: 40px;
    line-height: 40px;
  }
}
</style>