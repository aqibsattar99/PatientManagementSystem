$(document).ready(function () {

    // Initialize DataTable variable outside of the click event handler
    var vehoildetailTable;

    // Getting List of Vehicle Oil Data
    $(".view-vehoil").click(function () {
        var OilId = $(this).attr('id');
        $('#modal-oildetail').modal('show');

        // Check if DataTable is already initialized
        if (!vehoildetailTable) {
            // DataTable not initialized, initialize it
            vehoildetailTable = $('#vehoildetailtbl').DataTable({
                "ajax": {
                    "url": "/Dashboard/GetByIDOil",
                    "type": "POST",
                    "data": { Id: OilId }
                },
                "columns": [
                    {
                        "data": null, "render": function (data, type, row, meta) {
                            // Render serial number starting from 1
                            return meta.row + 1;
                        }
                    },
                    { "data": "oilName" },
                    { "data": "oilType" },
                    { "data": "sOilChngDate" },
                    { "data": "oilChngReading" },
                    { "data": "sNxtOilChngDate" },
                    { "data": "nxtOilChngReading" },
                ],
                "columnDefs": [
                    { "orderable": false, "targets": 0 } // Disable sorting for serial number column
                ]
            });
        } else {
            // DataTable already initialized, just reload data
            vehoildetailTable.ajax.url("/Dashboard/GetByIDOil").load();
        }
    });

    $('#modal-oildetail .close').click(function () {
        $('#modal-oildetail').modal('hide');
    });













    // Initialize DataTable variable outside of the click event handler
    var vehtyredetailTable;

    // Getting List of Vehicle Tyre Data
    $(".view-vehtyre").click(function () {
        var TyreId = $(this).attr('id');
        $('#modal-vehtyre').modal('show');

        // Check if DataTable is already initialized
        if (!vehtyredetailTable) {
            // DataTable not initialized, initialize it
            vehtyredetailTable = $('#vehtyredetail').DataTable({
                "ajax": {
                    "url": "/Dashboard/GetByIDTyre",
                    "type": "POST",
                    "data": { Id: TyreId }
                },
                "columns": [
                    {
                        "data": null, "render": function (data, type, row, meta) {
                            // Render serial number starting from 1
                            return meta.row + 1;
                        }
                    },
                    { "data": "tyreName" },
                    { "data": "sTyreChngDate" },
                    { "data": "tyreChngReading" },
                    { "data": "sNxtTyreChngDate" },
                    { "data": "nxtTyreChngReading" }
                ],
                "columnDefs": [
                    { "orderable": false, "targets": 0 } // Disable sorting for serial number column
                ]
            });
        } else {
            // DataTable already initialized, just reload data
            vehtyredetailTable.ajax.url("/Dashboard/GetByIDTyre").load();
        }
    });

    $('#modal-vehtyre .close').click(function () {
        $('#modal-vehtyre').modal('hide');
    });


});
