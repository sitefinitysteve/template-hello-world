var pageModule = require("ui/page");
var stackModule = require("ui/panels/stack-panel");
var buttonModule = require("ui/button");
var labelModule = require("ui/label");
var geometryModule = require("utils/geometry");
var enums = require("ui/enums");
var modelModule = require("./modules/model");
function createPage() {
    var model = modelModule.model;
    var titleLabel = new labelModule.Label();
    titleLabel.horizontalAlignment = enums.HorizontalAlignment.center;
    titleLabel.margin = new geometryModule.Thickness(20, 20, 20, 20);
    titleLabel.text = "Tap the button";
    titleLabel.cssClass = "title";
    var btn = new buttonModule.Button();
    btn.text = "TAP";
    btn.horizontalAlignment = enums.HorizontalAlignment.center;
    btn.on("click", function () {
        console.log("button click called");
        model.tapAction();
    });
    var messageLabel = new labelModule.Label();
    messageLabel.horizontalAlignment = enums.HorizontalAlignment.center;
    messageLabel.margin = new geometryModule.Thickness(20, 20, 20, 20);
    messageLabel.cssClass = "message";
    messageLabel.textWrap = true;
    messageLabel.bind({
        sourceProperty: "message",
        targetProperty: "text"
    }, model);
    var panel = new stackModule.StackPanel();
    panel.addChild(titleLabel);
    panel.addChild(btn);
    panel.addChild(messageLabel);
    var mainPage = new pageModule.Page();
    mainPage.content = panel;
    mainPage.css = " button { font-size: 42 } .title { font-size: 30 } .message { font-size: 20; color: #284848; }";
    return mainPage;
}
exports.createPage = createPage;
