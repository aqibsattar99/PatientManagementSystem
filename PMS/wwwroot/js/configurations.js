$(document).ready(function () {

    // Datatables 
    $('#myTable').DataTable({
        ordering: true
    });


    // Toggle Sidebar
    const sidebarToggle = $('#sidebarToggle');
    if (sidebarToggle.length > 0) {
        sidebarToggle.on('click', function (event) {
            event.preventDefault();
            $('body').toggleClass('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', $('body').hasClass('sb-sidenav-toggled'));
        });
    }


    // Assign Date to Date Fields
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    $('input[type="date"]').val(today);


    // Get Last Month Date
    var today = new Date();
    var lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    var dd = String(lastMonth.getDate()).padStart(2, '0');
    var mm = String(lastMonth.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = lastMonth.getFullYear();
    var lastMonthDateString = yyyy + '-' + mm + '-' + dd;
    $("#reportdatefrom").val(lastMonthDateString);


   
    $('#vehicleselect').select2();

});
