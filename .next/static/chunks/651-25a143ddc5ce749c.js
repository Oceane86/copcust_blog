"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[651],{98180:function(e,t,n){n.d(t,{Z:function(){return c}});var i=n(74444),r=n(8463),a=n(25816),o=n(53333);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s{constructor(e,t){this._delegate=e,this.firebase=t,(0,a._addComponent)(e,new r.wA("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),(0,a.deleteApp)(this._delegate)))}_getService(e,t=a._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();let i=this._delegate.container.getProvider(e);return i.isInitialized()||(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)!=="EXPLICIT"||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=a._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,a._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,a._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let l=new i.LL("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."}),d=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e(){let t=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t={},n={__esModule:!0,initializeApp:function(r,o={}){let s=a.initializeApp(r,o);if((0,i.r3)(t,s.name))return t[s.name];let l=new e(s,n);return t[s.name]=l,l},app:r,registerVersion:a.registerVersion,setLogLevel:a.setLogLevel,onLog:a.onLog,apps:null,SDK_VERSION:a.SDK_VERSION,INTERNAL:{registerComponent:function(t){let o=t.name,s=o.replace("-compat","");if(a._registerComponent(t)&&"PUBLIC"===t.type){let a=(e=r())=>{if("function"!=typeof e[s])throw l.create("invalid-app-argument",{appName:o});return e[s]()};void 0!==t.serviceProps&&(0,i.ZB)(a,t.serviceProps),n[s]=a,e.prototype[s]=function(...e){return this._getService.bind(this,o).apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[s]:null},removeApp:function(e){delete t[e]},useAsService:function(e,t){return"serverAuth"===t?null:t},modularAPIs:a}};function r(e){if(e=e||a._DEFAULT_ENTRY_NAME,!(0,i.r3)(t,e))throw l.create("no-app",{appName:e});return t[e]}return n.default=n,Object.defineProperty(n,"apps",{get:function(){return Object.keys(t).map(e=>t[e])}}),r.App=e,n}(s);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,i.ZB)(t,e)},createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),t}(),u=new o.Yd("@firebase/app-compat");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){u.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);let e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&u.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}let c=d;(0,a.registerVersion)("@firebase/app-compat","0.2.35",void 0)},44866:function(e,t,n){n.d(t,{Z:function(){return i.Z}});var i=n(98180);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i.Z.registerVersion("firebase","10.12.2","app-compat")},91041:function(e,t,n){var i,r=n(98180),a=n(86779),o=n(74444);n(25816),n(53333);var s=n(8463);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return window}async function d(e,t,n){var i;let{BuildInfo:r}=l();(0,a.au)(t.sessionId,"AuthEvent did not contain a session ID");let o=await h(t.sessionId),s={};return(0,a.av)()?s.ibi=r.packageName:(0,a.aw)()?s.apn=r.packageName:(0,a.ax)(e,"operation-not-supported-in-this-environment"),r.displayName&&(s.appDisplayName=r.displayName),s.sessionId=o,(0,a.ay)(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,s)}async function u(e){let{BuildInfo:t}=l(),n={};(0,a.av)()?n.iosBundleId=t.packageName:(0,a.aw)()?n.androidPackageName=t.packageName:(0,a.ax)(e,"operation-not-supported-in-this-environment"),await (0,a.az)(e,n)}async function c(e,t,n){let{cordova:i}=l(),r=()=>{};try{await new Promise((o,s)=>{let l=null;function d(){var e;o();let t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"==typeof t&&t(),"function"==typeof(null==n?void 0:n.close)&&n.close()}function u(){l||(l=window.setTimeout(()=>{s((0,a.aB)(e,"redirect-cancelled-by-user"))},2e3))}function c(){(null==document?void 0:document.visibilityState)==="visible"&&u()}t.addPassiveListener(d),document.addEventListener("resume",u,!1),(0,a.aw)()&&document.addEventListener("visibilitychange",c,!1),r=()=>{t.removePassiveListener(d),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),l&&window.clearTimeout(l)}})}finally{r()}}async function h(e){let t=function(e){if((0,a.au)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return new TextEncoder().encode(e);let t=new Uint8Array(new ArrayBuffer(e.length));for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e);return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",t))).map(e=>e.toString(16).padStart(2,"0")).join("")}class p extends a.aD{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}async function g(e){let t=await v()._get(_(e));return t&&await v()._remove(_(e)),t}function v(){return(0,a.aE)(a.b)}function _(e){return(0,a.aF)("authEvent",e.config.apiKey,e.name)}function f(e){if(!(null==e?void 0:e.includes("?")))return{};let[t,...n]=e.split("?");return(0,o.zd)(n.join("?"))}class m{constructor(){this._redirectPersistence=a.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=a.aG,this._overrideRedirectResult=a.aH}async _initialize(e){let t=e._key(),n=this.eventManagers.get(t);return n||(n=new p(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){(0,a.ax)(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){!function(e){var t,n,i,r,o,s,d,u,c,h;let p=l();(0,a.aC)("function"==typeof(null===(t=null==p?void 0:p.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,a.aC)(void 0!==(null===(n=null==p?void 0:p.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,a.aC)("function"==typeof(null===(o=null===(r=null===(i=null==p?void 0:p.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===o?void 0:o.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,a.aC)("function"==typeof(null===(u=null===(d=null===(s=null==p?void 0:p.cordova)||void 0===s?void 0:s.plugins)||void 0===d?void 0:d.browsertab)||void 0===u?void 0:u.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,a.aC)("function"==typeof(null===(h=null===(c=null==p?void 0:p.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===h?void 0:h.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e);let r=await this._initialize(e);await r.initialized(),r.resetRedirect(),(0,a.aI)(),await this._originValidation(e);let o=function(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:function(){let e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<20;n++){let n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}(),postBody:null,tenantId:e.tenantId,error:(0,a.aB)(e,"no-auth-event")}}(e,n,i);await v()._set(_(e),o);let s=await d(e,o,t);return c(e,r,await function(e){let{cordova:t}=l();return new Promise(n=>{t.plugins.browsertab.isAvailable(i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,(0,a.aA)()?"_blank":"_system","location=yes"),n(r)})})}(s))}_isIframeWebStorageSupported(e,t){throw Error("Method not implemented.")}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=u(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){let{universalLinks:n,handleOpenURL:i,BuildInfo:r}=l(),o=setTimeout(async()=>{await g(e),t.onEvent(y())},500),s=async n=>{clearTimeout(o);let i=await g(e),r=null;i&&(null==n?void 0:n.url)&&(r=function(e,t){var n,i;let r=function(e){let t=f(e),n=t.link?decodeURIComponent(t.link):void 0,i=f(n).link,r=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return f(r).link||r||i||n||e}(t);if(r.includes("/__/auth/callback")){let t=f(r),o=t.firebaseError?function(e){try{return JSON.parse(e)}catch(e){return null}}(decodeURIComponent(t.firebaseError)):null,s=null===(i=null===(n=null==o?void 0:o.code)||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],l=s?(0,a.aB)(s):null;return l?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}(i,n.url)),t.onEvent(r||y())};void 0!==n&&"function"==typeof n.subscribe&&n.subscribe(null,s);let d=`${r.packageName.toLowerCase()}://`;l().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(d)&&s({url:e}),"function"==typeof i)try{i(e)}catch(e){console.error(e)}}}}function y(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,a.aB)("no-auth-event")}}function I(){var e;return(null===(e=null==self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function E(e=(0,o.z$)()){return!!(("file:"===I()||"ionic:"===I()||"capacitor:"===I())&&e.toLowerCase().match(/iphone|ipad|ipod|android/))}function w(){try{let e=self.localStorage,t=a.aN();if(e){if(e.setItem(t,"1"),e.removeItem(t),function(e=(0,o.z$)()){return(0,o.w1)()&&(null==document?void 0:document.documentMode)===11||function(e=(0,o.z$)()){return/Edge\/\d+/.test(e)}(e)}())return(0,o.hl)();return!0}}catch(e){return b()&&(0,o.hl)()}return!1}function b(){return void 0!==n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function R(){return("http:"===I()||"https:"===I()||(0,o.ru)()||E())&&!((0,o.b$)()||(0,o.UG)())&&w()&&!b()}function A(){return E()&&"undefined"!=typeof document}async function P(){return!!A()&&new Promise(e=>{let t=setTimeout(()=>{e(!1)},1e3);document.addEventListener("deviceready",()=>{clearTimeout(t),e(!0)})})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N={LOCAL:"local",NONE:"none",SESSION:"session"},C=a.aC,k="persistence";async function S(e){await e._initializationPromise;let t=L(),n=a.aF(k,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function L(){var e;try{return(null===(e="undefined"!=typeof window?window:null)||void 0===e?void 0:e.sessionStorage)||null}catch(e){return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let O=a.aC;class T{constructor(){this.browserResolver=a.aE(a.k),this.cordovaResolver=a.aE(m),this.underlyingResolver=null,this._redirectPersistence=a.a,this._completeRedirectFn=a.aG,this._overrideRedirectResult=a.aH}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return A()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return O(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;let e=await P();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}function U(e){let t;let{_tokenResponse:n}=e instanceof o.ZR?e.customData:e;if(!n)return null;if(!(e instanceof o.ZR)&&"temporaryProof"in n&&"phoneNumber"in n)return a.P.credentialFromResult(e);let i=n.providerId;if(!i||i===a.p.PASSWORD)return null;switch(i){case a.p.GOOGLE:t=a.X;break;case a.p.FACEBOOK:t=a.W;break;case a.p.GITHUB:t=a.Y;break;case a.p.TWITTER:t=a.$;break;default:let{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:l,pendingToken:d,nonce:u}=n;if(!s&&!l&&!r&&!d)return null;if(d){if(i.startsWith("saml."))return a.aQ._create(i,d);return a.N._fromParams({providerId:i,signInMethod:i,pendingToken:d,idToken:r,accessToken:s})}return new a.Z(i).credential({idToken:r,accessToken:s,rawNonce:u})}return e instanceof o.ZR?t.credentialFromError(e):t.credentialFromResult(e)}function D(e,t){return t.catch(t=>{throw t instanceof o.ZR&&function(e,t){var n;let i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if((null==t?void 0:t.code)==="auth/multi-factor-auth-required")t.resolver=new W(e,a.as(e,t));else if(i){let e=U(t);e&&(t.credential=e,t.tenantId=i.tenantId||void 0,t.email=i.email||void 0,t.phoneNumber=i.phoneNumber||void 0)}}(e,t),t}).then(e=>{let t=e.operationType,n=e.user;return{operationType:t,credential:U(e),additionalUserInfo:a.aq(e),user:M.getOrCreate(n)}})}async function F(e,t){let n=await t;return{verificationId:n.verificationId,confirm:t=>D(e,n.confirm(t))}}class W{constructor(e,t){this.resolver=t,this.auth=e.wrapped()}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return D(this.auth.unwrap(),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this._delegate=e,this.multiFactor=a.at(e)}static getOrCreate(e){return M.USER_MAP.has(e)||M.USER_MAP.set(e,new M(e)),M.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return D(this.auth,a.a2(this._delegate,e))}async linkWithPhoneNumber(e,t){return F(this.auth,a.l(this._delegate,e,t))}async linkWithPopup(e){return D(this.auth,a.d(this._delegate,e,T))}async linkWithRedirect(e){return await S(a.aJ(this.auth)),a.g(this._delegate,e,T)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return D(this.auth,a.a3(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return F(this.auth,a.r(this._delegate,e,t))}reauthenticateWithPopup(e){return D(this.auth,a.e(this._delegate,e,T))}async reauthenticateWithRedirect(e){return await S(a.aJ(this.auth)),a.h(this._delegate,e,T)}sendEmailVerification(e){return a.ag(this._delegate,e)}async unlink(e){return await a.ap(this._delegate,e),this}updateEmail(e){return a.al(this._delegate,e)}updatePassword(e){return a.am(this._delegate,e)}updatePhoneNumber(e){return a.u(this._delegate,e)}updateProfile(e){return a.ak(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return a.ah(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}M.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=a.aC;class B{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}let{apiKey:n}=e.options;V(n,"invalid-api-key",{appName:e.name}),V(n,"invalid-api-key",{appName:e.name});let i="undefined"!=typeof window?T:void 0;this._delegate=t.initialize({options:{persistence:function(e,t){let n=function(e,t){let n=L();if(!n)return[];let i=a.aF(k,e,t);switch(n.getItem(i)){case N.NONE:return[a.U];case N.LOCAL:return[a.i,a.a];case N.SESSION:return[a.a];default:return[]}}(e,t);if("undefined"==typeof self||n.includes(a.i)||n.push(a.i),"undefined"!=typeof window)for(let e of[a.b,a.a])n.includes(e)||n.push(e);return n.includes(a.U)||n.push(a.U),n}(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(a.G),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?M.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){a.K(this._delegate,e,t)}applyActionCode(e){return a.a7(this._delegate,e)}checkActionCode(e){return a.a8(this._delegate,e)}confirmPasswordReset(e,t){return a.a6(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return D(this._delegate,a.aa(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return a.af(this._delegate,e)}isSignInWithEmailLink(e){return a.ad(this._delegate,e)}async getRedirectResult(){V(R(),this._delegate,"operation-not-supported-in-this-environment");let e=await a.j(this._delegate,T);return e?D(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){!/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){(0,a.aJ)(e)._logFramework(t)}(this._delegate,e)}onAuthStateChanged(e,t,n){let{next:i,error:r,complete:a}=z(e,t,n);return this._delegate.onAuthStateChanged(i,r,a)}onIdTokenChanged(e,t,n){let{next:i,error:r,complete:a}=z(e,t,n);return this._delegate.onIdTokenChanged(i,r,a)}sendSignInLinkToEmail(e,t){return a.ac(this._delegate,e,t)}sendPasswordResetEmail(e,t){return a.a5(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(!function(e,t){if(C(Object.values(N).includes(t),e,"invalid-persistence-type"),(0,o.b$)()){C(t!==N.SESSION,e,"unsupported-persistence-type");return}if((0,o.UG)()){C(t===N.NONE,e,"unsupported-persistence-type");return}if(b()){C(t===N.NONE||t===N.LOCAL&&(0,o.hl)(),e,"unsupported-persistence-type");return}C(t===N.NONE||w(),e,"unsupported-persistence-type")}(this._delegate,e),e){case N.SESSION:t=a.a;break;case N.LOCAL:t=await a.aE(a.i)._isAvailable()?a.i:a.b;break;case N.NONE:t=a.U;break;default:return a.ax("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return D(this._delegate,a.a0(this._delegate))}signInWithCredential(e){return D(this._delegate,a.a1(this._delegate,e))}signInWithCustomToken(e){return D(this._delegate,a.a4(this._delegate,e))}signInWithEmailAndPassword(e,t){return D(this._delegate,a.ab(this._delegate,e,t))}signInWithEmailLink(e,t){return D(this._delegate,a.ae(this._delegate,e,t))}signInWithPhoneNumber(e,t){return F(this._delegate,a.s(this._delegate,e,t))}async signInWithPopup(e){return V(R(),this._delegate,"operation-not-supported-in-this-environment"),D(this._delegate,a.c(this._delegate,e,T))}async signInWithRedirect(e){return V(R(),this._delegate,"operation-not-supported-in-this-environment"),await S(this._delegate),a.f(this._delegate,e,T)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return a.a9(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function z(e,t,n){let i=e;"function"!=typeof e&&({next:i,error:t,complete:n}=e);let r=i;return{next:e=>r(e&&M.getOrCreate(e)),error:t,complete:n}}B.Persistence=N;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.providerId="phone",this._delegate=new a.P(r.Z.auth().unwrap())}static credential(e,t){return a.P.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}Z.PHONE_SIGN_IN_METHOD=a.P.PHONE_SIGN_IN_METHOD,Z.PROVIDER_ID=a.P.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G=a.aC;class j{constructor(e,t,n=r.Z.app()){var i;G(null===(i=n.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new a.R(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}(i=r.Z).INTERNAL.registerComponent(new s.wA("auth-compat",e=>new B(e.getProvider("app-compat").getImmediate(),e.getProvider("auth")),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:a.A.EMAIL_SIGNIN,PASSWORD_RESET:a.A.PASSWORD_RESET,RECOVER_EMAIL:a.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:a.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:a.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:a.A.VERIFY_EMAIL}},EmailAuthProvider:a.V,FacebookAuthProvider:a.W,GithubAuthProvider:a.Y,GoogleAuthProvider:a.X,OAuthProvider:a.Z,SAMLAuthProvider:a._,PhoneAuthProvider:Z,PhoneMultiFactorGenerator:a.m,RecaptchaVerifier:j,TwitterAuthProvider:a.$,Auth:B,AuthCredential:a.L,Error:o.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion("@firebase/auth-compat","0.5.9")},97582:function(e,t,n){function i(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}n.d(t,{_T:function(){return i}}),"function"==typeof SuppressedError&&SuppressedError}}]);