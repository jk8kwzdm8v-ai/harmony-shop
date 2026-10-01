const P=[
["Бахрома классическая","Бахрома","5–25 см","Густая декоративная бахрома для костюмов, одежды, штор и интерьерных деталей","art-fringe"],
["Бахрома мягкая","Бахрома","15–20 см","Мягкая длинная бахрома с красивым движением для сценических и вечерних изделий","art-fringe"],
["Атласная лента","Ленты","10–50 мм","Гладкая лента с аккуратным сатиновым блеском для отделки и упаковки","art-ribbon"],
["Бархатная лента","Ленты","10–40 мм","Глубокая фактура бархата для одежды, аксессуаров и декоративных акцентов","art-velvet"],
["Декоративная тесьма","Тесьма","2–10 см","Орнаментальная тесьма для выразительной отделки платьев, костюмов и текстиля","art-trim"],
["Золотая тесьма","Тесьма","1–5 см","Металлизированный декоративный орнамент с праздничным акцентом","art-gold"],
["Резинка текстильная","Резинки","5–50 мм","Эластичная тесьма для одежды, белья, аксессуаров и швейных проектов","art-elastic"],
["Перья декоративные","Перья","15–20 см","Лёгкий декоративный материал для костюмов, аксессуаров и творческих работ","art-feather"],
["Кружево ажурное","Кружева","5–15 см","Нежная ажурная фактура для одежды, текстиля и декоративной отделки","art-lace"],
["Шнур декоративный","Шнуры","2–8 мм","Плотные декоративные шнуры для кантов, завязок и оформления изделий","art-cord"],
["Цветы декоративные","Декор","5–10 см","Объёмные цветочные элементы для одежды, аксессуаров и праздничного декора","art-flowers"],
["Пайетки и блеск","Декор","по запросу","Блестящие декоративные элементы для акцентной отделки и сценических образов","art-sequin"]
];
const cats=[["Бахрома","v-fringe"],["Ленты","v-ribbon"],["Резинки","v-elastic"],["Перья","v-feather"],["Тесьма","v-trim"]];
const catnav=["Бахрома","Ленты","Тесьма","Резинки","Перья","Кружева","Шнуры","Декор"];
const products=document.querySelector("#products"), filters=document.querySelector("#filters");
function visual(c){return `<div class="visual ${c}"></div>`}
function render(filter="Все"){
 products.innerHTML=P.filter(x=>filter==="Все"||x[1]===filter).map((x,i)=>`<article class="product" data-i="${P.indexOf(x)}">${visual(x[4])}<div class="body"><div class="catname">${x[1]}</div><h3>${x[0]}</h3><div class="bottom"><span>${x[2]}</span><b>Подробнее →</b></div></div></article>`).join("");
 document.querySelectorAll(".product").forEach(e=>e.onclick=()=>openProduct(+e.dataset.i));
}
function setFilter(f){document.querySelectorAll(".filters button").forEach(b=>b.classList.toggle("active",b.dataset.f===f));render(f);document.querySelector("#catalog").scrollIntoView({behavior:"smooth"})}
filters.innerHTML=["Все",...catnav].map(x=>`<button data-f="${x}">${x}</button>`).join("");
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>setFilter(b.dataset.f));
document.querySelector("#catnav").innerHTML=catnav.map(x=>`<button data-f="${x}">✿ <span>${x}</span></button>`).join("");
document.querySelector("#cats").innerHTML=cats.map(x=>`<button class="cat" data-f="${x[0]}"><div class="cat-visual ${x[1]}"></div><b>${x[0]}</b><span>→</span></button>`).join("");
document.querySelectorAll("[data-f]").forEach(b=>b.addEventListener("click",()=>setFilter(b.dataset.f)));
render("Все");document.querySelector('.filters button').classList.add("active");

function openProduct(i){
 const x=P[i];document.querySelector("#mvisual").innerHTML=visual(x[4]);
 document.querySelector("#mcat").textContent=x[1];document.querySelector("#mtitle").textContent=x[0];
 document.querySelector("#mdesc").textContent=x[3];document.querySelector("#mtags").innerHTML=`<span>${x[2]}</span><span>метраж</span><span>по запросу</span>`;
 document.querySelector("#modal").classList.add("show");
}
document.querySelector("#mclose").onclick=()=>document.querySelector("#modal").classList.remove("show");
document.querySelector("#modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("show")};

const drawer=document.querySelector("#drawer"),shade=document.querySelector("#shade");
document.querySelector("#open").onclick=()=>{drawer.classList.add("open");shade.classList.add("show")};
function closeDrawer(){drawer.classList.remove("open");shade.classList.remove("show")}
document.querySelector("#close").onclick=closeDrawer;shade.onclick=closeDrawer;
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>{closeDrawer();document.querySelector("#"+b.dataset.go).scrollIntoView({behavior:"smooth"})});
