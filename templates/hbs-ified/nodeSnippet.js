(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nodeSnippet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<p class='note'>Now . . .</p>\r\n<p>"
    + ((stack1 = ((helper = (helper = helpers.nodeSnippet || (depth0 != null ? depth0.nodeSnippet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"nodeSnippet","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</p>";
},"useData":true});
})();