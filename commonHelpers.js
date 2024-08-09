(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i=document.querySelector(".input"),a=document.querySelector("#searchForm"),u=document.querySelector(".news");async function l(n){const o="ce8f677110414806a753081c344c7117",t="https://newsapi.org/v2/everything",s={q:n,from:"2024-07-15",sortBy:"relevancy",apiKey:o},e=`${t}?`+new URLSearchParams(s).toString();try{return(await axios.get(e)).data.articles}catch(r){return console.error("Error:",r),iziToast.error({title:"Error",message:"Something went wrong. Please try again later."}),[]}}a.addEventListener("submit",async n=>{n.preventDefault();const o=i.value,t=await l(o);d(t),console.log(o)});function d(n){const o=n.map(t=>`
        <div class="news-card">
          <a href="${t.url}" target="_blank">
            <img src="${t.urlToImage}" alt="${t.title}" width='500' />
          </a>
          <div class="image-text">
            <h3>${t.title}</h3>
            <p>${t.description}</p>
          </div>
        </div>
      `).join("");u.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
