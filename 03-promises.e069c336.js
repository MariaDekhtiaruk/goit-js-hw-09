!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("iU1Pc");var r=t("h6c0i");function i(e,n){return new Promise((function(o,t){var r=Math.random()>.3,i={position:e,delay:n};setTimeout((function(){r?o(i):t(i)}),n)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,o=parseInt(n.delay.value),t=parseInt(n.step.value),a=parseInt(n.amount.value),l={delay:o,step:t,amount:a};console.log(l);for(var c=0;c<=a-1;c++){console.log(c),i(c,o+t*c).then((function(e){var n=e.position,o=e.delay;r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}}))}();
//# sourceMappingURL=03-promises.e069c336.js.map
