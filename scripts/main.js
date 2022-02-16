(()=>{var t={321:()=>{const t="portfolio",e=document.querySelector(".".concat(t,"__buttons"));if(!(e instanceof HTMLDivElement))throw new Error("Buttons container not found");const o=e.querySelectorAll("button"),n=document.querySelectorAll(".".concat(t,"__images img"));e.addEventListener("click",(t=>{const{target:e}=t;e instanceof HTMLButtonElement&&(t.preventDefault(),e.classList.contains("button_active")||(o.forEach((t=>{t.classList.add("button_with-pulse"),t.classList.remove("button_active")})),e.classList.add("button_active"),e.classList.remove("button_with-pulse"),n.forEach(((t,o)=>{var n;t.src="./images/content/".concat(null!==(n=e.dataset.season)&&void 0!==n?n:"autumn","/").concat(o+1,".jpg")}))))})),function(){const t=["winter","spring","summer","autumn"];for(let e=1;e<=6;e+=1)t.forEach((t=>{new Image(450,560).src="./images/content/".concat(t,"/").concat(e,".jpg")}))}()}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n](s,s.exports,o),s.exports}(()=>{"use strict";const t="language";const e={en:{skills:"Skills",portfolio:"Portfolio",video:"Video",price:"Price",contacts:"Contacts","hero-title":"Alexa Rise","hero-text":"Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise","hero-hire":"Hire me","skill-title-1":"Digital photography","skill-text-1":"High-quality photos in the studio and on the nature","skill-title-2":"Video shooting","skill-text-2":"Capture your moments so that they always stay with you","skill-title-3":"Rotouch","skill-text-3":"I strive to make photography surpass reality","skill-title-4":"Audio","skill-text-4":"Professional sounds recording for video, advertising, portfolio","portfolio-winter":"Winter","portfolio-spring":"Spring","portfolio-summer":"Summer","portfolio-autumn":"Autumn","price-text-1-1":"One location","price-text-1-2":"120 photos in color","price-text-1-3":"12 photos in retouch","price-text-1-4":"Readiness 2-3 weeks","price-text-1-5":"Make up, visage","price-text-2-1":"One or two locations","price-text-2-2":"200 photos in color","price-text-2-3":"20 photos in retouch","price-text-2-4":"Readiness 1-2 weeks","price-text-2-5":"Make up, visage","price-text-3-1":"Three locations or more","price-text-3-2":"300 photos in color","price-text-3-3":"50 photos in retouch","price-text-3-4":"Readiness 1 week","price-text-3-5":"Make up, visage, hairstyle","price-order":"Order shooting","contact-title":"Contact me","contact-e-mail":"E-mail","contact-phone":"Phone","contact-message":"Message","contact-send":"Send message","footer-rss":"Rolling Scopes School"},ru:{skills:"Навыки",portfolio:"Портфолио",video:"Видео",price:"Цены",contacts:"Контакты","hero-title":"Алекса Райс","hero-text":"Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом","hero-hire":"Пригласить","skill-title-1":"Фотография","skill-text-1":"Высококачественные фото в студии и на природе","skill-title-2":"Видеосъемка","skill-text-2":"Запечатлите лучшие моменты, чтобы они всегда оставались с вами","skill-title-3":"Ретушь","skill-text-3":"Я стремлюсь к тому, чтобы фотография превосходила реальность","skill-title-4":"Звук","skill-text-4":"Профессиональная запись звука для видео, рекламы, портфолио","portfolio-winter":"Зима","portfolio-spring":"Весна","portfolio-summer":"Лето","portfolio-autumn":"Осень","price-text-1-1":"Одна локация","price-text-1-2":"120 цветных фото","price-text-1-3":"12 отретушированных фото","price-text-1-4":"Готовность через 2-3 недели","price-text-1-5":"Макияж, визаж","price-text-2-1":"Одна-две локации","price-text-2-2":"200 цветных фото","price-text-2-3":"20 отретушированных фото","price-text-2-4":"Готовность через 1-2 недели","price-text-2-5":"Макияж, визаж","price-text-3-1":"Три локации и больше","price-text-3-2":"300 цветных фото","price-text-3-3":"50 отретушированных фото","price-text-3-4":"Готовность через 1 неделю","price-text-3-5":"Макияж, визаж, прическа","price-order":"Заказать съемку","contact-title":"Свяжитесь со мной","contact-e-mail":"Электронная почта","contact-phone":"Номер телефона","contact-message":"Сообщение","contact-send":"Отправить","footer-rss":"Школа Rolling Scopes"}},n=[...document.querySelectorAll("[data-i18n]")];const i="theme";const s="hamburger";const r="offcanvas";const a=new class{constructor(e){let{rootClassName:o}=e;const n=document.querySelector("".concat(o," .").concat(t));if(!(n instanceof HTMLDivElement))throw new Error("Language not found");const i=[...n.querySelectorAll(".".concat(t,"__link"))];this.$element=n,this.$element.addEventListener("click",(t=>{this.handleClick(t)})),this.$links=i,this.onChanged=()=>{}}handleClick(e){e.target instanceof HTMLAnchorElement&&(e.preventDefault(),e.target.classList.contains("".concat(t,"__link_active"))||this.$links.forEach((o=>{if(o===e.target)return o.classList.add("".concat(t,"__link_active")),o.removeAttribute("href"),void this.onChanged(o.dataset.language);o.classList.remove("".concat(t,"__link_active")),o.setAttribute("href","#".concat(o.dataset.language))})))}}({rootClassName:".header__language"}),c=new class{constructor(t){let{rootClassName:e}=t;const o=document.querySelector("".concat(e," .").concat(i));if(!(o instanceof HTMLButtonElement))throw new Error("Theme not found");this.$element=o,this.$element.addEventListener("click",(()=>{this.handleClick()})),this.onChanged=()=>{}}handleClick(){"dark"===this.$element.dataset.theme?(this.$element.dataset.theme="light",this.$element.classList.add("".concat(i,"_light")),this.$element.classList.remove("".concat(i,"_dark")),this.onChanged("light")):(this.$element.dataset.theme="dark",this.$element.classList.add("".concat(i,"_dark")),this.$element.classList.remove("".concat(i,"_light")),this.onChanged("dark"))}}({rootClassName:".header__theme"}),l=new class{constructor(t){let{rootClassName:e}=t;const o=document.querySelector("".concat(e," .").concat(s));if(!(o instanceof HTMLButtonElement))throw new Error("Offcanvas button not found");this.$element=o,this.$element.type="button",this.$element.ariaExpanded="false",this.$element.ariaPressed="false",this.$element.addEventListener("click",(t=>{this.handleButtonClick(t)})),this.pressed=!1,this.onPressed=()=>{}}get isPressed(){return this.pressed}set isPressed(t){this.pressed=t,this.$element.classList[t?"add":"remove"]("".concat(s,"_pressed")),this.$element.ariaExpanded=t?"true":"false",this.$element.ariaPressed=t?"true":"false",this.onPressed(t)}handleButtonClick(t){t.preventDefault(),this.isPressed=!this.isPressed}}({rootClassName:".header__mobile-navigation"}),d=new class{constructor(t){let{rootClassName:e}=t;const o=document.querySelector("".concat(e," .").concat(r));if(!(o instanceof HTMLDivElement))throw new Error("Offcanvas not found");const n=o.querySelector(".".concat(r,"__content")),i=o.querySelector(".".concat(r,"__overlay"));if(!(n instanceof HTMLDivElement&&i instanceof HTMLDivElement))throw new Error("Offcanvas element not found");this.$element=o,this.$element.ariaHidden="true",this.$element.style.visibility="hidden",this.$content=n,this.$content.addEventListener("click",(t=>{this.handleContentClick(t)})),this.$overlay=i,this.$overlay.addEventListener("click",(t=>{this.handleOverlayClick(t)})),this.displayed=!1,this.onDisplayed=()=>{}}get isDisplayed(){return this.displayed}set isDisplayed(t){this.displayed=t,document.body.style.paddingRight=t?"".concat(window.innerWidth-document.documentElement.clientWidth,"px"):"",document.body.style.overflow=t?"hidden":"",t?(this.$element.ariaHidden="false",this.$element.style.visibility=""):this.$content.addEventListener("transitionend",(()=>{this.$element.ariaHidden="true",this.$element.style.visibility="hidden"}),{once:!0}),this.$content.classList[t?"add":"remove"]("".concat(r,"__content_displayed")),this.$overlay.classList[t?"add":"remove"]("".concat(r,"__overlay_displayed")),this.onDisplayed(t)}handleContentClick(t){t.target instanceof HTMLAnchorElement&&(t.preventDefault(),this.$content.addEventListener("transitionend",(()=>{document.location.href=t.target.href}),{once:!0}),this.isDisplayed=!1)}handleOverlayClick(t){t.preventDefault(),this.isDisplayed=!1}}({rootClassName:".header__mobile-navigation"});a.onChanged=t=>{!function(t){n.forEach((o=>{const n=e[t][o.dataset.i18n];if("string"==typeof n){if(o instanceof HTMLInputElement||o instanceof HTMLTextAreaElement)return void(o.placeholder=n);o.textContent=n}})),document.documentElement.lang=t}(t)},c.onChanged=t=>{document.documentElement.classList["dark"===t?"remove":"add"]("theme-light")};let h=!1;l.onPressed=t=>{h=!0,d.isDisplayed=t},d.onDisplayed=t=>{h?h=!1:l.isPressed=t};o(321);new class{constructor(t){const e=document.querySelector(t);if(!(e instanceof HTMLFormElement))throw new Error("Form not found");this.$element=e,this.$element.addEventListener("submit",(t=>{this.handleSubmit(t)})),this.onSubmit=()=>{}}handleSubmit(t){t.preventDefault();const e=new FormData(this.$element),o={};e.forEach(((t,e)=>{o[e]=t.toString()})),this.onSubmit(o)}}(".contacts__form .form").onSubmit=t=>{console.log(JSON.stringify(t,void 0,"  "))};function m(t){console.log(t.title),t.criterions.forEach(((t,e)=>{let[o,n,i]=t;if(n>i)throw new RangeError("criterion[".concat(e,"][1] > criterion[").concat(e,"][2]"));console.log("".concat(o,": ").concat(n,"/").concat(i))}));const e=t.criterions.reduce(((t,e)=>{let[,o]=e;return t+o}),0);console.log("Итого: ".concat(e,"/").concat(t.maxPoints))}m({title:"Портфолио#1",criterions:[["Верстка валидная",10,10],["Верстка семантическая",20,20],["Верстка соответствует макету",48,48],["Требования к CSS",12,12],["Интерактивность, реализуемая через CSS",20,20]],maxPoints:100}),console.log("\n"),m({title:"Портфолио#2",criterions:[["Верстка соответствует макету. Ширина экрана 768px",48,48],["Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки",15,15],["На ширине экрана 768рх и меньше реализовано адаптивное меню",22,22]],maxPoints:75}),console.log("\n"),m({title:"Портфолио#3",criterions:[["Смена изображений в секции portfolio",25,25],["Перевод страницы на два языка",25,25],["Переключение светлой и темной темы",25,25],["Дополнительный функционал",5,10]],maxPoints:75})})()})();