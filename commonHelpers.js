import{i}from"./assets/vendor-ad859c2f.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".input"),l=document.querySelector("#searchForm"),u=document.querySelector(".news");async function d(n){const s="https://cors-anywhere.herokuapp.com/",r="ce8f677110414806a753081c344c7117",c="https://newsapi.org/v2/everything",e={q:n,from:"2024-07-15",sortBy:"relevancy",apiKey:r},t=s+c+"?"+new URLSearchParams(e).toString();try{const o=await axios.get(t);return console.log(o.data),i.show({title:"FIND",color:"green",message:`Found ${o.data.totalResults} articles`}),console.log(o.data.articles),o.data.articles}catch(o){return console.error("Error:",o),i.error({title:"Error",message:o.message}),[]}}l.addEventListener("submit",async n=>{n.preventDefault();const s=a.value,r=await d(s);p(r),console.log(s)});function p(n){const s=n.map(r=>`
        <div class="news-card">
          <a href="${r.url}" target="_blank">
            <img src="${r.urlToImage}" alt="${r.title}" width='500' />
          </a>
          <div class="image-text">
            <h3>${r.title}</h3>
            <p>${r.description}</p>
          </div>
        </div>
      `).join("");u.innerHTML=s}
//# sourceMappingURL=commonHelpers.js.map
