(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{7460:function(e,t,s){Promise.resolve().then(s.bind(s,3905))},3905:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return i}});var a=s(7437),n=s(2265),r=s(6923),c=s(4086),l=s(9759);function i(){let{user:e}=(0,r.useAuth)(),[t,s]=(0,n.useState)([]),[i,d]=(0,n.useState)("");(0,n.useEffect)(()=>{let e=(0,c.hJ)(l.db,"chat"),t=(0,c.cf)(e,e=>{let t=e.docs.map(e=>e.data());s(t)});return()=>t()},[]);let u=async()=>{if(""===i.trim())return;let a=(0,c.hJ)(l.db,"chat");await (0,c.ET)(a,{text:i,userId:e.uid,timestamp:(0,c.Bt)()}),s([{text:i,userId:e.uid,timestamp:new Date},...t]),d("")};return(0,a.jsx)(a.Fragment,{children:e?(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("div",{className:"flex-1 overflow-y-auto px-4 py-6",children:t.map((t,s)=>(0,a.jsxs)("div",{className:"p-2 rounded-lg mb-2 flex flex-col ".concat(t.userId===e.uid?"bg-blue-500 text-white self-end":"bg-gray-200 text-gray-700 self-start"),children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"text-bold",children:null==e?void 0:e.displayName}),(0,a.jsx)("div",{className:"text-gray-400 text-right",children:t.timestamp?new Date(1e3*t.timestamp.seconds).toLocaleTimeString():""})]}),t.text]},s))}),(0,a.jsx)("div",{className:"p-4 border-t",children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("textarea",{className:"flex-1 border rounded-lg p-2 mr-2 resize-none",value:i,onChange:e=>d(e.target.value),placeholder:"Type your message..."}),(0,a.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-lg",onClick:u,children:"Send"})]})})]}):(0,a.jsx)("div",{className:"text-center",children:"You must be logged in to be in chat"})})}},6923:function(e,t,s){"use strict";s.r(t),s.d(t,{AuthProvider:function(){return i},useAuth:function(){return d}});var a=s(7437),n=s(2265),r=s(3085),c=s(9759);let l=(0,n.createContext)(),i=e=>{let{children:t}=e,[s,i]=(0,n.useState)(null),d=async()=>{try{let e=new r.hJ;await (0,r.rh)(c.I,e)}catch(e){console.log(e)}},u=async()=>{try{await (0,r.w7)(c.I)}catch(e){console.log(e)}};return(0,n.useEffect)(()=>{let e=(0,r.Aj)(c.I,e=>{i(e)});return e},[s]),(0,a.jsx)(l.Provider,{value:{user:s,signInWithGoogle:d,logOut:u},children:t})},d=()=>(0,n.useContext)(l)},9759:function(e,t,s){"use strict";s.d(t,{I:function(){return i},db:function(){return l}});var a=s(994),n=s(4086),r=s(3085);let c=(0,a.ZF)({apiKey:"AIzaSyCg90GKTw3rsnekkNlwubneMKbL0eD-HI8",authDomain:"ssr-chat-ad10c.firebaseapp.com",projectId:"ssr-chat-ad10c",storageBucket:"ssr-chat-ad10c.appspot.com",messagingSenderId:"960439100989",appId:"1:960439100989:web:08d9b80716d862398dac54"}),l=(0,n.ad)(c),i=(0,r.v0)(c)}},function(e){e.O(0,[358,413,647,971,596,744],function(){return e(e.s=7460)}),_N_E=e.O()}]);