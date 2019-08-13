<!--tx = Transaction-->
function errorHandler (tx,error)
{
    console.log("SQL error: " + tx + " (" + error.code +") " + error.message);
}
var db;
var DB ={
    CreateDatabase: function(){
        var shortName = "EthioPlace";
        var version = "1.0";
        var displayName = "DB for EthioPlace DB app";
        var dbSize = 2 * 1024 * 1024;
        function dbCreateSuccess() {
            console.info(("Success: Database created Successfully."))
        }
        db = openDatabase(shortName, version, displayName, dbSize, dbCreateSuccess);
    },
    CreateTables: function(){
        function txFunction(tx) {
            var options = [];
            // step-1.	Declare sql for drop table, then  call executeSql()
            var sql = "DROP TABLE IF EXISTS upcoming;";
            function successDrop() {
                console.info("Success: dropping table friend successful");
            }
            tx.executeSql(sql,options,successDrop,errorHandler);

            // step-2.	Declare sql for create table
            sql = "CREATE TABLE IF NOT EXISTS upcoming( "
                + "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"
                + "name VARCHAR(20) NOT NULL);";
            function successCreateTypeTable() {
                console.info("Success: upcoming table created successfully");
            }
            tx.executeSql(sql,options,successCreateTypeTable, errorHandler);

            // step-3to5.	Declare sql for insert
            sql = "INSERT INTO upcoming(name) VALUES(?);";
            function callBack(){
                console.info("Success: record inserted successfully");
            }
            //Set value to the html
            var names = [["The Blue Nile Falls"]];

            for(var i=0; i<3; i++) {
                tx.executeSql(sql,names[i],callBack,errorHandler);
                $("#Image").text(names);
            }

            // step-6.	Declare sql for create table ‘Calender, then call executeSql() again.
            sql = "CREATE TABLE IF NOT EXISTS Calender( " +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "EventName VARCHAR(30) NOT NULL," +
                "EventLocation VARCHAR(30)," +
                "Vacation Date," +
                "Description TEXT);";

            function successCreateReviewTable() {
                console.info("Success: Calender table created successfully");
            }
            tx.executeSql(sql,options,successCreateReviewTable, errorHandler);
        }
        function successCreateTables() {
            console.info(("Success: Table created Successfully."))
        }
        db.transaction(txFunction, errorHandler, successCreateTables);
    },
};


