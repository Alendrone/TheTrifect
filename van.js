{let e,t,l,r,o,n,f,s,a,i,d,u,_,w,h,c,g,v,S,y,V,b,m,x,T,j;f=(n=Object).getPrototypeOf,s=document,i={},d=f(a={isConnected:1}),u=f(f),_=(e,t,l,r)=>(e??(setTimeout(l,r),new Set)).add(t),w=(e,t,r)=>{let o=l;l=t;try{return e(r)}catch(e){return console.error(e),r}finally{l=o}},h=e=>e.filter(e=>e.t?.isConnected),c=t=>o=_(o,t,()=>{for(let e of o)e.l=h(e.l),e.o=h(e.o);o=e},1e3),g={get val(){return l?.add(this),this.i},get oldVal(){return l?.add(this),this.u},set val(l){let r=this;if(l!==r.i){r.i=l;let o=[...r.o=h(r.o)];for(let t of o)V(t.f,t.s,t.t),t.t=e;r.l.length?t=_(t,r,T):r.u=l}}},v=e=>({__proto__:g,i:e,u:e,l:[],o:[]}),S=e=>f(e??0)===g,y=(e,t)=>{let l=new Set,o={f:e},n=r;r=[];let f=w(e,l,t);f=(f??s).nodeType?f:new Text(f);for(let e of l)c(e),e.l.push(o);for(let e of r)e.t=f;return r=n,o.t=f},V=(e,t=v(),l)=>{let o=new Set,n={f:e,s:t};n.t=l??r?.push(n)??a,t.val=w(e,o);for(let e of o)c(e),e.o.push(n);return t},m=t=>new Proxy((l,...r)=>{let[o,...a]=f(r[0]??0)===d?r:[{},...r],_=t?s.createElementNS(t,l):s.createElement(l);for(let[t,r]of n.entries(o)){let o=l=>l?n.getOwnPropertyDescriptor(l,t)??o(f(l)):e,s=l+","+t,a=i[s]??(i[s]=o(f(_))?.set??0),d=a?a.bind(_):_.setAttribute.bind(_,t),w=f(r??0);w===g?y(()=>(d(r.val),_)):w!==u||t.startsWith("on")&&!r.h?d(r):y(()=>(d(r()),_))}return b(_,...a)},{get:(t,l)=>t.bind(e,l)}),x=(e,t)=>t?t!==e&&e.replaceWith(t):e.remove(),T=()=>{let l=[...t].filter(e=>e.i!==e.u);t=e;for(let t of new Set(l.flatMap(e=>e.l=h(e.l))))x(t.t,y(t.f,t.t)),t.t=e;for(let e of l)e.u=e.i},j={add:b=(t,...l)=>{for(let r of l.flat(1/0)){let l=f(r??0),o=l===g?y(()=>r.val):l===u?y(r):r;o!=e&&t.append(o)}return t},_:e=>(e.h=1,e),tags:m(),tagsNS:m,state:v,val:e=>S(e)?e.val:e,oldVal:e=>S(e)?e.oldVal:e,derive:V,hydrate:(e,t)=>x(e,y(t,e))},window.van=j;}