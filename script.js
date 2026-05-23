/* ================= LOADER ================= */

window.addEventListener("load",()=>{

  setTimeout(()=>{

    document
      .getElementById("loader")
      .classList.add("hidden");

  },1600);

});

/* ================= MENU ================= */

document
  .getElementById("toggle")
  .onclick=()=>{

    document
      .getElementById("menu")
      .classList.toggle("active");

};

/* ================= PARTICLES ================= */

const particles=document.getElementById("particles");

for(let i=0;i<45;i++){

  let s=document.createElement("span");

  s.style.left=Math.random()*100+"%";

  s.style.animationDuration=
    8+Math.random()*12+"s";

  particles.appendChild(s);
}

/* ================= LEAVES ================= */

const leaves=document.getElementById("leaves");

for(let i=0;i<22;i++){

  let l=document.createElement("span");

  l.style.left=Math.random()*100+"%";

  l.style.animationDuration=
    10+Math.random()*12+"s";

  leaves.appendChild(l);
}
