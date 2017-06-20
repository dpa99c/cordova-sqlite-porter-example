var db, source;
var testCount = 0;
var MAX = 20;
var lastImportCount, lastExportCount, lastExportResult;

function onDeviceReady(){
    // Open WebSQL DB
    db = window.openDatabase("Test", "1.0", "TestDB", 1 * 1024);
    loadFromFile(runTest);
}

var runTest; runTest = function(){
    testCount++;
    if(testCount > MAX){
        return testComplete();
    }

    doWipe(function(){
        doImportJson(function(count){
            if(lastImportCount && lastImportCount !== count){
                console.error("Import count mismatch");
                return testFailed();
            }
            lastImportCount = count;

            doExportJson(function(result, count){
                if(lastExportCount && lastExportCount !== count){
                    console.error("Export count mismatch");
                    return testFailed();
                }
                lastExportCount = count;

                if(lastExportResult && lastExportResult !== result){
                    console.error("Export result mismatch");
                    return testFailed();
                }
                lastExportResult = result;
                runTest(); // recurse
            });
        });
    });
};

function testComplete(){
    alert("Test PASSED: "+MAX+" repetitions");
}

function testFailed(){
    alert("Test FAILED");
}

function loadFromFile(done){
    var dbName = "complex";
    var format = "json";
    var type = "dump";

    var filename = format+"/"+dbName+"_"+type+"."+format;

    $.get(filename, function(contents){
        source = contents;
        done();
    }, "text");
}


function doImportJson(done){
    cordova.plugins.sqlitePorter.importJsonToDb(db, source, {
        successFn: function(count){
            log("Imported "+count+" JSON statements to DB");
            done(count);
        },
        errorFn: onError,
        batchInsertSize: 250
    });
}

function doExportJson(done){
    cordova.plugins.sqlitePorter.exportDbToJson(db, {
        successFn: function(json, count){
            log("Exported "+count+" JSON statements from DB");
            var result = JSON.stringify(json);
            done(result, count);
        },
        dataOnly: false,
        structureOnly: false
    });
}

function doWipe(done){
    cordova.plugins.sqlitePorter.wipeDb(db, {
        successFn: function(){
            log("Wiped DB");
            done();
        },
        errorFn: onError
    });
}

function onError(error){
    var msg = "An error occurred: message="+error.message;
    if(error.code){
        msg += "; code="+error.code;
    }
    console.error(msg);
    console.dir(error);
    log(msg);
    testFailed();
}

function log(msg){
    msg = testCount + ": " + msg;
    console.log(msg);
    $('body').append('<p>'+msg+'</p>');
    $('body').scrollTop($('body')[0].scrollHeight);
}

$(document).on('deviceready', onDeviceReady);