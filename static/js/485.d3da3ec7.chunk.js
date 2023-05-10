/*! For license information please see 485.d3da3ec7.chunk.js.LICENSE.txt */
(self.webpackChunktweets_cards=self.webpackChunktweets_cards||[]).push([[485],{485:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(142);function o(e,t,n){return(t=(0,r.Z)(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var i=n(433),l=n(439),c=n(791),u=function(e){return fetch("https://6456655a5f9a4f236142e706.mockapi.io/users").then((function(e){return e.ok?e.json():Promise.reject(new Error("Something went wrong"))}))},f="Card_Card__TSGmu",d="Card_CardLogo__L2lag",p="Card_CardContent__aECGU",h="Card_CardAvatarContainer__vIZJk",m="Card_CardAvatar__Qd46Z",b="Card_CardTextContainer__RFST5",v="Card_CardTitle__0IA8w",y="Card_CardStatsText__i1DQi",w=n(184);function g(e){var t=e.Click,n=e.btnLabel,r=e.btnType,o=(0,c.useState)(!1),a=(0,l.Z)(o,2),i=a[0],u=a[1];return r?(0,w.jsx)("button",{onClick:t,style:s({display:"block",margin:"0 auto",width:196,padding:14,fontFamily:"Montserrat",fontWeight:600,fontSize:18,lineHeight:"1.22",textTransform:"uppercase",color:"#373737",borderRadius:10,backgroundColor:"#5CD3A8",boxShadow:"0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",border:"none"},i&&{backgroundColor:"#14a26e"}),onMouseEnter:function(){u((function(e){return!0}))},onMouseOut:function(){u((function(e){return!1}))},children:n}):(0,w.jsx)("button",{onClick:t,style:s({display:"block",margin:"0 auto",width:196,padding:14,fontFamily:"Montserrat",fontWeight:600,fontSize:18,lineHeight:"1.22",textTransform:"uppercase",color:"#373737",borderRadius:10,backgroundColor:"#EBD8FF",boxShadow:"0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",border:"none"},i&&{backgroundColor:"#d1b5ee"}),children:n})}function C(e){var t=e.userId,n=e.userName,r=e.userTweets,o=e.userFollowers,a=e.userAvatar,s=e.updateStatusFunc,i=e.isFollowed;return(0,w.jsx)("section",{className:f,id:t,children:(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)("img",{className:d,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAAsCAYAAACZmXFCAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASASURBVHgB7Zw/TxtBEMXHEY4ERSyFAgpTQOFIUJACCpo0afOVU6WgoQhSQIoLU2ApuHCBCywFS2QenksOe2dv73bXRDA/aWVx7A335zH7bnbPrYeHhy9kFFy0Wq0rioCvZ5c/PpLxyBsyyhywQN6RkQwT2DJHLLJ1MpJgAltmg9sRGUkwgbnpcBbbJyMaE5jOHotsl4woTGB+YPo3yWiMCayaQzP9zTGBVfNo+llka2TUxgQWRodbj4zamMDCMdPfABNYPcz01ySXr5hxu+Y25fZbPmGU33LDVMym/Nw09i23kcSeyfYNifsuInYIMP2nPGc5pdVzSfNzL9Mmd2HY1bcuuJYHFEFqgY259fnij6s6SiaArwnNCBDSgNsVx79X+gwk9o7EziG0wvRDZDNaLbeL15aPYyO0b104NsWSUmC1ViLIyZ/ySezRXAy+Y0E2vPQIazE2+l9z7B7lMeeF6b8kw0sqD3bedJkL74es88PTBRnxPFRcC7H72J/yYKY/gBQC60vGaIQUMbUsMxKRNCazyMz0VxA7RN76BCBrq9BgRO+4jcu+RYqXJzT3NYvARF94YmNfDFX4nPn8Bo5RhJBDDM9p+n3sKOIfLHpH7of748rG0R42VmBODyI3H6s6tx2/65dEiT6aSb3mfndK/C3Zt13ahr5Dj+Cx/YTS85ym30dX2T6kf0/eBbiOWQrJMQKberKGU1xCT5YVjzx9wNC1UcR17PjVhsRe4+NaEj6OVUSoCToGM/0KMQL75doo4ikLB0OHKxNh6CwLtBjuwFjLXlRdl4H5Hinih6hzGXP8XZxr7YeRl0xUBlO2L2aln3yzh1QB3xxkva4vNvdB7JAMhDqYS2CxhccqIP7Kc31NxDxFagJLMQRp2Sv0hYz3yvZVeCTLYCX+1yUo2nGFCkTrl/vm40Hijoy/xGQwTQQTiked/qAwtJucc45yEFuze4nECEwbrhaLruuox5RayDDnrFeJcQ+pN42U7R3Kw9T15GrECWzHtVFEUJ42+kDz+lPRQmbn254K+XfyM/DMLGxReiD4UzKcxAhMFQHfYFTgMVwsZht4oxsKo6vEhoC/KbH7WiaR8kmOGtiZp6Ty6ok1+SguOv97iznAkggxnVOnTICpDizNmThiI85XiY0qNMz7pGJCPEelul/znF4dsZPdm7IkRgUZR1qTG3Hoe9lC4t7IpyouOcbU2ctMfQApVlP0qkRWhUz/uPwRTPlxzBs9mdaEmakPJNV6MIhsv64Q0J8bTD/mFttKNwyDn+q+m1iKnVxcZKY+mJSFVqxM3cZqCZrPJarlBPFOyFh4Em0HxMbw9pn3w9NhvyL2mhzLbmDsujynqV93LJGuW9tbdyyFzlYfbGX8Ajp4LgihMOm4MLj5hTGPjV3UxO4lHi5Sh/Ks+SroV/ku+wK6p+ScKupI26b0FLFXiZn6Bth7kWGYqW+ICawaM/URmMCqsUp9BCYwPxdWqY/DBKYziP1Kc8MEpjExU58GE9gyMPVnZCTBBLaMmfqEmMCeYqY+MX8Au/W380rAxe0AAAAASUVORK5CYII=",alt:"logo"}),(0,w.jsx)("div",{className:h,children:(0,w.jsx)("img",{className:m,src:a,alt:"avatar"})}),(0,w.jsxs)("div",{className:b,children:[(0,w.jsx)("h2",{className:v,children:n}),(0,w.jsxs)("p",{className:y,children:[(0,w.jsx)("span",{children:r.toLocaleString("en-US")})," tweets"]}),(0,w.jsxs)("p",{className:y,children:[(0,w.jsx)("span",{children:o.toLocaleString("en-US")})," followers"]})]}),(0,w.jsx)(g,{btnLabel:i?"Following":"Follow",Click:function(e){fetch("https://6456655a5f9a4f236142e706.mockapi.io/users/".concat(t),{method:"PUT",body:JSON.stringify({name:n,tweets:r,followers:o+(i?-1:1),avatar:a,id:t}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){s({user:e,status:!i})})).catch((function(e){return console.log("ERROR"+e)}))},btnType:i})]})})}var O=n(689),j=n(87),x="Tweets_Tweets_container__cgCMc",N="Tweets_Tweets_textBox__Ia1Mx",S="Tweets_Tweets_backBtn__qwcVP",k="Tweets_Tweets_title__CBSCL",A="Tweets_Tweets_loadmore__B5mNS",P="Tweets_Tweets_listGrid__kxLKo",_=n(315),E=function(e){var t=e.handleFilter,n=["all","following","unfollowing"],r=n[0],o="";return(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(_.Z,{options:n,onChange:function(e){return function(e){o=e.value,t(o)}(e)},value:r,className:"myClassName",placeholder:"Select an option",placeholderClassName:"myPlaceholderClassName",controlClassName:"myControlClassName",menuClassName:"myMenuClassName"})})},M="followings",T=function(){var e,t,n=(0,c.useState)([]),r=(0,l.Z)(n,2),o=r[0],a=r[1],f=(0,c.useState)(null),d=(0,l.Z)(f,2),p=d[0],h=d[1],m=(0,c.useState)([]),b=(0,l.Z)(m,2),v=b[0],y=b[1],g=(0,c.useState)("all"),_=(0,l.Z)(g,2),T=_[0],D=_[1],F=(0,c.useMemo)((function(){if("all"===T)return(0,i.Z)(o);var e=[];return o.forEach((function(t){("following"===T?v.includes(t.id):!v.includes(t.id))&&e.push(t)})),[].concat(e)}),[T,v,o]),R=(0,c.useMemo)((function(){return(null===F||void 0===F?void 0:F.slice(0,3*(p+1)))||[]}),[F,p]),B=(0,c.useState)({}),L=(0,l.Z)(B,2),U=L[0],Y=L[1],Z=(0,O.TH)(),V=(0,c.useRef)(null!==(e=null===(t=Z.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,c.useEffect)((function(){null===p&&(h((function(e){return 0})),u().then((function(e){var t=JSON.parse(localStorage.getItem(M)||"[]");y((function(e){return(0,i.Z)(t)}));var n=e.map((function(e){return{id:e.id,name:e.name,tweets:e.tweets,followers:e.followers,avatar:e.avatar}}));a((function(e){return(0,i.Z)(n)}))})).catch((function(e){return new Error("Something goes wrong: ".concat(e))})))}),[p,o]),(0,c.useEffect)((function(){Object.keys(U).length&&(a((function(e){var t=(0,i.Z)(e),n=t.findIndex((function(e){return e.id===U.id}));return-1!==n&&(t[n]=s({},U)),(0,i.Z)(t)})),Y((function(e){return{}})))}),[U,o]),(0,c.useEffect)((function(){h((function(e){return 0}))}),[T]);return(0,w.jsxs)("div",{className:x,children:[(0,w.jsxs)("div",{className:N,children:[(0,w.jsxs)(j.rU,{to:V.current,className:S,children:[String.fromCharCode(9664),"Back to home"]}),(0,w.jsx)("h2",{className:k,children:"Tweets cards:"}),(0,w.jsx)(E,{handleFilter:function(e){return function(e){console.log(e),D((function(t){return e}))}(e)}})]}),(0,w.jsx)("ul",{className:P,children:R&&R.map((function(e){var t=e.id,n=e.name,r=e.tweets,o=e.followers,a=e.avatar;return(0,w.jsx)("li",{children:(0,w.jsx)(C,{userId:t,isFollowed:v.includes(t),userName:n,userTweets:r,userFollowers:o,userAvatar:a,updateStatusFunc:function(e){return function(e){var t=e.user,n=e.status,r=(0,i.Z)(v);if(n)r.push(t.id);else{var o=r.indexOf(t.id);r.splice(o,1)}Y((function(e){return s({},t)})),y((function(e){return(0,i.Z)(r)})),localStorage.setItem(M,JSON.stringify(r))}({user:e.user,status:e.status})}})},t)}))}),R.length-3*p>=3&&(0,w.jsx)("button",{className:A,onClick:function(e){e.preventDefault(),h((function(e){return e+1}))},children:"Load more"})]})}},694:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var s=o.apply(null,n);s&&e.push(s)}}else if("object"===a){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},315:function(e,t,n){"use strict";t.Z=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(791)),a=(r=n(694))&&r.__esModule?r:{default:r};function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}var m="Select...",b=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?p(e):t}(this,d(t).call(this,e))).state={selected:n.parseValue(e.value,e.options)||{label:"undefined"===typeof e.placeholder?m:e.placeholder,value:""},isOpen:!1},n.dropdownRef=(0,o.createRef)(),n.mounted=!0,n.handleDocumentClick=n.handleDocumentClick.bind(p(n)),n.fireChangeEvent=n.fireChangeEvent.bind(p(n)),n}var n,r,s;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,r=[{key:"componentDidUpdate",value:function(e){if(this.props.value!==e.value)if(this.props.value){var t=this.parseValue(this.props.value,this.props.options);t!==this.state.selected&&this.setState({selected:t})}else this.setState({selected:{label:"undefined"===typeof this.props.placeholder?m:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(e){this.props.onFocus&&"function"===typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===e.type&&0!==e.button||(e.stopPropagation(),e.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(e,t){var n;if("string"===typeof e)for(var r=0,o=t.length;r<o;r++)if("group"===t[r].type){var a=t[r].items.filter((function(t){return t.value===e}));a.length&&(n=a[0])}else"undefined"!==typeof t[r].value&&t[r].value===e&&(n=t[r]);return n||e}},{key:"setValue",value:function(e,t){var n={selected:{value:e,label:t},isOpen:!1};this.fireChangeEvent(n),this.setState(n)}},{key:"fireChangeEvent",value:function(e){e.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(e.selected)}},{key:"renderOption",value:function(e){var t,n=e.value;"undefined"===typeof n&&(n=e.label||e);var r=e.label||e.value||e,s=n===this.state.selected.value||n===this.state.selected,i=(u(t={},"".concat(this.props.baseClassName,"-option"),!0),u(t,e.className,!!e.className),u(t,"is-selected",s),t),f=(0,a.default)(i),d=Object.keys(e.data||{}).reduce((function(t,n){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,u({},"data-".concat(n),e.data[n]))}),{});return o.default.createElement("div",l({key:n,className:f,onMouseDown:this.setValue.bind(this,n,r),onClick:this.setValue.bind(this,n,r),role:"option","aria-selected":s?"true":"false"},d),r)}},{key:"buildMenu",value:function(){var e=this,t=this.props,n=t.options,r=t.baseClassName,a=n.map((function(t){if("group"===t.type){var n=o.default.createElement("div",{className:"".concat(r,"-title")},t.name),a=t.items.map((function(t){return e.renderOption(t)}));return o.default.createElement("div",{className:"".concat(r,"-group"),key:t.name,role:"listbox",tabIndex:"-1"},n,a)}return e.renderOption(t)}));return a.length?a:o.default.createElement("div",{className:"".concat(r,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(e){this.mounted&&(this.dropdownRef.current.contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return"string"===typeof this.state.selected||""!==this.state.selected.value}},{key:"render",value:function(){var e,t,n,r,s,i=this.props,l=i.baseClassName,c=i.controlClassName,f=i.placeholderClassName,d=i.menuClassName,p=i.arrowClassName,h=i.arrowClosed,m=i.arrowOpen,b=i.className,v=this.props.disabled?"Dropdown-disabled":"",y="string"===typeof this.state.selected?this.state.selected:this.state.selected.label,w=(0,a.default)((u(e={},"".concat(l,"-root"),!0),u(e,b,!!b),u(e,"is-open",this.state.isOpen),e)),g=(0,a.default)((u(t={},"".concat(l,"-control"),!0),u(t,c,!!c),u(t,v,!!v),t)),C=(0,a.default)((u(n={},"".concat(l,"-placeholder"),!0),u(n,f,!!f),u(n,"is-selected",this.isValueSelected()),n)),O=(0,a.default)((u(r={},"".concat(l,"-menu"),!0),u(r,d,!!d),r)),j=(0,a.default)((u(s={},"".concat(l,"-arrow"),!0),u(s,p,!!p),s)),x=o.default.createElement("div",{className:C},y),N=this.state.isOpen?o.default.createElement("div",{className:O,"aria-expanded":"true"},this.buildMenu()):null;return o.default.createElement("div",{ref:this.dropdownRef,className:w},o.default.createElement("div",{className:g,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},x,o.default.createElement("div",{className:"".concat(l,"-arrow-wrapper")},m&&h?this.state.isOpen?m:h:o.default.createElement("span",{className:j}))),N)}}],r&&f(n.prototype,r),s&&f(n,s),t}(o.Component);b.defaultProps={baseClassName:"Dropdown"};var v=b;t.Z=v}}]);
//# sourceMappingURL=485.d3da3ec7.chunk.js.map