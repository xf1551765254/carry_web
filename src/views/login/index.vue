<template>
  <div class="login_container">

    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <!-- // <img src="../assets/logo.png" alt=""> -->
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form" autocomplete="on">
        <!-- 用户名 -->
        <el-tabs v-model="activeName" @tab-click="handleClickTab">
          <el-tab-pane label="账号登录" name="first">
            <el-form-item :prop="activeName==='first'?'username':''">
              <el-input autocomplete="on" prefix-icon="el-icon-user-solid" tabindex="1" v-model="loginForm.username" placeholder="请输入账户/手机/邮箱" size=""></el-input>
            </el-form-item>
            <!-- 密码 -->
            <el-form-item :prop="activeName==='first'?'password':''">
              <el-input ref="password" v-model="loginForm.password" prefix-icon="el-icon-lock" autocomplete="on" tabindex="2" :type="passwordType" placeholder="请输入登录密码" @keyup.enter.native="login">
                <span class="show-pwd" slot="suffix" @click="showPassword">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-input>

            </el-form-item>
          </el-tab-pane>
          <el-tab-pane label="短信登录" name="second">
            <div v-if="activeName==='second'">
              <el-form-item :prop="activeName==='second'?'phone':''">
                <el-input v-model="loginForm.phone" prefix-icon="iconfont icon-user" placeholder="请输入手机号">
                  <svg-icon icon-class="phone" slot="prefix" />
                </el-input>
              </el-form-item>
            </div>
            <!-- 密码 -->
            <div v-if="activeName==='second'">
              <el-form-item :prop="activeName==='second'?'message':''">
                <el-input v-model="loginForm.message" placeholder="请输入短信验证码">
                  <svg-icon icon-class="sendMessage" slot="prefix" />
                  <el-button type="text" slot="suffix" @click="sendIdentifyCode">
                    发送验证码
                  </el-button>
                </el-input>
              </el-form-item>
            </div>

          </el-tab-pane>
        </el-tabs>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" :loading="loading" @click="login">登录</el-button>
        </el-form-item>
        <div class="login_form_footer">
          <div class="login_form_footerLetf">
            <!-- <el-checkbox v-model="checked">记住登录状态</el-checkbox> -->
          </div>
          <div class="login_form_footerLetf">
            <el-button type="text">
              <router-link to="/register">注册新用户</router-link>
            </el-button>
            <el-button type="text">
              <router-link to="/forgetPassword">忘记密码?</router-link>
            </el-button>
          </div>
        </div>
      </el-form>
    </div>
    <div class="copyright">
      Copyright ©
      <a href="http://www.axureux.com/home/default.html" target="_blank"><span>新兴铸管</span></a>
      <span>, All Rights Reserved.</span>
    </div>
  </div>
</template>

<script>

import {
  setToken
} from '@/utils/auth'

export default {
  data() {
    return {
      activeName: 'first',
      passwordType: 'password',
      loading: false,
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: '',
        password: ''
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录号', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: "请输入正确的手机号", trigger: "blur" }
        ],
        message: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^\d{4,6}$/, message: "请输入正确的验证码", trigger: "blur" }
        ],
      }
    }
  },
  methods: {
    showPassword() {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    sendIdentifyCode() {
      this.$refs.loginFormRef.validateField('phone', erro => {
        if (!erro) {
          console.log(this.loginForm.phone)
        }
      })


    },
    handleClickTab(tab, event) {
      console.log(tab, event)
      this.activeName = tab.name
      console.log(this.activeName)
    },
    // 点击重置按钮，重置登录表单
    resetLoginForm() {
      // console.log(this);
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        //this.loading = true
        console.log(valid)
        // const { data: res } = await this.$http.post('login', this.loginForm)
        // if (res.meta.status !== 200) return this.$message.error('登录失败！')
        let userId = new Date().getTime()
        this.$store.commit('user/SET_USERID', userId)
        setToken(userId)
        localStorage.setItem('userId', userId)
        const accessRoutes = await this.$store.dispatch('permission/generateRoutes', ['admin'])
        this.$router.addRoutes(accessRoutes)

        this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.copyright {
  position: absolute;
  bottom: 10px;
  text-align: center;
  width: 100%;
  color: #ccc;
  opacity: 0.5;
  font-size: 14px;
}
.login_box {
  width: 450px;
  height: 360px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  .login_form_footer {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .svg-icon {
    font-size: 17px;
    margin-top: 10px;
    margin-left: 5px;
    font-weight: bolder;
  }
}

.btns {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  .el-button--medium {
    width: 370px;
  }
}
</style>
<style lang="scss">
.login_box {
  .el-tabs__header {
    .el-tabs__item {
      width: 185px;
      text-align: center;
    }
    .el-tabs__active-bar {
      width: 185px;
    }
  }
}
</style>
<style lang="css">
</style>
