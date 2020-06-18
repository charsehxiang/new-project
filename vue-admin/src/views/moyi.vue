<template>
    <el-container class="home-container">
        <!--头部-->
        <el-header>
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
        <!-- 侧边栏以及右边内容部分 -->
        <el-container>
            <el-aside :width="isCollapse ? '60px' : '160px'"  class="el-aside">
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
                                <router-link to="/ribaobiao" type="button" class="to-color">日报表</router-link>
                            </template>
                        </el-menu-item>

                        <!--班报表 -->
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
                               <router-link to="/effectReport" type="button" class="to-color">效应报表</router-link>
                            </template>
                        </el-menu-item>

                        <!-- 统计报表 -->
                        <el-menu-item index="1.5">
                            <template slot="title">
                                <!-- 班报二级菜单图标 -->
                                <i class="el-icon-s-order"></i>
                                <!-- 二级菜单文字 -->
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
            <!--右侧内容-->
            <el-main  class="posi">
              <div class="div-box">
                    <!--div1-->
                    <div class="div1-box">
                        <div class="div1-1-box">
                            <span>电压（V）</span>
                            <br/>
                            <el-input class="div1-1-1-2-box"  size="small" v-model="volt"></el-input>
                        </div>
                        <div class="div1-2-box">
                            <span>电流（KA）</span>
                            <br/>
                            <el-input class="div1-1-1-3-box" size="small" v-model="electricRight"></el-input>
                        </div>
                        <ul class="ul-1-box">
                            <li v-for="(item,index) of moYiList" :key="index">
                                <el-button icon="el-icon-search" size="small" :style="item.show != true? item.show:'background-color:#ff0000'" circle></el-button>
                                <p>{{ item.name }}</p>
                            </li>
                        </ul>
                    </div>

                    <!--div2-->
                    <div class="div2-box">
                        <div class="div2-2-box">
                            <span>参&nbsp;&nbsp;数</span>
                            <el-input size="small" v-model="CanShu"></el-input>
                            <div class="div2-3-box">
                                <ul class="ul-7-box">
                                    <li v-for="(item,index) of right_MoyiList" :key="index">
                                      <el-button icon="el-icon-search" size="mini" circle  @click="goMoyiBtn(item.id,index)"></el-button>
                                      <p>{{ item.name }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!--div3-->
                    <div class="div3-box">
                        <div class="div3-3-box">
                            <ul class="ul-8-box">
                                <li v-for="(item,index) of Button_goDiyiBtn" :key="index">
                                    <el-button icon="el-icon-search" size="mini" circle></el-button>
                                    <p>
                                        {{ item.name }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </el-main>
        </el-container>
   </el-container>
</template>

<script>
// const date = new Date()
export default {
  name: 'moyi',
  data () {
    return {
      moYiList: [
        { name: '阳极效应' },
        { name: '电阻针震' },
        { name: '电阻摆动' },
        { name: '正常下料' },
        { name: '减量下料' },
        { name: '增量下料' },
        { name: '阳极上升' },
        { name: '阳极下降' },
        { name: '取消阳极' },
        { name: '附加电压' },
        { name: '纯手动' },
        { name: '手动' },
        { name: '正常周期' },
        { name: '等待周期' },
        { name: '母线下限' },
        { name: '母线上限' },
        { name: '人工停料' },
        { name: '人工定时' },
        { name: '抬母线' },
        { name: '出铝' },
        { name: '小卜料' },
        { name: '大下料' },
        { name: '单打完' },
        { name: '添加椒盐' },
        { name: '换阳极' },
        { name: '边部加T' },
        { name: '通信指示' },
        { name: '自诊断' },
        { name: '气缸故障' },
        { name: '机器故障' }
      ],
      right_MoyiList: [
        { name: ' 当前时间(时*分)', id: '1' },
        { name: '当前抬母线位置', id: '2' },
        { name: '当前电阻针震(m V)', id: '3' },
        { name: '当前电阻摆动(m V)', id: '4' },
        { name: '当前故障代码', id: '5' },
        { name: '当前基准下料间隔(秒)', id: '6' },
        { name: '当前氟盐加料间隔(分)', id: '7' },
        { name: '当前目标电压(v)', id: '8' },
        { name: '最近效应日期(月*日)', id: '9' },
        { name: '最近效应时间(时*分)', id: '10' },
        { name: '最近效应持续时间(秒)', id: '11' },
        { name: '最近效应峰值电压(v)', id: '12' },
        { name: '最近四日效应总数', id: '13' },
        { name: '最近槽分子比', id: '14' },
        { name: '最近槽温度', id: '15' },
        { name: '最近原铝质量', id: '16' },
        { name: '24小时加料量(Kg)', id: '17' },
        { name: '24小时平均电压(V)', id: '18' },
        { name: '4小时平均电流(KA)', id: '19' }
      ],
      Button_goDiyiBtn: [
        { name: '抬母线' },
        { name: '出铝' },
        { name: '换阳极' },
        { name: '边加工' },
        { name: '加氟盐' },
        { name: '定位器复位' },
        { name: '自诊断' },
        { name: '参数查看(向上)' },
        { name: '手动/自动' },
        { name: '出壳' },
        { name: '阳极升' },
        { name: '下料' },
        { name: '阳极降' },
        { name: '蝶阀开' },
        { name: '蝶阀关' },
        { name: '参数查看(向下)' }
      ],
      isCollapse: false,
      // 电流
      electricRight: '',
      // 电压
      volt: '',
      CanShu: ''
    }
  },
  /*
  * 声明函数
  */
  //   mounted () {
  //     var that = this
  //     this.timer = setInterval(function () {
  //       // 执行请求的方法
  //       that.fetchData()
  //     }, 2000)
  //   },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    /*
    *声明函数
    **/
    // 隐藏导航方法   先请求车间的下拉然后后面哪个的下拉才能搜索
    toggleCollp () {
      this.isCollapse = !this.isCollapse
    },
    goMoyiBtn (id) {
      // console.log(id)
      // eslint-disable-next-line eqeqeq
      if (id == 1) {
        this.CanShu = new Date().Format('yyyy-MM-dd')
      }
      // eslint-disable-next-line eqeqeq
      if (id == 2) {
        this.CanShu = 1
      }
      // console.log(this.CanShu)
    },
    // 获取数据的接口
    fetchData () {
      const url = '/regMsgBySlotId/'
      this.reqM3Service(url + 1125).then(response => {
        this.electricRight = response.data.electricRight
        this.volt = response.data.volt
        this.moYiList = [
          { name: '阳极效应', show: response.data.yjs },
          { name: '电阻针震', show: response.data.sd },
          { name: '电阻摆动', show: response.data.sd },
          { name: '正常下料', show: response.data.sd },
          { name: '减量下料', show: response.data.sd },
          { name: '增量下料', show: response.data.sd },
          { name: '阳极上升', show: response.data.yjs },
          { name: '阳极下降', show: response.data.yjj },
          { name: '取消阳极', show: response.data.sd },
          { name: '附加电压', show: response.data.sd },
          { name: '纯手动', show: response.data.csd },
          { name: '手动', show: response.data.sd },
          { name: '正常周期', show: response.data.zhengchangzhouqi },
          { name: '等待周期', show: response.data.ddzq },
          { name: '母线下限', show: response.data.mxxx },
          { name: '母线上限', show: response.data.mxsx },
          { name: '人工停料', show: response.data.rgtl },
          { name: '人工定时', show: response.data.rgds },
          { name: '抬母线', show: response.data.tmx },
          { name: '出铝', show: response.data.cl },
          { name: '小卜料', show: response.data.xl },
          { name: '大下料', show: response.data.dxl },
          { name: '单打完', show: response.data.sd },
          { name: '添加椒盐', show: response.data.sd },
          { name: '换阳极', show: response.data.sd },
          { name: '边部加T', show: response.data.sd },
          { name: '通信指示', show: response.data.sd },
          { name: '自诊断', show: response.data.zzd },
          { name: '气缸故障', show: response.data.qggz08 },
          { name: '机器故障', show: response.data.jqgz }
        ]
      })
    }
  }
}
</script>

<style scoped lang="less">
  .posi{
    position: relative;
    overflow-y: hidden;
    // button 鼠标悬浮样式
    /deep/ button:hover,button:focus{
      color: #409EFF;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  // 复制过来的样式
    .div-box {
      width: 700px;
      height: 650px;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%, -50%);
  }

  .div-box button {
      box-shadow: 2px 6px 14px #888888;
      border: 3px solid #0f0f0f;
  }
  li {
      list-style: none;
  }
  .div1-box {
      width: 450px;
      height: 500px;
      margin-top: 60px;
      float: left;
      height: 500px;
      border: 2px solid silver;
       /deep/ p{    //穿透语法 改变vue里的样式
        font-size: 16px;
        margin: 10px  0;
      }
  }

  .div2-box {
      width: 230px;
      height: 500px;
      margin-top: 60px;
      float: right;
      border: 2px solid silver;
      // 改变在父元素下 span字体样式
    span{
      font-size: 16px;
    };
    /deep/ input{
      width: 100px;
      margin-left: 65px;
    }
  }

  .div3-box {
      width: 696px;
      height: 80px;
      float: bottom;
      margin-top: 565px;
      border: 2px solid silver;
  }

  .div1-1-box {
      float: left;
      margin-left: 100px;
      span{
        font-size: 16px;
        margin-left: 27px;
      }
  }

  .div1-2-box {
      float: right;
      padding-right: 40px;
      span{
        font-size: 16px;
        margin-left: 27px;
      }
  }

  .div1-1-1-2-box {
      width: 130px;
  }

  .div1-1-1-3-box {
      width: 130px;
  }

  .ul-1-box li {
      width: 11% !important;
      height: 20% !important;
      white-space: nowrap;
      float: left;
      text-align: center;
      margin-left: 20px;
  }

  .ul-1-box li button {
      border: 2px solid black;
  }

  .div2-2-box span {
      text-align: center;
      padding-left: 100px;
  }

  .div2-2-box input {
      width: 100px;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      margin: auto;
  }

  .ul-7-box {
      padding: 0 !important;
      white-space: nowrap;
  }

  .ul-7-box li {
      text-align: left !important;
      white-space: nowrap;
      font-size: 10px;
      display: flex;
      flex-flow: row;
      align-items: center;
      padding: 1px 0;
  }

  .ul-7-box li p {
      width: 70%;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0 !important;
  }

  .ul-7-box li button {
      width: 20px;
      height: 20px;
      margin: auto;
      padding: 0 !important;
      border: 2px solid black;
  }

  .ul-8-box {
      padding: 0 !important;
      margin: 0;
  }

  .ul-8-box li {
      width: 11.5% !important;
      white-space: nowrap;
      float: left;
      font-size: 10px;
      display: flex;
      align-items: center;
      margin: 0  2px;
      padding: 4px;
  }

  .ul-8-box li button {
      display: inline-block;
      border: 1px solid black;
  }

  .ul-8-box li p {
      width: 70%;
      text-align: center;

  }

  p {
      color: #0000FF;
      font-weight: bold
  }
</style>
