(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(3),a=n(7),o=(n(0),n(149)),r={sidebar_position:2},l={unversionedId:"get-started/installation/custom-hardware/installation/iso",id:"get-started/installation/custom-hardware/installation/iso",isDocsHomePage:!1,title:"ISO Installation",description:"When you want to perform a clean installation, installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode.",source:"@site/docs/get-started/installation/custom-hardware/installation/iso.md",sourceDirName:"get-started/installation/custom-hardware/installation",slug:"/get-started/installation/custom-hardware/installation/iso",permalink:"/get-started/installation/custom-hardware/installation/iso",editUrl:"https://github.com/dappnode/DAppNodeDocs/docs/get-started/installation/custom-hardware/installation/iso.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Overview",permalink:"/get-started/installation/custom-hardware/installation/overview"},next:{title:"Script Installation",permalink:"/get-started/installation/custom-hardware/installation/script"}},s=[{value:"Get the ISO",id:"get-the-iso",children:[]},{value:"Burn the ISO in a USB",id:"burn-the-iso-in-a-usb",children:[]},{value:"Boot from ISO",id:"boot-from-iso",children:[]},{value:"Post-Installation",id:"post-installation",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"When you want to perform a clean installation, installing the base operating system and DAppNode. Installing from an ISO will wipe the machine data and install Debian + DAppNode."),Object(o.b)("h2",{id:"get-the-iso"},"Get the ISO"),Object(o.b)("p",null,"You can get the image downloading directly from ",Object(o.b)("a",{parentName:"p",href:"https://iso.dappnode.io/"},"DAppNodeISO")," or if you prefer you can ",Object(o.b)("a",{parentName:"p",href:"https://github.com/dappnode/DAppNode_Installer"},"build it from the source"),"."),Object(o.b)("h2",{id:"burn-the-iso-in-a-usb"},"Burn the ISO in a USB"),Object(o.b)("p",null,"Burn the ISO to an USB stick. To do so we recommend using ",Object(o.b)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"Etcher")," for the OS with which you will prepare the USB to boot from your server and install DAppNode"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Please note that Etcher is intended to generate the ISO image in a bootable USB from your desktop device, and then install it in a server")),Object(o.b)("p",null,"IF YOU EXECUTE THE BOOTABLE USB IN A MACHINE CONTAINING DATA IT WILL BE ERASED."),Object(o.b)("p",null,"Also, DAppNode is intended to run 24/7 so if you install it in a laptop or desktop machine and you turn it off it will lose the sync"),Object(o.b)("h2",{id:"boot-from-iso"},"Boot from ISO"),Object(o.b)("p",null,"Insert the USB into your Server and prepare to install a Debian distribution. You will have to make sure that your Server boots from the USB. If you succeed at booting up from your USB, you will be greeted with this screen or a similar one:"),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/VirtualBox_install.png"})),Object(o.b)("p",null,"Select a language."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_1.png"})),Object(o.b)("p",null,"Select a location."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_2.png"})),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_3.png"})),Object(o.b)("p",null,"Select a keyboard configuration."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_4.png"})),Object(o.b)("p",null,"Type a hostname, this is like the name your machine will have on the network. It's not important."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_5.png"})),Object(o.b)("p",null,"Define a password for the user root."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_6.png"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Write down this password, you will need it in case you need to access as root to the cli of DAppNode.")),Object(o.b)("p",null,"Select an username for your DAppNode and define a password."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_7.png"})),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f Write down the user for dappnode and the password you define for him.")),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_8.png"})),Object(o.b)("p",null,"Set up your time zone."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_9.png"})),Object(o.b)("p",null,"Partition disk configuration. On this guide we will use the second option ",Object(o.b)("strong",{parentName:"p"},"Partitioning method: ","[Guided - use entire disk and set up LVM]"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_10.png"})),Object(o.b)("p",null,"After choosing the disk, we need to define the partioning scheme. We will select ",Object(o.b)("strong",{parentName:"p"},"All files in one partition (recommended for new users)"),"."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_11.png"})),Object(o.b)("p",null,"Confirm we will write the disk."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_12.png"})),Object(o.b)("p",null,"We want to use all the disk ont he partioning process. So we dont modificate the value."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_13.png"})),Object(o.b)("p",null,"Confirm we want to write the changes to disks."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_14.png"})),Object(o.b)("p",null,"The next decision depends of you. We resommend to select yes because you dont have to confirm all the operations."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_15.png"})),Object(o.b)("p",null,"Install the grub."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_16.png"})),Object(o.b)("p",null,"Select the disk."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_17.png"})),Object(o.b)("p",null,"If you have a static IP you should define here. In other case, leave the field blank."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_18.png"})),Object(o.b)("p",null,"You will see this message indicating you have finished this installation."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_19.png"})),Object(o.b)("p",null,"The machine will restart and you will see this screen."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:"../../../../static/img/iso_install_20.png"})),Object(o.b)("p",null,"Log in into the machine with the user you have defined before and the password."),Object(o.b)("h2",{id:"post-installation"},"Post-Installation"),Object(o.b)("p",null,"Once the installation process has finished, automatically DAppNode will try to prepare the first access to your DAppNode on the next order:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/local-proxy"},"Local Proxy")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/wifi"},"Wifi")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#wireguard"},"Wireguard")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"../../../../user-guide/ui/access/vpn#openvpn"},"OpenVPN"))))}b.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=i,g=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(g,l(l({ref:t},c),{},{components:n})):a.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);