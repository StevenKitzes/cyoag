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