var data = {
   labels: ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '00', '01', '02', '03', '04', '05', '06', '07'],
    series: [
                    [7686,5452,7805,11506,6482,13028,23364,74839,148409,165896,250343,264378,230944,202774,166853,139120,99474,88537,76961,74200,67005,70666,58477,70251,58201,51870,55575,45818,49258,70236,66714,68303,64501,65268,69886,81921,103144,103121,101523,131237,125726,134192,153675,137837,148039,141211,133960,181166,110507]
  ]
};

var options= {
    height: 300,
    showArea: true,
    showPoint: false,
    axisY: {
    // We can disable the grid for this axis
    showGrid: true,
    // and also don't show the label
    showLabel: false
  },
        axisX: {
    // We can disable the grid for this axis
    showGrid: false,
    // and also don't show the label
    showLabel: true,
        labelInterpolationFnc: function(value) {
      return '"' + value ;
    }
  },
    
};
        
var chart = new Chartist.Line('.ct-chart',data, options);
chart.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 2000 * data.index,
        dur: 5000,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});