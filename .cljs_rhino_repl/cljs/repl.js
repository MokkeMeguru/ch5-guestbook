// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31700_31714 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31701_31715 = null;
var count__31702_31716 = (0);
var i__31703_31717 = (0);
while(true){
if((i__31703_31717 < count__31702_31716)){
var f_31718 = cljs.core._nth.call(null,chunk__31701_31715,i__31703_31717);
cljs.core.println.call(null,"  ",f_31718);

var G__31719 = seq__31700_31714;
var G__31720 = chunk__31701_31715;
var G__31721 = count__31702_31716;
var G__31722 = (i__31703_31717 + (1));
seq__31700_31714 = G__31719;
chunk__31701_31715 = G__31720;
count__31702_31716 = G__31721;
i__31703_31717 = G__31722;
continue;
} else {
var temp__4657__auto___31723 = cljs.core.seq.call(null,seq__31700_31714);
if(temp__4657__auto___31723){
var seq__31700_31724__$1 = temp__4657__auto___31723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31700_31724__$1)){
var c__29988__auto___31725 = cljs.core.chunk_first.call(null,seq__31700_31724__$1);
var G__31726 = cljs.core.chunk_rest.call(null,seq__31700_31724__$1);
var G__31727 = c__29988__auto___31725;
var G__31728 = cljs.core.count.call(null,c__29988__auto___31725);
var G__31729 = (0);
seq__31700_31714 = G__31726;
chunk__31701_31715 = G__31727;
count__31702_31716 = G__31728;
i__31703_31717 = G__31729;
continue;
} else {
var f_31730 = cljs.core.first.call(null,seq__31700_31724__$1);
cljs.core.println.call(null,"  ",f_31730);

var G__31731 = cljs.core.next.call(null,seq__31700_31724__$1);
var G__31732 = null;
var G__31733 = (0);
var G__31734 = (0);
seq__31700_31714 = G__31731;
chunk__31701_31715 = G__31732;
count__31702_31716 = G__31733;
i__31703_31717 = G__31734;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31735 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28643__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28643__auto__)){
return or__28643__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31735);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31735)))?cljs.core.second.call(null,arglists_31735):arglists_31735));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31704 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31705 = null;
var count__31706 = (0);
var i__31707 = (0);
while(true){
if((i__31707 < count__31706)){
var vec__31708 = cljs.core._nth.call(null,chunk__31705,i__31707);
var name = cljs.core.nth.call(null,vec__31708,(0),null);
var map__31709 = cljs.core.nth.call(null,vec__31708,(1),null);
var map__31709__$1 = ((((!((map__31709 == null)))?((((map__31709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31709):map__31709);
var doc = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31736 = seq__31704;
var G__31737 = chunk__31705;
var G__31738 = count__31706;
var G__31739 = (i__31707 + (1));
seq__31704 = G__31736;
chunk__31705 = G__31737;
count__31706 = G__31738;
i__31707 = G__31739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31704);
if(temp__4657__auto__){
var seq__31704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31704__$1)){
var c__29988__auto__ = cljs.core.chunk_first.call(null,seq__31704__$1);
var G__31740 = cljs.core.chunk_rest.call(null,seq__31704__$1);
var G__31741 = c__29988__auto__;
var G__31742 = cljs.core.count.call(null,c__29988__auto__);
var G__31743 = (0);
seq__31704 = G__31740;
chunk__31705 = G__31741;
count__31706 = G__31742;
i__31707 = G__31743;
continue;
} else {
var vec__31711 = cljs.core.first.call(null,seq__31704__$1);
var name = cljs.core.nth.call(null,vec__31711,(0),null);
var map__31712 = cljs.core.nth.call(null,vec__31711,(1),null);
var map__31712__$1 = ((((!((map__31712 == null)))?((((map__31712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31712):map__31712);
var doc = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31712__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31744 = cljs.core.next.call(null,seq__31704__$1);
var G__31745 = null;
var G__31746 = (0);
var G__31747 = (0);
seq__31704 = G__31744;
chunk__31705 = G__31745;
count__31706 = G__31746;
i__31707 = G__31747;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map