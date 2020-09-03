<template>
  <div class="el-main-content">
    <imgList class="marketing-top" pageRouter="marketing" />
    <el-row class="marketing-bottom">
      <el-col :span="4" class="marketing-bottom-left">
        <el-menu default-active="recommend" background-color="#fcfcfc" text-color="#666" active-text-color="#fff" @select="selectMenu">
          <div class="leftTitle">营销信息</div>
          <el-menu-item index="recommend">
            <span slot="title">新品推荐</span>
          </el-menu-item>
          <el-menu-item index="active">
            <span slot="title">营销活动</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="marketing-bottom-right">
        <div v-show="menuName==='recommend'" class="newRecommend clearfix">
          <el-card shadow="never" :body-style="{ padding: '0px' }" class="listCard" v-for="(item,index) in newRecommendList" :key="index">
            <router-link to="123">
              <el-image class="imgBox" fit="scale-down" :src="item.src">
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <div class="newGoods-Details">
                <span>{{item.Details}}</span>
              </div>
            </router-link>
            <div class="newGoods-footer">
              <div>{{item.type}}</div>
              <div style="margin-left:10px">
                <svg-icon icon-class="eye-open" />{{item.look}}</div>
              <div>{{item.date}}</div>
            </div>
          </el-card>
        </div>
        <div v-show="menuName==='active'" class="actions">
          <div class="market-liatCard" v-for="(item,index) in listCard" :key="index">
            <list-card :imgSrc="item.src" :type="item.type" :title="item.title" :isIndustry="true">
              <el-row slot="footer" class="liatCard-Content">
                <p>
                  {{item.content}}
                </p>
              </el-row>
            </list-card>
          </div>
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
  name: 'marketing',
  components: { imgList, ListCard },
  data() {
    return {
      menuName: 'recommend',
      newRecommendList: [
        { id: '1', src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '2', src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '3', src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '4', src: "", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '5', src: "", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '6', src: "", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
      ],
      listCard: [
        {
          id: '1', src: '', type: '营销活动', title: '这是标题',
          content: '这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容这是内容'
        },
        { id: '2', src: '', type: '营销活动', title: '这是标题', content: '这是内容' },
        { id: '3', src: '', type: '营销活动', title: '这是标题', content: '这是内容' },
      ],
      pagesTotal: 10,
    }
  },
  methods: {
    selectMenu(name) {
      this.menuName = name
      //console.log(name)
    },
    pagesChange(page) {
      //console.log(page)
    },
  }
}
</script>

<style lang="scss" scoped>
.marketing-top {
  margin-top: 10px;
  width: 100%;
}
.marketing-bottom {
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  .marketing-bottom-left {
    .el-menu {
      border: none;
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
  .marketing-bottom-right {
    padding-top: 20px;
    padding-left: 20px;
    height: auto;
    .listCard {
      width: calc(100% / 3 - 10px);
      margin-bottom: calc(10px * 3 / 2);
      margin-right: calc(10px * 3 / 2);
      float: left;
      height: 350px;
      &:nth-child(3n) {
        margin-right: 0px;
      }
      .imgBox {
        width: 100%;
        height: 219px;
        background-color: #e4e4e4;
        .image-slot {
          i {
            font-size: 40px;
            color: #999;
            text-align: center;
            line-height: 219px;
            display: block;
          }
        }
      }
      .newGoods-Details {
        padding: 20px;
        height: 72px;
        width: 100%;
        border-bottom: 1px solid #e6ebf5;
        font-size: 14px;
        color: #666;
        line-height: 1.2;
      }
      .newGoods-footer {
        width: 100%;
        padding: 20px;
        height: 60px;
        line-height: 1.2;
        & > div {
          float: left;
          color: #999;
          font-size: 14px;
          &:last-child {
            float: right;
          }
        }
      }
    }
    .market-liatCard {
      .liatCard-Content {
        p {
          margin: 0;
          font-size: 15px;
          color: #666;
          font-family: PingFangSC-Semibold, "PingFang SC Semibold",
            "PingFang SC";
          line-height: 1.5;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 4;
        }
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
.marketing-bottom-left {
  .el-menu-item.is-active {
    background-color: #0079fe !important;
  }
}
</style>