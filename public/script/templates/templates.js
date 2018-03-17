(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['time'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <p>Kommweqwentar: "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.add : stack1)) != null ? stack1.comment : stack1), depth0))
    + "</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"time\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1._id : stack1), depth0))
    + "\">\n    <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.day : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.month : stack1), depth0))
    + "</p>\n    <p>Från: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.from : stack1)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.from : stack1)) != null ? stack1.minute : stack1), depth0))
    + " Till: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.to : stack1)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.to : stack1)) != null ? stack1.minute : stack1), depth0))
    + "</p>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.add : stack1)) != null ? stack1.comment : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <span class=\"remove-time\">X</span>\n</div>";
},"useData":true});
})();