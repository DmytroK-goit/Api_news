import{i}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".input"),l=document.querySelector("#searchForm"),u=document.querySelector(".news");async function d(n){const o="https://cors-anywhere.herokuapp.com/",r="ce8f677110414806a753081c344c7117",c="https://newsapi.org/v2/everything",e={q:n,from:"2024-07-15",sortBy:"relevancy",apiKey:r},t=o+c+"?"+new URLSearchParams(e).toString();try{const s=await axios.get(t);return console.log(s.data),i.show({title:"FIND",color:"green",message:`Found ${s.data.totalResults} articles`}),console.log(s.data.articles),s.data.articles}catch(s){return console.error("Error:",s),i.error({title:"Error",message:"Something went wrong. Please try again later."}),[]}}l.addEventListener("submit",async n=>{n.preventDefault();const o=a.value,r=await d(o);p(r),console.log(o)});function p(n){const o=n.map(r=>`
        <div class="news-card">
          <a href="${r.url}" target="_blank">
            <img src="${r.urlToImage}" alt="${r.title}" width='500' />
          </a>
          <div class="image-text">
            <h3>${r.title}</h3>
            <p>${r.description}</p>
          </div>
        </div>
      `).join("");u.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
