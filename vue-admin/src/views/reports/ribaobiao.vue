<template>
    <div>
        <head-nav></head-nav>
         <el-container>
            <!-- 侧边导航栏 -->
            <my-sidebar></my-sidebar>
            <!-- 右侧内容 -->
            <el-main class="yanse">
              <!-- 日期导航大盒子 -->
                <div class="headBox">
                  <!--以日为单位-->
                  <el-date-picker
                          v-model="dateRange"
                          type="date"
                          border
                          placeholder="选择日期">
                  </el-date-picker>
                  <!--车间-->
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
                <!-- 下面数据展示部分 -->
                <div class="mathbox">
                  <!--表格-->
                  <el-table
                          :data="tableData"
                          width="100%"
                          border
                          height="620px">
                      <el-table-column
                              prop="slotID"
                              label="槽号">
                      </el-table-column>
                      <el-table-column
                              prop="recordID"
                              label="记录号">
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
                              prop="workVolt"
                              label="工作电压">
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
                              prop="allpowWaste"
                              label="总功耗">
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
                              prop="aloutTime"
                              label="出铝时间">
                      </el-table-column>
                      <el-table-column
                              prop="changpoleTime"
                              label="换极时间">
                      </el-table-column>
                      <el-table-column
                              prop="processTime"
                              label="边加工时间">
                      </el-table-column>
                      <el-table-column
                              prop="distEffect"
                              label="距效应">
                      </el-table-column>
                      <el-table-column
                              prop="distChangePole"
                              label="距换极">
                      </el-table-column>
                      <el-table-column
                              prop="distAlOut"
                              label="距出铝">
                      </el-table-column>
                      <el-table-column
                              prop="distProcess"
                              label="距加工">
                      </el-table-column>
                      <el-table-column
                              prop="resistanceRate"
                              label="电阻率">
                      </el-table-column>
                      <el-table-column
                              prop="dropVol"
                              label="下降量">
                      </el-table-column>
                      <el-table-column
                              prop="voltupperLimit"
                              label="电压上限">
                      </el-table-column>
                      <el-table-column
                              prop="voltlowerLimit"
                              label="电压下限">
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
                              prop="effectwaitctn"
                              label="效应等待持续">
                      </el-table-column>
                      <el-table-column
                              prop="seriesVolt"
                              label="系列电压">
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
                              prop="fsaltaddTimes"
                              label="氟盐添加次数">
                      </el-table-column>
                      <el-table-column
                              prop="basebankInterval"
                              label="基准下料间隔">
                      </el-table-column>
                      <el-table-column
                              prop="effectwaitInterval"
                              label="效应等待持续间隔">
                      </el-table-column>
                      <el-table-column
                              prop="twinkleeffectBase"
                              label="闪烁效应基准">
                      </el-table-column>
                      <el-table-column
                              prop="liftBsbarTime"
                              label="抬母线时间">
                      </el-table-column>
                      <el-table-column
                              prop="functionkeyTime"
                              label="功能键次数">
                      </el-table-column>
                      <el-table-column
                              prop="functionkeyTimes"
                              label="功能键时间">
                      </el-table-column>
                      <el-table-column
                              prop="busbarMoving"
                              label="母线位移">
                      </el-table-column>
                      <el-table-column
                              prop="remark"
                              label="标注">
                      </el-table-column>
                  </el-table>
                </div>
            </el-main>
         </el-container>
    </div>
</template>
<script>
import HeadNav from '../../components/headNav/HeadNav.vue'
import mySidebar from '../../components/Sidebar/mySidebar'
export default {
  name: 'ribaobiao',
  data () {
    return {
      tableData: [],
      dateRange: '',
      options: [],
      workID: null,
      options2: [],
      AreID: null,
      index: 0
    }
  },
  methods: {
    fetchData () {
      // 获取三个条件的值
      // if(this.dateRange=''){
      //      alert("请先选择时间")
      //      return
      // }
      const data1 = this.dateRange.Format('yyyy-MM-dd') // 获得日期选择框
      const data2 = data1.split('-').join('')

      // 获得车间ID
      const chejian = this.workID
      // alert("车间ID"+chejian);

      // 获得工区ID
      const gongqu = this.AreID
      // alert("工区ID"+gongqu);

      // 获得token
      const item = localStorage.getItem('tokenn')
      const tokenn = 'lideer' + item

      // const data = JSON.stringify({ recordTime: data2, workshopId: chejian, areaId: gongqu })
      // axios.defaults.headers.post['Content-Type'] = 'application/json'
      // axios.defaults.headers.common['Authorization'] = tokenn;
      // axios.post(`http://192.168.1.2:9002/dayData/search`,data).then(response=>{
      //     headers:{
      //         Authorization:tokenn
      //     }
      //     console.log(response.data.data);
      //     this.tableData=response.data.data;
      // })
      const url = '/dayData/search'
      const data = {
        recordTime: data2,
        workshopId: chejian,
        areaId: gongqu
      }
      const header = {
        Authorization: tokenn
      }
      this.reqM2Service(
        url,
        data,
        header
      )
      axios({
        // url: 'http://192.168.1.2:9002/dayData/search',
        url: +':9002/dayData/search',
        method: 'post',
        data: {
          recordTime: data2,
          workshopId: chejian,
          areaId: gongqu
        },
        headers: {
          Authorization: tokenn
        }
      }).then(response => {
        console.log(response.data.data)
        this.tableData = response.data.data
      })
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
    }
  },
  components: {
    HeadNav,
    mySidebar
  }
}
</script>
<style lang="less" scoped>
  .yanse{
    overflow: hidden;
    position: relative;
  }
  // 日期头部样式盒子
  .headBox{
    width: 100%;
    height: 40px;
  }
  .el-date-editor,.el-select{
    margin-right: 10px;
   }
  //  表格数据展示
   .mathbox{
     width: 1301px;
     margin-top: 63px;
     position: absolute;
    //  overflow-x: auto;
   }
  .el-table--scrollable-x .el-table__body-wrapper{
    overflow-x: auto;
  }
</style>
