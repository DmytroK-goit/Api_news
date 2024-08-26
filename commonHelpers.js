import{i as a}from"./assets/vendor-I1I71QQ2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".input"),u=document.querySelector("#searchForm"),l=document.querySelector(".news");i.addEventListener("input",()=>{u.disabled=i.value.trim()===""});async function d(s){if(s.trim()==="")return a.error({title:"Помилка",message:"Поле запиту не може бути порожнім."}),[];const o="ce8f677110414806a753081c344c7117",r="https://newsapi.org/v2/everything",n={q:s,from:"2024-07-15",sortBy:"publishedAt",pageSize:20,page:1,apiKey:o},e=`${r}?`+new URLSearchParams(n).toString();console.log(e);try{const t=await axios.get(e);return a.show({title:"Знайдено",color:"green",message:`${t.data.totalResults} записів про " ${s} "`}),t.data.articles}catch(t){return console.error("Error:",t),a.error({title:"Error",message:`${t}`}),[]}}u.addEventListener("submit",async s=>{s.preventDefault();const o=i.value,r=await d(o);p(r),console.log(o),i.value=""});function p(s){const o=s.map(r=>`
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
