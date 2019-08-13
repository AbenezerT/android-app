
var Calender = {
    insert: function(options,callBack){
        function txFunction(tx) {
            var sql = "INSERT INTO Calender(EventName, EventLocation, Vacation,Description) VALUES(?,?,?,?);";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: insert transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
  delete: function(options,callBack){
         function txFunction(tx) {
             var sql = "DELETE FROM Calender WHERE id=?;";
             tx.executeSql(sql,options,callBack,errorHandler)
         }
         function successTransaction() {
             console.info("Success: Delete transaction successful");
         }
         db.transaction(txFunction,errorHandler,successTransaction);

},
    selectAll: function(options,callBack){
        function txFunction(tx) {
            var sql = "SELECT * FROM Calender;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
    select: function(options,callBack){
        function txFunction(tx) {
            var sql = "SELECT * FROM Calender WHERE id=?;";
            tx.executeSql(sql,options,callBack,errorHandler)
        }
        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction,errorHandler,successTransaction);
    },
     update: function(options, callBack){
         function txFunction(tx) {
             var sql = "UPDATE Calender SET EventName=?, EventLocation=?, Vacation=?, Description=?  WHERE id=?;";
             tx.executeSql(sql,options,callBack,errorHandler)
         }
         function successTransaction() {
             console.info("Success: Update transaction successful");
        }
         db.transaction(txFunction,errorHandler,successTransaction);
     }
};
