<template>
  <div>
    <div :id="id" :class="className" :style="{height:height,width:width}" ref="myEchart" />
  </div>
</template>
<script>
import echarts from 'echarts'
import '../../../node_modules/echarts/map/js/china.js'
import resize from './mixins/resize'
export default {
  name: 'chinaMap',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chinaConfigure() {
      this.chart = echarts.init(document.getElementById(this.id)); //这里是为了获得容器所在位置    
      // window.onresize = this.chart.resize;
      this.chart.setOption({ // 进行相关配置
        backgroundColor: "#02AFDB",
        // title: {
        //   text: '销售',
        //   x: 'center',
        //   textStyle: {
        //     fontSize: 24
        //   }
        // },
        tooltip: {
          trigger: 'item',
          formatter: function (params) {
            var toolTiphtml = ""
            if (isNaN(params.value)) {
              toolTiphtml = params.name + '暂无销量'
            } else {
              toolTiphtml = params.name + ":" + params.value
            }
            return toolTiphtml
          }
        }, // 鼠标移到图里面的浮动提示框  数据标记
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        }, // 保存地图
        // dataRange: {
        //   show: false,
        //   min: 0,
        //   max: 1000,
        //   text: ['High', 'Low'],
        //   realtime: true,
        //   calculable: true,
        //   color: ['orangered', 'yellow', 'lightskyblue', 'purple']
        // },
        visualMap: {
          show: true,
          left: 'right',
          top: 'bottom',
          seriesIndex: [0],
          type: 'piecewise',
          pieces: [
            { min: 500, label: '完全分布' },
            { min: 250, max: 500, label: '已分布' },
            { min: 0, max: 250, label: '预期分布', },
            { max: 0, label: '未分布', color: 'grey' },
          ],
          textStyle: {
            color: '#000'
          }
        },// 图例
        geo: { // 这个是重点配置区
          show: true,
          map: 'china', // 表示中国地图
          roam: true,//鼠标滚轮
          label: {
            normal: {
              show: true, // 是否显示对应地名 文字
              textStyle: {
                color: 'rgba(0,0,0,0.5)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            //name: '启动次数', // 浮动框的标题
            type: 'map',
            map: 'chain',
            coordinateSystem: 'geo', // 对应上方配置
            geoIndex: 0,
            animation: false,
            data: [{
              "name": "北京",
              "value": 599,
            }, {
              "name": "上海",
              "value": 142
            }, {
              "name": "黑龙江",
              "value": 44
            }, {
              "name": "深圳",
              "value": 92
            }, {
              "name": "湖北",
              "value": 810
            }, {
              "name": "四川",
              "value": 453
            }]
          }
        ]
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>