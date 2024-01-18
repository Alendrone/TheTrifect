window.Vlitejs.registerProvider("youtube", window.VlitejsYoutube);
var van = this.van,
  menu = van.state(0),
  view = document.getElementById("app"),
  loadr = document.getElementById("loader"),
  subcqint = 0,
  evnt,
  playback;
function frag(name) {
  return van.tags[name];
}
var h1 = frag("h1"),
  span = frag("span"),
  div = frag("div");
function decide(val) {
  document.title = document.title.split(" —")[0] + [" — HOME", " — SUPPORT", " — EPISODES"][menu.val];
  return val[menu.val];
}
function sel(val) {
  return van.derive(decide.bind(ux, val));
}
function ux() {
  var div = frag("div"),
    span = frag("span"),
    hr = frag("hr"),
    br = frag("br"),
    b = frag("b"),
    p = frag("p"),
    h1 = frag("h1"),
    iframe = frag("iframe"),
    stripe = frag("stripe-buy-button"),
    audio = frag("audio"),
    source = frag("source"),
    img = frag("img"),
    blockquote = frag("blockquote"),
    yt = frag("svg")({ class: "brand" }),
    ico = frag("svg")(),
    base = div({ class: "wrapper" });
  ico.innerHTML = r;
  base.style.zIndex = "0";
  yt.innerHTML = "<svg id=title xmlns=http://www.w3.org/2000/svg width=256 height=256 preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 256 256\"><defs><clipPath id=a clipPathUnits=userSpaceOnUse><path d=\"M0 192h192V0H0Z\"/></clipPath></defs><g clip-path=\"url(#a)\" transform=\"matrix(1 0 0 -1 0 256)\"><path fill=\"red\" d=\"M180 139c-2 7-8 13-15 15-14 4-69 4-69 4s-55 0-69-4c-7-2-13-8-15-15-4-14-4-43-4-43s0-29 4-43c2-7 8-13 15-15 14-4 69-4 69-4s55 0 69 4c7 2 13 8 15 15 4 14 4 43 4 43s0 29-4 43\"/></g></svg>";
  van.add(base, blockquote({ class: "blockquote" }, sel([span("Few’s ", yt, span({ style: "vertical-align:super;font-size:.5em" }, "(dot) "), span("Tube"), span("\n\n\"Us Few, our "), span({ style: "color:#F00" }, "‘Tube.\"")), span("Support Us"), span("Episode Catalog")])));
  setTimeout(function() {
    loadr.style.visibility = "none";
    loadr.style.display = "none";
    loadr.style.opacity = "0";
  }, 1400);
  if (menu.val === 0) {
    van.add(base, br(), div({ class: "card" }, div({ class: "card-body" }, div({ class: "card-header" }, h1("Welcome!")), div({ class: "card-subtitle" }, br(), p({ style: "color:#e7ee46" }, "About Us"), img({ class: "card-img", src: "./fewstube.png" }), hr({ class: "hr" }), div({ class: "card-text" }, p(b("The Trifect"), ico, span({ style: "color:#1bdda6" }, "\n(/ðə/ \n/ˈtɹaɪˌfɛkt/)"), audio({ class: "player", preload: "auto" }, source({ type: "audio/mpeg", src: "./voice.mp3" })), "\n…is an interactive podcast/​audiodrama\n-esque series, informally a \"not-cast\", with added visual aid that discusses topics of all kinds like the elements of animation, personal identity, & exploring the soporose of minds' desires."))))));
    playback = base.getElementsByClassName("player")[0];
    evnt = ico.addEventListener("click", function() {
      playback.play();
    });
    return base;
  }
  if (menu.val === 1) {
    van.add(base, br(), stripe({ "buy-button-id": "buy_btn_1OYsrTKId2VTrC5PAWq0b9n5", "publishable-key": "pk_live_51N8DXiKId2VTrC5PrwdmUUg5jBR5i0z7o39DRKfILNimt4AHldGP5f5iapjOGNcaHdKtMlNQ5GF4l83aROClXzao00J6YR7FIp" }));
    return base;
  }
  if (menu.val === 2) {
    van.add(base, div({ class: "text-danger" }, "No episodes yet"));
    van.add(base, div({ id: "ytb", class: "vid" }));
    var ytb = base.getElementsByClassName("vid")[0];
    ytb.dataset["youtubeId"] = "Eg7JfLZM5PU";
    var thumb = "https://i3.ytimg.com/vi/" + ytb.dataset["youtubeId"] + "/maxresdefault.jpg";
    var player = new Vlitejs(ytb, {
      options: {
        controls: true,
        autoplay: true,
        playPause: true,
        progressBar: true,
        time: true,
        volume: true,
        fullscreen: true,
        poster: thumb,
        bigPlay: true,
        playsinline: true,
        loop: true,
        muted: false,
        autoHide: true,
        providerParams: {
          autoplay: 1,
          start: 0,
          end: 60,
          playsinline: 1,
          controls: 0,
          iv_load_policy: 3,
          rel: 0,
          loop: 1
        }
      },
      onReady: function(p) {
        p.play();
        p.unMute();
      },
      provider:"youtube"
    });
    subcqint = 1;
    return base;
  };
  //var after = base.getElementsByClassName("card")[0].firstElementChild;
  // if (menu.val === 2) van.add(after,h1("help"));
  return base;
}

function Page() {
return div({ id: "app", class: "encloser" }, ux);
}
van.add(view, Page);

van.derive(function() {
  if (evnt) playback.removeEventListener(evnt);
  van.hydrate(view, Page);
});