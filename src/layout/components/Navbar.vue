<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template>
        <search class="right-menu-item" />
        <screenfull id="screenfull" class="right-menu-item hover-effect" />
        <el-popover placement="bottom" width="400" class="right-menu-item hover-effect" trigger="click">
          <div class="avue-notice">
            <div class="msgs-title-content">
              <div class="msgs-title">消息</div>
              <div class="msgs-title-icon">
                <el-switch v-model="msgsRefresh" @change="msgsRefreshChange" title="是否自动刷新消息" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
              </div>
            </div>
            <div v-for="item in tableData.records" :key="item.id" class="avue-notice__item">
              <div class="avue-notice__content">
                <a href="javascript:;" @click="view(item)">
                  <div class="avue-notice__title">
                    <div class="avue-notice__name">{{ item.title }}</div>
                    <span class="avue-notice__tag">
                      <el-tag size="small" effect="plain" :type="item.msgsCenterType ? item.msgsCenterType['code'] : '' | msgsTypeFilter">{{ item.msgsCenterType ? item.msgsCenterType['desc'] : '' }}
                      </el-tag>
                    </span>
                  </div>
                  <div class="avue-notice__subtitle">{{ item.createTime }}</div>
                </a>
              </div>
            </div>
            <div class="avue-notice__more">
              <!-- <router-link to="/user/information">点击查看更多<i class="el-icon-more" /></router-link> -->
            </div>
          </div>
          <el-badge :value="tableData.total" :max="99" :hidden="tableData.total <= 0" class="badge-item" slot="reference">
            <i class="el-icon-bell" />
          </el-badge>
        </el-popover>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <i class="el-icon-caret-bottom" />
          <span class="user-name">{{ name||"系统用户" }}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/home">
            <el-dropdown-item>回到首页</el-dropdown-item>
          </router-link>
          <!-- <right-panel> -->
          <el-dropdown-item divided @click.native="settingFn">
            <span style="display:block;">系统设置</span>
          </el-dropdown-item>
          <!-- </right-panel> -->

          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger'
import Breadcrumb from '@/components/Breadcrumb'
import Search from '@/components/UserHearderSearch'
import Screenfull from '@/components/Screenfull'

import RightPanel from '@/components/RightPanel'

import { removeToken } from "@/utils/auth";
import { mapGetters } from 'vuex'
import { addClass, removeClass } from "@/utils";

import db from "@/utils/localstorage";
export default {
  components: {
    Hamburger,
    Breadcrumb,
    Search,
    Screenfull,
    RightPanel
  },
  filters: {
    userAvatarFilter(name) {
      return name.charAt(0);
    },
    msgsTypeFilter(status) {
      const map = {
        WAIT: "",
        NOTIFY: "success",
        PUBLICITY: "info",
        WARN: "danger"
      };
      return map[status] || "";
    },
  },

  mounted() {
    this.loadMyMsgs();
    if (this.msgsRefresh) {
      this.msgsRefreshChange(true);
    }
  },

  data() {
    return {
      tableData: {
        total: 0,
        records: []
      },
      msgsRefresh: db.get('MSGS_REFRESH', false), // 消息是否自动刷新
      msgsRefreshTimer: null,
      show: false
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      // 'avatar'
    ]),

    name() {
      // return this.$store.state.account.user.name;
      // console.log(this.$store.state)
      return this.$store.state.user.name;

    },
    avatar() {
      const avatar = this.$store.state.user.avatar;
      if (!avatar) {
        return require(`@/assets/touxaing.jpeg`);
      } else {
        if (avatar.startsWith("http://") || avatar.startsWith("https://")) {
          return user["avatar"];
        } else {
          return require(`@/assets/${user.avatar}`);
        }
      }
    },
    // userId() {
    //   return this.$store.state.account.user.id;
    // },
    // device() {
    //   return this.$store.state.setting.device;
    // }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      removeToken()
      //this.userToken = ''
      // await this.$store.dispatch('user/logout')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
      this.$router.push('/home')

    },

    loadMyMsgs() {
      const params = {
        model: {}
      };
      params.size = 10;
      params.current = 1;
      params.model.isRead = false;
      // msgsApi.page(params, { isAlert: false }).then(response => {
      //   const res = response.data;
      //   if (res.isSuccess) {
      //     this.tableData = res.data;
      //   }
      // });
    },
    msgsRefreshChange(val) {
      db.save('MSGS_REFRESH', val);
      if (val) {
        this.msgsRefreshTimer = setInterval(() => {
          this.loadMyMsgs();
        }, 15000)
      } else {
        clearInterval(this.msgsRefreshTimer);
        console.log("定时拉取消息停止了！")
        this.msgsRefreshTimer = null;
      }
    },
    mark(ids, callback) {
      // msgsApi.mark({msgCenterIds: ids}).then(response => {
      //   const res = response.data;
      //   if (typeof callback === "function") {
      //     callback(ids);
      //   }
      // });
    },
    view(row) {
      this.mark([row.id], ids => {
        this.loadMyMsgs();
        this.$router.push({
          path: "/msgs/sendMsgs",
          query: {
            id: row.id,
            type: "view"
          }
        });
      });
    },

    settingFn() {
      this.$store.commit("settings/openSettingBar", true);
    },
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  //box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: middle;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .user-name {
          font-size: 14px;
          color: #999;
          vertical-align: top;
          display: inline-block;
          margin-top: -5px;
          margin-left: 5px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
.msgs-title-content {
  color: #303133;
  font-size: 20px;
  line-height: 1;
  margin: 12px 0px 5px 0px;
  overflow: hidden;
  .msgs-title {
    margin-left: 20px;
    float: left;
  }
  .msgs-title-icon {
    float: right;
    margin-right: 28px;
  }
}
.avue-notice__item {
  padding: 12px 24px;
  border-bottom: 1px solid #e8eaec;
  cursor: pointer;
  -webkit-transition: background-color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  text-align: left;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.avue-notice__content {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
.avue-notice__title {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #515a6e;
  margin-bottom: 4px;
  overflow: hidden;
}
.avue-notice__tag {
  float: right;
  margin-top: 2px;
}
.avue-notice__name {
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 280px;
  float: left;
}
.avue-notice__subtitle {
  font-size: 12px;
  color: #808695;
}
.avue-notice__more {
  text-align: center;
  padding: 20px 0 10px;
}
</style>
