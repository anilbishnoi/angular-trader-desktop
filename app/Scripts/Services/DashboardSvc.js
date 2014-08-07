/**
 * Brokerage accounts service
 *
 * @authors
 * Anil Bishnoi
 */

angular.module('bullsfirst')
    .factory('DashboardSvc', function ($http) {
    var DashboardService = {
        getAccounts: function () {
            // $http returns a 'accounts'
            var accounts = $http.get("../app/data/brokerage_accounts.json")
                .then(function (response) {
                    return response.data;
                });

            return accounts;
        }
    };

    return DashboardService;
});