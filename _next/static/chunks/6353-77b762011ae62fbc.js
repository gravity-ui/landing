(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6353],{73168:function(t,e,n){"use strict";var a,i,r,s;n.d(e,{mb:function(){return f}});let l=/{{(.*?)}}/g,o=()=>new RegExp(/\$t{([^}]+)}/g);(r=a||(a={})).EmptyKeyset="EMPTY_KEYSET",r.EmptyLanguageData="EMPTY_LANGUAGE_DATA",r.KeysetNotFound="KEYSET_NOT_FOUND",r.MissingKey="MISSING_KEY",r.MissingKeyFor0="MISSING_KEY_FOR_0",r.MissingKeyParamsCount="MISSING_KEY_PARAMS_COUNT",r.MissingKeyPlurals="MISSING_KEY_PLURALS",r.MissingInheritedKey="MISSING_INHERITED_KEY",r.NestedPlural="NESTED_PLURAL",r.ExceedTranslationNestingDepth="EXCEED_TRANSLATION_NESTING_DEPTH",r.NoLanguageData="NO_LANGUAGE_DATA",Object.values(a);let u=t=>{var e;let n=o().exec(t);return(null!==(e=null==n?void 0:n.length)&&void 0!==e?e:0)>0},g=t=>t instanceof Array?t:t instanceof Object?Object.values(t):[];function c(t,e){return 0===t?e.None:1===t||-1===t?e.One:e.Many}function h(t,e){let n=Math.abs(t%10),a=Math.abs(t%100);return 0===t?e.None:1===n&&11!==a?e.One:n>1&&n<5&&(a<10||a>20)?e.Few:e.Many}(s=i||(i={}))[s.One=0]="One",s[s.Few=1]="Few",s[s.Many=2]="Many",s[s.None=3]="None";class f{constructor(t={}){this.data={},this.pluralizers={en:c,ru:h},this.logger=null;let{data:e,fallbackLang:n,lang:a,logger:i=null}=t;this.fallbackLang=n,this.lang=a,this.logger=i,e&&Object.entries(e).forEach(([t,e])=>{this.registerKeysets(t,e)})}setLang(t){this.lang=t}setFallbackLang(t){this.fallbackLang=t}configurePluralization(t){this.pluralizers=Object.assign({},this.pluralizers,t)}registerKeyset(t,e,n={}){let a=this.data[t]&&Object.prototype.hasOwnProperty.call(this.data[t],e);if(a)throw Error(`Keyset '${e}' is already registered, aborting!`);a&&this.warn(`Keyset '${e}' is already registered.`),this.data[t]=Object.assign({},this.data[t],{[e]:n})}registerKeysets(t,e){Object.keys(e).forEach(n=>{this.registerKeyset(t,n,e[n])})}has(t,e,n){var a;let i=this.getLanguageData(n);return!!(i&&i[t]&&(null===(a=i[t])||void 0===a?void 0:a[e]))}i18n(t,e,n){let a;if(!this.lang&&!this.fallbackLang)throw Error('Language is not specified. You should set at least one of these: "lang", "fallbackLang"');return this.lang?a=this._i18n(t,e,this.lang,n):this.warn("Target language is not specified."),void 0===a&&this.fallbackLang&&this.fallbackLang!==this.lang&&(a=this._i18n(t,e,this.fallbackLang,n)),null!=a?a:e}keyset(t){return(e,n)=>this.i18n(t,e,n)}warn(t,e,n){var a;let i="";e?(i+=e,n&&(i+=`.${n}`)):i="languageData",null===(a=this.logger)||void 0===a||a.log(`I18n: ${t}`,{level:"info",logger:i,extra:{type:"i18n"}})}getLanguageData(t){let e=t||this.lang;return e?this.data[e]:void 0}_i18n(t,e,n,i){let{text:r,details:s}=new y(this,n,e,t,i).getTranslationData();if(s){let t=function(t){let{code:e,fallbackLang:n,lang:i}=t,r=`Using language ${i}. `;switch(e){case a.EmptyKeyset:r+="Keyset is empty.";break;case a.EmptyLanguageData:r+="Language data is empty.";break;case a.KeysetNotFound:r+="Keyset not found.";break;case a.MissingKey:r+="Missing key.";break;case a.MissingKeyFor0:return r+"Missing key for 0";case a.MissingKeyParamsCount:r+="Missing params.count for key.";break;case a.MissingKeyPlurals:r+="Missing required plurals.";break;case a.NoLanguageData:r=`Language "${i}" is not defined, make sure you call setLang for the same language you called registerKeysets for!`}return n&&(r+=` Trying to use fallback language "${n}"...`),r}({code:s.code,lang:n,fallbackLang:this.fallbackLang===n?void 0:this.fallbackLang});this.warn(t,s.keysetName,s.key)}return r}}class y{constructor(t,e,n,a,i,r){this.i18n=t,this.lang=e,this.key=n,this.keysetName=a,this.params=i,this.nestingDepth=null!=r?r:0}getTranslationData(){var t;let{data:e,details:n}=this.getKeyset();if(n)return{details:n};let r=e&&e[this.key],s={};if(void 0===r)return this.getTranslationDataError(a.MissingKey);if("string"!=typeof r){let e=this.nestingDepth>0,n=g(r).some(t=>u(t));if(e||n)return this.getTranslationDataError(a.NestedPlural);let l=Number(null===(t=this.params)||void 0===t?void 0:t.count);if(Number.isNaN(l))return this.getTranslationDataError(a.MissingKeyParamsCount);s.text=function({value:t,count:e,lang:n,pluralizers:a,log:r,key:s}){if(!Array.isArray(t))return function(t,e,n){if(t.zero&&0===e)return t.zero;if(!Intl.PluralRules)throw Error("Intl.PluralRules is not available. Use polyfill.");let a=new Intl.PluralRules(n).select(e);return"other"===a&&void 0===t.other?t.many||t.few:t[a]||t.other}(t,e,n)||s;if(!a)return r("Can not use deprecated plural format without pluralizers"),s;if(a[n]||r(`Pluralization is not configured for language '${n}', falling back to the english ruleset`),t.length<3)return r("Missing required plurals"),s;let l=a[n]||a.en;return l?t[l(e,i)]||t[i.Many]||s:(r("Fallback pluralization is not configured!"),s)}({key:this.key,value:r,count:l,lang:this.lang||"en",pluralizers:this.i18n.pluralizers,log:t=>this.i18n.warn(t,this.keysetName,this.key)})}else s.text=String(r);this.params&&(s.text=function(t,e){let n,a="",i=l.lastIndex=0;for(;n=l.exec(t);){i!==n.index&&(a+=t.slice(i,n.index)),i=l.lastIndex;let[r,s]=n;s&&Object.prototype.hasOwnProperty.call(e,s)?a+=e[s]:a+=r}return i<t.length&&(a+=t.slice(i)),a}(String(s.text),this.params));let o=this.replaceTranslationsInheritance({keyValue:String(s.text)});return o.text?(s.text=o.text,s):o}getTranslationDataError(t){return{details:{code:t,keysetName:this.keysetName,key:this.key}}}getKeyset(){let t=this.i18n.getLanguageData(this.lang);if(void 0===t)return this.getTranslationDataError(a.NoLanguageData);if(0===Object.keys(t).length)return this.getTranslationDataError(a.EmptyLanguageData);let e=t[this.keysetName];return e?0===Object.keys(e).length?this.getTranslationDataError(a.EmptyKeyset):{data:e}:this.getTranslationDataError(a.KeysetNotFound)}replaceTranslationsInheritance(t){let e;let{keyValue:n}=t,i=o(),r="",s=i.lastIndex=0;for(;e=i.exec(n);){s!==e.index&&(r+=n.slice(s,e.index)),s=i.lastIndex;let[t,l]=e;if(l){if(this.nestingDepth+1>1)return this.getTranslationDataError(a.ExceedTranslationNestingDepth);let[t,e]=[l,void 0],n=l.split("::");if(n.length>1&&([e,t]=[n[0],n[1]]),!t)return this.getTranslationDataError(a.MissingInheritedKey);let i=new y(this.i18n,this.lang,t,null!=e?e:this.keysetName,void 0,this.nestingDepth+1).getTranslationData();if(i.details)return this.getTranslationDataError(a.MissingInheritedKey);r+=i.text}else r+=t}return s<n.length&&(r+=n.slice(s)),{text:r}}}},3528:function(t,e,n){"use strict";var a,i;n.d(e,{Pe:function(){return o},Uo:function(){return a},iE:function(){return u},jQ:function(){return l}}),(i=a||(a={})).Ru="ru",i.En="en";let r=[],s={lang:a.En,fallbackLang:a.En},l=t=>{Object.assign(s,t),r.forEach(t=>{t(s)})},o=t=>(r.push(t),()=>{r=r.filter(e=>e!==t)}),u=()=>s},27561:function(t,e,n){var a=n(67990),i=/^\s+/;t.exports=function(t){return t?t.slice(0,a(t)+1).replace(i,""):t}},67990:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},23279:function(t,e,n){var a=n(13218),i=n(7771),r=n(14841),s=Math.max,l=Math.min;t.exports=function(t,e,n){var o,u,g,c,h,f,y=0,d=!1,p=!1,E=!0;if("function"!=typeof t)throw TypeError("Expected a function");function v(e){var n=o,a=u;return o=u=void 0,y=e,c=t.apply(a,n)}function k(t){var n=t-f,a=t-y;return void 0===f||n>=e||n<0||p&&a>=g}function b(){var t,n,a,r=i();if(k(r))return N(r);h=setTimeout(b,(t=r-f,n=r-y,a=e-t,p?l(a,g-n):a))}function N(t){return(h=void 0,E&&o)?v(t):(o=u=void 0,c)}function m(){var t,n=i(),a=k(n);if(o=arguments,u=this,f=n,a){if(void 0===h)return y=t=f,h=setTimeout(b,e),d?v(t):c;if(p)return clearTimeout(h),h=setTimeout(b,e),v(f)}return void 0===h&&(h=setTimeout(b,e)),c}return e=r(e)||0,a(n)&&(d=!!n.leading,g=(p="maxWait"in n)?s(r(n.maxWait)||0,e):g,E="trailing"in n?!!n.trailing:E),m.cancel=function(){void 0!==h&&clearTimeout(h),y=0,o=f=u=h=void 0},m.flush=function(){return void 0===h?c:N(i())},m}},7771:function(t,e,n){var a=n(55639);t.exports=function(){return a.Date.now()}},23493:function(t,e,n){var a=n(23279),i=n(13218);t.exports=function(t,e,n){var r=!0,s=!0;if("function"!=typeof t)throw TypeError("Expected a function");return i(n)&&(r="leading"in n?!!n.leading:r,s="trailing"in n?!!n.trailing:s),a(t,e,{leading:r,maxWait:e,trailing:s})}},14841:function(t,e,n){var a=n(27561),i=n(13218),r=n(33448),s=0/0,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,g=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(r(t))return s;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=a(t);var n=o.test(t);return n||u.test(t)?g(t.slice(2),n?2:8):l.test(t)?s:+t}}}]);