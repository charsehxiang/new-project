<template>
    <div id="login">
        <div class="loginMain">
            <h1 id="zizi">力得尔后台管理系统</h1>
            <div class="loginCon">
                <el-form :model="ruleForm" status-icon  :rules="rules" ref="ruleForm"  class="demo-ruleForm ">
                    <el-form-item  prop="usrName" class="layout1" >
                        <p class="userIcon"></p>
                        <el-input  type="usrName"  v-model="ruleForm.usrName"  autocomplete="on"  placeholder="管理员账号" class="pois1"></el-input>
                    </el-form-item>
                    <el-form-item  prop="password"  class="layout2  clearfix">
                        <p class="pwdIcon fl"></p>
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" placeholder="密码" ></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div class="loginBtn" >
                <input type="button" @click="submitForm()"  class="el-button el-button--primary" value="登录">
            </div>
        </div>
    </div>
</template>

<script>
// 这里引入组件
// import xxx from 'xxx'
export default {
  name: 'login',
  data () {
    return {
      // 输入框绑定
      ruleForm: {
        usrName: '',
        password: ''
      },
      rules: {
        usrName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 2, max: 20, message: '长度在 4 到 20个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      const url = '/usrInfo/login'
      const params = {
        usrName: this.ruleForm.usrName,
        password: this.ruleForm.password,
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwic3ViIjoiZGRzICAgICAgICIsImlhdCI6MTU5MjM1Njc2Mywicm9sZXMiOiIxMDAiLCJleHAiOjE1OTIzNjAzNjN9.qgr9JDZh3qZAlQ1I95l5cfBQKztVtGqj2zoCDCm11gw'
      }
      console.log(this.ruleForm.usrName)
      this.$refs.ruleForm.validate(async valid => {
        if (valid === false) {
          //  校验失败
          this.$message.error('请输入正确的账号密码')
        } else {
          // 校验成功,去做登录
          // 发送axios请求完成登录
          // const { data: res } = await this.$http.post(
          //   '/usrInfo/login',
          //   this.ruleForm
          // )
          //
          this.reqM1Service(
            url,
            params
          ).then(
            res => {
              console.log(params)
              if (res.code !== 20000) {
                // console.log(res)
                this.$message.error(res.message)
              } else {
                // 登录成功
                console.log(res)
                sessionStorage.setItem('token', res.data.token)
                this.$message.success(res.message)
                // 导航至/home
                this.$router.push('/home')
              }
            }
          )
          // if (res.code !== 20000) {
          //   // console.log(res)
          //   this.$message.error(res.message)
          // } else {
          //   // 登录成功
          //   console.log(res)
          //   sessionStorage.setItem('token', res.data.token)
          //   this.$message.success(res.message)
          //   // 导航至/home
          //   this.$router.push('/home')
          // }
        }
      })
    }
  },
  // 创建完成时
  created () {},
  // 挂载完成后自动执行
  mounted () {
  }
}
</script>

<style lang="less" scoped>
    #login{
        height: 100vh;
        width: 100%;
        position: relative;
        background-image: url(../.././assets/img/logingBg.jpg) ;
        background-repeat: no-repeat;
        background-size:cover;   //背景图片铺满全屏

        #zizi{
            font-family: 方正正中黑简体;
            color: white;
            text-align: center;
            font-size: 1.2em;
            margin-bottom: 20px;
        };
    }
    .loginMain {
        position: absolute;
        width: 760px;
        left: 50%;
        top: 60%;
        min-height: 310px;
        margin: -250px 0 0 -380px;
    }
    .loginCon {
        background: url(../.././assets/img/loginbox.png);
        background-repeat: no-repeat;
        height:120px;
        padding: 40px 40px 0;
        display: flex;
        justify-content: space-around;
        justify-items: center;

        .el-form{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            justify-items: center;

            .el-input{
                width:63%;
                margin-top: 10px;
            }
        }
    }
    .layout1{
        position: relative;
        width: 350px;
        .pois1{
            position: absolute;
        }
    }
    .layout2{
        width: 350px;
    }
    .userIcon, .pwdIcon {
        display: inline-block;
        width: 45px;
        height: 48px;
        vertical-align: middle;
        border-right: 1px solid #8ae1d2;
        margin-top: 10px;
    }
    .userIcon {
        background: url(../.././assets/img/user.png) no-repeat 50% 50% #fff;
    }
    .pwdIcon {
        background: url(../.././assets/img/pwd.png) no-repeat 50% 50% #fff;
    }
    .el-input {
        position: relative;
        font-size: 14px;
        display: inline-block;
        width: 80%;
        margin-left: 0.2rem;
    }
    // 修改.el-input__inner下的input样式
    .layout1,.layout2 {
        /deep/ .el-input__inner{
            height: 48px ;
            line-height: 48px ;
            margin-left: 10px;
        }
    }
    .loginBtn {
        margin-top: 40px;
        text-align: center;
    }
    .loginMain .el-button {
        background: none;
        height: 35px;
        line-height: 16px;
        font-size: 16px;
        padding: 0;
        vertical-align: middle;
        width: 100px;
    }
    .el-button--primary {
        border-color: #fff;
        color: white;
    }
</style>
