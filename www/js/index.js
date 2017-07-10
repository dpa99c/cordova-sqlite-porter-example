var db, origJSON, origSQL;

function onDeviceReady(){
    // Open WebSQL DB
    db = window.openDatabase("Test", "1.0", "TestDB", 1 * 1024);

    testJSON("escaping", function(){
        testSQL("escaping", function(){
            testJSON("complex_dump", function(){
                testSQL("complex_dump", function(){
                    testComplete();
                })
            });
        })
    });
}

function testJSON(testName, done){
    doWipe(function(){
        loadFromFile(testName, "json", function(source){
            origJSON = source;
            doImportJson(source, function(){
                doExportJson(function(result){
                    if(normaliseJson(result) === normaliseJson(origJSON)){
                        log("Exported JSON exactly matches imported JSON");
                        done();
                    }else{
                        fail("Exported JSON doesn't match imported JSON");
                        console.log("result: "+normaliseJson(result));
                        console.log("orig: "+normaliseJson(origJSON));
                    }
                });
            });
        });
    });
}

function testSQL(testName, done){
    doWipe(function(){
        loadFromFile(testName, "sql", function(source){
            origSQL = source;
            doImportSql(source, function(){
                doExportSql(function(result){
                    if(normaliseSql(result) === normaliseSql(origSQL)){
                        log("Exported SQL exactly matches imported SQL");
                        done();
                    }else{
                        fail("Exported SQL doesn't match imported SQL");
                        console.log("result: "+normaliseSql(result));
                        console.log("orig: "+normaliseSql(origSQL));
                    }
                });
            });
        });
    });
}

function testComplete(){
    $('body').css('background-color', 'green');
    setTimeout(function(){
        alert("Test PASSED");
    },100);
}

function testFailed(){
    $('body').css('background-color', 'red');
    setTimeout(function(){
        alert("Test FAILED");
    },100);
}

function loadFromFile(testName, type, done){
    var filename = type+"/"+testName+"."+type;
    $.get(filename, done, "text");
}

function doImportJson(source, done){
    cordova.plugins.sqlitePorter.importJsonToDb(db, source, {
        successFn: function(){
            done();
        },
        errorFn: onError
    });
}

function doExportJson(done){
    cordova.plugins.sqlitePorter.exportDbToJson(db, {
        successFn: function(json){
            var result = JSON.stringify(json);
            done(result);
        },
        dataOnly: false,
        structureOnly: false
    });
}

function normaliseJson(json){
    return JSON.stringify(JSON.parse(json));
}

function doImportSql(source, done){
    cordova.plugins.sqlitePorter.importSqlToDb(db, source, {
        successFn: function(){
            done();
        },
        errorFn: onError
    });
}

function doExportSql(done){
    cordova.plugins.sqlitePorter.exportDbToSql(db, {
        successFn: function(result){
            done(result);
        },
        dataOnly: false,
        structureOnly: false
    });
}

function normaliseSql(sql){
    return sql
        .replace(/(?:\/\*(?:[\s\S]*?)\*\/)|(?:([\s;])+\/\/(?:.*)$)/gm,"") // strip out comments
        .replace(/[\n\r]/g,''); // strip line breaks for comparison
}

function doWipe(done){
    cordova.plugins.sqlitePorter.wipeDb(db, {
        successFn: function(){
            done();
        },
        errorFn: onError
    });
}

function fail(reason){
    console.error(reason);
    log(reason);
    testFailed();
}

function onError(error){
    console.dir(error);
    var msg = "An error occurred: message="+error.message;
    if(error.code){
        msg += "; code="+error.code;
    }
    fail(msg);
}

function log(msg){
    console.log(msg);
    $('body').append('<p>'+msg+'</p>');
    $('body').scrollTop($('body')[0].scrollHeight);
}

$(document).on('deviceready', onDeviceReady);