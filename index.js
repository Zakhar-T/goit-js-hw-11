import{a as c,i as p,S as d}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";function g(o,r){return c.get(`?${new URLSearchParams(o)}`).then(a=>{if(a.data.totalHits===0){h();return}return r(a.data.hits)}).catch(a=>console.log(a))}function h(){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const l=document.querySelector(".gallery"),y=new d(".gallery li a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(a=>{const{webformatURL:s,tags:e,largeImageURL:t,likes:i,views:u,comments:m,downloads:f}=a;return`<li class="gallery-card">
          <a href="${t}">
            <img src="${s}" alt="${e}" class="card-image" width="360" height="152" />
            <ul class="card-caption">
              <li class="image-tag"><p>Likes<br />${i}</p></li>
              <li class="image-tag"><p>Views<br />${u}</p></li>
              <li class="image-tag"><p>Comments<br />${m}</p></li>
              <li class="image-tag"><p>Downloads<br />${f}</p></li>
            </ul>
          </a>
        </li>`}).join("");l.insertAdjacentHTML("beforeend",r),y.refresh()}const L=document.querySelector(".form"),n={key:"49370503-7e4a3b73ee503433174e66c4b",q:"",image_type:"photo",orientation:"horizontal",per_page:9,safesearch:!0};L.addEventListener("submit",w);function w(o){o.preventDefault(),l.innerHTML="";const r=o.currentTarget.elements.search.value.trim();n.q=r,g(n,b)}
//# sourceMappingURL=index.js.map
