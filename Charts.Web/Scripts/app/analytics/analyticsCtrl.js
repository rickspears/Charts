(function () {
  "use strict";
  angular
    .module("chartDemo")
    .controller("AnalyticsCtrl",
                    ["$scope",
                     "items",
                     AnalyticsCtrl]);

  function AnalyticsCtrl($scope, items) {
    $scope.title = "Analytics";

    var chartDataAmount = [];
    for (var i = 0; i< items.length; i++){
      chartDataAmount.push({
        x: items[i].name,
        y: [items[i].quantity]
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