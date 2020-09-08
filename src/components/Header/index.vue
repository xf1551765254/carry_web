<template>
  <div class="header">
    <div class="header_left">
      <div class="header_avatar">
        <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" active-text-color="#e62b1e" mode="horizontal" @select="handleSelect" router>
        <el-menu-item index="/homePage">首页</el-menu-item>
        <el-submenu index="3">
          <template slot="title">咨询中心</template>
          <el-menu-item index="/home/consult/marketing">营销信息</el-menu-item>
          <el-menu-item index="/home/consult/industry">行业动态</el-menu-item>
          <el-menu-item index="/home/consult/policy">政策法规</el-menu-item>
          <el-menu-item index="/home/consult/price">价格趋势</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">知识库</template>
          <el-menu-item index="/home/knowledge/case">成功案列</el-menu-item>
          <el-menu-item index="/home/knowledge/industryKnow">行业知识</el-menu-item>
          <el-menu-item index="/home/knowledge/issue">常见问题</el-menu-item>
          <el-menu-item index="/home/knowledge/expert">专家专栏</el-menu-item>
        </el-submenu>
        <el-submenu index="5" v-if="roles.indexOf('provide')!=-1">
          <template slot="title">采购需求</template>
          <el-menu-item index="/home/purchase/demand">需求列表</el-menu-item>
          <el-menu-item index="/home/purchase/bidWinner">中标公示</el-menu-item>
        </el-submenu>
        <el-menu-item index="/home/companyIntroduction">公司介绍</el-menu-item>
        <el-menu-item index="/home/partner">
          合作伙伴</el-menu-item>

      </el-menu>
    </div>
    <div class="header_right">
      <!-- <el-button type="text" class="header_searchBox">
        <el-input placeholder="请输入内容" v-model="input" class="input-with-select" style="width:100%">
          <el-select v-model="select" slot="prepend" placeholder="产品">
            <el-option label="产品" value="产品"></el-option>
            <el-option label="行业动态" value="行业动态"></el-option>
            <el-option label="政策法规" value="政策法规"></el-option>
            <el-option label="采购需求" value="采购需求"></el-option>
            <el-option label="行业知识" value="行业知识"></el-option>
          </el-select>
        </el-input>
      </el-button> -->
      <!-- <el-button type="text" class="header_search"><i class="el-icon-search"></i></el-button> -->
      <el-button type="text" v-if="!userToken">
        <i class="el-icon-user-solid"></i>
        <router-link to="/login">登录</router-link>
      </el-button>
      <el-button type="text" v-else>
        <i class="el-icon-message-solid"></i>
      </el-button>
      <!-- 注册 -->
      <!-- <el-button type="text" v-if="!userToken">
        <i class="el-icon-edit"></i>
        <router-link to="/register">注册</router-link>
      </el-button> -->
      <!-- 个人中心 -->
      <el-dropdown class="el-dropdown" trigger="click" placement="bottom" v-if="userToken">
        <div class="el-dropdown-link">
          <div class="imgBox">
            <img src="@/assets/touxaing.jpeg">
          </div>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="uesrPages">
            个人中心
          </el-dropdown-item>
          <el-dropdown-item>
            <router-link to="/forgetPassword">修改密码</router-link>
          </el-dropdown-item>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import router from "@/router";
import { getToken, removeToken } from "@/utils/auth";

import { mapGetters } from 'vuex'

export default {
  name: "Header",
  data() {
    const active_Index = this.$route.path
    return {
      activeIndex: active_Index,
      input: '产品',
      select: '产品',
      userToken: ''
    };
  },
  mounted() {
    this.userToken = getToken()
  },
  computed: {
    ...mapGetters([
      'token',
      'roles',
      'avatar'
    ])

  },
  methods: {
    handleSelect() { },
    async uesrPages() {
      this.$router.push('/user')
    },
    async logout() {
      removeToken()
      this.userToken = ''
      // await this.$store.dispatch('user/logout')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)

    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  margin: auto;
  background: #fff;
  display: flex;
  display: -webkit-flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  .header_left {
    display: flex;
    display: -webkit-flex;
    .header_avatar {
      margin-top: 13px;
      box-sizing: border-box;
      margin-right: 10px;
    }
    .el-menu-demo {
      .el-menu-item {
        padding: 0 10px;
      }
    }
    .el-menu.el-menu--horizontal {
      border-bottom: none;
    }
    .el-menu--horizontal > .el-menu-item {
      height: 80px;
      line-height: 80px;
    }
  }
  .header_right {
    line-height: 80px;
    .el-dropdown {
      // background-color: red;
      .el-dropdown-link {
        cursor: pointer;
        height: 65px;
        .imgBox {
          width: 60px;
          height: 45px;
          display: inline-block;
        }
        img {
          position: absolute;
          top: 15px;
          left: 10px;
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: black;
        }
        &:hover {
          color: #e62b1e;
        }
      }
    }
    .el-button--text {
      color: #999;
      font-size: 16px;
      &:hover {
        color: #e62b1e;
      }
      i {
        margin-right: 5px;
      }
      &.header_search .el-icon-search {
        font-weight: bold;
        font-size: 18px;
        margin-right: 30px;
      }
    }
  }
}
</style>
<style lang="scss">
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 80px;
  line-height: 80px;
  padding: 0 10px;
}
.header_right {
  .el-button--text {
    &.header_searchBox {
      .el-input__inner {
        border: none;
      }
      .el-input-group__prepend {
        border: none;
        border-left: 1px solid #dcdfe6;
        width: 105px;
        background-color: #fff;
      }
    }
  }
}
</style>
