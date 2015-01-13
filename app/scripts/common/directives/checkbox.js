/**
 * Created by rohitghatol on 1/12/15.
 */


angular.module('common',[])
    .directive('checkbox',[function () {
        return {
            restrict: 'E',

            scope: {
                check: '='
            },
            template: '<span class="col-md-1 glyphicon" ng-class="check?\'glyphicon-ok\': \'glyphicon-unchecked\'" ng-click="scope.check=!scope.check"></span>'

        }
    }]);

