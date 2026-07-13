"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(v){throw (r=0, v)}};};var b=c(function(G,x){
var m=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-abs/dist');function O(e,r,v,f,i,s,q){var a,o,u,t,n;if(e<=0)return i;if(o=f,u=q,a=p(r[o]),i[u]=a,u+=s,n=1,m(a)===!1)for(n;n<e;n++){if(o+=v,t=p(r[o]),m(t)){a=t;break}t<a&&(a=t),i[u]=a,u+=s}if(m(a))for(n;n<e;n++)i[u]=a,u+=s;return i}x.exports=O
});var y=c(function(H,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=b();function h(e,r,v,f,i){var s=j(e,v),q=j(e,i);return g(e,r,v,s,f,i,q)}l.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),z=b();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),d,E=B(A(__dirname,"./native.js"));C(E)?d=D:d=E;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
