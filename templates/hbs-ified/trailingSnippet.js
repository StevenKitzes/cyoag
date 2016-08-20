(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['trailingSnippet'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<p class='note'>Previously . . .</p>\r\n<p>"
    + container.escapeExpression(((helper = (helper = helpers.trailingSnippet || (depth0 != null ? depth0.trailingSnippet : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"trailingSnippet","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});
})();