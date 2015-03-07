(function () {
  "use strict";
  angular
      .module("chartDemo")
      .controller("ItemListCtrl",
                  ["itemResource",
                      ItemListCtrl]);

  function ItemListCtrl(itemResource) {
    var vm = this;

    itemResource.query(function (data) {
      vm.items = data;
    });
  }
}());