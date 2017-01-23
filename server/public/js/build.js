!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var o=n(8),r=n(7),a=n(95),i=n(9)("main.js");i.verbose("Kicking off initial render!"),r.render(o.createElement(a,null),document.getElementById("mount-main"))},function(e,t,n){"use strict";function o(e,t,n,o,r,a,i,s){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,r,a,i,s],c=0;u=new Error(t.replace(/%s/g,function(){return l[c++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}}e.exports=o},function(e,t){"use strict";function n(e){for(var t=arguments.length-1,n="Minified React error #"+e+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+e,o=0;o<t;o++)n+="&args[]="+encodeURIComponent(arguments[o+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var r=new Error(n);throw r.name="Invariant Violation",r.framesToPop=1,r}e.exports=n},function(e,t,n){"use strict";var o=n(12),r=o;e.exports=r},function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}var r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,i,s=n(e),u=1;u<arguments.length;u++){o=Object(arguments[u]);for(var l in o)r.call(o,l)&&(s[l]=o[l]);if(Object.getOwnPropertySymbols){i=Object.getOwnPropertySymbols(o);for(var c=0;c<i.length;c++)a.call(o,i[c])&&(s[i[c]]=o[i[c]])}}return s}},function(e,t,n){"use strict";function o(e){for(var t;t=e._renderedComponent;)e=t;return e}function r(e,t){var n=o(e);n._hostNode=t,t[m]=n}function a(e){var t=e._hostNode;t&&(delete t[m],e._hostNode=null)}function i(e,t){if(!(e._flags&f.hasCachedChildNodes)){var n=e._renderedChildren,a=t.firstChild;e:for(var i in n)if(n.hasOwnProperty(i)){var s=n[i],u=o(s)._domID;if(0!==u){for(;null!==a;a=a.nextSibling)if(1===a.nodeType&&a.getAttribute(h)===String(u)||8===a.nodeType&&a.nodeValue===" react-text: "+u+" "||8===a.nodeType&&a.nodeValue===" react-empty: "+u+" "){r(s,a);continue e}c("32",u)}}e._flags|=f.hasCachedChildNodes}}function s(e){if(e[m])return e[m];for(var t=[];!e[m];){if(t.push(e),!e.parentNode)return null;e=e.parentNode}for(var n,o;e&&(o=e[m]);e=t.pop())n=o,t.length&&i(o,e);return n}function u(e){var t=s(e);return null!=t&&t._hostNode===e?t:null}function l(e){if(void 0===e._hostNode?c("33"):void 0,e._hostNode)return e._hostNode;for(var t=[];!e._hostNode;)t.push(e),e._hostParent?void 0:c("34"),e=e._hostParent;for(;t.length;e=t.pop())i(e,e._hostNode);return e._hostNode}var c=n(2),p=n(21),d=n(67),h=(n(1),p.ID_ATTRIBUTE_NAME),f=d,m="__reactInternalInstance$"+Math.random().toString(36).slice(2),g={getClosestInstanceFromNode:s,getInstanceFromNode:u,getNodeFromInstance:l,precacheChildNodes:i,precacheNode:r,uncacheNode:a};e.exports=g},function(e,t){"use strict";var n=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};e.exports=o},function(e,t,n){"use strict";e.exports=n(114)},function(e,t,n){"use strict";e.exports=n(110)},function(e,t,n){var o=n(35).DEBUG,r=n(35).VERBOSE;e.exports=function(e){return{logSource:e?e:"Unknown source",out:function(e){var t=e+" ("+this.logSource+")";console.log(t)},debug:function(e){if(o){var t="DEBUG: "+e+" ("+this.logSource+")";console.log(t)}},warn:function(e){var t="! ! ! WARNING ! ! ! : "+e+" ("+this.logSource+")";console.log(t)},error:function(e){var t="X X X ERROR X X X : "+e+" ("+this.logSource+")";console.log(t)},verbose:function(e){if(o&&r){var t="VERBOSE: "+e+" ("+this.logSource+")";console.log(t)}}}}},function(e,t){var n={};n.acctTypeBanned="banned",n.acctTypeDeleted="deleted",n.acctTypeModerator="moderator",n.acctTypeRegistered="registered",n.acctTypeVisitor="visitor",n.confirmDiscardUnsavedEdits="There are unsaved changes detected in your work.  These will be lost forever if you continue (seriously)!  Are you certain you wish to proceed?",n.cookieExpiry={maxAge:12096e5,httpOnly:!0},n.cookieNode="node_uid",n.cookieSession="session_uid",n.defaultNodeUid="default",n.defaultParentUid="00000000000000-0000000000-00000000000000",n.defaultUserName="Visitor",n.defaultTrailingSnippet="... and then the user sat down in front of the keyboard, and had to make a choice.",n.defaultLastPath="The user visits CYOAG.",n.defaultNodeSnippet="You have come to CYOAG, a unique Create Your Own Adventure Game experience!  Here you will enjoy the results of collaborative efforts by writers from all across the world to write one story of many paths and branches, together! (The CYOAG experience is still loading.)",n.displayNameBanned="[-banned-]",n.displayNameDeleted="[-deleted-]",n.displayNameUnknown="[-unknown-]",n.emptyString="",n.envLocal="local",n.envProd="prod",n.errorNodeUid="error",n.errorUserName="Visitor",n.errorTrailingSnippet="... and it had been a long night, and the CYOAG development team was really tired.",n.errorLastPath="The developer makes a horrible mistake.",n.errorNodeSnippet="It looks like the CYOAG developers have done something wrong and led you here.  What did they do wrong, you might ask ... ?  Well, let me tell you!",n.hostDomainLocal="http://localhost.cyoag.com:3000/",n.hostDomainProd="https://cyoag.com/",n.inputBlockingHide="hide",n.messageRegularClass="cyoag-regular-message",n.messageWarningClass="cyoag-warning-message",n.messageErrorClass="cyoag-error-message",n.modalTypeMessage="cyoag-modal-type-message",n.modalTypeWarning="cyoag-modal-type-warning",n.modalTypeError="cyoag-modal-type-error",n.nodeStatusDeleted="deleted",n.nodeStatusVisible="visible",n.portLocal=3e3,n.portProd=80,n.portHttps=443,n.rootNodeUid="start",n.rootTrailingSnippet="... by way of prologue.",n.rootLastPath="The writer takes up his pen.",n.specialMessage_editSuccess="Edits submitted successfully!",n.trailingSnippetLength=200,n.visitorName="Illustrious Visitor",n.votificationNone="none",n.votificationUp="up",n.votificationDown="down",n.windowScrollTop={x:0,y:0},e.exports=n},function(e,t,n){"use strict";var o=null;e.exports={debugTool:o}},function(e,t){"use strict";function n(e){return function(){return e}}var o=function(){};o.thatReturns=n,o.thatReturnsFalse=n(!1),o.thatReturnsTrue=n(!0),o.thatReturnsNull=n(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function o(e){return void 0!==e.ref}function r(e){return void 0!==e.key}var a=n(4),i=n(18),s=(n(3),n(80),Object.prototype.hasOwnProperty),u="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,l={key:!0,ref:!0,__self:!0,__source:!0},c=function(e,t,n,o,r,a,i){var s={$$typeof:u,type:e,key:t,ref:n,props:i,_owner:a};return s};c.createElement=function(e,t,n){var a,u={},p=null,d=null,h=null,f=null;if(null!=t){o(t)&&(d=t.ref),r(t)&&(p=""+t.key),h=void 0===t.__self?null:t.__self,f=void 0===t.__source?null:t.__source;for(a in t)s.call(t,a)&&!l.hasOwnProperty(a)&&(u[a]=t[a])}var m=arguments.length-2;if(1===m)u.children=n;else if(m>1){for(var g=Array(m),v=0;v<m;v++)g[v]=arguments[v+2];u.children=g}if(e&&e.defaultProps){var y=e.defaultProps;for(a in y)void 0===u[a]&&(u[a]=y[a])}return c(e,p,d,h,f,i.current,u)},c.createFactory=function(e){var t=c.createElement.bind(null,e);return t.type=e,t},c.cloneAndReplaceKey=function(e,t){var n=c(e.type,t,e.ref,e._self,e._source,e._owner,e.props);return n},c.cloneElement=function(e,t,n){var u,p=a({},e.props),d=e.key,h=e.ref,f=e._self,m=e._source,g=e._owner;if(null!=t){o(t)&&(h=t.ref,g=i.current),r(t)&&(d=""+t.key);var v;e.type&&e.type.defaultProps&&(v=e.type.defaultProps);for(u in t)s.call(t,u)&&!l.hasOwnProperty(u)&&(void 0===t[u]&&void 0!==v?p[u]=v[u]:p[u]=t[u])}var y=arguments.length-2;if(1===y)p.children=n;else if(y>1){for(var b=Array(y),C=0;C<y;C++)b[C]=arguments[C+2];p.children=b}return c(e.type,d,h,f,m,g,p)},c.isValidElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===u},c.REACT_ELEMENT_TYPE=u,e.exports=c},function(e,t,n){"use strict";function o(){S.ReactReconcileTransaction&&E?void 0:c("123")}function r(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=d.getPooled(),this.reconcileTransaction=S.ReactReconcileTransaction.getPooled(!0)}function a(e,t,n,r,a,i){o(),E.batchedUpdates(e,t,n,r,a,i)}function i(e,t){return e._mountOrder-t._mountOrder}function s(e){var t=e.dirtyComponentsLength;t!==v.length?c("124",t,v.length):void 0,v.sort(i),y++;for(var n=0;n<t;n++){var o=v[n],r=o._pendingCallbacks;o._pendingCallbacks=null;var a;if(f.logTopLevelRenders){var s=o;o._currentElement.props===o._renderedComponent._currentElement&&(s=o._renderedComponent),a="React update: "+s.getName(),console.time(a)}if(m.performUpdateIfNecessary(o,e.reconcileTransaction,y),a&&console.timeEnd(a),r)for(var u=0;u<r.length;u++)e.callbackQueue.enqueue(r[u],o.getPublicInstance())}}function u(e){return o(),E.isBatchingUpdates?(v.push(e),void(null==e._updateBatchNumber&&(e._updateBatchNumber=y+1))):void E.batchedUpdates(u,e)}function l(e,t){E.isBatchingUpdates?void 0:c("125"),b.enqueue(e,t),C=!0}var c=n(2),p=n(4),d=n(63),h=n(17),f=n(70),m=n(22),g=n(27),v=(n(1),[]),y=0,b=d.getPooled(),C=!1,E=null,w={initialize:function(){this.dirtyComponentsLength=v.length},close:function(){this.dirtyComponentsLength!==v.length?(v.splice(0,this.dirtyComponentsLength),T()):v.length=0}},_={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[w,_];p(r.prototype,g.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,d.release(this.callbackQueue),this.callbackQueue=null,S.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return g.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),h.addPoolingTo(r);var T=function(){for(;v.length||C;){if(v.length){var e=r.getPooled();e.perform(s,null,e),r.release(e)}if(C){C=!1;var t=b;b=d.getPooled(),t.notifyAll(),d.release(t)}}},N={injectReconcileTransaction:function(e){e?void 0:c("126"),S.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){e?void 0:c("127"),"function"!=typeof e.batchedUpdates?c("128"):void 0,"boolean"!=typeof e.isBatchingUpdates?c("129"):void 0,E=e}},S={ReactReconcileTransaction:null,batchedUpdates:a,enqueueUpdate:u,flushBatchedUpdates:T,injection:N,asap:l};e.exports=S},function(e,t,n){"use strict";var o=n(34),r=o({bubbled:null,captured:null}),a=o({topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null}),i={topLevelTypes:a,PropagationPhases:r};e.exports=i},function(e,t,n){"use strict";function o(e,t,n,o){this.dispatchConfig=e,this._targetInst=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var a in r)if(r.hasOwnProperty(a)){var s=r[a];s?this[a]=s(n):"target"===a?this.target=o:this[a]=n[a]}var u=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;return u?this.isDefaultPrevented=i.thatReturnsTrue:this.isDefaultPrevented=i.thatReturnsFalse,this.isPropagationStopped=i.thatReturnsFalse,this}var r=n(4),a=n(17),i=n(12),s=(n(3),"function"==typeof Proxy,["dispatchConfig","_targetInst","nativeEvent","isDefaultPrevented","isPropagationStopped","_dispatchListeners","_dispatchInstances"]),u={type:null,target:null,currentTarget:i.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};r(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=i.thatReturnsTrue)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=i.thatReturnsTrue)},persist:function(){this.isPersistent=i.thatReturnsTrue},isPersistent:i.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;for(var n=0;n<s.length;n++)this[s[n]]=null}}),o.Interface=u,o.augmentClass=function(e,t){var n=this,o=function(){};o.prototype=n.prototype;var i=new o;r(i,e.prototype),e.prototype=i,e.prototype.constructor=e,e.Interface=r({},n.Interface,t),e.augmentClass=n.augmentClass,a.addPoolingTo(e,a.fourArgumentPooler)},a.addPoolingTo(o,a.fourArgumentPooler),e.exports=o},function(e,t,n){"use strict";var o=n(2),r=(n(1),function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)}),a=function(e,t){var n=this;if(n.instancePool.length){var o=n.instancePool.pop();return n.call(o,e,t),o}return new n(e,t)},i=function(e,t,n){var o=this;if(o.instancePool.length){var r=o.instancePool.pop();return o.call(r,e,t,n),r}return new o(e,t,n)},s=function(e,t,n,o){var r=this;if(r.instancePool.length){var a=r.instancePool.pop();return r.call(a,e,t,n,o),a}return new r(e,t,n,o)},u=function(e,t,n,o,r){var a=this;if(a.instancePool.length){var i=a.instancePool.pop();return a.call(i,e,t,n,o,r),i}return new a(e,t,n,o,r)},l=function(e){var t=this;e instanceof t?void 0:o("25"),e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},c=10,p=r,d=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||p,n.poolSize||(n.poolSize=c),n.release=l,n},h={addPoolingTo:d,oneArgumentPooler:r,twoArgumentPooler:a,threeArgumentPooler:i,fourArgumentPooler:s,fiveArgumentPooler:u};e.exports=h},function(e,t){"use strict";var n={current:null};e.exports=n},function(e,t){"use strict";var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};e.exports=n},function(e,t,n){"use strict";function o(e){if(g){var t=e.node,n=e.children;if(n.length)for(var o=0;o<n.length;o++)v(t,n[o],null);else null!=e.html?p(t,e.html):null!=e.text&&h(t,e.text)}}function r(e,t){e.parentNode.replaceChild(t.node,e),o(t)}function a(e,t){g?e.children.push(t):e.node.appendChild(t.node)}function i(e,t){g?e.html=t:p(e.node,t)}function s(e,t){g?e.text=t:h(e.node,t)}function u(){return this.node.nodeName}function l(e){return{node:e,children:[],html:null,text:null,toString:u}}var c=n(37),p=n(33),d=n(51),h=n(87),f=1,m=11,g="undefined"!=typeof document&&"number"==typeof document.documentMode||"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent&&/\bEdge\/\d/.test(navigator.userAgent),v=d(function(e,t,n){t.node.nodeType===m||t.node.nodeType===f&&"object"===t.node.nodeName.toLowerCase()&&(null==t.node.namespaceURI||t.node.namespaceURI===c.html)?(o(t),e.insertBefore(t.node,n)):(e.insertBefore(t.node,n),o(t))});l.insertTreeBefore=v,l.replaceChildWithTree=r,l.queueChild=a,l.queueHTML=i,l.queueText=s,e.exports=l},function(e,t,n){"use strict";function o(e,t){return(e&t)===t}var r=n(2),a=(n(1),{MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32,injectDOMPropertyConfig:function(e){var t=a,n=e.Properties||{},i=e.DOMAttributeNamespaces||{},u=e.DOMAttributeNames||{},l=e.DOMPropertyNames||{},c=e.DOMMutationMethods||{};e.isCustomAttribute&&s._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var p in n){s.properties.hasOwnProperty(p)?r("48",p):void 0;var d=p.toLowerCase(),h=n[p],f={attributeName:d,attributeNamespace:null,propertyName:p,mutationMethod:null,mustUseProperty:o(h,t.MUST_USE_PROPERTY),hasBooleanValue:o(h,t.HAS_BOOLEAN_VALUE),hasNumericValue:o(h,t.HAS_NUMERIC_VALUE),hasPositiveNumericValue:o(h,t.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:o(h,t.HAS_OVERLOADED_BOOLEAN_VALUE)};if(f.hasBooleanValue+f.hasNumericValue+f.hasOverloadedBooleanValue<=1?void 0:r("50",p),u.hasOwnProperty(p)){var m=u[p];f.attributeName=m}i.hasOwnProperty(p)&&(f.attributeNamespace=i[p]),l.hasOwnProperty(p)&&(f.propertyName=l[p]),c.hasOwnProperty(p)&&(f.mutationMethod=c[p]),s.properties[p]=f}}}),i=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",s={ID_ATTRIBUTE_NAME:"data-reactid",ROOT_ATTRIBUTE_NAME:"data-reactroot",ATTRIBUTE_NAME_START_CHAR:i,ATTRIBUTE_NAME_CHAR:i+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",properties:{},getPossibleStandardName:null,_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<s._isCustomAttributeFunctions.length;t++){var n=s._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},injection:a};e.exports=s},function(e,t,n){"use strict";function o(){r.attachRefs(this,this._currentElement)}var r=n(138),a=(n(11),n(3),{mountComponent:function(e,t,n,r,a,i){var s=e.mountComponent(t,n,r,a,i);return e._currentElement&&null!=e._currentElement.ref&&t.getReactMountReady().enqueue(o,e),s},getHostNode:function(e){return e.getHostNode()},unmountComponent:function(e,t){r.detachRefs(e,e._currentElement),e.unmountComponent(t)},receiveComponent:function(e,t,n,a){var i=e._currentElement;if(t!==i||a!==e._context){var s=r.shouldUpdateRefs(i,t);s&&r.detachRefs(e,i),e.receiveComponent(t,n,a),s&&e._currentElement&&null!=e._currentElement.ref&&n.getReactMountReady().enqueue(o,e)}},performUpdateIfNecessary:function(e,t,n){e._updateBatchNumber===n&&e.performUpdateIfNecessary(t)}});e.exports=a},function(e,t,n){"use strict";var o=n(2),r=n(38),a=n(39),i=n(45),s=n(79),u=n(81),l=(n(1),{}),c=null,p=function(e,t){e&&(a.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e))},d=function(e){return p(e,!0)},h=function(e){return p(e,!1)},f=function(e){return"."+e._rootNodeID},m={injection:{injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},putListener:function(e,t,n){"function"!=typeof n?o("94",t,typeof n):void 0;var a=f(e),i=l[t]||(l[t]={});i[a]=n;var s=r.registrationNameModules[t];s&&s.didPutListener&&s.didPutListener(e,t,n)},getListener:function(e,t){var n=l[t],o=f(e);return n&&n[o]},deleteListener:function(e,t){var n=r.registrationNameModules[t];n&&n.willDeleteListener&&n.willDeleteListener(e,t);var o=l[t];if(o){var a=f(e);delete o[a]}},deleteAllListeners:function(e){var t=f(e);for(var n in l)if(l.hasOwnProperty(n)&&l[n][t]){var o=r.registrationNameModules[n];o&&o.willDeleteListener&&o.willDeleteListener(e,n),delete l[n][t]}},extractEvents:function(e,t,n,o){for(var a,i=r.plugins,u=0;u<i.length;u++){var l=i[u];if(l){var c=l.extractEvents(e,t,n,o);c&&(a=s(a,c))}}return a},enqueueEvents:function(e){e&&(c=s(c,e))},processEventQueue:function(e){var t=c;c=null,e?u(t,d):u(t,h),c?o("95"):void 0,i.rethrowCaughtError()},__purge:function(){l={}},__getListenerBank:function(){return l}};e.exports=m},function(e,t,n){"use strict";function o(e,t,n){var o=t.dispatchConfig.phasedRegistrationNames[n];return b(e,o)}function r(e,t,n){var r=t?y.bubbled:y.captured,a=o(e,n,r);a&&(n._dispatchListeners=g(n._dispatchListeners,a),n._dispatchInstances=g(n._dispatchInstances,e))}function a(e){e&&e.dispatchConfig.phasedRegistrationNames&&m.traverseTwoPhase(e._targetInst,r,e)}function i(e){if(e&&e.dispatchConfig.phasedRegistrationNames){var t=e._targetInst,n=t?m.getParentInstance(t):null;m.traverseTwoPhase(n,r,e)}}function s(e,t,n){if(n&&n.dispatchConfig.registrationName){var o=n.dispatchConfig.registrationName,r=b(e,o);r&&(n._dispatchListeners=g(n._dispatchListeners,r),n._dispatchInstances=g(n._dispatchInstances,e))}}function u(e){e&&e.dispatchConfig.registrationName&&s(e._targetInst,null,e)}function l(e){v(e,a)}function c(e){v(e,i)}function p(e,t,n,o){m.traverseEnterLeave(n,o,s,e,t)}function d(e){v(e,u)}var h=n(15),f=n(23),m=n(39),g=n(79),v=n(81),y=(n(3),h.PropagationPhases),b=f.getListener,C={accumulateTwoPhaseDispatches:l,accumulateTwoPhaseDispatchesSkipTarget:c,accumulateDirectDispatches:d,accumulateEnterLeaveDispatches:p};e.exports=C},function(e,t){"use strict";var n={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};e.exports=n},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(16),a=n(54),i={view:function(e){if(e.view)return e.view;var t=a(e);if(t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};r.augmentClass(o,i),e.exports=o},function(e,t,n){"use strict";var o=n(2),r=(n(1),{reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,n,r,a,i,s,u){this.isInTransaction()?o("27"):void 0;var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,n,r,a,i,s,u),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var o=t[n];try{this.wrapperInitData[n]=a.OBSERVED_ERROR,this.wrapperInitData[n]=o.initialize?o.initialize.call(this):null}finally{if(this.wrapperInitData[n]===a.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(r){}}}},closeAll:function(e){this.isInTransaction()?void 0:o("28");for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r,i=t[n],s=this.wrapperInitData[n];try{r=!0,s!==a.OBSERVED_ERROR&&i.close&&i.close.call(this,s),r=!1}finally{if(r)try{this.closeAll(n+1)}catch(u){}}}this.wrapperInitData.length=0}}),a={Mixin:r,OBSERVED_ERROR:{}};e.exports=a},function(e,t,n){"use strict";var o={};e.exports=o},function(e,t){"use strict";var n={onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0},o={getHostProps:function(e,t){if(!t.disabled)return t;var o={};for(var r in t)!n[r]&&t.hasOwnProperty(r)&&(o[r]=t[r]);return o}};e.exports=o},function(e,t,n){"use strict";function o(e){return Object.prototype.hasOwnProperty.call(e,g)||(e[g]=f++,d[e[g]]={}),d[e[g]]}var r,a=n(4),i=n(15),s=n(38),u=n(130),l=n(78),c=n(161),p=n(55),d={},h=!1,f=0,m={topAbort:"abort",topAnimationEnd:c("animationend")||"animationend",topAnimationIteration:c("animationiteration")||"animationiteration",topAnimationStart:c("animationstart")||"animationstart",topBlur:"blur",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topScroll:"scroll",topSeeked:"seeked",topSeeking:"seeking",topSelectionChange:"selectionchange",topStalled:"stalled",topSuspend:"suspend",topTextInput:"textInput",topTimeUpdate:"timeupdate",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topTransitionEnd:c("transitionend")||"transitionend",topVolumeChange:"volumechange",topWaiting:"waiting",topWheel:"wheel"},g="_reactListenersID"+String(Math.random()).slice(2),v=a({},u,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(v.handleTopLevel),v.ReactEventListener=e}},setEnabled:function(e){v.ReactEventListener&&v.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!v.ReactEventListener||!v.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var n=t,r=o(n),a=s.registrationNameDependencies[e],u=i.topLevelTypes,l=0;l<a.length;l++){var c=a[l];r.hasOwnProperty(c)&&r[c]||(c===u.topWheel?p("wheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",n):p("mousewheel")?v.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",n):v.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",n):c===u.topScroll?p("scroll",!0)?v.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",n):v.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",v.ReactEventListener.WINDOW_HANDLE):c===u.topFocus||c===u.topBlur?(p("focus",!0)?(v.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",n),v.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",n)):p("focusin")&&(v.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",n),v.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",n)),r[u.topBlur]=!0,r[u.topFocus]=!0):m.hasOwnProperty(c)&&v.ReactEventListener.trapBubbledEvent(c,m[c],n),r[c]=!0)}},trapBubbledEvent:function(e,t,n){return v.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return v.ReactEventListener.trapCapturedEvent(e,t,n)},supportsEventPageXY:function(){if(!document.createEvent)return!1;var e=document.createEvent("MouseEvent");return null!=e&&"pageX"in e},ensureScrollValueMonitoring:function(){if(void 0===r&&(r=v.supportsEventPageXY()),!r&&!h){var e=l.refreshScrollValues;v.ReactEventListener.monitorScrollValue(e),h=!0}}});e.exports=v},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(26),a=n(78),i=n(53),s={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:i,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+a.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+a.currentScrollTop}};r.augmentClass(o,s),e.exports=o},function(e,t){"use strict";function n(e){var t=""+e,n=r.exec(t);if(!n)return t;var o,a="",i=0,s=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#x27;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}s!==i&&(a+=t.substring(s,i)),s=i+1,a+=o}return s!==i?a+t.substring(s,i):a}function o(e){return"boolean"==typeof e||"number"==typeof e?""+e:n(e)}var r=/["'&<>]/;e.exports=o},function(e,t,n){"use strict";var o,r=n(6),a=n(37),i=/^[ \r\n\t\f]/,s=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,u=n(51),l=u(function(e,t){if(e.namespaceURI!==a.svg||"innerHTML"in e)e.innerHTML=t;else{o=o||document.createElement("div"),o.innerHTML="<svg>"+t+"</svg>";for(var n=o.firstChild;n.firstChild;)e.appendChild(n.firstChild)}});if(r.canUseDOM){var c=document.createElement("div");c.innerHTML=" ",""===c.innerHTML&&(l=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),i.test(t)||"<"===t[0]&&s.test(t)){e.innerHTML=String.fromCharCode(65279)+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t}),c=null}e.exports=l},function(e,t,n){"use strict";var o=n(1),r=function(e){var t,n={};e instanceof Object&&!Array.isArray(e)?void 0:o(!1);for(t in e)e.hasOwnProperty(t)&&(n[t]=t);return n};e.exports=r},function(e,t,n){var o=n(10),r=n(177),a={};switch(a.DEBUG=!0,a.VERBOSE=!0,a.env=o.envProd,a.env){case o.envLocal:a.hostDomain=o.hostDomainLocal,a.httpPort=3e3,a.httpsPrivKeyLocation=r.httpsPrivKeyLocation_local,a.httpsFullChainLocation=r.httpsFullChainLocation_local,a.httpsChainLocation=r.httpsChainLocation_local;break;case o.envProd:a.hostDomain=o.hostDomainProd,a.httpPort=80,a.httpsPrivKeyLocation=r.httpsPrivKeyLocation,a.httpsFullChainLocation=r.httpsFullChainLocation,a.httpsChainLocation=r.httpsChainLocation,a.DEBUG=!1,a.VERBOSE=!1;break;default:a.hostDomain=o.hostDomainLocal,a.httpPort=3e3,a.httpsPrivKeyLocation=r.httpsPrivKeyLocation_local,a.httpsFullChainLocation=r.httpsFullChainLocation_local,a.httpsChainLocation=r.httpsChainLocation_local}e.exports=a},function(e,t,n){"use strict";function o(e,t){return Array.isArray(t)&&(t=t[1]),t?t.nextSibling:e.firstChild}function r(e,t,n){c.insertTreeBefore(e,t,n)}function a(e,t,n){Array.isArray(t)?s(e,t[0],t[1],n):g(e,t,n)}function i(e,t){if(Array.isArray(t)){var n=t[1];t=t[0],u(e,t,n),e.removeChild(n)}e.removeChild(t)}function s(e,t,n,o){for(var r=t;;){var a=r.nextSibling;if(g(e,r,o),r===n)break;r=a}}function u(e,t,n){for(;;){var o=t.nextSibling;if(o===n)break;e.removeChild(o)}}function l(e,t,n){var o=e.parentNode,r=e.nextSibling;r===t?n&&g(o,document.createTextNode(n),r):n?(m(r,n),u(o,r,t)):u(o,e,t)}var c=n(20),p=n(105),d=n(74),h=(n(5),n(11),n(51)),f=n(33),m=n(87),g=h(function(e,t,n){e.insertBefore(t,n)}),v=p.dangerouslyReplaceNodeWithMarkup,y={dangerouslyReplaceNodeWithMarkup:v,replaceDelimitedText:l,processUpdates:function(e,t){for(var n=0;n<t.length;n++){var s=t[n];switch(s.type){case d.INSERT_MARKUP:r(e,s.content,o(e,s.afterNode));break;case d.MOVE_EXISTING:a(e,s.fromNode,o(e,s.afterNode));break;case d.SET_MARKUP:f(e,s.content);break;case d.TEXT_CONTENT:m(e,s.content);break;case d.REMOVE_NODE:i(e,s.fromNode)}}}};e.exports=y},function(e,t){"use strict";var n={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};e.exports=n},function(e,t,n){"use strict";function o(){if(s)for(var e in u){var t=u[e],n=s.indexOf(e);if(n>-1?void 0:i("96",e),!l.plugins[n]){t.extractEvents?void 0:i("97",e),l.plugins[n]=t;var o=t.eventTypes;for(var a in o)r(o[a],t,a)?void 0:i("98",a,e)}}}function r(e,t,n){
l.eventNameDispatchConfigs.hasOwnProperty(n)?i("99",n):void 0,l.eventNameDispatchConfigs[n]=e;var o=e.phasedRegistrationNames;if(o){for(var r in o)if(o.hasOwnProperty(r)){var s=o[r];a(s,t,n)}return!0}return!!e.registrationName&&(a(e.registrationName,t,n),!0)}function a(e,t,n){l.registrationNameModules[e]?i("100",e):void 0,l.registrationNameModules[e]=t,l.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var i=n(2),s=(n(1),null),u={},l={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},possibleRegistrationNames:null,injectEventPluginOrder:function(e){s?i("101"):void 0,s=Array.prototype.slice.call(e),o()},injectEventPluginsByName:function(e){var t=!1;for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];u.hasOwnProperty(n)&&u[n]===r||(u[n]?i("102",n):void 0,u[n]=r,t=!0)}t&&o()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return l.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var o=l.registrationNameModules[t.phasedRegistrationNames[n]];if(o)return o}return null},_resetEventPlugins:function(){s=null;for(var e in u)u.hasOwnProperty(e)&&delete u[e];l.plugins.length=0;var t=l.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var o=l.registrationNameModules;for(var r in o)o.hasOwnProperty(r)&&delete o[r]}};e.exports=l},function(e,t,n){"use strict";function o(e){return e===y.topMouseUp||e===y.topTouchEnd||e===y.topTouchCancel}function r(e){return e===y.topMouseMove||e===y.topTouchMove}function a(e){return e===y.topMouseDown||e===y.topTouchStart}function i(e,t,n,o){var r=e.type||"unknown-event";e.currentTarget=b.getNodeFromInstance(o),t?g.invokeGuardedCallbackWithCatch(r,n,e):g.invokeGuardedCallback(r,n,e),e.currentTarget=null}function s(e,t){var n=e._dispatchListeners,o=e._dispatchInstances;if(Array.isArray(n))for(var r=0;r<n.length&&!e.isPropagationStopped();r++)i(e,t,n[r],o[r]);else n&&i(e,t,n,o);e._dispatchListeners=null,e._dispatchInstances=null}function u(e){var t=e._dispatchListeners,n=e._dispatchInstances;if(Array.isArray(t)){for(var o=0;o<t.length&&!e.isPropagationStopped();o++)if(t[o](e,n[o]))return n[o]}else if(t&&t(e,n))return n;return null}function l(e){var t=u(e);return e._dispatchInstances=null,e._dispatchListeners=null,t}function c(e){var t=e._dispatchListeners,n=e._dispatchInstances;Array.isArray(t)?f("103"):void 0,e.currentTarget=t?b.getNodeFromInstance(n):null;var o=t?t(e):null;return e.currentTarget=null,e._dispatchListeners=null,e._dispatchInstances=null,o}function p(e){return!!e._dispatchListeners}var d,h,f=n(2),m=n(15),g=n(45),v=(n(1),n(3),{injectComponentTree:function(e){d=e},injectTreeTraversal:function(e){h=e}}),y=m.topLevelTypes,b={isEndish:o,isMoveish:r,isStartish:a,executeDirectDispatch:c,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,getInstanceFromNode:function(e){return d.getInstanceFromNode(e)},getNodeFromInstance:function(e){return d.getNodeFromInstance(e)},isAncestor:function(e,t){return h.isAncestor(e,t)},getLowestCommonAncestor:function(e,t){return h.getLowestCommonAncestor(e,t)},getParentInstance:function(e){return h.getParentInstance(e)},traverseTwoPhase:function(e,t,n){return h.traverseTwoPhase(e,t,n)},traverseEnterLeave:function(e,t,n,o,r){return h.traverseEnterLeave(e,t,n,o,r)},injection:v};e.exports=b},function(e,t){"use strict";function n(e){var t=/[=:]/g,n={"=":"=0",":":"=2"},o=(""+e).replace(t,function(e){return n[e]});return"$"+o}function o(e){var t=/(=0|=2)/g,n={"=0":"=","=2":":"},o="."===e[0]&&"$"===e[1]?e.substring(2):e.substring(1);return(""+o).replace(t,function(e){return n[e]})}var r={escape:n,unescape:o};e.exports=r},function(e,t,n){"use strict";function o(e){null!=e.checkedLink&&null!=e.valueLink?s("87"):void 0}function r(e){o(e),null!=e.value||null!=e.onChange?s("88"):void 0}function a(e){o(e),null!=e.checked||null!=e.onChange?s("89"):void 0}function i(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}var s=n(2),u=n(76),l=n(48),c=n(49),p=(n(1),n(3),{button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0}),d={value:function(e,t,n){return!e[t]||p[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t,n){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:u.func},h={},f={checkPropTypes:function(e,t,n){for(var o in d){if(d.hasOwnProperty(o))var r=d[o](t,o,e,l.prop,null,c);r instanceof Error&&!(r.message in h)&&(h[r.message]=!0,i(n))}},getValue:function(e){return e.valueLink?(r(e),e.valueLink.value):e.value},getChecked:function(e){return e.checkedLink?(a(e),e.checkedLink.value):e.checked},executeOnChange:function(e,t){return e.valueLink?(r(e),e.valueLink.requestChange(t.target.value)):e.checkedLink?(a(e),e.checkedLink.requestChange(t.target.checked)):e.onChange?e.onChange.call(void 0,t):void 0}};e.exports=f},function(e,t,n){"use strict";function o(e,t,n){this.props=e,this.context=t,this.refs=i,this.updater=n||a}var r=n(2),a=n(46),i=(n(80),n(28));n(1),n(3),o.prototype.isReactComponent={},o.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e?r("85"):void 0,this.updater.enqueueSetState(this,e),t&&this.updater.enqueueCallback(this,t,"setState")},o.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this),e&&this.updater.enqueueCallback(this,e,"forceUpdate")},e.exports=o},function(e,t,n){"use strict";var o=n(2),r=(n(1),!1),a={replaceNodeWithMarkup:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){r?o("104"):void 0,a.replaceNodeWithMarkup=e.replaceNodeWithMarkup,a.processChildrenUpdates=e.processChildrenUpdates,r=!0}}};e.exports=a},function(e,t,n){"use strict";function o(e){var t=Function.prototype.toString,n=Object.prototype.hasOwnProperty,o=RegExp("^"+t.call(n).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");try{var r=t.call(e);return o.test(r)}catch(a){return!1}}function r(e){return"."+e}function a(e){return parseInt(e.substr(1),10)}function i(e){if(_)return v.get(e);var t=r(e);return b[t]}function s(e){if(_)v["delete"](e);else{var t=r(e);delete b[t]}}function u(e,t,n){var o={element:t,parentID:n,text:null,childIDs:[],isMounted:!1,updateCount:0};if(_)v.set(e,o);else{var a=r(e);b[a]=o}}function l(e){if(_)y.add(e);else{var t=r(e);C[t]=!0}}function c(e){if(_)y["delete"](e);else{var t=r(e);delete C[t]}}function p(){return _?Array.from(v.keys()):Object.keys(b).map(a)}function d(){return _?Array.from(y.keys()):Object.keys(C).map(a)}function h(e){var t=i(e);if(t){var n=t.childIDs;s(e),n.forEach(h)}}function f(e,t,n){return"\n    in "+e+(t?" (at "+t.fileName.replace(/^.*[\\\/]/,"")+":"+t.lineNumber+")":n?" (created by "+n+")":"")}function m(e){return null==e?"#empty":"string"==typeof e||"number"==typeof e?"#text":"string"==typeof e.type?e.type:e.type.displayName||e.type.name||"Unknown"}function g(e){var t,n=T.getDisplayName(e),o=T.getElement(e),r=T.getOwnerID(e);return r&&(t=T.getDisplayName(r)),f(n,o&&o._source,t)}var v,y,b,C,E=n(2),w=n(18),_=(n(1),n(3),"function"==typeof Array.from&&"function"==typeof Map&&o(Map)&&null!=Map.prototype&&"function"==typeof Map.prototype.keys&&o(Map.prototype.keys)&&"function"==typeof Set&&o(Set)&&null!=Set.prototype&&"function"==typeof Set.prototype.keys&&o(Set.prototype.keys));_?(v=new Map,y=new Set):(b={},C={});var x=[],T={onSetChildren:function(e,t){var n=i(e);n.childIDs=t;for(var o=0;o<t.length;o++){var r=t[o],a=i(r);a?void 0:E("140"),null==a.childIDs&&"object"==typeof a.element&&null!=a.element?E("141"):void 0,a.isMounted?void 0:E("71"),null==a.parentID&&(a.parentID=e),a.parentID!==e?E("142",r,a.parentID,e):void 0}},onBeforeMountComponent:function(e,t,n){u(e,t,n)},onBeforeUpdateComponent:function(e,t){var n=i(e);n&&n.isMounted&&(n.element=t)},onMountComponent:function(e){var t=i(e);t.isMounted=!0;var n=0===t.parentID;n&&l(e)},onUpdateComponent:function(e){var t=i(e);t&&t.isMounted&&t.updateCount++},onUnmountComponent:function(e){var t=i(e);if(t){t.isMounted=!1;var n=0===t.parentID;n&&c(e)}x.push(e)},purgeUnmountedComponents:function(){if(!T._preventPurging){for(var e=0;e<x.length;e++){var t=x[e];h(t)}x.length=0}},isMounted:function(e){var t=i(e);return!!t&&t.isMounted},getCurrentStackAddendum:function(e){var t="";if(e){var n=e.type,o="function"==typeof n?n.displayName||n.name:n,r=e._owner;t+=f(o||"Unknown",e._source,r&&r.getName())}var a=w.current,i=a&&a._debugID;return t+=T.getStackAddendumByID(i)},getStackAddendumByID:function(e){for(var t="";e;)t+=g(e),e=T.getParentID(e);return t},getChildIDs:function(e){var t=i(e);return t?t.childIDs:[]},getDisplayName:function(e){var t=T.getElement(e);return t?m(t):null},getElement:function(e){var t=i(e);return t?t.element:null},getOwnerID:function(e){var t=T.getElement(e);return t&&t._owner?t._owner._debugID:null},getParentID:function(e){var t=i(e);return t?t.parentID:null},getSource:function(e){var t=i(e),n=t?t.element:null,o=null!=n?n._source:null;return o},getText:function(e){var t=T.getElement(e);return"string"==typeof t?t:"number"==typeof t?""+t:null},getUpdateCount:function(e){var t=i(e);return t?t.updateCount:0},getRegisteredIDs:p,getRootIDs:d};e.exports=T},function(e,t,n){"use strict";function o(e,t,n,o){try{return t(n,o)}catch(a){return void(null===r&&(r=a))}}var r=null,a={invokeGuardedCallback:o,invokeGuardedCallbackWithCatch:o,rethrowCaughtError:function(){if(r){var e=r;throw r=null,e}}};e.exports=a},function(e,t,n){"use strict";function o(e,t){}var r=(n(3),{isMounted:function(e){return!1},enqueueCallback:function(e,t){},enqueueForceUpdate:function(e){o(e,"forceUpdate")},enqueueReplaceState:function(e,t){o(e,"replaceState")},enqueueSetState:function(e,t){o(e,"setState")}});e.exports=r},function(e,t,n){"use strict";var o={};e.exports=o},function(e,t,n){"use strict";var o=n(34),r=o({prop:null,context:null,childContext:null});e.exports=r},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){"use strict";function o(e){u.enqueueUpdate(e)}function r(e){var t=typeof e;if("object"!==t)return t;var n=e.constructor&&e.constructor.name||t,o=Object.keys(e);return o.length>0&&o.length<20?n+" (keys: "+o.join(", ")+")":n}function a(e,t){var n=s.get(e);return n?n:null}var i=n(2),s=(n(18),n(25)),u=(n(11),n(14)),l=(n(1),n(3),{isMounted:function(e){var t=s.get(e);return!!t&&!!t._renderedComponent},enqueueCallback:function(e,t,n){l.validateCallback(t,n);var r=a(e);return r?(r._pendingCallbacks?r._pendingCallbacks.push(t):r._pendingCallbacks=[t],void o(r)):null},enqueueCallbackInternal:function(e,t){e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],o(e)},enqueueForceUpdate:function(e){var t=a(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,o(t))},enqueueReplaceState:function(e,t){var n=a(e,"replaceState");n&&(n._pendingStateQueue=[t],n._pendingReplaceState=!0,o(n))},enqueueSetState:function(e,t){var n=a(e,"setState");if(n){var r=n._pendingStateQueue||(n._pendingStateQueue=[]);r.push(t),o(n)}},enqueueElementInternal:function(e,t,n){e._pendingElement=t,e._context=n,o(e)},validateCallback:function(e,t){e&&"function"!=typeof e?i("122",t,r(e)):void 0}});e.exports=l},function(e,t){"use strict";var n=function(e){return"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(t,n,o,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,o,r)})}:e};e.exports=n},function(e,t){"use strict";function n(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}e.exports=n},function(e,t){"use strict";function n(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var o=r[e];return!!o&&!!n[o]}function o(e){return n}var r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};e.exports=o},function(e,t){"use strict";function n(e){var t=e.target||e.srcElement||window;return t.correspondingUseElement&&(t=t.correspondingUseElement),3===t.nodeType?t.parentNode:t}e.exports=n},function(e,t,n){"use strict";/**
	 * Checks if an event is supported in the current execution environment.
	 *
	 * NOTE: This will not work correctly for non-generic events such as `change`,
	 * `reset`, `load`, `error`, and `select`.
	 *
	 * Borrows from Modernizr.
	 *
	 * @param {string} eventNameSuffix Event name, e.g. "click".
	 * @param {?boolean} capture Check if the capture phase is supported.
	 * @return {boolean} True if the event is supported.
	 * @internal
	 * @license Modernizr 3.0.0pre (Custom Build) | MIT
	 */
<<<<<<< HEAD
	function isReactNode(node) {
	  return isValidContainer(node) && (node.hasAttribute(ROOT_ATTR_NAME) || node.hasAttribute(ATTR_NAME));
	}
	
	function getHostRootInstanceInContainer(container) {
	  var rootEl = getReactRootElementInContainer(container);
	  var prevHostInstance = rootEl && ReactDOMComponentTree.getInstanceFromNode(rootEl);
	  return prevHostInstance && !prevHostInstance._hostParent ? prevHostInstance : null;
	}
	
	function getTopLevelWrapperInContainer(container) {
	  var root = getHostRootInstanceInContainer(container);
	  return root ? root._hostContainerInfo._topLevelWrapper : null;
	}
	
	/**
	 * Temporary (?) hack so that we can store all top-level pending updates on
	 * composites instead of having to worry about different types of components
	 * here.
	 */
	var topLevelRootCounter = 1;
	var TopLevelWrapper = function () {
	  this.rootID = topLevelRootCounter++;
	};
	TopLevelWrapper.prototype.isReactComponent = {};
	if (process.env.NODE_ENV !== 'production') {
	  TopLevelWrapper.displayName = 'TopLevelWrapper';
	}
	TopLevelWrapper.prototype.render = function () {
	  // this.props is actually a ReactElement
	  return this.props;
	};
	
	/**
	 * Mounting is the process of initializing a React component by creating its
	 * representative DOM elements and inserting them into a supplied `container`.
	 * Any prior content inside `container` is destroyed in the process.
	 *
	 *   ReactMount.render(
	 *     component,
	 *     document.getElementById('container')
	 *   );
	 *
	 *   <div id="container">                   <-- Supplied `container`.
	 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
	 *       // ...                                 component.
	 *     </div>
	 *   </div>
	 *
	 * Inside of `container`, the first element rendered is the "reactRoot".
	 */
	var ReactMount = {
	
	  TopLevelWrapper: TopLevelWrapper,
	
	  /**
	   * Used by devtools. The keys are not important.
	   */
	  _instancesByReactRootID: instancesByReactRootID,
	
	  /**
	   * This is a hook provided to support rendering React components while
	   * ensuring that the apparent scroll position of its `container` does not
	   * change.
	   *
	   * @param {DOMElement} container The `container` being rendered into.
	   * @param {function} renderCallback This must be called once to do the render.
	   */
	  scrollMonitor: function (container, renderCallback) {
	    renderCallback();
	  },
	
	  /**
	   * Take a component that's already mounted into the DOM and replace its props
	   * @param {ReactComponent} prevComponent component instance already in the DOM
	   * @param {ReactElement} nextElement component instance to render
	   * @param {DOMElement} container container to render into
	   * @param {?function} callback function triggered on completion
	   */
	  _updateRootComponent: function (prevComponent, nextElement, nextContext, container, callback) {
	    ReactMount.scrollMonitor(container, function () {
	      ReactUpdateQueue.enqueueElementInternal(prevComponent, nextElement, nextContext);
	      if (callback) {
	        ReactUpdateQueue.enqueueCallbackInternal(prevComponent, callback);
	      }
	    });
	
	    return prevComponent;
	  },
	
	  /**
	   * Render a new component into the DOM. Hooked by hooks!
	   *
	   * @param {ReactElement} nextElement element to render
	   * @param {DOMElement} container container to render into
	   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
	   * @return {ReactComponent} nextComponent
	   */
	  _renderNewRootComponent: function (nextElement, container, shouldReuseMarkup, context) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case.
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, '_renderNewRootComponent(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from ' + 'render is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
	
	    !isValidContainer(container) ? process.env.NODE_ENV !== 'production' ? invariant(false, '_registerComponent(...): Target container is not a DOM element.') : _prodInvariant('37') : void 0;
	
	    ReactBrowserEventEmitter.ensureScrollValueMonitoring();
	    var componentInstance = instantiateReactComponent(nextElement, false);
	
	    // The initial render is synchronous but any updates that happen during
	    // rendering, in componentWillMount or componentDidMount, will be batched
	    // according to the current batching strategy.
	
	    ReactUpdates.batchedUpdates(batchedMountComponentIntoNode, componentInstance, container, shouldReuseMarkup, context);
	
	    var wrapperID = componentInstance._instance.rootID;
	    instancesByReactRootID[wrapperID] = componentInstance;
	
	    return componentInstance;
	  },
	
	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    !(parentComponent != null && ReactInstanceMap.has(parentComponent)) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'parentComponent must be a valid React Component') : _prodInvariant('38') : void 0;
	    return ReactMount._renderSubtreeIntoContainer(parentComponent, nextElement, container, callback);
	  },
	
	  _renderSubtreeIntoContainer: function (parentComponent, nextElement, container, callback) {
	    ReactUpdateQueue.validateCallback(callback, 'ReactDOM.render');
	    !ReactElement.isValidElement(nextElement) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactDOM.render(): Invalid component element.%s', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' :
	    // Check if it quacks like an element
	    nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : _prodInvariant('39', typeof nextElement === 'string' ? ' Instead of passing a string like \'div\', pass ' + 'React.createElement(\'div\') or <div />.' : typeof nextElement === 'function' ? ' Instead of passing a class like Foo, pass ' + 'React.createElement(Foo) or <Foo />.' : nextElement != null && nextElement.props !== undefined ? ' This may be caused by unintentionally loading two independent ' + 'copies of React.' : '') : void 0;
	
	    process.env.NODE_ENV !== 'production' ? warning(!container || !container.tagName || container.tagName.toUpperCase() !== 'BODY', 'render(): Rendering components directly into document.body is ' + 'discouraged, since its children are often manipulated by third-party ' + 'scripts and browser extensions. This may lead to subtle ' + 'reconciliation issues. Try rendering into a container element created ' + 'for your app.') : void 0;
	
	    var nextWrappedElement = ReactElement(TopLevelWrapper, null, null, null, null, null, nextElement);
	
	    var nextContext;
	    if (parentComponent) {
	      var parentInst = ReactInstanceMap.get(parentComponent);
	      nextContext = parentInst._processChildContext(parentInst._context);
	    } else {
	      nextContext = emptyObject;
	    }
	
	    var prevComponent = getTopLevelWrapperInContainer(container);
	
	    if (prevComponent) {
	      var prevWrappedElement = prevComponent._currentElement;
	      var prevElement = prevWrappedElement.props;
	      if (shouldUpdateReactComponent(prevElement, nextElement)) {
	        var publicInst = prevComponent._renderedComponent.getPublicInstance();
	        var updatedCallback = callback && function () {
	          callback.call(publicInst);
	        };
	        ReactMount._updateRootComponent(prevComponent, nextWrappedElement, nextContext, container, updatedCallback);
	        return publicInst;
	      } else {
	        ReactMount.unmountComponentAtNode(container);
	      }
	    }
	
	    var reactRootElement = getReactRootElementInContainer(container);
	    var containerHasReactMarkup = reactRootElement && !!internalGetID(reactRootElement);
	    var containerHasNonRootReactChild = hasNonRootReactChild(container);
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'render(...): Replacing React-rendered children with a new root ' + 'component. If you intended to update the children of this node, ' + 'you should instead have the existing children update their state ' + 'and render the new components instead of calling ReactDOM.render.') : void 0;
	
	      if (!containerHasReactMarkup || reactRootElement.nextSibling) {
	        var rootElementSibling = reactRootElement;
	        while (rootElementSibling) {
	          if (internalGetID(rootElementSibling)) {
	            process.env.NODE_ENV !== 'production' ? warning(false, 'render(): Target node has markup rendered by React, but there ' + 'are unrelated nodes as well. This is most commonly caused by ' + 'white-space inserted around server-rendered markup.') : void 0;
	            break;
	          }
	          rootElementSibling = rootElementSibling.nextSibling;
	        }
	      }
	    }
	
	    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent && !containerHasNonRootReactChild;
	    var component = ReactMount._renderNewRootComponent(nextWrappedElement, container, shouldReuseMarkup, nextContext)._renderedComponent.getPublicInstance();
	    if (callback) {
	      callback.call(component);
	    }
	    return component;
	  },
	
	  /**
	   * Renders a React component into the DOM in the supplied `container`.
	   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.render
	   *
	   * If the React component was previously rendered into `container`, this will
	   * perform an update on it and only mutate the DOM as necessary to reflect the
	   * latest React component.
	   *
	   * @param {ReactElement} nextElement Component element to render.
	   * @param {DOMElement} container DOM element to render into.
	   * @param {?function} callback function triggered on completion
	   * @return {ReactComponent} Component instance rendered in `container`.
	   */
	  render: function (nextElement, container, callback) {
	    return ReactMount._renderSubtreeIntoContainer(null, nextElement, container, callback);
	  },
	
	  /**
	   * Unmounts and destroys the React component rendered in the `container`.
	   * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.unmountcomponentatnode
	   *
	   * @param {DOMElement} container DOM element containing a React component.
	   * @return {boolean} True if a component was found in and unmounted from
	   *                   `container`
	   */
	  unmountComponentAtNode: function (container) {
	    // Various parts of our code (such as ReactCompositeComponent's
	    // _renderValidatedComponent) assume that calls to render aren't nested;
	    // verify that that's the case. (Strictly speaking, unmounting won't cause a
	    // render but we still don't expect to be in a render call here.)
	    process.env.NODE_ENV !== 'production' ? warning(ReactCurrentOwner.current == null, 'unmountComponentAtNode(): Render methods should be a pure function ' + 'of props and state; triggering nested component updates from render ' + 'is not allowed. If necessary, trigger nested updates in ' + 'componentDidUpdate. Check the render method of %s.', ReactCurrentOwner.current && ReactCurrentOwner.current.getName() || 'ReactCompositeComponent') : void 0;
	
	    !isValidContainer(container) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'unmountComponentAtNode(...): Target container is not a DOM element.') : _prodInvariant('40') : void 0;
	
	    if (process.env.NODE_ENV !== 'production') {
	      process.env.NODE_ENV !== 'production' ? warning(!nodeIsRenderedByOtherInstance(container), 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by another copy of React.') : void 0;
	    }
	
	    var prevComponent = getTopLevelWrapperInContainer(container);
	    if (!prevComponent) {
	      // Check if the node being unmounted was rendered by React, but isn't a
	      // root node.
	      var containerHasNonRootReactChild = hasNonRootReactChild(container);
	
	      // Check if the container itself is a React root node.
	      var isContainerReactRoot = container.nodeType === 1 && container.hasAttribute(ROOT_ATTR_NAME);
	
	      if (process.env.NODE_ENV !== 'production') {
	        process.env.NODE_ENV !== 'production' ? warning(!containerHasNonRootReactChild, 'unmountComponentAtNode(): The node you\'re attempting to unmount ' + 'was rendered by React and is not a top-level container. %s', isContainerReactRoot ? 'You may have accidentally passed in a React root node instead ' + 'of its container.' : 'Instead, have the parent component update its state and ' + 'rerender in order to remove this component.') : void 0;
	      }
	
	      return false;
	    }
	    delete instancesByReactRootID[prevComponent._instance.rootID];
	    ReactUpdates.batchedUpdates(unmountComponentFromNode, prevComponent, container, false);
	    return true;
	  },
	
	  _mountImageIntoNode: function (markup, container, instance, shouldReuseMarkup, transaction) {
	    !isValidContainer(container) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mountComponentIntoNode(...): Target container is not valid.') : _prodInvariant('41') : void 0;
	
	    if (shouldReuseMarkup) {
	      var rootElement = getReactRootElementInContainer(container);
	      if (ReactMarkupChecksum.canReuseMarkup(markup, rootElement)) {
	        ReactDOMComponentTree.precacheNode(instance, rootElement);
	        return;
	      } else {
	        var checksum = rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	        rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	
	        var rootMarkup = rootElement.outerHTML;
	        rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME, checksum);
	
	        var normalizedMarkup = markup;
	        if (process.env.NODE_ENV !== 'production') {
	          // because rootMarkup is retrieved from the DOM, various normalizations
	          // will have occurred which will not be present in `markup`. Here,
	          // insert markup into a <div> or <iframe> depending on the container
	          // type to perform the same normalizations before comparing.
	          var normalizer;
	          if (container.nodeType === ELEMENT_NODE_TYPE) {
	            normalizer = document.createElement('div');
	            normalizer.innerHTML = markup;
	            normalizedMarkup = normalizer.innerHTML;
	          } else {
	            normalizer = document.createElement('iframe');
	            document.body.appendChild(normalizer);
	            normalizer.contentDocument.write(markup);
	            normalizedMarkup = normalizer.contentDocument.documentElement.outerHTML;
	            document.body.removeChild(normalizer);
	          }
	        }
	
	        var diffIndex = firstDifferenceIndex(normalizedMarkup, rootMarkup);
	        var difference = ' (client) ' + normalizedMarkup.substring(diffIndex - 20, diffIndex + 20) + '\n (server) ' + rootMarkup.substring(diffIndex - 20, diffIndex + 20);
	
	        !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s', difference) : _prodInvariant('42', difference) : void 0;
	
	        if (process.env.NODE_ENV !== 'production') {
	          process.env.NODE_ENV !== 'production' ? warning(false, 'React attempted to reuse markup in a container but the ' + 'checksum was invalid. This generally means that you are ' + 'using server rendering and the markup generated on the ' + 'server was not what the client was expecting. React injected ' + 'new markup to compensate which works but you have lost many ' + 'of the benefits of server rendering. Instead, figure out ' + 'why the markup being generated is different on the client ' + 'or server:\n%s', difference) : void 0;
	        }
	      }
	    }
	
	    !(container.nodeType !== DOC_NODE_TYPE) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'You\'re trying to render a component to the document but you didn\'t use server rendering. We can\'t do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.') : _prodInvariant('43') : void 0;
	
	    if (transaction.useCreateElement) {
	      while (container.lastChild) {
	        container.removeChild(container.lastChild);
	      }
	      DOMLazyTree.insertTreeBefore(container, markup, null);
	    } else {
	      setInnerHTML(container, markup);
	      ReactDOMComponentTree.precacheNode(instance, container.firstChild);
	    }
	
	    if (process.env.NODE_ENV !== 'production') {
	      var hostNode = ReactDOMComponentTree.getInstanceFromNode(container.firstChild);
	      if (hostNode._debugID !== 0) {
	        ReactInstrumentation.debugTool.onHostOperation(hostNode._debugID, 'mount', markup.toString());
	      }
	    }
	  }
	};
	
	module.exports = ReactMount;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },
/* 163 */
/*!**********************************************!*\
  !*** ./~/react/lib/ReactDOMContainerInfo.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMContainerInfo
	 */
	
	'use strict';
	
	var validateDOMNesting = __webpack_require__(/*! ./validateDOMNesting */ 132);
	
	var DOC_NODE_TYPE = 9;
	
	function ReactDOMContainerInfo(topLevelWrapper, node) {
	  var info = {
	    _topLevelWrapper: topLevelWrapper,
	    _idCounter: 1,
	    _ownerDocument: node ? node.nodeType === DOC_NODE_TYPE ? node : node.ownerDocument : null,
	    _node: node,
	    _tag: node ? node.nodeName.toLowerCase() : null,
	    _namespaceURI: node ? node.namespaceURI : null
	  };
	  if (process.env.NODE_ENV !== 'production') {
	    info._ancestorInfo = node ? validateDOMNesting.updatedAncestorInfo(null, info._tag, null) : null;
	  }
	  return info;
	}
	
	module.exports = ReactDOMContainerInfo;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },
/* 164 */
/*!*********************************************!*\
  !*** ./~/react/lib/ReactDOMFeatureFlags.js ***!
  \*********************************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMFeatureFlags
	 */
	
	'use strict';
	
	var ReactDOMFeatureFlags = {
	  useCreateElement: true
	};
	
	module.exports = ReactDOMFeatureFlags;

/***/ },
/* 165 */
/*!********************************************!*\
  !*** ./~/react/lib/ReactMarkupChecksum.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactMarkupChecksum
	 */
	
	'use strict';
	
	var adler32 = __webpack_require__(/*! ./adler32 */ 166);
	
	var TAG_END = /\/?>/;
	var COMMENT_START = /^<\!\-\-/;
	
	var ReactMarkupChecksum = {
	  CHECKSUM_ATTR_NAME: 'data-react-checksum',
	
	  /**
	   * @param {string} markup Markup string
	   * @return {string} Markup string with checksum attribute attached
	   */
	  addChecksumToMarkup: function (markup) {
	    var checksum = adler32(markup);
	
	    // Add checksum (handle both parent tags, comments and self-closing tags)
	    if (COMMENT_START.test(markup)) {
	      return markup;
	    } else {
	      return markup.replace(TAG_END, ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '"$&');
	    }
	  },
	
	  /**
	   * @param {string} markup to use
	   * @param {DOMElement} element root React element
	   * @returns {boolean} whether or not the markup is the same
	   */
	  canReuseMarkup: function (markup, element) {
	    var existingChecksum = element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);
	    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
	    var markupChecksum = adler32(markup);
	    return markupChecksum === existingChecksum;
	  }
	};
	
	module.exports = ReactMarkupChecksum;

/***/ },
/* 166 */
/*!********************************!*\
  !*** ./~/react/lib/adler32.js ***!
  \********************************/
/***/ function(module, exports) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule adler32
	 * 
	 */
	
	'use strict';
	
	var MOD = 65521;
	
	// adler32 is not cryptographically strong, and is only used to sanity check that
	// markup generated on the server matches the markup generated on the client.
	// This implementation (a modified version of the SheetJS version) has been optimized
	// for our use case, at the expense of conforming to the adler32 specification
	// for non-ascii inputs.
	function adler32(data) {
	  var a = 1;
	  var b = 0;
	  var i = 0;
	  var l = data.length;
	  var m = l & ~0x3;
	  while (i < m) {
	    var n = Math.min(i + 4096, m);
	    for (; i < n; i += 4) {
	      b += (a += data.charCodeAt(i)) + (a += data.charCodeAt(i + 1)) + (a += data.charCodeAt(i + 2)) + (a += data.charCodeAt(i + 3));
	    }
	    a %= MOD;
	    b %= MOD;
	  }
	  for (; i < l; i++) {
	    b += a += data.charCodeAt(i);
	  }
	  a %= MOD;
	  b %= MOD;
	  return a | b << 16;
	}
	
	module.exports = adler32;

/***/ },
/* 167 */
/*!************************************!*\
  !*** ./~/react/lib/findDOMNode.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule findDOMNode
	 */
	
	'use strict';
	
	var _prodInvariant = __webpack_require__(/*! ./reactProdInvariant */ 7);
	
	var ReactCurrentOwner = __webpack_require__(/*! ./ReactCurrentOwner */ 10);
	var ReactDOMComponentTree = __webpack_require__(/*! ./ReactDOMComponentTree */ 36);
	var ReactInstanceMap = __webpack_require__(/*! ./ReactInstanceMap */ 119);
	
	var getHostComponentFromComposite = __webpack_require__(/*! ./getHostComponentFromComposite */ 168);
	var invariant = __webpack_require__(/*! fbjs/lib/invariant */ 8);
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 11);
	
	/**
	 * Returns the DOM node rendered by this element.
	 *
	 * See https://facebook.github.io/react/docs/top-level-api.html#reactdom.finddomnode
	 *
	 * @param {ReactComponent|DOMElement} componentOrElement
	 * @return {?DOMElement} The root node of this element.
	 */
	function findDOMNode(componentOrElement) {
	  if (process.env.NODE_ENV !== 'production') {
	    var owner = ReactCurrentOwner.current;
	    if (owner !== null) {
	      process.env.NODE_ENV !== 'production' ? warning(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component') : void 0;
	      owner._warnedAboutRefsInRender = true;
	    }
	  }
	  if (componentOrElement == null) {
	    return null;
	  }
	  if (componentOrElement.nodeType === 1) {
	    return componentOrElement;
	  }
	
	  var inst = ReactInstanceMap.get(componentOrElement);
	  if (inst) {
	    inst = getHostComponentFromComposite(inst);
	    return inst ? ReactDOMComponentTree.getNodeFromInstance(inst) : null;
	  }
	
	  if (typeof componentOrElement.render === 'function') {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'findDOMNode was called on an unmounted component.') : _prodInvariant('44') : void 0;
	  } else {
	     true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement)) : _prodInvariant('45', Object.keys(componentOrElement)) : void 0;
	  }
	}
	
	module.exports = findDOMNode;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },
/* 168 */
/*!******************************************************!*\
  !*** ./~/react/lib/getHostComponentFromComposite.js ***!
  \******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule getHostComponentFromComposite
	 */
	
	'use strict';
	
	var ReactNodeTypes = __webpack_require__(/*! ./ReactNodeTypes */ 123);
	
	function getHostComponentFromComposite(inst) {
	  var type;
	
	  while ((type = inst._renderedNodeType) === ReactNodeTypes.COMPOSITE) {
	    inst = inst._renderedComponent;
	  }
	
	  if (type === ReactNodeTypes.HOST) {
	    return inst._renderedComponent;
	  } else if (type === ReactNodeTypes.EMPTY) {
	    return null;
	  }
	}
	
	module.exports = getHostComponentFromComposite;

/***/ },
/* 169 */
/*!***************************************************!*\
  !*** ./~/react/lib/renderSubtreeIntoContainer.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule renderSubtreeIntoContainer
	*/
	
	'use strict';
	
	var ReactMount = __webpack_require__(/*! ./ReactMount */ 162);
	
	module.exports = ReactMount.renderSubtreeIntoContainer;

/***/ },
/* 170 */
/*!****************************************************!*\
  !*** ./~/react/lib/ReactDOMUnknownPropertyHook.js ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMUnknownPropertyHook
	 */
	
	'use strict';
	
	var DOMProperty = __webpack_require__(/*! ./DOMProperty */ 37);
	var EventPluginRegistry = __webpack_require__(/*! ./EventPluginRegistry */ 44);
	var ReactComponentTreeHook = __webpack_require__(/*! ./ReactComponentTreeHook */ 28);
	
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 11);
	
	if (process.env.NODE_ENV !== 'production') {
	  var reactProps = {
	    children: true,
	    dangerouslySetInnerHTML: true,
	    key: true,
	    ref: true,
	
	    autoFocus: true,
	    defaultValue: true,
	    valueLink: true,
	    defaultChecked: true,
	    checkedLink: true,
	    innerHTML: true,
	    suppressContentEditableWarning: true,
	    onFocusIn: true,
	    onFocusOut: true
	  };
	  var warnedProperties = {};
	
	  var validateProperty = function (tagName, name, debugID) {
	    if (DOMProperty.properties.hasOwnProperty(name) || DOMProperty.isCustomAttribute(name)) {
	      return true;
	    }
	    if (reactProps.hasOwnProperty(name) && reactProps[name] || warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
	      return true;
	    }
	    if (EventPluginRegistry.registrationNameModules.hasOwnProperty(name)) {
	      return true;
	    }
	    warnedProperties[name] = true;
	    var lowerCasedName = name.toLowerCase();
	
	    // data-* attributes should be lowercase; suggest the lowercase version
	    var standardName = DOMProperty.isCustomAttribute(lowerCasedName) ? lowerCasedName : DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ? DOMProperty.getPossibleStandardName[lowerCasedName] : null;
	
	    var registrationName = EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName) ? EventPluginRegistry.possibleRegistrationNames[lowerCasedName] : null;
	
	    if (standardName != null) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Unknown DOM property %s. Did you mean %s?%s', name, standardName, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	      return true;
	    } else if (registrationName != null) {
	      process.env.NODE_ENV !== 'production' ? warning(false, 'Unknown event handler property %s. Did you mean `%s`?%s', name, registrationName, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	      return true;
	    } else {
	      // We were unable to guess which prop the user intended.
	      // It is likely that the user was just blindly spreading/forwarding props
	      // Components should be careful to only render valid props/attributes.
	      // Warning will be invoked in warnUnknownProperties to allow grouping.
	      return false;
	    }
	  };
	}
	
	var warnUnknownProperties = function (debugID, element) {
	  var unknownProps = [];
	  for (var key in element.props) {
	    var isValid = validateProperty(element.type, key, debugID);
	    if (!isValid) {
	      unknownProps.push(key);
	    }
	  }
	
	  var unknownPropString = unknownProps.map(function (prop) {
	    return '`' + prop + '`';
	  }).join(', ');
	
	  if (unknownProps.length === 1) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unknown prop %s on <%s> tag. Remove this prop from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	  } else if (unknownProps.length > 1) {
	    process.env.NODE_ENV !== 'production' ? warning(false, 'Unknown props %s on <%s> tag. Remove these props from the element. ' + 'For details, see https://fb.me/react-unknown-prop%s', unknownPropString, element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	  }
	};
	
	function handleElement(debugID, element) {
	  if (element == null || typeof element.type !== 'string') {
	    return;
	  }
	  if (element.type.indexOf('-') >= 0 || element.props.is) {
	    return;
	  }
	  warnUnknownProperties(debugID, element);
	}
	
	var ReactDOMUnknownPropertyHook = {
	  onBeforeMountComponent: function (debugID, element) {
	    handleElement(debugID, element);
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    handleElement(debugID, element);
	  }
	};
	
	module.exports = ReactDOMUnknownPropertyHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },
/* 171 */
/*!*******************************************************!*\
  !*** ./~/react/lib/ReactDOMNullInputValuePropHook.js ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactDOMNullInputValuePropHook
	 */
	
	'use strict';
	
	var ReactComponentTreeHook = __webpack_require__(/*! ./ReactComponentTreeHook */ 28);
	
	var warning = __webpack_require__(/*! fbjs/lib/warning */ 11);
	
	var didWarnValueNull = false;
	
	function handleElement(debugID, element) {
	  if (element == null) {
	    return;
	  }
	  if (element.type !== 'input' && element.type !== 'textarea' && element.type !== 'select') {
	    return;
	  }
	  if (element.props != null && element.props.value === null && !didWarnValueNull) {
	    process.env.NODE_ENV !== 'production' ? warning(false, '`value` prop on `%s` should not be null. ' + 'Consider using the empty string to clear the component or `undefined` ' + 'for uncontrolled components.%s', element.type, ReactComponentTreeHook.getStackAddendumByID(debugID)) : void 0;
	
	    didWarnValueNull = true;
	  }
	}
	
	var ReactDOMNullInputValuePropHook = {
	  onBeforeMountComponent: function (debugID, element) {
	    handleElement(debugID, element);
	  },
	  onBeforeUpdateComponent: function (debugID, element) {
	    handleElement(debugID, element);
	  }
	};
	
	module.exports = ReactDOMNullInputValuePropHook;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! (webpack)/~/node-libs-browser/~/process/browser.js */ 3)))

/***/ },
/* 172 */
/*!******************************************!*\
  !*** ./build-source/js/MainComponent.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var config = __webpack_require__(/*! ../../build-config */ 173);
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('MainComponent.js');
	
	var HeaderComponents = __webpack_require__(/*! ./HeaderComponents */ 177);
	var MessagingComponents = __webpack_require__(/*! ./MessagingComponents */ 178);
	var MainColumnComponents = __webpack_require__(/*! ./MainColumnComponents */ 179);
	var MarginColumnComponents = __webpack_require__(/*! ./MarginColumnComponents */ 186);
	var FooterComponents = __webpack_require__(/*! ./FooterComponents */ 187);
	
	// Hello World component: display a simple prop
	var MainComponent = React.createClass({
	  displayName: 'MainComponent',
	
	  cancelEdit: cancelEdit,
	  componentDidMount: mountXhrHandler,
	  componentDidUpdate: function () {
	    if (this.state.editMode) {
	      // scroll window to the editing area - thanks to basil: http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
	      var box = document.getElementById('cyoag-input-container').getBoundingClientRect();
	
	      var body = document.body;
	      var docEl = document.documentElement;
	
	      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
	      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
	
	      var clientTop = docEl.clientTop || body.clientTop || 0;
	      var clientLeft = docEl.clientLeft || body.clientLeft || 0;
	
	      var top = box.top + scrollTop - clientTop;
	      var left = box.left + scrollLeft - clientLeft;
	
	      window.scrollTo(left, top);
	    } else {
	      restoreScroll(this.state.windowScroll);
	    }
	  },
	  componentWillMount: function () {
	    // this takes place before render
	    this.editsPending = false;
	    window.onbeforeunload = null;
	  },
	  deleteChapter: deleteChapter,
	  editChapter: editChapter,
	  getInitialState: getDefaultStateObject,
	  logoutRequest: logoutXhrHandler,
	  message: function (msg) {
	    logMgr.debug('incoming message object: ' + JSON.stringify(msg));
	    this.setState({
	      msg: msg.msg ? msg.msg : null,
	      warning: msg.warning ? msg.warning : null,
	      error: msg.error ? msg.error : null,
	      windowScroll: getWindowPosition()
	    });
	  },
	  nameChange: nameChange,
	  navigate: navigateXhrHandler,
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var context = {};
	    context.state = this.state;
	    context.deleteChapter = this.deleteChapter;
	    context.cancelEdit = this.cancelEdit;
	    context.editChapter = this.editChapter;
	    context.logoutRequest = this.logoutRequest;
	    context.message = this.message;
	    context.nameChange = this.nameChange;
	    context.navigate = this.navigate;
	    context.setEditsPending = this.setEditsPending;
	    context.saveDraft = this.saveDraft;
	    context.submitEdits = this.submitEdits;
	    context.submitInput = this.submitInput;
	    context.votify = this.votify;
	
	    var debugStateDisplay = function () {
	      if (config.DEBUG) {
	        return React.createElement(
	          'div',
	          { id: 'cyoag-debug-state-display' },
	          React.createElement('br', null),
	          React.createElement('hr', null),
	          React.createElement(
	            'h4',
	            null,
	            'Debug mode enabled! Current app state:'
	          ),
	          React.createElement('hr', null),
	          JSON.stringify(context.state)
	        );
	      } else {
	        return React.createElement('div', { id: 'cyoag-debug-state-display' });
	      }
	    }();
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-react-container' },
	      React.createElement(HeaderComponents.Header, null),
	      React.createElement(MessagingComponents.Banner, { error: this.state.error, warning: this.state.warning, msg: this.state.msg }),
	      React.createElement(
	        'div',
	        { id: 'cyoag-columns' },
	        React.createElement(MarginColumnComponents.MarginColumn, { context: context }),
	        React.createElement(MainColumnComponents.MainColumn, { context: context })
	      ),
	      React.createElement(FooterComponents.Footer, null),
	      debugStateDisplay,
	      React.createElement(MessagingComponents.Modal, { error: this.state.error, warning: this.state.warning, msg: this.state.msg })
	    );
	  },
	  setEditsPending: function (b) {
	    this.editsPending = b;
	  },
	  saveDraft: saveDraft,
	  submitInput: submitInput,
	  submitEdits: submitEdits,
	  votify: votify
	});
	
	module.exports = MainComponent;
	
	// returns true if user DOES want to RETAIN pending edits (and cancel requested action)
	// returns false if user wants to DISCARD pending edits (and continue with requested action) or if there are no pending edits
	function checkPendingEdits(editsPending, altConfirmationMessage) {
	  logMgr.verbose('Confirming whether user wants to discard pending edits.');
	  // if no edits are pending, return false
	  if (!editsPending) {
	    logMgr.verbose('But no edits were pending!');
	    // since no edits were actually pending, ensure window.onbeforeunload is null
	    window.onbeforeunload = null;
	    return false;
	  }
	
	  var confMsg = altConfirmationMessage ? altConfirmationMessage : constants.confirmDiscardUnsavedEdits;
	  // if the user says they want to DISCARD saved edits
	  if (confirm(confMsg)) {
	    logMgr.verbose('User confirmed they are prepared to discard pending edits.');
	    // since user is discarding changes, ensure window.onbeforeunload is null, editsPending is false, and messages are cleared
	    this.editsPending = false;
	    window.onbeforeunload = null;
	    this.message({});
	    return false;
	  }
	
	  // edits are pending, and the user does NOT want to discard them
	  logMgr.verbose('Edits are pending and the user does not want to discard them.');
	  return true;
	}
	
	function mountXhrHandler() {
	  if (checkPendingEdits(this.editsPending)) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	  }
	
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('Checking session status . . .');
	  var xhr = new XMLHttpRequest();
	  var properThis = this;
	  // xmlHttp.onreadystatechange = () => {...}
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Cookie check response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Initial cookie check yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect your login status.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  xhr.send();
	}
	
	function logoutXhrHandler() {
	  if (checkPendingEdits(this.editsPending)) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	  }
	
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('Logging out current user . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Logout response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Logout attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('GET', '/session/logout');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect your login status.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  xhr.send();
	}
	
	function navigateXhrHandler(nodeUid) {
	  if (checkPendingEdits(this.editsPending)) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	  }
	
	  var savedWindowPosition = getWindowPosition();
	  if (nodeUid == null) {
	    this.message({ error: 'Missing node ID in navigation attempt.' });
	    return;
	  }
	  logMgr.debug('User attempting to navigate story nodes . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Navigation response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Navigation attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect your login status.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ navigate: nodeUid });
	  xhr.send(xhrPayload);
	}
	
	function deleteChapter() {
	  if (!confirm('Are you positive you want to delete this chapter?  This can only be undone by a CYOAG administrator ' + '(not even by a moderator)!')) {
	    return;
	  }
	
	  if (checkPendingEdits(this.editsPending)) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	  }
	
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('User attempting to delete a story node . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Deletion response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Deletion attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect result of deletion attempt.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ deleteTarget: properThis.state.nodeUid });
	  xhr.send(xhrPayload);
	}
	
	function editChapter() {
	  this.message({}); // clear any existing messages when swapping between editMode
	  if (checkPendingEdits(this.editsPending, 'You already have work pending on a new chapter!  Do you want to proceed to ' + 'discard this work, or cancel your request to edit the existing chapter?')) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	  }
	
	  this.setState({
	    editMode: true,
	    windowScroll: getWindowPosition()
	  });
	}
	function cancelEdit() {
	  if (checkPendingEdits(this.editsPending)) {
	    return;
	  }
	
	  window.onbeforeunload = null;
	  this.editsPending = false;
	
	  this.setState({
	    editMode: false,
	    windowScroll: getWindowPosition()
	  });
	}
	
	function votify(nodeUid, newVote) {
	  if (checkPendingEdits(this.editsPending, 'Voting can cause pending edits to be lost ... you might want to vote after your edits are submitted! ' + 'Do you still want to vote now (dangerous), or would you like to cancel your vote until you are done editing (safe)?')) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	    resetNewChapterInputs(); // don't keep unsaved changes lying around once listeners are disabled
	  }
	
	  var savedWindowPosition = getWindowPosition();
	  if (nodeUid == null || newVote == null) {
	    logMgr.error('Relevant parameters missing in votification call.');
	    return;
	  }
	  logMgr.debug('User attempting to votify a story node . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Votification response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, savedWindowPosition);
	    } else {
	      logMgr.debug('Votification attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect result of votification attempt.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ votify: nodeUid, newVote: newVote });
	  xhr.send(xhrPayload);
	}
	
	function nameChange(newName) {
	  if (checkPendingEdits(this.editsPending, 'Changing your name will trigger a page reload ... you might want to change your ' + 'name after submitting your edits!  Do you want to proceed with changing your name and discarding your unsaved work?')) {
	    return;
	  } else {
	    this.editsPending = false;
	    window.onbeforeunload = null;
	    resetNewChapterInputs(); // don't keep unsaved changes lying around once listeners are disabled
	  }
	
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('User attempting to update their name . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Name change response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, savedWindowPosition);
	    } else {
	      logMgr.debug('Name change attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect result of name change attempt.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ newName: newName });
	  xhr.send(xhrPayload);
	}
	
	function submitEdits(path, body) {
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('User attempting to edit existing node . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Edit submission response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Edit submission attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect result of edit submission attempt.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ editTarget: properThis.state.nodeUid, updatedPath: path, updatedBody: body });
	  xhr.send(xhrPayload);
	}
	
	function submitInput(path, body) {
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('User attempting to submit new node . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Node submission response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Node submission attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to detect result of node submission attempt.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ newNodePath: path, newNodeBody: body });
	  xhr.send(xhrPayload);
	}
	
	function saveDraft(path, body) {
	  var savedWindowPosition = getWindowPosition();
	  logMgr.debug('User attempting to save draft . . .');
	  var xhr = new XMLHttpRequest();
	  // xmlHttp.onreadystatechange = () => {...}
	  var properThis = this;
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
	      logMgr.debug('Status 200 (or 304)!');
	      logMgr.verbose('Draft salvation response payload: ' + xhr.responseText);
	      var response = JSON.parse(xhr.responseText);
	      validateResponse(properThis, response, constants.windowScrollTop);
	    } else {
	      logMgr.debug('Draft salvation attempt yielded HTTP response status: ' + xhr.status);
	    }
	  };
	  xhr.open('POST', '/session');
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.timeout = 5000;
	  xhr.ontimeout = function () {
	    xhr.abort();
	    properThis.setState({
	      error: 'Server response timed out; unable to verify that your draft was saved.',
	      windowScroll: savedWindowPosition
	    });
	  };
	  var xhrPayload = JSON.stringify({ draftPath: path, draftBody: body });
	  xhr.send(xhrPayload);
	}
	
	// scrollTop tells us whether we want to scroll the window to the top after validating and initializing a React re-render
	function validateResponse(properThis, response, newWindowPosition) {
	  if (validateMessageResponse(properThis, response, newWindowPosition)) {
	    return;
	  }
	
	  logMgr.debug('Attempting to validate response from server . . .');
	  if (!response) {
	    // wow... if you don't even get a response, something is nightmarishly wrong
	    var errorMessage = 'Got no valid response object from server whatsoever.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (response.error) {
	    // set an error state based on the returned error
	    logMgr.out(response.error);
	    properThis.setState(getErrorStateObject(response.error));
	    return;
	  }
	  if (!response.hasOwnProperty('nodeUid')) {
	    // can't even determine where we are; set error state, display error content
	    var errorMessage = 'Could not get story node data from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('parentUid')) {
	    // can't determine current node's parent; set error state, display error content
	    var errorMessage = 'Could not retrieve node lineage data from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('acctType')) {
	    // can't determine account type; set err, display err content
	    var errorMessage = 'Could not get user account type from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('userName')) {
	    // can't figure out user's name; set err, display err content
	    var errorMessage = 'Could not get user data from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('votification') || response.votification != constants.votificationNone && response.votification != constants.votificationUp && response.votification != constants.votificationDown) {
	    // can't determine votification status; set err, display err content
	    var errorMessage = 'Could not retrieve votification status from the server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('paths')) {
	    // no paths given, set error state and display error content
	    var errorMessage = 'Could not retrieve pathing information from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('snippet')) {
	    // no snippet to display, set error state and display error content
	    var errorMessage = 'Could not retrieve snippet data from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.snippet.hasOwnProperty('trailingSnippet') || !response.snippet.hasOwnProperty('lastPath') || !response.snippet.hasOwnProperty('nodeSnippet') || !response.snippet.hasOwnProperty('authorName')) {
	    // snippet information missing, set error state and display error content
	    var errorMessage = 'Some snippet details were missing in response from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.hasOwnProperty('inputBlocking')) {
	    // no verification of current node's authorship, set error state and display error content
	    var errorMessage = 'Could not retrieve input permissions from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  if (!response.inputBlocking.hasOwnProperty('top') || !response.inputBlocking.hasOwnProperty('side')) {
	    // path authorship information missing, set error state and display error content
	    var errorMessage = 'Path authorship details were missing in response from server.';
	    logMgr.out(errorMessage);
	    properThis.setState(getErrorStateObject(errorMessage));
	    return;
	  }
	  logMgr.verbose('Trying to set state after validation: ' + JSON.stringify(response));
	  properThis.setState({
	    nodeUid: response.nodeUid,
	    parentUid: response.parentUid,
	    userName: response.userName,
	    acctType: response.acctType,
	    votification: response.votification,
	    snippet: response.snippet,
	    paths: response.paths,
	    inputBlocking: response.inputBlocking,
	    editMode: false, // always reset this to false when taking in response from server
	    msg: response.msg ? response.msg : null,
	    warning: response.warning ? response.warning : null,
	    error: response.error ? response.error : null,
	    windowScroll: newWindowPosition || constants.windowScrollTop
	  });
	  logMgr.verbose('State was set successfully after validation!');
	  logMgr.verbose('New state: ' + JSON.stringify(properThis.state));
	}
	
	// don't do a full response validation if we are told to expect only an alert message
	function validateMessageResponse(context, response, newWindowPosition) {
	  if (response.messageOnly) {
	    logMgr.verbose('Got message-only response.');
	    context.setState({
	      msg: null,
	      warning: null,
	      error: null
	    });
	    context.setState({
	      msg: response.msg ? response.msg : null,
	      warning: response.warning ? response.warning : null,
	      error: response.error ? response.error : null,
	      windowScroll: newWindowPosition || constants.windowScrollTop
	    });
	    return true;
	  }
	  return false;
	}
	
	function getDefaultStateObject() {
	  return {
	    nodeUid: constants.defaultNodeUid,
	    parentUid: constants.defaultParentUid,
	    userName: constants.defaultUserName,
	    acctType: constants.acctTypeVisitor,
	    votification: constants.votificationNone,
	    snippet: {
	      trailingSnippet: constants.defaultTrailingSnippet,
	      lastPath: constants.defaultLastPath,
	      nodeSnippet: constants.defaultNodeSnippet,
	      authorName: constants.displayNameUnknown
	    },
	    paths: [],
	    inputBlocking: constants.inputBlockingHide,
	    editMode: false,
	    msg: null,
	    warning: null,
	    error: null,
	    windowScroll: constants.windowScrollTop
	  };
	}
	
	function getErrorStateObject(errorMessage) {
	  return {
	    nodeUid: constants.errorNodeUid,
	    parentUid: constants.errorNodeUid,
	    userName: constants.errorUserName,
	    acctType: constants.acctTypeVisitor,
	    votification: constants.votificationNone,
	    snippet: {
	      trailingSnippet: constants.errorTrailingSnippet,
	      lastPath: constants.errorLastPath,
	      nodeSnippet: constants.errorNodeSnippet + '  ' + errorMessage,
	      authorName: constants.displayNameUnknown
	    },
	    paths: [],
	    inputBlocking: constants.inputBlockingHide,
	    editMode: false,
	    msg: null,
	    warning: null,
	    error: errorMessage,
	    windowScroll: constants.windowScrollTop
	  };
	}
	
	function resetNewChapterInputs() {
	  var inputPathElement = document.getElementById('cyoag-input-path');
	  var inputBodyElement = document.getElementById('cyoag-input-body');
	  if (inputPathElement) {
	    inputPathElement.value = '';
	  }
	  if (inputBodyElement) {
	    inputBodyElement.value = '';
	  }
	}
	
	// this function returns a JSON object consisting of window scroll position as {x: #, y: #}
	function getWindowPosition() {
	  // modified from http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
	  var doc = document.documentElement;
	  logMgr.verbose('window.pageXOffset: ' + window.pageXOffset);
	  logMgr.verbose('window.pageYOffset: ' + window.pageYOffset);
	  logMgr.verbose('doc.scrollLeft: ' + doc.scrollLeft);
	  logMgr.verbose('doc.scrollTop: ' + doc.scrollTop);
	  logMgr.verbose('doc.clientLeft: ' + doc.clientLeft);
	  logMgr.verbose('doc.clientTop: ' + doc.clientTop);
	  var pos = {
	    x: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
	    y: (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
	  };
	  logMgr.verbose('Got window scroll position: ' + JSON.stringify(pos));
	  return pos;
	}
	
	function restoreScroll(scrollCoord) {
	  var x = scrollCoord.x,
	      y = scrollCoord.y;
	  logMgr.verbose('Attempting to restore scroll position: ' + x + ', ' + y);
	  window.scrollTo(x, y);
	}

/***/ },
/* 173 */
/*!*************************!*\
  !*** ./build-config.js ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	var constants = __webpack_require__(/*! ./constants */ 174);
	var secrets = __webpack_require__(/*! ./secrets */ 175);
	
	var config = {};
	
	config.DEBUG = true;
	config.VERBOSE = true;
	
	config.env = constants.envLocal;
	
	switch(config.env) {
	  case constants.envLocal:
	    config.hostDomain = constants.hostDomainLocal;
	    config.httpPort = 3000;
	    config.httpsPrivKeyLocation = secrets.httpsPrivKeyLocation_local;
	    config.httpsFullChainLocation = secrets.httpsFullChainLocation_local;
	    config.httpsChainLocation = secrets.httpsChainLocation_local;
	    break;
	  case constants.envProd:
	    config.hostDomain = constants.hostDomainProd;
	    config.httpPort = 80;
	    config.httpsPrivKeyLocation = secrets.httpsPrivKeyLocation;
	    config.httpsFullChainLocation = secrets.httpsFullChainLocation;
	    config.httpsChainLocation = secrets.httpsChainLocation;
	    // override in Production
	    config.DEBUG = false;
	    config.VERBOSE = false;
	    break;
	  default:
	    config.hostDomain = constants.hostDomainLocal;
	    config.httpPort = 3000;
	    config.httpsPrivKeyLocation = secrets.httpsPrivKeyLocation_local;
	    config.httpsFullChainLocation = secrets.httpsFullChainLocation_local;
	    config.httpsChainLocation = secrets.httpsChainLocation_local;
	    break;
	}
	
	module.exports = config;


/***/ },
/* 174 */
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ function(module, exports) {

	var constants = {}
	
	constants.acctTypeBanned = 'banned';
	constants.acctTypeDeleted = 'deleted';
	constants.acctTypeModerator = 'moderator';
	constants.acctTypeRegistered = 'registered';
	constants.acctTypeVisitor = 'visitor';
	
	constants.confirmDiscardUnsavedEdits = 'There are unsaved changes detected in your work.  These will be lost ' +
	  'forever if you continue ' +
	  '(seriously)!  Are you certain you wish to proceed?';
	
	// this maxAge value acconts for 2 weeks until expiry
	constants.cookieExpiry = {maxAge: 1209600000, httpOnly: true};
	constants.cookieNode = 'node_uid';
	constants.cookieSession = 'session_uid';
	
	constants.defaultNodeUid = 'default';
	constants.defaultParentUid = '00000000000000-0000000000-00000000000000';
	constants.defaultUserName = 'Visitor';
	constants.defaultTrailingSnippet = '... and then the user sat down in front of the keyboard, and had to make a choice.';
	constants.defaultLastPath = 'The user visits CYOAG.';
	constants.defaultNodeSnippet = 'You have come to CYOAG, a unique Create Your Own Adventure Game experience!  Here you will enjoy ' +
	  'the results of collaborative efforts by writers from all across the world to write one story of many paths and branches, together! ' +
	  '(The CYOAG experience is still loading.)';
	
	constants.displayNameBanned = '[-banned-]';
	constants.displayNameDeleted = '[-deleted-]';
	constants.displayNameUnknown = '[-unknown-]';
	
	constants.emptyString = '';
	
	constants.envLocal = 'local';
	constants.envProd = 'prod';
	
	constants.errorNodeUid = 'error';
	constants.errorUserName = 'Visitor';
	constants.errorTrailingSnippet = '... and it had been a long night, and the CYOAG development team was really tired.';
	constants.errorLastPath = 'The developer makes a horrible mistake.';
	constants.errorNodeSnippet = 'It looks like the CYOAG developers have done something wrong and led you here.  What did they do wrong, ' +
	  'you might ask ... ?  Well, let me tell you!';
	
	constants.hostDomainLocal = 'http://localhost.cyoag.com:3000/';
	constants.hostDomainProd = 'https://cyoag.com/';
	
	constants.inputBlockingHide = 'hide';
	
	constants.messageRegularClass = 'cyoag-regular-message';
	constants.messageWarningClass = 'cyoag-warning-message';
	constants.messageErrorClass = 'cyoag-error-message';
	
	constants.modalTypeMessage = 'cyoag-modal-type-message';
	constants.modalTypeWarning = 'cyoag-modal-type-warning';
	constants.modalTypeError = 'cyoag-modal-type-error';
	
	constants.nodeStatusDeleted = 'deleted';
	constants.nodeStatusVisible = 'visible';
	
	constants.portLocal = 3000;
	constants.portProd = 80;
	constants.portHttps = 443;
	
	constants.rootNodeUid = 'start';
	
	constants.rootTrailingSnippet = '... by way of prologue.';
	constants.rootLastPath = 'The writer takes up his pen.';
	
	constants.specialMessage_editSuccess = 'Edits submitted successfully!';
	
	constants.trailingSnippetLength = 200;
	
	constants.visitorName = 'Illustrious Visitor';
	
	constants.votificationNone = 'none';
	constants.votificationUp = 'up';
	constants.votificationDown = 'down';
	
	constants.windowScrollTop = {x:0,y:0};
	
	module.exports = constants;


/***/ },
/* 175 */
/*!********************!*\
  !*** ./secrets.js ***!
  \********************/
/***/ function(module, exports) {

	var secrets = {};
	
	secrets.SQL_USER = 'cyoag';
	secrets.SQL_PASS = '^cy0cy0Acer';
	
	secrets.FB_APP_ID = '1186913218035172';
	secrets.FB_APP_SECRET = 'c035050ae6fd804546324a10aa49b304';
	
	secrets.TW_KEY = 'uvhrxDCLSVNlyLGgHGwCBzxqT';
	secrets.TW_SECRET = 'M5WEIkyStvKQ2zkJbXZyxoc1g9FIV7MphTimpJmNJWgW0rzVgy';
	
	secrets.captchaSecretKey = '6Ld4NhAUAAAAACAsPRLbmUQQlZPW7j6VtRKMhALP';
	
	secrets.emailAcct = 'cyoag.steve';
	secrets.emailPass = '^g0cy0Acer';
	
	secrets.httpsPrivKeyLocation = '/etc/letsencrypt/live/cyoag.com/privkey.pem';
	secrets.httpsFullChainLocation = '/etc/letsencrypt/live/cyoag.com/fullchain.pem';
	secrets.httpsChainLocation = '/etc/letsencrypt/live/cyoag.com/chain.pem';
	
	secrets.httpsPrivKeyLocation_local = './digital-ocean/server.key';
	secrets.httpsFullChainLocation_local = './digital-ocean/server.crt';
	secrets.httpsChainLocation_local = './digital-ocean/server.crt';
	
	module.exports = secrets;
	
	// dopk: algorithmic with a vegetable, digital ocean, secure socket handler, and a winning playing card
	// Steverino's FB uid: fb-10154039685433367


/***/ },
/* 176 */
/*!********************************!*\
  !*** ./utils/browserLogger.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	var DEBUG = __webpack_require__(/*! ../build-config */ 173).DEBUG;
	var VERBOSE = __webpack_require__(/*! ../build-config */ 173).VERBOSE;
	
	module.exports = function(sourceName) {
	  return {
	    logSource: sourceName ? sourceName : 'Unknown source',
	
	    out: function(msg) {
	      var output = msg + ' (' + this.logSource + ')';
	      console.log(output);
	    },
	
	    debug: function(msg) {
	      if(DEBUG) {
	        var output = "DEBUG: " + msg + ' (' + this.logSource + ')';
	        console.log(output);
	      }
	    },
	
	    warn: function(warning) {
	      var output = "! ! ! WARNING ! ! ! : " + warning + ' (' + this.logSource + ')';
	      console.log(output);
	    },
	
	    error: function(error) {
	      var output = 'X X X ERROR X X X : ' + error + ' (' + this.logSource + ')';
	      console.log(output);
	    },
	
	    verbose: function(msg) {
	      if(DEBUG && VERBOSE) {
	        var output = "VERBOSE: " + msg + ' (' + this.logSource + ')';
	        console.log(output);
	      }
	    }
	  };
	};


/***/ },
/* 177 */
/*!*********************************************!*\
  !*** ./build-source/js/HeaderComponents.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('HeaderComponents.js');
	
	var exports = {};
	
	// Facebook login button component
	var Header = React.createClass({
	  displayName: 'Header',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-header-container' },
	      React.createElement(
	        'h1',
	        { id: 'cyoag-header-title' },
	        'Welcome to CYOAG!'
	      ),
	      React.createElement(
	        'p',
	        { id: 'cyoag-header-subtitle' },
	        'Choose Your Own Adventure Game'
	      ),
	      React.createElement(
	        'a',
	        { className: 'cyoag-link cyoag-button', href: 'about.html' },
	        'What is CYOAG?'
	      ),
	      ' | ',
	      React.createElement(
	        'a',
	        { className: 'cyoag-link cyoag-button', href: 'usage.html' },
	        'Usage and Copyright'
	      ),
	      ' | ',
	      React.createElement(
	        'a',
	        { className: 'cyoag-link cyoag-button', href: 'steve.html' },
	        'About the Creator'
	      ),
	      ' | ',
	      React.createElement(
	        'a',
	        { className: 'cyoag-link cyoag-button', href: 'https://github.com/stevenkitzes/cyoag' },
	        'Project on GitHub'
	      ),
	      React.createElement('hr', null)
	    );
	  }
	});
	
	exports.Header = Header;
	
	module.exports = exports;

/***/ },
/* 178 */
/*!************************************************!*\
  !*** ./build-source/js/MessagingComponents.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('MessagingComponents.js');
	
	var exports = {};
	
	// a banner to display alerts of various severity to the user
	var Banner = React.createClass({
	  displayName: 'Banner',
	
	  closeBanner: function (e) {
	    e.preventDefault();
	    var bannerObj = document.getElementById('cyoag-message-banner');
	    if (bannerObj) {
	      bannerObj.style.display = 'none';
	    }
	  },
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var error = this.props.error;
	    var warning = this.props.warning;
	    var msg = this.props.msg;
	    var className, messageContent;
	    var bannerObj = document.getElementById('cyoag-message-banner');
	
	    if (error) {
	      if (bannerObj) {
	        bannerObj.style.display = 'block';
	      }
	      className = constants.messageErrorClass;
	      messageContent = error;
	    } else if (warning) {
	      if (bannerObj) {
	        bannerObj.style.display = 'block';
	      }
	      className = constants.messageWarningClass;
	      messageContent = warning;
	    } else if (msg) {
	      if (bannerObj) {
	        bannerObj.style.display = 'block';
	      }
	      className = constants.messageRegularClass;
	      messageContent = msg;
	    } else {
	      return React.createElement('div', { id: 'cyoag-message-banner', style: { display: 'none' } });
	    }
	
	    return React.createElement(
	      'div',
	      { onClick: this.closeBanner, id: 'cyoag-message-banner', title: 'Click to dismiss this message.' },
	      React.createElement(
	        'p',
	        { className: className },
	        React.createElement(
	          'a',
	          { id: 'cyoag-message-banner-x' },
	          'x'
	        ),
	        messageContent
	      )
	    );
	  }
	});
	
	// a modal alert to demand user attention to alerts of various severity to the user
	var Modal = React.createClass({
	  displayName: 'Modal',
	
	  closeModal: function (e) {
	    e.preventDefault();
	    var modalObj = document.getElementById('cyoag-modal-message-container');
	    if (modalObj) {
	      modalObj.style.display = 'none';
	    }
	  },
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var error = this.props.error;
	    var warning = this.props.warning;
	    var msg = this.props.msg;
	    var modalType, messageContent;
	    var modalObj = document.getElementById('cyoag-modal-message-container');
	
	    if (error) {
	      if (modalObj) {
	        modalObj.style.display = 'block';
	      }
	      modalType = constants.modalTypeError;
	      messageContent = error;
	    } else if (warning) {
	      if (modalObj) {
	        modalObj.style.display = 'block';
	      }
	      modalType = constants.modalTypeWarning;
	      messageContent = warning;
	    } else if (msg) {
	      if (modalObj) {
	        modalObj.style.display = 'block';
	      }
	      modalType = constants.modalTypeMessage;
	      messageContent = msg;
	    } else {
	      return React.createElement('div', { id: 'cyoag-message-modal', style: { display: 'none' } });
	    }
	
	    return React.createElement(
	      'div',
	      { onClick: this.closeModal, id: 'cyoag-modal-message-container', title: 'Click to dismiss.' },
	      React.createElement('div', { id: 'cyoag-modal-message-overlay' }),
	      React.createElement(
	        'div',
	        { id: 'cyoag-message-modal', className: modalType },
	        React.createElement(
	          'p',
	          { className: 'cyoag-modal-message' },
	          messageContent
	        ),
	        React.createElement(
	          'a',
	          { className: 'cyoag-side-padded-link' },
	          React.createElement(
	            'div',
	            { className: 'cyoag-modal-message-button' },
	            'Click to Acknowledge'
	          )
	        )
	      )
	    );
	  }
	});
	
	exports.Banner = Banner;
	exports.Modal = Modal;
	
	module.exports = exports;

/***/ },
/* 179 */
/*!*************************************************!*\
  !*** ./build-source/js/MainColumnComponents.js ***!
  \*************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('MainColumnComponents.js');
	
	var NodeComponents = __webpack_require__(/*! ./NodeComponents */ 180);
	var VotificationComponents = __webpack_require__(/*! ./VotificationComponents */ 182);
	var PathComponents = __webpack_require__(/*! ./PathComponents */ 184);
	var InputComponents = __webpack_require__(/*! ./InputComponents */ 185);
	
	var exports = {};
	
	// Facebook login button component
	var MainColumn = React.createClass({
	  displayName: 'MainColumn',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var context = this.props.context;
	
	    var votificationComponent;
	    if (context.state.editMode) {
	      votificationComponent = React.createElement(VotificationComponents.Hidden, null);
	    } else if (context.state.acctType != constants.acctTypeVisitor) {
	      votificationComponent = React.createElement(VotificationComponents.Votification, { context: context });
	    } else {
	      votificationComponent = React.createElement(VotificationComponents.BegLogin, { context: context });
	    }
	
	    var inputComponent;
	    if (context.state.acctType == constants.acctTypeVisitor || context.state.inputBlocking == constants.inputBlockingHide) {
	      inputComponent = React.createElement(InputComponents.Hidden, null);
	    } else if (context.state.editMode) {
	      inputComponent = React.createElement(InputComponents.Edit, { context: context });
	    } else if (context.state.inputBlocking.top || context.state.inputBlocking.side) {
	      inputComponent = React.createElement(InputComponents.Blocked, { blocking: context.state.inputBlocking });
	    } else {
	      inputComponent = React.createElement(InputComponents.Input, { context: context });
	    }
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-main-column' },
	      React.createElement(NodeComponents.Node, { context: context }),
	      votificationComponent,
	      React.createElement(PathComponents.Paths, { context: context }),
	      inputComponent
	    );
	  }
	});
	
	exports.MainColumn = MainColumn;
	
	module.exports = exports;

/***/ },
/* 180 */
/*!*******************************************!*\
  !*** ./build-source/js/NodeComponents.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('NodeComponents.js');
	var uidGen = __webpack_require__(/*! ../../utils/uid-gen */ 181);
	
	var exports = {};
	
	// Facebook login button component
	var Node = React.createClass({
	  displayName: 'Node',
	
	  navigate: function () {
	    logMgr.debug('^ ^ ^ ^ ^ Navigating to parent.');
	    this.props.context.navigate(this.props.context.state.parentUid);
	  },
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var context = this.props.context;
	    var snippet = context.state.snippet;
	
	    var trailingSnippetId = 'node-' + context.state.parentUid;
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-node-container' },
	      React.createElement(
	        'a',
	        { id: trailingSnippetId, className: 'cyoag-trailing-snippet-link cyoag-link', onMouseMove: this.locateTooltip },
	        React.createElement(
	          'div',
	          { className: 'cyoag-path-item cyoag-trailing-snippet', onClick: this.navigate },
	          snippet.trailingSnippet.split("\n").map(function (i) {
	            return React.createElement(
	              'p',
	              { key: uidGen(), className: 'cyoag-snippet-paragraph' },
	              i
	            );
	          })
	        ),
	        React.createElement(
	          'div',
	          { id: 'cyoag-tooltip-regress' },
	          'Back whence you came . . . ?'
	        )
	      ),
	      React.createElement(
	        'p',
	        { id: 'cyoag-last-path' },
	        snippet.lastPath
	      ),
	      React.createElement(
	        'div',
	        { id: 'cyoag-node-snippet' },
	        snippet.nodeSnippet.split("\n").map(function (i) {
	          return React.createElement(
	            'p',
	            { key: uidGen(), className: 'cyoag-snippet-paragraph' },
	            i
	          );
	        })
	      ),
	      React.createElement(ModificationsAndOptionsComponent, { context: context })
	    );
	  },
	  locateTooltip: function (mouseEvent) {
	    var tooltip = document.querySelector('#cyoag-tooltip-regress');
	    tooltip.style.top = mouseEvent.clientY + pageYOffset + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
	    tooltip.style.left = mouseEvent.clientX + pageXOffset + 'px';
	  }
	});
	
	var ModificationsAndOptionsComponent = React.createClass({
	  displayName: 'ModificationsAndOptionsComponent',
	
	  render: function () {
	    var context = this.props.context;
	    var editMode = this.props.context.state.editMode;
	    var userIsOwner = context.state.inputBlocking.top;
	    var userIsModerator = context.state.acctType == constants.acctTypeModerator;
	    var paths = context.state.paths;
	    var pathCount = paths.length;
	
	    var modsAndOptsMsgElement;
	    var genLinkButtonElement = React.createElement(
	      'button',
	      { id: 'cyoag-generate-link-button', className: 'cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue', onClick: this.generateLink },
	      React.createElement(
	        'span',
	        null,
	        'Generate link'
	      ),
	      ' ',
	      React.createElement('img', { className: 'cyoag-question-icon', src: 'images/questionIcon.png' }),
	      React.createElement(
	        'span',
	        { className: 'cyoag-button-tooltip' },
	        'Generate a link to this chapter so that you can share it easily!'
	      )
	    );
	    var fullTrajectoryButtonElement = React.createElement(
	      'button',
	      { id: 'cyoag-full-trajectory-button', className: 'cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue', onClick: this.fullTrajectory },
	      'Full trajectory ',
	      React.createElement('img', { className: 'cyoag-question-icon', src: 'images/questionIcon.png' }),
	      React.createElement(
	        'span',
	        { className: 'cyoag-button-tooltip' },
	        'See the complete story trajectory leading to this chapter!'
	      )
	    );
	    var allByAuthorButtonElement = React.createElement(
	      'button',
	      { id: 'cyoag-all-by-author-button', className: 'cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue', onClick: this.allByAuthor },
	      'All by ',
	      context.state.snippet.authorName,
	      ' ',
	      React.createElement('img', { className: 'cyoag-question-icon', src: 'images/questionIcon.png' }),
	      React.createElement(
	        'span',
	        { className: 'cyoag-button-tooltip' },
	        'See all chapters written by this author!!'
	      )
	    );
	    var editButtonElement = React.createElement(
	      'button',
	      { id: 'cyoag-edit-chapter-button', className: 'cyoag-side-spaced-button cyoag-tooltip-button shaded-border-orange', onClick: context.editChapter },
	      'Edit chapter'
	    );
	    var deleteButtonElement = React.createElement(
	      'button',
	      { id: 'cyoag-delete-chapter-button', className: 'cyoag-side-spaced-button cyoag-tooltip-button shaded-border-red', onClick: context.deleteChapter },
	      'Delete chapter'
	    );
	
	    if (userIsModerator && userIsOwner) {
	      // if the user is moderator and owner, they can do whatever they want with this node
	      modsAndOptsMsgElement = React.createElement(
	        'p',
	        { id: 'cyoag-modification-permitted', className: 'cyoag-note' },
	        'You are a moderator and the owner of this chapter, so you have modification privileges.'
	      );
	    } else if (userIsModerator) {
	      // if the user is a moderator they can modify no matter what
	      modsAndOptsMsgElement = React.createElement(
	        'p',
	        { id: 'cyoag-modification-permitted', className: 'cyoag-note' },
	        'As a moderator, you have modification privileges. (Original content by user ',
	        context.state.snippet.authorName,
	        ')'
	      );
	    } else if (!userIsOwner) {
	      // if the user is not the owner, just display who the owner is
	      modsAndOptsMsgElement = React.createElement(
	        'p',
	        { id: 'cyoag-author-attribution', className: 'cyoag-note' },
	        'Contribution by user ',
	        context.state.snippet.authorName
	      );
	    } else if (pathCount > 0) {
	      // if the user is the owner but someone already appended to this chapter, let the owner know
	      modsAndOptsMsgElement = React.createElement(
	        'p',
	        { id: 'cyoag-deletion-forbidden', className: 'cyoag-note' },
	        'You authored this chapter, but it cannot be modified or deleted because another chapter has already been added to it, or a draft is pending on it.'
	      );
	    } else {
	      // if the user is the author and modification is permitted
	      modsAndOptsMsgElement = React.createElement(
	        'p',
	        { id: 'cyoag-modification-permitted', className: 'cyoag-note' },
	        'You authored this chapter, and have modification privileges.'
	      );
	    }
	
	    var showModButtons = userIsModerator || userIsOwner && pathCount < 1;
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-mods-and-opts-container' },
	      editMode ? React.createElement('div', { className: 'cyoag-hidden' }) : modsAndOptsMsgElement,
	      genLinkButtonElement,
	      fullTrajectoryButtonElement,
	      allByAuthorButtonElement,
	      editMode || !showModButtons ? React.createElement('div', { className: 'cyoag-hidden' }) : editButtonElement,
	      editMode || !showModButtons ? React.createElement('div', { className: 'cyoag-hidden' }) : deleteButtonElement
	    );
	  }
	});
	
	exports.Node = Node;
	
	module.exports = exports;

/***/ },
/* 181 */
/*!**************************!*\
  !*** ./utils/uid-gen.js ***!
  \**************************/
/***/ function(module, exports) {

	// Alphabet from which to select characters for our UIDs
	var alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	
	// Generate a random integer between min (inclusive) and max (exclusive)
	function randInt(min, max) {
	  return Math.floor(Math.random() * (max-min)) + min;
	}
	
	// Get a UID!!
	function getUid() {
	  // List of characters to be populated as we go
	  var chars = [];
	
	  // Even the dash locations are randomized (within constraints)
	  var dash1 = 5 + randInt(5, 11);
	  var dash2 = dash1 + randInt(5, 11);
	  var dash3 = dash2 + randInt(5, 11);
	
	  // Generate 37 characters separated by 3 randomly placed dashes
	  for(var i = 0; i < 40; i++) {
	    // If this is a dash index, insert a dash instead of a random character
	    if(i == dash1 || i == dash2 || i == dash3) {
	      chars.push('-');
	    }
	    // Insert random char by indexing into a random one from the alphabet above
	    else {
	      var cRand = randInt(0,62);
	      chars.push(alphabet.charAt(cRand));
	    }
	  }
	
	  // Join the running character list to create UID as a string
	  var result = chars.join('');
	
	  // Report and return generated UID
	  console.log('Made uid of length ' + result.length + ': ' + result);
	  return result;
	}
	
	// Expose the function that generates the UIDs
	module.exports = getUid;


/***/ },
/* 182 */
/*!***************************************************!*\
  !*** ./build-source/js/VotificationComponents.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('VotificationComponents.js');
	
	var SocialLoginButtonComponents = __webpack_require__(/*! ./SocialLoginButtonComponents */ 183);
	
	var exports = {};
	
	var BegLogin = React.createClass({
	  displayName: 'BegLogin',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	    var context = this.props.context;
	
	    if (context.state.acctType == constants.acctTypeVisitor) {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-votification-container' },
	        React.createElement(
	          'h4',
	          null,
	          'Register an account to save your position, contribute your own story snippets, and gain voting rights!'
	        )
	      );
	    }
	  }
	});
	
	var Votification = React.createClass({
	  displayName: 'Votification',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	    var context = this.props.context;
	    var upImgPath, downImgPath;
	    var upClickResult, downClickResult;
	
	    switch (context.state.votification) {
	      case 'up':
	        upImgPath = 'images/upLit.png';
	        downImgPath = 'images/down.png';
	        upClickResult = constants.votificationNone;
	        downClickResult = constants.votificationDown;
	        break;
	      case 'down':
	        upImgPath = 'images/up.png';
	        downImgPath = 'images/downLit.png';
	        upClickResult = constants.votificationUp;
	        downClickResult = constants.votificationNone;
	        break;
	      default:
	        upImgPath = 'images/up.png';
	        downImgPath = 'images/down.png';
	        upClickResult = constants.votificationUp;
	        downClickResult = constants.votificationDown;
	        break;
	    }
	
	    var voteUp = function () {
	      logMgr.verbose('Client trying to upvote ' + context.state.nodeUid);
	      context.votify(context.state.nodeUid, upClickResult);
	    };
	    var voteDown = function () {
	      logMgr.verbose('Client trying to downvote ' + context.state.nodeUid);
	      context.votify(context.state.nodeUid, downClickResult);
	    };
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-votification-container' },
	      React.createElement(
	        'h4',
	        { id: 'cyoag-votification-prompt' },
	        'How did you like this chapter?'
	      ),
	      React.createElement(
	        'a',
	        null,
	        React.createElement('img', { id: 'cyoag-upvote-button', onClick: voteUp, src: upImgPath })
	      ),
	      React.createElement(
	        'a',
	        null,
	        React.createElement('img', { id: 'cyoag-downvote-button', onClick: voteDown, src: downImgPath })
	      )
	    );
	  }
	});
	
	var Hidden = React.createClass({
	  displayName: 'Hidden',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	    return React.createElement('div', { id: 'cyoag-votification-container', className: 'cyoag-hidden' });
	  }
	});
	
	exports.BegLogin = BegLogin;
	exports.Votification = Votification;
	exports.Hidden = Hidden;
	
	module.exports = exports;

/***/ },
/* 183 */
/*!********************************************************!*\
  !*** ./build-source/js/SocialLoginButtonComponents.js ***!
  \********************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('SocialLoginButtonComponents.js');
	
	var exports = {};
	
	// Facebook login button component
	var FacebookButton = React.createClass({
	  displayName: 'FacebookButton',
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'cyoag-fb-login cyoag-inline-block' },
	      React.createElement(
	        'a',
	        { className: 'cyoag-side-padded-link cyoag-button', onClick: this.validateTos, href: '/fb/login' },
	        'Facebook'
	      )
	    );
	  },
	  validateTos: validateTos
	});
	
	// Twitter login button component
	var TwitterButton = React.createClass({
	  displayName: 'TwitterButton',
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { className: 'cyoag-tw-button cyoag-inline-block' },
	      React.createElement(
	        'a',
	        { className: 'cyoag-side-padded-link cyoag-button', onClick: this.validateTos, href: '/tw/login' },
	        'Twitter'
	      )
	    );
	  },
	  validateTos: validateTos
	});
	
	// Logout button component
	var LogoutButton = React.createClass({
	  displayName: 'LogoutButton',
	
	  render: function () {
	    return React.createElement(
	      'button',
	      { id: 'cyoag-logout-button', className: 'shaded-border-red', onClick: this.props.logoutRequest },
	      'Log Out'
	    );
	  }
	});
	
	function validateTos(e) {
	  if (!document.getElementById('cyoag-tos-checkbox').checked) {
	    if (e.preventDefault) {
	      e.preventDefault();
	    }
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    }
	    this.props.context.message({ warning: 'You must accept the Terms and Conditions to register or login with your account.' });
	    return false;
	  }
	}
	
	exports.FacebookButton = FacebookButton;
	exports.TwitterButton = TwitterButton;
	exports.LogoutButton = LogoutButton;
	
	module.exports = exports;

/***/ },
/* 184 */
/*!*******************************************!*\
  !*** ./build-source/js/PathComponents.js ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('PathComponents.js');
	
	var exports = {};
	
	// Dynamically generated paths if available component
	var Paths = React.createClass({
	  displayName: 'Paths',
	
	  navigate: function (navElementUid) {
	    var destinationUid = navElementUid.substring(5);
	    this.props.context.navigate(destinationUid);
	  },
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var properThis = this;
	    var context = this.props.context;
	    var paths = context.state.paths;
	
	    if (paths.length == 0) {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-path-list' },
	        'No paths yet lead from this chapter.'
	      );
	    } else {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-path-list' },
	        React.createElement(
	          'p',
	          { className: 'italics sans-serif' },
	          'What happens next . . . ?'
	        ),
	        paths.map(function (item) {
	          var pathUid = 'node-' + item.pathUid;
	          return React.createElement(
	            'a',
	            { id: pathUid, key: pathUid, className: 'cyoag-path-item-link cyoag-link', onMouseMove: properThis.locateTooltip.bind(null, pathUid) },
	            React.createElement(
	              'div',
	              { className: 'cyoag-path-item', onClick: properThis.navigate.bind(null, pathUid) },
	              item.pathSnippet
	            ),
	            React.createElement(
	              'div',
	              { className: 'cyoag-tooltip-progress' },
	              'Choose wisely . . .'
	            )
	          );
	        })
	      );
	    }
	  },
	  locateTooltip: function (hoverTargetId, mouseEvent) {
	    var tooltip = document.querySelector('#' + hoverTargetId + ' .cyoag-tooltip-progress');
	    tooltip.style.top = mouseEvent.clientY + pageYOffset + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
	    tooltip.style.left = mouseEvent.clientX + pageXOffset + 'px';
	  }
	});
	
	exports.Paths = Paths;
	
	module.exports = exports;

/***/ },
/* 185 */
/*!********************************************!*\
  !*** ./build-source/js/InputComponents.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('PathComponents.js');
	
	var exports = {};
	
	// Display an empty div when prompted
	var Hidden = React.createClass({
	  displayName: 'Hidden',
	
	  render: function () {
	    return React.createElement('div', { id: 'cyoag-input-container', className: 'cyoag-hidden' });
	  }
	});
	
	// Display an appropriate message when the user is forbidden by rules from input
	var Blocked = React.createClass({
	  displayName: 'Blocked',
	
	  render: function () {
	    if (this.props.blocking.top && this.props.blocking.side) {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-input-container' },
	        React.createElement(
	          'p',
	          { id: 'cyoag-input-blocked-message' },
	          'You may not add paths to your own chapters, or chapters that you have already added paths to!'
	        )
	      );
	    } else if (this.props.blocking.top) {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-input-container' },
	        React.createElement(
	          'p',
	          { id: 'cyoag-input-blocked-message' },
	          'You may not add paths to your own chapters!'
	        )
	      );
	    } else {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-input-container' },
	        React.createElement(
	          'p',
	          { id: 'cyoag-input-blocked-message' },
	          'You may not add multiple paths to the same chapter!'
	        )
	      );
	    }
	  }
	});
	
	// Display input fields and simple directions so users know how to contribute
	var Input = React.createClass({
	  displayName: 'Input',
	
	  checkForEdits: function (e) {
	    logMgr.debug('Checking for edits . . .');
	    if (document.getElementById('cyoag-input-path').value.length == 0 && document.getElementById('cyoag-input-body').value.length == 0) {
	      // if no changes are detected, set editsPending false and onbeforeunload listener null
	      logMgr.debug('Path and body inputs were both length 0, so no edits are detected.');
	      this.props.context.setEditsPending(false);
	      window.onbeforeunload = null;
	    } else {
	      // if changes detected, set editsPending true and onbeforeunload to a listener
	      logMgr.debug('Path or body input had length > 0, so edits were detected.');
	      this.props.context.setEditsPending(true);
	      window.onbeforeunload = warnBeforeUnload;
	    }
	  },
	  componentDidMount: function () {
	    var inputPathElement = document.getElementById('cyoag-input-path');
	    var inputBodyElement = document.getElementById('cyoag-input-body');
	
	    // all browsers excpet short bus IE
	    if (inputPathElement.addEventListener) {
	      // attempt to remove listeners from input elements to prevent duplicate listener firing
	      logMgr.debug('Removing existing event listeners to input fields for all browsers except O.G. IE . . .');
	      inputPathElement.removeEventListener('input', this.checkForEdits);
	      inputBodyElement.removeEventListener('input', this.checkForEdits);
	      // now add the listeners for changes to these input elements
	      inputPathElement.addEventListener('input', this.checkForEdits, false);
	      inputBodyElement.addEventListener('input', this.checkForEdits, false);
	      logMgr.debug('. . . then added them back on.');
	    }
	    // short bus IE
	    else {
	        // attempt to remove listeners from input elements to prevent duplicate listener firing
	        logMgr.debug('Removing existing event listeners to input fields for O.G. IE . . .');
	        inputPathElement.detachEvent('onpropertychange', this.checkForEdits);
	        inputBodyElement.detachEvent('onpropertychange', this.checkForEdits);
	        // now add the listeners for changes to these input elements
	        inputPathElement.attachEvent('onpropertychange', this.checkForEdits);
	        inputBodyElement.attachEvent('onpropertychange', this.checkForEdits);
	        logMgr.debug('. . . then added them back on.');
	      }
	  },
	  getInitialState: function () {
	    return {
	      pathCharCount: 0,
	      bodyCharCount: 0
	    };
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      { id: 'cyoag-input-container' },
	      React.createElement(
	        'p',
	        { id: 'cyoag-input-cta' },
	        React.createElement(
	          'em',
	          null,
	          'Want to add your own content following this chapter?'
	        )
	      ),
	      React.createElement(
	        'div',
	        { id: 'cyoag-input-path-container' },
	        'Enter the path teaser for your new chapter:',
	        React.createElement('br', null),
	        React.createElement('textarea', { id: 'cyoag-input-path', type: 'text', onKeyUp: this.updatePathCharCount, placeholder: 'Path snippet - minimum 4 characters, maximum 100 characters.' }),
	        React.createElement(
	          'div',
	          { id: 'cyoag-path-char-hint' },
	          React.createElement(PathHint, { count: this.state.pathCharCount })
	        )
	      ),
	      React.createElement(
	        'div',
	        { id: 'cyoag-input-body-container' },
	        'Enter the body of your new chapter:',
	        React.createElement('br', null),
	        React.createElement('textarea', { id: 'cyoag-input-body', type: 'text', onKeyUp: this.updateBodyCharCount, placeholder: 'Chapter content - minimum 1000 characters, maximum 5000 characters.' }),
	        React.createElement(
	          'div',
	          { id: 'cyoag-input-body-hints-container' },
	          React.createElement(
	            'div',
	            { id: 'cyoag-body-char-hint' },
	            React.createElement(BodyHint, { count: this.state.bodyCharCount })
	          ),
	          React.createElement(
	            'div',
	            { className: 'cyoag-resize-input-hint cyoag-note' },
	            'Drag to resize! ^'
	          )
	        )
	      ),
	      React.createElement(
	        'button',
	        { id: 'cyoag-save-draft-submit', className: 'shaded-border-blue cyoag-hidden', onClick: this.saveDraft },
	        'Save Draft'
	      ),
	      React.createElement(
	        'button',
	        { id: 'cyoag-input-submit', className: 'shaded-border-green', onClick: this.submit },
	        'Submit'
	      )
	    );
	  },
	  saveDraft: function () {
	    var inputPath = document.getElementById('cyoag-input-path').value || '';
	    var inputBody = document.getElementById('cyoag-input-body').value || '';
	
	    if (inputBody.length > 2500) {
	      this.props.context.message({ warning: "Sorry, drafts of over 2,500 characters are not permitted." });
	      return;
	    }
	
	    this.props.context.saveDraft(inputPath, inputBody);
	    this.props.context.setEditsPending(false);
	    window.onbeforeunload = null;
	  },
	  submit: function () {
	    var inputPath = document.getElementById('cyoag-input-path').value;
	    var inputBody = document.getElementById('cyoag-input-body').value;
	
	    if (validateInput(inputPath, inputBody, this.props.context.message)) {
	      this.props.context.setEditsPending(false);
	      window.onbeforeunload = null;
	      this.props.context.submitInput(inputPath, inputBody);
	    }
	  },
	  updateBodyCharCount: function () {
	    this.setState({
	      bodyCharCount: document.getElementById('cyoag-input-body').value.length
	    });
	  },
	  updatePathCharCount: function () {
	    this.setState({
	      pathCharCount: document.getElementById('cyoag-input-path').value.length
	    });
	  }
	});
	
	// Display input fields with hints so users can edit an existing post
	var Edit = React.createClass({
	  displayName: 'Edit',
	
	  cancel: function () {
	    this.props.context.cancelEdit();
	  },
	  checkForEdits: function (e) {
	    if (this.state.originalLastPath == document.getElementById('cyoag-input-path').value && this.state.originalNodeSnippet == document.getElementById('cyoag-input-body').value) {
	      // if no changes are detected, set editsPending false and onbeforeunload listener null
	      this.props.context.setEditsPending(false);
	      window.onbeforeunload = null;
	    } else {
	      // if changes detected, set editsPending true and onbeforeunload to a listener
	      this.props.context.setEditsPending(true);
	      window.onbeforeunload = warnBeforeUnload;
	    }
	  },
	  componentDidMount: function () {
	    var snippet = this.props.context.state.snippet;
	
	    var inputPathElement = document.getElementById('cyoag-input-path');
	    var inputBodyElement = document.getElementById('cyoag-input-body');
	
	    // set the snippet contents as the initial input field contents
	    inputPathElement.value = snippet.lastPath;
	    inputBodyElement.value = snippet.nodeSnippet;
	
	    // all browsers excpet short bus IE
	    if (inputPathElement.addEventListener) {
	      // attempt to remove listeners from input elements to prevent duplicate listener firing
	      logMgr.debug('Removing existing event listeners to input fields for all browsers except O.G. IE . . .');
	      inputPathElement.removeEventListener('input', this.checkForEdits);
	      inputBodyElement.removeEventListener('input', this.checkForEdits);
	      // now add the listeners for changes to these input elements
	      inputPathElement.addEventListener('input', this.checkForEdits, false);
	      inputBodyElement.addEventListener('input', this.checkForEdits, false);
	      logMgr.debug('. . . then added them back on.');
	    }
	    // short bus IE
	    else {
	        // attempt to remove listeners from input elements to prevent duplicate listener firing
	        logMgr.debug('Removing existing event listeners to input fields for O.G. IE . . .');
	        inputPathElement.detachEvent('onpropertychange', this.checkForEdits);
	        inputBodyElement.detachEvent('onpropertychange', this.checkForEdits);
	        // now add the listeners for changes to these input elements
	        inputPathElement.attachEvent('onpropertychange', this.checkForEdits);
	        inputBodyElement.attachEvent('onpropertychange', this.checkForEdits);
	        logMgr.debug('. . . then added them back on.');
	      }
	  },
	  getInitialState: function () {
	    var snippet = this.props.context.state.snippet;
	    return {
	      pathCharCount: snippet.lastPath.length,
	      bodyCharCount: snippet.nodeSnippet.length,
	      originalLastPath: snippet.lastPath,
	      originalNodeSnippet: snippet.nodeSnippet
	    };
	  },
	  render: function () {
	    return React.createElement(
	      'div',
	      { id: 'cyoag-input-container' },
	      React.createElement(
	        'p',
	        { id: 'cyoag-input-cta' },
	        React.createElement(
	          'em',
	          null,
	          'Editing chapter'
	        )
	      ),
	      React.createElement(
	        'div',
	        { id: 'cyoag-input-path-container' },
	        'Path teaser for this chapter:',
	        React.createElement('br', null),
	        React.createElement('textarea', { id: 'cyoag-input-path', type: 'text', onKeyUp: this.updatePathCharCount, placeholder: 'Path snippet - minimum 4 characters, maximum 100 characters.' }),
	        React.createElement(
	          'div',
	          { id: 'cyoag-path-char-hint' },
	          React.createElement(PathHint, { count: this.state.pathCharCount })
	        )
	      ),
	      React.createElement(
	        'div',
	        { id: 'cyoag-input-body-container' },
	        'Body content for this chapter:',
	        React.createElement('br', null),
	        React.createElement('textarea', { id: 'cyoag-input-body', type: 'text', onKeyUp: this.updateBodyCharCount, placeholder: 'Chapter content - minimum 1000 characters, maximum 5000 characters.' }),
	        React.createElement(
	          'div',
	          { id: 'cyoag-input-body-hints-container' },
	          React.createElement(
	            'div',
	            { id: 'cyoag-body-char-hint' },
	            React.createElement(BodyHint, { count: this.state.bodyCharCount })
	          ),
	          React.createElement(
	            'div',
	            { className: 'cyoag-resize-input-hint cyoag-note' },
	            'Drag to resize! ^'
	          )
	        )
	      ),
	      React.createElement(
	        'button',
	        { id: 'cyoag-input-cancel', className: 'cyoag-side-spaced-button shaded-border-red', onClick: this.cancel },
	        'Cancel'
	      ),
	      React.createElement(
	        'button',
	        { id: 'cyoag-input-submit', className: 'cyoag-side-spaced-button shaded-border-green', onClick: this.submit },
	        'Save changes'
	      )
	    );
	  },
	  submit: function () {
	    var inputPath = document.getElementById('cyoag-input-path').value;
	    var inputBody = document.getElementById('cyoag-input-body').value;
	
	    if (validateInput(inputPath, inputBody, this.props.context.message)) {
	      // once validated, submit edits, set editsPending false (no longer pending, but rather submitted) and onbeforeunload null
	      this.props.context.setEditsPending(false);
	      window.onbeforeunload = null;
	      this.props.context.submitEdits(inputPath, inputBody);
	    }
	  },
	  updateBodyCharCount: function () {
	    this.setState({
	      bodyCharCount: document.getElementById('cyoag-input-body').value.length
	    });
	  },
	  updatePathCharCount: function () {
	    this.setState({
	      pathCharCount: document.getElementById('cyoag-input-path').value.length
	    });
	  }
	});
	
	var PathHint = React.createClass({
	  displayName: 'PathHint',
	
	  render: function () {
	    var count = this.props.count;
	
	    if (count < 4) {
	      return React.createElement(
	        'span',
	        { className: 'cyoag-note-red' },
	        'Too few characters: ',
	        count
	      );
	    }
	
	    if (count > 100) {
	      return React.createElement(
	        'span',
	        { className: 'cyoag-note-red' },
	        'Too many characters: ',
	        count
	      );
	    }
	
	    return React.createElement(
	      'span',
	      { className: 'cyoag-note-green' },
	      'Characters: ',
	      count
	    );
	  }
	});
	
	var BodyHint = React.createClass({
	  displayName: 'BodyHint',
	
	  render: function () {
	    var count = this.props.count;
	
	    if (count < 500) {
	      return React.createElement(
	        'span',
	        { className: 'cyoag-note-red' },
	        'Too few characters: ',
	        count
	      );
	    }
	
	    if (count > 2500) {
	      return React.createElement(
	        'span',
	        { className: 'cyoag-note-red' },
	        'Too many characters: ',
	        count
	      );
	    }
	
	    return React.createElement(
	      'span',
	      { className: 'cyoag-note-green' },
	      'Characters: ',
	      count
	    );
	  }
	});
	
	function validateInput(inputPath, inputBody, message) {
	  var warningMsg = '';
	
	  var whiteSpaceRegex = /\S*[\s]{3,}\S*/g;
	
	  // check new path content for too many consecutive white space chars
	  if (whiteSpaceRegex.test(inputPath)) {
	    var matches = inputPath.match(whiteSpaceRegex);
	    var problems = 'Found the following problems: ';
	    for (var i = 0; i < matches.length; i++) {
	      if (/\S*[\s]{3,}\S*/.test(matches[i])) {
	        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
	      }
	    }
	    message({ error: 'Groups of more than two consecutive spaces, tabs, hard returns, and other ' + 'white space characters are forbidden in path teasers.  Please correct any errors and try again!  ' + problems });
	    return false;
	  }
	
	  // check new body content for too many consecutive white space chars
	  if (whiteSpaceRegex.test(inputBody)) {
	    var matches = inputBody.match(whiteSpaceRegex);
	    var problems = 'Found the following problems: ';
	    for (var i = 0; i < matches.length; i++) {
	      if (/\S*[\s]{3,}\S*/.test(matches[i])) {
	        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
	      }
	    }
	    message({ error: 'Groups of more than two consecutive spaces, tabs, hard returns, and other ' + 'white space characters are forbidden in chapter body content.  Please correct any errors and try again!  ' + problems });
	    return false;
	  }
	
	  var startingWhiteSpaceRegex = /^\s/;
	  var endingWhiteSpaceRegex = /\s$/;
	
	  // check new path or body for starting white space
	  if (startingWhiteSpaceRegex.test(inputPath)) {
	    message({ error: 'Path teasers may not begin with white space.  Please try again!' });
	    return false;
	  } else if (startingWhiteSpaceRegex.test(inputBody)) {
	    message({ error: 'Chapter body content may not begin with white space.  Please try again!' });
	    return false;
	  }
	
	  // check new path or body for ending white space
	  if (endingWhiteSpaceRegex.test(inputPath)) {
	    message({ error: 'Path teasers may not end with white space.  Please try again!' });
	    return false;
	  } else if (endingWhiteSpaceRegex.test(inputBody)) {
	    message({ error: 'Chapter body content may not end with white space.  Please try again!' });
	    return false;
	  }
	
	  var repeatCharRegex = /\S*(.)\1{3,}\S*/g;
	
	  // check new path content for too many consecutive same characters
	  if (repeatCharRegex.test(inputPath)) {
	    var matches = inputPath.match(repeatCharRegex);
	    var problems = 'Found the following problems: ';
	    for (var i = 0; i < matches.length; i++) {
	      if (/(.)\1{3,}/.test(matches[i])) {
	        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
	      }
	    }
	    message({ error: 'Consecutive sets of 4 or more of the same character are forbidden in path teasers.  ' + 'Please correct any errors and try again!  ' + problems });
	    return false;
	  }
	
	  // check new body content for too many consecutive same characters
	  if (repeatCharRegex.test(inputBody)) {
	    var matches = inputBody.match(repeatCharRegex);
	    var problems = 'Found the following problems: ';
	    for (var i = 0; i < matches.length; i++) {
	      if (/(.)\1{3,}/.test(matches[i])) {
	        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
	      }
	    }
	    message({ error: 'Consecutive sets of 4 or more of the same character are forbidden in chapter body content.  ' + 'Please correct any errors and try again!  ' + problems });
	    return false;
	  }
	
	  // check input path length restrictions
	  if (inputPath.length < 4) {
	    warningMsg += 'Your path teaser must be at least 4 characters long. ';
	  } else if (inputPath.length > 100) {
	    warningMsg += 'Your path teaser may not exceed 100 characters. ';
	  }
	
	  // check input body length restrictions
	  if (inputBody.length < 500) {
	    warningMsg += 'Chapter body content must be at least 500 characters long. ';
	  } else if (inputBody.length > 2500) {
	    warningMsg += 'Chapter body content may not exceed 2,500 characters. ';
	  }
	
	  if (warningMsg) {
	    message({ warning: warningMsg });
	    return false;
	  }
	
	  return true;
	}
	
	function warnBeforeUnload(e) {
	  // If we haven't been passed the event get the window.event
	  e = e || window.event;
	
	  var message = constants.confirmDiscardUnsavedEdits;
	
	  // For IE6-8 and Firefox prior to version 4
	  if (e) {
	    e.returnValue = message;
	  }
	
	  // For Chrome, Safari, IE8+ and Opera 12+
	  return message;
	}
	
	exports.Hidden = Hidden;
	exports.Blocked = Blocked;
	exports.Input = Input;
	exports.Edit = Edit;
	
	module.exports = exports;

/***/ },
/* 186 */
/*!***************************************************!*\
  !*** ./build-source/js/MarginColumnComponents.js ***!
  \***************************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('MarginColumnComponents.js');
	
	var SocialLoginButtonComponents = __webpack_require__(/*! ./SocialLoginButtonComponents */ 183);
	
	var exports = {};
	
	var MarginColumn = React.createClass({
	  displayName: 'MarginColumn',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    var context = this.props.context;
	    var loginComponent;
	
	    if (context.state.acctType != constants.acctTypeVisitor) {
	      loginComponent = React.createElement(MarginLogout, { context: context, logoutRequest: context.logoutRequest });
	    } else {
	      loginComponent = React.createElement(MarginLogin, { context: context });
	    }
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-margin-column' },
	      loginComponent
	    );
	  }
	});
	
	// Margin login button set component
	var MarginLogin = React.createClass({
	  displayName: 'MarginLogin',
	
	  render: function () {
	    return React.createElement(
	      'div',
	      { id: 'cyoag-margin-login-container' },
	      React.createElement(
	        'h4',
	        null,
	        'Login with:'
	      ),
	      React.createElement(SocialLoginButtonComponents.FacebookButton, { context: this.props.context }),
	      ' ',
	      React.createElement(SocialLoginButtonComponents.TwitterButton, { context: this.props.context }),
	      React.createElement(
	        'label',
	        { id: 'cyoag-tos-label' },
	        'Agree to ',
	        React.createElement(
	          'a',
	          { className: 'cyoag-link', href: 'tos.html' },
	          'Terms and Conditions'
	        ),
	        ': ',
	        React.createElement('input', { id: 'cyoag-tos-checkbox', type: 'checkbox' })
	      ),
	      React.createElement(
	        'a',
	        { href: 'priv-pol.html' },
	        React.createElement(
	          'div',
	          { id: 'cyoag-social-note-container' },
	          React.createElement('img', { id: 'cyoag-info-badge', src: 'images/info-gray.png' }),
	          React.createElement(
	            'div',
	            { id: 'cyoag-social-note-column' },
	            React.createElement(
	              'p',
	              { id: 'cyoag-social-note', className: 'cyoag-note-green' },
	              'Learn about social media account integration in the CYOAG Privacy Policy!'
	            )
	          )
	        )
	      )
	    );
	  }
	});
	
	// Margin logout button set component
	var MarginLogout = React.createClass({
	  displayName: 'MarginLogout',
	
	  render: function () {
	    var context = this.props.context;
	    var htmlUserName = context.state.userName;
	    htmlUserName = htmlUserName.replace('-', '\u2011'); // replace hyphen with unicode non-breaking dash
	    return React.createElement(
	      'div',
	      { id: 'cyoag-margin-login-container' },
	      React.createElement(
	        'h4',
	        null,
	        'Logged in!'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Welcome, ',
	        htmlUserName,
	        '!'
	      ),
	      React.createElement(NameChangeComponent, { context: context }),
	      React.createElement(SocialLoginButtonComponents.LogoutButton, { logoutRequest: this.props.logoutRequest })
	    );
	  }
	});
	
	// Component to provide UI for and control user name changes
	var NameChangeComponent = React.createClass({
	  displayName: 'NameChangeComponent',
	
	  componentDidUpdate: function () {
	    var input = document.getElementById('cyoag-name-input');
	    if (input) {
	      input.focus();
	    }
	  },
	  getInitialState: function () {
	    return {
	      nameChange: 'beg'
	    };
	  },
	  render: function () {
	    var context = this.props.context;
	
	    if (this.state.nameChange == 'beg') {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-name-change-ui' },
	        React.createElement(
	          'button',
	          { id: 'cyoag-swap-name-change-button', className: 'shaded-border-blue', onClick: this.swap },
	          'Customize Your Pen Name'
	        )
	      );
	    } else if (this.state.nameChange == 'ui') {
	      return React.createElement(
	        'div',
	        { id: 'cyoag-name-change-ui' },
	        React.createElement('input', { id: 'cyoag-name-input', type: 'text', placeholder: 'New name' }),
	        React.createElement('br', null),
	        React.createElement(
	          'button',
	          { id: 'cyoag-swap-name-change-button', className: 'cyoag-side-spaced-button shaded-border-red', onClick: this.swap },
	          'Cancel'
	        ),
	        React.createElement(
	          'button',
	          { id: 'cyoag-submit-name-change-button', className: 'cyoag-side-spaced-button shaded-border-green', onClick: this.submit },
	          'Submit'
	        )
	      );
	    }
	
	    return React.createElement('div', { id: 'cyoag-name-change-ui' });
	  },
	  submit: function () {
	    if (!this.validate()) {
	      return;
	    }
	    var newName = document.getElementById('cyoag-name-input').value;
	    this.props.context.nameChange(newName);
	    this.swap();
	  },
	  swap: function () {
	    if (this.state.nameChange == 'beg') {
	      this.setState({
	        nameChange: 'ui'
	      });
	    } else if (this.state.nameChange == 'ui') {
	      this.setState({
	        nameChange: 'beg'
	      });
	    }
	  },
	  validate: function () {
	    var newName = document.getElementById('cyoag-name-input').value;
	    var context = this.props.context;
	    if (newName.length < 3) {
	      context.message({ warning: "User names cannot be shorter than 3 characters." });
	      return false;
	    } else if (newName.length > 16) {
	      context.message({ warning: "User names cannot be longer than 16 characters." });
	      return false;
	    } else if (newName.match(/-{2,}/)) {
	      context.message({ warning: "User names cannot contain consecutive dashes." });
	      return false;
	    } else if (newName.match(/[^a-zA-Z0-9-]/)) {
	      context.message({ warning: "User names may only contain letters and numbers." });
	      return false;
	    }
	    return true;
	  }
	});
	
	exports.MarginColumn = MarginColumn;
	
	module.exports = exports;

/***/ },
/* 187 */
/*!*********************************************!*\
  !*** ./build-source/js/FooterComponents.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(/*! react */ 1);
	var ReactDOM = __webpack_require__(/*! react-dom */ 34);
	
	var constants = __webpack_require__(/*! ../../constants */ 174);
	var logMgr = __webpack_require__(/*! ../../utils/browserLogger */ 176)('FooterComponents.js');
	
	var exports = {};
	
	// Facebook login button component
	var Footer = React.createClass({
	  displayName: 'Footer',
	
	  render: function () {
	    logMgr.verbose('Rendering...');
	
	    return React.createElement(
	      'div',
	      { id: 'cyoag-footer-container' },
	      React.createElement('hr', null),
	      React.createElement(
	        'p',
	        { className: 'cyoag-note' },
	        'Your use of this site implies your understanding of and consent to abide by the CYOAG ',
	        React.createElement(
	          'a',
	          { className: 'cyoag-link', href: 'tos.html' },
	          'Terms, Conditions, and User Agreement'
	        ),
	        ' and ',
	        React.createElement(
	          'a',
	          { className: 'cyoag-link', href: 'priv-pol.html' },
	          'Privacy Policy'
	        ),
	        '.  All software written to support the CYOAG project is protected under the ',
	        React.createElement(
	          'a',
	          { className: 'cyoag-link', href: 'http://www.gnu.org/licenses/gpl.html' },
	          'GNU GPL v3.0'
	        ),
	        ' license.  For additional information, please see the ',
	        React.createElement(
	          'a',
	          { className: 'cyoag-link', href: 'usage.html' },
	          'CYOAG Usage and Copyright'
	        ),
	        ' page.'
	      )
	    );
	  }
	});
	
	exports.Footer = Footer;
	
	module.exports = exports;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map
=======
function o(e,t){if(!a.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,o=n in document;if(!o){var i=document.createElement("div");i.setAttribute(n,"return;"),o="function"==typeof i[n]}return!o&&r&&"wheel"===e&&(o=document.implementation.hasFeature("Events.wheel","3.0")),o}var r,a=n(6);a.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),e.exports=o},function(e,t){"use strict";function n(e,t){var n=null===e||e===!1,o=null===t||t===!1;if(n||o)return n===o;var r=typeof e,a=typeof t;return"string"===r||"number"===r?"string"===a||"number"===a:"object"===a&&e.type===t.type&&e.key===t.key}e.exports=n},function(e,t,n){"use strict";function o(e,t){return e&&"object"==typeof e&&null!=e.key?l.escape(e.key):t.toString(36)}function r(e,t,n,a){var d=typeof e;if("undefined"!==d&&"boolean"!==d||(e=null),null===e||"string"===d||"number"===d||s.isValidElement(e))return n(a,e,""===t?c+o(e,0):t),1;var h,f,m=0,g=""===t?c:t+p;if(Array.isArray(e))for(var v=0;v<e.length;v++)h=e[v],f=g+o(h,v),m+=r(h,f,n,a);else{var y=u(e);if(y){var b,C=y.call(e);if(y!==e.entries)for(var E=0;!(b=C.next()).done;)h=b.value,f=g+o(h,E++),m+=r(h,f,n,a);else for(;!(b=C.next()).done;){var w=b.value;w&&(h=w[1],f=g+l.escape(w[0])+p+o(h,0),m+=r(h,f,n,a))}}else if("object"===d){var _="",x=String(e);i("31","[object Object]"===x?"object with keys {"+Object.keys(e).join(", ")+"}":x,_)}}return m}function a(e,t,n){return null==e?0:r(e,"",t,n)}var i=n(2),s=(n(18),n(13)),u=n(83),l=(n(1),n(40)),c=(n(3),"."),p=":";e.exports=a},function(e,t,n){"use strict";var o=(n(4),n(12)),r=(n(3),o);e.exports=r},function(e,t){"use strict";function n(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function o(e,t){if(n(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var i=0;i<o.length;i++)if(!r.call(t,o[i])||!n(e[o[i]],t[o[i]]))return!1;return!0}var r=Object.prototype.hasOwnProperty;e.exports=o},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(c===setTimeout)return setTimeout(e,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(e,0);try{return c(e,0)}catch(t){try{return c.call(null,e,0)}catch(t){return c.call(this,e,0)}}}function a(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function i(){m&&h&&(m=!1,h.length?f=h.concat(f):g=-1,f.length&&s())}function s(){if(!m){var e=r(i);m=!0;for(var t=f.length;t;){for(h=f,f=[];++g<t;)h&&h[g].run();g=-1,t=f.length}h=null,m=!1,a(e)}}function u(e,t){this.fun=e,this.array=t}function l(){}var c,p,d=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(e){c=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var h,f=[],m=!1,g=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];f.push(new u(e,t)),1!==f.length||m||r(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){function o(e){if(!document.getElementById("cyoag-tos-checkbox").checked)return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),this.props.context.message({warning:"You must accept the Terms and Conditions to register or login with your account."}),!1}var r=n(8),t=(n(7),n(9)("SocialLoginButtonComponents.js"),{}),a=r.createClass({displayName:"FacebookButton",render:function(){return r.createElement("div",{className:"cyoag-fb-login cyoag-inline-block"},r.createElement("a",{className:"cyoag-side-padded-link cyoag-button",onClick:this.validateTos,href:"/fb/login"},"Facebook"))},validateTos:o}),i=r.createClass({displayName:"TwitterButton",render:function(){return r.createElement("div",{className:"cyoag-tw-button cyoag-inline-block"},r.createElement("a",{className:"cyoag-side-padded-link cyoag-button",onClick:this.validateTos,href:"/tw/login"},"Twitter"))},validateTos:o}),s=r.createClass({displayName:"LogoutButton",render:function(){return r.createElement("button",{id:"cyoag-logout-button",className:"shaded-border-red",onClick:this.props.logoutRequest},"Log Out")}});t.FacebookButton=a,t.TwitterButton=i,t.LogoutButton=s,e.exports=t},function(e,t){"use strict";function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var o={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},r=["Webkit","ms","Moz","O"];Object.keys(o).forEach(function(e){r.forEach(function(t){o[n(t,e)]=o[e]})});var a={background:{backgroundAttachment:!0,backgroundColor:!0,backgroundImage:!0,backgroundPositionX:!0,backgroundPositionY:!0,backgroundRepeat:!0},backgroundPosition:{backgroundPositionX:!0,backgroundPositionY:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0},outline:{outlineWidth:!0,outlineStyle:!0,outlineColor:!0}},i={isUnitlessNumber:o,shorthandPropertyExpansions:a};e.exports=i},function(e,t,n){"use strict";function o(){this._callbacks=null,this._contexts=null}var r=n(2),a=n(4),i=n(17);n(1),a(o.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){e.length!==t.length?r("24"):void 0,this._callbacks=null,this._contexts=null;for(var n=0;n<e.length;n++)e[n].call(t[n]);e.length=0,t.length=0}},checkpoint:function(){return this._callbacks?this._callbacks.length:0},rollback:function(e){this._callbacks&&(this._callbacks.length=e,this._contexts.length=e)},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),i.addPoolingTo(o),e.exports=o},function(e,t,n){"use strict";function o(e){return!!l.hasOwnProperty(e)||!u.hasOwnProperty(e)&&(s.test(e)?(l[e]=!0,!0):(u[e]=!0,!1))}function r(e,t){return null==t||e.hasBooleanValue&&!t||e.hasNumericValue&&isNaN(t)||e.hasPositiveNumericValue&&t<1||e.hasOverloadedBooleanValue&&t===!1}var a=n(21),i=(n(5),n(11),n(163)),s=(n(3),new RegExp("^["+a.ATTRIBUTE_NAME_START_CHAR+"]["+a.ATTRIBUTE_NAME_CHAR+"]*$")),u={},l={},c={createMarkupForID:function(e){return a.ID_ATTRIBUTE_NAME+"="+i(e)},setAttributeForID:function(e,t){e.setAttribute(a.ID_ATTRIBUTE_NAME,t)},createMarkupForRoot:function(){return a.ROOT_ATTRIBUTE_NAME+'=""'},setAttributeForRoot:function(e){e.setAttribute(a.ROOT_ATTRIBUTE_NAME,"")},createMarkupForProperty:function(e,t){var n=a.properties.hasOwnProperty(e)?a.properties[e]:null;if(n){if(r(n,t))return"";var o=n.attributeName;return n.hasBooleanValue||n.hasOverloadedBooleanValue&&t===!0?o+'=""':o+"="+i(t)}return a.isCustomAttribute(e)?null==t?"":e+"="+i(t):null},createMarkupForCustomAttribute:function(e,t){return o(e)&&null!=t?e+"="+i(t):""},setValueForProperty:function(e,t,n){var o=a.properties.hasOwnProperty(t)?a.properties[t]:null;if(o){var i=o.mutationMethod;if(i)i(e,n);else{if(r(o,n))return void this.deleteValueForProperty(e,t);if(o.mustUseProperty)e[o.propertyName]=n;else{var s=o.attributeName,u=o.attributeNamespace;u?e.setAttributeNS(u,s,""+n):o.hasBooleanValue||o.hasOverloadedBooleanValue&&n===!0?e.setAttribute(s,""):e.setAttribute(s,""+n)}}}else if(a.isCustomAttribute(t))return void c.setValueForAttribute(e,t,n)},setValueForAttribute:function(e,t,n){o(t)&&(null==n?e.removeAttribute(t):e.setAttribute(t,""+n))},deleteValueForAttribute:function(e,t){e.removeAttribute(t)},deleteValueForProperty:function(e,t){var n=a.properties.hasOwnProperty(t)?a.properties[t]:null;if(n){var o=n.mutationMethod;if(o)o(e,void 0);else if(n.mustUseProperty){var r=n.propertyName;n.hasBooleanValue?e[r]=!1:e[r]=""}else e.removeAttribute(n.attributeName)}else a.isCustomAttribute(t)&&e.removeAttribute(t)}};e.exports=c},function(e,t,n){"use strict";function o(e){return(""+e).replace(C,"$&/")}function r(e,t){this.func=e,this.context=t,this.count=0}function a(e,t,n){var o=e.func,r=e.context;o.call(r,t,e.count++)}function i(e,t,n){if(null==e)return e;var o=r.getPooled(t,n);v(e,a,o),r.release(o)}function s(e,t,n,o){this.result=e,this.keyPrefix=t,this.func=n,this.context=o,this.count=0}function u(e,t,n){var r=e.result,a=e.keyPrefix,i=e.func,s=e.context,u=i.call(s,t,e.count++);Array.isArray(u)?l(u,r,n,g.thatReturnsArgument):null!=u&&(m.isValidElement(u)&&(u=m.cloneAndReplaceKey(u,a+(!u.key||t&&t.key===u.key?"":o(u.key)+"/")+n)),r.push(u))}function l(e,t,n,r,a){var i="";null!=n&&(i=o(n)+"/");var l=s.getPooled(t,i,r,a);v(e,u,l),s.release(l)}function c(e,t,n){if(null==e)return e;var o=[];return l(e,o,null,t,n),o}function p(e,t,n){return null}function d(e,t){return v(e,p,null)}function h(e){var t=[];return l(e,t,null,g.thatReturnsArgument),t}var f=n(17),m=n(13),g=n(12),v=n(57),y=f.twoArgumentPooler,b=f.fourArgumentPooler,C=/\/+/g;r.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},f.addPoolingTo(r,y),s.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},f.addPoolingTo(s,b);var E={forEach:i,map:c,mapIntoWithKeyPrefixInternal:l,count:d,toArray:h};e.exports=E},function(e,t,n){"use strict";function o(e,t){var n=w.hasOwnProperty(t)?w[t]:null;x.hasOwnProperty(t)&&(n!==C.OVERRIDE_BASE?p("73",t):void 0),e&&(n!==C.DEFINE_MANY&&n!==C.DEFINE_MANY_MERGED?p("74",t):void 0)}function r(e,t){if(t){"function"==typeof t?p("75"):void 0,f.isValidElement(t)?p("76"):void 0;var n=e.prototype,r=n.__reactAutoBindPairs;t.hasOwnProperty(b)&&_.mixins(e,t.mixins);for(var a in t)if(t.hasOwnProperty(a)&&a!==b){var i=t[a],l=n.hasOwnProperty(a);if(o(l,a),_.hasOwnProperty(a))_[a](e,i);else{var c=w.hasOwnProperty(a),d="function"==typeof i,h=d&&!c&&!l&&t.autobind!==!1;if(h)r.push(a,i),n[a]=i;else if(l){var m=w[a];!c||m!==C.DEFINE_MANY_MERGED&&m!==C.DEFINE_MANY?p("77",m,a):void 0,m===C.DEFINE_MANY_MERGED?n[a]=s(n[a],i):m===C.DEFINE_MANY&&(n[a]=u(n[a],i))}else n[a]=i}}}}function a(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in _;r?p("78",n):void 0;var a=n in e;a?p("79",n):void 0,e[n]=o}}}function i(e,t){e&&t&&"object"==typeof e&&"object"==typeof t?void 0:p("80");for(var n in t)t.hasOwnProperty(n)&&(void 0!==e[n]?p("81",n):void 0,e[n]=t[n]);return e}function s(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return i(r,n),i(r,o),r}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);return n}function c(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=l(e,r)}}var p=n(2),d=n(4),h=n(42),f=n(13),m=(n(48),n(47),n(46)),g=n(28),v=(n(1),n(34)),y=n(19),b=(n(3),y({mixins:null})),C=v({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),E=[],w={mixins:C.DEFINE_MANY,statics:C.DEFINE_MANY,propTypes:C.DEFINE_MANY,contextTypes:C.DEFINE_MANY,childContextTypes:C.DEFINE_MANY,getDefaultProps:C.DEFINE_MANY_MERGED,getInitialState:C.DEFINE_MANY_MERGED,getChildContext:C.DEFINE_MANY_MERGED,render:C.DEFINE_ONCE,componentWillMount:C.DEFINE_MANY,componentDidMount:C.DEFINE_MANY,componentWillReceiveProps:C.DEFINE_MANY,shouldComponentUpdate:C.DEFINE_ONCE,componentWillUpdate:C.DEFINE_MANY,componentDidUpdate:C.DEFINE_MANY,componentWillUnmount:C.DEFINE_MANY,updateComponent:C.OVERRIDE_BASE},_={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)r(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=d({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=d({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=s(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=d({},e.propTypes,t)},statics:function(e,t){a(e,t)},autobind:function(){}},x={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e),t&&this.updater.enqueueCallback(this,t,"replaceState")},isMounted:function(){return this.updater.isMounted(this)}},T=function(){};d(T.prototype,h.prototype,x);var N={createClass:function(e){var t=function(e,n,o){this.__reactAutoBindPairs.length&&c(this),this.props=e,this.context=n,this.refs=g,this.updater=o||m,this.state=null;var r=this.getInitialState?this.getInitialState():null;"object"!=typeof r||Array.isArray(r)?p("82",t.displayName||"ReactCompositeComponent"):void 0,this.state=r};t.prototype=new T,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],E.forEach(r.bind(null,t)),r(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),t.prototype.render?void 0:p("83");for(var n in w)t.prototype[n]||(t.prototype[n]=null);return t},injection:{injectMixin:function(e){E.push(e)}}};e.exports=N},function(e,t){"use strict";var n={hasCachedChildNodes:1};e.exports=n},function(e,t,n){"use strict";function o(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=!1;var e=this._currentElement.props,t=u.getValue(e);null!=t&&r(this,Boolean(e.multiple),t)}}function r(e,t,n){var o,r,a=l.getNodeFromInstance(e).options;if(t){for(o={},r=0;r<n.length;r++)o[""+n[r]]=!0;for(r=0;r<a.length;r++){var i=o.hasOwnProperty(a[r].value);a[r].selected!==i&&(a[r].selected=i)}}else{for(o=""+n,r=0;r<a.length;r++)if(a[r].value===o)return void(a[r].selected=!0);a.length&&(a[0].selected=!0)}}function a(e){var t=this._currentElement.props,n=u.executeOnChange(t,e);return this._rootNodeID&&(this._wrapperState.pendingUpdate=!0),c.asap(o,this),n}var i=n(4),s=n(29),u=n(41),l=n(5),c=n(14),p=(n(3),!1),d={getHostProps:function(e,t){return i({},s.getHostProps(e,t),{onChange:e._wrapperState.onChange,value:void 0})},mountWrapper:function(e,t){var n=u.getValue(t);e._wrapperState={pendingUpdate:!1,initialValue:null!=n?n:t.defaultValue,listeners:null,onChange:a.bind(e),wasMultiple:Boolean(t.multiple)},void 0===t.value||void 0===t.defaultValue||p||(p=!0)},getSelectValueContext:function(e){return e._wrapperState.initialValue},postUpdateWrapper:function(e){var t=e._currentElement.props;e._wrapperState.initialValue=void 0;var n=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=Boolean(t.multiple);var o=u.getValue(t);null!=o?(e._wrapperState.pendingUpdate=!1,r(e,Boolean(t.multiple),o)):n!==Boolean(t.multiple)&&(null!=t.defaultValue?r(e,Boolean(t.multiple),t.defaultValue):r(e,Boolean(t.multiple),t.multiple?[]:""))}};e.exports=d},function(e,t){"use strict";var n,o={injectEmptyComponentFactory:function(e){n=e}},r={create:function(e){return n(e)}};r.injection=o,e.exports=r},function(e,t){"use strict";var n={logTopLevelRenders:!1};e.exports=n},function(e,t,n){"use strict";function o(e){return u?void 0:i("111",e.type),new u(e)}function r(e){return new c(e)}function a(e){return e instanceof c}var i=n(2),s=n(4),u=(n(1),null),l={},c=null,p={injectGenericComponentClass:function(e){u=e},injectTextComponentClass:function(e){c=e},injectComponentClasses:function(e){s(l,e)}},d={createInternalComponent:o,createInstanceForText:r,isTextComponent:a,injection:p};e.exports=d},function(e,t,n){"use strict";function o(e){return a(document.documentElement,e)}var r=n(124),a=n(167),i=n(89),s=n(90),u={hasSelectionCapabilities:function(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&"text"===e.type||"textarea"===t||"true"===e.contentEditable)},getSelectionInformation:function(){var e=s();return{focusedElem:e,selectionRange:u.hasSelectionCapabilities(e)?u.getSelection(e):null}},restoreSelection:function(e){var t=s(),n=e.focusedElem,r=e.selectionRange;t!==n&&o(n)&&(u.hasSelectionCapabilities(n)&&u.setSelection(n,r),i(n))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;if(void 0===o&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&e.nodeName&&"input"===e.nodeName.toLowerCase()){var a=e.createTextRange();a.collapse(!0),a.moveStart("character",n),a.moveEnd("character",o-n),a.select()}else r.setOffsets(e,t)}};e.exports=u},function(e,t,n){"use strict";function o(e,t){for(var n=Math.min(e.length,t.length),o=0;o<n;o++)if(e.charAt(o)!==t.charAt(o))return o;return e.length===t.length?-1:n}function r(e){return e?e.nodeType===D?e.documentElement:e.firstChild:null}function a(e){return e.getAttribute&&e.getAttribute(R)||""}function i(e,t,n,o,r){var a;if(E.logTopLevelRenders){var i=e._currentElement.props,s=i.type;a="React mount: "+("string"==typeof s?s:s.displayName||s.name),console.time(a)}var u=x.mountComponent(e,n,null,y(e,t),r,0);a&&console.timeEnd(a),e._renderedComponent._topLevelWrapper=e,B._mountImageIntoNode(u,t,e,o,n)}function s(e,t,n,o){var r=N.ReactReconcileTransaction.getPooled(!n&&b.useCreateElement);r.perform(i,null,e,t,r,n,o),N.ReactReconcileTransaction.release(r)}function u(e,t,n){for(x.unmountComponent(e,n),t.nodeType===D&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)}function l(e){var t=r(e);if(t){var n=v.getInstanceFromNode(t);return!(!n||!n._hostParent)}}function c(e){return!(!e||e.nodeType!==I&&e.nodeType!==D&&e.nodeType!==A)}function p(e){var t=r(e),n=t&&v.getInstanceFromNode(t);return n&&!n._hostParent?n:null}function d(e){var t=p(e);return t?t._hostContainerInfo._topLevelWrapper:null}var h=n(2),f=n(20),m=n(21),g=n(30),v=(n(18),n(5)),y=n(117),b=n(120),C=n(13),E=n(70),w=n(25),_=(n(11),n(133)),x=n(22),T=n(50),N=n(14),S=n(28),P=n(85),k=(n(1),n(33)),M=n(56),R=(n(3),m.ID_ATTRIBUTE_NAME),O=m.ROOT_ATTRIBUTE_NAME,I=1,D=9,A=11,L={},U=1,F=function(){this.rootID=U++};F.prototype.isReactComponent={},F.prototype.render=function(){return this.props};var B={TopLevelWrapper:F,_instancesByReactRootID:L,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,o,r){return B.scrollMonitor(o,function(){T.enqueueElementInternal(e,t,n),r&&T.enqueueCallbackInternal(e,r)}),e},_renderNewRootComponent:function(e,t,n,o){c(t)?void 0:h("37"),g.ensureScrollValueMonitoring();var r=P(e,!1);N.batchedUpdates(s,r,t,n,o);var a=r._instance.rootID;return L[a]=r,r},renderSubtreeIntoContainer:function(e,t,n,o){return null!=e&&w.has(e)?void 0:h("38"),B._renderSubtreeIntoContainer(e,t,n,o)},_renderSubtreeIntoContainer:function(e,t,n,o){T.validateCallback(o,"ReactDOM.render"),C.isValidElement(t)?void 0:h("39","string"==typeof t?" Instead of passing a string like 'div', pass React.createElement('div') or <div />.":"function"==typeof t?" Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />.":null!=t&&void 0!==t.props?" This may be caused by unintentionally loading two independent copies of React.":"");var i,s=C(F,null,null,null,null,null,t);if(e){var u=w.get(e);i=u._processChildContext(u._context)}else i=S;var c=d(n);if(c){var p=c._currentElement,f=p.props;if(M(f,t)){var m=c._renderedComponent.getPublicInstance(),g=o&&function(){o.call(m)};return B._updateRootComponent(c,s,i,n,g),m}B.unmountComponentAtNode(n)}var v=r(n),y=v&&!!a(v),b=l(n),E=y&&!c&&!b,_=B._renderNewRootComponent(s,n,E,i)._renderedComponent.getPublicInstance();return o&&o.call(_),_},render:function(e,t,n){return B._renderSubtreeIntoContainer(null,e,t,n)},unmountComponentAtNode:function(e){c(e)?void 0:h("40");var t=d(e);return t?(delete L[t._instance.rootID],N.batchedUpdates(u,t,e,!1),!0):(l(e),1===e.nodeType&&e.hasAttribute(O),!1)},_mountImageIntoNode:function(e,t,n,a,i){if(c(t)?void 0:h("41"),a){var s=r(t);if(_.canReuseMarkup(e,s))return void v.precacheNode(n,s);var u=s.getAttribute(_.CHECKSUM_ATTR_NAME);s.removeAttribute(_.CHECKSUM_ATTR_NAME);var l=s.outerHTML;s.setAttribute(_.CHECKSUM_ATTR_NAME,u);var p=e,d=o(p,l),m=" (client) "+p.substring(d-20,d+20)+"\n (server) "+l.substring(d-20,d+20);t.nodeType===D?h("42",m):void 0}if(t.nodeType===D?h("43"):void 0,i.useCreateElement){for(;t.lastChild;)t.removeChild(t.lastChild);f.insertTreeBefore(t,e,null)}else k(t,e),v.precacheNode(n,t.firstChild)}};e.exports=B},function(e,t,n){"use strict";var o=n(34),r=o({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});e.exports=r},function(e,t,n){"use strict";var o=n(2),r=n(13),a=(n(1),{HOST:0,COMPOSITE:1,EMPTY:2,getType:function(e){return null===e||e===!1?a.EMPTY:r.isValidElement(e)?"function"==typeof e.type?a.COMPOSITE:a.HOST:void o("26",e)}});e.exports=a},function(e,t,n){"use strict";function o(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function r(e){this.message=e,this.stack=""}function a(e){function t(t,n,o,a,i,s,u){if(a=a||N,s=s||o,null==n[o]){var l=w[i];return t?new r("Required "+l+" `"+s+"` was not specified in "+("`"+a+"`.")):null}return e(n,o,a,i,s)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function i(e){function t(t,n,o,a,i,s){var u=t[n],l=y(u);if(l!==e){var c=w[a],p=b(u);return new r("Invalid "+c+" `"+i+"` of type "+("`"+p+"` supplied to `"+o+"`, expected ")+("`"+e+"`."))}return null}return a(t)}function s(){return a(x.thatReturns(null))}function u(e){function t(t,n,o,a,i){if("function"!=typeof e)return new r("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside arrayOf.");var s=t[n];if(!Array.isArray(s)){var u=w[a],l=y(s);return new r("Invalid "+u+" `"+i+"` of type "+("`"+l+"` supplied to `"+o+"`, expected an array."))}for(var c=0;c<s.length;c++){var p=e(s,c,o,a,i+"["+c+"]",_);if(p instanceof Error)return p}return null}return a(t)}function l(){function e(e,t,n,o,a){var i=e[t];if(!E.isValidElement(i)){var s=w[o],u=y(i);return new r("Invalid "+s+" `"+a+"` of type "+("`"+u+"` supplied to `"+n+"`, expected a single ReactElement."))}return null}return a(e)}function c(e){function t(t,n,o,a,i){if(!(t[n]instanceof e)){var s=w[a],u=e.name||N,l=C(t[n]);return new r("Invalid "+s+" `"+i+"` of type "+("`"+l+"` supplied to `"+o+"`, expected ")+("instance of `"+u+"`."))}return null}return a(t)}function p(e){function t(t,n,a,i,s){for(var u=t[n],l=0;l<e.length;l++)if(o(u,e[l]))return null;var c=w[i],p=JSON.stringify(e);return new r("Invalid "+c+" `"+s+"` of value `"+u+"` "+("supplied to `"+a+"`, expected one of "+p+"."))}return Array.isArray(e)?a(t):x.thatReturnsNull}function d(e){function t(t,n,o,a,i){if("function"!=typeof e)return new r("Property `"+i+"` of component `"+o+"` has invalid PropType notation inside objectOf.");var s=t[n],u=y(s);if("object"!==u){var l=w[a];return new r("Invalid "+l+" `"+i+"` of type "+("`"+u+"` supplied to `"+o+"`, expected an object."))}for(var c in s)if(s.hasOwnProperty(c)){var p=e(s,c,o,a,i+"."+c,_);if(p instanceof Error)return p}return null}return a(t)}function h(e){function t(t,n,o,a,i){for(var s=0;s<e.length;s++){var u=e[s];if(null==u(t,n,o,a,i,_))return null}var l=w[a];return new r("Invalid "+l+" `"+i+"` supplied to "+("`"+o+"`."))}return Array.isArray(e)?a(t):x.thatReturnsNull}function f(){function e(e,t,n,o,a){if(!g(e[t])){var i=w[o];return new r("Invalid "+i+" `"+a+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return a(e)}function m(e){function t(t,n,o,a,i){var s=t[n],u=y(s);if("object"!==u){var l=w[a];return new r("Invalid "+l+" `"+i+"` of type `"+u+"` "+("supplied to `"+o+"`, expected `object`."))}for(var c in e){var p=e[c];if(p){var d=p(s,c,o,a,i+"."+c,_);if(d)return d}}return null}return a(t)}function g(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(g);if(null===e||E.isValidElement(e))return!0;var t=T(e);if(!t)return!1;var n,o=t.call(e);if(t!==e.entries){for(;!(n=o.next()).done;)if(!g(n.value))return!1}else for(;!(n=o.next()).done;){var r=n.value;if(r&&!g(r[1]))return!1}return!0;default:return!1}}function v(e,t){return"symbol"===e||"Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol}function y(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":v(t,e)?"symbol":t}function b(e){var t=y(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function C(e){return e.constructor&&e.constructor.name?e.constructor.name:N}var E=n(13),w=n(47),_=n(49),x=n(12),T=n(83),N=(n(3),"<<anonymous>>"),S={array:i("array"),bool:i("boolean"),func:i("function"),number:i("number"),object:i("object"),string:i("string"),symbol:i("symbol"),any:s(),arrayOf:u,element:l(),instanceOf:c,node:f(),objectOf:d,oneOf:p,oneOfType:h,shape:m};r.prototype=Error.prototype,e.exports=S},function(e,t){"use strict";e.exports="15.3.2"},function(e,t){"use strict";var n={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){n.currentScrollLeft=e.x,n.currentScrollTop=e.y}};e.exports=n},function(e,t,n){"use strict";function o(e,t){return null==t?r("30"):void 0,null==e?t:Array.isArray(e)?Array.isArray(t)?(e.push.apply(e,t),e):(e.push(t),e):Array.isArray(t)?[e].concat(t):[e,t]}var r=n(2);n(1),e.exports=o},function(e,t,n){"use strict";var o=!1;e.exports=o},function(e,t){"use strict";function n(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)}e.exports=n},function(e,t,n){"use strict";function o(e){for(var t;(t=e._renderedNodeType)===r.COMPOSITE;)e=e._renderedComponent;return t===r.HOST?e._renderedComponent:t===r.EMPTY?null:void 0}var r=n(75);e.exports=o},function(e,t){"use strict";function n(e){var t=e&&(o&&e[o]||e[r]);if("function"==typeof t)return t}var o="function"==typeof Symbol&&Symbol.iterator,r="@@iterator";e.exports=n},function(e,t,n){"use strict";function o(){return!a&&r.canUseDOM&&(a="textContent"in document.documentElement?"textContent":"innerText"),a}var r=n(6),a=null;e.exports=o},function(e,t,n){"use strict";function o(e){if(e){var t=e.getName();if(t)return" Check the render method of `"+t+"`."}return""}function r(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function a(e,t){var n;if(null===e||e===!1)n=l.create(a);else if("object"==typeof e){var s=e;!s||"function"!=typeof s.type&&"string"!=typeof s.type?i("130",null==s.type?s.type:typeof s.type,o(s._owner)):void 0,"string"==typeof s.type?n=c.createInternalComponent(s):r(s.type)?(n=new s.type(s),n.getHostNode||(n.getHostNode=n.getNativeNode)):n=new p(s)}else"string"==typeof e||"number"==typeof e?n=c.createInstanceForText(e):i("131",typeof e);return n._mountIndex=0,n._mountImage=null,n}var i=n(2),s=n(4),u=n(113),l=n(69),c=n(71),p=(n(1),n(3),function(e){this.construct(e)});s(p.prototype,u.Mixin,{_instantiateReactComponent:a}),e.exports=a},function(e,t){"use strict";function n(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!o[e.type]:"textarea"===t}var o={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};e.exports=n},function(e,t,n){"use strict";var o=n(6),r=n(32),a=n(33),i=function(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t};o.canUseDOM&&("textContent"in document.documentElement||(i=function(e,t){a(e,r(t))})),e.exports=i},function(e,t,n){"use strict";var o=n(12),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:o}},registerDefault:function(){}};e.exports=r},function(e,t){"use strict";function n(e){try{e.focus()}catch(t){}}e.exports=n},function(e,t){"use strict";function n(){if("undefined"==typeof document)return null;try{return document.activeElement||document.body}catch(e){return document.body}}e.exports=n},function(e,t,n){var o=n(8),r=(n(7),n(10),n(9)("FooterComponents.js")),t={},a=o.createClass({displayName:"Footer",render:function(){return r.verbose("Rendering..."),o.createElement("div",{id:"cyoag-footer-container"},o.createElement("hr",null),o.createElement("p",{className:"cyoag-note"},"Your use of this site implies your understanding of and consent to abide by the CYOAG ",o.createElement("a",{className:"cyoag-link",href:"tos.html"},"Terms, Conditions, and User Agreement")," and ",o.createElement("a",{className:"cyoag-link",href:"priv-pol.html"},"Privacy Policy"),".  All software written to support the CYOAG project is protected under the ",o.createElement("a",{className:"cyoag-link",href:"http://www.gnu.org/licenses/gpl.html"},"GNU GPL v3.0")," license.  For additional information, please see the ",o.createElement("a",{className:"cyoag-link",href:"usage.html"},"CYOAG Usage and Copyright")," page."))}});t.Footer=a,e.exports=t},function(e,t,n){var o=n(8),r=(n(7),n(10),n(9)("HeaderComponents.js")),t={},a=o.createClass({displayName:"Header",render:function(){return r.verbose("Rendering..."),o.createElement("div",{id:"cyoag-header-container"},o.createElement("h1",{id:"cyoag-header-title"},"Welcome to CYOAG!"),o.createElement("p",{id:"cyoag-header-subtitle"},"Choose Your Own Adventure Game"),o.createElement("a",{className:"cyoag-link cyoag-button",href:"about.html"},"What is CYOAG?")," | ",o.createElement("a",{className:"cyoag-link cyoag-button",href:"usage.html"},"Usage and Copyright")," | ",o.createElement("a",{className:"cyoag-link cyoag-button",href:"steve.html"},"About the Creator")," | ",o.createElement("a",{className:"cyoag-link cyoag-button",href:"https://github.com/stevenkitzes/cyoag"},"Project on GitHub"),o.createElement("hr",null))}});t.Header=a,e.exports=t},function(e,t,n){function o(e,t,n){var o="",r=/\S*[\s]{3,}\S*/g;if(r.test(e)){for(var a=e.match(r),i="Found the following problems: ",s=0;s<a.length;s++)/\S*[\s]{3,}\S*/.test(a[s])&&(i+=a[s].replace(/\s/g," _ ")+"; ");return n({error:"Groups of more than two consecutive spaces, tabs, hard returns, and other white space characters are forbidden in path teasers.  Please correct any errors and try again!  "+i}),!1}if(r.test(t)){for(var a=t.match(r),i="Found the following problems: ",s=0;s<a.length;s++)/\S*[\s]{3,}\S*/.test(a[s])&&(i+=a[s].replace(/\s/g," _ ")+"; ");return n({error:"Groups of more than two consecutive spaces, tabs, hard returns, and other white space characters are forbidden in chapter body content.  Please correct any errors and try again!  "+i}),!1}var u=/^\s/,l=/\s$/;if(u.test(e))return n({error:"Path teasers may not begin with white space.  Please try again!"
}),!1;if(u.test(t))return n({error:"Chapter body content may not begin with white space.  Please try again!"}),!1;if(l.test(e))return n({error:"Path teasers may not end with white space.  Please try again!"}),!1;if(l.test(t))return n({error:"Chapter body content may not end with white space.  Please try again!"}),!1;var c=/\S*(.)\1{3,}\S*/g;if(c.test(e)){for(var a=e.match(c),i="Found the following problems: ",s=0;s<a.length;s++)/(.)\1{3,}/.test(a[s])&&(i+=a[s].replace(/\s/g," _ ")+"; ");return n({error:"Consecutive sets of 4 or more of the same character are forbidden in path teasers.  Please correct any errors and try again!  "+i}),!1}if(c.test(t)){for(var a=t.match(c),i="Found the following problems: ",s=0;s<a.length;s++)/(.)\1{3,}/.test(a[s])&&(i+=a[s].replace(/\s/g," _ ")+"; ");return n({error:"Consecutive sets of 4 or more of the same character are forbidden in chapter body content.  Please correct any errors and try again!  "+i}),!1}return e.length<4?o+="Your path teaser must be at least 4 characters long. ":e.length>100&&(o+="Your path teaser may not exceed 100 characters. "),t.length<500?o+="Chapter body content must be at least 500 characters long. ":t.length>2500&&(o+="Chapter body content may not exceed 2,500 characters. "),!o||(n({warning:o}),!1)}function r(e){e=e||window.event;var t=i.confirmDiscardUnsavedEdits;return e&&(e.returnValue=t),t}var a=n(8),i=(n(7),n(10)),s=n(9)("PathComponents.js"),t={},u=a.createClass({displayName:"Hidden",render:function(){return a.createElement("div",{id:"cyoag-input-container",className:"cyoag-hidden"})}}),l=a.createClass({displayName:"Blocked",render:function(){return this.props.blocking.top&&this.props.blocking.side?a.createElement("div",{id:"cyoag-input-container"},a.createElement("p",{id:"cyoag-input-blocked-message"},"You may not add paths to your own chapters, or chapters that you have already added paths to!")):this.props.blocking.top?a.createElement("div",{id:"cyoag-input-container"},a.createElement("p",{id:"cyoag-input-blocked-message"},"You may not add paths to your own chapters!")):a.createElement("div",{id:"cyoag-input-container"},a.createElement("p",{id:"cyoag-input-blocked-message"},"You may not add multiple paths to the same chapter!"))}}),c=a.createClass({displayName:"Input",checkForEdits:function(e){s.debug("Checking for edits . . ."),0==document.getElementById("cyoag-input-path").value.length&&0==document.getElementById("cyoag-input-body").value.length?(s.debug("Path and body inputs were both length 0, so no edits are detected."),this.props.context.setEditsPending(!1),window.onbeforeunload=null):(s.debug("Path or body input had length > 0, so edits were detected."),this.props.context.setEditsPending(!0),window.onbeforeunload=r)},componentDidMount:function(){var e=document.getElementById("cyoag-input-path"),t=document.getElementById("cyoag-input-body");e.addEventListener?(s.debug("Removing existing event listeners to input fields for all browsers except O.G. IE . . ."),e.removeEventListener("input",this.checkForEdits),t.removeEventListener("input",this.checkForEdits),e.addEventListener("input",this.checkForEdits,!1),t.addEventListener("input",this.checkForEdits,!1),s.debug(". . . then added them back on.")):(s.debug("Removing existing event listeners to input fields for O.G. IE . . ."),e.detachEvent("onpropertychange",this.checkForEdits),t.detachEvent("onpropertychange",this.checkForEdits),e.attachEvent("onpropertychange",this.checkForEdits),t.attachEvent("onpropertychange",this.checkForEdits),s.debug(". . . then added them back on."))},getInitialState:function(){return{pathCharCount:0,bodyCharCount:0}},render:function(){return a.createElement("div",{id:"cyoag-input-container"},a.createElement("p",{id:"cyoag-input-cta"},a.createElement("em",null,"Want to add your own content following this chapter?")),a.createElement("div",{id:"cyoag-input-path-container"},"Enter the path teaser for your new chapter:",a.createElement("br",null),a.createElement("textarea",{id:"cyoag-input-path",type:"text",onKeyUp:this.updatePathCharCount,placeholder:"Path snippet - minimum 4 characters, maximum 100 characters."}),a.createElement("div",{id:"cyoag-path-char-hint"},a.createElement(d,{count:this.state.pathCharCount}))),a.createElement("div",{id:"cyoag-input-body-container"},"Enter the body of your new chapter:",a.createElement("br",null),a.createElement("textarea",{id:"cyoag-input-body",type:"text",onKeyUp:this.updateBodyCharCount,placeholder:"Chapter content - minimum 1000 characters, maximum 5000 characters."}),a.createElement("div",{id:"cyoag-input-body-hints-container"},a.createElement("div",{id:"cyoag-body-char-hint"},a.createElement(h,{count:this.state.bodyCharCount})),a.createElement("div",{className:"cyoag-resize-input-hint cyoag-note"},"Drag to resize! ^"))),a.createElement("button",{id:"cyoag-save-draft-submit",className:"shaded-border-blue cyoag-hidden",onClick:this.saveDraft},"Save Draft"),a.createElement("button",{id:"cyoag-input-submit",className:"shaded-border-green",onClick:this.submit},"Submit"))},saveDraft:function(){var e=document.getElementById("cyoag-input-path").value||"",t=document.getElementById("cyoag-input-body").value||"";return t.length>2500?void this.props.context.message({warning:"Sorry, drafts of over 2,500 characters are not permitted."}):(this.props.context.saveDraft(e,t),this.props.context.setEditsPending(!1),void(window.onbeforeunload=null))},submit:function(){var e=document.getElementById("cyoag-input-path").value,t=document.getElementById("cyoag-input-body").value;o(e,t,this.props.context.message)&&(this.props.context.setEditsPending(!1),window.onbeforeunload=null,this.props.context.submitInput(e,t))},updateBodyCharCount:function(){this.setState({bodyCharCount:document.getElementById("cyoag-input-body").value.length})},updatePathCharCount:function(){this.setState({pathCharCount:document.getElementById("cyoag-input-path").value.length})}}),p=a.createClass({displayName:"Edit",cancel:function(){this.props.context.cancelEdit()},checkForEdits:function(e){this.state.originalLastPath==document.getElementById("cyoag-input-path").value&&this.state.originalNodeSnippet==document.getElementById("cyoag-input-body").value?(this.props.context.setEditsPending(!1),window.onbeforeunload=null):(this.props.context.setEditsPending(!0),window.onbeforeunload=r)},componentDidMount:function(){var e=this.props.context.state.snippet,t=document.getElementById("cyoag-input-path"),n=document.getElementById("cyoag-input-body");t.value=e.lastPath,n.value=e.nodeSnippet,t.addEventListener?(s.debug("Removing existing event listeners to input fields for all browsers except O.G. IE . . ."),t.removeEventListener("input",this.checkForEdits),n.removeEventListener("input",this.checkForEdits),t.addEventListener("input",this.checkForEdits,!1),n.addEventListener("input",this.checkForEdits,!1),s.debug(". . . then added them back on.")):(s.debug("Removing existing event listeners to input fields for O.G. IE . . ."),t.detachEvent("onpropertychange",this.checkForEdits),n.detachEvent("onpropertychange",this.checkForEdits),t.attachEvent("onpropertychange",this.checkForEdits),n.attachEvent("onpropertychange",this.checkForEdits),s.debug(". . . then added them back on."))},getInitialState:function(){var e=this.props.context.state.snippet;return{pathCharCount:e.lastPath.length,bodyCharCount:e.nodeSnippet.length,originalLastPath:e.lastPath,originalNodeSnippet:e.nodeSnippet}},render:function(){return a.createElement("div",{id:"cyoag-input-container"},a.createElement("p",{id:"cyoag-input-cta"},a.createElement("em",null,"Editing chapter")),a.createElement("div",{id:"cyoag-input-path-container"},"Path teaser for this chapter:",a.createElement("br",null),a.createElement("textarea",{id:"cyoag-input-path",type:"text",onKeyUp:this.updatePathCharCount,placeholder:"Path snippet - minimum 4 characters, maximum 100 characters."}),a.createElement("div",{id:"cyoag-path-char-hint"},a.createElement(d,{count:this.state.pathCharCount}))),a.createElement("div",{id:"cyoag-input-body-container"},"Body content for this chapter:",a.createElement("br",null),a.createElement("textarea",{id:"cyoag-input-body",type:"text",onKeyUp:this.updateBodyCharCount,placeholder:"Chapter content - minimum 1000 characters, maximum 5000 characters."}),a.createElement("div",{id:"cyoag-input-body-hints-container"},a.createElement("div",{id:"cyoag-body-char-hint"},a.createElement(h,{count:this.state.bodyCharCount})),a.createElement("div",{className:"cyoag-resize-input-hint cyoag-note"},"Drag to resize! ^"))),a.createElement("button",{id:"cyoag-input-cancel",className:"cyoag-side-spaced-button shaded-border-red",onClick:this.cancel},"Cancel"),a.createElement("button",{id:"cyoag-input-submit",className:"cyoag-side-spaced-button shaded-border-green",onClick:this.submit},"Save changes"))},submit:function(){var e=document.getElementById("cyoag-input-path").value,t=document.getElementById("cyoag-input-body").value;o(e,t,this.props.context.message)&&(this.props.context.setEditsPending(!1),window.onbeforeunload=null,this.props.context.submitEdits(e,t))},updateBodyCharCount:function(){this.setState({bodyCharCount:document.getElementById("cyoag-input-body").value.length})},updatePathCharCount:function(){this.setState({pathCharCount:document.getElementById("cyoag-input-path").value.length})}}),d=a.createClass({displayName:"PathHint",render:function(){var e=this.props.count;return e<4?a.createElement("span",{className:"cyoag-note-red"},"Too few characters: ",e):e>100?a.createElement("span",{className:"cyoag-note-red"},"Too many characters: ",e):a.createElement("span",{className:"cyoag-note-green"},"Characters: ",e)}}),h=a.createClass({displayName:"BodyHint",render:function(){var e=this.props.count;return e<500?a.createElement("span",{className:"cyoag-note-red"},"Too few characters: ",e):e>2500?a.createElement("span",{className:"cyoag-note-red"},"Too many characters: ",e):a.createElement("span",{className:"cyoag-note-green"},"Characters: ",e)}});t.Hidden=u,t.Blocked=l,t.Input=c,t.Edit=p,e.exports=t},function(e,t,n){var o=n(8),r=(n(7),n(10)),a=n(9)("MainColumnComponents.js"),i=n(98),s=n(100),u=n(99),l=n(93),t={},c=o.createClass({displayName:"MainColumn",render:function(){a.verbose("Rendering...");var e,t=this.props.context;e=t.state.editMode?o.createElement(s.Hidden,null):t.state.acctType!=r.acctTypeVisitor?o.createElement(s.Votification,{context:t}):o.createElement(s.BegLogin,{context:t});var n;return n=t.state.acctType==r.acctTypeVisitor||t.state.inputBlocking==r.inputBlockingHide?o.createElement(l.Hidden,null):t.state.editMode?o.createElement(l.Edit,{context:t}):t.state.inputBlocking.top||t.state.inputBlocking.side?o.createElement(l.Blocked,{blocking:t.state.inputBlocking}):o.createElement(l.Input,{context:t}),o.createElement("div",{id:"cyoag-main-column"},o.createElement(i.Node,{context:t}),e,o.createElement(u.Paths,{context:t}),n)}});t.MainColumn=c,e.exports=t},function(e,t,n){function o(e,t,n){if(T.verbose("Confirming whether user wants to discard pending edits."),!e)return T.verbose("But no edits were pending!"),window.onbeforeunload=null,!1;var o=n?n:x.confirmDiscardUnsavedEdits;return confirm(o)?(T.verbose("User confirmed they are prepared to discard pending edits."),t.editsPending=!1,window.onbeforeunload=null,t.message({}),!1):(T.verbose("Edits are pending and the user does not want to discard them."),!0)}function r(){if(!o(this.editsPending,this)){this.editsPending=!1,window.onbeforeunload=null;var e=C();T.debug("Checking session status . . .");var t=new XMLHttpRequest,n=this;t.onreadystatechange=function(){if(4!=t.readyState||200!=t.status&&304!=t.status)T.debug("Initial cookie check yielded HTTP response status: "+t.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Cookie check response payload: "+t.responseText);var e=JSON.parse(t.responseText);m(n,e,x.windowScrollTop)}},t.open("POST","/session"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.timeout=5e3,t.ontimeout=function(){t.abort(),n.setState({error:"Server response timed out; unable to detect your login status.",windowScroll:e})},t.send()}}function a(){if(!o(this.editsPending,this)){this.editsPending=!1,window.onbeforeunload=null;var e=C();T.debug("Logging out current user . . .");var t=new XMLHttpRequest,n=this;t.onreadystatechange=function(){if(4!=t.readyState||200!=t.status&&304!=t.status)T.debug("Logout attempt yielded HTTP response status: "+t.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Logout response payload: "+t.responseText);var e=JSON.parse(t.responseText);m(n,e,x.windowScrollTop)}},t.open("GET","/session/logout"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.timeout=5e3,t.ontimeout=function(){t.abort(),n.setState({error:"Server response timed out; unable to detect your login status.",windowScroll:e})},t.send()}}function i(e){if(!o(this.editsPending,this)){this.editsPending=!1,window.onbeforeunload=null;var t=C();if(null==e)return void this.message({error:"Missing node ID in navigation attempt."});T.debug("User attempting to navigate story nodes . . .");var n=new XMLHttpRequest,r=this;n.onreadystatechange=function(){if(4!=n.readyState||200!=n.status&&304!=n.status)T.debug("Navigation attempt yielded HTTP response status: "+n.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Navigation response payload: "+n.responseText);var e=JSON.parse(n.responseText);m(r,e,x.windowScrollTop)}},n.open("POST","/session"),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.timeout=5e3,n.ontimeout=function(){n.abort(),r.setState({error:"Server response timed out; unable to detect your login status.",windowScroll:t})};var a=JSON.stringify({navigate:e});n.send(a)}}function s(){if(confirm("Are you positive you want to delete this chapter?  This can only be undone by a CYOAG administrator (not even by a moderator)!")&&!o(this.editsPending,this)){this.editsPending=!1,window.onbeforeunload=null;var e=C();T.debug("User attempting to delete a story node . . .");var t=new XMLHttpRequest,n=this;t.onreadystatechange=function(){if(4!=t.readyState||200!=t.status&&304!=t.status)T.debug("Deletion attempt yielded HTTP response status: "+t.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Deletion response payload: "+t.responseText);var e=JSON.parse(t.responseText);m(n,e,x.windowScrollTop)}},t.open("POST","/session"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.timeout=5e3,t.ontimeout=function(){t.abort(),n.setState({error:"Server response timed out; unable to detect result of deletion attempt.",windowScroll:e})};var r=JSON.stringify({deleteTarget:n.state.nodeUid});t.send(r)}}function u(){this.message({}),o(this.editsPending,this,"You already have work pending on a new chapter!  Do you want to proceed to discard this work, or cancel your request to edit the existing chapter?")||(this.editsPending=!1,window.onbeforeunload=null,this.setState({editMode:!0,windowScroll:C()}))}function l(){o(this.editsPending,this)||(this.message({}),window.onbeforeunload=null,this.editsPending=!1,this.setState({editMode:!1,windowScroll:C()}))}function c(e,t){if(!o(this.editsPending,this,"Voting can cause pending edits to be lost ... you might want to vote after your edits are submitted! Do you still want to vote now (dangerous), or would you like to cancel your vote until you are done editing (safe)?")){this.editsPending=!1,window.onbeforeunload=null,b();var n=C();if(null==e||null==t)return void T.error("Relevant parameters missing in votification call.");T.debug("User attempting to votify a story node . . .");var r=new XMLHttpRequest,a=this;r.onreadystatechange=function(){if(4!=r.readyState||200!=r.status&&304!=r.status)T.debug("Votification attempt yielded HTTP response status: "+r.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Votification response payload: "+r.responseText);var e=JSON.parse(r.responseText);m(a,e,n)}},r.open("POST","/session"),r.setRequestHeader("Content-Type","application/json;charset=UTF-8"),r.timeout=5e3,r.ontimeout=function(){r.abort(),a.setState({error:"Server response timed out; unable to detect result of votification attempt.",windowScroll:n})};var i=JSON.stringify({votify:e,newVote:t});r.send(i)}}function p(e){if(!o(this.editsPending,this,"Changing your name will trigger a page reload ... you might want to change your name after submitting your edits!  Do you want to proceed with changing your name and discarding your unsaved work?")){this.editsPending=!1,window.onbeforeunload=null,b();var t=C();T.debug("User attempting to update their name . . .");var n=new XMLHttpRequest,r=this;n.onreadystatechange=function(){if(4!=n.readyState||200!=n.status&&304!=n.status)T.debug("Name change attempt yielded HTTP response status: "+n.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Name change response payload: "+n.responseText);var e=JSON.parse(n.responseText);m(r,e,t)}},n.open("POST","/session"),n.setRequestHeader("Content-Type","application/json;charset=UTF-8"),n.timeout=5e3,n.ontimeout=function(){n.abort(),r.setState({error:"Server response timed out; unable to detect result of name change attempt.",windowScroll:t})};var a=JSON.stringify({newName:e});n.send(a)}}function d(e,t){var n=C();T.debug("User attempting to edit existing node . . .");var o=new XMLHttpRequest,r=this;o.onreadystatechange=function(){if(4!=o.readyState||200!=o.status&&304!=o.status)T.debug("Edit submission attempt yielded HTTP response status: "+o.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Edit submission response payload: "+o.responseText);var e=JSON.parse(o.responseText);m(r,e,x.windowScrollTop)}},o.open("POST","/session"),o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.timeout=5e3,o.ontimeout=function(){o.abort(),r.setState({error:"Server response timed out; unable to detect result of edit submission attempt.",windowScroll:n})};var a=JSON.stringify({editTarget:r.state.nodeUid,updatedPath:e,updatedBody:t});o.send(a)}function h(e,t){var n=C();T.debug("User attempting to submit new node . . .");var o=new XMLHttpRequest,r=this;o.onreadystatechange=function(){if(4!=o.readyState||200!=o.status&&304!=o.status)T.debug("Node submission attempt yielded HTTP response status: "+o.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Node submission response payload: "+o.responseText);var e=JSON.parse(o.responseText);m(r,e,x.windowScrollTop)}},o.open("POST","/session"),o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.timeout=5e3,o.ontimeout=function(){o.abort(),r.setState({error:"Server response timed out; unable to detect result of node submission attempt.",windowScroll:n})};var a=JSON.stringify({newNodePath:e,newNodeBody:t});o.send(a)}function f(e,t){var n=C();T.debug("User attempting to save draft . . .");var o=new XMLHttpRequest,r=this;o.onreadystatechange=function(){if(4!=o.readyState||200!=o.status&&304!=o.status)T.debug("Draft salvation attempt yielded HTTP response status: "+o.status);else{T.debug("Status 200 (or 304)!"),T.verbose("Draft salvation response payload: "+o.responseText);var e=JSON.parse(o.responseText);m(r,e,x.windowScrollTop)}},o.open("POST","/session"),o.setRequestHeader("Content-Type","application/json;charset=UTF-8"),o.timeout=5e3,o.ontimeout=function(){o.abort(),r.setState({error:"Server response timed out; unable to verify that your draft was saved.",windowScroll:n})};var a=JSON.stringify({draftPath:e,draftBody:t});o.send(a)}function m(e,t,n){if(!g(e,t,n)){if(T.debug("Attempting to validate response from server . . ."),!t){var o="Got no valid response object from server whatsoever.";return T.out(o),void e.setState(y(o))}if(t.error)return T.out(t.error),void e.setState(y(t.error));if(!t.hasOwnProperty("nodeUid")){var o="Could not get story node data from server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("parentUid")){var o="Could not retrieve node lineage data from server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("acctType")){var o="Could not get user account type from server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("userName")){var o="Could not get user data from server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("votification")||t.votification!=x.votificationNone&&t.votification!=x.votificationUp&&t.votification!=x.votificationDown){var o="Could not retrieve votification status from the server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("paths")){var o="Could not retrieve pathing information from server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("snippet")){var o="Could not retrieve snippet data from server.";return T.out(o),void e.setState(y(o))}if(!(t.snippet.hasOwnProperty("trailingSnippet")&&t.snippet.hasOwnProperty("lastPath")&&t.snippet.hasOwnProperty("nodeSnippet")&&t.snippet.hasOwnProperty("authorName"))){var o="Some snippet details were missing in response from server.";return T.out(o),void e.setState(y(o))}if(!t.hasOwnProperty("inputBlocking")){var o="Could not retrieve input permissions from server.";return T.out(o),void e.setState(y(o))}if(!t.inputBlocking.hasOwnProperty("top")||!t.inputBlocking.hasOwnProperty("side")){var o="Path authorship details were missing in response from server.";return T.out(o),void e.setState(y(o))}T.verbose("Trying to set state after validation: "+JSON.stringify(t)),e.setState({nodeUid:t.nodeUid,parentUid:t.parentUid,userName:t.userName,acctType:t.acctType,votification:t.votification,snippet:t.snippet,paths:t.paths,inputBlocking:t.inputBlocking,editMode:!1,msg:t.msg?t.msg:null,warning:t.warning?t.warning:null,error:t.error?t.error:null,windowScroll:n||x.windowScrollTop}),T.verbose("State was set successfully after validation!"),T.verbose("New state: "+JSON.stringify(e.state))}}function g(e,t,n){return!!t.messageOnly&&(T.verbose("Got message-only response."),e.setState({msg:null,warning:null,error:null}),e.setState({msg:t.msg?t.msg:null,warning:t.warning?t.warning:null,error:t.error?t.error:null,windowScroll:n||x.windowScrollTop}),!0)}function v(){return{nodeUid:x.defaultNodeUid,parentUid:x.defaultParentUid,userName:x.defaultUserName,acctType:x.acctTypeVisitor,votification:x.votificationNone,snippet:{trailingSnippet:x.defaultTrailingSnippet,lastPath:x.defaultLastPath,nodeSnippet:x.defaultNodeSnippet,authorName:x.displayNameUnknown},paths:[],inputBlocking:x.inputBlockingHide,editMode:!1,msg:null,warning:null,error:null,windowScroll:x.windowScrollTop}}function y(e){return{nodeUid:x.errorNodeUid,parentUid:x.errorNodeUid,userName:x.errorUserName,acctType:x.acctTypeVisitor,votification:x.votificationNone,snippet:{trailingSnippet:x.errorTrailingSnippet,lastPath:x.errorLastPath,nodeSnippet:x.errorNodeSnippet+"  "+e,authorName:x.displayNameUnknown},paths:[],inputBlocking:x.inputBlockingHide,editMode:!1,msg:null,warning:null,error:e,windowScroll:x.windowScrollTop}}function b(){var e=document.getElementById("cyoag-input-path"),t=document.getElementById("cyoag-input-body");e&&(e.value=""),t&&(t.value="")}function C(){var e=document.documentElement;T.verbose("window.pageXOffset: "+window.pageXOffset),T.verbose("window.pageYOffset: "+window.pageYOffset),T.verbose("doc.scrollLeft: "+e.scrollLeft),T.verbose("doc.scrollTop: "+e.scrollTop),T.verbose("doc.clientLeft: "+e.clientLeft),T.verbose("doc.clientTop: "+e.clientTop);var t={x:(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0),y:(window.pageYOffset||e.scrollTop)-(e.clientTop||0)};return T.verbose("Got window scroll position: "+JSON.stringify(t)),t}function E(e){var t=e.x,n=e.y;T.verbose("Attempting to restore scroll position: "+t+", "+n),window.scrollTo(t,n)}var w=n(8),_=(n(7),n(35)),x=n(10),T=n(9)("MainComponent.js"),N=n(92),S=n(97),P=n(94),k=n(96),M=n(91),R=w.createClass({displayName:"MainComponent",cancelEdit:l,componentDidMount:r,componentDidUpdate:function(){if(this.state.editMode){var e=document.getElementById("cyoag-input-container").getBoundingClientRect(),t=document.body,n=document.documentElement,o=window.pageYOffset||n.scrollTop||t.scrollTop,r=window.pageXOffset||n.scrollLeft||t.scrollLeft,a=n.clientTop||t.clientTop||0,i=n.clientLeft||t.clientLeft||0,s=e.top+o-a,u=e.left+r-i;window.scrollTo(u,s)}else E(this.state.windowScroll)},componentWillMount:function(){this.editsPending=!1,window.onbeforeunload=null},deleteChapter:s,editChapter:u,getInitialState:v,logoutRequest:a,message:function(e){T.debug("incoming message object: "+JSON.stringify(e)),this.setState({msg:e.msg?e.msg:null,warning:e.warning?e.warning:null,error:e.error?e.error:null,windowScroll:C()})},nameChange:p,navigate:i,render:function(){T.verbose("Rendering...");var e={};e.state=this.state,e.deleteChapter=this.deleteChapter,e.cancelEdit=this.cancelEdit,e.editChapter=this.editChapter,e.logoutRequest=this.logoutRequest,e.message=this.message,e.nameChange=this.nameChange,e.navigate=this.navigate,e.setEditsPending=this.setEditsPending,e.saveDraft=this.saveDraft,e.submitEdits=this.submitEdits,e.submitInput=this.submitInput,e.votify=this.votify;var t=function(){return _.DEBUG?w.createElement("div",{id:"cyoag-debug-state-display"},w.createElement("br",null),w.createElement("hr",null),w.createElement("h4",null,"Debug mode enabled! Current app state:"),w.createElement("hr",null),JSON.stringify(e.state)):w.createElement("div",{id:"cyoag-debug-state-display"})}();return w.createElement("div",{id:"cyoag-react-container"},w.createElement(N.Header,null),w.createElement(S.Banner,{error:this.state.error,warning:this.state.warning,msg:this.state.msg}),w.createElement("div",{id:"cyoag-columns"},w.createElement(k.MarginColumn,{context:e}),w.createElement(P.MainColumn,{context:e})),w.createElement(M.Footer,null),t,w.createElement(S.Modal,{error:this.state.error,warning:this.state.warning,msg:this.state.msg}))},setEditsPending:function(e){this.editsPending=e},saveDraft:f,submitInput:h,submitEdits:d,votify:c});e.exports=R},function(e,t,n){var o=n(8),r=(n(7),n(10)),a=n(9)("MarginColumnComponents.js"),i=n(61),t={},s=o.createClass({displayName:"MarginColumn",render:function(){a.verbose("Rendering...");var e,t=this.props.context;return e=t.state.acctType!=r.acctTypeVisitor?o.createElement(l,{context:t,logoutRequest:t.logoutRequest}):o.createElement(u,{context:t}),o.createElement("div",{id:"cyoag-margin-column"},e)}}),u=o.createClass({displayName:"MarginLogin",render:function(){return o.createElement("div",{id:"cyoag-margin-login-container"},o.createElement("h4",null,"Login with:"),o.createElement(i.FacebookButton,{context:this.props.context})," ",o.createElement(i.TwitterButton,{context:this.props.context}),o.createElement("label",{id:"cyoag-tos-label"},"Agree to ",o.createElement("a",{className:"cyoag-link",href:"tos.html"},"Terms and Conditions"),": ",o.createElement("input",{id:"cyoag-tos-checkbox",type:"checkbox"})),o.createElement("a",{href:"priv-pol.html"},o.createElement("div",{id:"cyoag-social-note-container"},o.createElement("img",{id:"cyoag-info-badge",src:"images/info-gray.png"}),o.createElement("div",{id:"cyoag-social-note-column"},o.createElement("p",{id:"cyoag-social-note",className:"cyoag-note-green"},"Learn about social media account integration in the CYOAG Privacy Policy!")))))}}),l=o.createClass({displayName:"MarginLogout",render:function(){var e=this.props.context,t=e.state.userName;return t=t.replace("-","‑"),o.createElement("div",{id:"cyoag-margin-login-container"},o.createElement("h4",null,"Logged in!"),o.createElement("p",null,"Welcome, ",t,"!"),o.createElement(c,{context:e}),o.createElement(i.LogoutButton,{logoutRequest:this.props.logoutRequest}))}}),c=o.createClass({displayName:"NameChangeComponent",componentDidUpdate:function(){var e=document.getElementById("cyoag-name-input");e&&e.focus()},getInitialState:function(){return{nameChange:"beg"}},render:function(){return this.props.context,"beg"==this.state.nameChange?o.createElement("div",{id:"cyoag-name-change-ui"},o.createElement("button",{id:"cyoag-swap-name-change-button",className:"shaded-border-blue",onClick:this.swap},"Customize Your Pen Name")):"ui"==this.state.nameChange?o.createElement("div",{id:"cyoag-name-change-ui"},o.createElement("input",{id:"cyoag-name-input",type:"text",placeholder:"New name"}),o.createElement("br",null),o.createElement("button",{id:"cyoag-swap-name-change-button",className:"cyoag-side-spaced-button shaded-border-red",onClick:this.swap},"Cancel"),o.createElement("button",{id:"cyoag-submit-name-change-button",className:"cyoag-side-spaced-button shaded-border-green",onClick:this.submit},"Submit")):o.createElement("div",{id:"cyoag-name-change-ui"})},submit:function(){if(this.validate()){var e=document.getElementById("cyoag-name-input").value;this.props.context.nameChange(e),this.swap()}},swap:function(){"beg"==this.state.nameChange?this.setState({nameChange:"ui"}):"ui"==this.state.nameChange&&this.setState({nameChange:"beg"})},validate:function(){var e=document.getElementById("cyoag-name-input").value,t=this.props.context;return e.length<3?(t.message({warning:"User names cannot be shorter than 3 characters."}),!1):e.length>16?(t.message({warning:"User names cannot be longer than 16 characters."}),!1):e.match(/-{2,}/)?(t.message({warning:"User names cannot contain consecutive dashes."}),!1):!e.match(/[^a-zA-Z0-9-]/)||(t.message({warning:"User names may only contain letters and numbers."}),!1)}});t.MarginColumn=s,e.exports=t},function(e,t,n){var o=n(8),r=(n(7),n(10)),a=n(9)("MessagingComponents.js"),t={},i=o.createClass({displayName:"Banner",closeBanner:function(e){e.preventDefault();var t=document.getElementById("cyoag-message-banner");t&&(t.style.display="none")},render:function(){a.verbose("Rendering...");var e,t,n=this.props.error,i=this.props.warning,s=this.props.msg,u=document.getElementById("cyoag-message-banner");if(n)u&&(u.style.display="block"),e=r.messageErrorClass,t=n;else if(i)u&&(u.style.display="block"),e=r.messageWarningClass,t=i;else{if(!s)return o.createElement("div",{id:"cyoag-message-banner",style:{display:"none"}});u&&(u.style.display="block"),e=r.messageRegularClass,t=s}return o.createElement("div",{onClick:this.closeBanner,id:"cyoag-message-banner",title:"Click to dismiss this message."},o.createElement("p",{className:e},o.createElement("a",{id:"cyoag-message-banner-x"},"x"),t))}}),s=o.createClass({displayName:"Modal",closeModal:function(e){e.preventDefault();var t=document.getElementById("cyoag-modal-message-container");t&&(t.style.display="none")},render:function(){a.verbose("Rendering...");var e,t,n=this.props.error,i=this.props.warning,s=this.props.msg,u=document.getElementById("cyoag-modal-message-container");if(n)u&&(u.style.display="block"),e=r.modalTypeError,t=n;else if(i)u&&(u.style.display="block"),e=r.modalTypeWarning,t=i;else{if(!s)return o.createElement("div",{id:"cyoag-message-modal",style:{display:"none"}});u&&(u.style.display="block"),e=r.modalTypeMessage,t=s}return o.createElement("div",{onClick:this.closeModal,id:"cyoag-modal-message-container",title:"Click to dismiss."},o.createElement("div",{id:"cyoag-modal-message-overlay"}),o.createElement("div",{id:"cyoag-message-modal",className:e},o.createElement("p",{className:"cyoag-modal-message"},t),o.createElement("a",{className:"cyoag-side-padded-link"},o.createElement("div",{className:"cyoag-modal-message-button"},"Click to Acknowledge"))))}});t.Banner=i,t.Modal=s,e.exports=t},function(e,t,n){var o=n(8),r=(n(7),n(10)),a=n(9)("NodeComponents.js"),i=n(178),t={},s=o.createClass({displayName:"Node",navigate:function(){a.debug("^ ^ ^ ^ ^ Navigating to parent."),this.props.context.navigate(this.props.context.state.parentUid)},render:function(){a.verbose("Rendering...");var e=this.props.context,t=e.state.snippet,n="node-"+e.state.parentUid,r=e.state.editMode?o.createElement("div",{id:"cyoag-modification-container"}):o.createElement("div",{id:"cyoag-modification-container"},o.createElement(u,{context:e}));return o.createElement("div",{id:"cyoag-node-container"},o.createElement("a",{
id:n,className:"cyoag-trailing-snippet-link cyoag-link",onMouseMove:this.locateTooltip},o.createElement("div",{className:"cyoag-path-item cyoag-trailing-snippet",onClick:this.navigate},t.trailingSnippet.split("\n").map(function(e){return o.createElement("p",{key:i(),className:"cyoag-snippet-paragraph"},e)})),o.createElement("div",{id:"cyoag-tooltip-regress"},"Back whence you came . . . ?")),o.createElement("p",{id:"cyoag-last-path"},t.lastPath),o.createElement("div",{id:"cyoag-node-snippet"},t.nodeSnippet.split("\n").map(function(e){return o.createElement("p",{key:i(),className:"cyoag-snippet-paragraph"},e)})),r)},locateTooltip:function(e){var t=document.querySelector("#cyoag-tooltip-regress");t.style.top=e.clientY+pageYOffset+"px",t.style.left=e.clientX+pageXOffset+"px"}}),u=o.createClass({displayName:"ModificationsComponent",render:function(){var e=this.props.context,t=e.state.inputBlocking.top,n=e.state.acctType==r.acctTypeModerator,a=e.state.paths,i=a.length;return n&&t?o.createElement("div",{id:"cyoag-moderator-and-owner-ui"},o.createElement("p",{id:"cyoag-modification-permitted",className:"cyoag-note"},"You are a moderator and the owner of this chapter, so you have modification privileges."),o.createElement("button",{id:"cyoag-edit-chapter-button",className:"cyoag-side-spaced-button shaded-border-orange",onClick:e.editChapter},"Edit this chapter"),o.createElement("button",{id:"cyoag-delete-chapter-button",className:"cyoag-side-spaced-button shaded-border-red",onClick:e.deleteChapter},"Delete this chapter")):n?o.createElement("div",{id:"cyoag-moderator-ui"},o.createElement("p",{id:"cyoag-modification-permitted",className:"cyoag-note"},"As a moderator, you have modification privileges. (Original content by user ",e.state.snippet.authorName,")"),o.createElement("button",{id:"cyoag-edit-chapter-button",className:"cyoag-side-spaced-button shaded-border-orange",onClick:e.editChapter},"Edit this chapter"),o.createElement("button",{id:"cyoag-delete-chapter-button",className:"cyoag-side-spaced-button shaded-border-red",onClick:e.deleteChapter},"Delete this chapter")):t?i>0?o.createElement("div",{id:"cyoag-owner-ui"},o.createElement("p",{id:"cyoag-deletion-forbidden",className:"cyoag-note"},"You authored this chapter, but it cannot be modified because another chapter has already been added to it, or a draft is pending on it.")):o.createElement("div",{id:"cyoag-owner-ui"},o.createElement("p",{id:"cyoag-modification-permitted",className:"cyoag-note"},"You authored this chapter, and have modification privileges."),o.createElement("button",{id:"cyoag-edit-chapter-button",className:"cyoag-side-spaced-button shaded-border-orange",onClick:e.editChapter},"Edit this chapter"),o.createElement("button",{id:"cyoag-delete-chapter-button",className:"cyoag-side-spaced-button shaded-border-red",onClick:e.deleteChapter},"Delete this chapter")):o.createElement("div",{id:"cyoag-owner-ui"},o.createElement("p",{id:"cyoag-author-attribution",className:"cyoag-note"},"Contribution by user ",e.state.snippet.authorName))}});t.Node=s,e.exports=t},function(e,t,n){var o=n(8),r=(n(7),n(10),n(9)("PathComponents.js")),t={},a=o.createClass({displayName:"Paths",navigate:function(e){var t=e.substring(5);this.props.context.navigate(t)},render:function(){r.verbose("Rendering...");var e=this,t=this.props.context,n=t.state.paths;return 0==n.length?o.createElement("div",{id:"cyoag-path-list"},"No paths yet lead from this chapter."):o.createElement("div",{id:"cyoag-path-list"},o.createElement("p",{className:"italics sans-serif"},"What happens next . . . ?"),n.map(function(t){var n="node-"+t.pathUid;return o.createElement("a",{id:n,key:n,className:"cyoag-path-item-link cyoag-link",onMouseMove:e.locateTooltip.bind(null,n)},o.createElement("div",{className:"cyoag-path-item",onClick:e.navigate.bind(null,n)},t.pathSnippet),o.createElement("div",{className:"cyoag-tooltip-progress"},"Choose wisely . . ."))}))},locateTooltip:function(e,t){var n=document.querySelector("#"+e+" .cyoag-tooltip-progress");n.style.top=t.clientY+pageYOffset+"px",n.style.left=t.clientX+pageXOffset+"px"}});t.Paths=a,e.exports=t},function(e,t,n){var o=n(8),r=(n(7),n(10)),a=n(9)("VotificationComponents.js"),t=(n(61),{}),i=o.createClass({displayName:"BegLogin",render:function(){a.verbose("Rendering...");var e=this.props.context;if(e.state.acctType==r.acctTypeVisitor)return o.createElement("div",{id:"cyoag-votification-container"},o.createElement("h4",null,"Register an account to save your position, contribute your own story snippets, and gain voting rights!"))}}),s=o.createClass({displayName:"Votification",render:function(){a.verbose("Rendering...");var e,t,n,i,s=this.props.context;switch(s.state.votification){case"up":e="images/upLit.png",t="images/down.png",n=r.votificationNone,i=r.votificationDown;break;case"down":e="images/up.png",t="images/downLit.png",n=r.votificationUp,i=r.votificationNone;break;default:e="images/up.png",t="images/down.png",n=r.votificationUp,i=r.votificationDown}var u=function(){a.verbose("Client trying to upvote "+s.state.nodeUid),s.votify(s.state.nodeUid,n)},l=function(){a.verbose("Client trying to downvote "+s.state.nodeUid),s.votify(s.state.nodeUid,i)};return o.createElement("div",{id:"cyoag-votification-container"},o.createElement("h4",{id:"cyoag-votification-prompt"},"How did you like this chapter?"),o.createElement("a",null,o.createElement("img",{id:"cyoag-upvote-button",onClick:u,src:e})),o.createElement("a",null,o.createElement("img",{id:"cyoag-downvote-button",onClick:l,src:t})))}}),u=o.createClass({displayName:"Hidden",render:function(){return a.verbose("Rendering..."),o.createElement("div",{id:"cyoag-votification-container",className:"cyoag-hidden"})}});t.BegLogin=i,t.Votification=s,t.Hidden=u,e.exports=t},function(e,t,n){"use strict";var o=n(5),r=n(89),a={focusDOMComponent:function(){r(o.getNodeFromInstance(this))}};e.exports=a},function(e,t,n){"use strict";function o(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function r(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function a(e){switch(e){case P.topCompositionStart:return k.compositionStart;case P.topCompositionEnd:return k.compositionEnd;case P.topCompositionUpdate:return k.compositionUpdate}}function i(e,t){return e===P.topKeyDown&&t.keyCode===E}function s(e,t){switch(e){case P.topKeyUp:return C.indexOf(t.keyCode)!==-1;case P.topKeyDown:return t.keyCode!==E;case P.topKeyPress:case P.topMouseDown:case P.topBlur:return!0;default:return!1}}function u(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function l(e,t,n,o){var r,l;if(w?r=a(e):R?s(e,n)&&(r=k.compositionEnd):i(e,n)&&(r=k.compositionStart),!r)return null;T&&(R||r!==k.compositionStart?r===k.compositionEnd&&R&&(l=R.getData()):R=g.getPooled(o));var c=v.getPooled(r,t,n,o);if(l)c.data=l;else{var p=u(n);null!==p&&(c.data=p)}return f.accumulateTwoPhaseDispatches(c),c}function c(e,t){switch(e){case P.topCompositionEnd:return u(t);case P.topKeyPress:var n=t.which;return n!==N?null:(M=!0,S);case P.topTextInput:var o=t.data;return o===S&&M?null:o;default:return null}}function p(e,t){if(R){if(e===P.topCompositionEnd||!w&&s(e,t)){var n=R.getData();return g.release(R),R=null,n}return null}switch(e){case P.topPaste:return null;case P.topKeyPress:return t.which&&!r(t)?String.fromCharCode(t.which):null;case P.topCompositionEnd:return T?null:t.data;default:return null}}function d(e,t,n,o){var r;if(r=x?c(e,n):p(e,n),!r)return null;var a=y.getPooled(k.beforeInput,t,n,o);return a.data=r,f.accumulateTwoPhaseDispatches(a),a}var h=n(15),f=n(24),m=n(6),g=n(108),v=n(146),y=n(149),b=n(19),C=[9,13,27,32],E=229,w=m.canUseDOM&&"CompositionEvent"in window,_=null;m.canUseDOM&&"documentMode"in document&&(_=document.documentMode);var x=m.canUseDOM&&"TextEvent"in window&&!_&&!o(),T=m.canUseDOM&&(!w||_&&_>8&&_<=11),N=32,S=String.fromCharCode(N),P=h.topLevelTypes,k={beforeInput:{phasedRegistrationNames:{bubbled:b({onBeforeInput:null}),captured:b({onBeforeInputCapture:null})},dependencies:[P.topCompositionEnd,P.topKeyPress,P.topTextInput,P.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:b({onCompositionEnd:null}),captured:b({onCompositionEndCapture:null})},dependencies:[P.topBlur,P.topCompositionEnd,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:b({onCompositionStart:null}),captured:b({onCompositionStartCapture:null})},dependencies:[P.topBlur,P.topCompositionStart,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:b({onCompositionUpdate:null}),captured:b({onCompositionUpdateCapture:null})},dependencies:[P.topBlur,P.topCompositionUpdate,P.topKeyDown,P.topKeyPress,P.topKeyUp,P.topMouseDown]}},M=!1,R=null,O={eventTypes:k,extractEvents:function(e,t,n,o){return[l(e,t,n,o),d(e,t,n,o)]}};e.exports=O},function(e,t,n){"use strict";var o=n(62),r=n(6),a=(n(11),n(166),n(156)),i=n(173),s=n(176),u=(n(3),s(function(e){return i(e)})),l=!1,c="cssFloat";if(r.canUseDOM){var p=document.createElement("div").style;try{p.font=""}catch(d){l=!0}void 0===document.documentElement.style.cssFloat&&(c="styleFloat")}var h={createMarkupForStyles:function(e,t){var n="";for(var o in e)if(e.hasOwnProperty(o)){var r=e[o];null!=r&&(n+=u(o)+":",n+=a(o,r,t)+";")}return n||null},setValueForStyles:function(e,t,n){var r=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=a(i,t[i],n);if("float"!==i&&"cssFloat"!==i||(i=c),s)r[i]=s;else{var u=l&&o.shorthandPropertyExpansions[i];if(u)for(var p in u)r[p]="";else r[i]=""}}}};e.exports=h},function(e,t,n){"use strict";function o(e){var t=e.nodeName&&e.nodeName.toLowerCase();return"select"===t||"input"===t&&"file"===e.type}function r(e){var t=x.getPooled(M.change,O,e,T(e));C.accumulateTwoPhaseDispatches(t),_.batchedUpdates(a,t)}function a(e){b.enqueueEvents(e),b.processEventQueue(!1)}function i(e,t){R=e,O=t,R.attachEvent("onchange",r)}function s(){R&&(R.detachEvent("onchange",r),R=null,O=null)}function u(e,t){if(e===k.topChange)return t}function l(e,t,n){e===k.topFocus?(s(),i(t,n)):e===k.topBlur&&s()}function c(e,t){R=e,O=t,I=e.value,D=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(R,"value",U),R.attachEvent?R.attachEvent("onpropertychange",d):R.addEventListener("propertychange",d,!1)}function p(){R&&(delete R.value,R.detachEvent?R.detachEvent("onpropertychange",d):R.removeEventListener("propertychange",d,!1),R=null,O=null,I=null,D=null)}function d(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==I&&(I=t,r(e))}}function h(e,t){if(e===k.topInput)return t}function f(e,t,n){e===k.topFocus?(p(),c(t,n)):e===k.topBlur&&p()}function m(e,t){if((e===k.topSelectionChange||e===k.topKeyUp||e===k.topKeyDown)&&R&&R.value!==I)return I=R.value,O}function g(e){return e.nodeName&&"input"===e.nodeName.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)}function v(e,t){if(e===k.topClick)return t}var y=n(15),b=n(23),C=n(24),E=n(6),w=n(5),_=n(14),x=n(16),T=n(54),N=n(55),S=n(86),P=n(19),k=y.topLevelTypes,M={change:{phasedRegistrationNames:{bubbled:P({onChange:null}),captured:P({onChangeCapture:null})},dependencies:[k.topBlur,k.topChange,k.topClick,k.topFocus,k.topInput,k.topKeyDown,k.topKeyUp,k.topSelectionChange]}},R=null,O=null,I=null,D=null,A=!1;E.canUseDOM&&(A=N("change")&&(!document.documentMode||document.documentMode>8));var L=!1;E.canUseDOM&&(L=N("input")&&(!document.documentMode||document.documentMode>11));var U={get:function(){return D.get.call(this)},set:function(e){I=""+e,D.set.call(this,e)}},F={eventTypes:M,extractEvents:function(e,t,n,r){var a,i,s=t?w.getNodeFromInstance(t):window;if(o(s)?A?a=u:i=l:S(s)?L?a=h:(a=m,i=f):g(s)&&(a=v),a){var c=a(e,t);if(c){var p=x.getPooled(M.change,c,n,r);return p.type="change",C.accumulateTwoPhaseDispatches(p),p}}i&&i(e,s,t)}};e.exports=F},function(e,t,n){"use strict";var o=n(2),r=n(20),a=n(6),i=n(169),s=n(12),u=(n(1),{dangerouslyReplaceNodeWithMarkup:function(e,t){if(a.canUseDOM?void 0:o("56"),t?void 0:o("57"),"HTML"===e.nodeName?o("58"):void 0,"string"==typeof t){var n=i(t,s)[0];e.parentNode.replaceChild(n,e)}else r.replaceChildWithTree(e,t)}});e.exports=u},function(e,t,n){"use strict";var o=n(19),r=[o({ResponderEventPlugin:null}),o({SimpleEventPlugin:null}),o({TapEventPlugin:null}),o({EnterLeaveEventPlugin:null}),o({ChangeEventPlugin:null}),o({SelectEventPlugin:null}),o({BeforeInputEventPlugin:null})];e.exports=r},function(e,t,n){"use strict";var o=n(15),r=n(24),a=n(5),i=n(31),s=n(19),u=o.topLevelTypes,l={mouseEnter:{registrationName:s({onMouseEnter:null}),dependencies:[u.topMouseOut,u.topMouseOver]},mouseLeave:{registrationName:s({onMouseLeave:null}),dependencies:[u.topMouseOut,u.topMouseOver]}},c={eventTypes:l,extractEvents:function(e,t,n,o){if(e===u.topMouseOver&&(n.relatedTarget||n.fromElement))return null;if(e!==u.topMouseOut&&e!==u.topMouseOver)return null;var s;if(o.window===o)s=o;else{var c=o.ownerDocument;s=c?c.defaultView||c.parentWindow:window}var p,d;if(e===u.topMouseOut){p=t;var h=n.relatedTarget||n.toElement;d=h?a.getClosestInstanceFromNode(h):null}else p=null,d=t;if(p===d)return null;var f=null==p?s:a.getNodeFromInstance(p),m=null==d?s:a.getNodeFromInstance(d),g=i.getPooled(l.mouseLeave,p,n,o);g.type="mouseleave",g.target=f,g.relatedTarget=m;var v=i.getPooled(l.mouseEnter,d,n,o);return v.type="mouseenter",v.target=m,v.relatedTarget=f,r.accumulateEnterLeaveDispatches(g,v,p,d),[g,v]}};e.exports=c},function(e,t,n){"use strict";function o(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var r=n(4),a=n(17),i=n(84);r(o.prototype,{destructor:function(){this._root=null,this._startText=null,this._fallbackText=null},getText:function(){return"value"in this._root?this._root.value:this._root[i()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,o=n.length,r=this.getText(),a=r.length;for(e=0;e<o&&n[e]===r[e];e++);var i=o-e;for(t=1;t<=i&&n[o-t]===r[a-t];t++);var s=t>1?1-t:void 0;return this._fallbackText=r.slice(e,s),this._fallbackText}}),a.addPoolingTo(o),e.exports=o},function(e,t,n){"use strict";var o=n(21),r=o.injection.MUST_USE_PROPERTY,a=o.injection.HAS_BOOLEAN_VALUE,i=o.injection.HAS_NUMERIC_VALUE,s=o.injection.HAS_POSITIVE_NUMERIC_VALUE,u=o.injection.HAS_OVERLOADED_BOOLEAN_VALUE,l={isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+o.ATTRIBUTE_NAME_CHAR+"]*$")),Properties:{accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:a,allowTransparency:0,alt:0,as:0,async:a,autoComplete:0,autoPlay:a,capture:a,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:r|a,cite:0,classID:0,className:0,cols:s,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:a,coords:0,crossOrigin:0,data:0,dateTime:0,"default":a,defer:a,dir:0,disabled:a,download:u,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:a,formTarget:0,frameBorder:0,headers:0,height:0,hidden:a,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:a,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:r|a,muted:r|a,name:0,nonce:0,noValidate:a,open:a,optimum:0,pattern:0,placeholder:0,playsInline:a,poster:0,preload:0,profile:0,radioGroup:0,readOnly:a,referrerPolicy:0,rel:0,required:a,reversed:a,role:0,rows:s,rowSpan:i,sandbox:0,scope:0,scoped:a,scrolling:0,seamless:a,selected:r|a,shape:0,size:s,sizes:0,span:s,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:i,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,"typeof":0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:a,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{}};e.exports=l},function(e,t,n){"use strict";var o=n(4),r=n(65),a=n(42),i=n(136),s=n(66),u=n(119),l=n(13),c=n(76),p=n(77),d=n(162),h=(n(3),l.createElement),f=l.createFactory,m=l.cloneElement,g=o,v={Children:{map:r.map,forEach:r.forEach,count:r.count,toArray:r.toArray,only:d},Component:a,PureComponent:i,createElement:h,cloneElement:m,isValidElement:l.isValidElement,PropTypes:c,createClass:s.createClass,createFactory:f,createMixin:function(e){return e},DOM:u,version:p,__spread:g};e.exports=v},function(e,t,n){(function(t){"use strict";function o(e,t,n,o){var r=void 0===e[n];null!=t&&r&&(e[n]=a(t,!0))}var r=n(22),a=n(85),i=(n(40),n(56)),s=n(57),u=(n(3),{instantiateChildren:function(e,t,n,r){if(null==e)return null;var a={};return s(e,o,a),a},updateChildren:function(e,t,n,o,s,u,l,c,p){if(t||e){var d,h;for(d in t)if(t.hasOwnProperty(d)){h=e&&e[d];var f=h&&h._currentElement,m=t[d];if(null!=h&&i(f,m))r.receiveComponent(h,m,s,c),t[d]=h;else{h&&(o[d]=r.getHostNode(h),r.unmountComponent(h,!1));var g=a(m,!0);t[d]=g;var v=r.mountComponent(g,s,u,l,c,p);n.push(v)}}for(d in e)!e.hasOwnProperty(d)||t&&t.hasOwnProperty(d)||(h=e[d],o[d]=r.getHostNode(h),r.unmountComponent(h,!1))}},unmountChildren:function(e,t){for(var n in e)if(e.hasOwnProperty(n)){var o=e[n];r.unmountComponent(o,t)}}});e.exports=u}).call(t,n(60))},function(e,t,n){"use strict";var o=n(36),r=n(121),a={processChildrenUpdates:r.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:o.dangerouslyReplaceNodeWithMarkup};e.exports=a},function(e,t,n){"use strict";function o(e){}function r(e,t){}function a(e){return!(!e.prototype||!e.prototype.isReactComponent)}function i(e){return!(!e.prototype||!e.prototype.isPureReactComponent)}var s=n(2),u=n(4),l=n(43),c=n(18),p=n(13),d=n(45),h=n(25),f=(n(11),n(75)),m=(n(48),n(22)),g=n(155),v=n(28),y=(n(1),n(59)),b=n(56),C=(n(3),{ImpureClass:0,PureClass:1,StatelessFunctional:2});o.prototype.render=function(){var e=h.get(this)._currentElement.type,t=e(this.props,this.context,this.updater);return r(e,t),t};var E=1,w={construct:function(e){this._currentElement=e,this._rootNodeID=0,this._compositeType=null,this._instance=null,this._hostParent=null,this._hostContainerInfo=null,this._updateBatchNumber=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedNodeType=null,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._topLevelWrapper=null,this._pendingCallbacks=null,this._calledComponentWillUnmount=!1},mountComponent:function(e,t,n,u){this._context=u,this._mountOrder=E++,this._hostParent=t,this._hostContainerInfo=n;var l,c=this._currentElement.props,d=this._processContext(u),f=this._currentElement.type,m=e.getUpdateQueue(),g=a(f),y=this._constructComponent(g,c,d,m);g||null!=y&&null!=y.render?i(f)?this._compositeType=C.PureClass:this._compositeType=C.ImpureClass:(l=y,r(f,l),null===y||y===!1||p.isValidElement(y)?void 0:s("105",f.displayName||f.name||"Component"),y=new o(f),this._compositeType=C.StatelessFunctional),y.props=c,y.context=d,y.refs=v,y.updater=m,this._instance=y,h.set(y,this);var b=y.state;void 0===b&&(y.state=b=null),"object"!=typeof b||Array.isArray(b)?s("106",this.getName()||"ReactCompositeComponent"):void 0,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var w;return w=y.unstable_handleError?this.performInitialMountWithErrorHandling(l,t,n,e,u):this.performInitialMount(l,t,n,e,u),y.componentDidMount&&e.getReactMountReady().enqueue(y.componentDidMount,y),w},_constructComponent:function(e,t,n,o){return this._constructComponentWithoutOwner(e,t,n,o)},_constructComponentWithoutOwner:function(e,t,n,o){var r=this._currentElement.type;return e?new r(t,n,o):r(t,n,o)},performInitialMountWithErrorHandling:function(e,t,n,o,r){var a,i=o.checkpoint();try{a=this.performInitialMount(e,t,n,o,r)}catch(s){o.rollback(i),this._instance.unstable_handleError(s),this._pendingStateQueue&&(this._instance.state=this._processPendingState(this._instance.props,this._instance.context)),i=o.checkpoint(),this._renderedComponent.unmountComponent(!0),o.rollback(i),a=this.performInitialMount(e,t,n,o,r)}return a},performInitialMount:function(e,t,n,o,r){var a=this._instance,i=0;a.componentWillMount&&(a.componentWillMount(),this._pendingStateQueue&&(a.state=this._processPendingState(a.props,a.context))),void 0===e&&(e=this._renderValidatedComponent());var s=f.getType(e);this._renderedNodeType=s;var u=this._instantiateReactComponent(e,s!==f.EMPTY);this._renderedComponent=u;var l=m.mountComponent(u,o,t,n,this._processChildContext(r),i);return l},getHostNode:function(){return m.getHostNode(this._renderedComponent)},unmountComponent:function(e){if(this._renderedComponent){var t=this._instance;if(t.componentWillUnmount&&!t._calledComponentWillUnmount)if(t._calledComponentWillUnmount=!0,e){var n=this.getName()+".componentWillUnmount()";d.invokeGuardedCallback(n,t.componentWillUnmount.bind(t))}else t.componentWillUnmount();this._renderedComponent&&(m.unmountComponent(this._renderedComponent,e),this._renderedNodeType=null,this._renderedComponent=null,this._instance=null),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=0,this._topLevelWrapper=null,h.remove(t)}},_maskContext:function(e){var t=this._currentElement.type,n=t.contextTypes;if(!n)return v;var o={};for(var r in n)o[r]=e[r];return o},_processContext:function(e){var t=this._maskContext(e);return t},_processChildContext:function(e){var t,n=this._currentElement.type,o=this._instance;if(o.getChildContext&&(t=o.getChildContext()),t){"object"!=typeof n.childContextTypes?s("107",this.getName()||"ReactCompositeComponent"):void 0;for(var r in t)r in n.childContextTypes?void 0:s("108",this.getName()||"ReactCompositeComponent",r);return u({},e,t)}return e},_checkContextTypes:function(e,t,n){g(e,t,n,this.getName(),null,this._debugID)},receiveComponent:function(e,t,n){var o=this._currentElement,r=this._context;this._pendingElement=null,this.updateComponent(t,o,e,r,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement?m.receiveComponent(this,this._pendingElement,e,this._context):null!==this._pendingStateQueue||this._pendingForceUpdate?this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context):this._updateBatchNumber=null},updateComponent:function(e,t,n,o,r){var a=this._instance;null==a?s("136",this.getName()||"ReactCompositeComponent"):void 0;var i,u=!1;this._context===r?i=a.context:(i=this._processContext(r),u=!0);var l=t.props,c=n.props;t!==n&&(u=!0),u&&a.componentWillReceiveProps&&a.componentWillReceiveProps(c,i);var p=this._processPendingState(c,i),d=!0;this._pendingForceUpdate||(a.shouldComponentUpdate?d=a.shouldComponentUpdate(c,p,i):this._compositeType===C.PureClass&&(d=!y(l,c)||!y(a.state,p))),this._updateBatchNumber=null,d?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,c,p,i,e,r)):(this._currentElement=n,this._context=r,a.props=c,a.state=p,a.context=i)},_processPendingState:function(e,t){var n=this._instance,o=this._pendingStateQueue,r=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!o)return n.state;if(r&&1===o.length)return o[0];for(var a=u({},r?o[0]:n.state),i=r?1:0;i<o.length;i++){var s=o[i];u(a,"function"==typeof s?s.call(n,a,e,t):s)}return a},_performComponentUpdate:function(e,t,n,o,r,a){var i,s,u,l=this._instance,c=Boolean(l.componentDidUpdate);c&&(i=l.props,s=l.state,u=l.context),l.componentWillUpdate&&l.componentWillUpdate(t,n,o),this._currentElement=e,this._context=a,l.props=t,l.state=n,l.context=o,this._updateRenderedComponent(r,a),c&&r.getReactMountReady().enqueue(l.componentDidUpdate.bind(l,i,s,u),l)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,o=n._currentElement,r=this._renderValidatedComponent(),a=0;if(b(o,r))m.receiveComponent(n,r,e,this._processChildContext(t));else{var i=m.getHostNode(n);m.unmountComponent(n,!1);var s=f.getType(r);this._renderedNodeType=s;var u=this._instantiateReactComponent(r,s!==f.EMPTY);this._renderedComponent=u;var l=m.mountComponent(u,e,this._hostParent,this._hostContainerInfo,this._processChildContext(t),a);this._replaceNodeWithMarkup(i,l,n)}},_replaceNodeWithMarkup:function(e,t,n){l.replaceNodeWithMarkup(e,t,n)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e,t=this._instance;return e=t.render()},_renderValidatedComponent:function(){var e;if(this._compositeType!==C.StatelessFunctional){c.current=this;try{e=this._renderValidatedComponentWithoutOwnerOrContext()}finally{c.current=null}}else e=this._renderValidatedComponentWithoutOwnerOrContext();return null===e||e===!1||p.isValidElement(e)?void 0:s("109",this.getName()||"ReactCompositeComponent"),e},attachRef:function(e,t){var n=this.getPublicInstance();null==n?s("110"):void 0;var o=t.getPublicInstance(),r=n.refs===v?n.refs={}:n.refs;r[e]=o},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){var e=this._instance;return this._compositeType===C.StatelessFunctional?null:e},_instantiateReactComponent:null},_={Mixin:w};e.exports=_},function(e,t,n){"use strict";var o=n(5),r=n(129),a=n(73),i=n(22),s=n(14),u=n(77),l=n(157),c=n(82),p=n(164);n(3),r.inject();var d={findDOMNode:l,render:a.render,unmountComponentAtNode:a.unmountComponentAtNode,version:u,unstable_batchedUpdates:s.batchedUpdates,unstable_renderSubtreeIntoContainer:p};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ComponentTree:{getClosestInstanceFromNode:o.getClosestInstanceFromNode,getNodeFromInstance:function(e){return e._renderedComponent&&(e=c(e)),e?o.getNodeFromInstance(e):null}},Mount:a,Reconciler:i}),e.exports=d},function(e,t,n){"use strict";var o=n(29),r={getHostProps:o.getHostProps};e.exports=r},function(e,t,n){"use strict";function o(e){if(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" This DOM node was rendered by `"+n+"`."}}return""}function r(e,t){t&&(J[e._tag]&&(null!=t.children||null!=t.dangerouslySetInnerHTML?m("137",e._tag,e._currentElement._owner?" Check the render method of "+e._currentElement._owner.getName()+".":""):void 0),null!=t.dangerouslySetInnerHTML&&(null!=t.children?m("60"):void 0,"object"==typeof t.dangerouslySetInnerHTML&&K in t.dangerouslySetInnerHTML?void 0:m("61")),null!=t.style&&"object"!=typeof t.style?m("62",o(e)):void 0)}function a(e,t,n,o){if(!(o instanceof A)){var r=e._hostContainerInfo,a=r._node&&r._node.nodeType===G,s=a?r._node:r._ownerDocument;j(t,s),o.getReactMountReady().enqueue(i,{inst:e,registrationName:t,listener:n})}}function i(){var e=this;x.putListener(e.inst,e.registrationName,e.listener)}function s(){var e=this;M.postMountWrapper(e)}function u(){var e=this;I.postMountWrapper(e)}function l(){var e=this;R.postMountWrapper(e)}function c(){var e=this;e._rootNodeID?void 0:m("63");var t=V(e);switch(t?void 0:m("64"),e._tag){case"iframe":case"object":e._wrapperState.listeners=[N.trapBubbledEvent(_.topLevelTypes.topLoad,"load",t)];break;case"video":case"audio":e._wrapperState.listeners=[];for(var n in z)z.hasOwnProperty(n)&&e._wrapperState.listeners.push(N.trapBubbledEvent(_.topLevelTypes[n],z[n],t));break;case"source":e._wrapperState.listeners=[N.trapBubbledEvent(_.topLevelTypes.topError,"error",t)];break;case"img":e._wrapperState.listeners=[N.trapBubbledEvent(_.topLevelTypes.topError,"error",t),N.trapBubbledEvent(_.topLevelTypes.topLoad,"load",t)];break;case"form":e._wrapperState.listeners=[N.trapBubbledEvent(_.topLevelTypes.topReset,"reset",t),N.trapBubbledEvent(_.topLevelTypes.topSubmit,"submit",t)];break;case"input":case"select":case"textarea":e._wrapperState.listeners=[N.trapBubbledEvent(_.topLevelTypes.topInvalid,"invalid",t)]}}function p(){O.postUpdateWrapper(this)}function d(e){ee.call(Z,e)||($.test(e)?void 0:m("65",e),Z[e]=!0)}function h(e,t){return e.indexOf("-")>=0||null!=t.is}function f(e){var t=e.type;d(t),this._currentElement=e,this._tag=t.toLowerCase(),this._namespaceURI=null,this._renderedChildren=null,this._previousStyle=null,this._previousStyleCopy=null,this._hostNode=null,this._hostParent=null,this._rootNodeID=0,this._domID=0,this._hostContainerInfo=null,this._wrapperState=null,this._topLevelWrapper=null,this._flags=0}var m=n(2),g=n(4),v=n(101),y=n(103),b=n(20),C=n(37),E=n(21),w=n(64),_=n(15),x=n(23),T=n(38),N=n(30),S=n(115),P=n(67),k=n(5),M=n(122),R=n(123),O=n(68),I=n(126),D=(n(11),n(134)),A=n(139),L=(n(12),n(32)),U=(n(1),n(55),n(19)),F=(n(59),n(58),n(3),P),B=x.deleteListener,V=k.getNodeFromInstance,j=N.listenTo,H=T.registrationNameModules,W={string:!0,number:!0},q=U({style:null}),K=U({__html:null}),Y={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null},G=11,z={topAbort:"abort",topCanPlay:"canplay",topCanPlayThrough:"canplaythrough",topDurationChange:"durationchange",topEmptied:"emptied",topEncrypted:"encrypted",topEnded:"ended",topError:"error",topLoadedData:"loadeddata",topLoadedMetadata:"loadedmetadata",topLoadStart:"loadstart",topPause:"pause",topPlay:"play",topPlaying:"playing",topProgress:"progress",topRateChange:"ratechange",topSeeked:"seeked",topSeeking:"seeking",topStalled:"stalled",topSuspend:"suspend",topTimeUpdate:"timeupdate",topVolumeChange:"volumechange",topWaiting:"waiting"},X={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Q={listing:!0,pre:!0,textarea:!0},J=g({menuitem:!0},X),$=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Z={},ee={}.hasOwnProperty,te=1;f.displayName="ReactDOMComponent",f.Mixin={mountComponent:function(e,t,n,o){this._rootNodeID=te++,this._domID=n._idCounter++,this._hostParent=t,this._hostContainerInfo=n;var a=this._currentElement.props;switch(this._tag){case"audio":case"form":case"iframe":case"img":case"link":case"object":case"source":case"video":this._wrapperState={listeners:null},e.getReactMountReady().enqueue(c,this);break;case"button":a=S.getHostProps(this,a,t);break;case"input":M.mountWrapper(this,a,t),a=M.getHostProps(this,a),e.getReactMountReady().enqueue(c,this);break;case"option":R.mountWrapper(this,a,t),a=R.getHostProps(this,a);break;case"select":O.mountWrapper(this,a,t),a=O.getHostProps(this,a),e.getReactMountReady().enqueue(c,this);break;case"textarea":I.mountWrapper(this,a,t),a=I.getHostProps(this,a),e.getReactMountReady().enqueue(c,this)}r(this,a);var i,p;null!=t?(i=t._namespaceURI,p=t._tag):n._tag&&(i=n._namespaceURI,p=n._tag),(null==i||i===C.svg&&"foreignobject"===p)&&(i=C.html),i===C.html&&("svg"===this._tag?i=C.svg:"math"===this._tag&&(i=C.mathml)),this._namespaceURI=i;var d;if(e.useCreateElement){var h,f=n._ownerDocument;if(i===C.html)if("script"===this._tag){var m=f.createElement("div"),g=this._currentElement.type;m.innerHTML="<"+g+"></"+g+">",h=m.removeChild(m.firstChild)}else h=a.is?f.createElement(this._currentElement.type,a.is):f.createElement(this._currentElement.type);else h=f.createElementNS(i,this._currentElement.type);k.precacheNode(this,h),this._flags|=F.hasCachedChildNodes,this._hostParent||w.setAttributeForRoot(h),this._updateDOMProperties(null,a,e);var y=b(h);this._createInitialChildren(e,a,o,y),d=y}else{var E=this._createOpenTagMarkupAndPutListeners(e,a),_=this._createContentMarkup(e,a,o);d=!_&&X[this._tag]?E+"/>":E+">"+_+"</"+this._currentElement.type+">"}switch(this._tag){case"input":e.getReactMountReady().enqueue(s,this),a.autoFocus&&e.getReactMountReady().enqueue(v.focusDOMComponent,this);break;case"textarea":e.getReactMountReady().enqueue(u,this),a.autoFocus&&e.getReactMountReady().enqueue(v.focusDOMComponent,this);break;case"select":
a.autoFocus&&e.getReactMountReady().enqueue(v.focusDOMComponent,this);break;case"button":a.autoFocus&&e.getReactMountReady().enqueue(v.focusDOMComponent,this);break;case"option":e.getReactMountReady().enqueue(l,this)}return d},_createOpenTagMarkupAndPutListeners:function(e,t){var n="<"+this._currentElement.type;for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];if(null!=r)if(H.hasOwnProperty(o))r&&a(this,o,r,e);else{o===q&&(r&&(r=this._previousStyleCopy=g({},t.style)),r=y.createMarkupForStyles(r,this));var i=null;null!=this._tag&&h(this._tag,t)?Y.hasOwnProperty(o)||(i=w.createMarkupForCustomAttribute(o,r)):i=w.createMarkupForProperty(o,r),i&&(n+=" "+i)}}return e.renderToStaticMarkup?n:(this._hostParent||(n+=" "+w.createMarkupForRoot()),n+=" "+w.createMarkupForID(this._domID))},_createContentMarkup:function(e,t,n){var o="",r=t.dangerouslySetInnerHTML;if(null!=r)null!=r.__html&&(o=r.__html);else{var a=W[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)o=L(a);else if(null!=i){var s=this.mountChildren(i,e,n);o=s.join("")}}return Q[this._tag]&&"\n"===o.charAt(0)?"\n"+o:o},_createInitialChildren:function(e,t,n,o){var r=t.dangerouslySetInnerHTML;if(null!=r)null!=r.__html&&b.queueHTML(o,r.__html);else{var a=W[typeof t.children]?t.children:null,i=null!=a?null:t.children;if(null!=a)b.queueText(o,a);else if(null!=i)for(var s=this.mountChildren(i,e,n),u=0;u<s.length;u++)b.queueChild(o,s[u])}},receiveComponent:function(e,t,n){var o=this._currentElement;this._currentElement=e,this.updateComponent(t,o,e,n)},updateComponent:function(e,t,n,o){var a=t.props,i=this._currentElement.props;switch(this._tag){case"button":a=S.getHostProps(this,a),i=S.getHostProps(this,i);break;case"input":a=M.getHostProps(this,a),i=M.getHostProps(this,i);break;case"option":a=R.getHostProps(this,a),i=R.getHostProps(this,i);break;case"select":a=O.getHostProps(this,a),i=O.getHostProps(this,i);break;case"textarea":a=I.getHostProps(this,a),i=I.getHostProps(this,i)}switch(r(this,i),this._updateDOMProperties(a,i,e),this._updateDOMChildren(a,i,e,o),this._tag){case"input":M.updateWrapper(this);break;case"textarea":I.updateWrapper(this);break;case"select":e.getReactMountReady().enqueue(p,this)}},_updateDOMProperties:function(e,t,n){var o,r,i;for(o in e)if(!t.hasOwnProperty(o)&&e.hasOwnProperty(o)&&null!=e[o])if(o===q){var s=this._previousStyleCopy;for(r in s)s.hasOwnProperty(r)&&(i=i||{},i[r]="");this._previousStyleCopy=null}else H.hasOwnProperty(o)?e[o]&&B(this,o):h(this._tag,e)?Y.hasOwnProperty(o)||w.deleteValueForAttribute(V(this),o):(E.properties[o]||E.isCustomAttribute(o))&&w.deleteValueForProperty(V(this),o);for(o in t){var u=t[o],l=o===q?this._previousStyleCopy:null!=e?e[o]:void 0;if(t.hasOwnProperty(o)&&u!==l&&(null!=u||null!=l))if(o===q)if(u?u=this._previousStyleCopy=g({},u):this._previousStyleCopy=null,l){for(r in l)!l.hasOwnProperty(r)||u&&u.hasOwnProperty(r)||(i=i||{},i[r]="");for(r in u)u.hasOwnProperty(r)&&l[r]!==u[r]&&(i=i||{},i[r]=u[r])}else i=u;else if(H.hasOwnProperty(o))u?a(this,o,u,n):l&&B(this,o);else if(h(this._tag,t))Y.hasOwnProperty(o)||w.setValueForAttribute(V(this),o,u);else if(E.properties[o]||E.isCustomAttribute(o)){var c=V(this);null!=u?w.setValueForProperty(c,o,u):w.deleteValueForProperty(c,o)}}i&&y.setValueForStyles(V(this),i,this)},_updateDOMChildren:function(e,t,n,o){var r=W[typeof e.children]?e.children:null,a=W[typeof t.children]?t.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=t.dangerouslySetInnerHTML&&t.dangerouslySetInnerHTML.__html,u=null!=r?null:e.children,l=null!=a?null:t.children,c=null!=r||null!=i,p=null!=a||null!=s;null!=u&&null==l?this.updateChildren(null,n,o):c&&!p&&this.updateTextContent(""),null!=a?r!==a&&this.updateTextContent(""+a):null!=s?i!==s&&this.updateMarkup(""+s):null!=l&&this.updateChildren(l,n,o)},getHostNode:function(){return V(this)},unmountComponent:function(e){switch(this._tag){case"audio":case"form":case"iframe":case"img":case"link":case"object":case"source":case"video":var t=this._wrapperState.listeners;if(t)for(var n=0;n<t.length;n++)t[n].remove();break;case"html":case"head":case"body":m("66",this._tag)}this.unmountChildren(e),k.uncacheNode(this),x.deleteAllListeners(this),this._rootNodeID=0,this._domID=0,this._wrapperState=null},getPublicInstance:function(){return V(this)}},g(f.prototype,f.Mixin,D.Mixin),e.exports=f},function(e,t,n){"use strict";function o(e,t){var n={_topLevelWrapper:e,_idCounter:1,_ownerDocument:t?t.nodeType===r?t:t.ownerDocument:null,_node:t,_tag:t?t.nodeName.toLowerCase():null,_namespaceURI:t?t.namespaceURI:null};return n}var r=(n(58),9);e.exports=o},function(e,t,n){"use strict";var o=n(4),r=n(20),a=n(5),i=function(e){this._currentElement=null,this._hostNode=null,this._hostParent=null,this._hostContainerInfo=null,this._domID=0};o(i.prototype,{mountComponent:function(e,t,n,o){var i=n._idCounter++;this._domID=i,this._hostParent=t,this._hostContainerInfo=n;var s=" react-empty: "+this._domID+" ";if(e.useCreateElement){var u=n._ownerDocument,l=u.createComment(s);return a.precacheNode(this,l),r(l)}return e.renderToStaticMarkup?"":"<!--"+s+"-->"},receiveComponent:function(){},getHostNode:function(){return a.getNodeFromInstance(this)},unmountComponent:function(){a.uncacheNode(this)}}),e.exports=i},function(e,t,n){"use strict";var o=n(13),r=o.createFactory,a={a:r("a"),abbr:r("abbr"),address:r("address"),area:r("area"),article:r("article"),aside:r("aside"),audio:r("audio"),b:r("b"),base:r("base"),bdi:r("bdi"),bdo:r("bdo"),big:r("big"),blockquote:r("blockquote"),body:r("body"),br:r("br"),button:r("button"),canvas:r("canvas"),caption:r("caption"),cite:r("cite"),code:r("code"),col:r("col"),colgroup:r("colgroup"),data:r("data"),datalist:r("datalist"),dd:r("dd"),del:r("del"),details:r("details"),dfn:r("dfn"),dialog:r("dialog"),div:r("div"),dl:r("dl"),dt:r("dt"),em:r("em"),embed:r("embed"),fieldset:r("fieldset"),figcaption:r("figcaption"),figure:r("figure"),footer:r("footer"),form:r("form"),h1:r("h1"),h2:r("h2"),h3:r("h3"),h4:r("h4"),h5:r("h5"),h6:r("h6"),head:r("head"),header:r("header"),hgroup:r("hgroup"),hr:r("hr"),html:r("html"),i:r("i"),iframe:r("iframe"),img:r("img"),input:r("input"),ins:r("ins"),kbd:r("kbd"),keygen:r("keygen"),label:r("label"),legend:r("legend"),li:r("li"),link:r("link"),main:r("main"),map:r("map"),mark:r("mark"),menu:r("menu"),menuitem:r("menuitem"),meta:r("meta"),meter:r("meter"),nav:r("nav"),noscript:r("noscript"),object:r("object"),ol:r("ol"),optgroup:r("optgroup"),option:r("option"),output:r("output"),p:r("p"),param:r("param"),picture:r("picture"),pre:r("pre"),progress:r("progress"),q:r("q"),rp:r("rp"),rt:r("rt"),ruby:r("ruby"),s:r("s"),samp:r("samp"),script:r("script"),section:r("section"),select:r("select"),small:r("small"),source:r("source"),span:r("span"),strong:r("strong"),style:r("style"),sub:r("sub"),summary:r("summary"),sup:r("sup"),table:r("table"),tbody:r("tbody"),td:r("td"),textarea:r("textarea"),tfoot:r("tfoot"),th:r("th"),thead:r("thead"),time:r("time"),title:r("title"),tr:r("tr"),track:r("track"),u:r("u"),ul:r("ul"),"var":r("var"),video:r("video"),wbr:r("wbr"),circle:r("circle"),clipPath:r("clipPath"),defs:r("defs"),ellipse:r("ellipse"),g:r("g"),image:r("image"),line:r("line"),linearGradient:r("linearGradient"),mask:r("mask"),path:r("path"),pattern:r("pattern"),polygon:r("polygon"),polyline:r("polyline"),radialGradient:r("radialGradient"),rect:r("rect"),stop:r("stop"),svg:r("svg"),text:r("text"),tspan:r("tspan")};e.exports=a},function(e,t){"use strict";var n={useCreateElement:!0};e.exports=n},function(e,t,n){"use strict";var o=n(36),r=n(5),a={dangerouslyProcessChildrenUpdates:function(e,t){var n=r.getNodeFromInstance(e);o.processUpdates(n,t)}};e.exports=a},function(e,t,n){"use strict";function o(){this._rootNodeID&&d.updateWrapper(this)}function r(e){var t=this._currentElement.props,n=l.executeOnChange(t,e);p.asap(o,this);var r=t.name;if("radio"===t.type&&null!=r){for(var i=c.getNodeFromInstance(this),s=i;s.parentNode;)s=s.parentNode;for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),d=0;d<u.length;d++){var h=u[d];if(h!==i&&h.form===i.form){var f=c.getInstanceFromNode(h);f?void 0:a("90"),p.asap(o,f)}}}return n}var a=n(2),i=n(4),s=n(29),u=n(64),l=n(41),c=n(5),p=n(14),d=(n(1),n(3),{getHostProps:function(e,t){var n=l.getValue(t),o=l.getChecked(t),r=i({type:void 0,step:void 0,min:void 0,max:void 0},s.getHostProps(e,t),{defaultChecked:void 0,defaultValue:void 0,value:null!=n?n:e._wrapperState.initialValue,checked:null!=o?o:e._wrapperState.initialChecked,onChange:e._wrapperState.onChange});return r},mountWrapper:function(e,t){var n=t.defaultValue;e._wrapperState={initialChecked:null!=t.checked?t.checked:t.defaultChecked,initialValue:null!=t.value?t.value:n,listeners:null,onChange:r.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=t.checked;null!=n&&u.setValueForProperty(c.getNodeFromInstance(e),"checked",n||!1);var o=c.getNodeFromInstance(e),r=l.getValue(t);if(null!=r){var a=""+r;a!==o.value&&(o.value=a)}else null==t.value&&null!=t.defaultValue&&(o.defaultValue=""+t.defaultValue),null==t.checked&&null!=t.defaultChecked&&(o.defaultChecked=!!t.defaultChecked)},postMountWrapper:function(e){var t=e._currentElement.props,n=c.getNodeFromInstance(e);switch(t.type){case"submit":case"reset":break;case"color":case"date":case"datetime":case"datetime-local":case"month":case"time":case"week":n.value="",n.value=n.defaultValue;break;default:n.value=n.value}var o=n.name;""!==o&&(n.name=""),n.defaultChecked=!n.defaultChecked,n.defaultChecked=!n.defaultChecked,""!==o&&(n.name=o)}});e.exports=d},function(e,t,n){"use strict";function o(e){var t="";return a.forEach(e,function(e){null!=e&&("string"==typeof e||"number"==typeof e?t+=e:u||(u=!0))}),t}var r=n(4),a=n(65),i=n(5),s=n(68),u=(n(3),!1),l={mountWrapper:function(e,t,n){var r=null;if(null!=n){var a=n;"optgroup"===a._tag&&(a=a._hostParent),null!=a&&"select"===a._tag&&(r=s.getSelectValueContext(a))}var i=null;if(null!=r){var u;if(u=null!=t.value?t.value+"":o(t.children),i=!1,Array.isArray(r)){for(var l=0;l<r.length;l++)if(""+r[l]===u){i=!0;break}}else i=""+r===u}e._wrapperState={selected:i}},postMountWrapper:function(e){var t=e._currentElement.props;if(null!=t.value){var n=i.getNodeFromInstance(e);n.setAttribute("value",t.value)}},getHostProps:function(e,t){var n=r({selected:void 0,children:void 0},t);null!=e._wrapperState.selected&&(n.selected=e._wrapperState.selected);var a=o(t.children);return a&&(n.children=a),n}};e.exports=l},function(e,t,n){"use strict";function o(e,t,n,o){return e===n&&t===o}function r(e){var t=document.selection,n=t.createRange(),o=n.text.length,r=n.duplicate();r.moveToElementText(e),r.setEndPoint("EndToStart",n);var a=r.text.length,i=a+o;return{start:a,end:i}}function a(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var n=t.anchorNode,r=t.anchorOffset,a=t.focusNode,i=t.focusOffset,s=t.getRangeAt(0);try{s.startContainer.nodeType,s.endContainer.nodeType}catch(u){return null}var l=o(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),c=l?0:s.toString().length,p=s.cloneRange();p.selectNodeContents(e),p.setEnd(s.startContainer,s.startOffset);var d=o(p.startContainer,p.startOffset,p.endContainer,p.endOffset),h=d?0:p.toString().length,f=h+c,m=document.createRange();m.setStart(n,r),m.setEnd(a,i);var g=m.collapsed;return{start:g?f:h,end:g?h:f}}function i(e,t){var n,o,r=document.selection.createRange().duplicate();void 0===t.end?(n=t.start,o=n):t.start>t.end?(n=t.end,o=t.start):(n=t.start,o=t.end),r.moveToElementText(e),r.moveStart("character",n),r.setEndPoint("EndToStart",r),r.moveEnd("character",o-n),r.select()}function s(e,t){if(window.getSelection){var n=window.getSelection(),o=e[c()].length,r=Math.min(t.start,o),a=void 0===t.end?r:Math.min(t.end,o);if(!n.extend&&r>a){var i=a;a=r,r=i}var s=l(e,r),u=l(e,a);if(s&&u){var p=document.createRange();p.setStart(s.node,s.offset),n.removeAllRanges(),r>a?(n.addRange(p),n.extend(u.node,u.offset)):(p.setEnd(u.node,u.offset),n.addRange(p))}}}var u=n(6),l=n(160),c=n(84),p=u.canUseDOM&&"selection"in document&&!("getSelection"in window),d={getOffsets:p?r:a,setOffsets:p?i:s};e.exports=d},function(e,t,n){"use strict";var o=n(2),r=n(4),a=n(36),i=n(20),s=n(5),u=n(32),l=(n(1),n(58),function(e){this._currentElement=e,this._stringText=""+e,this._hostNode=null,this._hostParent=null,this._domID=0,this._mountIndex=0,this._closingComment=null,this._commentNodes=null});r(l.prototype,{mountComponent:function(e,t,n,o){var r=n._idCounter++,a=" react-text: "+r+" ",l=" /react-text ";if(this._domID=r,this._hostParent=t,e.useCreateElement){var c=n._ownerDocument,p=c.createComment(a),d=c.createComment(l),h=i(c.createDocumentFragment());return i.queueChild(h,i(p)),this._stringText&&i.queueChild(h,i(c.createTextNode(this._stringText))),i.queueChild(h,i(d)),s.precacheNode(this,p),this._closingComment=d,h}var f=u(this._stringText);return e.renderToStaticMarkup?f:"<!--"+a+"-->"+f+"<!--"+l+"-->"},receiveComponent:function(e,t){if(e!==this._currentElement){this._currentElement=e;var n=""+e;if(n!==this._stringText){this._stringText=n;var o=this.getHostNode();a.replaceDelimitedText(o[0],o[1],n)}}},getHostNode:function(){var e=this._commentNodes;if(e)return e;if(!this._closingComment)for(var t=s.getNodeFromInstance(this),n=t.nextSibling;;){if(null==n?o("67",this._domID):void 0,8===n.nodeType&&" /react-text "===n.nodeValue){this._closingComment=n;break}n=n.nextSibling}return e=[this._hostNode,this._closingComment],this._commentNodes=e,e},unmountComponent:function(){this._closingComment=null,this._commentNodes=null,s.uncacheNode(this)}}),e.exports=l},function(e,t,n){"use strict";function o(){this._rootNodeID&&p.updateWrapper(this)}function r(e){var t=this._currentElement.props,n=u.executeOnChange(t,e);return c.asap(o,this),n}var a=n(2),i=n(4),s=n(29),u=n(41),l=n(5),c=n(14),p=(n(1),n(3),{getHostProps:function(e,t){null!=t.dangerouslySetInnerHTML?a("91"):void 0;var n=i({},s.getHostProps(e,t),{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue,onChange:e._wrapperState.onChange});return n},mountWrapper:function(e,t){var n=u.getValue(t),o=n;if(null==n){var i=t.defaultValue,s=t.children;null!=s&&(null!=i?a("92"):void 0,Array.isArray(s)&&(s.length<=1?void 0:a("93"),s=s[0]),i=""+s),null==i&&(i=""),o=i}e._wrapperState={initialValue:""+o,listeners:null,onChange:r.bind(e)}},updateWrapper:function(e){var t=e._currentElement.props,n=l.getNodeFromInstance(e),o=u.getValue(t);if(null!=o){var r=""+o;r!==n.value&&(n.value=r),null==t.defaultValue&&(n.defaultValue=r)}null!=t.defaultValue&&(n.defaultValue=t.defaultValue)},postMountWrapper:function(e){var t=l.getNodeFromInstance(e);t.value=t.textContent}});e.exports=p},function(e,t,n){"use strict";function o(e,t){"_hostNode"in e?void 0:u("33"),"_hostNode"in t?void 0:u("33");for(var n=0,o=e;o;o=o._hostParent)n++;for(var r=0,a=t;a;a=a._hostParent)r++;for(;n-r>0;)e=e._hostParent,n--;for(;r-n>0;)t=t._hostParent,r--;for(var i=n;i--;){if(e===t)return e;e=e._hostParent,t=t._hostParent}return null}function r(e,t){"_hostNode"in e?void 0:u("35"),"_hostNode"in t?void 0:u("35");for(;t;){if(t===e)return!0;t=t._hostParent}return!1}function a(e){return"_hostNode"in e?void 0:u("36"),e._hostParent}function i(e,t,n){for(var o=[];e;)o.push(e),e=e._hostParent;var r;for(r=o.length;r-- >0;)t(o[r],!1,n);for(r=0;r<o.length;r++)t(o[r],!0,n)}function s(e,t,n,r,a){for(var i=e&&t?o(e,t):null,s=[];e&&e!==i;)s.push(e),e=e._hostParent;for(var u=[];t&&t!==i;)u.push(t),t=t._hostParent;var l;for(l=0;l<s.length;l++)n(s[l],!0,r);for(l=u.length;l-- >0;)n(u[l],!1,a)}var u=n(2);n(1),e.exports={isAncestor:r,getLowestCommonAncestor:o,getParentInstance:a,traverseTwoPhase:i,traverseEnterLeave:s}},function(e,t,n){"use strict";function o(){this.reinitializeTransaction()}var r=n(4),a=n(14),i=n(27),s=n(12),u={initialize:s,close:function(){d.isBatchingUpdates=!1}},l={initialize:s,close:a.flushBatchedUpdates.bind(a)},c=[l,u];r(o.prototype,i.Mixin,{getTransactionWrappers:function(){return c}});var p=new o,d={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,o,r,a){var i=d.isBatchingUpdates;d.isBatchingUpdates=!0,i?e(t,n,o,r,a):p.perform(e,null,t,n,o,r,a)}};e.exports=d},function(e,t,n){"use strict";function o(){w||(w=!0,v.EventEmitter.injectReactEventListener(g),v.EventPluginHub.injectEventPluginOrder(i),v.EventPluginUtils.injectComponentTree(p),v.EventPluginUtils.injectTreeTraversal(h),v.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:E,EnterLeaveEventPlugin:s,ChangeEventPlugin:a,SelectEventPlugin:C,BeforeInputEventPlugin:r}),v.HostComponent.injectGenericComponentClass(c),v.HostComponent.injectTextComponentClass(f),v.DOMProperty.injectDOMPropertyConfig(u),v.DOMProperty.injectDOMPropertyConfig(b),v.EmptyComponent.injectEmptyComponentFactory(function(e){return new d(e)}),v.Updates.injectReconcileTransaction(y),v.Updates.injectBatchingStrategy(m),v.Component.injectEnvironment(l))}var r=n(102),a=n(104),i=n(106),s=n(107),u=n(109),l=n(112),c=n(116),p=n(5),d=n(118),h=n(127),f=n(125),m=n(128),g=n(131),v=n(132),y=n(137),b=n(141),C=n(142),E=n(143),w=!1;e.exports={inject:o}},function(e,t,n){"use strict";function o(e){r.enqueueEvents(e),r.processEventQueue(!1)}var r=n(23),a={handleTopLevel:function(e,t,n,a){var i=r.extractEvents(e,t,n,a);o(i)}};e.exports=a},function(e,t,n){"use strict";function o(e){for(;e._hostParent;)e=e._hostParent;var t=p.getNodeFromInstance(e),n=t.parentNode;return p.getClosestInstanceFromNode(n)}function r(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function a(e){var t=h(e.nativeEvent),n=p.getClosestInstanceFromNode(t),r=n;do e.ancestors.push(r),r=r&&o(r);while(r);for(var a=0;a<e.ancestors.length;a++)n=e.ancestors[a],m._handleTopLevel(e.topLevelType,n,e.nativeEvent,h(e.nativeEvent))}function i(e){var t=f(window);e(t)}var s=n(4),u=n(88),l=n(6),c=n(17),p=n(5),d=n(14),h=n(54),f=n(171);s(r.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),c.addPoolingTo(r,c.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:l.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var o=n;return o?u.listen(o,t,m.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var o=n;return o?u.capture(o,t,m.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=i.bind(null,e);u.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(m._enabled){var n=r.getPooled(e,t);try{d.batchedUpdates(a,n)}finally{r.release(n)}}}};e.exports=m},function(e,t,n){"use strict";var o=n(21),r=n(23),a=n(39),i=n(43),s=n(66),u=n(69),l=n(30),c=n(71),p=n(14),d={Component:i.injection,Class:s.injection,DOMProperty:o.injection,EmptyComponent:u.injection,EventPluginHub:r.injection,EventPluginUtils:a.injection,EventEmitter:l.injection,HostComponent:c.injection,Updates:p.injection};e.exports=d},function(e,t,n){"use strict";var o=n(154),r=/\/?>/,a=/^<\!\-\-/,i={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=o(e);return a.test(e)?e:e.replace(r," "+i.CHECKSUM_ATTR_NAME+'="'+t+'"$&')},canReuseMarkup:function(e,t){var n=t.getAttribute(i.CHECKSUM_ATTR_NAME);n=n&&parseInt(n,10);var r=o(e);return r===n}};e.exports=i},function(e,t,n){"use strict";function o(e,t,n){return{type:d.INSERT_MARKUP,content:e,fromIndex:null,fromNode:null,toIndex:n,afterNode:t}}function r(e,t,n){return{type:d.MOVE_EXISTING,content:null,fromIndex:e._mountIndex,fromNode:h.getHostNode(e),toIndex:n,afterNode:t}}function a(e,t){return{type:d.REMOVE_NODE,content:null,fromIndex:e._mountIndex,fromNode:t,toIndex:null,afterNode:null}}function i(e){return{type:d.SET_MARKUP,content:e,fromIndex:null,fromNode:null,toIndex:null,afterNode:null}}function s(e){return{type:d.TEXT_CONTENT,content:e,fromIndex:null,fromNode:null,toIndex:null,afterNode:null}}function u(e,t){return t&&(e=e||[],e.push(t)),e}function l(e,t){p.processChildrenUpdates(e,t)}var c=n(2),p=n(43),d=(n(25),n(11),n(74)),h=(n(18),n(22)),f=n(111),m=(n(12),n(158)),g=(n(1),{Mixin:{_reconcilerInstantiateChildren:function(e,t,n){return f.instantiateChildren(e,t,n)},_reconcilerUpdateChildren:function(e,t,n,o,r,a){var i,s=0;return i=m(t,s),f.updateChildren(e,i,n,o,r,this,this._hostContainerInfo,a,s),i},mountChildren:function(e,t,n){var o=this._reconcilerInstantiateChildren(e,t,n);this._renderedChildren=o;var r=[],a=0;for(var i in o)if(o.hasOwnProperty(i)){var s=o[i],u=0,l=h.mountComponent(s,t,this,this._hostContainerInfo,n,u);s._mountIndex=a++,r.push(l)}return r},updateTextContent:function(e){var t=this._renderedChildren;f.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&c("118");var o=[s(e)];l(this,o)},updateMarkup:function(e){var t=this._renderedChildren;f.unmountChildren(t,!1);for(var n in t)t.hasOwnProperty(n)&&c("118");var o=[i(e)];l(this,o)},updateChildren:function(e,t,n){this._updateChildren(e,t,n)},_updateChildren:function(e,t,n){var o=this._renderedChildren,r={},a=[],i=this._reconcilerUpdateChildren(o,e,a,r,t,n);if(i||o){var s,c=null,p=0,d=0,f=0,m=null;for(s in i)if(i.hasOwnProperty(s)){var g=o&&o[s],v=i[s];g===v?(c=u(c,this.moveChild(g,m,p,d)),d=Math.max(g._mountIndex,d),g._mountIndex=p):(g&&(d=Math.max(g._mountIndex,d)),c=u(c,this._mountChildAtIndex(v,a[f],m,p,t,n)),f++),p++,m=h.getHostNode(v)}for(s in r)r.hasOwnProperty(s)&&(c=u(c,this._unmountChild(o[s],r[s])));c&&l(this,c),this._renderedChildren=i}},unmountChildren:function(e){var t=this._renderedChildren;f.unmountChildren(t,e),this._renderedChildren=null},moveChild:function(e,t,n,o){if(e._mountIndex<o)return r(e,t,n)},createChild:function(e,t,n){return o(n,t,e._mountIndex)},removeChild:function(e,t){return a(e,t)},_mountChildAtIndex:function(e,t,n,o,r,a){return e._mountIndex=o,this.createChild(e,n,t)},_unmountChild:function(e,t){var n=this.removeChild(e,t);return e._mountIndex=null,n}}});e.exports=g},function(e,t,n){"use strict";var o=n(2),r=(n(1),{isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,n){r.isValidOwner(n)?void 0:o("119"),n.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,n){r.isValidOwner(n)?void 0:o("120");var a=n.getPublicInstance();a&&a.refs[t]===e.getPublicInstance()&&n.detachRef(t)}});e.exports=r},function(e,t,n){"use strict";function o(e,t,n){this.props=e,this.context=t,this.refs=u,this.updater=n||s}function r(){}var a=n(4),i=n(42),s=n(46),u=n(28);r.prototype=i.prototype,o.prototype=new r,o.prototype.constructor=o,a(o.prototype,i.prototype),o.prototype.isPureReactComponent=!0,e.exports=o},function(e,t,n){"use strict";function o(e){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=a.getPooled(null),this.useCreateElement=e}var r=n(4),a=n(63),i=n(17),s=n(30),u=n(72),l=(n(11),n(27)),c=n(50),p={initialize:u.getSelectionInformation,close:u.restoreSelection},d={initialize:function(){var e=s.isEnabled();return s.setEnabled(!1),e},close:function(e){s.setEnabled(e)}},h={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f=[p,d,h],m={getTransactionWrappers:function(){return f},getReactMountReady:function(){return this.reactMountReady},getUpdateQueue:function(){return c},checkpoint:function(){return this.reactMountReady.checkpoint()},rollback:function(e){this.reactMountReady.rollback(e)},destructor:function(){a.release(this.reactMountReady),this.reactMountReady=null}};r(o.prototype,l.Mixin,m),i.addPoolingTo(o),e.exports=o},function(e,t,n){"use strict";function o(e,t,n){"function"==typeof e?e(t.getPublicInstance()):a.addComponentAsRefTo(t,e,n)}function r(e,t,n){"function"==typeof e?e(null):a.removeComponentAsRefFrom(t,e,n)}var a=n(135),i={};i.attachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&o(n,e,t._owner)}},i.shouldUpdateRefs=function(e,t){var n=null===e||e===!1,o=null===t||t===!1;return n||o||t.ref!==e.ref||"string"==typeof t.ref&&t._owner!==e._owner},i.detachRefs=function(e,t){if(null!==t&&t!==!1){var n=t.ref;null!=n&&r(n,e,t._owner)}},e.exports=i},function(e,t,n){"use strict";function o(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.useCreateElement=!1,this.updateQueue=new s(this)}var r=n(4),a=n(17),i=n(27),s=(n(11),n(140)),u=[],l={enqueue:function(){}},c={getTransactionWrappers:function(){return u},getReactMountReady:function(){return l},getUpdateQueue:function(){return this.updateQueue},destructor:function(){},checkpoint:function(){},rollback:function(){}};r(o.prototype,i.Mixin,c),a.addPoolingTo(o),e.exports=o},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){}var a=n(50),i=(n(27),n(3),function(){function e(t){o(this,e),this.transaction=t}return e.prototype.isMounted=function(e){return!1},e.prototype.enqueueCallback=function(e,t,n){this.transaction.isInTransaction()&&a.enqueueCallback(e,t,n)},e.prototype.enqueueForceUpdate=function(e){this.transaction.isInTransaction()?a.enqueueForceUpdate(e):r(e,"forceUpdate")},e.prototype.enqueueReplaceState=function(e,t){this.transaction.isInTransaction()?a.enqueueReplaceState(e,t):r(e,"replaceState")},e.prototype.enqueueSetState=function(e,t){this.transaction.isInTransaction()?a.enqueueSetState(e,t):r(e,"setState")},e}());e.exports=i},function(e,t){"use strict";var n={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"},o={accentHeight:"accent-height",accumulate:0,additive:0,alignmentBaseline:"alignment-baseline",allowReorder:"allowReorder",alphabetic:0,amplitude:0,arabicForm:"arabic-form",ascent:0,attributeName:"attributeName",attributeType:"attributeType",autoReverse:"autoReverse",azimuth:0,baseFrequency:"baseFrequency",baseProfile:"baseProfile",baselineShift:"baseline-shift",bbox:0,begin:0,bias:0,by:0,calcMode:"calcMode",capHeight:"cap-height",clip:0,clipPath:"clip-path",clipRule:"clip-rule",clipPathUnits:"clipPathUnits",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",contentScriptType:"contentScriptType",contentStyleType:"contentStyleType",cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:"diffuseConstant",direction:0,display:0,divisor:0,dominantBaseline:"dominant-baseline",dur:0,dx:0,dy:0,edgeMode:"edgeMode",elevation:0,enableBackground:"enable-background",end:0,exponent:0,externalResourcesRequired:"externalResourcesRequired",fill:0,fillOpacity:"fill-opacity",fillRule:"fill-rule",filter:0,filterRes:"filterRes",filterUnits:"filterUnits",floodColor:"flood-color",floodOpacity:"flood-opacity",focusable:0,fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",glyphRef:"glyphRef",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",hanging:0,horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",ideographic:0,imageRendering:"image-rendering","in":0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:"kernelMatrix",kernelUnitLength:"kernelUnitLength",kerning:0,keyPoints:"keyPoints",keySplines:"keySplines",keyTimes:"keyTimes",lengthAdjust:"lengthAdjust",letterSpacing:"letter-spacing",lightingColor:"lighting-color",limitingConeAngle:"limitingConeAngle",local:0,markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",markerHeight:"markerHeight",markerUnits:"markerUnits",markerWidth:"markerWidth",mask:0,maskContentUnits:"maskContentUnits",maskUnits:"maskUnits",mathematical:0,mode:0,numOctaves:"numOctaves",offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pathLength:"pathLength",patternContentUnits:"patternContentUnits",patternTransform:"patternTransform",patternUnits:"patternUnits",pointerEvents:"pointer-events",points:0,pointsAtX:"pointsAtX",pointsAtY:"pointsAtY",pointsAtZ:"pointsAtZ",preserveAlpha:"preserveAlpha",preserveAspectRatio:"preserveAspectRatio",primitiveUnits:"primitiveUnits",r:0,radius:0,refX:"refX",refY:"refY",renderingIntent:"rendering-intent",repeatCount:"repeatCount",repeatDur:"repeatDur",requiredExtensions:"requiredExtensions",requiredFeatures:"requiredFeatures",restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:"shape-rendering",slope:0,spacing:0,specularConstant:"specularConstant",specularExponent:"specularExponent",speed:0,spreadMethod:"spreadMethod",startOffset:"startOffset",stdDeviation:"stdDeviation",stemh:0,stemv:0,stitchTiles:"stitchTiles",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",string:0,stroke:0,strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",surfaceScale:"surfaceScale",systemLanguage:"systemLanguage",tableValues:"tableValues",targetX:"targetX",targetY:"targetY",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",textLength:"textLength",to:0,transform:0,u1:0,u2:0,underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicode:0,unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",values:0,vectorEffect:"vector-effect",version:0,vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",viewBox:"viewBox",viewTarget:"viewTarget",visibility:0,widths:0,wordSpacing:"word-spacing",writingMode:"writing-mode",x:0,xHeight:"x-height",x1:0,x2:0,xChannelSelector:"xChannelSelector",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlns:0,xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space",y:0,y1:0,y2:0,yChannelSelector:"yChannelSelector",z:0,zoomAndPan:"zoomAndPan"},r={Properties:{},DOMAttributeNamespaces:{xlinkActuate:n.xlink,xlinkArcrole:n.xlink,xlinkHref:n.xlink,xlinkRole:n.xlink,xlinkShow:n.xlink,xlinkTitle:n.xlink,xlinkType:n.xlink,xmlBase:n.xml,xmlLang:n.xml,xmlSpace:n.xml},DOMAttributeNames:{}};Object.keys(o).forEach(function(e){r.Properties[e]=0,o[e]&&(r.DOMAttributeNames[e]=o[e])}),e.exports=r},function(e,t,n){"use strict";function o(e){if("selectionStart"in e&&l.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function r(e,t){if(E||null==y||y!==p())return null;var n=o(y);if(!C||!f(C,n)){C=n;var r=c.getPooled(v.select,b,e,t);return r.type="select",r.target=y,i.accumulateTwoPhaseDispatches(r),r}return null}var a=n(15),i=n(24),s=n(6),u=n(5),l=n(72),c=n(16),p=n(90),d=n(86),h=n(19),f=n(59),m=a.topLevelTypes,g=s.canUseDOM&&"documentMode"in document&&document.documentMode<=11,v={select:{phasedRegistrationNames:{bubbled:h({onSelect:null}),captured:h({onSelectCapture:null})},dependencies:[m.topBlur,m.topContextMenu,m.topFocus,m.topKeyDown,m.topKeyUp,m.topMouseDown,m.topMouseUp,m.topSelectionChange]}},y=null,b=null,C=null,E=!1,w=!1,_=h({
onSelect:null}),x={eventTypes:v,extractEvents:function(e,t,n,o){if(!w)return null;var a=t?u.getNodeFromInstance(t):window;switch(e){case m.topFocus:(d(a)||"true"===a.contentEditable)&&(y=a,b=t,C=null);break;case m.topBlur:y=null,b=null,C=null;break;case m.topMouseDown:E=!0;break;case m.topContextMenu:case m.topMouseUp:return E=!1,r(n,o);case m.topSelectionChange:if(g)break;case m.topKeyDown:case m.topKeyUp:return r(n,o)}return null},didPutListener:function(e,t,n){t===_&&(w=!0)}};e.exports=x},function(e,t,n){"use strict";function o(e){return"."+e._rootNodeID}var r=n(2),a=n(15),i=n(88),s=n(24),u=n(5),l=n(144),c=n(145),p=n(16),d=n(148),h=n(150),f=n(31),m=n(147),g=n(151),v=n(152),y=n(26),b=n(153),C=n(12),E=n(52),w=(n(1),n(19)),_=a.topLevelTypes,x={abort:{phasedRegistrationNames:{bubbled:w({onAbort:!0}),captured:w({onAbortCapture:!0})}},animationEnd:{phasedRegistrationNames:{bubbled:w({onAnimationEnd:!0}),captured:w({onAnimationEndCapture:!0})}},animationIteration:{phasedRegistrationNames:{bubbled:w({onAnimationIteration:!0}),captured:w({onAnimationIterationCapture:!0})}},animationStart:{phasedRegistrationNames:{bubbled:w({onAnimationStart:!0}),captured:w({onAnimationStartCapture:!0})}},blur:{phasedRegistrationNames:{bubbled:w({onBlur:!0}),captured:w({onBlurCapture:!0})}},canPlay:{phasedRegistrationNames:{bubbled:w({onCanPlay:!0}),captured:w({onCanPlayCapture:!0})}},canPlayThrough:{phasedRegistrationNames:{bubbled:w({onCanPlayThrough:!0}),captured:w({onCanPlayThroughCapture:!0})}},click:{phasedRegistrationNames:{bubbled:w({onClick:!0}),captured:w({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:w({onContextMenu:!0}),captured:w({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:w({onCopy:!0}),captured:w({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:w({onCut:!0}),captured:w({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:w({onDoubleClick:!0}),captured:w({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:w({onDrag:!0}),captured:w({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:w({onDragEnd:!0}),captured:w({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:w({onDragEnter:!0}),captured:w({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:w({onDragExit:!0}),captured:w({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:w({onDragLeave:!0}),captured:w({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:w({onDragOver:!0}),captured:w({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:w({onDragStart:!0}),captured:w({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:w({onDrop:!0}),captured:w({onDropCapture:!0})}},durationChange:{phasedRegistrationNames:{bubbled:w({onDurationChange:!0}),captured:w({onDurationChangeCapture:!0})}},emptied:{phasedRegistrationNames:{bubbled:w({onEmptied:!0}),captured:w({onEmptiedCapture:!0})}},encrypted:{phasedRegistrationNames:{bubbled:w({onEncrypted:!0}),captured:w({onEncryptedCapture:!0})}},ended:{phasedRegistrationNames:{bubbled:w({onEnded:!0}),captured:w({onEndedCapture:!0})}},error:{phasedRegistrationNames:{bubbled:w({onError:!0}),captured:w({onErrorCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:w({onFocus:!0}),captured:w({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:w({onInput:!0}),captured:w({onInputCapture:!0})}},invalid:{phasedRegistrationNames:{bubbled:w({onInvalid:!0}),captured:w({onInvalidCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:w({onKeyDown:!0}),captured:w({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:w({onKeyPress:!0}),captured:w({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:w({onKeyUp:!0}),captured:w({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:w({onLoad:!0}),captured:w({onLoadCapture:!0})}},loadedData:{phasedRegistrationNames:{bubbled:w({onLoadedData:!0}),captured:w({onLoadedDataCapture:!0})}},loadedMetadata:{phasedRegistrationNames:{bubbled:w({onLoadedMetadata:!0}),captured:w({onLoadedMetadataCapture:!0})}},loadStart:{phasedRegistrationNames:{bubbled:w({onLoadStart:!0}),captured:w({onLoadStartCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:w({onMouseDown:!0}),captured:w({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:w({onMouseMove:!0}),captured:w({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:w({onMouseOut:!0}),captured:w({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:w({onMouseOver:!0}),captured:w({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:w({onMouseUp:!0}),captured:w({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:w({onPaste:!0}),captured:w({onPasteCapture:!0})}},pause:{phasedRegistrationNames:{bubbled:w({onPause:!0}),captured:w({onPauseCapture:!0})}},play:{phasedRegistrationNames:{bubbled:w({onPlay:!0}),captured:w({onPlayCapture:!0})}},playing:{phasedRegistrationNames:{bubbled:w({onPlaying:!0}),captured:w({onPlayingCapture:!0})}},progress:{phasedRegistrationNames:{bubbled:w({onProgress:!0}),captured:w({onProgressCapture:!0})}},rateChange:{phasedRegistrationNames:{bubbled:w({onRateChange:!0}),captured:w({onRateChangeCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:w({onReset:!0}),captured:w({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:w({onScroll:!0}),captured:w({onScrollCapture:!0})}},seeked:{phasedRegistrationNames:{bubbled:w({onSeeked:!0}),captured:w({onSeekedCapture:!0})}},seeking:{phasedRegistrationNames:{bubbled:w({onSeeking:!0}),captured:w({onSeekingCapture:!0})}},stalled:{phasedRegistrationNames:{bubbled:w({onStalled:!0}),captured:w({onStalledCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:w({onSubmit:!0}),captured:w({onSubmitCapture:!0})}},suspend:{phasedRegistrationNames:{bubbled:w({onSuspend:!0}),captured:w({onSuspendCapture:!0})}},timeUpdate:{phasedRegistrationNames:{bubbled:w({onTimeUpdate:!0}),captured:w({onTimeUpdateCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:w({onTouchCancel:!0}),captured:w({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:w({onTouchEnd:!0}),captured:w({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:w({onTouchMove:!0}),captured:w({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:w({onTouchStart:!0}),captured:w({onTouchStartCapture:!0})}},transitionEnd:{phasedRegistrationNames:{bubbled:w({onTransitionEnd:!0}),captured:w({onTransitionEndCapture:!0})}},volumeChange:{phasedRegistrationNames:{bubbled:w({onVolumeChange:!0}),captured:w({onVolumeChangeCapture:!0})}},waiting:{phasedRegistrationNames:{bubbled:w({onWaiting:!0}),captured:w({onWaitingCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:w({onWheel:!0}),captured:w({onWheelCapture:!0})}}},T={topAbort:x.abort,topAnimationEnd:x.animationEnd,topAnimationIteration:x.animationIteration,topAnimationStart:x.animationStart,topBlur:x.blur,topCanPlay:x.canPlay,topCanPlayThrough:x.canPlayThrough,topClick:x.click,topContextMenu:x.contextMenu,topCopy:x.copy,topCut:x.cut,topDoubleClick:x.doubleClick,topDrag:x.drag,topDragEnd:x.dragEnd,topDragEnter:x.dragEnter,topDragExit:x.dragExit,topDragLeave:x.dragLeave,topDragOver:x.dragOver,topDragStart:x.dragStart,topDrop:x.drop,topDurationChange:x.durationChange,topEmptied:x.emptied,topEncrypted:x.encrypted,topEnded:x.ended,topError:x.error,topFocus:x.focus,topInput:x.input,topInvalid:x.invalid,topKeyDown:x.keyDown,topKeyPress:x.keyPress,topKeyUp:x.keyUp,topLoad:x.load,topLoadedData:x.loadedData,topLoadedMetadata:x.loadedMetadata,topLoadStart:x.loadStart,topMouseDown:x.mouseDown,topMouseMove:x.mouseMove,topMouseOut:x.mouseOut,topMouseOver:x.mouseOver,topMouseUp:x.mouseUp,topPaste:x.paste,topPause:x.pause,topPlay:x.play,topPlaying:x.playing,topProgress:x.progress,topRateChange:x.rateChange,topReset:x.reset,topScroll:x.scroll,topSeeked:x.seeked,topSeeking:x.seeking,topStalled:x.stalled,topSubmit:x.submit,topSuspend:x.suspend,topTimeUpdate:x.timeUpdate,topTouchCancel:x.touchCancel,topTouchEnd:x.touchEnd,topTouchMove:x.touchMove,topTouchStart:x.touchStart,topTransitionEnd:x.transitionEnd,topVolumeChange:x.volumeChange,topWaiting:x.waiting,topWheel:x.wheel};for(var N in T)T[N].dependencies=[N];var S=w({onClick:null}),P={},k={eventTypes:x,extractEvents:function(e,t,n,o){var a=T[e];if(!a)return null;var i;switch(e){case _.topAbort:case _.topCanPlay:case _.topCanPlayThrough:case _.topDurationChange:case _.topEmptied:case _.topEncrypted:case _.topEnded:case _.topError:case _.topInput:case _.topInvalid:case _.topLoad:case _.topLoadedData:case _.topLoadedMetadata:case _.topLoadStart:case _.topPause:case _.topPlay:case _.topPlaying:case _.topProgress:case _.topRateChange:case _.topReset:case _.topSeeked:case _.topSeeking:case _.topStalled:case _.topSubmit:case _.topSuspend:case _.topTimeUpdate:case _.topVolumeChange:case _.topWaiting:i=p;break;case _.topKeyPress:if(0===E(n))return null;case _.topKeyDown:case _.topKeyUp:i=h;break;case _.topBlur:case _.topFocus:i=d;break;case _.topClick:if(2===n.button)return null;case _.topContextMenu:case _.topDoubleClick:case _.topMouseDown:case _.topMouseMove:case _.topMouseOut:case _.topMouseOver:case _.topMouseUp:i=f;break;case _.topDrag:case _.topDragEnd:case _.topDragEnter:case _.topDragExit:case _.topDragLeave:case _.topDragOver:case _.topDragStart:case _.topDrop:i=m;break;case _.topTouchCancel:case _.topTouchEnd:case _.topTouchMove:case _.topTouchStart:i=g;break;case _.topAnimationEnd:case _.topAnimationIteration:case _.topAnimationStart:i=l;break;case _.topTransitionEnd:i=v;break;case _.topScroll:i=y;break;case _.topWheel:i=b;break;case _.topCopy:case _.topCut:case _.topPaste:i=c}i?void 0:r("86",e);var u=i.getPooled(a,t,n,o);return s.accumulateTwoPhaseDispatches(u),u},didPutListener:function(e,t,n){if(t===S){var r=o(e),a=u.getNodeFromInstance(e);P[r]||(P[r]=i.listen(a,"click",C))}},willDeleteListener:function(e,t){if(t===S){var n=o(e);P[n].remove(),delete P[n]}}};e.exports=k},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(16),a={animationName:null,elapsedTime:null,pseudoElement:null};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(16),a={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(16),a={data:null};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(31),a={dataTransfer:null};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(26),a={relatedTarget:null};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(16),a={data:null};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(26),a=n(52),i=n(159),s=n(53),u={key:i,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:s,charCode:function(e){return"keypress"===e.type?a(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?a(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};r.augmentClass(o,u),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(26),a=n(53),i={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:a};r.augmentClass(o,i),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(16),a={propertyName:null,elapsedTime:null,pseudoElement:null};r.augmentClass(o,a),e.exports=o},function(e,t,n){"use strict";function o(e,t,n,o){return r.call(this,e,t,n,o)}var r=n(31),a={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};r.augmentClass(o,a),e.exports=o},function(e,t){"use strict";function n(e){for(var t=1,n=0,r=0,a=e.length,i=a&-4;r<i;){for(var s=Math.min(r+4096,i);r<s;r+=4)n+=(t+=e.charCodeAt(r))+(t+=e.charCodeAt(r+1))+(t+=e.charCodeAt(r+2))+(t+=e.charCodeAt(r+3));t%=o,n%=o}for(;r<a;r++)n+=t+=e.charCodeAt(r);return t%=o,n%=o,t|n<<16}var o=65521;e.exports=n},function(e,t,n){(function(t){"use strict";function o(e,t,n,o,u,l){for(var c in e)if(e.hasOwnProperty(c)){var p;try{"function"!=typeof e[c]?r("84",o||"React class",a[n],c):void 0,p=e[c](t,c,o,n,null,i)}catch(d){p=d}p instanceof Error&&!(p.message in s)&&(s[p.message]=!0)}}var r=n(2),a=n(47),i=n(49),s=(n(1),n(3),{});e.exports=o}).call(t,n(60))},function(e,t,n){"use strict";function o(e,t,n){var o=null==t||"boolean"==typeof t||""===t;if(o)return"";var r=isNaN(t);return r||0===t||a.hasOwnProperty(e)&&a[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var r=n(62),a=(n(3),r.isUnitlessNumber);e.exports=o},function(e,t,n){"use strict";function o(e){if(null==e)return null;if(1===e.nodeType)return e;var t=i.get(e);return t?(t=s(t),t?a.getNodeFromInstance(t):null):void("function"==typeof e.render?r("44"):r("45",Object.keys(e)))}var r=n(2),a=(n(18),n(5)),i=n(25),s=n(82);n(1),n(3),e.exports=o},function(e,t,n){(function(t){"use strict";function o(e,t,n,o){if(e&&"object"==typeof e){var r=e,a=void 0===r[n];a&&null!=t&&(r[n]=t)}}function r(e,t){if(null==e)return e;var n={};return a(e,o,n),n}var a=(n(40),n(57));n(3),e.exports=r}).call(t,n(60))},function(e,t,n){"use strict";function o(e){if(e.key){var t=a[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=r(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?i[e.keyCode]||"Unidentified":""}var r=n(52),a={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};e.exports=o},function(e,t){"use strict";function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function o(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function r(e,t){for(var r=n(e),a=0,i=0;r;){if(3===r.nodeType){if(i=a+r.textContent.length,a<=t&&i>=t)return{node:r,offset:t-a};a=i}r=n(o(r))}}e.exports=r},function(e,t,n){"use strict";function o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n["ms"+e]="MS"+t,n["O"+e]="o"+t.toLowerCase(),n}function r(e){if(s[e])return s[e];if(!i[e])return e;var t=i[e];for(var n in t)if(t.hasOwnProperty(n)&&n in u)return s[e]=t[n];return""}var a=n(6),i={animationend:o("Animation","AnimationEnd"),animationiteration:o("Animation","AnimationIteration"),animationstart:o("Animation","AnimationStart"),transitionend:o("Transition","TransitionEnd")},s={},u={};a.canUseDOM&&(u=document.createElement("div").style,"AnimationEvent"in window||(delete i.animationend.animation,delete i.animationiteration.animation,delete i.animationstart.animation),"TransitionEvent"in window||delete i.transitionend.transition),e.exports=r},function(e,t,n){"use strict";function o(e){return a.isValidElement(e)?void 0:r("143"),e}var r=n(2),a=n(13);n(1),e.exports=o},function(e,t,n){"use strict";function o(e){return'"'+r(e)+'"'}var r=n(32);e.exports=o},function(e,t,n){"use strict";var o=n(73);e.exports=o.renderSubtreeIntoContainer},function(e,t){"use strict";function n(e){return e.replace(o,function(e,t){return t.toUpperCase()})}var o=/-(.)/g;e.exports=n},function(e,t,n){"use strict";function o(e){return r(e.replace(a,"ms-"))}var r=n(165),a=/^-ms-/;e.exports=o},function(e,t,n){"use strict";function o(e,t){return!(!e||!t)&&(e===t||!r(e)&&(r(t)?o(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}var r=n(175);e.exports=o},function(e,t,n){"use strict";function o(e){var t=e.length;if(Array.isArray(e)||"object"!=typeof e&&"function"!=typeof e?i(!1):void 0,"number"!=typeof t?i(!1):void 0,0===t||t-1 in e?void 0:i(!1),"function"==typeof e.callee?i(!1):void 0,e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var o=Array(t),r=0;r<t;r++)o[r]=e[r];return o}function r(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function a(e){return r(e)?Array.isArray(e)?e.slice():o(e):[e]}var i=n(1);e.exports=a},function(e,t,n){"use strict";function o(e){var t=e.match(c);return t&&t[1].toLowerCase()}function r(e,t){var n=l;l?void 0:u(!1);var r=o(e),a=r&&s(r);if(a){n.innerHTML=a[1]+e+a[2];for(var c=a[0];c--;)n=n.lastChild}else n.innerHTML=e;var p=n.getElementsByTagName("script");p.length&&(t?void 0:u(!1),i(p).forEach(t));for(var d=Array.from(n.childNodes);n.lastChild;)n.removeChild(n.lastChild);return d}var a=n(6),i=n(168),s=n(170),u=n(1),l=a.canUseDOM?document.createElement("div"):null,c=/^\s*<(\w+)/;e.exports=r},function(e,t,n){"use strict";function o(e){return i?void 0:a(!1),d.hasOwnProperty(e)||(e="*"),s.hasOwnProperty(e)||("*"===e?i.innerHTML="<link />":i.innerHTML="<"+e+"></"+e+">",s[e]=!i.firstChild),s[e]?d[e]:null}var r=n(6),a=n(1),i=r.canUseDOM?document.createElement("div"):null,s={},u=[1,'<select multiple="true">',"</select>"],l=[1,"<table>","</table>"],c=[3,"<table><tbody><tr>","</tr></tbody></table>"],p=[1,'<svg xmlns="http://www.w3.org/2000/svg">',"</svg>"],d={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:u,option:u,caption:l,colgroup:l,tbody:l,tfoot:l,thead:l,td:c,th:c},h=["circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","text","tspan"];h.forEach(function(e){d[e]=p,s[e]=!0}),e.exports=o},function(e,t){"use strict";function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}e.exports=n},function(e,t){"use strict";function n(e){return e.replace(o,"-$1").toLowerCase()}var o=/([A-Z])/g;e.exports=n},function(e,t,n){"use strict";function o(e){return r(e).replace(a,"-ms-")}var r=n(172),a=/^ms-/;e.exports=o},function(e,t){"use strict";function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}e.exports=n},function(e,t,n){"use strict";function o(e){return r(e)&&3==e.nodeType}var r=n(174);e.exports=o},function(e,t){"use strict";function n(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}e.exports=n},function(e,t){var n={};n.SQL_USER="cyoag",n.SQL_PASS="^cy0cy0Acer",n.FB_APP_ID="1186913218035172",n.FB_APP_SECRET="c035050ae6fd804546324a10aa49b304",n.TW_KEY="uvhrxDCLSVNlyLGgHGwCBzxqT",n.TW_SECRET="M5WEIkyStvKQ2zkJbXZyxoc1g9FIV7MphTimpJmNJWgW0rzVgy",n.captchaSecretKey="6Ld4NhAUAAAAACAsPRLbmUQQlZPW7j6VtRKMhALP",n.emailAcct="cyoag.steve",n.emailPass="^g0cy0Acer",n.httpsPrivKeyLocation="/etc/letsencrypt/live/cyoag.com/privkey.pem",n.httpsFullChainLocation="/etc/letsencrypt/live/cyoag.com/fullchain.pem",n.httpsChainLocation="/etc/letsencrypt/live/cyoag.com/chain.pem",n.httpsPrivKeyLocation_local="./digital-ocean/server.key",n.httpsFullChainLocation_local="./digital-ocean/server.crt",n.httpsChainLocation_local="./digital-ocean/server.crt",e.exports=n},function(e,t){function n(e,t){return Math.floor(Math.random()*(t-e))+e}function o(){for(var e=[],t=5+n(5,11),o=t+n(5,11),a=o+n(5,11),i=0;i<40;i++)if(i==t||i==o||i==a)e.push("-");else{var s=n(0,62);e.push(r.charAt(s))}var u=e.join("");return console.log("Made uid of length "+u.length+": "+u),u}var r="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";e.exports=o}]);
>>>>>>> working
