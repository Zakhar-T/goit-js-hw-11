import{a as c,i as d,S as p}from"./assets/vendor-miJmEu1V.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com/api/";const g=document.querySelector(".form"),n=document.querySelector(".gallery"),l={key:"49370503-7e4a3b73ee503433174e66c4b",q:"",image_type:"photo",orientation:"horizontal",per_page:9,safesearch:!0};g.addEventListener("submit",h);n.addEventListener("click",w);function h(t){t.preventDefault(),n.innerHTML="";const a=t.currentTarget.elements.search.value.trim();l.q=a,y()}function y(){return c.get(`?${new URLSearchParams(l)}`).then(t=>{if(console.log(t),t.data.totalHits===0){L();return}return b(t.data.hits)}).catch(t=>console.log(t))}function b(t){const a=t.map(s=>{const{webformatURL:i,tags:e,largeImageURL:r,likes:o,views:u,comments:f,downloads:m}=s;return`<li class="gallery-card">
          <a href="${r}">
            <img src="${i}" alt="${e.split(",")[0]}" class="card-image" width="360" height="152" />
            <ul class="card-caption">
              <li class="image-tag"><p>Likes<br />${o}</p></li>
              <li class="image-tag"><p>Views<br />${u}</p></li>
              <li class="image-tag"><p>Comments<br />${f}</p></li>
              <li class="image-tag"><p>Downloads<br />${m}</p></li>
            </ul>
          </a>
        </li>`}).join("");n.insertAdjacentHTML("beforeend",a)}function L(){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function w(t){t.target.nodeName==="A"&&(t.preventDefault(),new p(".gallery li a",{captionsData:"alt",captionDelay:250}))}
//# sourceMappingURL=index.js.map
