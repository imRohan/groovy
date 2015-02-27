$(document).ready(function () {
    $('#country_1').goalProgress({
        goalAmount: 100,
        currentAmount: 100,
        textBefore: '',
        textAfter: ''
    });
    $('#country_2').goalProgress({
        goalAmount: 100,
        currentAmount: 62,
        textBefore: '',
        textAfter: ''
    });
    $('#country_3').goalProgress({
        goalAmount: 100,
        currentAmount: 44,
        textBefore: '',
        textAfter: ''
    });
    $('#country_4').goalProgress({
        goalAmount: 100,
        currentAmount: 21,
        textBefore: '',
        textAfter: ''
    });
    $('#country_5').goalProgress({
        goalAmount: 100,
        currentAmount: 20,
        textBefore: '',
        textAfter: ''
    });
    $('#country_6').goalProgress({
        goalAmount: 100,
        currentAmount: 19,
        textBefore: '',
        textAfter: ''
    });
    $('#country_7').goalProgress({
        goalAmount: 100,
        currentAmount: 17,
        textBefore: '',
        textAfter: ''
    });


});
var data = {
    labels: ['60', '', '62', '', '64', '', '66', '', '68', '', '70', '', '72', '', '74', '', '76', '', '78', '', '80', '', '82', '', '84', '', '86', '', '88', '', '90', '', '92', '', '94', '', '96', '', '98', '', '00', '', '02', '', '04', '', '06', ''],
    series: [
                    [7686, 5452, 7805, 11506, 6482, 13028, 23364, 74839, 148409, 165896, 250343, 264378, 230944, 202774, 166853, 139120, 99474, 88537, 76961, 74200, 67005, 70666, 58477, 70251, 58201, 51870, 55575, 45818, 49258, 70236, 66714, 68303, 64501, 65268, 69886, 81921, 103144, 103121, 101523, 131237, 125726, 134192, 153675, 137837, 148039, 141211, 133960, 181166, 110507]
  ]
};

var options = {
    height: 300,
    showArea: true,
    showPoint: false,
    axisY: {
        showGrid: true,
        showLabel: false
    },
    axisX: {
        showGrid: false,
        showLabel: true,
        labelInterpolationFnc: function (value) {
            return '"' + value;
        }
    },

};

var chart = new Chartist.Line('.ct-chart', data, options);
chart.on('draw', function (data) {
    if (data.type === 'line' || data.type === 'area') {
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