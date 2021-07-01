(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),c=(n(0),n(246)),b={custom_edit_url:null},o={unversionedId:"api/Component",id:"version-4.0.0/api/Component",isDocsHomePage:!1,title:"Component",description:"`ts",source:"@site/versioned_docs/version-4.0.0/api/Component.mdx",sourceDirName:"api",slug:"/api/Component",permalink:"/egjs-flicking/docs/4.0.0/api/Component",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"VanillaRenderer",permalink:"/egjs-flicking/docs/4.0.0/api/VanillaRenderer"},next:{title:"FlickingEvents",permalink:"/egjs-flicking/docs/4.0.0/api/FlickingEvents"}},l=[{value:"Properties",id:"properties",children:[{value:"VERSION",id:"VERSION",children:[]}]},{value:"Methods",id:"methods",children:[{value:"trigger",id:"trigger",children:[]},{value:"once",id:"once",children:[]},{value:"hasOn",id:"hasOn",children:[]},{value:"on",id:"on",children:[]},{value:"off",id:"off",children:[]}]}],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"class Component\n")),Object(c.b)("p",null,"A class used to manage events in a component"),Object(c.b)("div",{className:"container"},Object(c.b)("div",{className:"row mb-2"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("strong",null,"Properties")),Object(c.b)("div",{className:"col col--6"},Object(c.b)("strong",null,"Methods"))),Object(c.b)("div",{className:"row"},Object(c.b)("div",{className:"col col--6"},Object(c.b)("a",{href:"#VERSION"},"VERSION"),Object(c.b)("span",{className:"bulma-tag is-info ml-2"},"static")),Object(c.b)("div",{className:"col col--6"},Object(c.b)("a",{href:"#trigger"},"trigger"),Object(c.b)("br",null),Object(c.b)("a",{href:"#once"},"once"),Object(c.b)("br",null),Object(c.b)("a",{href:"#hasOn"},"hasOn"),Object(c.b)("br",null),Object(c.b)("a",{href:"#on"},"on"),Object(c.b)("br",null),Object(c.b)("a",{href:"#off"},"off")))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"VERSION"},"VERSION"),Object(c.b)("div",{className:"bulma-tags"},Object(c.b)("span",{className:"bulma-tag is-info"},"static")),Object(c.b)("p",null,"Version info string"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": string"),Object(c.b)("p",null,"Component.VERSION;  // ex) 3.0.0"),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"trigger"},"trigger"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Trigger a custom event."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": this"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An instance of the component itself")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"event"),Object(c.b)("td",{parentName:"tr",align:"center"},"string ","|"," ComponentEvent"),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The name of the custom event to be triggered or an instance of the ComponentEvent")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"params"),Object(c.b)("td",{parentName:"tr",align:"center"},"Array","<","any",">"," ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"Event data to be sent when triggering a custom event")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  beforeHi: ComponentEvent<{ foo: number; bar: string }>;\n  hi: { foo: { a: number; b: boolean } };\n  someEvent: (foo: number, bar: string) => void;\n  someOtherEvent: void; // When there\'s no event argument\n}> {\n  some(){\n    if(this.trigger("beforeHi")){ // When event call to stop return false.\n      this.trigger("hi");// fire hi event.\n    }\n  }\n}\n\nconst some = new Some();\nsome.on("beforeHi", e => {\n  if(condition){\n    e.stop(); // When event call to stop, `hi` event not call.\n  }\n  // `currentTarget` is component instance.\n  console.log(some === e.currentTarget); // true\n\n  typeof e.foo; // number\n  typeof e.bar; // string\n});\nsome.on("hi", e => {\n  typeof e.foo.b; // boolean\n});\n// If you want to more know event design. You can see article.\n// https://github.com/naver/egjs-component/wiki/How-to-make-Component-event-design%3F\n')),Object(c.b)("h3",{id:"once"},"once"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Executed event just one time."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": this"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An instance of the component itself")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"eventName"),Object(c.b)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The name of the event to be attached or an event name - event handler mapped object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"handlerToAttach"),Object(c.b)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The handler function of the event to be attached")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: ComponentEvent;\n}> {\n  hi() {\n    alert("hi");\n  }\n  thing() {\n    this.once("hi", this.hi);\n  }\n}\n\nvar some = new Some();\nsome.thing();\nsome.trigger(new ComponentEvent("hi"));\n// fire alert("hi");\nsome.trigger(new ComponentEvent("hi"));\n// Nothing happens\n')),Object(c.b)("h3",{id:"hasOn"},"hasOn"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Checks whether an event has been attached to a component."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Indicates whether the event is attached.")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"eventName"),Object(c.b)("td",{parentName:"tr",align:"center"},"string"),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The name of the event to be attached")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'import Component from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  some() {\n    this.hasOn("hi");// check hi event.\n  }\n}\n')),Object(c.b)("h3",{id:"on"},"on"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Attaches an event to a component."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": this"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An instance of a component itself")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"eventName"),Object(c.b)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"no"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The name of the event to be attached or an event name - event handler mapped object.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"handlerToAttach"),Object(c.b)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The handler function of the event to be attached")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.on("hi",this.hi); //attach event\n  }\n}\n')),Object(c.b)("h3",{id:"off"},"off"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Detaches an event from the component.",Object(c.b)("br",null),"If the ",Object(c.b)("inlineCode",{parentName:"p"},"eventName")," is not given this will detach all event handlers attached.",Object(c.b)("br",null),"If the ",Object(c.b)("inlineCode",{parentName:"p"},"handlerToDetach")," is not given, this will detach all event handlers for ",Object(c.b)("inlineCode",{parentName:"p"},"eventName"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns"),": this"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"An instance of a component itself")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(c.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"eventName"),Object(c.b)("td",{parentName:"tr",align:"center"},"string ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The name of the event to be detached")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"handlerToDetach"),Object(c.b)("td",{parentName:"tr",align:"center"},"function ","|"," $ts:..."),Object(c.b)("td",{parentName:"tr",align:"center"},"yes"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"},"The handler function of the event to be detached")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},'import Component, { ComponentEvent } from "@egjs/component";\n\nclass Some extends Component<{\n  hi: void;\n}> {\n  hi() {\n    console.log("hi");\n  }\n  some() {\n    this.off("hi",this.hi); //detach event\n  }\n}\n')))}p.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=p(n),O=a,j=m["".concat(b,".").concat(O)]||m[O]||s[O]||c;return n?r.a.createElement(j,o(o({ref:t},i),{},{components:n})):r.a.createElement(j,o({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,b[1]=o;for(var i=2;i<c;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);