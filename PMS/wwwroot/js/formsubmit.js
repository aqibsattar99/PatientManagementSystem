//==================//
// vehicle JS Code //
//================//
$(document).ready(function () {

    $("#btn-vehicle-add").click(function () {

        var vehicletypeid = $('#modal-vehicle #vehicletypeid').val();
        var makeid = $('#modal-vehicle #makeid').val();
        var modelid = $('#modal-vehicle #modelid').val();
        var modelyearid = $('#modal-vehicle #modelyearid').val();
        var colorid = $('#modal-vehicle #colorid').val();
        var licenseplateno = $('#modal-vehicle #licenseplateno').val();
        var chasisno = $('#modal-vehicle #chasisno').val();
        var fuelaverage = $('#modal-vehicle #fuelaverage').val();
        var registrationdate = $('#modal-vehicle #registrationdate').val();
        var enginetypeid = $('#modal-vehicle #enginetypeid').val();
        var enginecapacityid = $('#modal-vehicle #enginecapacityid').val();
        var description = $('#modal-vehicle #description').val();
       

        if (licenseplateno == "" || chasisno == "" || fuelaverage == "" || registrationdate == "" || description == "" ) {

            $('#modal-vehicle #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicle #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicle #WarningClose").click(function () { $('#modal-vehicle #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicle-add").text("Saving...");
            $.ajax({
                url: "/vehicle/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    vehicletypeid: vehicletypeid,
                    makeid: makeid,
                    modelid: modelid,
                    modelyearid: modelyearid,
                    colorid: colorid,
                    licenseplateno: licenseplateno,
                    chasisno: chasisno,
                    fuelaverage: fuelaverage,
                    registrationdate: registrationdate,
                    enginetypeid: enginetypeid,
                    enginecapacityid: enginecapacityid,
                    description: description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehicle input").val("");
                    $("#modal-vehicle textarea").val("");
                    $("#modal-vehicle select").val("");

                    // Alert Code
                    $('#modal-vehicle #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicle #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicle #SuccessClose").click(function () { $('#modal-vehicle #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicle-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });



    $(".vehicle-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehicle/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $('#modal-vehicle-edit #id').val(Id);
                $('#modal-vehicle-edit #vehicletypeid').val(Data.vehicleTypeId);
                $('#modal-vehicle-edit #makeid').val(Data.makeId);
                $('#modal-vehicle-edit #modelid').val(Data.modelId);
                $('#modal-vehicle-edit #modelyearid').val(Data.modelYearId);
                $('#modal-vehicle-edit #colorid').val(Data.colorId);
                $('#modal-vehicle-edit #licenseplateno').val(Data.licensePlateNo);
                $('#modal-vehicle-edit #chasisno').val(Data.chasisNo);
                $('#modal-vehicle-edit #fuelaverage').val(Data.fuelAverage);
                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dobParts = Data.registrationDate.split(" ")[0].split("-"); 
                var formattedDob = dobParts[0] + "-" + dobParts[1] + "-" + dobParts[2].substring(0, 2);
                $('#modal-vehicle-edit #registrationdate').val(formattedDob);
                // Date Code Ends
                $('#modal-vehicle-edit #enginetypeid').val(Data.engineTypeId);
                $('#modal-vehicle-edit #enginecapacityid').val(Data.engineCapacityId);
                $('#modal-vehicle-edit #description').val(Data.description);



                // Load Modal
                $('#modal-vehicle-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehicle-edit .close").click(function () {
        $("#modal-vehicle-edit").modal('hide');
    });

    $("#btn-vehicle-edit").click(function () {
        var Id = $('#modal-vehicle-edit #id').val();
        var vehicletypeid = $('#modal-vehicle-edit #vehicletypeid').val();
        var makeid = $('#modal-vehicle-edit #makeid').val();
        var modelid = $('#modal-vehicle-edit #modelid').val();
        var modelyearid = $('#modal-vehicle-edit #modelyearid').val();
        var colorid = $('#modal-vehicle-edit #colorid').val();
        var licenseplateno = $('#modal-vehicle-edit #licenseplateno').val();
        var chasisno = $('#modal-vehicle-edit #chasisno').val();
        var fuelaverage = $('#modal-vehicle-edit #fuelaverage').val();
        var registrationdate = $('#modal-vehicle-edit #registrationdate').val();
        var enginetypeid = $('#modal-vehicle-edit #enginetypeid').val();
        var enginecapacityid = $('#modal-vehicle-edit #enginecapacityid').val();
        var description = $('#modal-vehicle-edit #description').val();

        if (licenseplateno == "" || chasisno == "" || fuelaverage == "" || registrationdate == "" || description == "") {

            $('#modal-vehicle-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicle-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicle-edit #WarningClose").click(function () { $('#modal-vehicle-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicle-edit").text("Updating...");
            $.ajax({
                url: "/vehicle/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicletypeid: vehicletypeid,
                    makeid: makeid,
                    modelid: modelid,
                    modelyearid: modelyearid,
                    colorid: colorid,
                    licenseplateno: licenseplateno,
                    chasisno: chasisno,
                    fuelaverage: fuelaverage,
                    registrationdate: registrationdate,
                    enginetypeid: enginetypeid,
                    enginecapacityid: enginecapacityid,
                    description: description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehicle-edit input").val("");
                    $("#modal-vehicle-edit select").val("");
                    $("#modal-vehicle-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehicle-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicle-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicle-edit #SuccessClose").click(function () { $('#modal-vehicle-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicle-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehicle-edit").modal('hide');
                    }, 3000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});

//====================================//
// Vehicle Driver Assignment JS Code //
//==================================//
$(document).ready(function () {

    $("#btn-vehicledriverassignment-add").click(function () {
        var driverid = $('#modal-vehicledriverassignment #driverid').val();
        var vehicleid = $('#modal-vehicledriverassignment #vehicleid').val();
        var assigneddate = $('#modal-vehicledriverassignment #assigneddate').val();
        var assgnwithdrawaldate = $('#modal-vehicledriverassignment #assgnwithdrawaldate').val();
        
        if (driverid == "" || vehicleid == "" || assigneddate == "" || assgnwithdrawaldate == "") {

            $('#modal-vehicledriverassignment #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicledriverassignment #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicledriverassignment #WarningClose").click(function () { $('#modal-vehicledriverassignment #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicledriverassignment-add").text("Saving...");
            $.ajax({
                url: "/vehicledriverassignment/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    driverid: driverid,
                    vehicleid: vehicleid,
                    assigneddate: assigneddate,
                    assgnwithdrawaldate: assgnwithdrawaldate
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehicledriverassignment input").val("");
                    $("#modal-vehicledriverassignment textarea").val("");

                    // Alert Code
                    $('#modal-vehicledriverassignment #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicledriverassignment #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicledriverassignment #SuccessClose").click(function () { $('#modal-vehicledriverassignment #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicledriverassignment-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert(status, xhr, error + "Server Error !!!");
                }
            });
        }
    });

    $(".vehicledriverassignment-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehicledriverassignment/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-vehicledriverassignment-edit #id").val(Id);
                $('#modal-vehicledriverassignment-edit #driverid').val(Data.driverId);
                $('#modal-vehicledriverassignment-edit #vehicleid').val(Data.vehicleId);
                 
                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dobParts = Data.assignedDate.split(" ")[0].split("-");
                var formattedDob1 = dobParts[0] + "-" + dobParts[1] + "-" + dobParts[2].substring(0, 2);
                $('#modal-vehicledriverassignment-edit #assigneddate').val(formattedDob1);

                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dobParts = Data.assgnWithdrawalDate.split(" ")[0].split("-");
                var formattedDob2 = dobParts[0] + "-" + dobParts[1] + "-" + dobParts[2].substring(0, 2);
                $('#modal-vehicledriverassignment-edit #assgnwithdrawaldate').val(formattedDob2);

                // Load Modal
                $('#modal-vehicledriverassignment-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehicledriverassignment-edit .close").click(function () {
        $("#modal-vehicledriverassignment-edit").modal('hide');
    });

    $("#btn-vehicledriverassignment-edit").click(function () {
        var Id = $('#modal-vehicledriverassignment-edit #id').val();
        var driverid = $('#modal-vehicledriverassignment-edit #driverid').val();
        var vehicleid = $('#modal-vehicledriverassignment-edit #vehicleid').val();
        var assigneddate = $('#modal-vehicledriverassignment-edit #assigneddate').val();
        var assgnwithdrawaldate = $('#modal-vehicledriverassignment-edit #assgnwithdrawaldate').val();

        if (driverid == "" || vehicleid == "" || assigneddate == "" || assgnwithdrawaldate == "") {

            $('#modal-vehicledriverassignment-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicledriverassignment-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicledriverassignment-edit #WarningClose").click(function () { $('#modal-vehicledriverassignment-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicledriverassignment-edit").text("Updating...");
            $.ajax({
                url: "/vehicledriverassignment/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    driverid: driverid,
                    vehicleid: vehicleid,
                    assigneddate: assigneddate,
                    assgnwithdrawaldate: assgnwithdrawaldate
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehicledriverassignment-edit input").val("");
                    $("#modal-vehicledriverassignment-edit select").val("");
                    $("#modal-vehicledriverassignment-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehicledriverassignment-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicledriverassignment-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicledriverassignment-edit #SuccessClose").click(function () { $('#modal-vehicledriverassignment-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicledriverassignment-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehicledriverassignment-edit").modal('hide');
                    }, 3000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});

//======================//
// VehicleFuel JS Code //
//====================//
$(document).ready(function () {
   
        $("#btn-VehicleFuel-add").click(function () {
            var vehicleid = $('#modal-VehicleFuel #vehicleid').val();
            var fueltypeid = $('#modal-VehicleFuel #fueltypeid').val();
            var rateperliter = $('#modal-VehicleFuel #rateperliter').val();
            var liters = $('#modal-VehicleFuel #liters').val();
            var amount = $('#modal-VehicleFuel #amount').val();
            var fueldrawndate = $('#modal-VehicleFuel #fueldrawndate').val();
            var paymentid = $('#modal-VehicleFuel #paymentid').val();

            if (vehicleid == "" || fueltypeid == "" || rateperliter == "" || liters == "" || amount == "" || fueldrawndate == "" || paymentid == "") {

                $('#modal-VehicleFuel #AlertWarning').removeClass('d-none');
                setTimeout(function () { $('#modal-VehicleFuel #AlertWarning').addClass('d-none'); }, 1500);
                $("#modal-VehicleFuel #WarningClose").click(function () { $('#modal-VehicleFuel #AlertWarning').addClass('d-none'); });

            } else {

                $("#btn-VehicleFuel-add").text("Saving...");
                $.ajax({
                    url: "/VehicleFuel/Add",
                    type: "POST",
                    dataType: 'json',
                    data: {
                        vehicleid: vehicleid,
                        fueltypeid: fueltypeid,
                        rateperliter: rateperliter,
                        liters: liters,
                        amount: amount,
                        fueldrawndate: fueldrawndate,
                        paymentid: paymentid
                    },
                    success: function (response) {
                        // Clear Input Fields
                        $("#modal-VehicleFuel input").val("");
                        $("#modal-VehicleFuel textarea").val("");

                        // Alert Code
                        $('#modal-VehicleFuel #AlertSuccess').removeClass('d-none');
                        setTimeout(function () { $('#modal-VehicleFuel #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                        $("#modal-VehicleFuel #SuccessClose").click(function () { $('#modal-VehicleFuel #AlertSuccess').addClass('d-none'); });

                        // Button Text Change
                        $("#btn-VehicleFuel-add").text("Save");
                    },
                    error: function (xhr, status, error) {
                        alert("Server Error !!!");
                    }
                });
            }
        
        });

    $(".VehicleFuel-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/VehicleFuel/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {
                $("#modal-VehicleFuel-edit #id").val(Id);

                $('#modal-VehicleFuel-edit #vehicleid').val(Data.vehicleId);
                $('#modal-VehicleFuel-edit #fueltypeid').val(Data.fuelTypeId);
                $('#modal-VehicleFuel-edit #rateperliter').val(Data.ratePerLiter);
                $('#modal-VehicleFuel-edit #liters').val(Data.liters);
                $('#modal-VehicleFuel-edit #amount').val(Data.amount);

                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dobParts = Data.fuelDrawnDate.split(" ")[0].split("-");
                var formatteddate = dobParts[0] + "-" + dobParts[1] + "-" + dobParts[2].substring(0, 2);

                $('#modal-VehicleFuel-edit #fueldrawndate').val(formatteddate);


                $('#modal-VehicleFuel-edit #paymentid').val(Data.paymentId);





                // Load Modal
                $('#modal-VehicleFuel-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-VehicleFuel-edit .close").click(function () {
        $("#modal-VehicleFuel-edit").modal('hide');
    });



    $("#btn-VehicleFuel-edit").click(function () {
        var Id = $('#modal-VehicleFuel-edit #id').val();
        var vehicleid = $('#modal-VehicleFuel-edit #vehicleid').val();
        var fueltypeid = $('#modal-VehicleFuel-edit #fueltypeid').val();
        var rateperliter = $('#modal-VehicleFuel-edit #rateperliter').val();
        var liters = $('#modal-VehicleFuel-edit #liters').val();
        var amount = $('#modal-VehicleFuel-edit #amount').val();
        var fueldrawndate = $('#modal-VehicleFuel-edit #fueldrawndate').val();
        var paymentid = $('#modal-VehicleFuel-edit #paymentid').val();

        if (vehicleid == "" || fueltypeid == "" || rateperliter == "" || liters == "" || amount == "" || fueldrawndate == "" || paymentid == "") {

            $('#modal-VehicleFuel-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-VehicleFuel-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-VehicleFuel-edit #WarningClose").click(function () { $('#modal-VehicleFuel-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-VehicleFuel-edit").text("Updating...");
            $.ajax({
                url: "/VehicleFuel/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicleid: vehicleid,
                    fueltypeid: fueltypeid,
                    rateperliter: rateperliter,
                    liters: liters,
                    amount: amount,
                    fueldrawndate: fueldrawndate,
                    paymentid: paymentid
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-VehicleFuel-edit input").val("");
                    $("#modal-VehicleFuel-edit select").val("");
                    $("#modal-VehicleFuel-edit textarea").val("");

                    // Alert Code
                    $('#modal-VehicleFuel-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-VehicleFuel-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-VehicleFuel-edit #SuccessClose").click(function () { $('#modal-VehicleFuel-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-VehicleFuel-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-VehicleFuel-edit").modal('hide');
                    }, 3000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });



});

//============================//
// Vehicleinspection JS Code //
//==========================//
$(document).ready(function () {

    $("#btn-vehicleinspection-add").click(function () {
        var vehicleid = $('#modal-vehicleinspection #vehicleid').val();
        var inspectedby = $('#modal-vehicleinspection #inspectedby').val();
        var inspecteddate = $('#modal-vehicleinspection #inspecteddate').val();
        var nxtinspectnduedate = $('#modal-vehicleinspection #nextinspectionduedate').val();
        var remarks = $('#modal-vehicleinspection #remarks').val();
        if (vehicleid == "" || inspectedby == "" || inspecteddate == "" || nxtinspectnduedate == "" || remarks == "") {

            $('#modal-vehicleinspection #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicleinspection #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicleinspection #WarningClose").click(function () { $('#modal-vehicleinspection #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicleinspection-add").text("Saving...");
            $.ajax({
                url: "/vehicleinspection/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    vehicleid: vehicleid,
                    inspectedby: inspectedby,
                    inspecteddate: inspecteddate,
                    nxtinspectnduedate: nxtinspectnduedate,
                    remarks: remarks
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehicleinspection input").val("");
                    $("#modal-vehicleinspection textarea").val("");
                    $("#modal-vehicleinspection select").val("");

                    // Alert Code
                    $('#modal-vehicleinspection #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicleinspection #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicleinspection #SuccessClose").click(function () { $('#modal-vehicleinspection #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicleinspection-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".vehicleinspection-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehicleinspection/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-vehicleinspection-edit #id").val(Id);
                $('#modal-vehicleinspection-edit #vehicleid').val(Data.vehicleId);
                $('#modal-vehicleinspection-edit #inspectedby').val(Data.inspectedBy);


                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dateParts = Data.inspectedDate.split(" ")[0].split("-");
                var formatteddate1 = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2].substring(0, 2);
                $('#modal-vehicleinspection-edit #inspecteddate').val(formatteddate1);

                var dateParts = Data.nxtInspectnDueDate.split(" ")[0].split("-");
                var formatteddate2 = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2].substring(0, 2);
                $('#modal-vehicleinspection-edit #nextinspectionduedate').val(formatteddate2);
                $('#modal-vehicleinspection-edit #remarks').val(Data.remarks);



                // Load Modal
                $('#modal-vehicleinspection-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehicleinspection-edit .close").click(function () {
        $("#modal-vehicleinspection-edit").modal('hide');
    });

    $("#btn-vehicleinspection-edit").click(function () {
        var Id = $('#modal-vehicleinspection-edit #id').val();
        var vehicleid = $('#modal-vehicleinspection-edit #vehicleid').val();
        var inspectedby = $('#modal-vehicleinspection-edit #inspectedby').val();
        var inspecteddate = $('#modal-vehicleinspection-edit #inspecteddate').val();
        var nxtinspectnduedate = $('#modal-vehicleinspection-edit #nextinspectionduedate').val();
        var remarks = $('#modal-vehicleinspection-edit #remarks').val();
        if (vehicleid == "" || inspectedby == "" || inspecteddate == "" || nxtinspectnduedate == "") {
 
            $('#modal-vehicleinspection-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicleinspection-edit #AlertWarning').addClass('d-none'); }, 5000);
            $("#modal-vehicleinspection-edit #WarningClose").click(function () { $('#modal-vehicleinspection-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicleinspection-edit").text("Updating...");
            $.ajax({
                url: "/vehicleinspection/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicleid: vehicleid,
                    inspectedby: inspectedby,
                    inspecteddate: inspecteddate,
                    nxtinspectnduedate: nxtinspectnduedate,
                    remarks: remarks
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehicleinspection-edit input").val("");
                    $("#modal-vehicleinspection-edit select").val("");
                    $("#modal-vehicleinspection-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehicleinspection-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicleinspection-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicleinspection-edit #SuccessClose").click(function () { $('#modal-vehicleinspection-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicleinspection-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehicleinspection-edit").modal('hide');
                    }, 3000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});

//===============//
// vehicleoildetail JS Code //
//===============//
$(document).ready(function () {

    $("#btn-vehicleoildetail-add").click(function () {
        var vehicleid = $('#modal-vehicleoildetail #vehicleid').val();
        var oilid = $('#modal-vehicleoildetail #oilid').val();
        var oiltypeid = $('#modal-vehicleoildetail #oiltypeid').val();
        var oilchngdate = $('#modal-vehicleoildetail #oilchngdate').val();
        var oilchngreading = $('#modal-vehicleoildetail #oilchngreading').val();
        var nxtoilchngdate = $('#modal-vehicleoildetail #nxtoilchngdate').val();
        var nxtoilchngreading = $('#modal-vehicleoildetail #nxtoilchngreading').val();

        if (vehicleid == "" || oilid == "" || oiltypeid == "" || oilchngdate == "" || oilchngreading == "" || nxtoilchngdate == "" || nxtoilchngreading == "") {

            $('#modal-vehicleoildetail #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicleoildetail #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicleoildetail #WarningClose").click(function () { $('#modal-vehicleoildetail #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicleoildetail-add").text("Saving...");
            $.ajax({
                url: "/vehicleoildetail/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    vehicleid: vehicleid,
                    oilid: oilid,
                    oiltypeid: oiltypeid,
                    oilchngdate: oilchngdate,
                    oilchngreading: oilchngreading,
                    nxtoilchngdate: nxtoilchngdate,
                    nxtoilchngreading: nxtoilchngreading
                  
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehicleoildetail input").val("");
                    $("#modal-vehicleoildetail textarea").val("");
                    $("#modal-vehicleoildetail select").val("");

                    // Alert Code
                    $('#modal-vehicleoildetail #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicleoildetail #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicleoildetail #SuccessClose").click(function () { $('#modal-vehicleoildetail #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicleoildetail-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".vehicleoildetail-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehicleoildetail/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-vehicleoildetail-edit #id").val(Id);
                $('#modal-vehicleoildetail-edit #vehicleid').val(Data.vehicleId);
                $('#modal-vehicleoildetail-edit #oilid').val(Data.oilId);
                $('#modal-vehicleoildetail-edit #oiltypeid').val(Data.oilTypeId);

                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dateParts = Data.oilChngDate.split(" ")[0].split("-");
                var formatteddate1 = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2].substring(0, 2);
                $('#modal-vehicleoildetail-edit #oilchngdate').val(formatteddate1);
                $('#modal-vehicleoildetail-edit #oilchngreading').val(Data.oilChngReading);

                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dateParts = Data.nxtOilChngDate.split(" ")[0].split("-");
                var formatteddate2 = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2].substring(0, 2);
                $('#modal-vehicleoildetail-edit #nxtoilchngdate').val(formatteddate2);
                $('#modal-vehicleoildetail-edit #nxtoilchngreading').val(Data.nxtOilChngReading);
                
                // Load Modal
                $('#modal-vehicleoildetail-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehicleoildetail-edit .close").click(function () {
        $("#modal-vehicleoildetail-edit").modal('hide');
    });

    $("#btn-vehicleoildetail-edit").click(function () {
        var Id = $('#modal-vehicleoildetail-edit #id').val();
        var vehicleid = $('#modal-vehicleoildetail-edit #vehicleid').val();
        var oilid = $('#modal-vehicleoildetail-edit #oilid').val();
        var oiltypeid = $('#modal-vehicleoildetail-edit #oiltypeid').val();
        var oilchngdate = $('#modal-vehicleoildetail-edit #oilchngdate').val();
        var oilchngreading = $('#modal-vehicleoildetail-edit #oilchngreading').val();
        var nxtoilchngdate = $('#modal-vehicleoildetail-edit #nxtoilchngdate').val();
        var nxtoilchngreading = $('#modal-vehicleoildetail-edit #nxtoilchngreading').val();

        if (vehicleid == "" || oilid == "" || oiltypeid == "" || oilchngdate == "" || oilchngreading == "" || nxtoilchngdate == "" || nxtoilchngreading == "") {

            $('#modal-vehicleoildetail-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicleoildetail-edit #AlertWarning').addClass('d-none'); }, 5000);
            $("#modal-vehicleoildetail-edit #WarningClose").click(function () { $('#modal-vehicleoildetail-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicleoildetail-edit").text("Updating...");
            $.ajax({
                url: "/vehicleoildetail/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicleid: vehicleid,
                    oilid: oilid,
                    oiltypeid: oiltypeid,
                    oilchngdate: oilchngdate,
                    oilchngreading: oilchngreading,
                    nxtoilchngdate: nxtoilchngdate,
                    nxtoilchngreading: nxtoilchngreading
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehicleoildetail-edit input").val("");
                    $("#modal-vehicleoildetail-edit select").val("");
                    $("#modal-vehicleoildetail-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehicleoildetail-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicleoildetail-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 3000);
                    $("#modal-vehicleoildetail-edit #SuccessClose").click(function () { $('#modal-vehicleoildetail-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicleoildetail-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehicleoildetail-edit").modal('hide');
                    }, 3000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});

//===============//
// VehicleTyre JS Code //
//===============//
$(document).ready(function () {

    $("#btn-vehicletyre-add").click(function () {
        var vehicleid = $('#modal-vehicletyre #vehicleid').val();
        var tyreid = $('#modal-vehicletyre #tyreid').val();
        var tyrechngdate = $('#modal-vehicletyre #tyrechngdate').val();
        var tyrechngreading = $('#modal-vehicletyre #tyrechngreading').val();
        var nxttyrechngdate = $('#modal-vehicletyre #nxttyrechngdate').val();
        var nxttyrechngreading = $('#modal-vehicletyre #nxttyrechangereading').val();
        if (vehicleid == "" || tyreid == "" || tyrechngdate == "" || tyrechngreading == "" || nxttyrechngdate == "" || nxttyrechngreading == "") {

            $('#modal-vehicletyre #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicletyre #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicletyre #WarningClose").click(function () { $('#modal-vehicletyre #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicletyre-add").text("Saving...");
            $.ajax({
                url: "/vehicletyre/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    vehicleid: vehicleid,
                    tyreid: tyreid,
                    tyrechngdate: tyrechngdate,
                    tyrechngreading: tyrechngreading,
                    nxttyrechngdate: nxttyrechngdate,
                    nxttyrechngreading: nxttyrechngreading
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehicletyre input").val("");
                    $("#modal-vehicletyre textarea").val("");
                    $("#modal-vehicletyre select").val("");

                    // Alert Code
                    $('#modal-vehicletyre #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicletyre #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicletyre #SuccessClose").click(function () { $('#modal-vehicletyre #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicletyre-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".vehicletyre-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehicletyre/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

             
                $("#modal-vehicletyre-edit #id").val(Id);
                $('#modal-vehicletyre-edit #vehicleid').val(Data.vehicleId);
                $('#modal-vehicletyre-edit #tyreid').val(Data.tyreId);

                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dateParts = Data.tyreChngDate.split(" ")[0].split("-");
                var formatteddate1 = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2].substring(0, 2);
                $('#modal-vehicletyre-edit #tyrechngdate').val(formatteddate1);
                $('#modal-vehicletyre-edit #tyrechngreading').val(Data.tyreChngReading);

                // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                var dateParts = Data.nxtTyreChngDate.split(" ")[0].split("-");
                var formatteddate2 = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2].substring(0, 2);
                $('#modal-vehicletyre-edit #nxttyrechngdate').val(formatteddate2);
                $('#modal-vehicletyre-edit #nxttyrechangereading').val(Data.nxtTyreChngReading);


                // Load Modal
                $('#modal-vehicletyre-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehicletyre-edit .close").click(function () {
        $("#modal-vehicletyre-edit").modal('hide');
    });

    $("#btn-vehicletyre-edit").click(function () {
        var Id = $('#modal-vehicletyre-edit #id').val();
        var vehicleid = $('#modal-vehicletyre-edit #vehicleid').val();
        var tyreid = $('#modal-vehicletyre-edit #tyreid').val();
        var tyrechngdate = $('#modal-vehicletyre-edit #tyrechngdate').val();
        var tyrechngreading = $('#modal-vehicletyre-edit #tyrechngreading').val();
        var nxttyrechngdate = $('#modal-vehicletyre-edit #nxttyrechngdate').val();
        var nxttyrechngreading = $('#modal-vehicletyre-edit #nxttyrechangereading').val();
        if (vehicleid == "" || tyreid == "" || tyrechngdate == "" || tyrechngreading == "" || nxttyrechngdate == "" || nxttyrechngreading == "") {

      

            $('#modal-vehicletyre-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicletyre-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicletyre-edit #WarningClose").click(function () { $('#modal-vehicletyre-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicletyre-edit").text("Updating...");
            $.ajax({
                url: "/vehicletyre/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicleid: vehicleid,
                    tyreid: tyreid,
                    tyrechngdate: tyrechngdate,
                    tyrechngreading: tyrechngreading,
                    nxttyrechngdate: nxttyrechngdate,
                    nxttyrechngreading: nxttyrechngreading
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehicletyre-edit input").val("");
                    $("#modal-vehicletyre-edit select").val("");
                    $("#modal-vehicletyre-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehicletyre-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicletyre-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicletyre-edit #SuccessClose").click(function () { $('#modal-vehicletyre-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicletyre-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehicletyre-edit").modal('hide');
                    }, 3000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//===============//
// vehiclegnrlmntnce JS Code //
//===============//
$(document).ready(function () {

    $("#btn-vehiclegnrlmntnce-add").click(function () {
        var vehicleid = $('#modal-vehiclegnrlmntnce #vehicleid').val();
        var maintenanceamnt = $('#modal-vehiclegnrlmntnce #maintenanceamnt').val();
        var maintenancefrom = $('#modal-vehiclegnrlmntnce #maintenancefrom').val();
        var approvedby = $('#modal-vehiclegnrlmntnce #approvedby').val();
        var remarks = $('#modal-vehiclegnrlmntnce #remarks').val();

        if (vehicleid == "" || maintenanceamnt == "" || maintenancefrom == "" || approvedby == "" || remarks == "") {

            $('#modal-vehiclegnrlmntnce #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehiclegnrlmntnce #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehiclegnrlmntnce #WarningClose").click(function () { $('#modal-vehiclegnrlmntnce #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehiclegnrlmntnce-add").text("Saving...");
            $.ajax({
                url: "/vehiclegnrlmntnce/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    vehicleid: vehicleid,
                    maintenanceamnt: maintenanceamnt,
                    maintenancefrom: maintenancefrom,
                    approvedby: approvedby,
                    remarks: remarks
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehiclegnrlmntnce input").val("");
                    $("#modal-vehiclegnrlmntnce textarea").val("");

                    // Alert Code
                    $('#modal-vehiclegnrlmntnce #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehiclegnrlmntnce #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehiclegnrlmntnce #SuccessClose").click(function () { $('#modal-vehiclegnrlmntnce #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehiclegnrlmntnce-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".vehiclegnrlmntnce-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehiclegnrlmntnce/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-vehiclegnrlmntnce-edit #id").val(Id);


                $('#modal-vehiclegnrlmntnce-edit #vehicleid').val(Data.vehicleId);
                $('#modal-vehiclegnrlmntnce-edit #maintenanceamnt').val(Data.maintenanceAmnt);
                $('#modal-vehiclegnrlmntnce-edit #maintenancefrom').val(Data.maintenanceFrom);
                $('#modal-vehiclegnrlmntnce-edit #approvedby').val(Data.approvedBy);
                $('#modal-vehiclegnrlmntnce-edit #remarks').val(Data.remarks);

                // Load Modal
                $('#modal-vehiclegnrlmntnce-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehiclegnrlmntnce-edit .close").click(function () {
        $("#modal-vehiclegnrlmntnce-edit").modal('hide');
    });

    $("#btn-vehiclegnrlmntnce-edit").click(function () {
        var Id = $('#modal-vehiclegnrlmntnce-edit #id').val();
        var vehicleid = $('#modal-vehiclegnrlmntnce-edit #vehicleid').val();
        var maintenanceamnt = $('#modal-vehiclegnrlmntnce-edit #maintenanceamnt').val();
        var maintenancefrom = $('#modal-vehiclegnrlmntnce-edit #maintenancefrom').val();
        var approvedby = $('#modal-vehiclegnrlmntnce-edit #approvedby').val();
        var remarks = $('#modal-vehiclegnrlmntnce-edit #remarks').val();
        if (vehicleid == "" || maintenanceamnt == "" || maintenancefrom == "" || approvedby == "" || remarks == "") {

            $('#modal-vehiclegnrlmntnce-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehiclegnrlmntnce-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehiclegnrlmntnce-edit #WarningClose").click(function () { $('#modal-vehiclegnrlmntnce-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehiclegnrlmntnce-edit").text("Updating...");
            $.ajax({
                url: "/vehiclegnrlmntnce/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicleid: vehicleid,
                    maintenanceamnt: maintenanceamnt,
                    maintenancefrom: maintenancefrom,
                    approvedby: approvedby,
                    remarks: remarks
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehiclegnrlmntnce-edit input").val("");
                    $("#modal-vehiclegnrlmntnce-edit select").val("");
                    $("#modal-vehiclegnrlmntnce-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehiclegnrlmntnce-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehiclegnrlmntnce-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehiclegnrlmntnce-edit #SuccessClose").click(function () { $('#modal-vehiclegnrlmntnce-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehiclegnrlmntnce-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehiclegnrlmntnce-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//===============//
// mtroute JS Code //
//===============//
$(document).ready(function () {

    $("#btn-mtroute-add").click(function () {
        var vehicleid = $('#modal-mtroute #vehicleid').val();
        var driverid = $('#modal-mtroute #driverid').val();
        var routefrom = $('#modal-mtroute #routefrom').val();
        var routeto = $('#modal-mtroute #routeto').val();
        var distancekm = $('#modal-mtroute #distancekm').val();
        var fuelconsumedltrs = $('#modal-mtroute #fuelconsumedltrs').val();

        if (vehicleid == "" || driverid == "" || routefrom == "" || routeto == "" || distancekm == "" || fuelconsumedltrs == "") {

            $('#modal-mtroute #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-mtroute #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-mtroute #WarningClose").click(function () { $('#modal-mtroute #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-mtroute-add").text("Saving...");
            $.ajax({
                url: "/mtroute/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    vehicleid: vehicleid,
                    driverid: driverid,
                    routefrom: routefrom,
                    routeto: routeto,
                    distancekm: distancekm,
                    fuelconsumedltrs: fuelconsumedltrs
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-mtroute input").val("");
                    $("#modal-mtroute textarea").val("");

                    // Alert Code
                    $('#modal-mtroute #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-mtroute #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-mtroute #SuccessClose").click(function () { $('#modal-mtroute #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-mtroute-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".mtroute-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/mtroute/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-mtroute-edit #id").val(Id);

                $('#modal-mtroute-edit #vehicleid').val(Data.vehicleId);
                $('#modal-mtroute-edit #driverid').val(Data.driverId);
                $('#modal-mtroute-edit #routefrom').val(Data.routeFrom);
                $('#modal-mtroute-edit #routeto').val(Data.routeTo);
                $('#modal-mtroute-edit #distancekm').val(Data.distanceKM);
                $('#modal-mtroute-edit #fuelconsumedltrs').val(Data.fuelConsumedLtrs);

                // Load Modal
                $('#modal-mtroute-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-mtroute-edit .close").click(function () {
        $("#modal-mtroute-edit").modal('hide');
    });

    $("#btn-mtroute-edit").click(function () {
        var Id = $('#modal-mtroute-edit #id').val();
        var vehicleid = $('#modal-mtroute-edit #vehicleid').val();
        var driverid = $('#modal-mtroute-edit #driverid').val();
        var routefrom = $('#modal-mtroute-edit #routefrom').val();
        var routeto = $('#modal-mtroute-edit #routeto').val();
        var distancekm = $('#modal-mtroute-edit #distancekm').val();
        var fuelconsumedltrs = $('#modal-mtroute-edit #fuelconsumedltrs').val();

        if (vehicleid == "" || driverid == "" || routefrom == "" || routeto == "" || distancekm == "" || fuelconsumedltrs == "") {


            $('#modal-mtroute-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-mtroute-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-mtroute-edit #WarningClose").click(function () { $('#modal-mtroute-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-mtroute-edit").text("Updating...");
            $.ajax({
                url: "/mtroute/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    vehicleid: vehicleid,
                    driverid: driverid,
                    routefrom: routefrom,
                    routeto: routeto,
                    distancekm: distancekm,
                    fuelconsumedltrs: fuelconsumedltrs
                  },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-mtroute-edit input").val("");
                    $("#modal-mtroute-edit select").val("");
                    $("#modal-mtroute-edit textarea").val("");

                    // Alert Code
                    $('#modal-mtroute-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-mtroute-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-mtroute-edit #SuccessClose").click(function () { $('#modal-mtroute-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-mtroute-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-mtroute-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});

//=========================//
// Vehicle Report JS Code //
//=======================//

$("#printvehilereportbtn").hide();
$("#notice").show();
$("#vehilereportform").hide();


$("#getdatevalues").click(function () {
    var vehid = $("#vehicleselect").val();
    var dateto = $("#reportdateto").val();
    var datefrom = $("#reportdatefrom").val();
    if (vehid == "" || dateto == "" || datefrom == "") {
        alert("Fill Empty Fields!!!")
    } else {

        if (vehid == "") {
            $("#printvehilereportbtn").hide();
            $("#vehilereportform").hide();
            $("#notice").show();
        } else {
            $("#vehilereportform").show();
            $("#notice").hide();
            $.ajax({
                url: "/Report/GetSingle",
                type: "POST",
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                data: { Id: vehid, dateto: dateto, datefrom: datefrom },
                success: function (Data) {

                    // Vehile Detail
                    $("#vehilereportform #vehiclename").text(Data.vdata.name);
                    $("#vehilereportform #vehiclemake").text(Data.vdata.make);
                    $("#vehilereportform #vehiclemodel").text(Data.vdata.model);
                    $("#vehilereportform #modelyear").text(Data.vdata.modelYear);
                    $("#vehilereportform #license").text(Data.vdata.licensePlateNo);
                    $("#vehilereportform #enginetype").text(Data.vdata.engineType);
                    $("#vehilereportform #enginecapacity").text(Data.vdata.engineCapacity);
                    $("#vehilereportform #color").text(Data.vdata.color);
                    $("#vehilereportform #chasisno").text(Data.vdata.chasisNo);
                    $("#vehilereportform #fuelaverage").text(Data.vdata.fuelAverage);
                    $("#vehilereportform #registrationdate").text(Data.vdata.registrationDate);
                    $("#vehilereportform #description").text(Data.vdata.description);

                    // Driver Detail

                    $('#vehdrivertbl tbody').empty(); // Clear existing table rows
                    if (Data.ddata.length === 0) {
                        $('#vehdrivertbl tbody').append('<tr><td colspan="5" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var d = 0;
                        $.each(Data.ddata, function (index, item) {
                            d++;

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.assignedDate.split(" ")[0].split("-");
                            var driverassigndate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.assgnWithdrawalDate.split(" ")[0].split("-");
                            var assgnWithdrawalDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);

                            var Drvdata = '<tr><td>' + d + '</td><td>' + item.driverName + '</td><td>' + driverassigndate + '</td><td>' + assgnWithdrawalDate + '</td> </tr>';

                            $('#vehdrivertbl tbody').append(Drvdata);
                        });

                    }



                    // Fuel Detail
                    $('#vehfueltbl tbody').empty(); // Clear existing table rows
                    if (Data.vfuel.length === 0) {
                        $('#vehfueltbl tbody').append('<tr><td colspan="7" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var i = 0;
                        $.each(Data.vfuel, function (index, item) {
                            i++;

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.fuelDrawnDate.split(" ")[0].split("-"); // Extracting date parts
                            var FuelDrawnDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);
                            var VFuel = '<tr><td>' + i + '</td><td>' + item.fuelType + '</td><td>' + item.ratePerLiter + '</td><td>' + item.liters + '</td> <td>' + item.amount + '</td> <td>' + FuelDrawnDate + '</td> <td>' + item.paymentMode + '</td></tr>';

                            $('#vehfueltbl tbody').append(VFuel);
                        });

                    }

                    // Vehicle Inspection
                    $('#vehinspectbl tbody').empty(); // Clear existing table rows
                    if (Data.vinspec.length === 0) {
                        $('#vehinspectbl tbody').append('<tr><td colspan="5" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var j = 0;
                        $.each(Data.vinspec, function (index, item) {
                            j++;

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.inspectedDate.split(" ")[0].split("-"); // Extracting date parts
                            var inspectedDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.nxtInspectnDueDate.split(" ")[0].split("-"); // Extracting date parts
                            var nxtInspectnDueDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);

                            var VInspec = '<tr><td>' + j + '</td><td>' + item.inspectedBy + '</td><td>' + inspectedDate + '</td><td>' + nxtInspectnDueDate + '</td> <td>' + item.remarks + '</td></tr>';

                            $('#vehinspectbl tbody').append(VInspec);
                        });
                    }

                    // Oil Detail Detail
                    $('#vehoildetail tbody').empty(); // Clear existing table rows
                    if (Data.voildetail.length === 0) {
                        $('#vehoildetail tbody').append('<tr><td colspan="7" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var k = 0;
                        $.each(Data.voildetail, function (index, item) {
                            k++;

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.oilChngDate.split(" ")[0].split("-"); // Extracting date parts
                            var oilChngDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);
                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.nxtOilChngDate.split(" ")[0].split("-"); // Extracting date parts
                            var nxtOilChngDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);
                            var ODetails = '<tr><td>' + k + '</td><td>' + item.oilName + '</td><td>' + item.oilType + '</td><td>' + oilChngDate + '</td> <td>' + item.oilChngReading + '</td> <td>' + nxtOilChngDate + '</td><td>' + item.nxtOilChngReading + '</td></tr>';

                            $('#vehoildetail tbody').append(ODetails);
                        });
                    }
                    // Vehicle Tyre Detail
                    $('#vehtyredetail tbody').empty(); // Clear existing table rows
                    if (Data.vtyre.length === 0) {
                        $('#vehtyredetail tbody').append('<tr><td colspan="6" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var n = 0;
                        $.each(Data.vtyre, function (index, item) {
                            n++;

                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.tyreChngDate.split(" ")[0].split("-"); // Extracting date parts
                            var TyreChngDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);
                            // Assuming Date is in the format "31-Dec-24 12:00:00 AM"
                            var DateParts = item.nxtTyreChngDate.split(" ")[0].split("-"); // Extracting date parts
                            var NxtTyreChngDate = DateParts[0] + "-" + DateParts[1] + "-" + DateParts[2].substring(0, 2);

                            var ODetails = '<tr><td>' + n + '</td><td>' + item.tyreName + '</td><td>' + TyreChngDate + '</td><td>' + item.tyreChngReading + '</td> <td>' + NxtTyreChngDate + '</td> <td>' + item.nxtTyreChngReading + '</td></tr>';

                            $('#vehtyredetail tbody').append(ODetails);
                        });
                    }
                    // Vehicle General maintain Detail
                    $('#vehmaintdetail tbody').empty(); // Clear existing table rows
                    if (Data.vgnrlmntnce.length === 0) {
                        $('#vehmaintdetail tbody').append('<tr><td colspan="5" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var m = 0;
                        $.each(Data.vgnrlmntnce, function (index, item) {
                            m++;

                            var VMaint = '<tr><td>' + m + '</td><td>' + item.maintenanceAmnt + '</td><td>' + item.maintenanceFrom + '</td><td>' + item.remarks + '</td> <td>' + item.approvedBy + '</td></tr>';

                            $('#vehmaintdetail tbody').append(VMaint);
                        });
                    }

                    // Vehicle MTRoute Detail
                    $('#vehroutedetail tbody').empty(); // Clear existing table rows
                    if (Data.vroute.length === 0) {
                        $('#vehroutedetail tbody').append('<tr><td colspan="5" style="text-align:center;">Data not available</td></tr>');
                    } else {
                        var r = 0;
                        $.each(Data.vroute, function (index, item) {
                            r++;

                            var VRoute = '<tr><td>' + r + '</td><td>' + item.routeFrom + '</td><td>' + item.routeTo + '</td><td>' + item.distanceKM + '</td> <td>' + item.fuelConsumedLtrs + '</td></tr>';

                            $('#vehroutedetail tbody').append(VRoute);
                        });
                    }




                    // Giving Button Link & ID
                    $("#printvehilereportbtn").show();
                   
                    $("#printvehilereportbtn").attr("href", "/report/printvehicle/" + vehid + "?dateto=" + dateto + "&datefrom=" + datefrom + "");
                },
                error: function (xhr, status, error) {
                    alert("Error !!!");
                }
            });




        }

    }

});


