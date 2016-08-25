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