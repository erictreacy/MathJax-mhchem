/*************************************************************
 *
 *  MathJax/extensions/TeX/mhchem.js
 *
 *  Implements the \ce command for handling chemical formulas
 *  from the mhchem LaTeX package.
 *
 *  ---------------------------------------------------------------------
 *
 *  Copyright (c) 2011-2015 The MathJax Consortium
 *  Copyright (c) 2015-2017 Martin Hensel
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
MathJax.Extension["TeX/mhchem"]={version:"3.0.4"},MathJax.Hub.Register.StartupHook("TeX Jax Ready",
function(){var n=MathJax.InputJax.TeX,r=MathJax.Object.Subclass({string:"",Init:
function(n){this.string=n},Parse:
function(r){try{return o.go(t.go(this.string,r))}catch(r){n.Error(r)}}}),t={};t.go=
function(n,r){if(!n)return n;void 0===r&&(r="ce");var o="0",e={};e.pL=0,n=n.replace(/[\u2212\u2013\u2014\u2010]/g,"-");for(var a,u,i=[];;){a!==n?(u=10,a=n):u--;var s=t.c[r],l=s.e.length;n:for(var h=0;h<l;h++){var c=s.e[h],p=t.g(c.g,n);if(p){var f=c.h[o]||c.h["*"]||null;if(f){for(var m=t.j([],f.k),k=m.length,d=0;d<k;d++){var g,q=m[d],v=void 0;if(q.l&&(v=q.m,q=q.l),"string"==typeof q)if(s.h[q])g=s.h[q](e,p.g,v);else{if(!t.h[q])throw["MhchemBugA","mhchem bug A. Please report. ("+q+")"];g=t.h[q](e,p.g,v)}else"function"==typeof q&&(g=q(e,p.g));i=t.j(i,g)}if(o=f.n||o,!(n.length>0))return i;if(f.s||(n=p.t),!f.u)break n}}}if(u<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},
t.j=
function(n,r){return r?n?n.concat(r):[].concat(r):n},t.w={"~C":/^$/,"~A":/^./,"~B":/^./,"%m":/^\s/,"%l":/^\s(?=[A-Z\\$])/,"~@":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,"~M":/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"@z":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"~P":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"@%":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"~O":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,"~u":/^[0-9]+/,"@h":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"@g":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"%T":
function(n){var r=n.match(/^([+\-]?)([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)(?:([eE])([+\-]?[0-9]+))?\s*/);return r&&r[0]?{g:r.splice(1),t:n.substr(r[0].length)}:null},"%n":
function(n){var r=this["@W"](n,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(r&&r.t.match(/^($|[\s,;\)\]\}])/))return r;var t=n.match(/^(?:\(\$(?:\\ca\s+)?[amothc]\$\))/);return t?{g:t[0],t:n.substr(t[0].length)}:null},"@K":/^(?:\\\{|\[|\()/,"@c":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". ":/^([.\u22C5\u00B7\u2022])\s*/,"@i":/^\.\.\.(?=$|[^.])/,"* ":/^([*])\s*/,"@P":
function(n){return this["@W"](n,"^{","","","}")},"@L":
function(n){return this["@W"](n,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"@O":
function(n){return this["@W"](n,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"@N":
function(n){return this["@W"](n,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"%U":/^\^(-\d)/,"'":/^'/,"@Y":
function(n){return this["@W"](n,"_{","","","}")},"@Q":
function(n){return this["@W"](n,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"@T":
function(n){return this["@W"](n,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"@S":
function(n){return this["@W"](n,"_",/^\\[a-zA-Z]+\{/,"}","")},"@R":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}":/^\{\}/,"%B":
function(n){return this["@W"](n,"","{","}","")},"%A":
function(n){return this["@W"](n,"{","","","}")},"@~":
function(n){return this["@W"](n,"","$","$","")},"@a":
function(n){return this["@W"](n,"${","","","}$")},"@@":
function(n){return this["@W"](n,"$","","","$")},"%D":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]\/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"@f":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"~Q":/^(?:[+]|(?:[\-=<>]|<<|>>|\\pm|\$\\pm\$|\\approx|\$\\approx\$)(?=\s+|$|-?[0-9]))/,"~c":/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"@r":
function(n){return this["@W"](n,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,"@m":/^[CMT](?=\[)/,"@o":
function(n){return this["@W"](n,"[","","","]")},"&":/^(&)\s*/,"@q":/^(\\\\)\s*/,"@p":/^(?:\\[,\ ;:])/,"@G":
function(n){return this["@W"](n,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"@F":
function(n){return this["@W"](n,"",/^\\[a-zA-Z]+\{/,"}","")},"@t":/^\\ca(?:\s+|(?![a-zA-Z]))/,"@E":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,"~R":/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,"~S":/^[\/~|]/,"@y":
function(n){return this["@W"](n,"\\frac{","","","}","{","","","}")},"@A":
function(n){return this["@W"](n,"\\overset{","","","}","{","","","}")},"@C":
function(n){return this["@W"](n,"\\underset{","","","}","{","","","}")},"@B":
function(n){return this["@W"](n,"\\underbrace{","","","}_","{","","","}")},"@w":
function(n){return this["@W"](n,"\\color{","","","}")},"@x":
function(n){return this["@W"](n,"\\color{","","","}","{","","","}")},"@v":
function(n){return this["@W"](n,"\\color","\\","",/^(?=\{)/,"{","","","}")},"@u":
function(n){return this["@W"](n,"\\ce{","","","}")},"~Z":/^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"a~":/^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"%d":/^[IVX]+/,"@j":/^[+\-]?[0-9]+\/[0-9]+$/,"~%":
function(n){var r,t=this["@W"](n,"","$","$","");if(t){if(r=t.g.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/))return{g:r[0],t:n.substr(r[0].length)}}else if(r=n.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?[0-9]+\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s)|\\pm(?:\s+|(?![a-zA-Z])))/))return{g:r[0],t:n.substr(r[0].length)};return null},"~a":
function(n){return this["~%"](n)},"@b":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,"~E":
function(n){if(n.match(/^\([a-z]+\)$/))return null;var r=n.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return r?{g:r[0],t:n.substr(r[0].length)}:null},"%z":/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"~w":/^(p)?K(?:_?(a|b|w))(?=$|[^a-zA-Z])/,"~x":/^(p)?K(?:_{(a|b|w)})/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*\*\s*/,"@W":
function(n,r,t,o,e,a,u,i,s,l){var h=this["@V"](n,r);if(null===h)return null;if(n=n.substr(h.length),h=this["@V"](n,t),null===h)return null;var c=this["@U"](n,h.length,o||e);if(null===c)return null;var p=n.substring(0,o?c.y:c.z);if(a||u){var f=this["@W"](n.substr(c.y),a,u,i,s);if(null===f)return null;var m=[p,f.g];return l&&(m=m.join("")),{g:m,t:f.t}}return{g:p,t:n.substr(c.y)}},
"@V":
function(n,r){if("string"==typeof r)return 0!==n.indexOf(r)?null:r;var t=n.match(r);return t?t[0]:null},"@U":
function(n,r,t){for(var o=0;r<n.length;){var e=n.charAt(r),a=this["@V"](n.substr(r),t);if(null!==a&&0===o)return{z:r,y:r+a.length};if("{"===e)o++;else if("}"===e){if(0===o)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];o--}r++}return null}},
t.g=
function(n,r){var o=t.w[n];if(void 0===o)throw["MhchemBugP","mhchem bug P. Please report. ("+n+")"];if("function"==typeof o)return t.w[n](r);var e=r.match(o);if(e){var a;return a=e[2]?[e[1],e[2]]:e[1]?e[1]:e[0],{g:a,t:r.substr(e[0].length)}}return null},t.h={"a=":
function(n,r){n.a=(n.a||"")+r},"b=":
function(n,r){n.b=(n.b||"")+r},"p=":
function(n,r){n.p=(n.p||"")+r},"o=":
function(n,r){n.o=(n.o||"")+r},"q=":
function(n,r){n.q=(n.q||"")+r},"d=":
function(n,r){n.d=(n.d||"")+r},"%c":
function(n,r){n.rm=(n.rm||"")+r},"%t":
function(n,r){n.text=(n.text||"")+r},"~J":
function(n,r,t){return{l:t}},
"~K":
function(n,r,t){return{l:t,p1:r}},
"~L":
function(n,r,t){return{l:t,p1:r[0],p2:r[1]}},
"~s":
function(n,r){return r},rm:
function(n,r){return{l:"rm",p1:r}},
"%s":
function(n,r){return t.go(r,"%s")},"%C":
function(n,r){var o=["{"];return o=t.j(o,t.go(r,"%s")),o=t.j(o,"}")},"%r":
function(n,r){return t.go(r,"%r")},"%q":
function(n,r){return t.go(r,"%q")},"~f":
function(n,r,t){return{l:"~f",A:t||r}},
"~m":
function(n,r){return{l:"~l",B:r[0]}},
ce:
function(n,r){return t.go(r)},"@k":
function(n,r){var o;r.match(/^[+\-]/)&&(o=[r.substr(0,1)],r=r.substr(1));var e=r.match(/^([0-9]+)\/([0-9]+)$/);return o=t.j(o,{l:"~F",p1:e[1],p2:e[2]})},"@l":
function(n,r){return t.go(r,"@l")}},
t.c={},t.C=
function(n){var r,t,o,e,a={};for(r in n)if(r.indexOf("|")!==-1)for(o=r.split("|"),e=0;e<o.length;e++)a[o[e]]=n[r];else a[r]=n[r];var u=[];for(r in a){var i={},s=a[r];for(t in s)if(t.indexOf("|")!==-1)for(o=t.split("|"),e=0;e<o.length;e++)i[o[e]]=s[t];else i[t]=s[t];u.push({g:r,h:i})}return u},t.c.ce={e:t.C({"~C":{"*":{k:"~T"}},
"~A":{"0|1|2":{k:"%F",s:!0,u:!0}},
"~Z":{0:{k:"a%"}},
"@m":{r:{k:"%b",n:"rt"},rd:{k:"%g",n:"%i"}},
"~c":{"0|1|2|as":{k:["%j","~T","~Q"],n:"1"}},
"~w|~x":{"0|1|2":{k:[{l:"~T",m:1},{l:"~L",m:"~v"}],n:"1"}},
"%z":{"0|1|2":{k:["o=","~T"],n:"1"}},
"~R":{"0|1|2|3":{k:"o=",n:"o"}},
"->":{"0|1|2|3":{k:"r=",n:"r"},"a|as":{k:["~T","r="],n:"r"},"*":{k:["~T","r="],n:"r"}},
"+":{o:{k:"~t",n:"d"},"d|D":{k:"d=",n:"d"},q:{k:"d=",n:"qd"},"qd|qD":{k:"d=",n:"qd"},dq:{k:["~T","d="],n:"d"},3:{k:["%j","~T","~Q"],n:"0"}},
"~%":{"0|2":{k:"a=",n:"a"}},
"~Q":{"0|1|2|a|as":{k:["%j","~T","~Q"],n:"0"}},
"-$":{"o|q":{k:["~g","~T"],n:"qd"},d:{k:"d=",n:"d"},D:{k:["~T",{l:"~f",m:"-"}],n:"3"},q:{k:"d=",n:"qd"},qd:{k:"d=",n:"qd"},"qD|dq":{k:["~T",{l:"~f",m:"-"}],n:"3"}},
"-9":{"3|o":{k:["~T",{l:"~J",m:"~I"}],n:"3"}},
"@f":{o:{k:{l:"@e",m:!0},n:"2"},d:{k:{l:"@d",m:!0},n:"2"}},
"-":{"0|1|2":{k:[{l:"~T",m:1},"%E",{l:"~f",m:"-"}],n:"3"},3:{k:{l:"~f",m:"-"}},
a:{k:["~T",{l:"~J",m:"~I"}],n:"2"},as:{k:[{l:"~T",m:2},{l:"~f",m:"-"}],n:"3"},b:{k:"b="},o:{k:"@e",n:"2"},q:{k:"@e",n:"2"},"d|qd|dq":{k:"@d",n:"2"},"D|qD|p":{k:["~T",{l:"~f",m:"-"}],n:"3"}},
"~a":{"1|3":{k:"a=",n:"a"}},
"~M":{"0|1|2|3|a|as|b|p|bp|o":{k:"o=",n:"o"},"q|dq":{k:["~T","o="],n:"o"},"d|D|qd|qD":{k:"~N",n:"o"}},
"~u":{o:{k:"q=",n:"q"},"d|D":{k:"q=",n:"dq"},q:{k:["~T","o="],n:"o"},a:{k:"o=",n:"o"}},
"%l":{"b|p|bp":{}},
"%m":{a:{n:"as"},0:{k:"%j"},"1|2":{k:"%k"},"r|rt|rd|%i|%h":{k:"~T",n:"0"},"*":{k:["~T","%k"],n:"1"}},
"&":{"1|2":{k:["~T","~s"]},
"*":{k:["~T","~s"],n:"0"}},
"@q":{"1|2":{k:["~T","~s",{l:"~J",m:"%m"}]},
"*":{k:["~T","~s",{l:"~J",m:"%m"}],n:"0"}},
"@o":{"r|rt":{k:"%a",n:"rd"},"rd|%i":{k:"%f",n:"%h"}},
"@i":{"o|d|D|dq|qd|qD":{k:["~T",{l:"~f",m:"..."}],n:"3"},"*":{k:[{l:"~T",m:1},{l:"~J",m:"~z"}],n:"1"}},
". |* ":{"*":{k:["~T",{l:"~J",m:"~~"}],n:"1"}},
"%n":{"*":{k:["~T","%p"],n:"1"}},
"@K":{"a|as|o":{k:["o=","~T","%G"],n:"2"},"0|1|2|3":{k:["o=","~T","%G"],n:"2"},"*":{k:["~T","o=","~T","%G"],n:"2"}},
"@c":{"0|1|2|3|b|p|bp|o":{k:["o=","%H"],n:"o"},"a|as|d|D|q|qd|qD|dq":{k:["~T","o=","%H"],n:"o"}},
", ":{"*":{k:["~T","~q"],n:"0"}},
"^_":{"*":{}},
"@P|@L":{"0|1|2|as":{k:"b=",n:"b"},p:{k:"b=",n:"bp"},"3|o":{k:"~t",n:"D"},q:{k:"d=",n:"qD"},"d|D|qd|qD|dq":{k:["~T","d="],n:"D"}},
"^a|@O|@N|^\\x|'":{"0|1|2|as":{k:"b=",n:"b"},p:{k:"b=",n:"bp"},"3|o":{k:"~t",n:"d"},q:{k:"d=",n:"qd"},"d|qd|D|qD|":{k:"d="},dq:{k:["~T","d="],n:"d"}},
"@Y|@Q|_9|@T|@S|@R":{"0|1|2|as":{k:"p=",n:"p"},b:{k:"p=",n:"bp"},"3|o":{k:"q=",n:"q"},"d|D":{k:"q=",n:"dq"},"q|qd|qD|dq":{k:["~T","q="],n:"q"}},
"%D":{"0|1|2|3|a|as|o|q|d|D|qd|qD|dq":{k:[{l:"~T",m:2},"~f"],n:"3"}},
"#":{"0|1|2|3|a|as|o":{k:[{l:"~T",m:2},{l:"~f",m:"#"}],n:"3"}},
"{}":{"*":{k:{l:"~T",m:1},n:"1"}},
"%B":{"0|1|2|3|a|as|b|p|bp":{k:"o=",n:"o"},"o|d|D|q|qd|qD|dq":{k:["~T","o="],n:"o"}},
"@~":{a:{k:"a="},"0|1|2|3|as|b|p|bp|o":{k:"o=",n:"o"},"as|o":{k:"o="},"q|d|D|qd|qD|dq":{k:["~T","o="],n:"o"}},
"@r":{"*":{k:[{l:"~T",m:2},"~f"],n:"3"}},
"@y":{"*":{k:[{l:"~T",m:1},"~H"],n:"3"}},
"@A":{"*":{k:[{l:"~T",m:2},"~X"],n:"3"}},
"@C":{"*":{k:[{l:"~T",m:2},"%y"],n:"3"}},
"@B":{"*":{k:[{l:"~T",m:2},"%w"],n:"3"}},
"@x|@v":{"*":{k:[{l:"~T",m:2},"~k"],n:"3"}},
"@w":{"*":{k:[{l:"~T",m:2},"~m"]}},
"@u":{"*":{k:[{l:"~T",m:2},"ce"],n:"3"}},
"@p":{"*":{k:[{l:"~T",m:1},"~s"],n:"1"}},
"@t":{"*":{k:[{l:"~T",m:1},{l:"~J",m:"~i"}],n:"3"}},
"@G|@F|@E":{"0|1|2|3|a|as|b|p|bp|o|c0":{k:["o=","~T"],n:"3"},"*":{k:["~T","o=","~T"],n:"3"}},
"~S":{"*":{k:[{l:"~T",m:1},"~s"],n:"3"}},
"~B":{a:{k:"@Z",n:"o",s:!0},as:{k:[{l:"~T"},"%k"],n:"1",s:!0},"r|rt|rd|%i|%h":{k:["~T"],n:"0",s:!0},"*":{k:["~T","~s"],n:"3"}}}),h:{"~N":
function(n,r){var o;if(n.d.match(/^[0-9]+$/)){var e=n.d;n.d=void 0,o=this["~T"](n),n.b=e}else o=this["~T"](n);return t.h["o="](n,r),o},"~t":
function(n,r){n.d=r,n["%I"]="kv"},"~g":
function(n,r){if(n.yB){var o=t.j(o,this["~T"](n));return o=t.j(o,t.h["~f"](n,r,"-"))}n.d=r},"@e":
function(n,r,o){var e=o||this["@X"](n,r),a=t.j(null,this["~T"](n,r));return a=e?t.j(a,{l:"~I"}):t.j(a,t.h["~f"](n,r,"-"))},"@d":
function(n,r,o){var e,a=o||this["@X"](n,r);if(a)e=t.j(e,this["~T"](n,r)),e=t.j(e,{l:"~I"});else{var u=t.g("~u",n.d||"");u&&""===u.t?(e=t.j(null,t.h["d="](n,r)),e=t.j(e,this["~T"](n))):(e=t.j(e,this["~T"](n,r)),e=t.j(e,t.h["~f"](n,r,"-")))}return e},"@X":
function(n,r){var o=t.g("~R",n.o||""),e=t.g("~O",n.o||""),a=t.g("~P",n.o||""),u=t.g("@%",n.o||""),i="-"===r&&(o&&""===o.t||e||a||u);return!i||n.a||n.b||n.p||n.d||n.q||o||!a||(n.o="$"+n.o+"$"),i},"@Z":
function(n,r){n.o=n.a,n.a=void 0},"%k":
function(n,r){n.sb=!0},"%j":
function(n,r){n.sb=!1},"%E":
function(n,r){n.yB=!0},"%F":
function(n,r){n.yB=!1},"%G":
function(n,r){n.pL++},"%H":
function(n,r){n.pL--},"%p":
function(n,r){return r=t.go(r,"o"),{l:"%p",p1:r}},
"~q":
function(n,r){var t=r.replace(/\s*$/,""),o=t!==r;return o&&0===n.pL?{l:"~n",p1:t}:{l:"~o",p1:t}},
"~T":
function(n,r,o){var e;n.r?("M"===n.rdt?n.rd=t.go(n.rd,"%r"):"T"===n.rdt?n.rd=[{l:"%s",p1:n.rd}]:n.rd=t.go(n.rd),"M"===n.rqt?n.rq=t.go(n.rq,"%r"):"T"===n.rqt?n.rq=[{l:"%s",p1:n.rq}]:n.rq=t.go(n.rq),e={l:"~b",r:n.r,rd:n.rd,rq:n.rq}):(e=[],n.a||n.b||n.p||n.o||n.q||n.d||o?(n.sb&&e.push({l:"~D"}),n.o||n.q||n.d||n.b||n.p||2===o?n.o||n.q||n.d||!n.b&&!n.p?n.o&&"kv"===n["%I"]&&t.g("a~",n.d||"")?n["%I"]="~Y":n.o&&"kv"===n["%I"]&&!n.q&&(n["%I"]=void 0):(n.o=n.a,n.d=n.b,n.q=n.p,n.a=n.b=n.p=void 0):(n.o=n.a,n.a=void 0),n.a=t.go(n.a,"a"),n.b=t.go(n.b,"bd"),n.p=t.go(n.p,"pq"),n.o=t.go(n.o,"o"),"~Y"===n["%I"]?n.d=t.go(n.d,"~Y"):n.d=t.go(n.d,"bd"),n.q=t.go(n.q,"pq"),e.push({l:"~h",a:n.a,b:n.b,p:n.p,o:n.o,q:n.q,d:n.d,"%I":n["%I"]})):e=null);for(var a in n)"pL"!==a&&"yB"!==a&&delete n[a];return e},"a%":
function(n,r){var o=["{"];return o=t.j(o,t.go(r,"~Y")),o=o.concat(["}"])},"~H":
function(n,r){return{l:"~G",p1:t.go(r[0]),p2:t.go(r[1])}},
"~X":
function(n,r){return{l:"~W",p1:t.go(r[0]),p2:t.go(r[1])}},
"%y":
function(n,r){return{l:"%x",p1:t.go(r[0]),p2:t.go(r[1])}},
"%w":
function(n,r){return{l:"%v",p1:t.go(r[0]),p2:t.go(r[1])}},
"~k":
function(n,r){return{l:"~j",F:r[0],G:t.go(r[1])}},
"r=":
function(n,r){n.r=(n.r||"")+r},"%b":
function(n,r){n.rdt=(n.rdt||"")+r},"%a":
function(n,r){n.rd=(n.rd||"")+r},"%g":
function(n,r){n.rqt=(n.rqt||"")+r},"%f":
function(n,r){n.rq=(n.rq||"")+r},"~Q":
function(n,r){return{l:"~Q",A:r}}}},
t.c.a={e:t.C({"~C":{"*":{}},
"@j":{0:{k:"@k"}},
"~A":{0:{n:"1",s:!0}},
"@@":{"*":{k:"%q",n:"1"}},
",":{"*":{k:{l:"~J",m:"~r"}}},
"~B":{"*":{k:"~s"}}}),h:{}},
t.c.o={e:t.C({"~C":{"*":{}},
"@j":{0:{k:"@k"}},
"~A":{0:{n:"1",s:!0}},
"~M":{"*":{k:"rm"}},
"@G|@F|@E":{"*":{k:"~s"}},
"@a|@@":{"*":{k:"%r"}},
"%A":{"*":{k:"%C"}},
"~B":{"*":{k:"~s"}}}),h:{}},
t.c["%s"]={e:t.C({"~C":{"*":{k:"~T"}},
"%B":{"*":{k:"%t"}},
"@a|@@":{"*":{k:"%r"}},
"@z":{"*":{k:["~T","rm"]}},
"@p|@G|@F|@E":{"*":{k:["~T","~s"]}},
"~A":{"*":{k:"%t"}}}),h:{"~T":
function(n,r){if(n.text){var t={l:"%s",p1:n.text};for(var o in n)delete n[o];return t}return null}}},
t.c.pq={e:t.C({"~C":{"*":{}},
"%n":{"*":{k:"%p"}},
i$:{0:{n:"!f",s:!0}},
"@b":{0:{k:"rm",n:"0"}},
"~E":{0:{n:"f",s:!0}},
"@j":{0:{k:"@k"}},
"~A":{0:{n:"!f",s:!0}},
"@a|@@":{"*":{k:"%r"}},
"%A":{"*":{k:"%s"}},
"~@":{f:{k:"%r"}},
"~M":{"*":{k:"rm"}},
"@h":{"*":{k:"@l"}},
",":{"*":{k:{l:"~K",m:"~p"}}},
"@x|@v":{"*":{k:"~k"}},
"@w":{"*":{k:"~m"}},
"@u":{"*":{k:"ce"}},
"@p|@G|@F|@E":{"*":{k:"~s"}},
"~B":{"*":{k:"~s"}}}),h:{"%p":
function(n,r){return r=t.go(r,"o"),{l:"%K",p1:r}},
"~k":
function(n,r){return{l:"~j",F:r[0],G:t.go(r[1],"pq")}}}},
t.c.bd={e:t.C({"~C":{"*":{}},
x$:{0:{n:"!f",s:!0}},
"~E":{0:{n:"f",s:!0}},
"~A":{0:{n:"!f",s:!0}},
"@g":{"*":{k:"@l"}},
".":{"*":{k:{l:"~J",m:"~y"}}},
"~@":{f:{k:"%r"}},
x:{"*":{k:{l:"~J",m:"@n"}}},
"~M":{"*":{k:"rm"}},
"'":{"*":{k:{l:"~J",m:"%%"}}},
"@a|@@":{"*":{k:"%r"}},
"%A":{"*":{k:"%s"}},
"@x|@v":{"*":{k:"~k"}},
"@w":{"*":{k:"~m"}},
"@u":{"*":{k:"ce"}},
"@p|@G|@F|@E":{"*":{k:"~s"}},
"~B":{"*":{k:"~s"}}}),h:{"~k":
function(n,r){return{l:"~j",F:r[0],G:t.go(r[1],"bd")}}}},
t.c["~Y"]={e:t.C({"~C":{"*":{}},
"%d":{"*":{k:"%e"}},
"@a|@@":{"*":{k:"%r"}},
"~A":{"*":{k:"~s"}}}),h:{"%e":
function(n,r){return{l:"%d",p1:r}}}},
t.c["%r"]={e:t.C({"~C":{"*":{k:"~T"}},
"@u":{"*":{k:["~T","ce"]}},
"%B|@p|@G|@F|@E":{"*":{k:"o="}},
"~A":{"*":{k:"o="}}}),h:{"~T":
function(n,r){if(n.o){var t={l:"%r",p1:n.o};for(var o in n)delete n[o];return t}return null}}},
t.c["%q"]={e:t.C({"~C":{"*":{k:"~T"}},
"@u":{"*":{k:["~T","ce"]}},
"%B|@p|@G|@F|@E":{"*":{k:"o="}},
"-|+":{"*":{k:"%u"}},
"~A":{"*":{k:"o="}}}),h:{"%u":
function(n,r){n.o=(n.o||"")+"{"+r+"}"},"~T":
function(n,r){if(n.o){var t={l:"%r",p1:n.o};for(var o in n)delete n[o];return t}return null}}},
t.c["@l"]={e:t.C({"~C":{"*":{}},
",":{"*":{k:"~q"}},
"~A":{"*":{k:"~s"}}}),h:{"~q":
function(n,r){return{l:"~r"}}}},
t.c.pu={e:t.C({"~C":{"*":{k:"~T"}},
"%T":{0:{k:"%Z",n:"a"}},
"//":{d:{k:"o=",n:"/"}},
"/":{d:{k:"o=",n:"/"}},
"%B|~A":{"0|d":{k:"d=",n:"d"},a:{k:["%m","d="],n:"d"},"/|q":{k:"q=",n:"q"}}}),h:{"%Z":
function(n,r){var o=[];return r[0]&&o.push(r[0]),r[1]&&(o=t.j(o,t.go(r[1],"%X")),"e"===r[2]?o.push({l:"%N"}):"E"===r[2]&&o.push({l:"%P"})),r[2]&&o.push("10^{"+r[3]+"}"),o},"%m":
function(n,r){return{l:"%Q"}},
"~T":
function(n,r){var o,e=t.g("%A",n.d||"");e&&""===e.t&&(n.d=e.g);var a=t.g("%A",n.q||"");a&&""===a.t&&(n.q=a.g),n.q?(n.d=t.go(n.d,"pu"),n.q=t.go(n.q,"pu"),"//"===n.o?o={l:"%S",p1:n.d,p2:n.q}:(o=n.d,o=n.d.length>1||n.q.length>1?t.j(o,{l:"%V"}):t.j(o,{l:"/"}),o=t.j(o,n.q))):o=t.go(n.d,"%R");for(var u in n)delete n[u];return o}}},
t.c["%R"]={e:t.C({"~C":{0:{k:"~T"},"*":{k:"a@"}},
"*":{"*":{k:["a@","%N"],n:"1"}},
"@E":{"*":{k:"%c"}},
".|%m":{"*":{k:["a@","%m"]}},
"%U":{"*":{k:"%U"}},
"%B|~A":{"*":{k:"%c"}}}),h:{"%N":
function(n,r){return{l:"%O"}},
"%U":
function(n,r){n.rm+="^{"+r+"}"},"%m":
function(n,r){return{l:"%Q"}},
"~T":
function(n,r){var t;n.rm&&(t={l:"rm",p1:n.rm});for(var o in n)delete n[o];return t},"a@":
function(n,r){var o;if(n.rm){var e=t.g("%A",n.rm||"");e&&""===e.t&&(n.rm=e.g),o=t.go(n.rm,"pu")}for(var a in n)delete n[a];return o}}},
t.c["%X"]={e:t.C({"~C":{0:{k:"~U"},o:{k:"~V"}},
",":{0:{k:["~U","~q"],n:"o"}},
".":{0:{k:["~U","~s"],n:"o"}},
"~A":{"*":{k:"%t"}}}),h:{"~q":
function(n,r){return{l:"~r"}},
"~U":
function(n,r){var t=[],o=n.text.length%3;o||(o=3);for(var e=n.text.length-3;e>0;e-=3)t.push(n.text.substr(e,3)),t.push({l:"%W"});t.push(n.text.substr(0,o)),t.reverse();for(var a in n)delete n[a];return t},"~V":
function(n,r){for(var t=[],o=n.text.length-3,e=0;e<o;e+=3)t.push(n.text.substr(e,3)),t.push({l:"%W"});t.push(n.text.substr(e));for(var a in n)delete n[a];return t}}};var o={H:{"~h":
function(n){var r="";return n.a=o.go(n.a),n.b=o.go(n.b),n.p=o.go(n.p),n.o=o.go(n.o),n.q=o.go(n.q),n.d=o.go(n.d),n.a&&(n.a.match(/^[+\-]/)&&(n.a="{"+n.a+"}"),r+=n.a+"\\,"),(n.b||n.p)&&(r+="{\\vphantom{X}}",r+="^{\\hphantom{"+(n.b||"")+"}}_{\\hphantom{"+(n.p||"")+"}}",r+="{\\vphantom{X}}",r+="^{\\smash[t]{\\vphantom{2}}\\llap{"+(n.b||"")+"}}",r+="_{\\vphantom{2}\\llap{\\smash[t]{"+(n.p||"")+"}}}"),n.o&&(n.o.match(/^[+\-]/)&&(n.o="{"+n.o+"}"),r+=n.o),"kv"===n["%I"]?((n.d||n.q)&&(r+="{\\vphantom{X}}"),n.d&&(r+="^{"+n.d+"}"),n.q&&(r+="_{\\smash[t]{"+n.q+"}}")):"~Y"===n["%I"]?(n.d&&(r+="{\\vphantom{X}}",r+="^{"+n.d+"}"),n.q&&(r+="{\\vphantom{X}}",r+="_{\\smash[t]{"+n.q+"}}")):(n.q&&(r+="{\\vphantom{X}}",r+="_{\\smash[t]{"+n.q+"}}"),n.d&&(r+="{\\vphantom{X}}",r+="^{"+n.d+"}")),r},rm:
function(n){return"\\mathrm{"+n.p1+"}"},"%s":
function(n){return n.p1.match(/[\^_]/)?(n.p1=n.p1.replace(" ","~").replace("-","\\text{-}"),"\\mathrm{"+n.p1+"}"):"\\text{"+n.p1+"}"},"%d":
function(n){return"\\mathrm{"+n.p1+"}"},"%p":
function(n){return"\\mskip2mu "+o.go(n.p1)},"%K":
function(n){return"\\mskip1mu "+o.go(n.p1)},"~f":
function(n){var r=o.I[n.A];if(!r)throw["MhchemErrorBond","mhchem Error. Unknown bond type ("+n.A+")"];return r},"~F":
function(n){var r="\\frac{"+n.p1+"}{"+n.p2+"}";return"\\mathchoice{\\textstyle"+r+"}{"+r+"}{"+r+"}{"+r+"}"},"%S":
function(n){var r="\\frac{"+o.go(n.p1)+"}{"+o.go(n.p2)+"}";return"\\mathchoice{\\textstyle"+r+"}{"+r+"}{"+r+"}{"+r+"}"},"%r":
function(n){return n.p1+" "},"~G":
function(n){return"\\frac{"+o.go(n.p1)+"}{"+o.go(n.p2)+"}"},"~W":
function(n){return"\\overset{"+o.go(n.p1)+"}{"+o.go(n.p2)+"}"},"%x":
function(n){return"\\underset{"+o.go(n.p1)+"}{"+o.go(n.p2)+"}"},"%v":
function(n){return"\\underbrace{"+o.go(n.p1)+"}_{"+o.go(n.p2)+"}"},"~j":
function(n){return"{\\color{"+n.F+"}{"+o.go(n.G)+"}}"},"~l":
function(n){return"\\color{"+n.B+"}"},"~b":
function(n){n.rd=o.go(n.rd),n.rq=o.go(n.rq);var r=o.J[n.r];return n.rd||n.rq?"<=>>"===n.r||"<<=>"===n.r||"<-->"===n.r?(r="\\long"+r,n.rd&&(r="\\overset{"+n.rd+"}{"+r+"}"),n.rq&&(r="\\underset{"+n.rq+"}{"+r+"}"),r=" {}\\mathrel{"+r+"}{} "):(n.rq&&(r+="[{"+n.rq+"}]"),r+="{"+n.rd+"}",r=" {}\\mathrel{\\x"+r+"}{} "):r=" {}\\mathrel{\\long"+r+"}{} ",r},"~Q":
function(n){return o.K[n.A]}},
J:{"->":"rightarrow","\u2192":"rightarrow","\u27f6":"rightarrow","<-":"leftarrow","<->":"leftrightarrow","<-->":"leftrightarrows","<=>":"rightleftharpoons","\u21cc":"rightleftharpoons","<=>>":"Rightleftharpoons","<<=>":"Leftrightharpoons"},I:{"-":"{-}",1:"{-}","=":"{=}",2:"{=}","#":"{\\equiv}",3:"{\\equiv}","~":"{\\tripledash}","~-":"{\\begin{CEstack}{}\\tripledash\\\\-\\end{CEstack}}","~=":"{\\raise2mu {\\begin{CEstack}{}\\tripledash\\\\-\\\\-\\end{CEstack}}}","~--":"{\\raise2mu {\\begin{CEstack}{}\\tripledash\\\\-\\\\-\\end{CEstack}}}","-~-":"{\\raise2mu {\\begin{CEstack}{}-\\\\\\tripledash\\\\-\\end{CEstack}}}","...":"{{\\cdot}{\\cdot}{\\cdot}}","....":"{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}","->":"{\\rightarrow}","<-":"{\\leftarrow}","<":"{<}",">":"{>}"},L:{"%m":" ","~D":"~","%Q":"\\mkern3mu ","%W":"\\mkern3mu ","~r":"{,}","~n":"{{0}}\\mkern6mu ","~o":"{{0}}\\mkern3mu ","~p":"{{0}}\\mkern1mu ","~I":"\\text{-}","~~":"\\,{\\cdot}\\,","~y":"\\mkern1mu \\bullet\\mkern1mu ","@n":"{\\times}","%%":"\\prime ","%N":"\\cdot ","%O":"\\mkern1mu{\\cdot}\\mkern1mu ","%P":"\\times ","~i":"{\\sim}","^":"uparrow",v:"downarrow","~z":"\\ldots ","~v":"\\mathrm{{0}}K_{\\mathrm{{1}}}","/":"/","%V":"\\,/\\,"},K:{"+":" {}+{} ","-":" {}-{} ","=":" {}={} ","<":" {}<{} ",">":" {}>{} ","<<":" {}\\ll{} ",">>":" {}\\gg{} ","\\pm":" {}\\pm{} ","$\\pm$":" {}\\pm{} ","\\approx":" {}\\approx{} ","$\\approx$":" {}\\approx{} ",v:" \\downarrow{} ","(v)":" \\downarrow{} ","^":" \\uparrow{} ","(^)":" \\uparrow{} "},go:
function(n){if(!n)return n;for(var r="",t=0;t<n.length;t++){var o=n[t];if("string"==typeof o)r+=o;else if(this.H[o.l])r+=this.H[o.l](o);else{if(!this.L[o.l])throw["MhchemBugT","mhchem bug T. Please report."];var e=this.L[o.l];e=e.replace("{0}",o.p1||""),e=e.replace("{1}",o.p2||""),r+=e}}return r}};MathJax.Extension["TeX/mhchem"].CE=r,n.Definitions.Add({macros:{ce:"CE",pu:"PU",xleftrightarrow:["Extension","AMSmath"],xrightleftharpoons:["Extension","AMSmath"],xRightleftharpoons:["Extension","AMSmath"],xLeftrightharpoons:["Extension","AMSmath"],longrightleftharpoons:["Macro","\\stackrel{\\textstyle{{-}\\!\\!{\\rightharpoonup}}}{\\smash{{\\leftharpoondown}\\!\\!{-}}}"],longRightleftharpoons:["Macro","\\stackrel{\\textstyle{-}\\!\\!{\\rightharpoonup}}{\\small\\smash\\leftharpoondown}"],longLeftrightharpoons:["Macro","\\stackrel{\\rightharpoonup}{{{\\leftharpoondown}\\!\\!\\textstyle{-}}}"],longleftrightarrows:["Macro","\\stackrel{\\longrightarrow}{\\smash{\\longleftarrow}\\Rule{0px}{.25em}{0px}}"],tripledash:["Macro","\\raise3mu{\\tiny\\text{-}\\kern2mu\\text{-}\\kern2mu\\text{-}}"]},
environment:{CEstack:["Array",null,null,null,"r",null,"0.001em","T",1]}},
null,!0),MathJax.Extension["TeX/AMSmath"]||n.Definitions.Add({macros:{xrightarrow:["Extension","AMSmath"],xleftarrow:["Extension","AMSmath"]}},
null,!0),MathJax.Hub.Register.StartupHook("TeX AMSmath Ready",
function(){n.Definitions.Add({macros:{xleftrightarrow:["xArrow",8596,6,6],xrightleftharpoons:["xArrow",8652,5,7],xRightleftharpoons:["xArrow",8652,5,7],xLeftrightharpoons:["xArrow",8652,5,7]}},
null,!0)}),n.Parse.Augment({CE:
function(n){var t=this.GetArgument(n),o=r(t).Parse();this.string=o+this.string.substr(this.i),this.i=0},PU:
function(n){var t=this.GetArgument(n),o=r(t).Parse("pu");this.string=o+this.string.substr(this.i),this.i=0}}),MathJax.Hub.Startup.signal.Post("TeX mhchem Ready")}),MathJax.Ajax.loadComplete("[Contrib]/mhchem/mhchem.js");

