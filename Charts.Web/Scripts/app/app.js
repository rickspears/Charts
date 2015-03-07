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
          }]);
}());