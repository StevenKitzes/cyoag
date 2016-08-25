var Handlebars = require('handlebars');

// body
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['body'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<div id='header' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.header || (depth0 != null ? depth0.header : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"header","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n<div id='trailingSnippet' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.trailingSnippet || (depth0 != null ? depth0.trailingSnippet : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"trailingSnippet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n<div id='lastPathSnippet' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.lastPathSnippet || (depth0 != null ? depth0.lastPathSnippet : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastPathSnippet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n<div id='nodeSnippet' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.nodeSnippet || (depth0 != null ? depth0.nodeSnippet : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nodeSnippet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n\r\n<div id='votification' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.votification || (depth0 != null ? depth0.votification : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"votification","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n\r\n<div id='votifiedPaths' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.votifiedPaths || (depth0 != null ? depth0.votifiedPaths : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"votifiedPaths","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>\r\n\r\n<div id='authoring' class='center'>"
    + ((stack1 = ((helper = (helper = helpers.authoring || (depth0 != null ? depth0.authoring : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"authoring","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</div>";
},"useData":true});
})();

// header
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h1>"
    + container.escapeExpression(((helper = (helper = helpers.pageTitle || (depth0 != null ? depth0.pageTitle : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"pageTitle","hash":{},"data":data}) : helper)))
    + "</h1>";
},"useData":true});
})();

// trailingSnippet
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trailingSnippet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class='note'>Previously . . .</p>\r\n<p>"
    + container.escapeExpression(((helper = (helper = helpers.trailingSnippet || (depth0 != null ? depth0.trailingSnippet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"trailingSnippet","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
})();

// lastPathSnippet
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['lastPathSnippet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p>"
    + container.escapeExpression(((helper = (helper = helpers.lastPathSnippet || (depth0 != null ? depth0.lastPathSnippet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"lastPathSnippet","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
})();

// nodeSnippet
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nodeSnippet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p class='note'>Now . . .</p>\r\n<p>"
    + ((stack1 = ((helper = (helper = helpers.nodeSnippet || (depth0 != null ? depth0.nodeSnippet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"nodeSnippet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"useData":true});
})();

// votification
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['votification'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<button>"
    + ((stack1 = ((helper = (helper = helpers.button1 || (depth0 != null ? depth0.button1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button1","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button> <button>"
    + ((stack1 = ((helper = (helper = helpers.button2 || (depth0 != null ? depth0.button2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"button2","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</button>";
},"useData":true});
})();

// votifiedPaths
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['votifiedPaths'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function";

  return "<p>"
    + ((stack1 = ((helper = (helper = helpers.votificationTitle || (depth0 != null ? depth0.votificationTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"votificationTitle","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>\r\n<ul>\r\n	<li>"
    + ((stack1 = ((helper = (helper = helpers.op1 || (depth0 != null ? depth0.op1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"op1","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n	<li>"
    + ((stack1 = ((helper = (helper = helpers.op2 || (depth0 != null ? depth0.op2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"op2","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n	<li>"
    + ((stack1 = ((helper = (helper = helpers.op3 || (depth0 != null ? depth0.op3 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"op3","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n	<li>"
    + ((stack1 = ((helper = (helper = helpers.op4 || (depth0 != null ? depth0.op4 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"op4","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</li>\r\n</ul>";
},"useData":true});
})();

// authoring
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['authoring'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p>"
    + ((stack1 = ((helper = (helper = helpers.authoring || (depth0 != null ? depth0.authoring : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"authoring","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"useData":true});
})();

module.exports = Handlebars;