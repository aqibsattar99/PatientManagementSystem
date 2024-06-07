
//================//
// Color JS Code //
//==============//

$(document).ready(function () {
    $("#btn-color-add").click(function () {
        var Name = $('#modal-color #name').val();
        var Description = $('#modal-color #description').val();
        if (Name == "" || Description == "") {

            $('#modal-color #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-color #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-color #WarningClose").click(function () { $('#modal-color #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-color-add").text("Saving...");
            $.ajax({
                url: "/Color/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-color input").val("");
                    $("#modal-color textarea").val("");

                    // Alert Code
                    $('#modal-color #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-color #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-color #SuccessClose").click(function () { $('#modal-color #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-color-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".color-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");

        $.ajax({
            url: "/Color/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-color-edit #id").val(Id);
                $('#modal-color-edit #name').val(Data.name);
                $('#modal-color-edit #description').val(Data.description);

                // Load Modal
                $('#modal-color-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-color-edit .close").click(function () {
        $("#modal-color-edit").modal('hide');
    });

    $("#btn-color-edit").click(function () {
        var Id = $('#modal-color-edit #id').val();
        var Name = $('#modal-color-edit #name').val();
        var Description = $('#modal-color-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-color-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-color-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-color-edit #WarningClose").click(function () { $('#modal-color-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-color-edit").text("Updating...");
            $.ajax({
                url: "/Color/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-color-edit input").val("");
                    $("#modal-color-edit select").val("");
                    $("#modal-color-edit textarea").val("");

                    // Alert Code
                    $('#modal-color-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-color-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-color-edit #SuccessClose").click(function () { $('#modal-color-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-color-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-color-edit").modal('hide');
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
// Enginecapacity JS Code //
//=======================//
$(document).ready(function () {

    $("#btn-enginecapacity-add").click(function () {
        var Name = $('#modal-enginecapacity #name').val();
        var Description = $('#modal-enginecapacity #description').val();
        if (Name == "" || Description == "") {

            $('#modal-enginecapacity #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-enginecapacity #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-enginecapacity #WarningClose").click(function () { $('#modal-enginecapacity #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-enginecapacity-add").text("Saving...");
            $.ajax({
                url: "/enginecapacity/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    EngineCap: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-enginecapacity input").val("");
                    $("#modal-enginecapacity textarea").val("");

                    // Alert Code
                    $('#modal-enginecapacity #AlertSuccess').removeClass('d-none');
                    setTimeout(function () {
                        $('#modal-enginecapacity #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-enginecapacity #SuccessClose").click(function () { $('#modal-enginecapacity #AlertSuccess').addClass('d-none'); location.reload(); });

                    // Button Text Change
                    $("#btn-enginecapacity-add").text("Save");

                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".enginecapacity-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/enginecapacity/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-enginecapacity-edit #id").val(Id);
                $('#modal-enginecapacity-edit #name').val(Data.engineCap);
                $('#modal-enginecapacity-edit #description').val(Data.description);

                // Load Modal
                $('#modal-enginecapacity-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-enginecapacity-edit .close").click(function () {
        $("#modal-enginecapacity-edit").modal('hide');
    });

    $("#btn-enginecapacity-edit").click(function () {
        var Id = $('#modal-enginecapacity-edit #id').val();
        var Name = $('#modal-enginecapacity-edit #name').val();
        var Description = $('#modal-enginecapacity-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-enginecapacity-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-enginecapacity-edit #AlertWarning').addClass('d-none'); location.reload(); }, 1500);
            $("#modal-enginecapacity-edit #WarningClose").click(function () { $('#modal-enginecapacity-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-enginecapacity-edit").text("Updating...");
            $.ajax({
                url: "/enginecapacity/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    EngineCap: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-enginecapacity-edit input").val("");
                    $("#modal-enginecapacity-edit select").val("");
                    $("#modal-enginecapacity-edit textarea").val("");

                    // Alert Code
                    $('#modal-enginecapacity-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-enginecapacity-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-enginecapacity-edit #SuccessClose").click(function () { $('#modal-enginecapacity-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-enginecapacity-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-enginecapacity-edit").modal('hide');
                        location.reload();
                    }, 2000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//======================//
// Engine Type JS Code //
//====================//
$(document).ready(function () {

    $("#btn-enginetype-add").click(function () {
        var Name = $('#modal-enginetype #name').val();
        var Description = $('#modal-enginetype #description').val();
        if (Name == "" || Description == "") {

            $('#modal-enginetype #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-enginetype #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-enginetype #WarningClose").click(function () { $('#modal-enginetype #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-enginetype-add").text("Saving...");
            $.ajax({
                url: "/enginetype/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-enginetype input").val("");
                    $("#modal-enginetype textarea").val("");

                    // Alert Code
                    $('#modal-enginetype #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-enginetype #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-enginetype #SuccessClose").click(function () { $('#modal-enginetype #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-enginetype-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".enginetype-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/enginetype/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-enginetype-edit #id").val(Id);
                $('#modal-enginetype-edit #name').val(Data.name);
                $('#modal-enginetype-edit #description').val(Data.description);

                // Load Modal
                $('#modal-enginetype-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-enginetype-edit .close").click(function () {
        $("#modal-enginetype-edit").modal('hide');
    });

    $("#btn-enginetype-edit").click(function () {
        var Id = $('#modal-enginetype-edit #id').val();
        var Name = $('#modal-enginetype-edit #name').val();
        var Description = $('#modal-enginetype-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-enginetype-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-enginetype-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-enginetype-edit #WarningClose").click(function () { $('#modal-enginetype-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-enginetype-edit").text("Updating...");
            $.ajax({
                url: "/enginetype/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-enginetype-edit input").val("");
                    $("#modal-enginetype-edit select").val("");
                    $("#modal-enginetype-edit textarea").val("");

                    // Alert Code
                    $('#modal-enginetype-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-enginetype-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-enginetype-edit #SuccessClose").click(function () { $('#modal-enginetype-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-enginetype-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-enginetype-edit").modal('hide');
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
// Make JS Code //
//=============//
$(document).ready(function () {
    $("#btn-make-add").click(function () {
        var Name = $('#modal-make #name').val();
        var Description = $('#modal-make #description').val();
        if (Name == "" || Description == "") {

            $('#modal-make #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-make #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-make #WarningClose").click(function () { $('#modal-make #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-make-add").text("Saving...");
            $.ajax({
                url: "/make/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-make input").val("");
                    $("#modal-make textarea").val("");

                    // Alert Code
                    $('#modal-make #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-make #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-make #SuccessClose").click(function () { $('#modal-make #AlertSuccess').addClass('d-none'); location.reload(); });

                    // Button Text Change
                    $("#btn-make-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".make-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/make/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-make-edit #id").val(Id);
                $('#modal-make-edit #name').val(Data.name);
                $('#modal-make-edit #description').val(Data.description);

                // Load Modal
                $('#modal-make-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-make-edit .close").click(function () {
        $("#modal-make-edit").modal('hide');
    });

    $("#btn-make-edit").click(function () {
        var Id = $('#modal-make-edit #id').val();
        var Name = $('#modal-make-edit #name').val();
        var Description = $('#modal-make-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-make-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-make-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-make-edit #WarningClose").click(function () { $('#modal-make-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-make-edit").text("Updating...");
            $.ajax({
                url: "/make/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-make-edit input").val("");
                    $("#modal-make-edit select").val("");
                    $("#modal-make-edit textarea").val("");

                    // Alert Code
                    $('#modal-make-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-make-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-make-edit #SuccessClose").click(function () { $('#modal-make-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-make-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-make-edit").modal('hide');
                        location.reload();
                    }, 2000);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//================//
// Model JS Code //
//==============//
$(document).ready(function () {

    $("#btn-model-add").click(function () {
        var Name = $('#modal-model #name').val();
        var Description = $('#modal-model #description').val();
        if (Name == "" || Description == "") {

            $('#modal-model #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-model #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-model #WarningClose").click(function () { $('#modal-model #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-model-add").text("Saving...");
            $.ajax({
                url: "/model/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    ModelName: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-model input").val("");
                    $("#modal-model textarea").val("");

                    // Alert Code
                    $('#modal-model #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-model #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-model #SuccessClose").click(function () { $('#modal-model #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-model-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".model-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/model/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-model-edit #id").val(Id);
                $('#modal-model-edit #name').val(Data.modelName);
                $('#modal-model-edit #description').val(Data.description);

                // Load Modal
                $('#modal-model-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-model-edit .close").click(function () {
        $("#modal-model-edit").modal('hide');
    });

    $("#btn-model-edit").click(function () {
        var Id = $('#modal-model-edit #id').val();
        var Name = $('#modal-model-edit #name').val();
        var Description = $('#modal-model-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-model-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-model-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-model-edit #WarningClose").click(function () { $('#modal-model-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-model-edit").text("Updating...");
            $.ajax({
                url: "/model/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    ModelName: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-model-edit input").val("");
                    $("#modal-model-edit select").val("");
                    $("#modal-model-edit textarea").val("");

                    // Alert Code
                    $('#modal-model-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-model-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-model-edit #SuccessClose").click(function () { $('#modal-model-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-model-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-model-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//=====================//
// Model Year JS Code //
//===================//
$(document).ready(function () {

    $("#btn-modelyear-add").click(function () {
        var Name = $('#modal-modelyear #name').val();
        var Description = $('#modal-modelyear #description').val();
        if (Name == "" || Description == "") {

            $('#modal-modelyear #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-modelyear #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-modelyear #WarningClose").click(function () { $('#modal-modelyear #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-modelyear-add").text("Saving...");
            $.ajax({
                url: "/modelyear/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    MYear: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-modelyear input").val("");
                    $("#modal-modelyear textarea").val("");

                    // Alert Code
                    $('#modal-modelyear #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-modelyear #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-modelyear #SuccessClose").click(function () { $('#modal-modelyear #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-modelyear-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".modelyear-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/modelyear/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-modelyear-edit #id").val(Id);
                $('#modal-modelyear-edit #name').val(Data.myear);
                $('#modal-modelyear-edit #description').val(Data.description);

                // Load Modal
                $('#modal-modelyear-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-modelyear-edit .close").click(function () {
        $("#modal-modelyear-edit").modal('hide');
    });

    $("#btn-modelyear-edit").click(function () {
        var Id = $('#modal-modelyear-edit #id').val();
        var Name = $('#modal-modelyear-edit #name').val();
        var Description = $('#modal-modelyear-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-modelyear-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-modelyear-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-modelyear-edit #WarningClose").click(function () { $('#modal-modelyear-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-modelyear-edit").text("Updating...");
            $.ajax({
                url: "/modelyear/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    MYear: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-modelyear-edit input").val("");
                    $("#modal-modelyear-edit select").val("");
                    $("#modal-modelyear-edit textarea").val("");

                    // Alert Code
                    $('#modal-modelyear-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-modelyear-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-modelyear-edit #SuccessClose").click(function () { $('#modal-modelyear-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-modelyear-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-modelyear-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//=================//
// Driver JS Code //
//===============//
$(document).ready(function () {

    $("#btn-driver-add").click(function () {
        var Name = $('#modal-driver #name').val();
        var ContactNo = $('#modal-driver #contactno').val();
        var StatusId = $('#modal-driver #statusid').val();
        if (Name == "" || ContactNo == "" || StatusId == "") {

            $('#modal-driver #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-driver #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-driver #WarningClose").click(function () { $('#modal-driver #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-driver-add").text("Saving...");
            $.ajax({
                url: "/driver/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    ContactNo: ContactNo,
                    StatusId: StatusId
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-driver input").val("");
                    $("#modal-driver textarea").val("");
                    $("#modal-driver select").val("");

                    // Alert Code
                    $('#modal-driver #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-driver #AlertSuccess').addClass('d-none'); }, 1500);
                    $("#modal-driver #SuccessClose").click(function () { $('#modal-driver #AlertSuccess').addClass('d-none'); });


                    setTimeout(function () {
                        $("#modal-driver").modal('hide');
                        location.reload();
                    }, 1500);



                    // Button Text Change
                    $("#btn-driver-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".driver-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/driver/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-driver-edit #id").val(Id);
                $('#modal-driver-edit #name').val(Data.name);
                $('#modal-driver-edit #contactno').val(Data.contactNo);
                $('#modal-driver-edit #statusid').val(Data.statusId);

                // Load Modal
                $('#modal-driver-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-driver-edit .close").click(function () {
        $("#modal-driver-edit").modal('hide');
    });

    $("#btn-driver-edit").click(function () {
        var Id = $("#modal-driver-edit #id").val();
        var Name = $('#modal-driver-edit #name').val();
        var ContactNo = $('#modal-driver-edit #contactno').val();
        var StatusId = $('#modal-driver-edit #statusid').val();
        if (Name == "" || ContactNo == "" || StatusId == "") {

            $('#modal-driver-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-driver-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-driver-edit #WarningClose").click(function () { $('#modal-driver-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-driver-edit").text("Updating...");
            $.ajax({
                url: "/driver/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    ContactNo: ContactNo,
                    StatusId: StatusId
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-driver-edit input").val("");
                    $("#modal-driver-edit select").val("");
                    $("#modal-driver-edit textarea").val("");

                    // Alert Code
                    $('#modal-driver-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-driver-edit #AlertSuccess').addClass('d-none'); }, 1500);
                    $("#modal-driver-edit #SuccessClose").click(function () { $('#modal-driver-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-driver-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-driver-edit").modal('hide');
                        location.reload();
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//===================//
// Fueltype JS Code //
//=================//
$(document).ready(function () {

    $("#btn-fueltype-add").click(function () {
        var Name = $('#modal-fueltype #name').val();
        var Description = $('#modal-fueltype #description').val();
        if (Name == "" || Description == "") {

            $('#modal-fueltype #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-fueltype #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-fueltype #WarningClose").click(function () { $('#modal-fueltype #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-fueltype-add").text("Saving...");
            $.ajax({
                url: "/fueltype/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-fueltype input").val("");
                    $("#modal-fueltype textarea").val("");

                    // Alert Code
                    $('#modal-fueltype #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-fueltype #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-fueltype #SuccessClose").click(function () { $('#modal-fueltype #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-fueltype-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".fueltype-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/fueltype/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-fueltype-edit #id").val(Id);
                $('#modal-fueltype-edit #name').val(Data.name);
                $('#modal-fueltype-edit #description').val(Data.description);

                // Load Modal
                $('#modal-fueltype-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-fueltype-edit .close").click(function () {
        $("#modal-fueltype-edit").modal('hide');
    });

    $("#btn-fueltype-edit").click(function () {
        var Id = $('#modal-fueltype-edit #id').val();
        var Name = $('#modal-fueltype-edit #name').val();
        var Description = $('#modal-fueltype-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-fueltype-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-fueltype-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-fueltype-edit #WarningClose").click(function () { $('#modal-fueltype-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-fueltype-edit").text("Updating...");
            $.ajax({
                url: "/fueltype/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-fueltype-edit input").val("");
                    $("#modal-fueltype-edit select").val("");
                    $("#modal-fueltype-edit textarea").val("");

                    // Alert Code
                    $('#modal-fueltype-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-fueltype-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-fueltype-edit #SuccessClose").click(function () { $('#modal-fueltype-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-fueltype-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-fueltype-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//=====================//
// Oil Detail JS Code //
//===================//
$(document).ready(function () {

    $("#btn-oildetail-add").click(function () {
        var Name = $('#modal-oildetail #name').val();
        var Grade = $('#modal-oildetail #grade').val();
        var Description = $('#modal-oildetail #description').val();
        if (Name == "" || Description == "" || Grade == "") {

            $('#modal-oildetail #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-oildetail #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-oildetail #WarningClose").click(function () { $('#modal-oildetail #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-oildetail-add").text("Saving...");
            $.ajax({
                url: "/oildetail/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Grade: Grade,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-oildetail input").val("");
                    $("#modal-oildetail textarea").val("");

                    // Alert Code
                    $('#modal-oildetail #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-oildetail #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-oildetail #SuccessClose").click(function () { $('#modal-oildetail #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-oildetail-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".oildetail-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/oildetail/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-oildetail-edit #id").val(Id);
                $('#modal-oildetail-edit #name').val(Data.name);
                $('#modal-oildetail-edit #description').val(Data.description);
                $('#modal-oildetail-edit #grade').val(Data.grade);

                // Load Modal
                $('#modal-oildetail-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-oildetail-edit .close").click(function () {
        $("#modal-oildetail-edit").modal('hide');
    });

    $("#btn-oildetail-edit").click(function () {
        var Id = $('#modal-oildetail-edit #id').val();
        var Grade = $('#modal-oildetail-edit #grade').val();
        var Name = $('#modal-oildetail-edit #name').val();
        var Description = $('#modal-oildetail-edit #description').val();
        if (Name == "" || Description == "" || Grade == "") {

            $('#modal-oildetail-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-oildetail-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-oildetail-edit #WarningClose").click(function () { $('#modal-oildetail-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-oildetail-edit").text("Updating...");
            $.ajax({
                url: "/oildetail/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Grade: Grade,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-oildetail-edit input").val("");
                    $("#modal-oildetail-edit select").val("");
                    $("#modal-oildetail-edit textarea").val("");

                    // Alert Code
                    $('#modal-oildetail-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-oildetail-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-oildetail-edit #SuccessClose").click(function () { $('#modal-oildetail-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-oildetail-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-oildetail-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});


//==================//
// Oiltype JS Code //
//================//
$(document).ready(function () {

    $("#btn-oiltype-add").click(function () {
        var Name = $('#modal-oiltype #name').val();
        var Description = $('#modal-oiltype #description').val();
        if (Name == "" || Description == "") {

            $('#modal-oiltype #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-oiltype #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-oiltype #WarningClose").click(function () { $('#modal-oiltype #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-oiltype-add").text("Saving...");
            $.ajax({
                url: "/oiltype/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-oiltype input").val("");
                    $("#modal-oiltype textarea").val("");

                    // Alert Code
                    $('#modal-oiltype #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-oiltype #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-oiltype #SuccessClose").click(function () { $('#modal-oiltype #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-oiltype-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".oiltype-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/oiltype/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-oiltype-edit #id").val(Id);
                $('#modal-oiltype-edit #name').val(Data.name);
                $('#modal-oiltype-edit #description').val(Data.description);

                // Load Modal
                $('#modal-oiltype-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-oiltype-edit .close").click(function () {
        $("#modal-oiltype-edit").modal('hide');
    });

    $("#btn-oiltype-edit").click(function () {
        var Id = $('#modal-oiltype-edit #id').val();
        var Name = $('#modal-oiltype-edit #name').val();
        var Description = $('#modal-oiltype-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-oiltype-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-oiltype-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-oiltype-edit #WarningClose").click(function () { $('#modal-oiltype-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-oiltype-edit").text("Updating...");
            $.ajax({
                url: "/oiltype/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-oiltype-edit input").val("");
                    $("#modal-oiltype-edit select").val("");
                    $("#modal-oiltype-edit textarea").val("");

                    // Alert Code
                    $('#modal-oiltype-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-oiltype-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-oiltype-edit #SuccessClose").click(function () { $('#modal-oiltype-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-oiltype-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-oiltype-edit").modal('hide');
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
// paymentmode JS Code //
//===============//
$(document).ready(function () {

    $("#btn-paymentmode-add").click(function () {
        var Name = $('#modal-paymentmode #name').val();
        var Description = $('#modal-paymentmode #description').val();
        if (Name == "" || Description == "") {

            $('#modal-paymentmode #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-paymentmode #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-paymentmode #WarningClose").click(function () { $('#modal-paymentmode #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-paymentmode-add").text("Saving...");
            $.ajax({
                url: "/paymentmode/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-paymentmode input").val("");
                    $("#modal-paymentmode textarea").val("");

                    // Alert Code
                    $('#modal-paymentmode #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-paymentmode #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-paymentmode #SuccessClose").click(function () { $('#modal-paymentmode #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-paymentmode-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".paymentmode-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/paymentmode/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-paymentmode-edit #id").val(Id);
                $('#modal-paymentmode-edit #name').val(Data.name);
                $('#modal-paymentmode-edit #description').val(Data.description);

                // Load Modal
                $('#modal-paymentmode-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-paymentmode-edit .close").click(function () {
        $("#modal-paymentmode-edit").modal('hide');
    });

    $("#btn-paymentmode-edit").click(function () {
        var Id = $('#modal-paymentmode-edit #id').val();
        var Name = $('#modal-paymentmode-edit #name').val();
        var Description = $('#modal-paymentmode-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-paymentmode-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-paymentmode-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-paymentmode-edit #WarningClose").click(function () { $('#modal-paymentmode-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-paymentmode-edit").text("Updating...");
            $.ajax({
                url: "/paymentmode/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-paymentmode-edit input").val("");
                    $("#modal-paymentmode-edit select").val("");
                    $("#modal-paymentmode-edit textarea").val("");

                    // Alert Code
                    $('#modal-paymentmode-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-paymentmode-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-paymentmode-edit #SuccessClose").click(function () { $('#modal-paymentmode-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-paymentmode-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-paymentmode-edit").modal('hide');
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
// Status JS Code //
//===============//
$(document).ready(function () {

    $("#btn-status-add").click(function () {
        var Name = $('#modal-status #name').val();
        var DriverStatus = $('#modal-status #dstatus').val();
        var Description = $('#modal-status #description').val();
        if (Name == "" || Description == "" || DriverStatus == "") {

            $('#modal-status #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-status #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-status #WarningClose").click(function () { $('#modal-status #AlertWarning').addClass('d-none'); });

        } else {
            if (DriverStatus == 1) { DriverStatus = true } else { DriverStatus = false }
            $("#btn-status-add").text("Saving...");
            $.ajax({
                url: "/status/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    DriverStatus: DriverStatus,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-status input").val("");
                    $("#modal-status textarea").val("");

                    // Alert Code
                    $('#modal-status #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-status #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-status #SuccessClose").click(function () { $('#modal-status #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-status-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".status-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/status/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-status-edit #id").val(Id);
                $('#modal-status-edit #name').val(Data.name);

                if (Data.driverStatus == false) { $('#modal-status-edit #dstatus').val(0); }
                else { $('#modal-status-edit #dstatus').val(1); }

                $('#modal-status-edit #description').val(Data.description);

                // Load Modal
                $('#modal-status-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-status-edit .close").click(function () {
        $("#modal-status-edit").modal('hide');
    });

    $("#btn-status-edit").click(function () {
        var Id = $('#modal-status-edit #id').val();
        var Name = $('#modal-status-edit #name').val();
        var DriverStatus = $('#modal-status-edit #dstatus').val();
        var Description = $('#modal-status-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-status-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-status-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-status-edit #WarningClose").click(function () { $('#modal-status-edit #AlertWarning').addClass('d-none'); });

        } else {
            if (DriverStatus == 1) { DriverStatus = true } else { DriverStatus = false }
            $("#btn-status-edit").text("Updating...");
            $.ajax({
                url: "/status/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    DriverStatus: DriverStatus,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-status-edit input").val("");
                    $("#modal-status-edit select").val("");
                    $("#modal-status-edit textarea").val("");

                    // Alert Code
                    $('#modal-status-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-status-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-status-edit #SuccessClose").click(function () { $('#modal-status-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-status-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-status-edit").modal('hide');
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
// Tyre JS Code //
//===============//
$(document).ready(function () {

    $("#btn-tyre-add").click(function () {
        var Name = $('#modal-tyre #name').val();
        var Size = $('#modal-tyre #size').val();
        var MnfctrYear = $('#modal-tyre #myear').val();
        var Description = $('#modal-tyre #description').val();
        if (Name == "" || Description == "" || Size == "" || MnfctrYear == "") {

            $('#modal-tyre #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-tyre #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-tyre #WarningClose").click(function () { $('#modal-tyre #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-tyre-add").text("Saving...");
            $.ajax({
                url: "/tyre/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Size: Size,
                    MnfctrYear: MnfctrYear,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-tyre input").val("");
                    $("#modal-tyre textarea").val("");

                    // Alert Code
                    $('#modal-tyre #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-tyre #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-tyre #SuccessClose").click(function () { $('#modal-tyre #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-tyre-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".tyre-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/tyre/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-tyre-edit #id").val(Id);
                $('#modal-tyre-edit #name').val(Data.name);
                $('#modal-tyre-edit #size').val(Data.size);
                $('#modal-tyre-edit #myear').val(Data.mnfctrYear);
                $('#modal-tyre-edit #description').val(Data.description);

                // Load Modal
                $('#modal-tyre-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-tyre-edit .close").click(function () {
        $("#modal-tyre-edit").modal('hide');
    });

    $("#btn-tyre-edit").click(function () {
        var Id = $('#modal-tyre-edit #id').val();
        var Name = $('#modal-tyre-edit #name').val();
        var Size = $('#modal-tyre-edit #size').val();
        var MnfctrYear = $('#modal-tyre-edit #myear').val();
        var Description = $('#modal-tyre-edit #description').val();
        if (Name == "" || Description == "" || Size == "" || MnfctrYear == "") {

            $('#modal-tyre-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-tyre-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-tyre-edit #WarningClose").click(function () { $('#modal-tyre-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-tyre-edit").text("Updating...");
            $.ajax({
                url: "/tyre/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Size: Size,
                    MnfctrYear: MnfctrYear,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-tyre-edit input").val("");
                    $("#modal-tyre-edit select").val("");
                    $("#modal-tyre-edit textarea").val("");

                    // Alert Code
                    $('#modal-tyre-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-tyre-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-tyre-edit #SuccessClose").click(function () { $('#modal-tyre-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-tyre-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-tyre-edit").modal('hide');
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
// vehicletype JS Code //
//===============//
$(document).ready(function () {

    $("#btn-vehicletype-add").click(function () {
        var Name = $('#modal-vehicletype #name').val();
        var Description = $('#modal-vehicletype #description').val();
        if (Name == "" || Description == "") {

            $('#modal-vehicletype #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicletype #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicletype #WarningClose").click(function () { $('#modal-vehicletype #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicletype-add").text("Saving...");
            $.ajax({
                url: "/vehicletype/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-vehicletype input").val("");
                    $("#modal-vehicletype textarea").val("");

                    // Alert Code
                    $('#modal-vehicletype #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicletype #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicletype #SuccessClose").click(function () { $('#modal-vehicletype #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicletype-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".vehicletype-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/vehicletype/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-vehicletype-edit #id").val(Id);
                $('#modal-vehicletype-edit #name').val(Data.name);
                $('#modal-vehicletype-edit #description').val(Data.description);

                // Load Modal
                $('#modal-vehicletype-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-vehicletype-edit .close").click(function () {
        $("#modal-vehicletype-edit").modal('hide');
    });

    $("#btn-vehicletype-edit").click(function () {
        var Id = $('#modal-vehicletype-edit #id').val();
        var Name = $('#modal-vehicletype-edit #name').val();
        var Description = $('#modal-vehicletype-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-vehicletype-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-vehicletype-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-vehicletype-edit #WarningClose").click(function () { $('#modal-vehicletype-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-vehicletype-edit").text("Updating...");
            $.ajax({
                url: "/vehicletype/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-vehicletype-edit input").val("");
                    $("#modal-vehicletype-edit select").val("");
                    $("#modal-vehicletype-edit textarea").val("");

                    // Alert Code
                    $('#modal-vehicletype-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-vehicletype-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-vehicletype-edit #SuccessClose").click(function () { $('#modal-vehicletype-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-vehicletype-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-vehicletype-edit").modal('hide');
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
// xx JS Code //
//===============//
$(document).ready(function () {

    $("#btn-xx-add").click(function () {
        var Name = $('#modal-xx #name').val();
        var Description = $('#modal-xx #description').val();
        if (Name == "" || Description == "") {

            $('#modal-xx #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-xx #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-xx #WarningClose").click(function () { $('#modal-xx #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-xx-add").text("Saving...");
            $.ajax({
                url: "/xx/Add",
                type: "POST",
                dataType: 'json',
                data: {
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Input Fields
                    $("#modal-xx input").val("");
                    $("#modal-xx textarea").val("");

                    // Alert Code
                    $('#modal-xx #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-xx #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-xx #SuccessClose").click(function () { $('#modal-xx #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-xx-add").text("Save");
                },
                error: function (xhr, status, error) {
                    alert("Server Error !!!");
                }
            });
        }
    });

    $(".xx-edit-btn").click(function (e) {
        e.preventDefault();
        var currentRow = $(this).closest("tr");
        var Id = currentRow.find("td:first").attr("id");
        $.ajax({
            url: "/xx/GetSingle",
            type: "POST",
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            data: { Id: Id },
            success: function (Data) {

                $("#modal-xx-edit #id").val(Id);
                $('#modal-xx-edit #name').val(Data.name);
                $('#modal-xx-edit #description').val(Data.description);

                // Load Modal
                $('#modal-xx-edit').modal('show');
            },
            error: function (xhr, status, error) {
                alert("Error !!!");
            }
        });
    });

    $("#modal-xx-edit .close").click(function () {
        $("#modal-xx-edit").modal('hide');
    });

    $("#btn-xx-edit").click(function () {
        var Id = $('#modal-xx-edit #id').val();
        var Name = $('#modal-xx-edit #name').val();
        var Description = $('#modal-xx-edit #description').val();
        if (Name == "" || Description == "") {

            $('#modal-xx-edit #AlertWarning').removeClass('d-none');
            setTimeout(function () { $('#modal-xx-edit #AlertWarning').addClass('d-none'); }, 1500);
            $("#modal-xx-edit #WarningClose").click(function () { $('#modal-xx-edit #AlertWarning').addClass('d-none'); });

        } else {

            $("#btn-xx-edit").text("Updating...");
            $.ajax({
                url: "/xx/Update",
                type: "POST",
                dataType: 'json',
                data: {
                    Id: Id,
                    Name: Name,
                    Description: Description
                },
                success: function (response) {
                    // Clear Inputs
                    $("#modal-xx-edit input").val("");
                    $("#modal-xx-edit select").val("");
                    $("#modal-xx-edit textarea").val("");

                    // Alert Code
                    $('#modal-xx-edit #AlertSuccess').removeClass('d-none');
                    setTimeout(function () { $('#modal-xx-edit #AlertSuccess').addClass('d-none'); location.reload(); }, 1500);
                    $("#modal-xx-edit #SuccessClose").click(function () { $('#modal-xx-edit #AlertSuccess').addClass('d-none'); });

                    // Button Text Change
                    $("#btn-xx-edit").text("Update");

                    setTimeout(function () {
                        $("#modal-xx-edit").modal('hide');
                    }, 1500);

                },
                error: function (xhr, status, error) {
                    alert(error);
                }
            });
        }
    });

});

