import{i as c}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const a=document.querySelector(".input"),u=document.querySelector("#searchForm"),l=document.querySelector(".news");a.addEventListener("input",()=>{u.disabled=a.value.trim()===""});async function d(s){if(s.trim()==="")return c.error({title:"Помилка",message:"Поле запиту не може бути порожнім."}),[];const o="ce8f677110414806a753081c344c7117",r="https://newsapi.org/v2/everything",n={q:s,from:"2024-07-15",sortBy:"publishedAt",apiKey:o},e=`${r}?`+new URLSearchParams(n).toString();console.log(e);try{const t=await axios.get(e);return c.show({title:"Знайдено",color:"green",message:`${t.data.totalResults} записів про " ${s} "`}),t.data.articles}catch(t){return console.error("Error:",t),c.error({title:"Error",message:`${t.message}`}),[]}}u.addEventListener("submit",async s=>{s.preventDefault();const o=a.value,r=await d(o);f(r),console.log(o)});function f(s){const o=s.map(r=>`
        <div class="news-card">
          <a href="${r.url}" target="_blank">
            <img src="${r.urlToImage}" alt="${r.title}" width='500' />
          </a>
          <div class="image-text">
            <h3>${r.title} ${r.publishedAt}</h3>
            <p>${r.description}</p>
          </div>
        </div>
      `).join("");l.innerHTML=o}
//# sourceMappingURL=commonHelpers.js.map
