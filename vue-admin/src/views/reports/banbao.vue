<!--eslint-disable vue/valid-template-root-->
<template>
    <div>
      <head-nav></head-nav>
      <el-container>
        <!-- 侧边导航栏 -->
        <my-sidebar></my-sidebar>
        <!-- 右侧内容 -->
        <el-main class="yanse">
            <!--以日为单位-->
            <el-date-picker
                    v-model="dateRange"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期">
            </el-date-picker>

            <!--车间-->
            <el-select id="chejianjian" v-model="workID" placeholder="请选择车间" @visible-change="lian()" >
                <el-option
                        v-for="item in options"
                        :key="item.workshopID"
                        :label="item.workshopName"
                        :value="item.workshopID">
                </el-option>
            </el-select>

            <!--工区-->
            <el-select id="gongququ" v-model="AreID" placeholder="请选择工区">
                <el-option
                        v-for="item in options2"
                        :key="item.areaID"
                        :label="item.areaName"
                        :value="item.areaID">
                </el-option>
            </el-select>

            <!--请选择班次-->
            <el-select id="bancici" v-model="BanCi" placeholder="班次" @visible-change="ban()">
                <el-option
                        v-for="item in options3"
                        :key="item.shiftID"
                        :label="item.shiftName"
                        :value="item.shiftID">
                </el-option>
            </el-select>

            <!--请选择槽号-->
            <el-select v-model="slotid" placeholder="选择槽号无需选择车间工区" @visible-change="cao()">
                <el-option
                        v-for="item in options4"
                        :key="item.slotID"
                        :label="item.slotID"
                        :value="item.slotID">
                </el-option>
            </el-select>

            <el-button type="primary" icon="el-icon-search" @click="fetchData()">搜索</el-button>
            <!--</form>-->
            <!--表格-->
            <el-table
                    :data="tableData"
                    width="100%"
                    border
                    height="600">
                <el-table-column
                        prop="shiftID"
                        label="班报号">
                </el-table-column>

                <el-table-column
                        prop="slotID"
                        label="槽号">
                </el-table-column>
                <el-table-column
                        prop="recordID"
                        label="记录号">
                </el-table-column>
                <el-table-column
                        prop="recordDate"
                        label="记录日期"
                        width="200">
                </el-table-column>
                <el-table-column
                        prop="recordDate"
                        label="记录日期"
                        width="200">
                </el-table-column>

                <el-table-column
                        prop="shopworkID"
                        label="车间号"
                        width="150">
                </el-table-column>

                <el-table-column
                        prop="shopworkName"
                        label="车间名"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="groupID"
                        label="分组号">
                </el-table-column>
                <el-table-column
                        prop="groupName"
                        label="分组名">
                </el-table-column>
                <el-table-column
                        prop="slotStatus"
                        label="槽状态">
                </el-table-column>
                <el-table-column
                        prop="setVolt"
                        label="设定电压">
                </el-table-column>

                <el-table-column
                        prop="avgVolt"
                        label="平均电压">
                </el-table-column>

                <el-table-column
                        prop="electric"
                        label="电流">
                </el-table-column>
                <el-table-column
                        prop="resistance"
                        label="电阻">
                </el-table-column>
                <el-table-column
                        prop="vibration"
                        label="针振">
                </el-table-column>
                <el-table-column
                        prop="swing"
                        label="摆动">
                </el-table-column>
                <el-table-column
                        prop="blankTimes"
                        label="下料次数">
                </el-table-column>
                <el-table-column
                        prop="blankVol"
                        label="下料量">
                </el-table-column>
                <el-table-column
                        prop="distEffect"
                        label="距效应">
                </el-table-column>
                <el-table-column
                        prop="distAlOut"
                        label="距出铝">
                </el-table-column>

                <el-table-column
                        prop="distChangePole"
                        label="距换极">
                </el-table-column>
                <el-table-column
                        prop="distProcess"
                        label="距加工">
                </el-table-column>
                <el-table-column
                        prop="poleriseTime"
                        label="阳升时间">
                </el-table-column>
                <el-table-column
                        prop="poleDownTime"
                        label="阳降时间">
                </el-table-column>
                <el-table-column
                        prop="powWaste"
                        label="功耗">
                </el-table-column>
                <el-table-column
                        prop="fsaltAddNum"
                        label="氟盐添加次数">
                </el-table-column>
                <el-table-column
                        prop="rotmetRead"
                        label="回转计计数">
                </el-table-column>
                <el-table-column
                        prop="abnormalctn"
                        label="异常持续">
                </el-table-column>
                <el-table-column
                        prop="swingctn"
                        label="摆动持续">
                </el-table-column>
                <el-table-column
                        prop="manualctn"
                        label="手动持续">
                </el-table-column>
                <el-table-column
                        prop="offlinectn"
                        label="通讯断持续">
                </el-table-column>
                <el-table-column
                        prop="nbNum"
                        label="NB次数">
                </el-table-column>
                <el-table-column
                        prop="nbTime"
                        label="NB时刻">
                </el-table-column>
                <el-table-column
                        prop="auNum"
                        label="AU次数">
                </el-table-column>
                <el-table-column
                        prop="auTime"
                        label="AU时刻">
                </el-table-column>
                <el-table-column
                        prop="adNum"
                        label="AD次数">
                </el-table-column>
                <el-table-column
                        prop="adTime"
                        label="AD时刻">
                </el-table-column>
                <el-table-column
                        prop="aebNum"
                        label="AEB次数">
                </el-table-column>
                <el-table-column
                        prop="aebTime"
                        label="AEB时刻">
                </el-table-column>
                <el-table-column
                        prop="autoRc"
                        label="自动RC">
                </el-table-column>
                <el-table-column
                        prop="eftWaitctn"
                        label="效应等待持续">
                </el-table-column>
                <el-table-column
                        prop="seriesVolt"
                        label="系列电压">
                </el-table-column>
                <el-table-column
                        prop="currException"
                        label="当前异常">
                </el-table-column>
                <el-table-column
                        prop="currSwing"
                        label="当前摆动">
                </el-table-column>
                <el-table-column
                        prop="polemovingDistance"
                        label="阳移距今">
                </el-table-column>
                <el-table-column
                        prop="commStatus"
                        label="XX状态">
                </el-table-column>
                <el-table-column
                        prop="manualStaus"
                        label="手动状态">
                </el-table-column>
                <el-table-column
                        prop="abnormalRes"
                        label="异常电阻">
                </el-table-column>
                <el-table-column
                        prop="abnormalresTime"
                        label="异常电阻时刻">
                </el-table-column>
                <el-table-column
                        prop="manHitShellNum"
                        label="人工打壳次数">
                </el-table-column>
                <el-table-column
                        prop="powerbreakTimes"
                        label="电源跳次数">
                </el-table-column>
                <el-table-column
                        prop="pureManNum"
                        label="纯手动次数">
                </el-table-column>
                <el-table-column
                        prop="antiuntouchNum"
                        label="反未合次数">
                </el-table-column>
                <el-table-column
                        prop="posuntouchNum"
                        label="正未合次数">
                </el-table-column>
                <el-table-column
                        prop="mainuntouchNum"
                        label="主未合次数">
                </el-table-column>
                <el-table-column
                        prop="antiadhNum"
                        label="反粘连次数">
                </el-table-column>
                <el-table-column
                        prop="posadhNum"
                        label="正粘连次数">
                </el-table-column>
                <el-table-column
                        prop="mainadhNum"
                        label="主粘连次数">
                </el-table-column>
                <el-table-column
                        prop="fallswchNum"
                        label="阳降开关次数">
                </el-table-column>
                <el-table-column
                        prop="riseswchNum"
                        label="阳升开关次数">
                </el-table-column>
                <el-table-column
                        prop="riselowlimNum"
                        label="提升下限次数">
                </el-table-column>
                <el-table-column
                        prop="riseuplimNum"
                        label="提升上限次数">
                </el-table-column>
                <el-table-column
                        prop="longregNum"
                        label="定时长次数">
                </el-table-column>
                <el-table-column
                        prop="shortregNum"
                        label="定时短次数">
                </el-table-column>
                <el-table-column
                        prop="overregNum"
                        label="定时超次数">
                </el-table-column>
                <el-table-column
                        prop="acoralNum"
                        label="交流口次数">
                </el-table-column>
                <el-table-column
                        prop="timerresetNum"
                        label="定时器复位次数">
                </el-table-column>
                <el-table-column
                        prop="corrsplNum"
                        label="采样校正次数">
                </el-table-column>
                <el-table-column
                        prop="abnorsplNum"
                        label="采样异常次数">
                </el-table-column>
                <el-table-column
                        prop="abnorliftNum"
                        label="升降异常次数">
                </el-table-column>
                <el-table-column
                        prop="abnorswchNum"
                        label="开关异常次数">
                </el-table-column>
                <el-table-column
                        prop="lessblankTimes"
                        label="欠量下料次数">
                </el-table-column>
                <el-table-column
                        prop="overblankTimes"
                        label="过量下料次数">
                </el-table-column>
                <el-table-column
                        prop="basblankInterval"
                        label="基准下料间隔">
                </el-table-column>

                <el-table-column
                        prop="eftwaitInterval"
                        label="效应等待间隔">
                </el-table-column>
                <el-table-column
                        prop="functionkeyTimes"
                        label="功能键次数">
                </el-table-column>
                <el-table-column
                        prop="functionkeyTime"
                        label="功能键时间">
                </el-table-column>
                <el-table-column
                        prop="busbarMoving"
                        label="母线位移">
                </el-table-column>
                <el-table-column
                        prop="effectTimes"
                        label="效应次数">
                </el-table-column>
                <el-table-column
                        prop="effectContinueTime"
                        label="效应持续时间">
                </el-table-column>
                <el-table-column
                        prop="effectpeakVolt"
                        label="效应峰压">
                </el-table-column>
                <el-table-column
                        prop="effectavgVolt"
                        label="效应均压">
                </el-table-column>
                <el-table-column
                        prop="effectPower"
                        label="效应功率">
                </el-table-column>
                <el-table-column
                        prop="seteffectwaitInterval"
                        label="效应等待时间">
                </el-table-column>
                <el-table-column
                        prop="aloutTime"
                        label="出铝时刻">
                </el-table-column>
                <el-table-column
                        prop="changpoleTime"
                        label="换级时刻">
                </el-table-column>
                <el-table-column
                        prop="processTime"
                        label="边加工时刻">
                </el-table-column>
                <el-table-column
                        prop="liftBsbarTime"
                        label="抬母线时刻">
                </el-table-column>
                <el-table-column
                        prop="liftBsbarTime"
                        label="出铝">
                </el-table-column>
                <el-table-column
                        prop="aloutNum"
                        label="抬母线时刻">
                </el-table-column>
                <el-table-column
                        prop="changpoleNum"
                        label="换极">
                </el-table-column>
                <el-table-column
                        prop="processNum"
                        label="边加工">
                </el-table-column>
                <el-table-column
                        prop="liftbsbarNum"
                        label="抬母线">
                </el-table-column>
            </el-table>
        </el-main>
      </el-container>
    </div>
</template>
<script>

// 导入组件
import HeadNav from '../../components/headNav/HeadNav.vue'
import mySidebar from '../../components/Sidebar/mySidebar'

export default {
  name: 'banbao',
  data () {
    return {
      tableData: [],
      dateRange: '',
      options: [],
      workID: '',
      options2: [],
      AreID: '',
      BanCi: '',
      options3: [], // 班次
      index: 0,
      options4: [],
      slotid: ''// 槽号
    }
  },
  components: {
    HeadNav,
    mySidebar
  },
  methods: {
    fetchData () {
      // 获取三个条件的值
      const data1 = this.dateRange[0].Format('yyyy-MM-dd')// 获得第一个日期选择框的日期
      const data2 = this.dateRange[1].Format('yyyy-MM-dd')// 获得第二个日期选择框的日期
      const data11 = data1.split('-').join('')
      const data22 = data2.split('-').join('')
      // alert("开始日期"+data11);

      // 获得车间ID
      const chejian = this.workID
      // alert("车间ID"+chejian);

      // 获得工区ID
      const gongqu = this.AreID
      // alert("工区ID"+gongqu);

      // 获得班次
      const banci = this.BanCi
      // alert("班次"+banci);

      // 获得槽号
      const caohao = this.slotid
      // alert("槽号"+caohao);
      // 获得token
      const item = localStorage.getItem('tokenn')
      const tokenn = 'lideer' + item

      // axios获取数据
      //       const data = JSON.stringify({ recordTime: data2, workshopId: chejian, areaId: gongqu })
      //       axios.defaults.headers.post['Content-Type'] = 'application/json'
      // axios.defaults.headers.common['Authorization'] = tokenn;
      // axios.post(`http://192.168.1.2:9002/dayData/search`,data).then(response=>{
      //     headers:{
      //         Authorization:tokenn
      //     }
      //     console.log(response.data.data);
      //     this.tableData=response.data.data;
      // })
      const url = '/shiftData/search'
      const data = {
        beginDate: data11, // 开始时间
        endDate: data22, // 结束时间
        workshopId: chejian, // 车间
        areaId: gongqu, // 工区
        shiftId: banci, // 班次
        slotId: caohao
      }
      const header = {
        Authorization: tokenn
      }
      this.reqM1Service(
        url,
        data,
        header
      ).then(response => {
        console.log(response.data.data)
        this.tableData = response.data.data
      })
      //       axios({
      //         url: baseUrl + ':9001/shiftData/search',
      //         method: 'post',
      //         data: {
      // beginDate: data11, // 开始时间
      // endDate: data22, // 结束时间
      // workshopId: chejian, // 车间
      // areaId: gongqu, // 工区
      // shiftId: banci, // 班次
      // slotId: caohao

      //         },
      //         headers: {
      //           Authorization: tokenn
      //         }
      //       }).then(response => {
      //         console.log(response.data.data)
      //         this.tableData = response.data.data
      //       })
    },
    // 二级连动方法
    lian () {
      const url = '/workShopInfo'
      this.reqM2Service(url).then(response => {
        this.options = response.data.data
        console.log(response.data.data)
      })
      // console.log("workID",this.workID)
      this.gong(this.workID)
    },

    // 查询车间下工区的方法 传车间的id
    gong (wordid) {
      const url = '/areaInfo/'
      this.reqM2Service(url + wordid).then(response => {
        this.options2 = response.data.data
        // console.log(response.data.data);
      })
      // this.fetchData()
    },
    // 查询班次的方法
    ban () {
      const url = '/shiftTime'
      this.reqM2Service(url).then(response => {
        this.options3 = response.data.data
        console.log('班次', response.data.data)
      })
      // this.fetchData()
      console.log('班次', this.BanCi)
    },
    // 查询槽号的方法
    cao () {
      const url = '/slotControlInfo'
      this.reqM2Service(url).then(response => {
        // console.log("所有槽号",response.data.data);
        this.options4 = response.data.data
      })
      console.log('单独的槽号', this.slotid)
    }
  }
}
</script>
<style lang="less" scoped>
   .yanse{
        overflow: hidden;
        position: relative;
   }
   .el-range-editor,.el-select{
        margin-right: 10px;
   }
  /deep/ .el-range-separator{
    margin: 0 5px;
    padding: 0;
  }
  .el-button--primary,.el-select{
    height: 40px;
  }
  // 数据展示框的定位
  .el-table--border{
    top: 68px;
    width: 1301px !important;
    /deep/.el-table_1_column_4{
      width: 40% ;
    }
  }
  .el-table {
    position: absolute;
    overflow: hidden;
    box-sizing: border-box;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
    max-width: 100%;
    font-size: 14px;
    color: #606266;
  }
  .el-table .hidden-columns {
    position: absolute;
    z-index: -1;
    visibility: hidden;
}
  .el-table__header-wrapper,.el-table__footer-wrapper{
        overflow: hidden;
        width: 100%;
  }
  .el-table--scrollable-x .el-table__body-wrapper{
    overflow-x: auto;
  }
  .el-table__body-wrapper {
    overflow: hidden;
    position: relative;
}
</style>
