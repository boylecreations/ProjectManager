bcApp.directive('bcProject', function() {
  return {
    restrict: 'A',
    require: '^ngModel',
    scope: {
      ngClient: '@',
      ngTitle: '@',

    },
    template: '<div class="sparkline"><h4>Weather for </h4></div>'
  }
});
