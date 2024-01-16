var root = document.body,
items = [],
observer,
wrapper = document.getElementsByClassName("encloser")[0],
main = document.getElementById("epicenter"),
active_slot = document.getElementById("fg"),
last = active_slot,
feed = document.querySelector("audio"),
vlite = new Vlitejs(feed,{
  options:{
    controls:false,
  },
  onReady:function(p){
    console.log("yup");
  },
  provider:"html5",
  plugins:[]
}),
tym,
lazy = document.getElementById("loader"),
player;
window.Vlitejs.registerProvider("youtube", window.VlitejsYoutube);
function throttle (func, delay) {
var prev = 0;
return function () {
if ((Date.now() - prev) > delay){
prev = Date.now();
clearTimeout(tym);
last.removeAttribute("disabled");
return func.apply(this,arguments);
} else {
  last = active_slot;
  last.setAttribute("disabled","true");
  tym = setTimeout(function () {last.removeAttribute("disabled")},delay);
}
}
}
function aft () {
observer.unobserve(main);
window.addEventListener("resize", throttle(function () {
  observer.observe(main);
  for (var nth = 3;nth;--nth) {
    items[nth - 1].classList.add("disable-transition");
  }
},2048));
for (var nth = 3;nth;--nth) {
 items[nth - 1].classList.remove("disable-transition");
}
}
observer = new ResizeObserver(aft);
observer.observe(main);

function press (cur) {
var ocur = cur - 1,
xy = [2,5],
selected = ["pnult","alph"],
sibling = ["alph","pnult"],
dir = 0,
helm;

lazy.style.visibility = "visible";
lazy.style.display = "inline-block";
lazy.style.opacity = "1";

menu.val = cur;
if (ocur) {
xy[1] = -xy[1];
--dir;
}
else {
xy[0] = -xy[0];
++dir;
}
helm = cur + dir;
active_slot.addEventListener("transitionend",function(){active_slot.removeAttribute("disabled");},{once:true});
active_slot.setAttribute("disabled","true");
active_slot.classList.remove(selected[ocur]);
active_slot.classList.remove(sibling[ocur]);
active_slot.style.inset = "0";
active_slot.classList.add(selected[ocur]);
active_slot.style.inset = "1.625em " + (xy[0] + .5) + "em";

items[helm].addEventListener("transitionend",function(){items[helm].removeAttribute("disabled");},{once:true});
items[helm].setAttribute("disabled","true");
items[helm].classList.remove(sibling[ocur]);
items[helm].classList.remove(selected[ocur]);
items[helm].classList.remove("ult");
items[helm].classList.add(sibling[ocur]);
items[helm].style.inset = "0 " + xy[1] + "em";

items[0].classList.remove("ult");
items[0].classList.remove("pnult");
items[0].classList.remove("alph");
items[0].classList.add("ult");
items[0].style.inset = "2em " + xy[0] + "em";

if (cur === 1) {
  active_slot.style.left = "-2.5em";
  active_slot.style.right = "1.75em";
  items[0].style.left = "-3em";
}

items[0].addEventListener("transitionend",function(){items[0].removeAttribute("disabled");},{once:true});
items[0].setAttribute("disabled","true");
}
function lookup () {
var nth = 3;
for (var name = ["ult","pnult","alph"];nth;--nth) {
items[nth - 1] = root.getElementsByClassName(name[nth - 1])[0];
}
items[0].addEventListener("click", throttle(function (e) {
active_slot = e.target;
menu.val = 0;
items[2].style.inset = "0";
items[1].style.inset = "0";
items[0].style.inset = "3.625em -.625em";
},4096));
items[1].addEventListener("click",throttle(function (e) {
active_slot = e.target;
press(1);
},3072));
items[2].addEventListener("click",throttle(function (e) {
active_slot = e.target;
press(2);
},2048));
}
lookup();