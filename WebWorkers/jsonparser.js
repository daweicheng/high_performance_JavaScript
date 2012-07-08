//this event handler is called when JSON data is available
self.onmessage = function(event){
//the JSON string comes in as event.data
var jsonText = event.data;
//parse the structure
var jsonData = JSON.parse(jsonText);
//send back to the results
self.postMessage(jsonData);
};