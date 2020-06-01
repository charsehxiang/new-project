<template>
    <div id="login">这是登录页
        <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
    </div>
</template>

<script>
export default {
  name: 'login'
}
</script>
<style lang="less" scoped>
    #login{
        height: 100vh;
        width: 100%;
        background-image: url(../.././assets/img/logingBg.jpg) ;
        background-repeat: no-repeat;
        background-size:cover;   //背景图片铺满全屏
    }
</style>
