(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const i=document.querySelector(".input"),a=document.querySelector("#searchForm"),u=document.querySelector(".news");async function l(n){const o="ce8f677110414806a753081c344c7117",r="https://newsapi.org/v2/everything",s={q:n,from:"2024-07-15",sortBy:"relevancy",apiKey:o},e=`${r}?`+new URLSearchParams(s).toString();try{return(await axios.get(e)).data.articles}catch(t){return console.error("Error:",t),[]}}a.addEventListener("submit",async n=>{n.preventDefault();const o=i.value,r=await l(o);d(r),console.log(o)});function d(n){const o=n.map(r=>`
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
