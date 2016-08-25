(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['authoring'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p>"
    + ((stack1 = ((helper = (helper = helpers.authoring || (depth0 != null ? depth0.authoring : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"authoring","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"useData":true});
})();