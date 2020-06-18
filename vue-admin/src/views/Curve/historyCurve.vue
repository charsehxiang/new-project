<template>
    <div>
        <head-nav></head-nav>
        <el-container>
            <!-- 侧边导航栏 -->
            <my-sidebar></my-sidebar>
            <!-- 右侧内容 -->
            <el-main class="yanse">
                <div class="headbox">
                    <!--历史曲线日期选择条件框-->
                    <el-date-picker
                            v-model="dateRange"
                            type="date"
                            border
                            placeholder="选择日期">
                    </el-date-picker>
                    <!--历史曲线槽号选择-->
                    <el-input class="input" v-model="caohao" placeholder="请输入槽号"></el-input>
                    <el-button type="primary" icon="el-icon-search" @click="echas()">搜索</el-button>
                </div>
                <!-- 图表 -->
                <div>
                   <div id="main" style="width: 1330px;height: 600px"></div>
                </div>
            </el-main>
        </el-container>
        <!-- <div id="myChart" :style="{width: '300px', height: '300px'}"></div> -->
    </div>
</template>
<script>
import HeadNav from '../../components/headNav/HeadNav.vue'
import mySidebar from '../../components/Sidebar/mySidebar'
export default {
  name: 'historyCurve', // 历史曲线
  data () {
    return {
      dateRange: '',
      caohao: '1101'
    }
  },
  components: {
    HeadNav,
    mySidebar
  },
  mounted () {
    // this.drawLine()
  },
  methods: {
    echas: function () {
      // 日期
      const date1 = this.dateRange.Format('yyyy-MM-dd')
      const data2 = date1.split('-').join('')
      // 槽号
      const cao = this.caohao
      axios.get(baseUrl + ':9003/findSXHis/' + cao + '/' + data2).then(response => {
        // console.log(response.data);
        // 时间
        const xtimeData = []
        const list = []
        const dianya = []
        // 电阻
        const dianzu = []
        // 电流
        const dianliu = []
        const Nbjg = []
        // 针震
        const Zhenzheng = []
        // 摆动
        const BaiDong = []
        // 斜率
        const XieLv = []
        // 累斜
        const LeiXie = []
        for (let i = 0; i < response.data.length; i++) {
          xtimeData.push(response.data[i].data)
          dianya.push(response.data[i].volt)
          // if(response.data[i].volt>7){
          //     dianya.push(4.8);
          // }else {
          //     dianya.push(response.data[i].volt)
          // }
          dianzu.push(response.data[i].resistance)
          dianliu.push(response.data[i].electric)
          // console.log(response.data[i].electric)
          // NB间隔
          Nbjg.push(response.data[i].raleBlankInterval)
          // 针震
          Zhenzheng.push(response.data[i].vibration)
          // 摆动
          BaiDong.push(response.data[i].swing)
          // 斜率
          XieLv.push(response.data[i].slope)
          // 累斜
          LeiXie.push(response.data[i].accsloper)
          // //判断电压过高
          // if(response.data[i].volt>12){
          //     let demo={};
          //     demo["value"] = "↑";
          //     demo["xAxis"] = response.data[i].recordID;
          //     demo["yAxis"] = response.data[i].volt;
          //     demo["name"]="电压过高";
          //     // demo[]=
          //     list.push(demo);
          // }
        }
        // 让电压起伏较大的方法
        // function formatData(arr){
        //     let newHashArray = []
        //     for(var i=0;i<arr.length;i++){
        //         let obj={}
        //         let temp = arr[i]
        //         if(arr[i]>0&&arr[i]<3){
        //             arr[i]=arr[i]
        //         }else if(arr[i]>3&&arr[i]<3.5){
        //             arr[i]=3+arr[i]
        //         }else if(arr[i]>3.5&&arr[i]<4){
        //             arr[i]=3.5+arr[i]
        //         }else if(arr[i]>4&&arr[i]<4.5){
        //             arr[i]=4+arr[i]
        //         }else if(arr[i]>4.5&&arr[i]<5){
        //             arr[i]=4.5+arr[i]/10
        //         }else if(arr[i]>5&&arr[i]<5.5){
        //             arr[i]=5+arr[i]/10
        //         }else if(arr[i]>5.5&&arr[i]<6){
        //             arr[i]=5.5+arr[i]/10
        //         }else if(arr[i]>6&&arr[i]<6.5){
        //             arr[i]=6+arr[i]/10
        //         }else if(arr[i]>6.5&&arr[i]<7){
        //             arr[i]=6.5+arr[i]/10
        //         }else if(arr[i]>7&&arr[i]<7.5) {
        //             arr[i] = 7 + arr[i]/10
        //         }else if(arr[i]>7.5&&arr[i]<8) {
        //             arr[i] = 7.5 + arr[i]/10
        //         }else if(arr[i]>8&&arr[i]<14) {
        //             arr[i] = 8 + arr[i]/10
        //         }
        //         obj.value = arr[i]
        //         obj.formatV = temp
        //         newHashArray.push(obj)
        //     }
        //     return newHashArray;
        // }
        // let wxArray = formatData(dianya)

        // console.log(dianya);
        const myChart = this.$echarts.init(document.getElementById('main'))

        // 指定图表的配置项和数据
        console.log(document.getElementById('main'))
        let timeData = xtimeData

        timeData = timeData.map(function (str) {
          return str.replace('', '')
        })

        option = {
          title: {
            text: '西部水电曲线报表',
            subtext: '数据来自力得尔科技有限公司有限公司',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              animation: false
            }
            // formatter(param){
            //     return `${param[7].data.formatV}`
            // }
          },
          legend: {
            data: ['电压', '电阻', '电流', '针震', '摆动', 'NB间隔', '斜率', '累斜'],
            left: 10
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
              saveAsImage: {}
            }
          },
          axisPointer: {
            link: { xAxisIndex: 'all' }
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 30,
              end: 70,
              xAxisIndex: [0, 1]
            },
            {
              type: 'inside',
              realtime: true,
              start: 30,
              end: 70,
              xAxisIndex: [0, 2]
            },
            {
              type: 'inside',
              realtime: true,
              start: 30,
              end: 70,
              xAxisIndex: [0, 1]
            }
          ],
          grid: [{
            left: 50,
            right: 50,
            height: '20%'
          }, {
            left: 50,
            right: 50,
            top: '40%',
            height: '20%'
          }, {
            left: 50,
            right: 50,
            top: '70%',
            height: '20%'
          }],
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              axisLine: { onZero: true },
              data: timeData
              // axisLabel:{interval:6}
            },
            {
              gridIndex: 1,
              type: 'category',
              boundaryGap: false,
              axisLine: { onZero: true },
              data: timeData,
              position: 'top'
            },
            {
              gridIndex: 2,
              type: 'category',
              boundaryGap: false,
              axisLine: { onZero: true },
              data: timeData,
              position: 'top'
            }
          ],
          yAxis: [
            {
              name: '电压(m^3/s)',
              type: 'value',
              min: function (value) {
                return value.min
              }

            },
            {
              name: '电阻',
              type: 'value',
              min: function (value) {
                return value.min
              }
              // minInterval: 1

            },
            {
              name: 'NB间隔',
              type: 'value',
              // min: function (value) {
              //     return value.min
              // },
              offset: 25
              // position:'right',

            },
            {
              gridIndex: 1,
              name: '斜率，累斜(mm)',
              type: 'value',
              inverse: true,
              scale: true,
              splitNumber: 7 // y轴间隔
            },
            {
              gridIndex: 2,
              name: '电流针震摆动(mm)',
              type: 'value',
              inverse: true,
              splitNumber: 10
            }
          ],
          series: [
            // 一个表
            {
              name: '电压',
              type: 'line',
              symbolSize: 8,
              yAxisIndex: 0,
              hoverAnimation: false,
              data: dianya, // 这里是图表曲线的数据
              connectNulls: true,
              smooth: true,
              // 第一个图表的标注
              markPoint: {
                data: list
              }
              // 二个表
            },
            {
              name: '斜率',
              type: 'line',
              step: 'middle', // 辩证正方曲线
              xAxisIndex: 1,
              yAxisIndex: 3,
              symbolSize: 8,
              smooth: true,
              hoverAnimation: false,
              data: XieLv

            },
            // 三个表
            {
              name: '电流',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 4,
              symbolSize: 8,
              smooth: true,
              hoverAnimation: false,
              data: dianliu,
              markPoint: {
                // data: [
                //     {value: "打壳", xAxis: '2020/3/2 10:00', yAxis: 1, name: '槽子停了', symbol: 'rect'},
                //     {value: "打壳", xAxis: '2020/3/2 15:00', yAxis: 3, name: '槽子停了', symbol: 'rect'},
                //     {value: "打壳", xAxis: '2020/3/2 17:00', yAxis: 3, name: '槽子停了', symbol: 'rect'},
                //
                // ]
              }

            },

            // 第一个表的第二条线
            {
              name: '电阻',
              type: 'line',
              symbolSize: 8,
              yAxisIndex: 1,
              hoverAnimation: false,
              data: dianzu,
              itemStyle: {
                normal: {
                  color: '#FF9900',
                  lineStyle: {
                    color: '#FF9900'
                  }
                }
              }
            },
            {
              name: 'NB间隔',
              type: 'line',
              symbolSize: 8,
              yAxisIndex: 2,
              hoverAnimation: false,
              data: Nbjg
            },
            // 第二个表第一条线
            {
              name: '累斜',
              type: 'line',
              xAxisIndex: 1,
              yAxisIndex: 3,
              symbolSize: 8,
              hoverAnimation: false,
              data: LeiXie
            },

            // 第三个表第二条线
            {
              name: '针震',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 4,
              symbolSize: 8,
              hoverAnimation: false,
              data: Zhenzheng
            },
            {
              name: '摆动',
              type: 'line',
              xAxisIndex: 2,
              yAxisIndex: 4,
              symbolSize: 8,
              hoverAnimation: false,
              data: BaiDong,
              itemStyle: {
                normal: {
                  color: '#00FF00',
                  lineStyle: {
                    color: '#00FF00'
                  }
                }
              }
            }

          ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
      })
    }
    // drawLine () {
    //   // 基于准备好的dom，初始化echarts实例
    //   var myChart = this.$echarts.init(document.getElementById('myChart'))
    //   // 绘制图表
    //   myChart.setOption({
    //     title: { text: '在Vue中使用echarts' },
    //     tooltip: {},
    //     xAxis: {
    //       data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    //     },
    //     yAxis: {},
    //     series: [{
    //       name: '销量',
    //       type: 'bar',
    //       data: [5, 20, 36, 10, 10, 20]
    //     }]
    //   })
    // }
  }
}
</script>
<style lang="less" scoped>
    .yanse{
        display: flex;
        flex-direction: column;
    }
    .headbox{
        height: 40px;
        display: flex;
        // flex-direction: column;
    }
     .headbox .input{
        width: 100px;
        margin: 0  10px;
     }
</style>
