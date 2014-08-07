
angular.module('bullsfirst')
    .controller('ModalInstanceCtrl', function ($rootScope, $scope, $modalInstance, items) {

		$scope.newAccount = items || {};

		$scope.add = function() {
		    $modalInstance.close($scope.newAccount);
		};

		$scope.cancel = function() {
		    $modalInstance.dismiss(false);
		};
		
		$scope.edit = function() {
		    $modalInstance.close($scope.newAccount);
		};
	});