// Vehicle Stats Bar
$.ajax({
    url: "/Dashboard/GetVehicleInformationChart",
    type: "POST",
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    success: function (Data) {

        // Extract labels and data for the chart
        var labels = Data.data.map(function (item) {
            return item.vehicleName;
        });
        var chartData = Data.data.map(function (item) {
            return item.count;
        });

        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#292b2c';

        // Bar Chart Example
        var ctx = document.getElementById("VehicleBarChart");
        var myLineChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: "Vehicles",
                    backgroundColor: "#006600", // rgba(2,117,216,1)
                    borderColor: "rgba(2,117,216,1)",
                    data: chartData,
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'month'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 6
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 15,
                            maxTicksLimit: 5
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });

    }


});


// Vehicle Fuel Stats
$.ajax({
    url: "/Dashboard/GetVehicleFuelChart",
    type: "POST",
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',

    success: function (Data) {

        // Extract labels and data for the chart
        var labels = Data.data.map(function (item) {
            return item.vehicleName;
        });
        var chartData = Data.data.map(function (item) {
            return item.totalFuel;
        });

        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#292b2c';

        // Bar Chart Example
        var ctx = document.getElementById("VehicleFuelChart");
        var myLineChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: "Vehicle",
                    backgroundColor: "#006600", // rgba(2,117,216,1)
                    borderColor: "rgba(2,117,216,1)",
                    data: chartData,
                }],
            },
            options: {
                scales: {
                    xAxes: [{
                        time: {
                            unit: 'Fuel'
                        },
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            maxTicksLimit: 15
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            min: 0,
                            max: 300,
                            maxTicksLimit: 10
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                },
                legend: {
                    display: false
                }
            }
        });

    }







});









// Declare the chart instance outside of the AJAX success callback
var myLineChart;

$('#timeframekm').change(function () {
    var selectedTimeFrame = $(this).val(); // Use jQuery to get the selected value

    function GetMonthName(monthNumber) {
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[monthNumber - 1];
    }

    $.ajax({
        url: "/Dashboard/GetVehicleKMInformationChart",
        type: "POST",
        data: { timeFrame: selectedTimeFrame }, // Send the selected time frame
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        success: function (Data) {
            // Destroy the old chart if it exists
            if (myLineChart) {
                myLineChart.destroy();
            }

            var labels, chartData;


            if (selectedTimeFrame == "Yearly") {
                labels = Data.data.map(function (item) {
                    var parts = item.label.split('-');
                    var year = parts[0];
                    var monthNumber = parseInt(parts[1], 10);
                    var monthName = GetMonthName(monthNumber);
                    return year + '-' + monthName;
                });
                chartData = Data.data.map(function (item) {
                    return item.totalKM;
                });

            } else if (selectedTimeFrame == "Monthly") {
                var today = new Date();
                var firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
                var lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);

                labels = [];
                for (var d = new Date(firstDay); d <= lastDay; d.setDate(d.getDate() + 1)) {
                    var formattedDate = d.toLocaleString('en-US', { month: 'short', day: '2-digit' });
                    labels.push(formattedDate);
                }

                chartData = labels.map(function (label) {
                    var item = Data.data.find(function (item) {
                        var date = new Date(item.label);
                        return date.toLocaleString('en-US', { month: 'short', day: '2-digit' }) === label;
                    });
                    return item ? item.totalKM : 0;
                });
            } else {

                var today = new Date();
                var labels = [];

                // Calculate the start date for the last 7 days
                var startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6);

                // Generate labels for the last 7 days
                for (var i = 0; i < 7; i++) {
                    var date = new Date(startDate);
                    date.setDate(startDate.getDate() + i);
                    var formattedDate = date.toLocaleString('en-US', { month: 'short', day: '2-digit' });
                    labels.push(formattedDate);
                }

                // Reverse the labels to show the most recent day first
                labels.reverse();

                chartData = labels.map(function (label) {
                    var item = Data.data.find(function (item) {
                        var date = new Date(item.label);
                        return date.toLocaleString('en-US', { month: 'short', day: '2-digit' }) === label;
                    });
                    return item ? item.totalKM : 0;
                });

            }



            // Set new default font family and font color to mimic Bootstrap's default styling
            Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
            Chart.defaults.global.defaultFontColor = '#292b2c';

            // Bar Chart Example
            var ctx = document.getElementById("RouteBarChart");
            myLineChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: "KiloMeters",
                        backgroundColor: "#006600",
                        borderColor: "rgba(2,117,216,1)",
                        data: chartData,
                    }],
                },
                options: {
                    scales: {
                        xAxes: [{
                            time: {
                                unit: selectedTimeFrame === "Yearly" ? "Monthly" : (selectedTimeFrame === "Weekly" ? 'day' : 'day')
                            },
                            gridLines: {
                                display: false
                            },
                            ticks: {
                                maxTicksLimit: selectedTimeFrame === "Yearly" ? 12 : (selectedTimeFrame === "Weekly" ? 7 : 31)
                            }
                        }],


                        yAxes: [{
                            ticks: {
                                min: 0,
                                max: 500,
                                maxTicksLimit: 12
                            },
                            gridLines: {
                                display: true
                            }
                        }],
                    },
                    legend: {
                        display: false
                    }
                }
            });



        }
    });
});

// Trigger the change event on page load to load the chart with weekly data by default
$(document).ready(function () {
    $('#timeframekm').val('Weekly').trigger('change');
});

