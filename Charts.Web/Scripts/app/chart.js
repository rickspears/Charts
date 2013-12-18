'use strict';

var googleChart = googleChart || angular.module("google-chart", []);

googleChart.directive("googleChart",function(){
    return {
        restrict : "A",
        link: function ($scope, $elem, $attr) {
            var table = $scope[$attr.ngModel].dataTable;

            var options = {};
            if ($scope[$attr.ngModel].title)
                options.title = $scope[$attr.ngModel].title;

            var googleChart = new google.visualization[$attr.googleChart]($elem[0]);
            googleChart.draw(table, options);
        }
    }
});