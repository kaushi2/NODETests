var express = require('express');
// var session    = require('express-session')
var bodyParser = require('body-parser');
var _ = require('Lodash');
// var myarrays = require('LoDashMerge.js');
var app = express();

var util = require('util');
var xml2js = require('xml2js');

var xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
'<ns2:users xmlns:ns2="identity.rest.mgmt.acs.nm.apple.com">' +
'    <User>' +
'        <Id>1</Id>' +
'        <changePassword>false</changePassword>' +
'       <created>Aug 19 2015 16:28:28</created>' +
'    </User>' +
'     <User>' +
'        <Id>2</Id>' +
'        <changePassword>false</changePassword>' +
'        <created>Apr 28 2016 14:28:29</created>' +
'    </User>' +
'</ns2:users>';

// xml2JsonSample(xml)
// .then(txt => console.log(util.inspect(txt, false, null)))
app.get("/", function (req,res) {

xml2JsonSample(xml)
    .then(txt => 
        res.send(txt)
        // console.log(util.inspect(txt, false, null))
    )

    // var parseString = require('xml2js').parseString;
    // parseString(xml, function (err, result) {
    //     console.log(result);
    //     res.status(200).json(result)
    // });
});
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(err) {
    if (!err)
        console.log("Site is running at port", app.get('port'));
    else console.log(err)
});
async function xml2JsonSample(res){
    var promise = await new Promise(function (resolve, reject) {

            xml2js.parseString(res, function (jsError, jsResult) {

                if (jsError) {
                    reject(jsError);
                } else {
                      resolve(jsResult);                     
                }  
            });  
        });  
    return promise;
}