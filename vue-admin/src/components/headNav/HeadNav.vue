<template>
   <!--头部-->
    <el-header  id="headNav">
        <div class="logBox">
            <span class="welcomeLog">欢迎登陆：</span>
            <span id="user1" style="color: red">用户名</span>
            <el-button type="danger" size="mini">注销</el-button>
        </div>
        <div class="logBox2">
            <!-- <span>电压(V) : </span>
            <input type="text" value="4.33">
                <span class="ml10">平均电压(V) : </span>
            <input type="text" v-model="DianYa"> -->
        </div>
    </el-header>
</template>
<script>
export default {
  name: 'headNav',
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>

</style>
