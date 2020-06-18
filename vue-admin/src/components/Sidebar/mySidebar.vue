<template>
    <el-aside :width="isCollapse ? '60px' : '160px'"  class="el-aside"  id='mySidebar'>
        <!--缩收按钮-->
        <div class="toggle-butto" @click="toggleCollp">||||</div>
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#ffd04b" :unique-opened="true"
                    :collapse="isCollapse">

            <!-- 报表一级菜单 -->
            <el-submenu index="4">
                <!-- 一级菜单模版内容区 -->
                <template slot="title">
                    <!-- 一级菜单图标 -->
                    <i class="el-icon-s-grid"></i>
                    <!-- 一级菜单文字 -->
                    <span>主界面</span>
                </template>

                <!-- 日报二级菜单 -->
                <el-menu-item index="4.1">
                    <template slot="title">
                        <!-- 二级菜单图标 -->
                        <i class="el-icon-s-grid"></i>
                        <!-- 二级菜单文字 -->
                        <!-- <span @click="backhome()">主界面</span> -->
                        <router-link to="/home" type="button" class="to-color">主界面</router-link>
                    </template>
                </el-menu-item>
            </el-submenu>

            <!--模拟面板-->
            <!-- 报表一级菜单 -->
            <el-submenu index="5">
                <!-- 一级菜单模版内容区 -->
                <template slot="title">
                    <!-- 一级菜单图标 -->
                    <i class="el-icon-s-platform"></i>
                    <!-- 一级菜单文字 onclick=window.open('MoYi.html')-->
                    <span >模拟面板</span>
                </template>
                <!-- 模拟二级菜单 -->
                <el-menu-item index="5.1">
                    <template slot="title">
                        <!-- 二级菜单图标 -->
                        <i class="el-icon-s-platform"></i>
                        <!-- 二级菜单文字 -->
                        <!-- <span class="opMoyi">模拟面板</span> -->
                        <router-link to="/moyi" type="button" class="to-color">模拟面板</router-link>
                    </template>
                </el-menu-item>
            </el-submenu>
            <!-- 报表一级菜单 -->
            <el-submenu index="1">
                <!-- 一级菜单模版内容区 -->
                <template slot="title">
                    <!-- 一级菜单图标 -->
                    <i class="el-icon-s-order"></i>
                    <!-- 一级菜单文字 -->
                    <span>报表数据</span>
                </template>

                <!-- 日报二级菜单 -->
                <el-menu-item index="1.2">
                    <template slot="title">
                        <!-- 二级菜单图标 -->
                        <i class="el-icon-s-order"></i>
                        <!-- 二级菜单文字 onclick=window.location=("daily.html")-->
                        <!-- <span class="riBB">日报表</span> -->
                        <router-link to="/ribaobiao" type="button" class="to-color">日报表</router-link>
                    </template>
                </el-menu-item>

                <!--报表 -->
                <el-menu-item index="1.3">
                    <template slot="title">
                        <!-- 班报二级菜单图标 -->
                        <i class="el-icon-s-order"></i>
                        <!-- 二级菜单文字 onclick=window.location="shiftData.html"-->
                        <router-link to="/banbao" type="button" class="to-color">班报</router-link>
                    </template>
                </el-menu-item>

                <!-- 效应报表 -->
                <el-menu-item index="1.4">
                    <template slot="title">
                        <i class="el-icon-s-order"></i>
                        <!-- <span >效应报表</span> -->
                        <router-link to="/effectReport" type="button" class="to-color">效应报表</router-link>
                    </template>
                </el-menu-item>

                <!-- 统计报表 -->
                <el-menu-item index="1.5">
                    <template slot="title">
                        <!-- 班报二级菜单图标 -->
                        <i class="el-icon-s-order"></i>
                        <!-- 二级菜单文字 -->
                        <!-- <span>统计报表</span> -->
                        <router-link to="/statisticalReport" type="button" class="to-color">统计报表</router-link>
                    </template>
                </el-menu-item>
            </el-submenu>

            <!-- 曲线一级列表 -->
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-s-marketing"></i>
                    <span>曲线报表</span>
                </template>
                <!-- 二级 -->
                <el-menu-item index="2.1">
                    <template slot="title">
                        <i class="el-icon-s-marketing"></i>
                        <router-link to="/historyCurve" type="button" class="to-color">历史曲线</router-link>
                    </template>
                </el-menu-item>
            </el-submenu>

            <!-- 用户管理 -->
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-s-custom"></i>
                    <span>用户管理</span>
                </template>
                <!-- 二级 -->
                <el-menu-item index="3.2">
                    <template slot="title">
                        <i class="el-icon-user"></i>
                        <span>用户列表</span>
                    </template>
                </el-menu-item>

                <el-menu-item index="3.3">
                    <template slot="title">
                        <i class="el-icon-user-solid"></i>
                        <span>用户权限</span>
                    </template>
                </el-menu-item>
            </el-submenu>
                <!-- 系统设置 -->
                <el-submenu index="6">
                <template slot="title">
                    <i class="el-icon-s-tools"></i>
                    <span>系统设置</span>
                </template>
                <!-- 二级 -->
                <el-menu-item index="6.1">
                    <template slot="title">
                        <i class="el-icon-edit"></i>
                        <router-link to="/systemParameter" type="button" class="to-color">修改参数</router-link>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
  name: 'sidebar',
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    toggleCollp () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
</style>
