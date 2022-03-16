class App{constructor({dir:t,hamburgerButton:e,userButton:n,redirectButton:i,navbar:s}){this.dir=t,this.hamburgerButton=e,this.userButton=n,this.redirectButton=i,this.navbar=s}toggleClassActive(){this.classList.toggle("active")}getPathname=()=>{let t=this.dir.split("/").filter((t=>""!==t&&"pages"!=t)).join("/").split("/").map((t=>{if(t.split(".html").length>1)return`  /  <a href="${this.dir}">${t}</a>`;return`  /  <a href="${this.dir.split(t).shift()}${t}.html">${t}</a>`})).join(" ").split(".").slice(0,-1).join(".");[...this.navbar].forEach((function(e){e.innerHTML=`<a href="/">HOME</a> ${t}`}))};setBodyClass=()=>{if(document.body.removeAttribute("class"),"/"==this.dir)document.body.classList.add("main");else{let t=this.dir.split("/").pop().split(".").shift();document.body.classList.add(t)}};windowSize=()=>{window.innerWidth<760?(this.hamburgerButton.style.display="inline-flex",[...document.getElementsByClassName("nav_conent-menu")].forEach((function(t){t.classList.add("menu-toggle")}))):(this.hamburgerButton.style.display="none",[...document.getElementsByClassName("nav_conent-menu")].forEach((function(t){t.classList.remove("menu-toggle")})))};loadPage(t){t.preventDefault();let e=this.getAttribute("value"),n=this.pathname;loadDoc(n),collection(),document.body.removeAttribute("class"),document.body.classList.add(e)}run(){this.getPathname(),this.setBodyClass(),this.windowSize(),window.addEventListener("resize",this.windowSize),this.hamburgerButton.addEventListener("click",this.toggleClassActive),Array.from(this.userButton).forEach((t=>{t.addEventListener("click",this.toggleClassActive)})),Array.from(this.redirectButton).forEach((t=>{t.addEventListener("click",this.loadPage)})),window.onload=collection}}const app=new App({dir:window.location.pathname,hamburgerButton:document.getElementById("hide-show_menu"),userButton:document.getElementsByClassName("hide-show_userpanel"),redirectButton:document.getElementsByClassName("redirect"),navbar:document.getElementsByClassName("navigation-bar")});app.run();const container=document.getElementById("main_content-collection"),containeritem=document.getElementById("item_content-page");function collection(){fetch("/items.json").then((t=>t.json())).then((t=>{const e=t.items;if(container&&e.forEach((t=>{let e=document.createElement("div");e.classList.add("main_content-collection--item"),e.innerHTML=`\n        <a href="/pages/collection/item.html#${t.id}">\n        <div class="item-img">\n        <img src="${t.img}" alt="${t.title}" width="295" height="315">\n        </div>\n        <h3>${t.title}</h3>\n        </a>\n        `,container.appendChild(e)})),containeritem){const t=parseInt(window.location.hash.split("#").pop());let n=document.createElement("div"),i=e[t-1];n.classList.add("item-inner"),n.innerHTML=`\n      <h1>${i.title}</h1>\n      <div class="item_content">\n      <img src="${i.img}" alt="${i.title}" width="623" height="644">\n      <div class="item_content-text">\n      <h2>${i.sectiontitle}</h2>\n      <p class="main_content-text">\n      ${i.text}\n      </p>\n      </div>\n      </div>\n      `,containeritem.appendChild(n)}})).catch((t=>console.error(t)))}loadDoc=t=>{const e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&200==this.status&&(document.getElementById("main_content").innerHTML=this.responseText)},e.open("GET",t,!0),e.send()};
//# sourceMappingURL=all.js.map