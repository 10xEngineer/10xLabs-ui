'use strict';

/* Controllers */
function pageWithWidgetsController($scope, $resource, $location, $route) {
    console.log($route);
    /*
     $route.onChange(function () {
     self.params = $route.current.params;
     console.log($route.current.params);
     });
     */
    $scope.widgets = $resource('/api/widgets' + $location.path(),
        {
            format:'json', callback:'JSON_CALLBACK'
        },
        {
            get:{method:'JSONP'}
        }
    );
    $scope.load = function () {
        $scope.widgetsList = $scope.widgets.get();
    };
    $scope.load();
}
function homeController($scope, $resource) {
}
function navbarController($scope, $location) {
    $scope.isActive = function (route) {
        return route === $location.path();
    }
}