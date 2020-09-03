<template>
  <div class="el-main-content">
    <imgList class="issue-top" pageRouter="industryKnow" />
    <div class="issue-bottom">
      <el-row class="issue-typeList" type="flex" justify="space-between">
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
      <div class="" v-for="(item,index) in listCard" :key="index">
        <list-card :imgSrc="item.src" :title="item.title" :date="item.date" :contain="item.content" :isIndustry="true">
        </list-card>
      </div>
      <div class="pages" style="">
        <el-pagination background layout="prev, pager, next" :total="pagesTotal*10" @current-change="pagesChange">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import imgList from "@/components/imgList"
import ListCard from '@/components/ListCard'
export default {
  name: 'industryKnow',
  components: { imgList, ListCard },
  data() {
    return {
      radio: '1',
      radioList: [
        { id: '1', label: '1', name: '全部问题' },
        { id: '2', label: '2', name: '订单操作' },
        { id: '3', label: '3', name: '支付' },
        { id: '4', label: '4', name: '退款' },
        { id: '5', label: '5', name: '需求' },
      ],
      selectValue: '',
      selectOptions: [
        { value: '1', label: '最新' },
        { value: '2', label: '最热' },
        { value: '3', label: '评论' },
        { value: '4', label: '点赞' },
        { value: '5', label: '收藏' }
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
    radioChange(val) {
      //console.log(val)
    },
    selectChange(val) {
      //console.log(val)
    },
    pagesChange(page) {
      //console.log(page)
    },
  },

}
</script>

<style lang="scss" scoped>
.issue-top {
  margin-top: 10px;
  width: 100%;
}
.issue-bottom {
  margin: 10px 0;
  padding: 15px;
  background-color: #fff;
  .issue-typeList {
    margin-bottom: 10px;
  }
  .typeList-left {
    width: auto;
    min-width: 200px;
    max-width: 900px;
    .el-radio {
      line-height: 32px;
    }
  }
  .typeList-right {
    width: auto;
  }
  .pages {
    text-align: center;
    margin: 20px 0 50px;
  }
}
</style>