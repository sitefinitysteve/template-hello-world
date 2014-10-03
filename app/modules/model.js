var observable = require("ui/core/observable");

var model = new observable.Observable();
model.counter = 10;
model.setProperty("message", model.counter + " taps left");
model.tapAction = function(){
	model.counter --;
    if (model.counter <= 0)
    {
    	model.setProperty("message", "Hoorraaay! You unlocked the NativeScript clicker achievement!");
    }
    else
    {
    	model.setProperty("message", model.counter + " taps left")	
    }
}

module.exports = model;
