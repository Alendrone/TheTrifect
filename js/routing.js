const{div:e}=this.van.tags,nowRoute=()=>{let e=location.hash.split("/"),t={name:e[1]??"home",args:e.slice(2)};return t},activeRoute=van.state(nowRoute());window.addEventListener("hashchange",()=>{activeRoute.val=nowRoute()});const Route=(t,...o)=>{let{name:a,onFirst:n,onLoad:u,...h}=t,s=!0;return van.derive(()=>{activeRoute.val.name==t.name&&(s&&t.onFirst&&(t.onFirst(activeRoute.val),s=!1),t.onLoad&&t.onLoad(activeRoute.val))}),e({hidden:()=>t.name!=activeRoute.val.name,...h},o)},routeTo=(e="home",t=[])=>{0==t.length?"home"==e?(location.hash="",history.replaceState(null,"","./")):location.hash=`/${e}`:location.hash=`/${e}/${t.join("/")}`};window.Route=Route,window.routeTo=routeTo;