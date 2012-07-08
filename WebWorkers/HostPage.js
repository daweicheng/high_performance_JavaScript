var worker = new Worker("jsonparser.js");
//when the data is available, this event handler is called
worker.onmessage = function(event){
//the JSON structure is passed back
var jsonData = event.data;
//the JSON structure is used
evaluateData(jsonData);
};
//pass in the large JSON string to parse
worker.postMessage(jsonText);