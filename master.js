const ResNN1 = require('neural');
const ResNN2 = require('neural');
const ResNN3 = require('neural');
const ResNN4 = require('neural');
const ResNN5 = require('neural');

var async = require("async");

let resultArray = [];

async.parallel([
        function(callback){
            let error = ResNN1.teach();
            resultArray[0] = "NN1 "+error;
            callback(null, resultArray[0]);
        },
        function(callback){
            let error = ResNN2.teach();
            resultArray[1] = "NN2 "+error;
            callback(null, resultArray[1]);
        },
        function(callback){
            let error = ResNN3.teach();
            resultArray[2] = "NN3 "+error;
            callback(null, resultArray[2]);
        },
        function(callback){
            let error = ResNN4.teach();
            resultArray[3] = "NN4 "+error;
            callback(null, resultArray[3]);
        },
        function(callback){
            let error = ResNN5.teach();
            resultArray[4] = "NN5 "+error;
            callback(null, resultArray[4]);
    }
    ],
    // optional callback
    function(err, results){
        console.log(results);
});