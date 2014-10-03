var pages = require("ui/pages");
var stackPanel = require("ui/panels/stack-panel");
var button = require("ui/button");
var label = require("ui/label");
var model = require("/modules/model");
var layout = require("ui/core/layout");
var color = require("color");
var geometry = require("utils/geometry");

var titleLabel = new label.Label();
titleLabel.text = "Tap the button";
titleLabel.style.fontSize = 30;
titleLabel.horizontalAlignment = layout.HorizontalAlignment.center;

var messageLabel = new label.Label();
messageLabel.text = model.getText();
messageLabel.style.fontSize = 18;
messageLabel.horizontalAlignment = layout.HorizontalAlignment.center;
messageLabel.style.backgroundColor = new color.Color("#333333");
messageLabel.style.color = new color.Color("#d2d2d2");

var btn = new button.Button();
btn.text = "Tap";
btn.style.fontSize = 22;
btn.margin = new geometry.Thickness(10, 10, 10, 10);
btn.horizontalAlignment = layout.HorizontalAlignment.center;

btn.on("click", function () {
    console.log("button click called");
    model.action();
    if (model.counter < 0)
    {
        messageLabel.text = "Hoorraaay, you unlocked the NativeScript clicker achievement!";
        messageLabel.textWrap = true;
    }
    else
    {
        messageLabel.text = model.getText();
    }
});

var panel = new stackPanel.StackPanel();

panel.addChild(titleLabel);
panel.addChild(btn);
panel.addChild(messageLabel);

var page = new pages.Page();
page.content = panel;
exports.Page = page;
