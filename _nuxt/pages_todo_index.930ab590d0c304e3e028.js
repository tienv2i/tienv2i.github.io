webpackJsonp([0],{"0ULy":function(t,o,e){"use strict";var n=function(){var t=this.$createElement,o=this._self._c||t;return o("b-card",{attrs:{"border-variant":"primary","no-body":""}},[o("b-card-body",[this._v("\n    "+this._s(this.todo.text)+"\n  ")]),o("b-button",{staticClass:"top-right",attrs:{variant:"danger"},on:{click:this.remove}},[this._v("x")])],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};o.a=i},"0mKf":function(t,o,e){"use strict";var n=e("mvHQ"),i=e.n(n),r=e("nSlZ");o.a={data:function(){return{todoList:[],newTodo:""}},methods:{addItem:function(){this.newTodo&&this.todoList.push(this.newTodo),event.preventDefault()}},components:{"todo-item":r.a},mounted:function(){void 0!==localStorage.todoList?this.todoList=JSON.parse(localStorage.todoList):localStorage.todoList=i()(this.todoList)},watch:{todoList:function(t){localStorage.todoList=i()(this.todoList)}}}},Icye:function(t,o,e){(t.exports=e("FZ+f")(!1)).push([t.i,".top-right{position:absolute;top:-1px;right:-1px;font-size:13px}",""])},MTal:function(t,o,e){"use strict";var n=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("b-container",{staticClass:"mt-3"},[e("b-row",{attrs:{"align-h":"center"}},[e("b-col",{attrs:{md:"12",lg:"10"}},[e("b-form",{on:{submit:t.addItem}},[e("b-input-group",[e("b-form-input",{attrs:{placeholder:"New todo item here"},model:{value:t.newTodo,callback:function(o){t.newTodo=o},expression:"newTodo"}}),e("b-input-group-append",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[t._v("Add")])],1)],1)],1)],1)],1),e("b-row",t._l(t.todoList,function(o,n){return e("b-col",{key:n,attrs:{md:"6",lg:"4"}},[e("todo-item",{staticClass:"mt-3",attrs:{todo:{header:"Todo "+n,text:o}},on:{remove:function(o){t.todoList.splice(n,1)}}})],1)}))],1)};n._withStripped=!0;var i={render:n,staticRenderFns:[]};o.a=i},Thjr:function(t,o,e){"use strict";o.a={props:["todo"],methods:{remove:function(){this.$emit("remove")}}}},h1Y6:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var n=e("0mKf"),i=e("MTal"),r=e("VU/8")(n.a,i.a,!1,null,null,null);r.options.__file="pages\\todo\\index.vue",o.default=r.exports},nSlZ:function(t,o,e){"use strict";var n=e("Thjr"),i=e("0ULy"),r=!1;var s=function(t){r||e("xu84")},a=e("VU/8")(n.a,i.a,!1,s,null,null);a.options.__file="components\\todo\\TodoItem.vue",o.a=a.exports},xu84:function(t,o,e){var n=e("Icye");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("0a86c15a",n,!1,{sourceMap:!1})}});