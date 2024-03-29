
function Show_Calender(){
    Memos();
    // jpupdateTypesDropdown();
}

function SaveCalander(){
    //1.Test Validate
    if (FormValidator()){
        console.info("validation is successful");
        //2.If Validation is successful then fetch the info from the input controls
        var EventName = $("#EventName").val();
        var EventLocation = $("#EventLocation").val();
        var Vacation  =$("#EventTime").val();
        var Description = $("#EventDescription").val();
        var options;


            options = [EventName,EventLocation,Vacation,Description];


        //3. insert into the table by calling DataAccessLayer DAL function and supplying input
        function callback(){
            console.info("Success: record inserted successfully");
            alert("New Feedback Added");
            $(location).prop('href', '#Calendar');
        }
        Calender.insert(options, callback);
    }
    else{
        console.info("validation failed");
    }
}
function deleteCalender() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback() {
        console.info("Success: Record deleted successfully");
        $(location).prop('href', '#Calendar');
        alert("Feedback Deleted successfully");
    }
    Calender.delete(options, callback);
}

function Memos() {
    var options = [];
    function callback(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];
            sql = "CREATE TABLE IF NOT EXISTS Calender( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "EventName VARCHAR(30) NOT NULL," +
                "EventLocation VARCHAR(30)," +
                "Vacation Date," +
                "Description TEXT);";

            console.info("id : " + row['id']);
            console.info("EventName : " + row['EventName']);
            console.info("EventLocation: " + row['EventLocation']);
            console.info("Vacation : " + row['Vacation']);
            console.info("Description : " + row['Description']);



            htmlCode += "<li>" +
                "<a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "Event Name: " + row['EventName'] + "<br/>" +
                "<p>" +
                "Event Location:" + row['EventLocation']+ "<br/>" +

                "Event Date: " + row['Vacation'] + "<br/>" +
                "Comments: " + row['Description'] + "<br/>" +
                "</p></a></li>";
        }
        var lv = $("#ListView");
        lv = lv.html(htmlCode);
        lv.listview("refresh");

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', '#Edit');
        }
        $("#ListView a").on("click", clickHandler);
    }
    Calender.selectAll(options, callback);
}
function ShowCalender() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];

        $("#EditName").val(row['EventName']);
        $("#EditLocation").val(row['EventLocation']);
        $("#EditDate").val(row['Vacation']);
        $("#EditDescription").val(row['Description']);

    }
    Calender.select(options, callback);
}

function UpdateCalender() {
    if (FormValidator()) {
        var EventName = $("#EditName").val();
        var EventLocation = $("#EditLocation").val();
        var Vacation  =$("#EditDate").val();
        var Description = $("#EditDescription").val();
        var id = localStorage.getItem("id");
        var options;


            options = [EventName,EventLocation, Vacation, Description, id];


        function callback() {
            console.info("Success: Record updated successfully");
            $(location).prop('href', '#Calendar');
            alert("Feedback Updated successfully");
        }

        Calender.update(options, callback);
    }
    else{
        console.info("validation failed");
    }
}

// function jpupdateTypesDropdown(){
//     var options = [];
//
//     function callback(tx, results) {
//         var htmlCode = "";
//         var selectedID = 0;
//         for (var i = 0; i < results.rows.length; i++) {
//             var row = results.rows[i];
//             // var row = results.rows.item(i);   //both will work
//             console.info("id : " + row['id']);
//             console.info("Name : " + row['name']);
//
//
//
//
//         }
//
//         $("#jpType").html(htmlCode);
//         $("#jpType").val(selectedID).change();
//     }
//     upcoming.selectAll(options, callback);
// }