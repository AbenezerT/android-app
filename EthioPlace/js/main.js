function EventSave_click() {
    FormValidator();
}



function Calender_show(){
    Show_Calender();
}

function Save_click() {
    SaveCalander();
}

function Edit_show() {
    ShowCalender();
}

function BtnUpdate_click() {
    UpdateCalender();
}

function btnDelete_Click() {
    deleteCalender();
}

function calander1_click() {
    var Name1 = $('.Name1').html();
    var Location1 = $('.Location1').html();
    $("#EventName").val(Name1);
    $("#EventLocation").val(Location1);

}

function calander2_click() {
    var Name2 = $('.Name2').html();
    var Location2 = $('.Location2').html();
    $("#EventName").val(Name2);
    $("#EventLocation").val(Location2);
}
function calander3_click() {
    var Name3 = $('.Name3').html();
    var Location3 = $('.Location3').html();
    $("#EventName").val(Name3);
    $("#EventLocation").val(Location3);
}
function calander4_click() {
    var Name4 = $('.Name4').html();
    var Location4 = $('.Location4').html();
    $("#EventName").val(Name4);
    $("#EventLocation").val(Location4);
}
function calander5_click() {
    var Name5 = $('.Name5').html();
    var Location5 = $('.Location5').html();
    $("#EventName").val(Name5);
    $("#EventLocation").val(Location5);
}
function calander6_click() {
    var Name6 = $('.Name6').html();
    var Location6 = $('.Location6').html();
    $("#EventName").val(Name6);
    $("#EventLocation").val(Location6);
}


function init() {
    //Hiding 2page
    $("#2Page").hide();
    $("#btnAddMore2").hide();
    $("#3Page").hide();

    //if the button clicked then show the 2page
    $("#btnAddMore1").click(function(){
        $("#2Page").toggle();
        //hide the button too
        $("#btnAddMore1").hide();
        $("#btnAddMore2").show();
    });

    $("#btnShowLess").click(function(){
        $("#2Page").hide();
        //hide the button too
        $("#btnAddMore1").show();
        $("#btnAddMore2").hide();
    });

    $("#btnAddMore2").click(function(){
        $("#3Page").toggle();
        //hide the button too
        $("#btnAddMore2").hide();
    });

    $("#btnShowLess2").click(function(){
        $("#3Page").hide();
        //hide the button too

        $("#btnAddMore2").show();
        // $("#btnShowLess2").hide();
    });

    // $("#calander2").on("click", SaveCalander);
    $("#EventSave").on("click", EventSave_click);
    $("#EventSave").on("click", Save_click);
    $("#Calendar").on("pageshow", Calender_show);
    $("#Edit").on("pageshow", Edit_show);
    $("#BtnUpdate").on("click", BtnUpdate_click);
    $("#BtnDelete").on("click", btnDelete_Click);
    $("#calander1").on("click", calander1_click);
    $("#calander2").on("click", calander2_click);
    $("#calander3").on("click", calander3_click);
    $("#calander4").on("click", calander4_click);
    $("#calander5").on("click", calander5_click);
    $("#calander6").on("click", calander6_click);

}

function initDB() {
    try {
        DB.CreateDatabase();
        if (db) {
            console.info("Creating Tables....");
            DB.CreateTables();
        }
        else {
            console.error("Error: cannot create Db. can not proceed.");
        }
    } catch (e) {
        console.error("Error: (Fatal) Error in initDB(). can not proceed.");
    }

}
$(document).ready(function(){
 init();
 initDB();
});