"use strict";function _classCallCheck(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,a,n){return a&&_defineProperties(e.prototype,a),n&&_defineProperties(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Tab1=exports.Tab=void 0;var Tab=function(){function n(e,a){_classCallCheck(this,n),this.data=e,this.root=a}return _createClass(n,[{key:"init",value:function(){this.renderUI(),this.addEventHandle()}},{key:"renderUI",value:function(){this.root.prepend(template.render('\n    <li class="all">\n      所有商品分类\n      <ul class="all-list">\n        {{each $data}}\n        <li class="all-item">\n          <span class={{\'icon\' + $index}}></span>\n          <a href="#">{{$value.title}}</a>\n          <i></i>\n          <div class="item-list" style="top:{{-$index*43 + \'px\'}}">\n          {{each $value.data}}\n            <div>\n              <h3 class="title {{$value.hasBg?\'\':\'no-bg\'}}">\n                <a target="_blank" href="#" style="background-position:{{$value.x + \'px \' + $value.y + \'px\'}}">\n                  {{$value.title}}\n                </a>\n                <a target="_blank" href="#" class="more">\n                  更多\n                </a>\n              </h3>\n              <p class="category-label-list">\n              {{each $value.list}}\n                <a target="_blank" class={{$value.isRed?\'hight-light\':\'\'}}>\n                {{$value.name}}\n                </a>\n              {{/each}}\n              </p>\n            </div> \n          {{/each}}\n          </div>\n        </li>\n        {{/each}}\n      </ul>\n    </li>\n    ',this.data))}},{key:"addEventHandle",value:function(){var e=this.root.find(".all"),a=this.root.find(".all-list");e.hover(function(){a.addClass("active")},function(){a.removeClass("active")}),a.find(".all-item").hover(function(){$(this).addClass("active")},function(){$(this).removeClass("active")})}}]),n}();exports.Tab=Tab;var Tab1=function(){function n(e,a){_classCallCheck(this,n),this.data=e,this.root=a}return _createClass(n,[{key:"init",value:function(){this.renderUI(),this.addEventHandle()}},{key:"renderUI",value:function(){this.root.html(template.render('\n    <ul>\n      <li class="active"><a href="http://localhost" class="first item">首页</a></li>\n      {{each $data}}\n      <li class="li-item">\n        <a href="#" class="item">{{$value.title}}</a>\n        <ul class="show-list clearfix">\n          {{each $value.data}}\n          <li class={{$index==2?"brand":""}}>\n            <h4>{{$value.title}}</h4>\n            <p>\n            {{each $value.list}}\n              {{if $value.includes("http")}}\n                <a href="#"><img src={{$value}}></a>\n              {{else}}\n                <a href="http://localhost/html/list.html?classId=1">{{$value}}</a>\n              {{/if}}\n            {{/each}}\n            </p>\n          </li>\n          {{/each}}\n        </ul>\n      </li>\n      {{/each}}\n      <li class="li-item"><a href="#" class="item">配件</a></li>\n    </ul>\n    ',this.data))}},{key:"addEventHandle",value:function(){this.root.children("ul").on("mouseover",".li-item",function(){$(this).addClass("active")}).on("mouseout",".li-item",function(){$(this).removeClass("active")})}}]),n}();exports.Tab1=Tab1;