angular.module('sbMapTemplate', ['template/sb_map.html']);

angular.module("template/sb_map.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/sb_map.html",
    "<!-- ng-style=\"{visibility: show_map ? 'visible' : 'hidden'}\" -->\n" +
    "<div id=\"sb-map-container\" class=\"map\" >\n" +
    "    <div id=\"leaflet-map\" ng-if=\"showMap\">\n" +
    "        <leaflet center=\"center\" markers=\"markers | sbDateFilter:date:filterEnabled\" height=\"520px\" layers=\"layers\" defaults=\"defaults\"></leaflet>\n" +
    "    </div>\n" +
    "    <div id=\"hover-info\">\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "    <!--<div ng-show=\"showTime\">\n" +
    "        <input type=\"checkbox\" ng-model=\"filterEnabled\"></input>\n" +
    "        <input type=\"date\" ng-model=\"date\"></input>\n" +
    "        <div ng-bind=\"date | date:'MM/dd/yyyy'\"></div>\n" +
    "        <div>Filter {{filterEnabled}}</div>\n" +
    "        <div ng-repeat=\"m in markers | sbDateFilter:date:filterEnabled\">{{m}}</div>\n" +
    "    </div>-->\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "");
}]);
