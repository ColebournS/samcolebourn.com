(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5908)}])},5542:function(e,t,n){"use strict";var s=n(5893),l=(n(7294),n(2010));t.Z=function(e){var t=e.children,n=e.type,a=e.onClick,i=e.classes,o=(0,l.F)().theme;return"primary"===n?(0,s.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ".concat("light"===o?"bg-black text-white":"bg-white text-black","  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ").concat(i),children:t}):(0,s.jsx)("button",{onClick:a,type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ".concat("light"===o?"hover:bg-slate-100":"hover:bg-slate-600 text-white"," hover:scale-105 active:scale-100  tablet:first:ml-0 ").concat(i," link"),children:t})}},2665:function(e,t,n){"use strict";var s=n(5893),l=n(2271),a=n(2010),i=n(1163),o=n(7294),r=n(5542);t.Z=function(e){var t=e.handleWorkScroll,n=e.handleAboutScroll,c=e.handleContactScroll,d=e.isBlog,m=(0,i.useRouter)(),u=(0,a.F)(),p=u.theme,h=u.setTheme,x=(0,o.useState)(!1),f=x[0],g=x[1];return(0,o.useEffect)((function(){g(!0)}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.J,{className:"block tablet:hidden mt-5",children:function(e){var a=e.open;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-2 laptop:p-0",children:[(0,s.jsx)("h1",{onClick:function(){return m.push("/")},className:"font-medium p-2 laptop:p-0 link",children:"Sam Colebourn"}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)(r.Z,{onClick:function(){return h("dark"===p?"light":"dark")},children:(0,s.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===p?"moon.svg":"sun.svg")})}),(0,s.jsx)(l.J.Button,{children:(0,s.jsx)("img",{className:"h-5",src:"/images/".concat(a?"light"===p?"cancel.svg":"cancel-white.svg":"dark"===p?"menu-white.svg":"menu.svg")})})]})]}),(0,s.jsx)(l.J.Panel,{className:"absolute right-0 z-10 w-11/12 p-4 ".concat("light"===p?"bg-white":"bg-slate-800"," shadow-md rounded-md"),children:d?(0,s.jsxs)("div",{className:"grid grid-cols-1",children:[(0,s.jsx)(r.Z,{onClick:function(){return m.push("/")},classes:"first:ml-1",children:"Home"}),(0,s.jsx)(r.Z,{onClick:function(){return m.push("/resume")},classes:"first:ml-1",children:"Resume"})]}):(0,s.jsxs)("div",{className:"grid grid-cols-1",children:[(0,s.jsx)(r.Z,{onClick:t,children:"Work"}),(0,s.jsx)(r.Z,{onClick:n,children:"About"}),(0,s.jsx)(r.Z,{onClick:c,children:"Contact"}),(0,s.jsx)(r.Z,{onClick:function(){return window.open("mailto:sam.colebourn@gmail.com")},children:"Resume"})]})})]})}}),(0,s.jsxs)("div",{className:"mt-10 hidden flex-row items-center justify-between sticky ".concat("light"===p&&"bg-white"," light:text-black top-0 z-10 tablet:flex"),children:[(0,s.jsx)("h1",{onClick:function(){return m.push("/")},className:"ml-4 font-medium cursor-pointer mob:p-2 laptop:p-0",children:"Sam Colebourn"}),d?(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(r.Z,{onClick:function(){return m.push("/")},children:"Home"}),(0,s.jsx)(r.Z,{onClick:function(){return m.push("/resume")},classes:"first:ml-1",children:"Resume"}),f&&p&&(0,s.jsx)(r.Z,{onClick:function(){return h("dark"===p?"light":"dark")},children:(0,s.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===p?"moon.svg":"sun.svg")})})]}):(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(r.Z,{onClick:t,children:"Work"}),(0,s.jsx)(r.Z,{onClick:n,children:"About"}),(0,s.jsx)(r.Z,{onClick:c,children:"Contact"}),(0,s.jsx)(r.Z,{onClick:function(){return m.push("/resume")},classes:"first:ml-1",children:"Resume"}),f&&p&&(0,s.jsx)(r.Z,{onClick:function(){return h("dark"===p?"light":"dark")},children:(0,s.jsx)("img",{className:"h-6",src:"/images/".concat("dark"===p?"moon.svg":"sun.svg")})})]})]})]})}},325:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(5893),l=(n(7294),n(5542)),a=JSON.parse('{"U":[{"id":"1","title":"Github","link":"https://github.com/ColebournS"},{"id":"2","title":"LinkedIn","link":"https://www.linkedin.com/in/sam-colebourn/"},{"id":"5","title":"Email","link":"mailto:sam.colebourn@gmail.com"}]}'),i=function(e){var t=e.className;return(0,s.jsx)("div",{className:"".concat(t," flex flex-wrap mob:flex-nowrap link"),children:a.U.map((function(e,t){return(0,s.jsx)(l.Z,{onClick:function(){return window.open(e.link)},children:e.title},t)}))})}},5908:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(5893),l=n(7294),a=n(2665),i=n(2010),o=function(e){var t=e.name,n=e.description,l=(0,i.F)().theme;return(0,s.jsxs)("div",{className:"w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ".concat("light"==l?"hover:bg-slate-50":"hover:bg-slate-800"," hover:scale-105"),children:[(0,s.jsx)("h1",{className:"text-3xl",children:t||"Heading"}),(0,s.jsx)("p",{className:"mt-5 opacity-40 text-xl",children:n||"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "})]})},r=function(e){var t=e.name,n=e.role,l=e.when,a=e.description,o=(0,i.F)().theme;return(0,s.jsxs)("div",{className:"card w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ".concat("light"===o?"bg-slate-100":"bg-slate-800"," hover:scale-105"),children:[(0,s.jsx)("h2",{className:"mt-5 text-xl opacity-50",children:l}),(0,s.jsx)("h1",{className:"text-3xl font-medium",children:t}),(0,s.jsx)("h2",{className:"text-2xl mb-2 opacity-50",children:n}),(0,s.jsx)("h2",{className:"text-xl opacity-50",children:a})]})},c=l.useLayoutEffect;var d=n(990),m=n(5317);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),s.forEach((function(t){u(e,t,n[t])}))}return e}var h=n(325),x=n(9008),f=n.n(x);function g(){var e=(0,l.useRef)(),t=(0,l.useRef)(),n=(0,l.useRef)(),i=(0,l.useRef)(),u=(0,l.useRef)(),x=(0,l.useRef)();return c((function(){var e,t,s;e=[n.current,i.current,u.current],t={y:40,x:-10,transform:"scale(0.95) skew(10deg)"},s={y:0,x:0,transform:"scale(1)"},d.ZP.fromTo(e,p({opacity:0},t),p({opacity:1},s,{stagger:.2,ease:m.Aq.easeOut}))}),[]),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)(f(),{children:(0,s.jsx)("title",{children:"Sam Colebourn"})}),(0,s.jsx)("div",{className:"gradient-circle"}),(0,s.jsx)("div",{className:"gradient-circle-bottom"}),(0,s.jsxs)("div",{className:"container mx-auto mb-10",children:[(0,s.jsx)(a.Z,{handleWorkScroll:function(){window.scrollTo({top:e.current.offsetTop-10,left:0,behavior:"smooth"})},handleAboutScroll:function(){window.scrollTo({top:t.current.offsetTop-10,left:0,behavior:"smooth"})},handleContactScroll:function(){window.scrollTo({top:x.current.offsetTop-10,left:0,behavior:"smooth"})}}),(0,s.jsx)("div",{className:"laptop:mt-20 mt-10",children:(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)("h1",{ref:n,className:"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold mob:w-full",children:"Sam Colebourn"}),(0,s.jsx)("h1",{ref:i,className:"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full",children:"Developer and Student"}),(0,s.jsx)("h1",{ref:u,className:"text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full",children:"Based in Boston, MA"})]})}),(0,s.jsxs)("div",{className:"mt-10 laptop:mt-30 p-2 laptop:p-0",ref:e,children:[(0,s.jsx)("h1",{className:"tablet:my-10 text-4xl text-bold",children:"Work"}),(0,s.jsxs)("div",{className:"mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-3 gap-6",children:[(0,s.jsx)(r,{name:"Software Developer at MILL5",description:"Experienced full stack developer creating a MAUI app with C# backend and Azure functions. Developed seamless integration, optimal performance, and enhanced user experience.",role:"Intern",when:"May 2021 - August 2021"}),(0,s.jsx)(r,{name:"Software Developer at MILL5",description:"Created both JavaScript and Typescript React Apps allowing customers to review and adjust licenses, payments, and other settings. Structured a Shared Kernel to separate code into a clean architecture solution. Implemented GitHub Workflows to fully automate versioning, packing, and publishing to private NuGet Package for diverse uses.",role:"Intern",when:"May 2021 - August 2021"}),(0,s.jsx)(r,{name:"Software Developer at Catalyst Acoustics Group",description:"Developed a Configure Price Quote System leveraging Infor Syteline and SQL Queries for customizable products. Created Automation for sales team using Power Automate and Power BI. Contributed to the development of end-to-end ERP system allowing for the automation of complex manufacturing processes",role:"Intern",when:"May 2021 - August 2021"})]})]}),(0,s.jsxs)("div",{className:"mt-10 laptop:mt-30 p-2 laptop:p-0",children:[(0,s.jsx)("h1",{className:"tablet:my-10 text-4xl text-bold",children:"Services"}),(0,s.jsxs)("div",{className:"mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6",children:[(0,s.jsx)(o,{name:"Web Development",description:"Building immersive and responsive web applications with modern technologies for enhanced user experiences and seamless functionality."},1),(0,s.jsx)(o,{name:"Custom Software Solutions",description:"Building immersive and responsive web applications with modern technologies for enhanced user experiences and seamless functionality."},1),(0,s.jsx)(o,{name:"Automation Solutions",description:"Building immersive and responsive web applications with modern technologies for enhanced user experiences and seamless functionality."},1),(0,s.jsx)(o,{name:"AI as a Service",description:"Harnessing the power of artificial intelligence to develop intelligent software systems that automate tasks, provide data-driven insights, and enhance decision-making capabilities."},1)]})]}),(0,s.jsxs)("div",{className:"mt-10 laptop:mt-10 p-2 laptop:p-0",ref:t,children:[(0,s.jsx)("h1",{className:"tablet:my-10 text-4xl text-bold",children:"About"}),(0,s.jsx)("p",{className:"tablet:mx-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5",children:"Im currently a Junior pursuing a Computer Science degree at WPI."}),(0,s.jsx)("p",{className:"tablet:mx-10 mt-2 text-xl laptop:text-xl w-full laptop:w-3/5",children:"Outside of my life at WPI, I spend my breaks working for internships concentrated on developing Microsoft Azure solutions. In my free time, I like to research and learn new programming languages, develop my skills, and investigate/implement fun and practical IoT projects."})]}),(0,s.jsxs)("div",{className:"mt-10 laptop:mt-10 p-2 laptop:p-0",ref:x,children:[(0,s.jsx)("h1",{className:"mt-20 mb-10 text-4xl text-bold",children:"Contact"}),(0,s.jsx)("p",{className:"tablet:mx-10 mt-2 text-5xl laptop:text-5xl w-full laptop:w-3/5",children:"Let's Work Together!"}),(0,s.jsx)("button",{type:"button",className:"text-sm tablet:text-base p-1 laptop:p-2 mx-10 mt-5 mb-20 laptop:mx-10 rounded-lg bg-white text-black transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link cursor-none undefined",children:"Schedule a call"})]}),(0,s.jsx)("div",{className:"mt-10",style:{display:"flex",justifyContent:"center"},children:(0,s.jsx)(h.Z,{})})]})]})}}},function(e){e.O(0,[802,891,324,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);