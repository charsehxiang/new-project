<template>
   <el-container class="home-container">
        <!--头部-->
        <!-- <head-nav></head-nav> -->
        <el-header>
            <div class="logBox">
                <span class="welcomeLog">欢迎登陆：</span>
                <span id="user1" style="color: red">用户名</span>
                <el-button type="danger" size="mini">注销</el-button>
            </div>
            <div class="logBox2">
                <span>电压(V) : </span>
                <input type="text" value="4.33">
                 <span class="ml10">平均电压(V) : </span>
                <input type="text" v-model="DianYa">
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
            <el-main class="yanse">
                <div class="div1-box">
                    <el-select v-model="workID" placeholder="请选择车间" @visible-change="lian()">
                        <el-option
                                v-for="item in options"
                                :key="item.workshopID"
                                :label="item.workshopName"
                                :value="item.workshopID">
                        </el-option>
                    </el-select>
                    <!--工区-->
                    <el-select v-model="AreID" placeholder="请选择工区">
                        <el-option
                                v-for="item in options2"
                                :key="item.areaID"
                                :label="item.areaName"
                                :value="item.areaID">
                        </el-option>
                    </el-select>
                    <el-button type="primary" icon="el-icon-search" @click="fetchData()">搜索</el-button>
                </div>
                <ul class="box_table" v-for="(items,indexs) of list" :key="indexs">
                    <li>
                        <div>
                            <p>槽号</p>
                        </div>
                        <div>
                            <p>电压</p>
                        </div>
                        <div>
                            <p>状态</p>
                        </div>
                    </li>
                    <li v-for="(item,index) of items" :key="index">
                        <div>
                            <p>
                                {{ item.soltId }}
                            </p>
                        </div>

                        <div :style="item.netWorkDto.volt < 4? st:'color:#ff0000'">
                            <p>
                                {{ item.netWorkDto.volt }}
                            </p>
                        </div>
                        <el-tooltip placement="top" effect="light">
                            <div slot="content">
                                <el-tag v-if="item.netWorkDto.tl" size="mini">停料</el-tag>
                                <el-tag type="success" v-if="item.netWorkDto.ds===true" size="mini">定时</el-tag>
                                <el-tag type="info" v-if="item.netWorkDto.qxyy===true" size="mini">取消阳极</el-tag>
                                <el-tag type="warning" v-if="item.netWorkDto.xy===true" size="mini">效应</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zz===true" size="mini">针震</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.bd===true" size="mini">摆动</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zczq===true" size="mini">正常周期</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.ys===true" size="mini">阳升</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.yj===true" size="mini">阳降</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.fjdy===true" size="mini">附加电压</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.ddzq===true" size="mini">等待周期</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.tmx===true" size="mini">抬母线</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.cl===true" size="mini">出铝</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.xl===true" size="mini">下料</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dxl===true" size="mini">大下料</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qlzq===true" size="mini">欠量周期</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.glzq===true" size="mini">过量周期</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.csd===true" size="mini">纯手动</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.sd===true" size="mini">手动</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.rgtl===true" size="mini">人工停料</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.rgds===true" size="mini">人工定时</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dq===true" size="mini">打壳</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.fy===true" size="mini">氟盐</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.hj===true" size="mini">换极</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.bjg===true" size="mini">边加工</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.txzs===true" size="mini">通讯指示</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.jqgz===true" size="mini">机器故障</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dfzt===true" size="mini">蝶阀状态</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.fzl===true" size="mini">反粘连</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zzl===true" size="mini">正粘连</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zhuzl===true" size="mini">主粘连</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.mxxx===true" size="mini">母线下限</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.mxsx===true" size="mini">母线上限</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dyt===true" size="mini">电源跳</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dsc===true" size="mini">定时超</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.rjdq===true" size="mini">热继电器</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.jcbds===true" size="mini">检测板定时</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.jlk===true" size="mini">交流口</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.fwh===true" size="mini">反未合</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zwh===true" size="mini">正未合</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zhuwh===true" size="mini">主未合</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.csdj===true" size="mini">纯手动降</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.csds===true" size="mini">纯手动升</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.ykm===true" size="mini">右开门</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zkm===true" size="mini">左开门</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dyxx===true" size="mini">电压下限</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dysx===true" size="mini">电压上限</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dyt220===true" size="mini">220V电压跳
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dyt380===true" size="mini">380V电压跳
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dfgdw===true" size="mini">蝶阀关到位</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dfkdw===true" size="mini">蝶阀开到位</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz08===true" size="mini">8#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz07===true" size="mini">7#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz06===true" size="mini">6#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz05===true" size="mini">5#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz04===true" size="mini">4#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz03===true" size="mini">3#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz02===true" size="mini">2#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.qggz01===true" size="mini">1#气缸故障
                                </el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.yjj===true" size="mini">阳极降</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dsqfw===true" size="mini">定时器复位</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.css===true" size="mini">参数上</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.csx===true" size="mini">参数下</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.yjs===true" size="mini">阳极升</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.zzd===true" size="mini">自诊断</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dfg===true" size="mini">蝶阀关</el-tag>
                                <el-tag type="danger" v-if="item.netWorkDto.dfk===true" size="mini">蝶阀开</el-tag>

                                <!--<p>{{ item.solt }}</p>-->
                            </div>
                            <el-button size="mini" class="el-zhuangtaiBOX">
                                <el-tag type="warning" v-if="item.netWorkDto.xy===true" size="mini">效应</el-tag>....

                            </el-button>
                        </el-tooltip>
                    </li>
                </ul>
            </el-main>
        </el-container>
   </el-container>
</template>

<script>
// 导入组件
// import HeadNav from '../components/headNav/HeadNav'
export default {
  name: 'home',
  data () {
    return {
      isCollapse: false,
      rightList: [],
      gongqu: '1',
      DianYa: [],
      st: '',
      list: [],
      workID: null, // 车间
      AreID: null, // 工区
      options: [], // 车间数据
      options2: []// 工区数据
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
    isNull (str) {
      if (str === undefined || str === '' || str === null) {
        return true
      }
    },
    // 二级连动方法
    lian () {
      // 请求接口
      const url = '/workShopInfo'
      this.reqM2Service(url).then(
        res => {
          this.options = res.data.data
          console.log(res.data.data)
        }
      )
      //   this.$http.get(':9002/workShopInfo').then(res => {
      //     this.options = res.data.data
      //     console.log(res.data.data)
      //   })
      this.gong()
    },
    // 查询车间下工区的方法 传车间的id
    gong () {
      const url = '/areaInfo/'
      const params = {
        wordID: this.workID
      }
      this.reqM2Service(
        url,
        params
      ).then(
        res => {
          this.options2 = res.data.data
        }
      ).catch(err => {
        console.log(err)
      })
    //   this.$http.get(':9002/areaInfo/', {
    //     params: {
    //       wordID: this.workID
    //     }
    //   }).then(res => {
    //     // console.log( rse )
    //     this.options2 = res.data.data
    //   }).catch(err => {
    //     console.log(err)
    //   })
    },
    fetchData () {
      const url = '/findSocketMsg/'
      const params = {
        chejian: this.workID,
        gongqu: this.AreID
      }
      this.reqM3Service(
        url,
        params
      ).then(response => {
        console.log(response)
        const cao = []
        let zdy = 0
        const pageSize = 10
        const rets = []
        for (var i = 0; i < response.data.length; i++) {
          if (this.isNull(response.data[i].netWorkDto)) {
            response.data[i].netWorkDto = { volt: '连接超时' }
          }
          // 求平均电压
          // 拿到槽
          // eslint-disable-next-line eqeqeq
          if (response.data[i].netWorkDto != null && response.data[i].netWorkDto.volt != '连接超时') {
            cao.push(response.data.soltId)
          }
          // 电压
          // eslint-disable-next-line eqeqeq
          if (response.data[i].netWorkDto.volt != '连接超时' && response.data[i].netWorkDto.volt != 0) {
            zdy += response.data[i].netWorkDto.volt
          }
        }
        this.rightList = response.data
        // 平均电压
        this.DianYa = zdy / cao.length
        for (var j = 0; j < response.data.length; j += pageSize) {
          rets.push(this.rightList.slice(j, j + pageSize))
        }
        this.list = rets
      }).catch(err => {
        console.log(err)
      })
    }
  },
  components: {
    // HeadNav
  }
}
</script>

<style lang="less" scoped>
    // 表格复制过来的样式
    .box_table {
        width: 50%;
        /*magin:top;*/
        /*float:left;*/
        margin-top: 40px;
    }
    .box_table li {
        width: 100%;
        line-height: 60px;
        display: flex;
        flex-direction: row;
    }

    .box_table li div {
        width: 50%;
        margin: auto;
        text-align: center;
    }

    .zhuang-box {
        width: 100px;
        height: 80px;
    }
    .div1-box{
        position:absolute;
    }
    .el-zhuangtaiBOX{

        height: 40px;
    }
    .to-color{
        color: white;
    }
</style>
