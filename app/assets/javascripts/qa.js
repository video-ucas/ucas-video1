// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function p(t,e){
    for(var i=t[0],n=1,o=t.length;n<o;n++)
        i=m(i,t[n],e);return i
}
function k(t,e){
    for(var i in e)
        e.hasOwnProperty(i)&&(t[i]=e[i]);
    return t
}
function D(t,e,i){
    for(var n in e)
        e.hasOwnProperty(n)&&(i?null!=e[n]:null==t[n])&&(t[n]=e[n]);
    return t
}
function g(){
    return a.createCanvas()
}
var y;
function x(){
    return y=y||g().getContext("2d")
}
function _(t,e){
    if(t){if(t.indexOf)
        return t.indexOf(e);
    for(var i=0,n=t.length;i<n;i++)
        if(t[i]===e)
            return i
    }
    return-1
}
function w(t,e){
    var i=t.prototype;
    function n() {

    }
    for(var o in n.prototype=e.prototype,t.prototype=new n,i)
        i.hasOwnProperty(o)&&(t.prototype[o]=i[o]);
    (t.prototype.constructor=t).superClass=e
}
function b(t,e,i){
    D(t="prototype"in t?t.prototype:t,e="prototype"in e?e.prototype:e,i)
}
function P(t){
    if(t)
        return"string"!=typeof t&&"number"==typeof t.length
}
function E(t,e,i){
    if(t&&e)
        if(t.forEach&&t.forEach===r)
            t.forEach(e,i);
        else if(t.length===+t.length)
            for(var n=0,o=t.length;n<o;n++)
                e.call(i,t[n],n,t);
            else for(var a in t)
                t.hasOwnProperty(a)&&e.call(i,t[a],a,t)
}
function N(t,e,i){
    if(t&&e)
    {
        if(t.map&&t.map===c)
            return t.map(e,i);
        for(var n=[],o=0,a=t.length;o<a;o++)
            n.push(e.call(i,t[o],o,t)
            );
        return n
    }
}
function S(t,e,i,n){
    if(t&&e){
        if(t.reduce&&t.reduce===d)
            return t.reduce(e,i,n);
        for(var o=0,a=t.length;o<a;o++)
            i=e.call(n,i,t[o],o,t);
        return i
    }
}
function M(t,e,i){
    if(t&&e){
        if(t.filter&&t.filter===h)
            return t.filter(e,i);
        for(var n=[],o=0,a=t.length;o<a;o++)
            e.call(i,t[o],o,t)&&n.push(t[o]);
        return n
    }
}
function I(t,e,i) {
    if(t&&e)
        for(var n=0,o=t.length;n<o;n++)
            if(e.call(i,t[n],n,t))
                return t[n]
}
function A(t,e){
    var i=o.call(arguments,2);
    return function(){
        return t.apply(e,i.concat(o.call(arguments)))
    }
}
function T(t){
    var e=o.call(arguments,1);
    return function(){
        return t.apply(this,e.concat(o.call(arguments)))
    }
}
function O(t){
    return"[object Array]"===u.call(t)
}
function C(t){
    return"function"==typeof t
}
function R(t){
    return"[object String]"===u.call(t)
}
