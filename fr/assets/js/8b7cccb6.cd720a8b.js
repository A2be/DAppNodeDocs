(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(3),a=r(7),c=(r(0),r(156)),o={},i={unversionedId:"user-guide/ui/packages",id:"user-guide/ui/packages",isDocsHomePage:!1,title:"Packages View",description:"On this view, we can check what packages we have installed in our DAppNodes. You can check some general parameters and do the next actions on this page:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/ui/packages.md",sourceDirName:"user-guide/ui",slug:"/user-guide/ui/packages",permalink:"/fr/user-guide/ui/packages",editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/i18n/fr/docusaurus-plugin-content-docs/current/user-guide/ui/packages.md",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"DAppStore View",permalink:"/fr/user-guide/ui/dappstore"},next:{title:"DAppNode Explorer",permalink:"/fr/user-guide/ui/explorer"}},p=[{value:"My packages",id:"my-packages",children:[]},{value:"System packages",id:"system-packages",children:[]}],s={toc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"On this view, we can check what packages we have installed in our DAppNodes. You can check some general parameters and do the next actions on this page:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"STATUS"),": indicate the state of the package, they can be 3: Running, Crashed and Stopped. Running mean is turned on. Crashed means the package has suffered some error and it's stopped. Stopped means the container has been stopped by the user."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Name"),": it's the name of the package."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Link to de package view"),": click on it to go to the package view in case you want to check some parameter or set up something related to the package."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Restart package"),": restart all the package, it means all the containers of the package are restarted.")),Object(c.b)("h2",{id:"my-packages"},"My packages"),Object(c.b)("p",null,"My packages refers to the packages the user have installed and they are not essential for the performance of DAppNode."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"../../../../img/packages_view_1.png"})),Object(c.b)("h2",{id:"system-packages"},"System packages"),Object(c.b)("p",null,"They are the packages that are essential for DAppNode or including a feature that is so important for DAppNode."),Object(c.b)("p",{align:"center"},Object(c.b)("img",{src:"../../../../img/packages_view_2.png"})))}u.isMDXComponent=!0},156:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(r),g=n,b=l["".concat(o,".").concat(g)]||l[g]||d[g]||c;return r?a.a.createElement(b,i(i({ref:t},s),{},{components:r})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);