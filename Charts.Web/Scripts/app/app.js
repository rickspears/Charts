(function () {
  "use strict";
  var app = angular.module("chartDemo",
    ["common",
      "ui.router",
      "ui.mask",
      "ui.bootstrap",
      "angularCharts"]);

  app.config(["$stateProvider",
          "$urlRouterProvider",
          function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state("home", {
                  url: "/",
                  templateUrl: "Scripts/app/templates/index.html"
                })
                .state("itemList", {
                  url: "/items",
                  templateUrl: "Scripts/app/templates/items.html",
                  controller: "ItemListCtrl as vm"
                })
                .state("analytics", {
                  url: "/analytics",
                  templateUrl: "Scripts/app/templates/analytics.html",
                  controller: "AnalyticsCtrl",
                  resolve: {
                    itemResource: "itemResource",
                    items: function (itemResource) {
                      return itemResource.query(function (response) {
                        // no code needed for success
                      },
                      function (response) {
                        if (response.status == 404) {
                          alert("Error accessing resource: " +
                              response.config.method + " " + response.config.url);
                        } else {
                          alert(response.statusText);
                        }
                      }).$promise;
                    } 
                  }
                })
         .state("analyticstest", {
           url: "/analyticstest",
           views: {
             "": {
               templateUrl: "Scripts/app/analytics2/analytics.html"
             },
             "dailySales@analyticstest": { //template: '<div ac-chart="chartType" ac-data="dataAmount" ac-config="configAmount" class="chart"></div>',
               templateUrl: "Scripts/app/analytics2/charts.html",
               controller: "DailySalesController",
               resolve: {
                 itemResource: "itemResource",
                 items: function (itemResource) {
                   return itemResource.query(
                     function (response) { }).$promise;
                 }
               }
             },
             "dailyTotals@analyticstest": { 
               templateUrl: "Scripts/app/analytics2/charts2.html",
               controller: "DailyTotalsController",
               resolve: {
                 itemResource: "itemResource",
                 items: function (itemResource) {
                   return itemResource.query(function (response) {
                     // no code needed for success
                   },
                   function (response) {
                     if (response.status == 404) {
                       alert("Error accessing resource: " +
                           response.config.method + " " + response.config.url);
                     } else {
                       alert(response.statusText);
                     }
                   }).$promise;
                 }
               }
             },
             "dailyTable@analyticstest": { 
               templateUrl: "Scripts/app/analytics2/charts.html",
               controller: "DailyTableController",
               resolve: {
                 itemResource: "itemResource",
                 items: function (itemResource) {
                   return itemResource.query(function (response) {
                     // no code needed for success
                   },
                   function (response) {
                     if (response.status == 404) {
                       alert("Error accessing resource: " +
                           response.config.method + " " + response.config.url);
                     } else {
                       alert(response.statusText);
                     }
                   }).$promise;
                 }
               }
             }
           }
         })
          }]);
}());