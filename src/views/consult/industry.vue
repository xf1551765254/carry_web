<template>
  <div class="industry">
    <el-row type="flex" justify="end">
      <el-col class="top">
        <el-select v-model="selectValue" placeholder="请选择" size="small" clearable @change="selectChange">
          <el-option v-for="item in selectOptions" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <div class="industry-listCard" v-for="(item,index) in listCard" :key="index">
      <list-card :imgSrc="item.src" :type="item.type" :title="item.title" :date="item.date" :instury="item.instury||''" :contain="item.content" :startNumber="item.number"
        :downloadNumber="item.downloadNumber" :isIndustry="false">
      </list-card>
    </div>
    <div class="pages" style="">
      <el-pagination background layout="prev, pager, next" :total="pagesTotal*10" @current-change="pagesChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import ListCard from '@/components/ListCard'
export default {
  name: 'industry',
  components: { ListCard },
  data() {
    return {
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
          id: '1', src: '', type: '行业动态', title: '这是标题', instury: '摘自 : ',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
          date: '2019-23-21 12:00', number: 123
        },
        { id: '2', src: '', type: '行业动态', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
        { id: '3', src: '', type: '行业动态', title: '这是标题', content: '这是内容', date: '2019-23-21 12:00', number: 123 },
      ],
      pagesTotal: 10,

    }
  },
  methods: {
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
.industry {
  width: 1145px;
  min-width: 1100px;
  margin: auto;
  margin-top: 10px;
  background-color: #fff;
  padding: 15px 10px;
  .top {
    width: auto;
  }
  .pages {
    text-align: center;
    margin: 20px 0 50px;
  }
}
</style>