<template>
  <div class="footer">
    <div class="footer_left">
      <div class="footer_avatar">
        <el-avatar :size="80" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      </div>
      <div class="footer_list">
        <div></div>
        <ul class="listBox">
          <li>
            <router-link to="/home">网站首页</router-link>
          </li>
          <li>
            <router-link to="/home">帮助中心</router-link>
          </li>
          <li>
            <router-link to="/home">联系我们</router-link>
          </li>
          <li>
            <router-link to="/home">客服服务</router-link>
          </li>
          <li>
            <router-link to="/home">隐私政策</router-link>
          </li>
          <li>
            <router-link to="/home">广告服务</router-link>
          </li>
          <li>
            <router-link to="/home">网站地图</router-link>
          </li>
          <li>
            <router-link to="/home">意见反馈</router-link>
          </li>

        </ul>
        <div class="listCopy">
          Copyright ©
          <span>
            <router-link to="/home">网站地图</router-link>
          </span>
          ,All Rights Reserved
        </div>
      </div>
    </div>
    <div class="footer_right">
      <div class="service">
        <i class="el-icon-phone"></i> 24小时服务热线
        <div style="margin-left:20px">400-000-0000</div>
      </div>
      <el-popover placement="top" trigger="hover">
        <div class="weixinBarcode">
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="" target="_blank">
        </div>
        <div class="weixing" slot="reference">
          <svg-icon icon-class="wechat" />
        </div>
      </el-popover>

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  margin: auto;
  background: #fff;
  display: flex;
  display: -webkit-flex;
  -webkit-flex-wrap: nowrap;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  .footer_left {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height: 150px;
    .footer_list {
      font-size: 14px;
      .listBox li {
        float: left;
        margin-right: 10px;
        color: #999;
        height: 20px;
      }
      li:hover {
        color: #666;
      }
      .listCopy {
        text-align: left;
        padding-left: 40px;
        line-height: 30px;
        color: #ccc;
        span:hover {
          color: #666;
        }
      }
    }
  }
  .footer_right {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    .weixing {
      margin-left: 20px;
      width: 50px;
      height: 50px;
      background-color: #ccc;
      border-radius: 50%;
      color: #fff;
      line-height: 50px;
      .svg-icon {
        width: 3rem;
      }
      &:hover {
        background-color: #1890ff;
      }
    }
    .service {
      i {
        color: #999;
      }
      color: #ccc;
    }
  }
}
</style>
