(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['errorMessage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"alert alert-danger\">\n    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.err : depth0)) != null ? stack1.responseText : stack1), depth0))
    + "\n</div>";
},"useData":true});
templates['monthlyTime'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"time-item col-12 mt-2\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0._id : depth0), depth0))
    + "\" data-day=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.day : stack1), depth0))
    + "\">\n    <div class=\"date mb-2 d-none\">\n        <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.day : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.month : stack1), depth0))
    + "</p>\n    </div>\n    <div class=\"time\">\n        <p class=\"m-0 d-flex\"><span class=\"d-inline-block mr-2\">Från: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.from : depth0)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.from : depth0)) != null ? stack1.minute : stack1), depth0))
    + "</span> - <span class=\"d-inline-block ml-2\">Till: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.to : depth0)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.to : depth0)) != null ? stack1.minute : stack1), depth0))
    + "</span></p>\n        <input type=\"hidden\" class=\"fhDone\" name=\"fromHour\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.from : depth0)) != null ? stack1.hour : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"fmDone\" name=\"fromMin\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.from : depth0)) != null ? stack1.minute : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"thDone\" name=\"toHour\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.to : depth0)) != null ? stack1.hour : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"tmDone\" name=\"toMin\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.to : depth0)) != null ? stack1.minute : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"no-time\" value=\""
    + alias2(alias1((depth0 != null ? depth0.noTime : depth0), depth0))
    + "\">\n    </div>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.add : depth0)) != null ? stack1.comment : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <div class=\"comment\">\n        <p class=\"m-0\">Kommentar: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.add : depth0)) != null ? stack1.comment : stack1), depth0))
    + "</p>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.response : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['storedTime'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.monthTimes : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"time-item col-3\" data-id=\""
    + alias2(alias1((depth0 != null ? depth0._id : depth0), depth0))
    + "\" data-day=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.day : stack1), depth0))
    + "\">\n        <div class=\"date d-none\">\n            <p>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.day : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.date : depth0)) != null ? stack1.month : stack1), depth0))
    + "</p>\n        </div>\n        <div class=\"time\">\n            <p class=\"m-0\">Från: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.from : depth0)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.from : depth0)) != null ? stack1.minute : stack1), depth0))
    + " Till: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.to : depth0)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.to : depth0)) != null ? stack1.minute : stack1), depth0))
    + "</p>\n        </div>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.add : depth0)) != null ? stack1.comment : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        <a class=\"remove-time btn btn-danger my-2\">Ta bort</a>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "        <div class=\"comment\">\n            <p class=\"m-0\">Kommentar: "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.add : depth0)) != null ? stack1.comment : stack1), depth0))
    + "</p>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.storages : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
templates['time'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "    <div class=\"comment\">\n        <p class=\"m-0\">Kommentar: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.add : stack1)) != null ? stack1.comment : stack1), depth0))
    + "</p>\n        <input type=\"hidden\" class=\"commentDone\" name=\"comment\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.add : stack1)) != null ? stack1.comment : stack1), depth0))
    + "\">\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<div class=\"time-item col-3 d-flex flex-column justify-content-between mt-2\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" data-day=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.day : stack1), depth0))
    + "\">\n    <div class=\"date mb-2 d-none\">\n        <p>"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.day : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.month : stack1), depth0))
    + "</p>\n        <input type=\"hidden\" class=\"dayDone\" name=\"day\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.day : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"monthDone\" name=\"month\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.date : stack1)) != null ? stack1.month : stack1), depth0))
    + "\">\n    </div>\n    <div class=\"time\">\n        <p class=\"m-0 d-flex justify-content-between\"><span>Från: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.from : stack1)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.from : stack1)) != null ? stack1.minute : stack1), depth0))
    + "</span>-<span>Till: "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.to : stack1)) != null ? stack1.hour : stack1), depth0))
    + ":"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.to : stack1)) != null ? stack1.minute : stack1), depth0))
    + "</span></p>\n        <input type=\"hidden\" class=\"fhDone\" name=\"fromHour\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.from : stack1)) != null ? stack1.hour : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"fmDone\" name=\"fromMin\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.from : stack1)) != null ? stack1.minute : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"thDone\" name=\"toHour\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.to : stack1)) != null ? stack1.hour : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"tmDone\" name=\"toMin\" value=\""
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.to : stack1)) != null ? stack1.minute : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"year\" name=\"year\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.year : stack1), depth0))
    + "\">\n        <input type=\"hidden\" class=\"no-time\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.noTime : stack1), depth0))
    + "\">\n    </div>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.response : depth0)) != null ? stack1.add : stack1)) != null ? stack1.comment : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <a class=\"remove-time btn btn-danger my-2 btn-block\">Ta bort</a>\n</div>";
},"useData":true});
})();