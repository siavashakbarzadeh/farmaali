(()=>{"use strict";$(document).ready((function(){window.botbleCookieConsent=function(){var e,i=1,o=$("div[data-site-cookie-name]").data("site-cookie-name"),t=$("div[data-site-cookie-domain]").data("site-cookie-domain"),n=$("div[data-site-cookie-lifetime]").data("site-cookie-lifetime"),a=$("div[data-site-session-secure]").data("site-session-secure");function s(){var e,s,d,k;e=o,s=i,d=n,(k=new Date).setTime(k.getTime()+24*d*60*60*1e3),document.cookie=e+"="+s+";expires="+k.toUTCString()+";domain="+t+";path=/"+a,c()}function c(){$(".js-cookie-consent").hide()}return e=o,-1!==document.cookie.split("; ").indexOf(e+"="+i)&&c(),$(document).on("click",".js-cookie-consent-agree",(function(){s()})),{consentWithCookies:s,hideCookieDialog:c}}()}))})();