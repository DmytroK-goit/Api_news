import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const i=document.querySelector(".input"),l=document.querySelector("#searchForm"),u=document.querySelector(".news");async function d(n){const s="https://cors-anywhere.herokuapp.com/",o="ce8f677110414806a753081c344c7117",c="https://newsapi.org/v2/everything",e={q:n,from:"2024-07-15",sortBy:"relevancy",apiKey:o},t=s+c+"?"+new URLSearchParams(e).toString();try{const r=await axios.get(t,{headers:{"x-requested-with":"XMLHttpRequest"}});return console.log(r.data),a.show({title:"FIND",color:"green",message:`Found ${r.data.totalResults} articles`}),console.log(r.data.articles),r.data.articles}catch(r){return console.error("Error:",r),console.error("Response error:",r.response.data),console.error("Status:",r.response.status),console.error("Headers:",r.response.headers),a.error({title:"Error",message:r.message}),[]}}l.addEventListener("submit",async n=>{n.preventDefault();const s=i.value,o=await d(s);p(o),console.log(s)});function p(n){const s=n.map(o=>`
        <div class="news-card">
          <a href="${o.url}" target="_blank">
            <img src="${o.urlToImage}" alt="${o.title}" width='500' />
          </a>
          <div class="image-text">
            <h3>${o.title}</h3>
            <p>${o.description}</p>
          </div>
        </div>
      `).join("");u.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map
