<template>
  <div class="content">
    <div class="title">
      <h3>新型铸管有限公司</h3>
    </div>
    <el-row class="bottom">
      <el-col :span="4" class="bottom-left">
        <el-menu default-active="bottom-product" background-color="#fcfcfc" text-color="#666" active-text-color="#fff" @select="selectMenu">
          <div class="leftTitle">公司简介</div>
          <el-menu-item index="bottom-product">
            <span slot="title">主管产品</span>
          </el-menu-item>
          <el-menu-item index="bottom-map">
            <span slot="title">销售区域地图</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="bottom-right">
        <div v-show="menuName==='bottom-product' ">
          <div class="clearfix">
            <el-card shadow="never" :body-style="{ padding: '0px' }" class="listCard" v-for="(item,index) in productList" :key="index">
              <router-link to="123">
                <el-image class="imgBox" fit="scale-down" :src="item.src">
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <div class="product-Details">
                  <span>{{item.Details}}</span>
                </div>
              </router-link>
              <div class="product-footer">
                <div>{{item.type}}</div>
                <div style="margin-left:10px">
                  <svg-icon icon-class="eye-open" />{{item.look}}</div>
                <div>{{item.date}}</div>
              </div>
            </el-card>
          </div>
          <div class="pages" style="">
            <el-pagination background layout="prev, pager, next" :total="pagesTotal*10" @current-change="pagesChange">
            </el-pagination>
          </div>
        </div>
        <div v-if="menuName==='bottom-map'" class="map">
          <chinaMap height="522px" width="100%"></chinaMap>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import chinaMap from '@/components/Charts/chinaMap'
export default {
  name: 'companyIntroduction',
  components: { chinaMap },
  data() {
    return {
      menuName: 'bottom-product',
      productList: [
        { id: '1', src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '2', src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '3', src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '4', src: "", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '5', src: "", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
        { id: '6', src: "", Details: '污水-GB/T 26081-2010-DN500-SIAwb-K9-5.9-铝酸盐水泥-灰色环氧', type: '污水管', look: '123', date: '2019-23-05' },
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
.content {
  width: 1200px;
  min-width: 1100px;
  margin: 10px auto;
  background-color: #fff;
  .title {
    width: 100%;
    height: 76px;
    line-height: 76px;
    text-align: center;
    border-bottom: 1px solid rgba(233, 233, 233, 1);
    font-size: 18px;
    font-family: "PingFangSC-Semibold", "PingFang SC Semibold", "PingFang SC";
    font-weight: 650;
  }
  .bottom {
    padding: 10px;
  }
  .bottom-left {
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
  .bottom-right {
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
      .product-Details {
        padding: 20px;
        height: 72px;
        width: 100%;
        border-bottom: 1px solid #e6ebf5;
        font-size: 14px;
        color: #666;
        line-height: 1.2;
      }
      .product-footer {
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
    .pages {
      text-align: center;
      margin: 20px 0 50px;
    }
    .map {
      width: 100%;
      height: 522px;
    }
  }
}
</style>
<style lang="scss">
.bottom-left {
  .el-menu-item.is-active {
    background-color: #0079fe !important;
  }
}
</style>