
<template>
    <div>
        <head-nav></head-nav>
         <el-container>
            <!-- 侧边导航栏 -->
            <my-sidebar></my-sidebar>
             <!-- 右侧内容 -->
            <el-main>
                <el-button type="primary"  @click="dialog = true"  class="mb10">点击修改</el-button>
                <div class="table-box">
                    <el-table
                            :data="tableData"
                            width="100%"
                            border
                            height="600">
                        <el-table-column
                                prop="slotID"
                                label="槽号">
                        </el-table-column>
                        <el-table-column
                                prop="recordID"
                                label="设定电压">
                        </el-table-column>
                        <el-table-column
                                prop="recordDate"
                                label="下料间隔(s)">
                        </el-table-column>

                        <el-table-column
                                prop="recordDate"
                                label="氟盐量(kg)">
                        </el-table-column>

                        <el-table-column
                                prop="shopworkID"
                                label="停料">
                        </el-table-column>

                        <el-table-column
                                prop="shopworkName"
                                label="停料时间(min)"
                                width="150">
                        </el-table-column>
                        <el-table-column
                                prop="groupID"
                                label="定时下料">
                        </el-table-column>
                        <el-table-column
                                prop="groupName"
                                label="定时时间(min)">
                        </el-table-column>
                        <el-table-column
                                prop="slotStatus"
                                label="停控">
                        </el-table-column>
                        <el-table-column
                                prop="setVolt"
                                label="停控时间(min)">
                        </el-table-column>

                        <el-table-column
                                prop="avgVolt"
                                label="上敏感区(mv)">
                        </el-table-column>

                        <el-table-column
                                prop="electric"
                                label="下敏感区(mv)">
                        </el-table-column>
                        <el-table-column
                                prop="resistance"
                                label="回转计">
                        </el-table-column>
                        <el-table-column
                                prop="vibration"
                                label="闪烁效应基准">
                        </el-table-column>
                        <el-table-column
                                prop="swing"
                                label="效应间隔(h)">
                        </el-table-column>
                        <el-table-column
                                prop="blankTimes"
                                label="效应等待时间">
                        </el-table-column>
                    </el-table>
                    <el-drawer
                        :before-close="handleClose"
                        :visible.sync="dialog"
                        direction="rtl"
                        custom-class="demo-drawer"
                        ref="drawer"
                        >
                        <div class="demo-drawer__content">
                            <el-form :model="form">
                                <div>
                                    <el-input v-model="input" placeholder="请输入内容" clearable></el-input>
                                        <!-- <el-button  class="table-box21" type="danger" size="mini">退出</el-button> -->
                                </div>

                                <!-- <div>
                                        <el-button  class="table-box22" size="mini">请求</el-button>
                                        <el-button  class="table-box23"  size="mini" @click="xiuDate()">修改</el-button>
                                </div> -->

                                <div>
                                <p>单选</p>
                                <el-radio v-model="radio" label="1">批量停料(时间)</el-radio>
                                <el-input type="text" size="mini" placeholder="请输入内容"  v-model="input1" clearable></el-input>
                                <el-radio v-model="radio" label="1">批量定时(时间)</el-radio>
                                <el-input  size="mini" placeholder="请输入内容" v-model="input2" clearable></el-input>
                                <el-radio v-model="radio" label="1">批量停控(时间)</el-radio>
                                <el-input  size="mini" placeholder="请输入内容" v-model="input3" clearable></el-input>
                                <p>选择工区</p>
                                <el-select v-model="AreID" placeholder="请选择">
                                <el-option
                                        v-for="item in options2"
                                        :key="item.areaID"
                                        :label="item.areaName"
                                        :value="item.areaID">
                                </el-option>
                                </el-select>
                                </div>
                            </el-form>
                            <div class="demo-drawer__footer">
                                <el-button @click="cancelForm">取 消</el-button>
                                <el-button type="primary" @click="$refs.drawer.closeDrawer()" :loading="loading">{{ loading ? '提交中 ...' : '确 定' }}</el-button>
                            </div>
                        </div>
                    </el-drawer>
                </div>
            </el-main>
         </el-container>
    </div>
</template>
<script>
// 导入组件
import HeadNav from '../../components/headNav/HeadNav.vue'
import mySidebar from '../../components/Sidebar/mySidebar'
export default {
  name: 'systemParameter', // 系统参数
  data () {
    return {
      tableData: [],
      dateRange: '',
      options: [],
      workID: null,
      options2: [],
      AreID: null,
      index: 0,
      radio: '',

      // 侧边栏
      table: false,
      dialog: false,
      loading: false,
      input: ' ',
      input1: ' ',
      input2: ' ',
      input3: ' ',
      form: {
        // name: '',
        // region: '',
        // // date1: '',
        // // date2: '',
        // delivery: false,
        // type: [],
        // resource: '',
        // desc: ''
      },
      formLabelWidth: '80px',
      timer: null
    }
  },
  methods: {
    handleClose (done) {
      if (this.loading) {
        return
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true
          this.input = ''
          this.input1 = ''
          this.input2 = ''
          this.input3 = ''
          this.timer = setTimeout(() => {
            done()
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading = false
            }, 400)
          }, 2000)
        })
        .catch(_ => {})
    },
    cancelForm () {
      this.loading = false
      this.dialog = false
      clearTimeout(this.timer)
    },
    fetchData () {
      const formData = new FormData()
      formData.append('user', 123456)
      formData.append('pass', 12345678)
      
      axios.post(baseUrl + ':9003/a', formData).then(response => {
        console.log(response.data)
        console.log('传输成功')
      })
    }
  },
  components: {
    HeadNav,
    mySidebar
  }
}
</script>
<style lang="less" scoped>
    .mb10{
        margin-bottom: 10px;
    }
    .demo-drawer__content{
        padding: 0  25px;
        p{
           font-size: 14px;
           margin: 10px 0;
        }
    }
</style>
