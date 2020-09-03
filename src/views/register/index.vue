<template>
  <div class="register_container">

    <div class="register_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <!-- // <img src="../assets/logo.png" alt=""> -->
      </div>
      <!-- 注册表单区域 -->
      <el-form ref="registerFormRef" :model="registerForm" :rules="registerFormRules" label-width="0px" class="register_form">
        <el-tabs v-model="activeName" @tab-click="handleClickTab">
          <!-- 个人 -->
          <el-tab-pane label="个人" name="first">
            <div v-if="activeName==='first'">
              <el-form-item prop="username">
                <el-input prefix-icon="el-icon-user-solid" v-model="registerForm.username" placeholder="请输入用户名称" size=""></el-input>
              </el-form-item>
              <el-form-item prop="identifyCard">
                <el-input v-model="registerForm.identifyCard" placeholder="请输入身份证号">
                  <svg-icon icon-class="identityCard" slot="prefix" />
                </el-input>
              </el-form-item>
              <el-form-item prop="phone">
                <el-input v-model="registerForm.phone" placeholder="请输入手机号">
                  <svg-icon icon-class="phone" slot="prefix" />
                </el-input>
              </el-form-item>
              <el-form-item prop="message">
                <el-input v-model="registerForm.message" placeholder="请输入短信验证码">
                  <svg-icon icon-class="sendMessage" slot="prefix" />
                  <el-button type="text" slot="suffix" @click="sendIdentifyCode">
                    发送验证码
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registerForm.password" autocomplete="off" prefix-icon="el-icon-lock" type="password" placeholder="设置6至20位登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" autocomplete="off" prefix-icon="el-icon-lock" type="password" placeholder="请再次输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="verifyCode" class="vetifiCode">
                <el-row :span="24">
                  <el-col :span="16">
                    <el-input v-model="registerForm.verifyCode " prefix-icon="el-icon-lock" placeholder="请输入验证码"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <div class="login-code" @click="refreshCode">
                      <!--验证码组件-->
                      <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                  </el-col>
                </el-row>
              </el-form-item>
            </div>
          </el-tab-pane>
          <!-- 企业/设计院 -->
          <el-tab-pane label="企业/设计院" name="second">
            <div v-if="activeName==='second'">
              <el-form-item prop="businessName">
                <el-input v-model="registerForm.businessName" prefix-icon="el-icon-user-solid" placeholder="请输入公司名称">
                </el-input>
              </el-form-item>
              <el-form-item prop="username">
                <el-input prefix-icon="el-icon-user-solid" v-model="registerForm.username" placeholder="请输入联系人名称" size=""></el-input>
              </el-form-item>
              <el-form-item prop="phone">
                <el-input v-model="registerForm.phone" placeholder="请输入联系人电话">
                  <svg-icon icon-class="phone" slot="prefix" />
                </el-input>
              </el-form-item>
              <el-form-item prop="message">
                <el-input v-model="registerForm.message" placeholder="请输入短信验证码">
                  <svg-icon icon-class="sendMessage" slot="prefix" />
                  <el-button type="text" slot="suffix" @click="sendIdentifyCode">
                    发送验证码
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registerForm.password" autocomplete="off" prefix-icon="el-icon-lock" type="password" placeholder="设置6至20位登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" autocomplete="off" prefix-icon="el-icon-lock" type="password" placeholder="请再次输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="verifyCode" class="vetifiCode">
                <el-row :span="24">
                  <el-col :span="16">
                    <el-input v-model="registerForm.verifyCode " prefix-icon="el-icon-lock" placeholder="请输入验证码"></el-input>
                  </el-col>
                  <el-col :span="8">
                    <div class="login-code" @click="refreshCode">
                      <!--验证码组件-->
                      <s-identify :identifyCode="identifyCode"></s-identify>
                    </div>
                  </el-col>
                </el-row>
              </el-form-item>
            </div>
          </el-tab-pane>
          <!-- 供应商 -->
          <el-tab-pane label="供应商" name="third">
            <div v-if="activeName==='third'">
              <el-form-item prop="businessName">
                <el-input v-model="registerForm.businessName" prefix-icon="el-icon-user-solid" placeholder="请输入公司名称">
                </el-input>
              </el-form-item>
              <el-form-item prop="componyTxt">
                <el-input v-model="registerForm.componyTxt" prefix-icon="el-icon-user-solid" placeholder="请输入公司税号">
                </el-input>
              </el-form-item>
              <el-form-item label="营业执照" label-width="80px" prop="componyTxt">

              </el-form-item>
              <el-form-item prop="productClass">
                <el-select v-model="registerForm.productClass" placeholder="请选择产品类型" style="width:100%">
                  <el-option v-for="item in productClassArr" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="phone">
                <el-input v-model="registerForm.phone" placeholder="请输入手机号">
                  <svg-icon icon-class="phone" slot="prefix" />
                </el-input>
              </el-form-item>
              <el-form-item prop="message">
                <el-input v-model="registerForm.message" placeholder="请输入短信验证码">
                  <svg-icon icon-class="sendMessage" slot="prefix" />
                  <el-button type="text" slot="suffix" @click="sendIdentifyCode">
                    发送验证码
                  </el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model="registerForm.password" autocomplete="off" prefix-icon="el-icon-lock" type="password" placeholder="设置6至20位登录密码"></el-input>
              </el-form-item>
              <el-form-item prop="confirmPassword">
                <el-input v-model="registerForm.confirmPassword" autocomplete="off" prefix-icon="el-icon-lock" type="password" placeholder="请再次输入密码"></el-input>
              </el-form-item>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- 按钮区域 -->
        <div class="register_form_agree">
          <el-checkbox v-model="checked"> </el-checkbox>
          勾选同意《
          <a href="http://127.0.0.1:32767/18.04.02/%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE.html"><span>用户服务协议</span></a>
          》
        </div>
        <el-form-item class="btns">
          <el-button type="primary" @click="register">注册</el-button>
        </el-form-item>
        <div class="register_form_footer">
          <el-button type="text">
            <router-link to="/login">已有账号,立即登录</router-link>
          </el-button>
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
import { isLoginName } from '@/utils/validate'
import SIdentify from './identifyCode'
export default {
  name: 'register',
  components: { SIdentify },
  data() {
    const validatePasswoed = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      } else if (this.identifyCode !== value) {
        // this.loginForm.code = ''
        // this.refreshCode()
        callback(new Error('请输入正确的验证码'))
      } else {
        callback()
      }
    }
    return {
      activeName: 'first',//tab
      checked: false,// 协议
      identifyCode: '',
      identifyCodes: '1234567890',
      productClassArr: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '塑料'
      }, {
        value: '选项3',
        label: '水管'
      }, {
        value: '选项4',
        label: '钢材'
      }, {
        value: '选项5',
        label: '湾管'
      }],
      // 这是登录表单的数据绑定对象
      registerForm: {
        username: '',
        password: '',
        identifyCard: '',
        phone: '',
        message: '',
        password: '',
        confirmPassword: '',
        verifyCode: '',
        businessName: '',
        productClass: '',
        componyTxt: ''
      },
      // 这是表单的验证规则对象
      registerFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 
        identifyCard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' },
          { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: "请输入正确的身份证号", trigger: "blur" }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^((13[0-9])|(14[5|7])|(15([0-3]|[0-9]))|(18[0,5-9]))[0-9]{8}$/, message: "请输入正确的手机号", trigger: "blur" }
        ],
        message: [
          { required: true, message: '请输入短信验证码', trigger: 'blur' },
          { pattern: /^\d{4,6}$/, message: "请输入正确的验证码", trigger: "blur" }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: "请输入6-20位字母和数字组成的密码", trigger: "blur" }

        ],
        confirmPassword: [
          { validator: validatePasswoed, trigger: 'blur' }
        ],
        verifyCode: [
          { validator: validateCode, trigger: 'blur' }
        ],
        businessName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        componyTxt: [
          { required: true, message: '请输入公司税号', trigger: 'blur' },
          { pattern: /^\d{4,8}$/, message: "请输入正确的税号", trigger: "blur" }
        ],
      }
    }
  },
  created() {
    this.refreshCode()
  },
  mounted() {
  },
  methods: {
    // 发送短信验证码
    sendIdentifyCode() {
      this.$refs.registerFormRef.validateField('phone', erro => {
        if (!erro) {
          console.log(this.registerForm.phone)
        }
      })


    },

    // 刷新验证码
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },

    // tab切换
    handleClickTab(tab, event) {
      console.log(tab, event)
      this.activeName = tab.name
      console.log(this.activeName)
      this.$refs.registerFormRef.resetFields()
    },

    // 点击重置按钮，重置登录表单
    resetregisterForm() {
      // console.log(this);
      this.$refs.registerFormRef.resetFields()
    },
    // 注册
    register() {
      let self = this
      // 获取验证码
      // var verifyCode = self.registerForm.verifyCode
      // var verifyFlag = this.verifyCode.validate(verifyCode)
      // console.log('1', verifyCode, verifyFlag)
      // if (!verifyFlag) {
      //   self.$notify.error({
      //     title: '系统提示',
      //     message: '验证码输入错误'
      //   })
      //   return;
      // } else {
      //   self.$notify({
      //     title: '系统提示',
      //     message: '验证码输入正确',
      //     type: 'success'
      //   })
      // }
      this.$refs.registerFormRef.validate(async valid => {
        if (!valid) return
        console.log(valid, self.registerForm)

        // const { data: res } = await this.$http.post('register', this.registerForm)
        // if (res.meta.status !== 200) return this.$message.error('登录失败！')

        //this.$router.push('/home')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.register_container {
  background-color: #2b4b6b;
  height: 110%;
  position: relative;
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
.register_box {
  width: 450px;
  height: auto;
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

.register_form {
  margin-top: 80px;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  .el-form-item {
    margin-bottom: 20px;
  }
  .login-code {
    cursor: pointer;
    .login-code-img {
      width: 100px;
      height: 38px;
      background-color: #eee;
      border: 1px solid #f0f0f0;
      color: #333;
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
      text-indent: 2px;
      text-align: center;
    }
  }
  .register_form_agree {
    text-align: left;
    font-size: 14px;
    margin-bottom: 5px;
    color: #c0c4cc;
    a span {
      &:hover {
        color: #1296db;
      }
    }
  }
  .register_form_footer {
    text-align: center;
    margin-bottom: 5px;
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
.register_box {
  .el-tabs__header {
    .el-tabs__item {
      width: 123.3px;
      text-align: center;
    }
    .el-tabs__active-bar {
      width: 123.3px;
    }
  }
}
</style>
<style lang="css">
</style>
