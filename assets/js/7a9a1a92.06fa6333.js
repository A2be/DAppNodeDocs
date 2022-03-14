(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(155)),i={sidebar_position:1},l={unversionedId:"get-started/installation/custom-hardware/installation/overview",id:"get-started/installation/custom-hardware/installation/overview",isDocsHomePage:!1,title:"Overview",description:"DAppNode project is open source which means you can install it on your hardware. There are two main ways to install DAppNode:",source:"@site/docs/get-started/installation/custom-hardware/installation/overview.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/overview",permalink:"/get-started/installation/custom-hardware/installation/overview",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/get-started/installation/custom-hardware/installation/overview.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Hardware Recommendations",permalink:"/get-started/installation/custom-hardware/hardware-recommendations"},next:{title:"ISO Installation",permalink:"/get-started/installation/custom-hardware/installation/iso"}},s=[],c={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"DAppNode project is open source which means you can install it on your hardware. There are two main ways to install DAppNode:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/get-started/installation/custom-hardware/installation/script"},"Installing with a script")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/get-started/installation/custom-hardware/installation/iso"},"Installing with an ISO"))),Object(o.b)("p",null,"There are some little differences that we have to mention. These differences are important for more technical users. It does not affect the performance of the DAppNode but it does have a slightly different user experience that is generally limited to advanced users who interact with command line often."),Object(o.b)("p",null,"If you install DAppNode with an ISO:"),Object(o.b)("p",null,"The root account will be locked from SSH when installed via ISO, and the host account (default username: ",Object(o.b)("inlineCode",{parentName:"p"},"dappnode"),") will need to manually be added to the sudoers file to access root directories or use the ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," command."),Object(o.b)("p",null,"Both the install script and ISO install the same core packages."))}p.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);