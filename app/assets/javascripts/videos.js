// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function z(t){
    var e=typeof t;
    return"function"==e||!!t&&"object"==e
}
function B(t){
    return!!s[u.call(t)]
}
function V(t){
    return!!l[u.call(t)]
}
function G(t){
    return"object"==typeof t&&"number"==typeof t.nodeType&&"object"==typeof t.ownerDocument
}
function F(t){
    return t!=t
}
function W(t){
    for(var e=0,i=arguments.length;e<i;e++)
        if(null!=arguments[e])return arguments[e]
}

function H(t,e){
    return null!=t?t:e
}
function Z(t,e,i){
    return null!=t?t:null!=e?e:i
}
function U(){
    return Function.call.apply(o,arguments)
}
function X(t){
    if("number"==typeof t)
        return[t,t,t,t];
    var e=t.length;
    return 2===e?[t[0],t[1],t[0],t[1]]:3===e?[t[0],t[1],t[2],t[1]]:t
}
function Y(t,e){
    if(!t)throw new Error(e)
}
function j(t){
    return null==t?null:"function"==typeof t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")
}
a.createCanvas=function(){return document.createElement("canvas")};
var q="__ec_primitive__";
function K(t){
    t[q]=!0
}
function $(t){
    return t[q]
}
function J(t){
    var i=O(t);
    this.data={};
    var n=this;
    function e(t,e){
        i?n.set(t,e):n.set(e,t)
    }
    t instanceof J?t.each(e):t&&E(t,e)
}
function Q(t){
    return new J(t)
}
function tt(t,e){
    for(var i=new t.constructor(t.length+e.length),n=0;n<t.length;n++)
        i[n]=t[n];
    var o=t.length;
    for(n=0;n<e.length;n++)
        i[n+o]=e[n];
    return i
}
function et(){

}
J.prototype={constructor:J,get:function(t){
    return this.data.hasOwnProperty(t)?this.data[t]:null
    },
    set:function(t,e){
    return this.data[t]=e
    },
    each:function(t,e){
    for(var i in void 0!==e&&(t=A(t,e)),this.data)
        this.data.hasOwnProperty(i)&&t(this.data[i],i)
    },
    removeKey:function(t){
    delete this.data[t]
}
};
var it=(Object.freeze||Object)({$override:f,clone:L,merge:m,mergeAll:p,extend:k,defaults:D,createCanvas:g,getContext:x,indexOf:_,inherits:w,mixin:b,isArrayLike:P,each:E,map:N,reduce:S,filter:M,find:I,bind:A,curry:T,isArray:O,isFunction:C,isString:R,isObject:z,isBuiltInObject:B,isTypedArray:V,isDom:G,eqNaN:F,retrieve:W,retrieve2:H,retrieve3:Z,slice:U,normalizeCssArray:X,assert:Y,trim:j,setAsPrimitive:K,isPrimitive:$,createHashMap:Q,concatArray:tt,noop:et}),nt="undefined"==typeof Float32Array?Array:Float32Array;
function ot(t,e){
    var i=new nt(2);
    return null==t&&(t=0),null==e&&(e=0),i[0]=t,i[1]=e,i
}
function at(t,e){
    return t[0]=e[0],t[1]=e[1],t
}
function rt(t){
    var e=new nt(2);
    return e[0]=t[0],e[1]=t[1],e
}
function st(t,e,i){
    return t[0]=e,t[1]=i,t
}
function lt(t,e,i){
    return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t
}
function ut(t,e,i,n){
    return t[0]=e[0]+i[0]*n,t[1]=e[1]+i[1]*n,t
}
function ht(t,e,i){
    return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t
}
function ct(t){
    return Math.sqrt(ft(t))
}
var dt=ct;
function ft(t){
    return t[0]*t[0]+t[1]*t[1]
}
var pt=ft;
function gt(t,e,i){
    return t[0]=e[0]*i,t[1]=e[1]*i,t
}
function mt(t,e){
    var i=ct(e);
    return 0===i?(t[0]=0,t[1]=0):(t[0]=e[0]/i,t[1]=e[1]/i),t
}
function vt(t,e){
    return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))
}
var yt=vt;
function xt(t,e){
    return(t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1])
}
var _t=xt;
function wt(t,e,i,n){
    return t[0]=e[0]+n*(i[0]-e[0]),t[1]=e[1]+n*(i[1]-e[1]),t
}
function bt(t,e,i){
    var n=e[0],o=e[1];
    return t[0]=i[0]*n+i[2]*o+i[4],t[1]=i[1]*n+i[3]*o+i[5],t
}
function St(t,e,i){
    return t[0]=Math.min(e[0],i[0]),t[1]=Math.min(e[1],i[1]),t
}
function Mt(t,e,i){
    return t[0]=Math.max(e[0],i[0]),t[1]=Math.max(e[1],i[1]),t
}
var It=(Object.freeze||Object)({create:ot,copy:at,clone:rt,set:st,add:lt,scaleAndAdd:ut,sub:ht,len:ct,length:dt,lenSquare:ft,lengthSquare:pt,mul:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t},div:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]},scale:gt,normalize:mt,distance:vt,dist:yt,distanceSquare:xt,distSquare:_t,negate:function(t,e){return t[0]=-e[0],t[1]=-e[1],t},lerp:wt,applyTransform:bt,min:St,max:Mt});
function Tt(){
    this.on("mousedown",this._dragStart,this),this.on("mousemove",this._drag,this),this.on("mouseup",this._dragEnd,this)
}
function At(t,e){
    return{target:t,topTarget:e&&e.topTarget}
}
Tt.prototype={constructor:Tt,_dragStart:function(t){for(var e=t.target;e&&!e.draggable;)e=e.parent;e&&((this._draggingTarget=e).dragging=!0,this._x=t.offsetX,this._y=t.offsetY,this.dispatchToElement(At(e,t),"dragstart",t.event))},_drag:function(t){var e=this._draggingTarget;if(e){var i=t.offsetX,n=t.offsetY,o=i-this._x,a=n-this._y;this._x=i,this._y=n,e.drift(o,a,t),this.dispatchToElement(At(e,t),"drag",t.event);var r=this.findHover(i,n,e).target,s=this._dropTarget;e!==(this._dropTarget=r)&&(s&&r!==s&&this.dispatchToElement(At(s,t),"dragleave",t.event),r&&r!==s&&this.dispatchToElement(At(r,t),"dragenter",t.event))}},_dragEnd:function(t){var e=this._draggingTarget;e&&(e.dragging=!1),this.dispatchToElement(At(e,t),"dragend",t.event),this._dropTarget&&this.dispatchToElement(At(this._dropTarget,t),"drop",t.event),this._draggingTarget=null,this._dropTarget=null}};var Dt=Array.prototype.slice,Ct=function(t){this._$handlers={},this._$eventProcessor=t};
function Lt(t,e,i,n,o,a){
    var r=t._$handlers;
    if("function"==typeof i&&(o=n,n=i,i=null),!n||!e)
        return t;
    i=function(t,e){var i=t._$eventProcessor;return null!=e&&i&&i.normalizeQuery&&(e=i.normalizeQuery(e)),e}
    (t,i),r[e]||(r[e]=[]);
    for(var s=0;s<r[e].length;s++)
        if(r[e][s].h===n)
            return t;
        var l={h:n,one:a,query:i,ctx:o||t,callAtLast:n.zrEventfulCallAtLast},u=r[e].length-1,h=r[e][u];return h&&h.callAtLast?r[e].splice(u,0,l):r[e].push(l),t}Ct.prototype={constructor:Ct,one:function(t,e,i,n){return Lt(this,t,e,i,n,!0)},on:function(t,e,i,n){return Lt(this,t,e,i,n,!1)},isSilent:function(t){var e=this._$handlers;return!e[t]||!e[t].length},off:function(t,e){var i=this._$handlers;
        if(!t)return this._$handlers={},this;
        if(e){if(i[t]){
            for(var n=[],o=0,a=i[t].length;o<a;o++)
                i[t][o].h!==e&&n.push(i[t][o]);
            i[t]=n}i[t]&&0===i[t].length&&delete i[t]}
        else delete i[t];
        return this},trigger:function(t){var e=this._$handlers[t],i=this._$eventProcessor;
        if(e){
            var n=arguments,o=n.length;
            3<o&&(n=Dt.call(n,1));
            for(var a=e.length,r=0;r<a;){
                var s=e[r];
                if(i&&i.filter&&null!=s.query&&!i.filter(t,s.query))
                    r++;
                else{
                    switch(o){
                        case 1:s.h.call(s.ctx);break;
                        case 2:s.h.call(s.ctx,n[1]);break;
                        case 3:s.h.call(s.ctx,n[1],n[2]);break;
                        default:s.h.apply(s.ctx,n)}s.one?(e.splice(r,1),a--):r++
                }
            }
        }
        return i&&i.afterTrigger&&i.afterTrigger(t),this},triggerWithContext:function(t){var e=this._$handlers[t],i=this._$eventProcessor;
        if(e){
            var n=arguments,o=n.length;
            4<o&&(n=Dt.call(n,1,n.length-1));
            for(var a=n[n.length-1],r=e.length,s=0;s<r;){
                var l=e[s];
                if(i&&i.filter&&null!=l.query&&!i.filter(t,l.query))
                    s++;
                else{
                    switch(o){
                        case 1:l.h.call(a);break;
                        case 2:l.h.call(a,n[1]);break;
                        case 3:l.h.call(a,n[1],n[2]);break;
                        default:l.h.apply(a,n)}l.one?(e.splice(s,1),r--):s++
                }
            }
        }
        return i&&i.afterTrigger&&i.afterTrigger(t),this
        }
};
var kt=Math.log(2);
function Pt(t,e,i,n,o,a){
    var r=n+"-"+o,s=t.length;
    if(a.hasOwnProperty(r))
        return a[r];
    if(1===e){
        var l=Math.round(Math.log((1<<s)-1&~o)/kt);
        return t[i][l]
    }
    for(var u=n|1<<i,h=i+1;n&1<<h;)
        h++;
    for(var c=0,d=0,f=0;d<s;d++){
        var p=1<<d;p&o||(c+=(f%2?-1:1)*t[i][d]*Pt(t,e-1,h,u,o|p,a),f++)
    }
    return a[r]=c
}