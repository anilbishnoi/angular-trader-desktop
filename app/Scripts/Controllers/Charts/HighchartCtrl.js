//See: https://github.com/pablojim/highcharts-ng

angular.module('bullsfirst')
    .controller('HighchartCtrl', function ($rootScope, $scope, DashboardSvc) {

        DashboardSvc.getAccounts()
            .then(function (asyncData) {
                var allAccounts = asyncData;

                $scope.chartData = $scope.createDataForChart(allAccounts);

                $scope.updateChart();
            });

        $scope.createDataForChart = function( rawData ) {

            if(rawData) {

                var chartData = [],
                    len = rawData.length;

                for (i=0; i<len; i++) {
                    chartData.push({
                        name: rawData[i].name,
                        y: parseFloat(rawData[i].marketValue.amount),
                        id: rawData[i].id + '_' + i
                    });
                }

                return chartData;
            }
            else {
            
                return [];
            
            }
        },

        $scope.$on('updateAccountEvent', function (event, data) {

                $scope.chartData = $scope.createDataForChart(data);

                $scope.updateChart();

        });

        $scope.updateChart = function() {

            $scope.highchartsNG = {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                title: {
                    text: 'All accounts'
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            color: '#000000',
                            connectorColor: '#000000',
                            format: ''
                        }
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Accounts Chart',
                    data: $scope.chartData
                }],
                loading: false
            };
        };

});