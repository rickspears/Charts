(function () {
  "use strict";

  angular
      .module("crudService",
              ["$http"])
  function crudService($http) {
    this.get = function() {
      return $http.get("/api/analytics");
    }
  }
}());