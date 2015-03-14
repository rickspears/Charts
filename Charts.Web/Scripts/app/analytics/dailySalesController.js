(function () {
  "use strict";
  angular
    .module("chartDemo")
    .controller("DailySalesController",
                    ["$scope",
                     "items",
                     DailySalesController]);

  function DailySalesController($scope, items) {
    $scope.title = "Analytics";
    $scope.chartType = 'bar';
    var chartDataAmount = [];
    for (var i = 0; i < items.length; i++) {
      chartDataAmount.push({
        x: items[i].name,
        y: [items[i].quantity+50]
      });
    }

    $scope.dataAmount = {
      series: ["Topping", "Count"],
      data: chartDataAmount
    };

    $scope.configAmount = {
      title: "Pizza Topping Count",
      tooltips: true,
      labels: false,
      mouseover: function () { },
      mouseout: function () { },
      click: function () { },
      legend: {
        display: true,
        position: "right"
      }
    };
  };
}());