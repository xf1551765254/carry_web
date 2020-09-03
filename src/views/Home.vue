<template>
  <div class="home">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>

    <back-to-top :custom-style="myBackToTopStyle" :visibility-height="300" :back-position="0" transition-name="fade" />
    <div class="sidebar">
      <!-- <div class="sidebar_service">
        <svg-icon icon-class="user" />
      </div> -->
      <el-tooltip class="item" effect="dark" content="在线客服" placement="left">
        <div class="sidebar_service">

          <i class="el-icon-service"></i>
        </div>
      </el-tooltip>

      <el-popover placement="left" trigger="hover" @show="codeShow=true" @hide="codeShow=false">
        <div class="weixinBarcode">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="">
        </div>
        <div class="sidebar_barCode" slot="reference">
          <!-- <svg-icon icon-class="qrCode" className="code" /> -->
          <svg-icon icon-class="qrCode" className="code" v-if="!codeShow" />
          <svg-icon icon-class="qrCodeHover" cslassName="code" v-else />

        </div>

      </el-popover>

    </div>

  </div>
</template>

<script>

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from '@/components/BackToTop'

export default {
  name: "Home",
  components: { Header, Footer, BackToTop },
  data() {
    return {
      myBackToTopStyle: {
        right: '20px',
        bottom: '145px',
        width: '50px',
        height: '50px',
        'border-radius': '4px',
        'line-height': '50px', // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: '#e7eaf1'// 按钮的背景颜色 The background color of the button
      },
      codeShow: false
    }
  },
  mounted() {

  },
  methods: {
    codeShowFn() {
      console.log(this.codeShow)
    }

  }
};
</script>

<style lang="scss" scope>
.home {
  width: auto;
}
.el-header,
.el-footer {
  background-color: #fff;
  color: #333;
  width: auto;
  min-width: 1186px;
}
.el-header {
  height: 80px !important;
}
.el-footer {
  height: 150px !important;
}
.el-main {
  color: #333;
  width: auto;
  min-height: 900px;
  padding: 0;
  .el-main-content {
    margin: auto;
  }
}
.back-to-ceiling .Icon {
  font-size: 30px;
  &:hover {
    fill: #1296db;
  }
}

.sidebar {
  position: fixed;
  bottom: 30px;
  right: 20px;
  .sidebar_barCode,
  .sidebar_service {
    width: 50px;
    height: 50px;
    background-color: #e7eaf1;
    line-height: 50px;
    text-align: center;
    margin-bottom: 5px;
    color: #fff;
    font-size: 30px;
    border-radius: 4px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #1296db;
    }
  }
}
</style>

