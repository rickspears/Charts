'use strict';

google.setOnLoadCallback(function () {
    angular.bootstrap(document.body, ['pizzaToppings'])
});
google.load('visualization', '1', { packages: ['corechart'] });

var pizzaToppings = pizzaToppings  || angular.module('pizzaToppings', ['google-chart']);

pizzaToppings.controller('ChartsCtrl', function ($scope) {
    $scope.toppings = {};
    $scope.toppings.dataTable = new google.visualization.DataTable();
    $scope.toppings.dataTable.addColumn('string', 'Topping');
    $scope.toppings.dataTable.addColumn('number', 'Count');
    $scope.toppings.dataTable.addRows([
        ['Extra Cheese', 2],
        ['Mushrooms', 3],
        ['Onions', 1],
        ['Olives', 10],
        ['Zucchini', 6],
        ['Pepperoni', 2]
    ]);
    $scope.toppings.title = "Pizza Toppings"
});