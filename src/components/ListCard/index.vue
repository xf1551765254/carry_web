<template>
  <div class="ListCard">
    <el-row class="" type="flex">
      <el-col class="imgBox">
        <el-image style="width: 159px; height: 119px" fit="scale-down">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </el-col>
      <el-col class="listCard-right">
        <router-link to="12">
          <el-row class="listCard-rightTop" type="flex" justify="space-between">
            <el-col class="listCard-typeTitle">
              <el-tag effect="dark" v-if="type">{{type}}</el-tag>
              <span class="listCard-title">{{title}}</span>
            </el-col>
            <el-col class="listCard-date" v-if="date">
              <i class="el-icon-time"></i>
              {{date}}
            </el-col>
          </el-row>
          <el-row :class="['listCard-rightMiddle',{hoveWidth:isIndustry}]">
            <p><span>
                {{contain}}
              </span></p>
          </el-row>
          <el-row class="listCard-rightBottom" type="flex" justify="space-between">
            <el-col class="listCard-rightBottomLeft">
              <div>
                <span class>{{instury}}</span>
              </div>
            </el-col>
            <el-col class="listCard-rightBottomRifht">
              <span style="margin-right:10px" v-if="downloadNumber"><i class="el-icon-download"></i>{{downloadNumber}}</span>
              <span><i class="el-icon-view" v-if="startNumber"></i>{{startNumber}}</span>
            </el-col>
          </el-row>
          <slot name="footer">
          </slot>
        </router-link>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'ListCard',
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    contain: {
      type: String,
      default: ''
    },
    instury: {
      type: String,
      default: ''
    },
    downloadNumber: {
      type: Number,
      default: null
    },
    startNumber: {
      type: Number,
      default: null
    },
    isIndustry: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>
.ListCard {
  width: 100%;
  height: 145px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  padding: 15px 10px;
  box-sizing: border-box;
  .imgBox {
    width: 159px;
    height: 115px;
    background-color: #ccc;
    i {
      font-size: 40px;
      color: #999;
      text-align: center;
      line-height: 120px;
      display: block;
    }
  }
  .listCard-right {
    margin-left: 10px;
    .listCard-rightTop {
      min-height: 20px;
      text-align: center;
      .listCard-typeTitle {
        width: auto;
      }
      .el-tag {
        margin-right: 10px;
      }
      .listCard-title {
        font-weight: 650;
        font-family: PingFangSC-Semibold, "PingFang SC Semibold", "PingFang SC";
        color: #666;
      }
      .listCard-date {
        width: auto;
        font-family: "微软雅黑";
        text-decoration: none;
        color: #999;
        font-size: 14px;
      }
    }
    .listCard-rightMiddle {
      padding-right: 20px;
      height: 70px;
      p {
        margin: 0;
        font-size: 15px;
        color: #666;
        font-family: PingFangSC-Semibold, "PingFang SC Semibold", "PingFang SC";
        line-height: 1.5;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        span {
          text-decoration: none;
        }
      }
    }
    .hoveWidth {
      height: auto;
      p {
        -webkit-line-clamp: 4;
      }
    }
    .listCard-rightBottom {
      font-size: 14px;
      height: auto;
      .listCard-rightBottomLeft {
        width: auto;
        color: #999;
        min-width: 16px;
      }
      .listCard-rightBottomRifht {
        color: #999;
        width: auto;
      }
    }
  }
}
</style>
<style lang="scss">
.ListCard {
  .imgBox {
    .image-slot {
      width: 159px;
      height: 119px;
    }
  }
}
</style>