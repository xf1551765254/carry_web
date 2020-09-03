<template>
  <div class="com-imgList">
    <el-row class="imgList">
      <el-col class="card" v-for="(item,index) in data" :key="index">
        <el-card :body-style="{ padding: '0px'}">
          <router-link :to="pageRouter?`${pageRouter}/${item.id}`:item.id">
            <el-image class="imgBox" fit="scale-down" :src="item.src">
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </router-link>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'imgList',
  props: {
    imgListArr: {
      type: Array,
      default: () => []
    },
    pageRouter: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: [
        { id: '1', src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg' },
        { id: '2', src: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
        { id: '3', src: '' },
        { id: '4', src: '' },
        { id: '5', src: '' },
      ]
    }
  },
  watch: {

  }

}
</script>

<style lang="scss" scoped>
.card {
  width: calc(100% / 5 - 10px);
  margin-bottom: calc(10px * 5 / 4);
  margin-right: calc(10px * 5 / 4);
  float: left;
  height: 167px;
  &:last-child {
    margin-right: 0;
  }
  .el-card {
    width: 100%;
    height: 167px;
    border: none;
  }
}
.imgBox {
  background-color: #e4e4e4;
  width: 100%;
  height: 167px;
  .image-slot {
    i {
      font-size: 40px;
      color: #999;
      text-align: center;
      line-height: 167px;
      display: block;
    }
  }
}
</style>