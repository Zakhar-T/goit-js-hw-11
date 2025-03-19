import{a as n,i as f,S as p}from"./assets/vendor-DtRopbQG.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();n.defaults.baseURL="https://pixabay.com/api/";const c={key:"49370503-7e4a3b73ee503433174e66c4b",image_type:"photo",orientation:"horizontal",per_page:9,safesearch:!0};function h(o,r){c.q=o,n.get(`?${new URLSearchParams(c)}`).then(a=>{if(a.data.totalHits===0){y();return}r(a.data.hits)}).catch(a=>console.log(a))}function y(){f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const l=document.querySelector(".gallery"),u=document.querySelector(".gallery+span"),L=new p(".gallery li a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(a=>{const{webformatURL:i,tags:e,largeImageURL:t,likes:s,views:m,comments:d,downloads:g}=a;return`<li class="gallery-card">
          <a href="${t}">
            <img src="${i}" alt="${e}" class="card-image" width="360" height="152" />
            <ul class="card-caption">
              <li class="image-tag"><p>Likes<br />${s}</p></li>
              <li class="image-tag"><p>Views<br />${m}</p></li>
              <li class="image-tag"><p>Comments<br />${d}</p></li>
              <li class="image-tag"><p>Downloads<br />${g}</p></li>
            </ul>
          </a>
        </li>`}).join("");u.classList.toggle("loader"),l.insertAdjacentHTML("beforeend",r),L.refresh()}const w=document.querySelector(".form");w.addEventListener("submit",P);function P(o){o.preventDefault(),l.innerHTML="",u.classList.toggle("loader");const r=o.currentTarget.elements.search.value.toLowerCase().trim();h(r,b)}
//# sourceMappingURL=index.js.map
