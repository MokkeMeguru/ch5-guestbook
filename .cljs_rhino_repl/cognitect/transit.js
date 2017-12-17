// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__31798_31802 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__31799_31803 = null;
var count__31800_31804 = (0);
var i__31801_31805 = (0);
while(true){
if((i__31801_31805 < count__31800_31804)){
var k_31806 = cljs.core._nth.call(null,chunk__31799_31803,i__31801_31805);
var v_31807 = (b[k_31806]);
(a[k_31806] = v_31807);

var G__31808 = seq__31798_31802;
var G__31809 = chunk__31799_31803;
var G__31810 = count__31800_31804;
var G__31811 = (i__31801_31805 + (1));
seq__31798_31802 = G__31808;
chunk__31799_31803 = G__31809;
count__31800_31804 = G__31810;
i__31801_31805 = G__31811;
continue;
} else {
var temp__4657__auto___31812 = cljs.core.seq.call(null,seq__31798_31802);
if(temp__4657__auto___31812){
var seq__31798_31813__$1 = temp__4657__auto___31812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31798_31813__$1)){
var c__29988__auto___31814 = cljs.core.chunk_first.call(null,seq__31798_31813__$1);
var G__31815 = cljs.core.chunk_rest.call(null,seq__31798_31813__$1);
var G__31816 = c__29988__auto___31814;
var G__31817 = cljs.core.count.call(null,c__29988__auto___31814);
var G__31818 = (0);
seq__31798_31802 = G__31815;
chunk__31799_31803 = G__31816;
count__31800_31804 = G__31817;
i__31801_31805 = G__31818;
continue;
} else {
var k_31819 = cljs.core.first.call(null,seq__31798_31813__$1);
var v_31820 = (b[k_31819]);
(a[k_31819] = v_31820);

var G__31821 = cljs.core.next.call(null,seq__31798_31813__$1);
var G__31822 = null;
var G__31823 = (0);
var G__31824 = (0);
seq__31798_31802 = G__31821;
chunk__31799_31803 = G__31822;
count__31800_31804 = G__31823;
i__31801_31805 = G__31824;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args31825 = [];
var len__30519__auto___31828 = arguments.length;
var i__30520__auto___31829 = (0);
while(true){
if((i__30520__auto___31829 < len__30519__auto___31828)){
args31825.push((arguments[i__30520__auto___31829]));

var G__31830 = (i__30520__auto___31829 + (1));
i__30520__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31827 = args31825.length;
switch (G__31827) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31825.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__31832 = (i + (2));
var G__31833 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__31832;
ret = G__31833;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31834_31838 = cljs.core.seq.call(null,v);
var chunk__31835_31839 = null;
var count__31836_31840 = (0);
var i__31837_31841 = (0);
while(true){
if((i__31837_31841 < count__31836_31840)){
var x_31842 = cljs.core._nth.call(null,chunk__31835_31839,i__31837_31841);
ret.push(x_31842);

var G__31843 = seq__31834_31838;
var G__31844 = chunk__31835_31839;
var G__31845 = count__31836_31840;
var G__31846 = (i__31837_31841 + (1));
seq__31834_31838 = G__31843;
chunk__31835_31839 = G__31844;
count__31836_31840 = G__31845;
i__31837_31841 = G__31846;
continue;
} else {
var temp__4657__auto___31847 = cljs.core.seq.call(null,seq__31834_31838);
if(temp__4657__auto___31847){
var seq__31834_31848__$1 = temp__4657__auto___31847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31834_31848__$1)){
var c__29988__auto___31849 = cljs.core.chunk_first.call(null,seq__31834_31848__$1);
var G__31850 = cljs.core.chunk_rest.call(null,seq__31834_31848__$1);
var G__31851 = c__29988__auto___31849;
var G__31852 = cljs.core.count.call(null,c__29988__auto___31849);
var G__31853 = (0);
seq__31834_31838 = G__31850;
chunk__31835_31839 = G__31851;
count__31836_31840 = G__31852;
i__31837_31841 = G__31853;
continue;
} else {
var x_31854 = cljs.core.first.call(null,seq__31834_31848__$1);
ret.push(x_31854);

var G__31855 = cljs.core.next.call(null,seq__31834_31848__$1);
var G__31856 = null;
var G__31857 = (0);
var G__31858 = (0);
seq__31834_31838 = G__31855;
chunk__31835_31839 = G__31856;
count__31836_31840 = G__31857;
i__31837_31841 = G__31858;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31859_31863 = cljs.core.seq.call(null,v);
var chunk__31860_31864 = null;
var count__31861_31865 = (0);
var i__31862_31866 = (0);
while(true){
if((i__31862_31866 < count__31861_31865)){
var x_31867 = cljs.core._nth.call(null,chunk__31860_31864,i__31862_31866);
ret.push(x_31867);

var G__31868 = seq__31859_31863;
var G__31869 = chunk__31860_31864;
var G__31870 = count__31861_31865;
var G__31871 = (i__31862_31866 + (1));
seq__31859_31863 = G__31868;
chunk__31860_31864 = G__31869;
count__31861_31865 = G__31870;
i__31862_31866 = G__31871;
continue;
} else {
var temp__4657__auto___31872 = cljs.core.seq.call(null,seq__31859_31863);
if(temp__4657__auto___31872){
var seq__31859_31873__$1 = temp__4657__auto___31872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31859_31873__$1)){
var c__29988__auto___31874 = cljs.core.chunk_first.call(null,seq__31859_31873__$1);
var G__31875 = cljs.core.chunk_rest.call(null,seq__31859_31873__$1);
var G__31876 = c__29988__auto___31874;
var G__31877 = cljs.core.count.call(null,c__29988__auto___31874);
var G__31878 = (0);
seq__31859_31863 = G__31875;
chunk__31860_31864 = G__31876;
count__31861_31865 = G__31877;
i__31862_31866 = G__31878;
continue;
} else {
var x_31879 = cljs.core.first.call(null,seq__31859_31873__$1);
ret.push(x_31879);

var G__31880 = cljs.core.next.call(null,seq__31859_31873__$1);
var G__31881 = null;
var G__31882 = (0);
var G__31883 = (0);
seq__31859_31863 = G__31880;
chunk__31860_31864 = G__31881;
count__31861_31865 = G__31882;
i__31862_31866 = G__31883;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__31884_31888 = cljs.core.seq.call(null,v);
var chunk__31885_31889 = null;
var count__31886_31890 = (0);
var i__31887_31891 = (0);
while(true){
if((i__31887_31891 < count__31886_31890)){
var x_31892 = cljs.core._nth.call(null,chunk__31885_31889,i__31887_31891);
ret.push(x_31892);

var G__31893 = seq__31884_31888;
var G__31894 = chunk__31885_31889;
var G__31895 = count__31886_31890;
var G__31896 = (i__31887_31891 + (1));
seq__31884_31888 = G__31893;
chunk__31885_31889 = G__31894;
count__31886_31890 = G__31895;
i__31887_31891 = G__31896;
continue;
} else {
var temp__4657__auto___31897 = cljs.core.seq.call(null,seq__31884_31888);
if(temp__4657__auto___31897){
var seq__31884_31898__$1 = temp__4657__auto___31897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31884_31898__$1)){
var c__29988__auto___31899 = cljs.core.chunk_first.call(null,seq__31884_31898__$1);
var G__31900 = cljs.core.chunk_rest.call(null,seq__31884_31898__$1);
var G__31901 = c__29988__auto___31899;
var G__31902 = cljs.core.count.call(null,c__29988__auto___31899);
var G__31903 = (0);
seq__31884_31888 = G__31900;
chunk__31885_31889 = G__31901;
count__31886_31890 = G__31902;
i__31887_31891 = G__31903;
continue;
} else {
var x_31904 = cljs.core.first.call(null,seq__31884_31898__$1);
ret.push(x_31904);

var G__31905 = cljs.core.next.call(null,seq__31884_31898__$1);
var G__31906 = null;
var G__31907 = (0);
var G__31908 = (0);
seq__31884_31888 = G__31905;
chunk__31885_31889 = G__31906;
count__31886_31890 = G__31907;
i__31887_31891 = G__31908;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args31909 = [];
var len__30519__auto___31920 = arguments.length;
var i__30520__auto___31921 = (0);
while(true){
if((i__30520__auto___31921 < len__30519__auto___31920)){
args31909.push((arguments[i__30520__auto___31921]));

var G__31922 = (i__30520__auto___31921 + (1));
i__30520__auto___31921 = G__31922;
continue;
} else {
}
break;
}

var G__31911 = args31909.length;
switch (G__31911) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31909.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__31912 = obj;
G__31912.push(kfn.call(null,k),vfn.call(null,v));

return G__31912;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x31913 = cljs.core.clone.call(null,handlers);
x31913.forEach = ((function (x31913,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__31914 = cljs.core.seq.call(null,coll);
var chunk__31915 = null;
var count__31916 = (0);
var i__31917 = (0);
while(true){
if((i__31917 < count__31916)){
var vec__31918 = cljs.core._nth.call(null,chunk__31915,i__31917);
var k = cljs.core.nth.call(null,vec__31918,(0),null);
var v = cljs.core.nth.call(null,vec__31918,(1),null);
f.call(null,v,k);

var G__31924 = seq__31914;
var G__31925 = chunk__31915;
var G__31926 = count__31916;
var G__31927 = (i__31917 + (1));
seq__31914 = G__31924;
chunk__31915 = G__31925;
count__31916 = G__31926;
i__31917 = G__31927;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31914);
if(temp__4657__auto__){
var seq__31914__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31914__$1)){
var c__29988__auto__ = cljs.core.chunk_first.call(null,seq__31914__$1);
var G__31928 = cljs.core.chunk_rest.call(null,seq__31914__$1);
var G__31929 = c__29988__auto__;
var G__31930 = cljs.core.count.call(null,c__29988__auto__);
var G__31931 = (0);
seq__31914 = G__31928;
chunk__31915 = G__31929;
count__31916 = G__31930;
i__31917 = G__31931;
continue;
} else {
var vec__31919 = cljs.core.first.call(null,seq__31914__$1);
var k = cljs.core.nth.call(null,vec__31919,(0),null);
var v = cljs.core.nth.call(null,vec__31919,(1),null);
f.call(null,v,k);

var G__31932 = cljs.core.next.call(null,seq__31914__$1);
var G__31933 = null;
var G__31934 = (0);
var G__31935 = (0);
seq__31914 = G__31932;
chunk__31915 = G__31933;
count__31916 = G__31934;
i__31917 = G__31935;
continue;
}
} else {
return null;
}
}
break;
}
});})(x31913,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x31913;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args31936 = [];
var len__30519__auto___31942 = arguments.length;
var i__30520__auto___31943 = (0);
while(true){
if((i__30520__auto___31943 < len__30519__auto___31942)){
args31936.push((arguments[i__30520__auto___31943]));

var G__31944 = (i__30520__auto___31943 + (1));
i__30520__auto___31943 = G__31944;
continue;
} else {
}
break;
}

var G__31938 = args31936.length;
switch (G__31938) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31936.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit31939 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit31939 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta31940){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta31940 = meta31940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit31939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31941,meta31940__$1){
var self__ = this;
var _31941__$1 = this;
return (new cognitect.transit.t_cognitect$transit31939(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta31940__$1));
});

cognitect.transit.t_cognitect$transit31939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31941){
var self__ = this;
var _31941__$1 = this;
return self__.meta31940;
});

cognitect.transit.t_cognitect$transit31939.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit31939.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit31939.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit31939.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit31939.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta31940","meta31940",2009596529,null)], null);
});

cognitect.transit.t_cognitect$transit31939.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit31939.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit31939";

cognitect.transit.t_cognitect$transit31939.cljs$lang$ctorPrWriter = (function (this__29690__auto__,writer__29691__auto__,opt__29692__auto__){
return cljs.core._write.call(null,writer__29691__auto__,"cognitect.transit/t_cognitect$transit31939");
});

cognitect.transit.__GT_t_cognitect$transit31939 = (function cognitect$transit$__GT_t_cognitect$transit31939(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31940){
return (new cognitect.transit.t_cognitect$transit31939(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta31940));
});

}

return (new cognitect.transit.t_cognitect$transit31939(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__28643__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__28643__auto__)){
return or__28643__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map