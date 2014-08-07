
/**
 * Accounts controller
 *
 * @author Anil Bishnoi
 */


angular.module('bullsfirst')
    .controller('DashboardCtrl', function ($rootScope, $scope, $modal, DashboardSvc) {
  
        DashboardSvc.getAccounts()
            .then(function (asyncData) {
                $scope.accounts = asyncData;
            });

        $scope.addAccount= function() {

            var modalInstance = $modal.open({
                templateUrl: 'Views/modal/AddAccountModal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    items: function() {
                        return {};
                    }
                }
            });

            modalInstance.result.then(function(newItem) {

                var obj = {
                    'id': parseInt(newItem.id),
                    'name': 'Brokerage Account ' + newItem.name,
                    'marketValue': {
                        'amount': parseInt(newItem.marketValue.amount),
                        'currency': 'USD'
                    },
                    'cashPosition': {
                        'amount': parseInt(newItem.cashPosition.amount),
                        'currency': 'USD'
                    },
                    'lastUpdated': new Date()
                };

                $scope.accounts.push(obj);

                $rootScope.$broadcast('updateAccountEvent', $scope.accounts);
            });

        };

        /*
        * Delete the Row item
        */
        $scope.deleteAccount= function( idx ) {

            var acc = $scope.accounts[ idx ];
            
            $scope.accounts.splice( $scope.accounts.indexOf(acc), 1 );

            $rootScope.$broadcast('updateAccountEvent', $scope.accounts);
        };

        /*
        * Edit the Row item
        */
        $scope.editAccount= function( idx ) {

            var editItem = $scope.accounts[ idx ];

            var modalInstance = $modal.open({
                templateUrl: 'Views/modal/EditAccountModal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    items: function() {
                        return editItem;
                    }
                }
            });

            modalInstance.result.then(function(updateItem) {
                $rootScope.$broadcast('updateAccountEvent', $scope.accounts);
            });
            
        };

    });