// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__34148,handler){
var map__34149 = p__34148;
var map__34149__$1 = ((((!((map__34149 == null)))?((((map__34149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34149):map__34149);
var uri = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__34149__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__34149,map__34149__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__34147_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__34147_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__34149,map__34149__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___34157 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___34157)){
var response_type_34158 = temp__4657__auto___34157;
this$__$1.responseType = cljs.core.name.call(null,response_type_34158);
} else {
}

var seq__34151_34159 = cljs.core.seq.call(null,headers);
var chunk__34152_34160 = null;
var count__34153_34161 = (0);
var i__34154_34162 = (0);
while(true){
if((i__34154_34162 < count__34153_34161)){
var vec__34155_34163 = cljs.core._nth.call(null,chunk__34152_34160,i__34154_34162);
var k_34164 = cljs.core.nth.call(null,vec__34155_34163,(0),null);
var v_34165 = cljs.core.nth.call(null,vec__34155_34163,(1),null);
this$__$1.setRequestHeader(k_34164,v_34165);

var G__34166 = seq__34151_34159;
var G__34167 = chunk__34152_34160;
var G__34168 = count__34153_34161;
var G__34169 = (i__34154_34162 + (1));
seq__34151_34159 = G__34166;
chunk__34152_34160 = G__34167;
count__34153_34161 = G__34168;
i__34154_34162 = G__34169;
continue;
} else {
var temp__4657__auto___34170 = cljs.core.seq.call(null,seq__34151_34159);
if(temp__4657__auto___34170){
var seq__34151_34171__$1 = temp__4657__auto___34170;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34151_34171__$1)){
var c__29988__auto___34172 = cljs.core.chunk_first.call(null,seq__34151_34171__$1);
var G__34173 = cljs.core.chunk_rest.call(null,seq__34151_34171__$1);
var G__34174 = c__29988__auto___34172;
var G__34175 = cljs.core.count.call(null,c__29988__auto___34172);
var G__34176 = (0);
seq__34151_34159 = G__34173;
chunk__34152_34160 = G__34174;
count__34153_34161 = G__34175;
i__34154_34162 = G__34176;
continue;
} else {
var vec__34156_34177 = cljs.core.first.call(null,seq__34151_34171__$1);
var k_34178 = cljs.core.nth.call(null,vec__34156_34177,(0),null);
var v_34179 = cljs.core.nth.call(null,vec__34156_34177,(1),null);
this$__$1.setRequestHeader(k_34178,v_34179);

var G__34180 = cljs.core.next.call(null,seq__34151_34171__$1);
var G__34181 = null;
var G__34182 = (0);
var G__34183 = (0);
seq__34151_34159 = G__34180;
chunk__34152_34160 = G__34181;
count__34153_34161 = G__34182;
i__34154_34162 = G__34183;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28643__auto__ = body;
if(cljs.core.truth_(or__28643__auto__)){
return or__28643__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map