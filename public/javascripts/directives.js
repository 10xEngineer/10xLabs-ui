'use strict';

/* Directives */

angular.module('ten.directives', []).
    directive('timeago',function () {
        return function (scope, elm, attrs) {
            scope.$watch('time', function () {
                $(elm).find('time').timeago();
            });
        };
    }).
    directive('servicefeed',function () {
        return function (scope, elm, attrs) {
            scope.$watch('ul', function () {
                $('.service-feed .messages-list').cycle(
                    {
                        fx:'scrollHorz',
                        easeIn:'easeOutQuart',
                        next:'.next-message-link',
                        prev:'.previous-message-link'
                    }
                );
            });
        };
    }).
    directive('importantMessagesTable',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/important-messages-table'
        }
    }).
    directive('labOverview',function () {
        console.log('lab overview');
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-overview'
        }
    }).
    directive('labCurrentState',function () {
        console.log('lab overview');
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-current-state'
        }
    }).
    directive('labTabs',function () {
        console.log('lab overview');
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-tabs'
        }
    }).
    directive('recentEventsList',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/recent-events-list'
        }
    }).
    directive('currentState',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-current-state'
        }
    }).
    directive('currentStateBox',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/current-state-box'
        }
    }).
    directive('labActions',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-actions'
        }
    }).
    directive('labActionBox',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-action-box'
        }
    }).
    directive('labPerformance',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/lab-performance'
        }
    }).
    directive('labsList',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/labs-list'
        }
    }).
    directive('notifications',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/notifications-list'
        }
    }).
    directive('serviceFeed',function () {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/service-feed'
        }
    }).
    directive('navbar',function ($location) {
        return {
            restrict:'E',
            replace:true,
            transclude:true,
            templateUrl:'/partials/navbar'
        }
    })
;