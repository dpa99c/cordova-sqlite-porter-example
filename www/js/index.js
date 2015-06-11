var db;

function onDeviceReady(){
    // Open WebSQL DB
    db = window.openDatabase("Test", "1.0", "TestDB", 1 * 1024);
}


function loadFromFile(){
    var dbName = $('#db-name').val();
    var format = $('#format').val();
    var type = $('#type').val();

    var filename = format+"/"+dbName+"_"+type+"."+format;

    $('#result').val("Loading "+filename+"...");
    $.get(filename, function(contents){
        $('#result').val(contents);
        alert("Loaded '"+filename+"'");
    }, "text");
}

function doImportSql(){
    cordova.plugins.sqlitePorter.importSqlToDb(db, $('#result').val(), {
        successFn: function(count){
            alert("Imported "+count+" SQL statements to DB");
        },
        errorFn: onError
    });
}

function doExportSql(){
    cordova.plugins.sqlitePorter.exportDbToSql(db, {
        successFn: function(sql, count){
            $('#result').val(sql);
            alert("Exported "+count+" SQL statements to DB");
        },
        dataOnly: $('#export-type').val() === "data"
    });
}

function doImportJson(){
    cordova.plugins.sqlitePorter.importJsonToDb(db, $('#result').val(), {
        successFn: function(count){
            alert("Imported "+count+" JSON statements to DB");
        },
        errorFn: onError
    });
}

function doExportJson(){
    cordova.plugins.sqlitePorter.exportDbToJson(db, {
        successFn: function(json, count){
            $('#result').val(JSON.stringify(json));
            alert("Exported "+count+" JSON statements to DB");
        },
        dataOnly: $('#export-type').val() === "data"
    });
}

function doWipe(){
    cordova.plugins.sqlitePorter.wipeDb(db, {
        successFn: function(count){
            alert("Wiped "+count+" tables");
        },
        errorFn: onError
    });
}

function onError(error){
    var msg = "An error occurred: message="+error.message;
    if(error.code){
        msg += "; code="+error.code;
    }
    console.dir(error);
    alert(msg);
}

$(document).on('deviceready', onDeviceReady);