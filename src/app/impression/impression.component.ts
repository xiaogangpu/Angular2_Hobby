import { Component, OnInit,Input,Output,ElementRef,HostListener } from '@angular/core';
import * as $ from 'jquery';
import * as echarts from 'echarts';
import {api}  from 'echarts/echarts-all-3.js';

@Component({
  selector: 'app-impression',
  templateUrl: './impression.component.html',
  styleUrls: ['./impression.component.css']
})
export class ImpressionComponent implements OnInit {
  @Input('chartType') chartType: any;

  constructor(private element: ElementRef) {     
  }

  ngOnInit() {
   
  }
  option = {
    title: {
      text: 'NiceFish月访问量统计',
      subtext: '纯属虚构',
      x: 'center'
    },
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter: "{b}月{a}:{c}"
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '访问量',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 1000, 500, 444, 999, 11]
      }
    ]
  };



//   public data1:Array<any>  = [
//     { name: '北京', value: [225236,2,22342] },
// ];

// public geoCoordMap:object = {
//     '北京': [116.39, 39.93],
// };

// public  convertData(data) {
//     var res = [];
//     for (var i = 0; i < data.length; i++) {
//         var geoCoord = this.geoCoordMap[data[i].name];
//         if (geoCoord) {
//             res.push({
//                 name: data[i].name,
//                 value: geoCoord.concat(data[i].value)
//             });
//         }
//     }
//     return res;
// };

// public  pointSize = 10;//圆点大小

// option = {
// backgroundColor: '#030511',       
// tooltip: {
// trigger: 'item',
// show: true,  
// borderWidth: 2, 
// borderColor: '#19A3C6',
// textStyle:{  
//     fontSize: 18,  //提示框文字大小
// },
// formatter: function (params) {
//     var res='<p>北京楼金融街楼宇</p>';
//     res+='<div>'+'楼宇总面积：'+params.value[2]+' ㎡'+'</div>';
//     res+='<div>'+'楼宇数量：'+params.value[3]+' 栋'+'</div>';
//     res+='<div>'+'总能耗：'+params.value[4]+' 元'+'</div>'
//     return res;
// }
// },

// geo: {
// map: 'china',
// label: {
//     emphasis: {
//         show: false
//     }
// },
// // roam: true,
// zoom:0.5,//放大地图
// //layoutSize : '250%',
// itemStyle: {
//     normal: {
//         areaColor: '#030511',//区域颜色
//         borderWidth: 1, //地图边框宽度
//         borderColor: '#40959C'//区域划分边框颜色
//     },
//     emphasis: {
        
//         areaColor: '#2C8087'//鼠标Havor颜色
//     }
// }
// },
// series: [
// {
//     name: '北京楼金融街楼宇',
//     type: 'effectScatter',
//     coordinateSystem: 'geo',
//     data: this.convertData(this.data1),
//     symbolSize: this.pointSize,
//     showEffectOn: 'render',
//     rippleEffect: {
//         brushType: 'stroke'
//     },
//     hoverAnimation: true,                
//     label: {
//         normal: {                        
//             formatter: '{b}',
//             position: 'top',
//             show: true
//         }
//     },
//     itemStyle: {
//         normal: {                        
//             color: '#19A3C6',//地图圆点的样式
//             shadowBlur: 10,
//             shadowColor: 'black'
//         }
//     },
//     zlevel: 1
// }
// ]
// };



//   public data:Array<any> = [
//     {name: '海门', value: 1, explain:''},
//     {name: '鄂尔多斯', value: 1, explain:''},
//     {name: '招远', value: 1, explain:''},
//     {name: '舟山', value: 1, explain:''},
//     {name: '齐齐哈尔', value: 1, explain:''},
//     {name: '盐城', value: 1, explain:''},
//     {name: '赤峰', value: 1, explain:''},
//     {name: '青岛', value: 1, explain:''},
//     {name: '乳山', value: 1, explain:''},
//     {name: '金昌', value: 1, explain:''},
//     {name: '泉州', value: 1, explain:''},
//     {name: '莱西', value: 1, explain:''},
//     {name: '日照', value: 1, explain:''},
//     {name: '胶南', value: 1, explain:''},
//     {name: '南通', value: 1, explain:''},
//     {name: '拉萨', value: 1, explain:''},
//     {name: '云浮', value: 1, explain:''},
//     {name: '梅州', value: 1, explain:''},
//     {name: '文登', value: 1, explain:''},
//     {name: '上海', value: 1, explain:''},
//     {name: '攀枝花', value: 1, explain:''},
//     {name: '威海', value: 1, explain:''},
//     {name: '承德', value: 1, explain:''},
//     {name: '厦门', value: 1, explain:''},
//     {name: '汕尾', value: 1, explain:''},
//     {name: '潮州', value: 1, explain:''},
//     {name: '丹东', value: 1, explain:''},
//     {name: '太仓', value: 1, explain:''},
//     {name: '曲靖', value: 1, explain:''},
//     {name: '烟台', value: 1, explain:''},
//     {name: '福州', value: 1, explain:''},
//     {name: '瓦房店', value: 1, explain:''},
//     {name: '即墨', value: 1, explain:''},
//     {name: '抚顺', value: 1, explain:''},
//     {name: '玉溪', value: 131,explain:'聂耳之乡'},
//     {name: '张家口', value: 1, explain:''},
//     {name: '阳泉', value: 1, explain:''},
//     {name: '莱州', value: 1, explain:''},
//     {name: '湖州', value: 1, explain:''},
//     {name: '汕头', value: 1, explain:''},
//     {name: '昆山', value: 1, explain:''},
//     {name: '宁波', value: 1, explain:''},
//     {name: '湛江', value: 1, explain:''},
//     {name: '揭阳', value: 1, explain:''},
//     {name: '荣成', value: 1, explain:''},
//     {name: '连云港', value: 1, explain:''},
//     {name: '葫芦岛', value: 1, explain:''},
//     {name: '常熟', value: 1, explain:''},
//     {name: '东莞', value: 1, explain:''},
//     {name: '河源', value: 1, explain:''},
//     {name: '淮安', value: 1, explain:''},
//     {name: '泰州', value: 1, explain:''},
//     {name: '南宁', value: 1, explain:''},
//     {name: '营口', value: 1, explain:''},
//     {name: '惠州', value: 1, explain:''},
//     {name: '江阴', value: 1, explain:''},
//     {name: '蓬莱', value: 1, explain:''},
//     {name: '韶关', value: 1, explain:''},
//     {name: '嘉峪关', value: 1, explain:''},
//     {name: '广州', value: 1, explain:''},
//     {name: '延安', value: 1, explain:''},
//     {name: '太原', value: 1, explain:''},
//     {name: '清远', value: 1, explain:''},
//     {name: '中山', value: 92, explain:''},
//     {name: '昆明', value: 161, explain:''},
//     {name: '寿光', value: 1, explain:''},
//     {name: '盘锦', value: 1, explain:''},
//     {name: '长治', value: 1, explain:''},
//     {name: '深圳', value: 162,explain:'改革前线'},
//     {name: '珠海', value: 133,explain:'宜居温泉城市'},
//     {name: '宿迁', value: 1, explain:''},
//     {name: '咸阳', value: 1, explain:''},
//     {name: '铜川', value: 1, explain:''},
//     {name: '平度', value: 1, explain:''},
//     {name: '佛山', value: 1, explain:''},
//     {name: '海口', value: 1, explain:''},
//     {name: '江门', value: 1, explain:''},
//     {name: '章丘', value: 1, explain:''},
//     {name: '肇庆', value: 1, explain:''},
//     {name: '大连', value: 1, explain:''},
//     {name: '临汾', value: 1, explain:''},
//     {name: '吴江', value: 1, explain:''},
//     {name: '石嘴山', value: 1, explain:''},
//     {name: '沈阳', value: 1, explain:''},
//     {name: '苏州', value: 1, explain:''},
//     {name: '茂名', value: 1, explain:''},
//     {name: '嘉兴', value: 1, explain:''},
//     {name: '长春', value: 1, explain:''},
//     {name: '胶州', value: 1, explain:''},
//     {name: '银川', value: 1, explain:''},
//     {name: '张家港', value: 1, explain:''},
//     {name: '三门峡', value: 1, explain:''},
//     {name: '锦州', value: 1, explain:''},
//     {name: '南昌', value: 1, explain:''},
//     {name: '柳州', value: 1, explain:''},
//     {name: '三亚', value: 1, explain:''},
//     {name: '自贡', value: 1, explain:''},
//     {name: '吉林', value: 1, explain:''},
//     {name: '阳江', value: 1, explain:''},
//     {name: '泸州', value: 1, explain:''},
//     {name: '西宁', value: 1, explain:''},
//     {name: '宜宾', value: 1, explain:''},
//     {name: '呼和浩特', value: 1, explain:''},
//     {name: '成都', value: 151,explain:'天府之国'},
//     {name: '大同', value: 1, explain:''},
//     {name: '镇江', value: 1, explain:''},
//     {name: '桂林', value: 1, explain:''},
//     {name: '张家界', value: 1, explain:''},
//     {name: '宜兴', value: 1, explain:''},
//     {name: '北海', value: 1, explain:''},
//     {name: '西安', value: 1, explain:''},
//     {name: '金坛', value: 1, explain:''},
//     {name: '东营', value: 1, explain:''},
//     {name: '牡丹江', value: 1, explain:''},
//     {name: '遵义', value: 1, explain:''},
//     {name: '绍兴', value: 126,explain:'鱼米之乡'},
//     {name: '扬州', value: 1, explain:''},
//     {name: '常州', value: 1, explain:''},
//     {name: '潍坊', value: 1, explain:''},
//     {name: '重庆', value: 141, explain:''},
//     {name: '台州', value: 1, explain:''},
//     {name: '南京', value: 1, explain:''},
//     {name: '滨州', value: 1, explain:''},
//     {name: '贵阳', value: 1, explain:''},
//     {name: '无锡', value: 1, explain:''},
//     {name: '本溪', value: 1, explain:''},
//     {name: '克拉玛依', value: 1, explain:''},
//     {name: '渭南', value: 1, explain:''},
//     {name: '马鞍山', value: 1, explain:''},
//     {name: '宝鸡', value: 1, explain:''},
//     {name: '焦作', value: 1, explain:''},
//     {name: '句容', value: 1, explain:''},
//     {name: '北京', value: 1, explain:''},
//     {name: '徐州', value: 1, explain:''},
//     {name: '衡水', value: 1, explain:''},
//     {name: '包头', value: 1, explain:''},
//     {name: '绵阳', value: 1, explain:''},
//     {name: '乌鲁木齐', value: 1, explain:''},
//     {name: '枣庄', value: 1, explain:''},
//     {name: '杭州', value: 149,explain:'西子湖畔'},
//     {name: '淄博', value: 1, explain:''},
//     {name: '鞍山', value: 1, explain:''},
//     {name: '溧阳', value: 1, explain:''},
//     {name: '库尔勒', value: 1, explain:''},
//     {name: '安阳', value: 1, explain:''},
//     {name: '开封', value: 1, explain:''},
//     {name: '济南', value: 1, explain:''},
//     {name: '德阳', value: 1, explain:''},
//     {name: '温州', value: 1, explain:''},
//     {name: '九江', value: 1, explain:''},
//     {name: '邯郸', value: 1, explain:''},
//     {name: '临安', value: 1, explain:''},
//     {name: '兰州', value: 1, explain:''},
//     {name: '沧州', value: 1, explain:''},
//     {name: '临沂', value: 1, explain:''},
//     {name: '南充', value: 1, explain:''},
//     {name: '天津', value: 1, explain:''},
//     {name: '富阳', value: 1, explain:''},
//     {name: '泰安', value: 1, explain:''},
//     {name: '诸暨', value: 1, explain:''},
//     {name: '郑州', value: 1, explain:''},
//     {name: '哈尔滨', value: 1, explain:''},
//     {name: '聊城', value: 1, explain:''},
//     {name: '芜湖', value: 1, explain:''},
//     {name: '唐山', value: 1, explain:''},
//     {name: '平顶山', value: 1, explain:''},
//     {name: '邢台', value: 1, explain:''},
//     {name: '德州', value: 1, explain:''},
//     {name: '济宁', value: 1, explain:''},
//     {name: '荆州', value: 1, explain:''},
//     {name: '宜昌', value: 1, explain:''},
//     {name: '义乌', value: 1, explain:''},
//     {name: '丽水', value: 1, explain:''},
//     {name: '洛阳', value: 1, explain:''},
//     {name: '秦皇岛', value: 1, explain:''},
//     {name: '株洲', value: 1, explain:''},
//     {name: '石家庄', value: 1, explain:''},
//     {name: '莱芜', value: 1, explain:''},
//     {name: '常德', value: 1, explain:''},
//     {name: '保定', value: 1, explain:''},
//     {name: '湘潭', value: 1, explain:''},
//     {name: '金华', value: 1, explain:''},
//     {name: '岳阳', value: 1, explain:''},
//     {name: '长沙', value: 1, explain:''},
//     {name: '衢州', value: 1, explain:''},
//     {name: '廊坊', value: 1, explain:''},
//     {name: '菏泽', value: 1, explain:''},
//     {name: '合肥', value: 1, explain:''},
//     {name: '武汉', value: 1, explain:''},
//     {name: '大庆', value: 1, explain:''}
// ];

// public geoCoordMap:object = {
//     '海门':[121.15,31.89],
//     '鄂尔多斯':[109.781327,39.608266],
//     '招远':[120.38,37.35],
//     '舟山':[122.207216,29.985295],
//     '齐齐哈尔':[123.97,47.33],
//     '盐城':[120.13,33.38],
//     '赤峰':[118.87,42.28],
//     '青岛':[120.33,36.07],
//     '乳山':[121.52,36.89],
//     '金昌':[102.188043,38.520089],
//     '泉州':[118.58,24.93],
//     '莱西':[120.53,36.86],
//     '日照':[119.46,35.42],
//     '胶南':[119.97,35.88],
//     '南通':[121.05,32.08],
//     '拉萨':[91.11,29.97],
//     '云浮':[112.02,22.93],
//     '梅州':[116.1,24.55],
//     '文登':[122.05,37.2],
//     '上海':[121.48,31.22],
//     '攀枝花':[101.718637,26.582347],
//     '威海':[122.1,37.5],
//     '承德':[117.93,40.97],
//     '厦门':[118.1,24.46],
//     '汕尾':[115.375279,22.786211],
//     '潮州':[116.63,23.68],
//     '丹东':[124.37,40.13],
//     '太仓':[121.1,31.45],
//     '曲靖':[103.79,25.51],
//     '烟台':[121.39,37.52],
//     '福州':[119.3,26.08],
//     '瓦房店':[121.979603,39.627114],
//     '即墨':[120.45,36.38],
//     '抚顺':[123.97,41.97],
//     '玉溪':[102.52,24.35],
//     '张家口':[114.87,40.82],
//     '阳泉':[113.57,37.85],
//     '莱州':[119.942327,37.177017],
//     '湖州':[120.1,30.86],
//     '汕头':[116.69,23.39],
//     '昆山':[120.95,31.39],
//     '宁波':[121.56,29.86],
//     '湛江':[110.359377,21.270708],
//     '揭阳':[116.35,23.55],
//     '荣成':[122.41,37.16],
//     '连云港':[119.16,34.59],
//     '葫芦岛':[120.836932,40.711052],
//     '常熟':[120.74,31.64],
//     '东莞':[113.75,23.04],
//     '河源':[114.68,23.73],
//     '淮安':[119.15,33.5],
//     '泰州':[119.9,32.49],
//     '南宁':[108.33,22.84],
//     '营口':[122.18,40.65],
//     '惠州':[114.4,23.09],
//     '江阴':[120.26,31.91],
//     '蓬莱':[120.75,37.8],
//     '韶关':[113.62,24.84],
//     '嘉峪关':[98.289152,39.77313],
//     '广州':[113.23,23.16],
//     '延安':[109.47,36.6],
//     '太原':[112.53,37.87],
//     '清远':[113.01,23.7],
//     '中山':[113.38,22.52],
//     '昆明':[102.73,25.04],
//     '寿光':[118.73,36.86],
//     '盘锦':[122.070714,41.119997],
//     '长治':[113.08,36.18],
//     '深圳':[114.07,22.62],
//     '珠海':[113.52,22.3],
//     '宿迁':[118.3,33.96],
//     '咸阳':[108.72,34.36],
//     '铜川':[109.11,35.09],
//     '平度':[119.97,36.77],
//     '佛山':[113.11,23.05],
//     '海口':[110.35,20.02],
//     '江门':[113.06,22.61],
//     '章丘':[117.53,36.72],
//     '肇庆':[112.44,23.05],
//     '大连':[121.62,38.92],
//     '临汾':[111.5,36.08],
//     '吴江':[120.63,31.16],
//     '石嘴山':[106.39,39.04],
//     '沈阳':[123.38,41.8],
//     '苏州':[120.62,31.32],
//     '茂名':[110.88,21.68],
//     '嘉兴':[120.76,30.77],
//     '长春':[125.35,43.88],
//     '胶州':[120.03336,36.264622],
//     '银川':[106.27,38.47],
//     '张家港':[120.555821,31.875428],
//     '三门峡':[111.19,34.76],
//     '锦州':[121.15,41.13],
//     '南昌':[115.89,28.68],
//     '柳州':[109.4,24.33],
//     '三亚':[109.511909,18.252847],
//     '自贡':[104.778442,29.33903],
//     '吉林':[126.57,43.87],
//     '阳江':[111.95,21.85],
//     '泸州':[105.39,28.91],
//     '西宁':[101.74,36.56],
//     '宜宾':[104.56,29.77],
//     '呼和浩特':[111.65,40.82],
//     '成都':[104.06,30.67],
//     '大同':[113.3,40.12],
//     '镇江':[119.44,32.2],
//     '桂林':[110.28,25.29],
//     '张家界':[110.479191,29.117096],
//     '宜兴':[119.82,31.36],
//     '北海':[109.12,21.49],
//     '西安':[108.95,34.27],
//     '金坛':[119.56,31.74],
//     '东营':[118.49,37.46],
//     '牡丹江':[129.58,44.6],
//     '遵义':[106.9,27.7],
//     '绍兴':[120.58,30.01],
//     '扬州':[119.42,32.39],
//     '常州':[119.95,31.79],
//     '潍坊':[119.1,36.62],
//     '重庆':[106.54,29.59],
//     '台州':[121.420757,28.656386],
//     '南京':[118.78,32.04],
//     '滨州':[118.03,37.36],
//     '贵阳':[106.71,26.57],
//     '无锡':[120.29,31.59],
//     '本溪':[123.73,41.3],
//     '克拉玛依':[84.77,45.59],
//     '渭南':[109.5,34.52],
//     '马鞍山':[118.48,31.56],
//     '宝鸡':[107.15,34.38],
//     '焦作':[113.21,35.24],
//     '句容':[119.16,31.95],
//     '北京':[116.46,39.92],
//     '徐州':[117.2,34.26],
//     '衡水':[115.72,37.72],
//     '包头':[110,40.58],
//     '绵阳':[104.73,31.48],
//     '乌鲁木齐':[87.68,43.77],
//     '枣庄':[117.57,34.86],
//     '杭州':[120.19,30.26],
//     '淄博':[118.05,36.78],
//     '鞍山':[122.85,41.12],
//     '溧阳':[119.48,31.43],
//     '库尔勒':[86.06,41.68],
//     '安阳':[114.35,36.1],
//     '开封':[114.35,34.79],
//     '济南':[117,36.65],
//     '德阳':[104.37,31.13],
//     '温州':[120.65,28.01],
//     '九江':[115.97,29.71],
//     '邯郸':[114.47,36.6],
//     '临安':[119.72,30.23],
//     '兰州':[103.73,36.03],
//     '沧州':[116.83,38.33],
//     '临沂':[118.35,35.05],
//     '南充':[106.110698,30.837793],
//     '天津':[117.2,39.13],
//     '富阳':[119.95,30.07],
//     '泰安':[117.13,36.18],
//     '诸暨':[120.23,29.71],
//     '郑州':[113.65,34.76],
//     '哈尔滨':[126.63,45.75],
//     '聊城':[115.97,36.45],
//     '芜湖':[118.38,31.33],
//     '唐山':[118.02,39.63],
//     '平顶山':[113.29,33.75],
//     '邢台':[114.48,37.05],
//     '德州':[116.29,37.45],
//     '济宁':[116.59,35.38],
//     '荆州':[112.239741,30.335165],
//     '宜昌':[111.3,30.7],
//     '义乌':[120.06,29.32],
//     '丽水':[119.92,28.45],
//     '洛阳':[112.44,34.7],
//     '秦皇岛':[119.57,39.95],
//     '株洲':[113.16,27.83],
//     '石家庄':[114.48,38.03],
//     '莱芜':[117.67,36.19],
//     '常德':[111.69,29.05],
//     '保定':[115.48,38.85],
//     '湘潭':[112.91,27.87],
//     '金华':[119.64,29.12],
//     '岳阳':[113.09,29.37],
//     '长沙':[113,28.21],
//     '衢州':[118.88,28.97],
//     '廊坊':[116.7,39.53],
//     '菏泽':[115.480656,35.23375],
//     '合肥':[117.27,31.86],
//     '武汉':[114.31,30.52],
//     '大庆':[125.03,46.58]
// };


//   public convertData(data:Array<any>): Array<any>{
//       var res = [];
//       for (var i = 0; i < data.length; i++) {
//           var geoCoord = this.geoCoordMap[data[i].name];
//           if (geoCoord) {
//               res.push({
//                   name: data[i].name,
//                   value: geoCoord.concat(data[i].value),
//                   explain:data[i].explain
//               })
//           }
//       }
//       debugger
//       return res;
//   }
  
//   public renderItem(params, api):object {
//       var coords = [
//           [104.06,30.67],
//           [106.54,29.59],
//           [120.19,30.26],
//           [120.58,30.01],
//           [114.07,22.62],
//           [113.52,22.3],
//           [113.38,22.52],
//           [102.73,25.04],
//           [102.52,24.35]
//       ];
//       var points = [[396,248],
//                     [430,264],
//                     [615,254],
//                     [621,258],
//                     [532,369],
//                     [525,374],
//                     [523,371],
//                     [378,334],
//                     [375,344]];

//     //   for (var i = 0; i < coords.length; i++) {
//     //       points.push(api.coord(coords[i]));
//     //   }
//     //   var color = api.visual('color');
//     var color = "#c23531";
//       return {
//           type: 'polygon',
//           shape: {
//               points: echarts.graphic.clipPointsByRect(points, {
//                   x: params.coordSys.x,
//                   y: params.coordSys.y,
//                   width: params.coordSys.width,
//                   height: params.coordSys.height
//               })
//           },
//           style: api.style({
//               fill: color,
//               stroke: echarts.color.lift(color)
//           })
//       };
//   }

    
//   option = {
//     backgroundColor: '#404a59',
//     title: {
//         text: '行走过的城市',
//         subtext: '个人足步',
//         sublink: '',
//         left: 'center',
//         textStyle: {
//             color: '#fff'
//         }
//     },
//     tooltip : {
//         trigger: 'item'
//     },
//     bmap: {
//         center: [104.114129, 37.550339],
//         zoom: 5,
//         roam: true,
//         mapStyle: {
//             styleJson: [
//                     {
//                         "featureType": "water",
//                         "elementType": "all",
//                         "stylers": {
//                             "color": "#fff "
//                         }
//                     },
//                     {
//                         "featureType": "land",
//                         "elementType": "all",
//                         "stylers": {
//                             "color": "#004981"
//                         }
//                     },
//                     {
//                         "featureType": "boundary",
//                         "elementType": "geometry",
//                         "stylers": {
//                             "color": "#ff0000"
//                         }
//                     },
//                     {
//                         "featureType": "railway",
//                         "elementType": "all",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "highway",
//                         "elementType": "geometry",
//                         "stylers": {
//                             "color": "#004981"
//                         }
//                     },
//                     {
//                         "featureType": "highway",
//                         "elementType": "geometry.fill",
//                         "stylers": {
//                             "color": "#005b96",
//                             "lightness": 1
//                         }
//                     },
//                     {
//                         "featureType": "highway",
//                         "elementType": "labels",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "arterial",
//                         "elementType": "geometry",
//                         "stylers": {
//                             "color": "#004981"
//                         }
//                     },
//                     {
//                         "featureType": "arterial",
//                         "elementType": "geometry.fill",
//                         "stylers": {
//                             "color": "#00508b"
//                         }
//                     },
//                     {
//                         "featureType": "poi",
//                         "elementType": "all",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "green",
//                         "elementType": "all",
//                         "stylers": {
//                             "color": "#056197",
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "subway",
//                         "elementType": "all",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "manmade",
//                         "elementType": "all",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "local",
//                         "elementType": "all",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "arterial",
//                         "elementType": "labels",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     },
//                     {
//                         "featureType": "boundary",
//                         "elementType": "geometry.fill",
//                         "stylers": {
//                             "color": "#029fd4"
//                         }
//                     },
//                     {
//                         "featureType": "building",
//                         "elementType": "all",
//                         "stylers": {
//                             "color": "#1a5787"
//                         }
//                     },
//                     {
//                         "featureType": "label",
//                         "elementType": "all",
//                         "stylers": {
//                             "visibility": "off"
//                         }
//                     }
//             ]
//         }
//     },
//     series : [
//         {
//             name: '足迹',
//             type: 'scatter',
//             coordinateSystem: 'bmap',
//             data: this.convertData(this.data),
//             symbolSize: function (val) {
//                 return val[2] /10;
//             },
//             label: {
//                 normal: {
//                     formatter: '{b}',
//                     position: 'right',
//                     show: false
//                 },
//                 emphasis: {
//                     show: true
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     color: '#ddb926'
//                 }
//             }
//         },
//         {   
//             name: '行走过的城市之',
//             type: 'effectScatter',
//             coordinateSystem: 'bmap',
//             data: this.convertData(this.data.sort(function (a, b) {
//                 return b.value - a.value;
//             }).slice(0, 9)),
//             symbolSize: function (val) {
//                 return val[2] / 13;
//             },
//             showEffectOn: 'emphasis',
//             rippleEffect: {
//                 brushType: 'stroke'
//             },
//             hoverAnimation: true,
//             label: {
//                 normal: {
//                     formatter: '{b}',
//                     position: 'right',
//                     show: true
//                 }
//             },
//             itemStyle: {
//                 normal: {
//                     color: '#f4e925',
//                     shadowBlur: 5,
//                     shadowColor: '#333'
//                 }
//             },
//             zlevel: 1
//         },
//         {
//             type: 'custom',
//             coordinateSystem: 'bmap',
//             renderItem: this.renderItem,
//             itemStyle: {
//                 normal: {
//                     opacity: 0.6
//                 }
//             },
//             animation: true,
//             silent: true,
//             data: [0],
//             z: -10
//         }
//     ]
// };


}
