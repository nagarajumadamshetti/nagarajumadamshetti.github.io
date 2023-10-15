"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[18],{9018:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var a=n(9439),i=n(2791),r=n(1087),s=n(9806),c=n(1632),o=n(6842),l=n(184),d=function(e){var t=e.data;return(0,l.jsx)("article",{className:"degree-container",children:(0,l.jsxs)("header",{children:[(0,l.jsx)("h4",{className:"degree",children:t.degree}),(0,l.jsxs)("p",{className:"school",children:[(0,l.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},u=function(e){var t=e.data;return(0,l.jsxs)("div",{className:"education",children:[(0,l.jsx)("div",{className:"link-to",id:"education"}),(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h3",{children:"Education"})}),t.map((function(e){return(0,l.jsx)(d,{data:e},e.school)}))]})};u.defaultProps={data:[]};var m=u,g=n(7892),p=n.n(g),h=n(5745),y=function(e){var t=e.data,n=t.name,a=t.position,i=t.url,r=t.startDate,s=t.endDate,c=t.summary,o=t.highlights;return(0,l.jsxs)("article",{className:"jobs-container",children:[(0,l.jsxs)("header",{children:[(0,l.jsxs)("h4",{children:[(0,l.jsx)("a",{href:i,children:n})," - ",a]}),(0,l.jsxs)("p",{className:"daterange",children:[" ",p()(r).format("MMMM YYYY")," - ",s?p()(s).format("MMMM YYYY"):"PRESENT"]})]}),c?(0,l.jsx)(h.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:c}):null,o?(0,l.jsx)("ul",{className:"points",children:o.map((function(e){return(0,l.jsx)("li",{children:e},e)}))}):null]})},f=function(e){var t=e.data;return(0,l.jsxs)("div",{className:"experience",children:[(0,l.jsx)("div",{className:"link-to",id:"experience"}),(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,l.jsx)(y,{data:e},"".concat(e.name,"-").concat(e.position))}))]})};f.defaultProps={data:[]};var v=f,b=n(4942),j=n(1413),x=function(e){var t=e.handleClick,n=e.active,a=e.label;return(0,l.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},w=function(e){var t=e.data,n=e.categories,a=t.category,i=t.competency,r=t.title,s={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,j.Z)((0,j.Z)({},s),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return(0,l.jsxs)("div",{className:"skillbar clearfix",children:[(0,l.jsx)("div",{className:"skillbar-title",style:s,children:(0,l.jsx)("span",{children:r})}),(0,l.jsx)("div",{className:"skillbar-bar",style:c}),(0,l.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};w.defaultProps={categories:[]};var k=w,S=function(e){var t=e.skills,n=e.categories,r=Object.fromEntries([["All",!1]].concat(n.map((function(e){return[e.name,!1]})))),s=(0,i.useState)(r),c=(0,a.Z)(s,2),o=c[0],d=c[1],u=function(e){var t=Object.keys(o).reduce((function(t,n){return(0,j.Z)((0,j.Z)({},t),{},(0,b.Z)({},n,e===n&&!o[n]))}),{});t.All=!Object.keys(o).some((function(e){return t[e]})),d(t)};return(0,l.jsxs)("div",{className:"skills",children:[(0,l.jsx)("div",{className:"link-to",id:"skills"}),(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h3",{children:"Skills"})}),(0,l.jsx)("div",{className:"skill-button-container",children:Object.keys(o).map((function(e){return(0,l.jsx)(x,{label:e,active:o,handleClick:u},e)}))}),(0,l.jsx)("div",{className:"skill-row-container",children:function(){var e=Object.keys(o).reduce((function(e,t){return o[t]?t:e}),"All");return t.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(t){return"All"===e||t.category.includes(e)})).map((function(e){return(0,l.jsx)(k,{categories:n,data:e},e.title)}))}()})]})};S.defaultProps={skills:[],categories:[]};var N=S,D=function(e){var t=e.data,n=e.last;return(0,l.jsxs)("li",{className:"course-container",children:[(0,l.jsxs)("a",{href:t.link,children:[(0,l.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,l.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,l.jsx)("div",{className:"course-dot",children:(0,l.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var C=D,A=function(e){return e.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(t,n){return(0,l.jsx)(C,{data:t,last:n===e.length-1},t.title)}))},L=function(e){var t=e.data;return(0,l.jsxs)("div",{className:"courses",children:[(0,l.jsx)("div",{className:"link-to",id:"courses"}),(0,l.jsx)("div",{className:"title",children:(0,l.jsx)("h3",{children:"Selected Courses"})}),(0,l.jsx)("ul",{className:"course-list",children:A(t)})]})};L.defaultProps={data:[]};var E=L,M=function(){return(0,l.jsxs)("div",{className:"references",children:[(0,l.jsx)("div",{className:"link-to",id:"references"}),(0,l.jsx)("div",{className:"title",children:(0,l.jsx)(r.rU,{to:"/contact",children:(0,l.jsx)("h3",{children:"References are available upon request"})})})]})},P=[{title:"Operating Systems Principles",number:"CSC 501",link:"https://www.engineeringonline.ncsu.edu/course/csc-501-operating-systems-principles-2/",university:"NC State"},{title:"Design and Analysis of Algorithms",number:"CSC 505",link:"https://www.engineeringonline.ncsu.edu/course/csc-505-design-and-analysis-of-algorithms/",university:"NC State"},{title:"Advanced Topics In Computer Science: Linux Networking",number:"CSC 791-038",link:"https://www.engineeringonline.ncsu.edu/course/",university:"NC State"},{title:"Cloud Computing Technology",number:"ECE 547",link:"https://www.engineeringonline.ncsu.edu/course/ece-547-cloud-computing-technology/",university:"NC State"},{title:"Software Engineering",number:"CSC 510",link:"https://www.engineeringonline.ncsu.edu/course/csc-510-software-engineering/",university:"NC State"}],T=[{school:"North Carolina State University",degree:"M.S. Computer Science",link:"https://www.ncsu.edu/",year:2024},{school:"Gokaraju Rangaraju Institute of Engineering and Technology",degree:"B.S. Computer Science",link:"https://www.griet.ac.in/",year:2020}],W=[{name:"Arrcus, Inc.",position:"Network Software Engineering Intern",url:"https://arrcus.com/",startDate:"2022-06-05",endDate:"2022-08-18",summary:"Arrcus is a multi-cloud networking software. The company offers ArcOS, a network operating system that allows teams to scale up their network, and\n              ArcIQ, a network visibility and analytics platform that provides networking professionals with real-time, deep views of the networks and devices\n              with insights for incident management and troubleshooting.",highlights:["Involved in building ArcOS - An OS for network infrastructure in Data Center, Cloud, and 5G.\n","Extended \u201dshow BGP neighbor\u201d command to incorporate dynamic BGP peers by implementing Operational Data Store \n       in ConfD and implemented show command for EVPN-VPWS tunnel configurations using YANG, ConfD and C.","Designed and implemented process monitoring tool to analyze resource utilization using pidfd open, eBPF, LTTng.\n        Metrics referred file descriptors, memory usage, power consumption, and thread counts, enabling efficient resource\n        management and rapid troubleshooting using gdb."]},{name:"West Agile Labs (now Veltris)",position:"Associate Software Development Engineer",url:"https://www.veltris.com/",startDate:"2020-01-07",endDate:"2022-04-30",summary:'West Agile Labs is a Digital Product Agency based in San Francisco, offering design,\n               development and consulting services to both startups and enterprises. I Worked for building software for <a href="https://www.trycents.com/">Cents</a>,\n              The most integrated laundry and dry cleaning business management system in the industry.',highlights:["Fullstack developer for TryCents Software: Designed and developed a robust application using agile methodology and \n       followed test-driven development to handle over a million users.","Designed UI components using Figma and implemented frontend using ReactJs, React-Native and Redux\n      frameworks. Implemented Class and Functional Components along with lazy loading.","Refactored legacy code to ES6 and optimized the search queries, significantly minimizing the average response time.\n      Implemented backend services using NodeJs, ObjectionJs & Sequelize frameworks, and ElasticSearch following\n      pipeline pattern approach.","Integrated with the APIs of market-leading third-party applications like Twilio, Doordash, Uber, Stripe, and Google to\n      implement the delivery functionality."]},{name:"Neiman Marcus",position:"Freelance Developer",url:"https://www.neimanmarcus.com/",startDate:"2021-09-01",endDate:"2022-07-30",summary:'Neiman Marcus Group, Inc. is an American integrated luxury retailer headquartered in Dallas,\n              Texas, which owns Neiman Marcus, Bergdorf Goodman, Horchow, and Last Call. I worked for Neiman Marcus through <a href="https://www.gbitinc.com/"> GBIT </a>',highlights:["Leveraged serverless architecture, including several AWS services with deployment through Jenkins & Terraform","This infrastructure supported the processing of 3 million records in a single instance and employed Glue and Lambda\n      jobs to harness Apache Spark for high-speed data processing."]}],I=n(3433),R=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Node.JS",competency:5,category:["Web Development","Javascript"]},{title:"React",competency:2,category:["Web Development","Javascript"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"MongoDB",competency:3,category:["Web Development","Databases"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"PostgreSQL/SQLite3/SQL/Redshift",competency:4,category:["Web Development","Databases","Languages"]},{title:"Redis",competency:3,category:["Web Development","Databases"]},{title:"Data Mining",competency:3,category:["ML Engineering"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Flask",competency:3,category:["Web Development","Python"]},{title:"FastAPI",competency:3,category:["Web Development","Python"]},{title:"Git/Mercurial",competency:3,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Data Engineering"]},{title:"AWS",competency:3,category:["Tools","Web Development"]},{title:"Docker",competency:3,category:["Tools","Data Engineering"]},{title:"AWS Lambda",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Data Science","Data Engineering","Python","ML Engineering"]},{title:"Tensorflow + Keras",competency:3,category:["ML Engineering","Python"]},{title:"Jupyter",competency:3,category:["Data Science","Python"]},{title:"Typescript",competency:3,category:["Web Development","Languages","Javascript"]},{title:"HTML + SASS/SCSS/CSS",competency:3,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python","ML Engineering"]},{title:"Ruby",competency:2,category:["Languages"]},{title:"Ruby on Rails",competency:3,category:["Web Development","Languages"]},{title:"C/C++",competency:4,category:["Languages"]}].map((function(e){return(0,j.Z)((0,j.Z)({},e),{},{category:e.category.sort()})})),J=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],O=(0,I.Z)(new Set(R.flatMap((function(e){return e.category})))).sort().map((function(e,t){return{name:e,color:J[t]}})),G={Education:function(){return(0,l.jsx)(m,{data:T})},Experience:function(){return(0,l.jsx)(v,{data:W})},Skills:function(){return(0,l.jsx)(N,{skills:R,categories:O})},Courses:function(){return(0,l.jsx)(E,{data:P})},References:function(){return(0,l.jsx)(M,{})}},Z=function(){return(0,l.jsx)(o.Z,{title:"Resume",description:"Nagaraj Madamshetti's Resume.",children:(0,l.jsxs)("article",{className:"post",id:"resume",children:[(0,l.jsx)("header",{children:(0,l.jsxs)("div",{className:"title",children:[(0,l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,l.jsx)("h2",{style:{margin:"0"},children:(0,l.jsx)(r.rU,{to:"/resume",children:"Resume"})}),(0,l.jsx)("h1",{style:{margin:"0",marginLeft:"10px"},children:(0,l.jsx)(r.rU,{to:"/data/nagaraj_madamshetti.pdf",target:"_blank",download:!0,children:(0,l.jsx)(s.G,{icon:c.ISu})})})]}),(0,l.jsx)("div",{className:"link-container",children:Object.keys(G).map((function(e){return(0,l.jsx)("h4",{children:(0,l.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object.entries(G).map((function(e){var t=(0,a.Z)(e,2),n=t[0],i=t[1];return(0,l.jsx)(i,{},n)}))]})})}}}]);
//# sourceMappingURL=18.b5a0ba0e.chunk.js.map