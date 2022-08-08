// 监控区域模块制作做
(function () {
  $(".monitor .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");
    // 点击当前小a 让对应的content盒子显示
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });
  // 鲜客隆marquee里面所有的行(row)
  $(".marquee-view .marquee").each(function () {
    let rows = $(this).children().clone();
    $(this).append(rows);
  });
})();
// 点位分布统计
(function () {
  // 实例化
  let myChart = echarts.init(document.querySelector(".pie"));
  // 添加数据
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5,
        },
        // 文字调整
        label: {
          fontsize: 10,
        },
        // 引导线调整
        labelLine: {
          // 链接扇形图线长
          length: 6,
          // 链接文字图线长
          length2: 8,
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],
      },
    ],
  };
  // 追加给实例化对象
  myChart.setOption(option);
  // 监听吧浏览器缩放, 图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 全国用户总量统计模块
(function () {
  // 实例化对象
  let myChart = echarts.init(document.querySelector(".bar"));
  // 配置项
  //自定义每一个柱条的样式
  var item = {
    value: 1000,
    itemStyle: {
      color: "#254065",
      opacity: 0.6,
    },
  };

  var option = {
    // 图例颜色
    color: ["#3398DB"],
    //鼠标移入后的提示
    tooltip: {
      // trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: "line", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    //相当于图例内边距
    grid: {
      left: "3%",
      right: "4%",
      bottom: "13%",
      containLabel: true,
    },
    //x轴相关的
    xAxis: [
      {
        //坐标轴类型
        type: "category",
        //数据
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        //坐标轴刻度相关设置。
        axisTick: {
          //是否显示坐标轴刻度
          show: false, //不显示
          alignWithLabel: true,
        },
        //轴线的颜色
        axisLine: {
          show: true,
          lineStyle: {
            color: "#063a4b",
          },
        },
        //轴线文字的颜色,如果不写就和轴线颜色一样
        axisLabel: {
          show: true,
          color: "#4c9bfd",
        },
      },
    ],
    //y轴相关的
    yAxis: [
      {
        //坐标轴类型:适用于连续数据
        type: "value",
        //轴线的设置
        axisLine: {
          show: true,
          lineStyle: {
            color: "#063a4b",
          },
        },
        //轴线文字的颜色,如果不写就和轴线颜色一样
        axisLabel: {
          show: true,
          color: "#4c9bfd",
        },
        splitLine: {
          lineStyle: {
            color: "#005666",
          },
        },
      },
      {},
    ],
    //图例设置
    series: [
      {
        name: "总量统计",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
        //渐变色
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#00fbfa",
            },
            {
              offset: 1,
              color: "#0065cf",
            },
          ]),
        },
      },
    ],
  };
  // 3.3 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
})();

// 销售额统计模块
(function () {
  // 实例化对象
  let myChart = echarts.init(document.querySelector(".line"));
  // 模拟后端拿到数据
  var data = [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 464, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    [
      [223, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 223, 378, 21, 82, 64, 43, 60, 19, 134],
    ],
    [
      [34, 87, 32, 176, 98, 12, 32, 87, 139, 36, 129, 36],
      [56, 43, 98, 21, 356, 87, 243, 12, 43, 54, 12, 98],
    ],
    [
      [43, 273, 262, 54, 91, 54, 184, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 393, 54, 254, 24],
    ],
  ];
  // 配置参数
  let option = {
    // title: {
    //   text: '单位 万',
    //   textStyle: {
    //     color: '#4996f5',
    //     fontSize: 12
    //   },
    //   top: 10
    // },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["最高气温", "最低气温"],
      textStyle: {
        color: "#4b99fa",
      },
      right: 5,
      top: 10,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#4590ed",
      },
      axisLine: {
        lineStyle: {
          color: "#012b48",
        },
      },
    },
    yAxis: {
      type: "value",
      max: 500,
      minInterval: 100,
      axisLabel: {
        color: "#4590ed",
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "#012b48",
        },
      },
    },

    series: [
      {
        name: "最高气温",
        smooth: true,
        type: "line",
        data: [100, 122, 45, 98, 130, 221, 456],
        itemStyle: {
          color: "#00f2f1",
        },
        symbolSize: 8,
      },
      {
        name: "最低气温",
        smooth: true,
        type: "line",
        data: [220, 182, 191, 234, 290, 330, 310],
        itemStyle: {
          color: "#c43938",
        },
        symbolSize: 8,
      },
    ],
  };
  // 配置给实例化对象
  myChart.setOption(option);
  // 声明一个变量记录索引
  let index = 0;
  // 声明一个计时器
  setInterval(function () {
    // 1. 数组下标++ , 切换数据
    index++;
    if (index > 3) {
      // 数组最大下标为3
      index = 0;
    }
    // 2. 替换数据
    option.series[0].data = data[index][0];
    option.series[1].data = data[index][1];
    // 3. 重新渲染echarts图表
    myChart.setOption(option);
  }, 2000);
})();

// 3.2 销售进度
(function () {
  // 初始化实例对象
  let myChart = echarts.init(document.querySelector(".gauge"));
  // 配置参数
  let option = {
    // 图例本身
    series: [
      {
        name: "访问来源",
        type: "pie",
        // 内半径和外半径
        radius: ["90%", "110%"],
        // 偏移
        center: ["50%", "70%"],
        // 是否启用钢制标签重叠策略
        avoidLabelOverlap: false,
        // 开始的角度, 默认开始的角度是90度
        startAngle: 180,
        // 控制线条
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 100,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#00c3de",
                },
                {
                  offset: 1,
                  color: "#0065c3",
                },
              ]),
            },
          },
          {
            value: 100,
            itemStyle: {
              color: "red",
              opacity: 0.2,
            },
          },
          {
            value: 200,
            itemStyle: {
              color: "transparent",
            },
          },
        ],
      },
    ],
  };
  // 将配置参数追加给实例化对象
  myChart.setOption(option);
})();

// 全国热销
// 模拟从后端返回数据
let hotData = [
  { name: "可爱多", num: "9086" },
  { name: "哇哈哈", num: "8341" },
  { name: "喜之郎", num: "7407" },
  { name: "八喜", num: "6080" },
  { name: "小洋人", num: "6724" },
  { name: "好多鱼", num: "2170" },
];
// 给ul 里面的li绑定鼠标移入事件
$(".top .sup").on("mouseenter", "li", function () {
  // 当前兄弟添加active类, 其余兄弟移除类
  $(this).addClass("active").siblings("li").removeClass("active");
  //hotData.shift()  数组shift方法会删除数组元素,并把这个删除的元素返回
  // 给数组末尾添加元素
  hotData.push(hotData.shift());

  // 重新给ul这个标签设置内容
  let str = "";
  for (let i = 0; i < hotData.length; i++) {
    str += `<li><span>${hotData[i].name}</span><b>${hotData[i].num}</b><i class="icon-up" style="color:#dc3c33"></i></li>`;
    // 把这个str 追加给ul
    $(".sub").html(str);
  }
});

// 2.1 中国地图
(function () {
  // 实例化对象
  let myChart = echarts.init(document.querySelector(".chart .geo"));
  // 准备地图表的配置项和参数
  let geoCoordMap = {
    新疆玛纳斯基地: [86.22, 44.3],
    九江: [116.0, 29.7],
    新乡: [116.402217, 35.311657],
    " ": [79.92, 37.12],
    "  ": [86.85, 47.7],
    若羌县: [88.17, 39.02],
    上海: [121.4648, 31.2891],
    东莞: [113.9853, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4783, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
    彭林: [88.7964, 34.7028],
  };
  let BJData = [
    [
      {
        name: "新乡",
      },
      {
        name: "新乡",
        value: 200,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "呼和浩特",
        value: 90,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "哈尔滨",
        value: 90,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "石家庄",
        value: 90,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "昆明",
        value: 30,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "北京",
        value: 100,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "长春",
        value: 40,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "重庆",
        value: 40,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "贵阳",
        value: 50,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "南宁",
        value: 30,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "济南",
        value: 10,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "太原",
        value: 40,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "西安",
        value: 60,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "武汉",
        value: 50,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "合肥",
        value: 40,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "南京",
        value: 30,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "沈阳",
        value: 20,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "成都",
        value: 10,
      },
    ],
    [
      {
        name: "新乡",
      },
      {
        name: "彭林",
        value: 20,
      },
    ],
  ];
  let SHData = [
    [
      {
        name: "九江",
      },
      {
        name: "九江",
        value: 200,
      },
    ],

    [
      {
        name: "九江",
      },
      {
        name: "长沙",
        value: 95,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "武汉",
        value: 30,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "南昌",
        value: 20,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "合肥",
        value: 70,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "南京",
        value: 60,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "福州",
        value: 50,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "上海",
        value: 100,
      },
    ],
    [
      {
        name: "九江",
      },
      {
        name: "深圳",
        value: 100,
      },
    ],
  ];
  let GZData = [
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "新疆玛纳斯基地",
        value: 200,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "  ",
        value: 90,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: " ",
        value: 40,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "呼和浩特",
        value: 90,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "昆明",
        value: 40,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "成都",
        value: 10,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "兰州",
        value: 95,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "银川",
        value: 90,
      },
    ],
    [
      {
        name: "新疆玛纳斯基地",
      },
      {
        name: "西宁",
        value: 80,
      },
    ],
  ];
  let planePath =
    "path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705";

  let convertData = function (data) {
    let res = [];
    for (let i = 0; i < data.length; i++) {
      let dataItem = data[i];
      let fromCoord = geoCoordMap[dataItem[0].name];
      let toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };
  let color = ["#3ed4ff", "#ffa022", "#a6c84c"];
  let series = [];
  [
    ["新乡", BJData],
    ["九江", SHData],
    ["新疆", GZData],
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + "Top10",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "#fff",
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top10",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });

  let option = {
    backgroundColor: "#080a20",
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: ["北京 Top10", "上海 Top10", "广州 Top10"],
      textStyle: {
        color: "#fff",
      },
      selectedMode: "single",
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#132937",
          borderColor: "#0692a4",
        },
        emphasis: {
          areaColor: "#0b1c2d",
        },
      },
    },
    series: series,
  };

  // 将配置项指定给实例化对象
  myChart.setOption(option);
})();
