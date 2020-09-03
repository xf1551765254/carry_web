<template>
  <div class="expert">
    <div class="industry-listCard" v-for="(item,index) in listCard" :key="index">
      <list-card :imgSrc="item.src" :type="item.type" :title="item.title" :contain="item.content" :isIndustry="true">
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
  name: 'expert',
  components: { ListCard },
  data() {
    return {
      listCard: [
        {
          id: '1', src: '', type: '专家专栏', title: '这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容是内容这是内是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容是内容这是内容这是内容容这是内容是内容这是内容这是内容'
        },
        { id: '2', src: '', type: '专家专栏', title: '这是标题', content: '这是内容' },
        { id: '3', src: '', type: '专家专栏', title: '这是标题', content: '这是内容' },
      ],
      pagesTotal: 10,
    }
  },
  methods: {
    pagesChange(page) {
      //console.log(page)
    },
  }
}
</script>

<style lang="scss" scoped>
.expert {
  width: 1145px;
  min-width: 1100px;
  margin: auto;
  margin-top: 10px;
  background-color: #fff;
  padding: 15px 10px;
  .pages {
    text-align: center;
    margin: 20px 0 50px;
  }
}
</style>