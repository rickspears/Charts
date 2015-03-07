(function () {
  "use strict";

  angular
      .module("common")
      .factory("itemResource",
              ["$resource",
               itemResource]);

  function itemResource($resource) {
    return $resource("/api/analytics")
  }

}());