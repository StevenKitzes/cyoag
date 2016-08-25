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