/**
 * Utils angularJS Factory
 */
angularAPP.factory('UtilsFactory', function ($rootScope, $http, $location, $q, $log) {

  // Sort arrays by key
  function sortByKey(array, key, reverse) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return ((x < y) ? -1 * reverse : ((x > y) ? 1 * reverse : 0));
    });
  }

  /* Public API */
  return {

    sortByKey: function (array, key, reverse) {
      return sortByKey(array, key, reverse);
    },
    IsJsonString: function (str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }

  }

});