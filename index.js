import{i as u,a as n}from"./assets/vendor-Bd5OyJDH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});n.defaults.baseURL="https://pixabay.com/api/";const d=document.querySelector(".form"),c=document.querySelector(".gallery"),l={key:"49370503-7e4a3b73ee503433174e66c4b",q:"",image_type:"photo",orientation:"horizontal",per_page:9,safesearch:!0};d.addEventListener("submit",p);function p(r){r.preventDefault(),c.innerHTML="";const s=r.currentTarget.elements.search.value;l.q=s,m()}function m(){return n.get(`?${new URLSearchParams(l)}`).then(r=>r.status!==200?f:h(r.data.hits)).catch(r=>console.log(r))}function h(r){const s=r.map(o=>`<li class="gallery-card">
          <img src="${o.webformatURL}" alt="${o.id}" class="card-image" width="360" height="152" />
          <ul class="card-caption">
            <li class="image-tag"><p>Likes<br />${o.likes}</p></li>
            <li class="image-tag"><p>Views<br />${o.views}</p></li>
            <li class="image-tag"><p>Comments<br />${o.comments}</p></li>
            <li class="image-tag"><p>Downloads<br />${o.downloads}</p></li>
          </ul>
        </li>`).join("");c.insertAdjacentHTML("beforeend",s)}
//# sourceMappingURL=index.js.map
