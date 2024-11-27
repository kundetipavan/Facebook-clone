let head = document.getElementById("head");
let video = document.getElementById("videosss");
let msg  = document.getElementById("msggg");
let grp = document.getElementById("groups");
let market = document.getElementById("market");

let ic0 = document.getElementById("ic0");
let ic1 = document.getElementById("ic1");
let ic2 = document.getElementById("ic2");
let ic3 = document.getElementById("ic3");
let ic4 = document.getElementById("ic4");
let fa = document.getElementById("fa");




ic2.onclick = function(){
    head.style.display = "none";
    video.style.display ="block";
}
ic1.onclick = function(){
    head.style.display = "none";
    msg.style.display = "block";
}
ic4.onclick = function(){
    head.style.display = "none";
    grp.style.display ="block";
}
ic3.onclick = function(){
    head.style.display = "none";
    market.style.display ="block";
}
  ic0.onclick = function(){
    video.style.display ="none";
    msg.style.display = "none";
    grp.style.display ="none";
    market.style.display ="none";
    head.style.display = "block";
}


fa.onclick = function(){
    head.style.display = "block";
    video.style.display ="none";
    grp.style.display ="none";
    msg.style.display = "none";

}

let pera = document.getElementById("perag");
ic0.onclick= function(){
    pera.style.display = "block";
}

//all frnds-------
let frrq = document.getElementById("frrq");
let frnd = document.getElementById("frndrq");
let back = document.getElementById("back");
let backk = document.getElementById("backk");
let backkk = document.getElementById("backkk");



frrq.onclick = function(){
    frnd.style.display ="block";
    msg.style.display ="none";
}
back.onclick = function(){
    msg.style.display ="block";
    frnd.style.display ="none";
}

//suggestions-----
let sug = document.getElementById("sug");
let sugg = document.getElementById("sugg");

sug.onclick = function(){
    sugg.style.display ="block";
    msg.style.display ="none";
}
backk.onclick = function(){
    msg.style.display ="block";
    sugg.style.display ="none";
    frnd.style.display ="none";

}
//frnd requesr-------
let alfrnd = document.getElementById("alfrnd");
let alfr = Document.getElementById("alfr");

alfr.onclick = function(){
    msg.style.display ="none";
    alfrnd.style.display = "block";
}
backkk.onclick = function(){
    msg.style.display ="block";
    alfrnd.style.display = "none";
}

